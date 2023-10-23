/* eslint-disable no-multi-str */
/*var crypto = require('crypto');
var sqlite3 = require('sqlite3');
var mkdirp = require('mkdirp');

mkdirp.sync('./var/db');

var db = new sqlite3.Database('./var/db/bonsai.db');

db.serialize(() => {
	// create the database schema for the todos app
	db.run(
		'CREATE TABLE IF NOT EXISTS users ( \
    id INTEGER PRIMARY KEY, \
    username TEXT UNIQUE, \
    hashed_password BLOB, \
    salt BLOB, \
    name TEXT, \
    mailchain_address TEXT UNIQUE, \
    mailchain_address_verified INTEGER, \
    email TEXT UNIQUE, \
    email_verified INTEGER \
)',
	);

	db.run(
		'CREATE TABLE IF NOT EXISTS federated_credentials ( \
    id INTEGER PRIMARY KEY, \
    user_id INTEGER NOT NULL, \
    provider TEXT NOT NULL, \
    subject TEXT NOT NULL, \
    UNIQUE (provider, subject) \
  )',
	);

	db.run(
		'CREATE TABLE IF NOT EXISTS bonsai ( \
    id INTEGER PRIMARY KEY, \
    owner_id INTEGER NOT NULL \
   )',
	);

  db.run(
		'CREATE TABLE IF NOT EXISTS scammers ( \
    id INTEGER PRIMARY KEY, \
    phone_number INTEGER, \
    name TEXT, \
    aliases TEXT, \
    numbers INTEGER, \
)',
	);*/

	// create an initial user (username: alice, password: letmein)
	/*var salt = crypto.randomBytes(16);
	db.run('INSERT OR IGNORE INTO users (username, hashed_password, salt) VALUES (?, ?, ?)', [
		'alice',
		crypto.pbkdf2Sync('letmein', salt, 310000, 32, 'sha256'),
		salt,
	]);
//create scammers
db.run('INSERT OR IGNORE INTO scammers (phone_number, name, aliases, numbers) VALUES (?, ?, ?, ?)', [
  '0708211732',
  'Joseph Okumu',
  ['Baba Liam', 'Peter Nerdy', 'Evans C Rono'],
  ['0792623598', '0711874273', '0799283461']
]);

db.run('INSERT OR IGNORE INTO scammers (phone_number, name, aliases, numbers) VALUES (?, ?, ?, ?)', [
  '0793767753',
  'Baba Liam',
  ['Joseph Okumu', 'Peter Nerdy', 'Evans C Rono'],
  ['0792623598', '0711874273', '0799283461', '0708211732']
]);
db.run('INSERT OR IGNORE INTO scammers (phone_number, name, aliases, numbers) VALUES (?, ?, ?, ?)', [
  '0799283461',
  'Evans C Rono',
  ['Baba Liam', 'Joseph Okumu', 'Peter Nerdy', 'Evans C Rono'],
  ['0792623598', '0711874273', '0708211732']
]);

db.run('INSERT OR IGNORE INTO scammers (phone_number, name, aliases, numbers) VALUES (?, ?, ?, ?)', [
  '0706310869',
  'Kido Malo',
  ['Mike Mwash', 'Atiko Sell', 'Mike Mwaposa', 'Benard Kirui','Salim Jumah', 'Muindi Caleb', 'Solomon Mkundi', 'Erastus Lotiani'],
  ['0701710653','0704616113', '0715761548', '0702254291','0725221939']
]);

db.run('INSERT OR IGNORE INTO scammers (phone_number, name, aliases, numbers) VALUES (?, ?, ?, ?)', [
  '0704616113',
  'Mike Mwaposa',
  ['Kido Malo', 'Mike Mwash', 'Atiko Sell', 'Mike Mwaposa', 'Benard Kirui','Salim Jumah', 'Muindi Caleb', 'Solomon Mkundi', 'Erastus Lotiani'],
  ['0701710653','0706310869', '0715761548', '0702254291','0725221939']
]);

db.run('INSERT OR IGNORE INTO scammers (phone_number, name, aliases, numbers) VALUES (?, ?, ?, ?)', [
  '0701710653',
  'Benard Kirui',
  ['Kido Malo', 'Mike Mwash', 'Atiko Sell', 'Mike Mwaposa', 'Salim Jumah', 'Muindi Caleb', 'Solomon Mkundi', 'Erastus Lotiani'],
  ['0704616113', '0706310869', '0715761548', '0702254291','0725221939']
]);

db.run('INSERT OR IGNORE INTO scammers (phone_number, name, aliases, numbers) VALUES (?, ?, ?, ?)', [
  '0715761548',
  'Salim Jumah',
  ['Kido Malo', 'Mike Mwash', 'Atiko Sell', 'Mike Mwaposa', 'Benard Kirui', 'Muindi Caleb', 'Solomon Mkundi', 'Erastus Lotiani'],
  ['0704616113', '0706310869', '0701710653', '0702254291','0725221939']
]);
db.run('INSERT OR IGNORE INTO scammers (phone_number, name, aliases, numbers) VALUES (?, ?, ?, ?)', [
  '0702254291',
  'Mike Mwash',
  ['Kido Malo', 'Atiko Sell', 'Mike Mwaposa', 'Benard Kirui', 'Muindi Caleb', 'Solomon Mkundi', 'Erastus Lotiani'],
  ['0704616113', '0706310869', '0701710653', '0715761548','0725221939']
]);

db.run('INSERT OR IGNORE INTO scammers (phone_number, name, aliases, numbers) VALUES (?, ?, ?, ?)', [
  '0725221939',
  'John Mwedusa',
  ['Kido Malo', 'Atiko Sell', 'Mike Mwaposa', 'Benard Kirui', 'Muindi Caleb', 'Solomon Mkundi', 'Erastus Lotiani'],
  ['0704616113', '0706310869', '0701710653', '0715761548', '0702254291']
]);

db.run('INSERT OR IGNORE INTO scammers (phone_number, name, aliases, numbers) VALUES (?, ?, ?, ?)', [
  '0705604212',
  'Joseph Awibwa',
  ['Joseph Mbugua', 'Diana Achieng', 'Ekati David', 'Laalat Chesoen', 'Edwin Mogaka', 'Evans Mogaka', 'Peter Ageyo'],
  ['0718330690']
]);

db.run('INSERT OR IGNORE INTO scammers (phone_number, name, aliases, numbers) VALUES (?, ?, ?, ?)', [
  '0718330690',
  'Joseph Mbugua',
  ['Joseph Awibwa', 'Diana Achieng', 'Ekati David', 'Laalat Chesoen', 'Edwin Mogaka', 'Evans Mogaka', 'Peter Ageyo'],
  ['0705604212']
]);*/
//});

//module.exports = db;
