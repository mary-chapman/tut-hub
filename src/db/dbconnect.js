const connectionString = process.env.DATABASE_URL || `127.0.0.1:5432`;
var knex = require('knex')({
  client: 'pg',
  debug: true,
  connection: {
    host: '127.0.0.1',
    port: 5432,
    database: 'tuthub'
  }
});

var bookshelf = require('bookshelf')(knex);



var User = bookshelf.Model.extend({
  tableName: 'users',
  posts: function() {
    return this.hasMany(Posts);
  }
});

var Post = bookshelf.Model.extend({
  tableName: 'tutorials',
  user: function(){
    return this.belongsTo(User)
  },
  tags: function() {
    return this.belongsToMany(Tag);
  }
});

var Tag = bookshelf.Model.extend({
  tableName: 'tags'
})
