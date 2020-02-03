const router = require('express').Router();
const Values = require('./values-model.js');
const restrict = require('../auth/restrict.js');
//const db = require('../data/values.js');


router.get('/', restrict, (req, res) => {
  Values.find()
    .then(values => {
      res.json(values);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({message: 'GET Error for /.'});
    });
});
 

router.get('/:id', restrict, async (req, res, next) => {
  try {
    const { id } = req.params
    const value = await Values.findById(id)
    return res.json(value)
  } catch (err) {
    next(err)
  }
});

router.post('/', restrict, (req, res) => {
  Values.insert(req.body)
      .then(newValue => {
          res.status(201).json(newValue);
      })
      .catch(err => {
          res.status(500).json({ errorMessage: "Error creating new value." });
      })
});

router.put('/:id', restrict, (req, res) => {
  Values.update(req.params.id, req.body)
      .then(updatedValue => {
          res.status(200).json(updatedValue);
      })
      .catch(err => res.status(500).json({ errorMessage: "Error with update." }));
});

router.delete('/:id', restrict, (req, res) => {
  Values.remove(req.params.id)
      .then(removedValue => res.status(200).json(removedValue))
      .catch(err => res.status(500).json({ errorMessage: "Error deleting the value." }));
});

module.exports = router;
