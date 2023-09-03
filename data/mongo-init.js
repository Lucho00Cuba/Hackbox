db = db.getSiblingDB('hackbox')

db.createUser({
    user: 'hackbox',
    pwd: 'mongo_pass',
    roles: [
      {
        role: 'dbOwner',
      db: 'hackbox',
    },
  ],
});