CREATE TABLE Votes (
	id INT NOT NULL,
	is_up BOOLEAN NOT NULL,
	user_id INT NOT NULL,
	tutorial_id INT NOT NULL,
	PRIMARY KEY (id)
);
