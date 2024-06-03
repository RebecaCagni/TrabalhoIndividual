create database SonsDeEsperanca;

use SonsDeEsperanca;

create table usuario (
id int primary key auto_increment,
nome varchar(50),
email varchar(50),
senha varchar(50)
);


create table questionario (
idInstrumento int auto_increment,
fkUsuario int,
constraint FKUsuarioQuestionario foreign key (fkUsuario)
references usuario(id),
constraint pkComposta primary key (idInstrumento, fkUsuario),
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
select * from questionario;

select count(NomeInstrumento) from questionario 
group by nomeInstrumento;

desc instrumento;
