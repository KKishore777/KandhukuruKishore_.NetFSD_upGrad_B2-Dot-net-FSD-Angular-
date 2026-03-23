
// --- 1. DATABASE CONFIGURATION ---
const dbName = "EventDB";
const storeName = "events";
let db;

const request = indexedDB.open(dbName, 1);

request.onupgradeneeded = (e) => {
    db = e.target.result;
    if (!db.objectStoreNames.contains(storeName)) {
        const store = db.createObjectStore(storeName, { keyPath: "eventId" });
        store.createIndex("eventName", "eventName", { unique: false });
    }
};

request.onsuccess = (e) => {
    db = e.target.result;
    console.log("Database Ready");
    renderAdminEvents(); // Initial load for Admin
    renderHomeEvents();  // Initial load for Home
};

// --- 2. ADMIN PAGE PROTECTION ---
// Blocks non-admins from events.html, but allows access to index and registration
if (window.location.pathname.includes("events.html")) {
    if (sessionStorage.getItem('isAdmin') !== 'true') {
        alert("Access Denied! Please login as Admin to manage events.");
        window.location.href = "login.html";
    }
}

// --- 3. ADMIN: ADD EVENT ---
const addEventForm = document.getElementById('add-event-form');
if (addEventForm) {
    addEventForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const newEv = {
            eventId: document.getElementById('evId').value,
            eventName: document.getElementById('evName').value,
            eventCategory: document.getElementById('evCat').value,
            date: document.getElementById('evDate').value,
            time: document.getElementById('evTime').value,
            url: document.getElementById('evUrl').value
        };

        const transaction = db.transaction([storeName], "readwrite");
        const store = transaction.objectStore(storeName);
        const addRequest = store.add(newEv);

        addRequest.onsuccess = () => {
            alert("Event added successfully!");
            addEventForm.reset();
            renderAdminEvents();
        };
        addRequest.onerror = () => alert("Error: Event ID already exists!");
    });
}

// --- 4. SEARCH LOGIC ---
function searchEvents() {
    const searchInput = document.getElementById('searchInput');
    if (!searchInput) return;

    const searchVal = searchInput.value.toLowerCase().trim();
    // Selector for the category dropdown
    const categorySelect = document.querySelector('select.form-control.border-primary') || document.getElementById('searchCategory');
    const categoryVal = categorySelect ? categorySelect.value : "";

    if (!db) return;

    const transaction = db.transaction([storeName], "readonly");
    const store = transaction.objectStore(storeName);
    const getAllRequest = store.getAll();

    getAllRequest.onsuccess = () => {
        const allEvents = getAllRequest.result;
        const filteredEvents = allEvents.filter(ev => {
            const matchesText = ev.eventName.toLowerCase().includes(searchVal) || 
                               ev.eventId.toLowerCase().includes(searchVal);
            const matchesCategory = categoryVal === "" || ev.eventCategory === categoryVal;
            return matchesText && matchesCategory;
        });
        renderAdminEvents(filteredEvents);
    };
}

 

// --- 5. RENDER FUNCTIONS ---

// Unified Admin Render (Handles both full list and search results)
function renderAdminEvents(data = null) {
    const list = document.getElementById('admin-event-list') || document.getElementById('admin-list');
    if (!list || !db) return;

    if (data === null) {
        const transaction = db.transaction([storeName], "readonly");
        transaction.objectStore(storeName).getAll().onsuccess = (e) => {
            renderAdminEvents(e.target.result);
        };
        return;
    }

    if (data.length === 0) {
        list.innerHTML = "<div class='col-12'><p class='text-muted'>No events found.</p></div>";
        return;
    }

    list.innerHTML = data.map(ev => `
        <div class="col-md-4 mb-3" >
            <div class="p-4 border rounded shadow-sm  h-100"style="color:rgb(209, 209, 173)"">
                <h5 class="fw-bold ">${ev.eventName}</h5>
                <p class="mb-1"><strong>ID:</strong> ${ev.eventId}</p>
                <p class="mb-1"><strong>Category:</strong> ${ev.eventCategory}</p>
                <p class="mb-1"><strong>Date:</strong> ${ev.date}</p>
                <p class="mb-1"><strong>Time:</strong> ${ev.time}</p>
                <a href="index.html"><button  class="border border-secondary text-black text-center text-decoration-none p-1 w-100 rounded-2 mt-3">Join Event</button></a>
                <button class="btn btn-sm btn-danger mt-3 w-100 rounded-2" onclick="deleteEvent('${ev.eventId}')">Delete</button>
            </div>
        </div>
    `).join('');
}

//Admin Event Deletion
function deleteEvent(id) {
    if(confirm("Are you sure you want to delete this event?")) {
        const transaction = db.transaction([storeName], "readwrite");
        transaction.objectStore(storeName).delete(id).onsuccess = () => {
            renderAdminEvents();
            renderHomeEvents();
        };
    }
}
//Admin Logout

function logout() {
    sessionStorage.removeItem('isAdmin');
    window.location.href = "index.html";
}


// Home Page Render
function renderHomeEvents() {
    const hList = document.getElementById('home-event-list');
    if (!hList || !db) return;

    const transaction = db.transaction([storeName], "readonly");
    transaction.objectStore(storeName).getAll().onsuccess = (e) => {
        const data = e.target.result;
        hList.innerHTML = data.map(ev => `
            <div class="col-md-4 mb-4 ">
                <div class="p-4 border rounded shadow-sm  h-100"style="color:rgb(209, 209, 173)" >
                    <p class="h4"><b>${ev.eventName}</b></p>
                    <p class="mb-2"><b>Category:</b> ${ev.eventCategory}</p>
                    <p class="mb-2"><b>Date:</b> ${ev.date}</p>
                    <p class="mb-3"><b>Time:</b> ${ev.time}</p>
                    <button class="btn btn-primary w-100" onclick="goToRegister('${ev.eventId}')">Register</button>
                </div>
            </div>
        `).join('');
    };
}

// --- 6. REGISTRATION & HELPERS ---

function goToRegister(id) {
    sessionStorage.setItem('temp_reg_id', id);
    window.location.href = "registration.html";
}

// Logic for registration.html page
if (window.location.pathname.includes("registration.html")) {
    const regId = sessionStorage.getItem('temp_reg_id');
    
    // Wait for DB connection
    const regReq = indexedDB.open(dbName, 1);
    regReq.onsuccess = (e) => {
        const database = e.target.result;
        const transaction = database.transaction([storeName], "readonly");
        const store = transaction.objectStore(storeName);
        store.get(regId).onsuccess = (event) => {
            const ev = event.target.result;
            if (ev) {
                document.getElementById('reg-details').innerHTML = `
                    <p class="mb-2"><strong>ID:</strong> ${ev.eventId}</p>
                    <p class="mb-2"><strong>Name:</strong> ${ev.eventName}</p>
                    <p class="mb-2"><strong>Category:</strong> ${ev.eventCategory}</p>
                    <p class="mb-2"><strong>Date:</strong> ${ev.date}</p>
                    <p class="mb-2"><strong>Time:</strong> ${ev.time}</p>
                `;
            }
        };
    };
}

//Registration Form Submission
function formSubmit(){
    document.getElementById('reg-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevents page reload
    
    // If HTML5 validation passes, show the success alert
    alert("Registration Successfully Completed");
    window.location.href = "index.html";
    // Optional: Clear the form
    this.reset();
     
});
}


//Login for Admin

       function login(){
         document.getElementById('loginForm').onsubmit = (e) => {
            e.preventDefault();
            const email = document.getElementById('email').value;
            const pass = document.getElementById('pass').value;
            if(email === 'admin@upgrad.com' && pass === '12345') {
                sessionStorage.setItem('isAdmin', 'true');
                window.location.href = 'events.html';
            } else {
                alert('Invalid Credentials!');
            }
        };
       }
   

//Quary Submission
function contactSubmit(){
     document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevents page reload
    
    // If HTML5 validation passes, show the success alert
    alert("Quary submitted successfully!");
    window.location.href = "index.html";
    // Optional: Clear the form
    this.reset();
});

}
 