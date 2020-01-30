const jwt = require('jsonwebtoken');

//token payload, secret, and options
function createToken(user) {
  const payload = {
    username: user.username,
    id: user.id,
  };
  const secret = process.env.JWT_SECRET || 'Something super secret here';

  const options = {
    expiresIn: '7d',
  };
;
  return jwt.sign(payload, secret, options);
}


module.exports = {
  createToken
};