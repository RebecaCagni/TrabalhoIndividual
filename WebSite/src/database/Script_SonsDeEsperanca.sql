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
 
create table visualizacao (
idVizualizar int primary key auto_increment,
fkUsuario int,
indice int,
constraint fk foreign key (fkUsuario)
references usuario(id)
);


select * from aula;

select  count(indice) as qtd_assistidas from aula
group by indice order by indice;

SELECT COUNT(indice) AS qtd_assistidas 
FROM aula 
GROUP BY indice 
ORDER BY indice;

CREATE TABLE aviso (
	id INT PRIMARY KEY AUTO_INCREMENT,
	titulo VARCHAR(100),
	descricao VARCHAR(150),
	fk_usuario INT,
	FOREIGN KEY (fk_usuario) REFERENCES usuario(id)
);

select * from aula;

select * from aviso;

select count(NomeInstrumento) from questionario 
group by nomeInstrumento;

desc instrumento;


