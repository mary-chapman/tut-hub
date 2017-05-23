CREATE TABLE Users (
	id INT NOT NULL,
	username varchar NOT NULL UNIQUE,
	password varchar NOT NULL,
	PRIMARY KEY (id)
);
