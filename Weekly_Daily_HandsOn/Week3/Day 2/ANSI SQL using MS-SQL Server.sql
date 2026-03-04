create database EventDb
use EventDb 

create table UserInfo(
EmailId varchar(50) primary key,
UserName varchar(50) Not Null,
Role varchar(50) Not Null,
Password varchar(15) Not Null
)

create table  EventDetails (
EventId int primary key,
EventName varchar(50) Not Null,
EventCategory varchar(50) Not Null,
EventDate datetime Not Null,
Description varchar(100) Null,
Status varchar(50) not Null
)

create table SpeakersDetails (
SpeakerId int primary key,
SpeakerName varchar(50) Not Null
)

create table SessionInfo (
SessionId int primary key,
EventId int Not Null,
SessionTitle varchar(50) Not Null, 
SpeakerId int Not Null,
Description varchar(50) Null,
SessionStart datetime Not Null,
SessionEnd datetime Not Null ,
SessionUrl varchar (20),
foreign key(EventId) references EventDetails(EventId),
foreign key(SpeakerId) references SpeakersDetails (SpeakerId)
)

create table ParticipantEventDetails  (
Id int primary key,
ParticipantEmailId varchar(50)  Not Null,
EventId int Not Null,
SessionId Int Not Null ,
IsAttended bit not null,
foreign key(EventId) references EventDetails(EventId),
foreign key(SessionId) references SessionInfo (SessionId),
foreign key(ParticipantEmailId) references UserInfo(EmailId)
)



select * from ParticipantEventDetails

INSERT INTO UserInfo VALUES
('admin@gmail.com','AdminUser','Admin','admin123'),
('kishore@gmail.com','Kishore','Participant','pass123');



INSERT INTO EventDetails VALUES
(1,'Tech Conference','Technology','2026-04-10','Annual Tech Event','Active');

INSERT INTO SpeakersDetails VALUES
(101,'John Smith');


INSERT INTO SessionInfo VALUES
(1001,1,'AI Session',101,'Introduction to AI',
 '2026-04-10 10:00:00',
 '2026-04-10 12:00:00',
 'www.ai-session.com');


 INSERT INTO ParticipantEventDetails VALUES
(1,'kishore@gmail.com',1,1001,1);
 






 SELECT * FROM EventDetails
 SELECT * FROM EventDetails WHERE Status = 'Active'
 SELECT *FROM SpeakersDetails WHERE SpeakerName LIKE '%John%'

 



 

 

 




 




 


















 

  

 



 

  


