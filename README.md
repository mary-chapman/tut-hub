# tutorial-thingy

### using knex for migrations

#### install knex migrations cli
```
npm install knex -g
```

if there is no knexfile.js - the file which contains our various database configurations.

```
knex init
```

#### create new migrations
to create a new migration:
```
knex migrate:make migration_name
```
replace `migration_name` with the name of the migration. something like `add_details_to_users` or `create_comments` . It will create a file that is timestamped like `20170520122711_create_ratings` in './migrations'.

#### edit migration
go to your newly created file in './migrations' and you will find
```javascript
exports.up = function(knex, Promise) {

};

exports.down = function(knex, Promise) {

};
```

in the `exports.up` function, you will write code to be run when the migration runs. While `exports.down` is what runs to roll-back the migration. (usually used to undo what is done in exports.up). Syntax for schema building can be found [here on the knex docs page](http://knexjs.org/#Schema-Building).
here is a sample:
```javascript
exports.up = function(knex, Promise) {

  return knex.schema.createTable('ratings', function (table) {
    table.increments('id').unsigned().primary();
    table.integer('rating').notNull();
    table.integer('user_id').unsigned().notNull().references('id').inTable('users');
    table.integer('tutorial_id').unsigned().notNull().references('id').inTable('tutorials');
    table.timestamps();
  })

};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('ratings')
};
```
here we're creating a table called 'ratings' with the columns id, rating, user_id, tutorial_id. Each column has some properties associated with it.

#### run migrations
Once you have finished writing the migrations, you can update the database matching your NODE_ENV by running:
```
knex migrate:latest
```
To rollback the last batch of migrations:
```
knex migrate:rollback
```

Migrations are run in the order they were created so try and create main tables and columns before you create things that depend on them.

### Seed files using knex CLI

To create a seed file, execute:
```
knex seed:make seed_name
```
replacing `seed_name` with what you're seeding.. `users` `tutorials` `tags` ..etc

this will create a file in "./seeds/dev"
[docs located here](http://knexjs.org/#Seeds-CLI)


To run seed files, execute:
```
knex seed:run
```
##### seed files are run in ALPHABETICAL ORDER so make sure you create dependent items first.
We will be numbering our seed files as such
```
1_users_see.js
2_posts_seed.js
```

### next up, creating models with bookshelf.js
