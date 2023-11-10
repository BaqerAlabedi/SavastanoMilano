const express = require('express');
const router = express.Router();
const User = require('../models/user');
const bcrypt = require('bcrypt');


router.get('/register', (req, res) => {
  res.send('Sign up page');
});

router.post('/register', (req, res) => {
  var { email, password } = req.body;
  console.log(req.body);

  if (!email || !password) {
    return res.status(422).json({ error: 'Add all data' });
  }

  User.findOne({ email: email })
    .then((savedUser) => {
      if (savedUser) {
        return res.status(422).json({ error: 'User already exists with that email' });
      }

      
      bcrypt.hash(password, 10, (err, hashedPassword) => {
        if (err) {
          console.log('Fel vid bcrypt.hash:', err);
          return res.status(500).json({ error: 'Error hashing password' });
        }

        const user = new User({
          email,
          password: hashedPassword, 
        });

        user.save()
          .then((user) => {
            res.json({ message: 'Saved Successfully' });
            console.log(user.email);
          })
          .catch((err) => {
            console.log('Fel vid user.save:', err);
            res.status(500).json({ error: 'Error saving user' });
          });
      });
    })
    .catch((err) => {
      console.log('Fel vid User.findOne:', err);
      res.status(500).json({ error: 'Error finding user' });
    });
});

router.get('/login', (req, res) => {
  res.send('Login page'); 
});

router.post('/login', (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(422).json({ error: 'Fyll i alla fält' });
  }

  User.findOne({ email: email })
    .then((user) => {
      if (!user) {
        return res.status(404).json({ error: 'Användaren finns inte' });
      }

      bcrypt.compare(password, user.password)
        .then((passwordMatch) => {
          if (!passwordMatch) {
            return res.status(401).json({ error: 'Fel lösenord' });
          }
          else{
            return res.status(200).json({message: 'login suc', userId: user._id});
          }

          res.json({ message: 'Inloggad framgångsrikt' });
        })
        .catch((err) => {
          console.log(`${user.password}`, err);
          res.status(500).json({ error: 'Något gick fel vid bcrypt.compare'});
        });
    })
    .catch((err) => {
      console.log('Fel vid User.findOne:', err);
      res.status(500).json({ error: 'Något gick fel vid User.findOne' });
    });
});

module.exports = router;
