const sqlite3 = require('sqlite3').verbose();
const { open } = require('sqlite');
const path = require('path');

const dbPromise = open({
  filename: path.join(__dirname, 'data.db'),
  driver: sqlite3.Database
});

module.exports = {
  all: async (sql, params = []) => (await dbPromise).all(sql, params),
  get: async (sql, params = []) => (await dbPromise).get(sql, params),
  run: async (sql, params = []) => (await dbPromise).run(sql, params)
};

