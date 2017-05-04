CREATE TABLE Tutorials (
	id INT NOT NULL,
	user_id varchar NOT NULL,
	title varchar NOT NULL,
	url varchar,
	content varchar,
	price varchar,
	date_created DATETIME NOT NULL,
	PRIMARY KEY (id)
);
