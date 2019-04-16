/*==============================================================*/
/* DBMS name:      MySQL 5.0                                    */
/* Created on:     23/10/2018 06:35:46 p. m.                    */
/*==============================================================*/

drop table if exists USER;

/*==============================================================*/
/* Table: USER                                                  */
/*==============================================================*/
create table USER
(
   id                   int not null auto_increment,
   username             text,
   pass                 text,
   code                 text,
   accessToken          text,
   phone                numeric(8,0),
   primary key (id)
);
