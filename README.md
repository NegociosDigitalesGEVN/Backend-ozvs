# Creación de BackEnd
## Instrucciones
Clonar repositorio
```
git clone https://github.com/NegociosDigitalesGEVN/Backend-ozvs.git
```
## Creación de la base de datos
Crear una base de datos en MySql llamada apliweb
```
create database apliweb;
```
Crear una tabla llamada tbl_usuario
```
create table tbl_usuario (
	email varchar(100) primary key,
	password varchar(250) not null,
	role varchar(20) not null
);
```
Insertar el usuario de acuerdo a los siguientes datos
```
insert into tbl_usuario(email, password, role) values ('apliweb@gmail.com', '123456','admin');
```
## LOGIN
### URL
```
http://localhost:3000
```
### POST
```
{
"email": "apliweb@gmail.com",
"password": "123456"
}
```
## Peticiones
### URL
```
http://localhost:3000/usuario
```
### POST
```
{
    "email":"apli@gmail.com",
    "password":"123456",
    "role":"admin"
}
```
### PUT
```
{
"email":"apli@gmail.com",
    "password":"admin"
}
```
### Delete
```
{
    "email":"apli@gmail.com"
}
```
