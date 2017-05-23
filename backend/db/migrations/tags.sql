CREATE TABLE Tags (
	id INT NOT NULL,
	name varchar NOT NULL UNIQUE,
	count INT NOT NULL,
	PRIMARY KEY (id)
);
