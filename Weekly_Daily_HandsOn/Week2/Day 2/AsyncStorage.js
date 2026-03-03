
let taskList = [];

//CALLBACK VERSION


const createTaskCallback = (taskName, done) => {
    setTimeout(() => {
        taskList.push(taskName);
        done(null, `Task "${taskName}" created (Callback)`);
    }, 1000);
};

const showTasksCallback = (done) => {
    setTimeout(() => {
        done(null, `Current Tasks: ${taskList.join(", ")}`);
    }, 1000);
};


// Callback Demo
createTaskCallback("Morning Exercise", (err, msg) => {
    if (err) return console.log(err);

    console.log(msg);

    showTasksCallback((err, data) => {
        if (err) return console.log(err);
        console.log(data);
    });
});

// PROMISE VERSION


const createTaskPromise = (taskName) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (!taskName) {
                reject("Task name is required");
            } else {
                taskList.push(taskName);
                resolve(`Task "${taskName}" created (Promise)`);
            }
        }, 1000);
    });
};

const showTasksPromise = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`Current Tasks: ${taskList.join(", ")}`);
        }, 1000);
    });
};


// Promise Demo
createTaskPromise("Complete Assignment")
    .then(msg => {
        console.log(msg);
        return showTasksPromise();
    })
    .then(data => console.log(data))
    .catch(error => console.log("Error:", error));

// ASYNC / AWAIT VERSION

const removeTaskAsync = (taskName) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            taskList = taskList.filter(item => item !== taskName);
            resolve(`Task "${taskName}" removed (Async/Await)`);
        }, 1000);
    });
};

const executeAsyncFlow = async () => {
    try {
        console.log(await createTaskPromise("Build Portfolio"));
        console.log(await showTasksPromise());
        console.log(await removeTaskAsync("Morning Exercise"));
        console.log(await showTasksPromise());
    } catch (error) {
        console.log("Error:", error);
    }
};

executeAsyncFlow();