const jwt = require('jsonwebtoken');
//client side token authorization being added on top of cookie sessions

const authenticate = (req, res, next) => {
  const { authorization } = req.headers

  if (authorization) {
    const secret = process.env.JWT_SECRET || 'Something super secret here'
    jwt.verify(authorization, secret, function(error, decodeToken) {
      if (error) {
        res.status(401).json({ message: 'Invalid token'})
      } else {
        req.token = decodeToken;
        next()
      }
    })
  } else {
    res.status(400).json({ message: 'Token error!'})
  };
}; 

module.exports = {
  authenticate
}