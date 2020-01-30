const router = require('express').Router();
const Users = require('./users-model.js');
const restrict = require('../auth/restrict.js');
//const db = require('../data/users.js');


router.get('/', restrict, (req, res) => {
  Users.find()
    .then(users => {
      res.json(users);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({message: 'GET Error for /.'});
    });
});


router.get('/:id', restrict, async (req, res, next) => {
  try {
    const { id } = req.params
    const user = await Users.findById(id)
    return res.json(user)
  } catch (err) {
    next(err)
  }
});

// router.post('/', restrict, (req, res) => {
//   Users.insert(req.body)
//       .then(newUser => {
//           res.status(201).json(newUser);
//       })
//       .catch(err => {
//           res.status(500).json({ errorMessage: "Error creating new user." });
//       })
// });

router.put('/:id', restrict, (req, res) => {
  Users.update(req.params.id, req.body)
      .then(updatedUser => {
          res.status(200).json(updatedUser);
      })
      .catch(err => res.status(500).json({ errorMessage: "Error with update." }));
});

router.delete('/:id', restrict, (req, res) => {
  Users.remove(req.params.id)
      .then(removedUser => res.status(200).json(removedUser))
      .catch(err => res.status(500).json({ errorMessage: "Error deleting the user." }));
});

module.exports = router;
