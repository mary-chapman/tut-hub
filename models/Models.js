Post = require('./post');
User = require('./user');
Vote = require('./vote');
Tag = require('./tag');
pry = require('pryjs')

const DB = {
  Post: Post,
  User: User,
  Vote: Vote,
  Tag: Tag
}

          eval(pry.it)
Vote.total(1)

DB.Vote.total(1)

module.exports = DB;
