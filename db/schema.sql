

DROP DATABASE IF EXISTS burgers_db

CREATE DATABASE burgers_db

USE burgers_db

CREATE TABLE burgers(
	id INT NOT NULL AUTO_INCREMENT,
	burger_name varchar(255) NOT NULL,
	devoured BOOLEAN DEFAULT false,
	createdAt TIMESTAMP NOT NULL,
	PRIMARY KEY (id)
)

INSERT INTO burgers(burger_name) 
VALUES('Cheeseburger'),('BBQ Burger'),('Veggie Burger')