--=======================================================
--RETO 1
--======================================================
CREATE TABLE Barcos(
    ID NUMBER(10) NOT NULL,
    BRAND VARCHAR2(20) NULL,
    MODEL NUMBER(10) NULL,
    CATEGORY_ID NUMBER(10) NOT NULL,
    NAME VARCHAR2(4000) NULL,
    PRIMARY KEY(ID)
);
CREATE SEQUENCE barcos_seq START WITH 1 INCREMENT BY 1;

CREATE OR REPLACE TRIGGER barcos_seq_tr
BEFORE INSERT ON Barcos FOR EACH ROW
WHEN(NEW.ID IS NULL)
BEGIN
SELECT barcos_seq.NEXTVAL INTO :NEW.ID FROM DUAL;
END;

-------------------------------------------------------
--MANEJADOR GET
SELECT * FROM Barcos
-------------------------------------------------------

-------------------------------------------------------
--MANEJADOR POST
BEGIN
    INSERT INTO Barcos (ID, BRAND, MODEL, CATEGORY_ID, NAME)
    VALUES(:id, :brand, :model, :category_id, :name);
    :status_code := 201;
END;
-------------------------------------------------------

-------------------------------------------------------
--MANEJADOR PUT
BEGIN
    UPDATE Barcos
    SET BRAND = :brand
    , MODEL = :model
    , CATEGORY_ID = :category_id
    , NAME = :name
    WHERE ID = :id;
    :status_code := 201;
END;
-------------------------------------------------------

-------------------------------------------------------
--MANEJADOR DELETE
BEGIN
    DELETE FROM Barcos
    WHERE ID = :id;
    :status_code :=204;
END;
-------------------------------------------------------

-------------------------------------------------------
--SENTENCIA PARA LA SEGUNDA PLANTILLA
SELECT * FROM Barcos WHERE ID = :id