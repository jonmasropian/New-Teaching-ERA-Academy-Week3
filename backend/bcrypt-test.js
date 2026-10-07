const bcrypt = require('bcryptjs');
 
// Hash a password
const plainPassword = 'John@1234';
const hash = bcrypt.hashSync(plainPassword, 10);
console.log('Hash:', hash);
 
// Compare the correct password
const match = bcrypt.compareSync(plainPassword, hash);
console.log('Correct password match:', match);
 
// Compare a wrong password
const noMatch = bcrypt.compareSync('wrongpassword', hash);
console.log('Wrong password match:', noMatch);