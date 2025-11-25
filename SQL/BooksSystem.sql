/*==============================================================*/
/* DBMS name:      MySQL 5.0                                    */
/* Created on:     2025/11/11 18:10:28                          */
/*==============================================================*/


drop table if exists Adminster;

drop table if exists Book;

drop table if exists UserMessage;

drop table if exists Users;

/*==============================================================*/
/* Table: Adminster                                             */
/*==============================================================*/
create table Adminster
(
   AdminsterID          int not null auto_increment,
   AdminsterName        varchar(20) not null,
   AdminsterPwd         varchar(20) not null,
   primary key (AdminsterID)
);

/*==============================================================*/
/* Table: Book                                                  */
/*==============================================================*/
create table Book
(
   BookID               int not null auto_increment,
   UserID               int not null,
   BookVisitTime        int,
   BookUrl              varchar(256),
   BookUserID           int not null,
   BookPublic           bool not null,
   primary key (BookID)
);

/*==============================================================*/
/* Table: UserMessage                                           */
/*==============================================================*/
create table UserMessage
(
   UMID                 int not null auto_increment,
   UserID               int,
   UMGender             bool,
   UMBirthday           date,
   UMIntroduce          text,
   primary key (UMID)
);

/*==============================================================*/
/* Table: Users                                                 */
/*==============================================================*/
create table Users
(
   UserID               int not null auto_increment,
   UserName             varchar(20) not null,
   UserPwd              varchar(20) not null,
   UserPhoneNumber      char(11),
   UserEmail            varchar(40),
   primary key (UserID)
);

alter table Book add constraint FK_Process foreign key (UserID)
      references Users (UserID) on delete cascade on update cascade;

alter table UserMessage add constraint FK_Belong foreign key (UserID)
      references Users (UserID) on delete cascade on update cascade;

