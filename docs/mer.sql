
CREATE TABLE tblitemdoar (
                coditemdoar INTEGER NOT NULL,
                dsitemdoar VARCHAR(80) NOT NULL,
                CONSTRAINT coditemdoar PRIMARY KEY (coditemdoar)
);


CREATE TABLE tblusuario (
                codusuario INTEGER NOT NULL,
                dsnome VARCHAR(40) NOT NULL,
                dsfone1 VARCHAR(15),
                dsfone2 VARCHAR(15),
                dsemail VARCHAR(80),
                dscpf VARCHAR(20) NOT NULL,
                dstipo VARCHAR(1) NOT NULL,
                dssenha VARCHAR(10) NOT NULL,
                CONSTRAINT codusuario PRIMARY KEY (codusuario)
);


CREATE TABLE tblinstituicao (
                codinstituicao INTEGER NOT NULL,
                dsemail VARCHAR(80),
                dssenha VARCHAR(10) NOT NULL,
                nminstituicao VARCHAR(40) NOT NULL,
                dsendereco VARCHAR(40) NOT NULL,
                dsdescricao VARCHAR(400) NOT NULL,
                dscep VARCHAR(15) NOT NULL,
                dsfone1 VARCHAR(15) NOT NULL,
                dsfone2 VARCHAR(15),
                dslinkmaps VARCHAR(400),
                dsstatus VARCHAR(1) NOT NULL,
                logo BLOB,
                CONSTRAINT codinstituicao PRIMARY KEY (codinstituicao)
);


CREATE TABLE tblcampanha (
                codcampanha INTEGER NOT NULL,
                dscampanha VARCHAR(40) NOT NULL,
                dsdescricao VARCHAR(80) NOT NULL,
                dsstatus VARCHAR(1) NOT NULL,
                codinstituicao INTEGER NOT NULL,
                dtinicio DATE NOT NULL,
                dtfim DATE,
                dsitemdoar VARCHAR(4000) NOT NULL,
                CONSTRAINT codcampanha PRIMARY KEY (codcampanha)
);


CREATE TABLE tbllocaldoacao (
                codlocaldoacao INTEGER NOT NULL,
                codcampanha INTEGER NOT NULL,
                dslocal VARCHAR(40) NOT NULL,
                dsendereco VARCHAR(200) NOT NULL,
                dscep VARCHAR(15) NOT NULL,
                dslinkmaps VARCHAR(400),
                dsfone1 VARCHAR(20),
                CONSTRAINT codlocaldoacao PRIMARY KEY (codlocaldoacao)
);


CREATE TABLE tbldoacao (
                coddacao INTEGER NOT NULL,
                dtdoacao DATE NOT NULL,
                codinstituicao INTEGER NOT NULL,
                codcampanha INTEGER NOT NULL,
                codlocaldoacao INTEGER,
                CONSTRAINT coddoacao PRIMARY KEY (coddacao)
);


ALTER TABLE tblcampanha ADD CONSTRAINT tblInstituicao_tblcampanha_fk
FOREIGN KEY (codinstituicao)
REFERENCES tblinstituicao (codinstituicao)
ON DELETE NO ACTION
ON UPDATE NO ACTION
NOT DEFERRABLE;

ALTER TABLE tbldoacao ADD CONSTRAINT tblinstituicao_tbldoacao_fk
FOREIGN KEY (codinstituicao)
REFERENCES tblinstituicao (codinstituicao)
ON DELETE NO ACTION
ON UPDATE NO ACTION
NOT DEFERRABLE;

ALTER TABLE tbllocaldoacao ADD CONSTRAINT tblcampanha_tbllocaldoacao_fk
FOREIGN KEY (codcampanha)
REFERENCES tblcampanha (codcampanha)
ON DELETE NO ACTION
ON UPDATE NO ACTION
NOT DEFERRABLE;

ALTER TABLE tbldoacao ADD CONSTRAINT tblcampanha_tbldoacao_fk
FOREIGN KEY (codcampanha)
REFERENCES tblcampanha (codcampanha)
ON DELETE NO ACTION
ON UPDATE NO ACTION
NOT DEFERRABLE;

ALTER TABLE tbldoacao ADD CONSTRAINT tbllocaldoacao_tbldoacao_fk
FOREIGN KEY (codlocaldoacao)
REFERENCES tbllocaldoacao (codlocaldoacao)
ON DELETE NO ACTION
ON UPDATE NO ACTION
NOT DEFERRABLE;
