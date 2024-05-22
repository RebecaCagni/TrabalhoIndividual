create database SonsDeEsperanca;

use SonsDeEsperanca;

create table usuario (
id int primary key auto_increment,
nome varchar(50),
email varchar(50),
senha varchar(50)
);

select * from usuario;

create table questionario  (
idQuestionario int primary key auto_increment
);

create table instrumento (
idInstrumento int,
fkUsuario int,
constraint FKUsuarioQuestionario foreign key (fkUsuario)
references usuario(id),
fkQuestionario int,
constraint FKQuestInstrumento foreign key (fkQuestionario)
references questionario(idQuestionario),
constraint pkComposta primary key (idInstrumento, fkUsuario, fkQuestionario),
pontuacao varchar(10),
nomeInstrumento varchar(40)
);

create table aula (
idAula int primary key auto_increment,
descricao varchar (70),
url varchar(45),
fkUsuario int,
constraint fk foreign key (fkUsuario)
references usuario(id)
);
