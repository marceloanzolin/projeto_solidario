
CREATE TABLE tblitemdoar (
                coditemdoar INT NOT NULL,
                dsitemdoar VARCHAR(80) NOT NULL,
                PRIMARY KEY (coditemdoar)
);


CREATE TABLE tblusuario (
                codusuario INT AUTO_INCREMENT NOT NULL,
                dsnome VARCHAR(40) NOT NULL,
                dsfone1 VARCHAR(15),
                dsfone2 VARCHAR(15),
                dsemail VARCHAR(80),
                dscpf VARCHAR(20) NOT NULL,
                dstipo VARCHAR(1) NOT NULL,
                dssenha VARCHAR(10) NOT NULL,
                PRIMARY KEY (codusuario)
);


CREATE TABLE tblinstituicao (
                codinstituicao INT AUTO_INCREMENT NOT NULL,
                nminstituicao VARCHAR(40) NOT NULL,
                dsendereco VARCHAR(40) NOT NULL,
                dscep VARCHAR(15) NOT NULL,
                dsfone1 VARCHAR(15) NOT NULL,
                dsfone2 VARCHAR(15),
                dsemail VARCHAR(80),
                dslinkmaps VARCHAR(400),
                dsdescricao VARCHAR(400) NOT NULL,
                dsstatus VARCHAR(1) NOT NULL,
                PRIMARY KEY (codinstituicao)
);


CREATE TABLE tblcampanha (
                codcampanha INT NOT NULL,
                dscampanha VARCHAR(40) NOT NULL,
                dsdescricao VARCHAR(80) NOT NULL,
                dsstatus VARCHAR(1) NOT NULL,
                codinstituicao INT NOT NULL,
                dtinicio DATE NOT NULL,
                dtfim DATE,
                coditemdoar INT NOT NULL,
                PRIMARY KEY (codcampanha)
);


CREATE TABLE tbllocaldoacao (
                codlocaldoacao INT AUTO_INCREMENT NOT NULL,
                codcampanha INT NOT NULL,
                dslocal VARCHAR(40) NOT NULL,
                dsendereco VARCHAR(200) NOT NULL,
                dscep VARCHAR(15) NOT NULL,
                dslinkmaps VARCHAR(400),
                dsfone1 VARCHAR(20),
                PRIMARY KEY (codlocaldoacao)
);


CREATE TABLE tbldoacao (
                coddacao INT AUTO_INCREMENT NOT NULL,
                codusuario INT NOT NULL,
                dtdoacao DATE NOT NULL,
                codinstituicao INT NOT NULL,
                codcampanha INT NOT NULL,
                codlocaldoacao INT,
                PRIMARY KEY (coddacao)
);


CREATE TABLE tblitemdoacao (
                coditemdoacao INT AUTO_INCREMENT NOT NULL,
                coddacao INT NOT NULL,
                coditemdoar INT NOT NULL,
                PRIMARY KEY (coditemdoacao)
);


ALTER TABLE tblcampanha ADD CONSTRAINT tblitemdoar_tblcampanha_fk
FOREIGN KEY (coditemdoar)
REFERENCES tblitemdoar (coditemdoar)
ON DELETE NO ACTION
ON UPDATE NO ACTION;

ALTER TABLE tblitemdoacao ADD CONSTRAINT tblitemdoar_tblitemdoacao_fk
FOREIGN KEY (coditemdoar)
REFERENCES tblitemdoar (coditemdoar)
ON DELETE NO ACTION
ON UPDATE NO ACTION;

ALTER TABLE tbldoacao ADD CONSTRAINT tblusuario_tbldoacao_fk
FOREIGN KEY (codusuario)
REFERENCES tblusuario (codusuario)
ON DELETE NO ACTION
ON UPDATE NO ACTION;

ALTER TABLE tblcampanha ADD CONSTRAINT tblinstituicao_tblcampanha_fk
FOREIGN KEY (codinstituicao)
REFERENCES tblinstituicao (codinstituicao)
ON DELETE NO ACTION
ON UPDATE NO ACTION;

ALTER TABLE tbldoacao ADD CONSTRAINT tblinstituicao_tbldoacao_fk
FOREIGN KEY (codinstituicao)
REFERENCES tblinstituicao (codinstituicao)
ON DELETE NO ACTION
ON UPDATE NO ACTION;

ALTER TABLE tbllocaldoacao ADD CONSTRAINT tblcampanha_tbllocaldoacao_fk
FOREIGN KEY (codcampanha)
REFERENCES tblcampanha (codcampanha)
ON DELETE NO ACTION
ON UPDATE NO ACTION;

ALTER TABLE tbldoacao ADD CONSTRAINT tblcampanha_tbldoacao_fk
FOREIGN KEY (codcampanha)
REFERENCES tblcampanha (codcampanha)
ON DELETE NO ACTION
ON UPDATE NO ACTION;

ALTER TABLE tbldoacao ADD CONSTRAINT tbllocaldoacao_tbldoacao_fk
FOREIGN KEY (codlocaldoacao)
REFERENCES tbllocaldoacao (codlocaldoacao)
ON DELETE NO ACTION
ON UPDATE NO ACTION;

ALTER TABLE tblitemdoacao ADD CONSTRAINT tbldoacao_tblitemdoacao_fk
FOREIGN KEY (coddacao)
REFERENCES tbldoacao (coddacao)
ON DELETE NO ACTION
ON UPDATE NO ACTION;
