--=======================================================
--                        RETO 2
--======================================================
--             TABLA CLIENT
--======================================================
CREATE TABLE CLIENT(
    ID NUMBER(10) NOT NULL,
    NAME VARCHAR(4000) NULL,
    EMAIL VARCHAR2(100) NULL,
    AGE NUMBER NULL,
    PRIMARY KEY(ID)
);

-------------------------------------------------------
--MANEJADOR GET CLIENT
SELECT * FROM CLIENT
-------------------------------------------------------
-------------------------------------------------------
--MANEJADOR POST CLIENT
BEGIN
    INSERT INTO CLIENT (ID, NAME, EMAIL, AGE)
    VALUES(:id, :name, :email, :age);
    :status_code := 201;
END;
-------------------------------------------------------
-------------------------------------------------------
--MANEJADOR PUT CLIENT
BEGIN
    UPDATE CLIENT
    SET NAME = :name,
    EMAIL = :email,
    AGE = :age
    WHERE ID = :id;
    :status_code := 201;
END;
-------------------------------------------------------
-------------------------------------------------------
--MANEJADOR DELETE CLIENT
BEGIN
    DELETE FROM CLIENT
    WHERE ID = :id;
    :status_code :=204;
END;
-------------------------------------------------------
-------------------------------------------------------
--SENTENCIA PARA LA SEGUNDA PLANTILLA CLIENT/:ID
SELECT * FROM CLIENT WHERE ID = :id
-------------------------------------------------------

--======================================================
--             TABLA MESSAGE
--======================================================
CREATE TABLE MESSAGE(
    ID NUMBER(10) NOT NULL,
    MESSAGETEXT VARCHAR2(4000) NULL,
    PRIMARY KEY(ID)
);
-------------------------------------------------------
--MANEJADOR GET MESSAGE
SELECT * FROM MESSAGE
-------------------------------------------------------
-------------------------------------------------------
--MANEJADOR POST MESSAGE
BEGIN
    INSERT INTO MESSAGE (ID, MESSAGETEXT)
    VALUES(:id, :messagetext);
    :status_code := 201;
END;
-------------------------------------------------------
-------------------------------------------------------
--MANEJADOR PUT MESSAGE
BEGIN
    UPDATE MESSAGE
    SET MESSAGETEXT = :messagetext
    WHERE ID = :id;
    :status_code := 201;
END;
-------------------------------------------------------
-------------------------------------------------------
--MANEJADOR DELETE MESSAGE
BEGIN
    DELETE FROM MESSAGE
    WHERE ID = :id;
    :status_code :=204;
END;
-------------------------------------------------------
-------------------------------------------------------
--SENTENCIA PARA LA SEGUNDA PLANTILLA MESSAGE/:ID
SELECT * FROM MESSAGE WHERE ID = :id
-------------------------------------------------------