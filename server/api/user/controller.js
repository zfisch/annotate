var User = require('./model');

/**
 * Return all users.
 */
exports.index = function(req, res) {
  User
    .findAll()
    .then(function(users) {
      console.log('Success! User - findAll(): ', users);
      
      res.json(200, users);
    })
    .catch(function(err) {
      console.log('Error! User - findAll(): ', err);
    });
};

/**
 * Return a single user.
 */
exports.show = function(req, res) {
  User
    .findOne({where: { user_id: req.params.user_id }})
    .then(function(user) {
      user.getMedia({where: {user_id: user.user_id}})
        .then(function(tasks) {
          res.json(200, user);
        }); 
    });






  // User
  //   .find(req.body.userId)
  //   // .find(req.params.userId) // or via user ID in param
  //   .then(function(user) {
  //     console.log('Success! User - find(): ', user);
      
  //     res.json(200, user);
  //   })
  //   .catch(function(err) {
  //     console.log('Error! User - find(): ', err);
  //   });
};

/**
 * Create user.
 */
exports.create = function(req, res) {
  User
    .find({username: req.body.username})
    .then(function(user) {
      if (!user) {
        User
          .create(req.body)
          .then(function(user, created) {
            console.log('Success! User - create(): ', user);
            res.json(201, user);
          })
          .catch(function(err) {
            console.log('Error! User - create(): ', err);
          });
      } else {
        res.json(409, 'user already exists');
      }
    })
    .catch(function(err) {
      console.log('Error! User - find(): ', err);
    });
};

/**
 * Update user.
 */
exports.update = function(req, res) {

};

/**
 * Delete user.
 */
exports.destroy = function(req, res) {

};