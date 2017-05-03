CREATE TABLE `Users` (
	`id` INT NOT NULL,
	`username` varchar NOT NULL UNIQUE,
	`password` varchar NOT NULL,
	PRIMARY KEY (`id`)
);

CREATE TABLE `Tutorials` (
	`id` INT NOT NULL,
	`user_id` varchar NOT NULL,
	`title` varchar NOT NULL,
	`url` varchar,
	`content` varchar,
	`price` varchar,
	`date_created` DATETIME NOT NULL,
	PRIMARY KEY (`id`)
);

CREATE TABLE `Tags` (
	`id` INT NOT NULL,
	`name` varchar NOT NULL UNIQUE,
	`count` INT NOT NULL,
	PRIMARY KEY (`id`)
);

CREATE TABLE `TutorialTags` (
	`id` INT NOT NULL,
	`tag_id` INT NOT NULL,
	`tutorial_id` INT NOT NULL,
	PRIMARY KEY (`id`)
);

CREATE TABLE `Votes` (
	`id` INT NOT NULL,
	`is_up` BOOLEAN NOT NULL,
	`user_id` INT NOT NULL,
	`tutorial_id` INT NOT NULL,
	PRIMARY KEY (`id`)
);

CREATE TABLE `DifficultyRatings` (
	`id` INT NOT NULL,
	`user_id` INT NOT NULL,
	`tutorial_id` INT NOT NULL,
	`Rating` INT NOT NULL,
	PRIMARY KEY (`id`)
);

ALTER TABLE `Tutorials` ADD CONSTRAINT `Tutorials_fk0` FOREIGN KEY (`user_id`) REFERENCES `Users`(`id`);

ALTER TABLE `TutorialTags` ADD CONSTRAINT `TutorialTags_fk0` FOREIGN KEY (`tag_id`) REFERENCES `Tags`(`id`);

ALTER TABLE `TutorialTags` ADD CONSTRAINT `TutorialTags_fk1` FOREIGN KEY (`tutorial_id`) REFERENCES `Tutorials`(`id`);

ALTER TABLE `Votes` ADD CONSTRAINT `Votes_fk0` FOREIGN KEY (`user_id`) REFERENCES `Users`(`id`);

ALTER TABLE `Votes` ADD CONSTRAINT `Votes_fk1` FOREIGN KEY (`tutorial_id`) REFERENCES `Tutorials`(`id`);

ALTER TABLE `DifficultyRatings` ADD CONSTRAINT `DifficultyRatings_fk0` FOREIGN KEY (`user_id`) REFERENCES `Users`(`id`);

ALTER TABLE `DifficultyRatings` ADD CONSTRAINT `DifficultyRatings_fk1` FOREIGN KEY (`tutorial_id`) REFERENCES `Tutorials`(`id`);
