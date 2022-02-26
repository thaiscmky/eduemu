var passport = require('passport');
var LocalStrategy = require('passport-local');
const bcrypt = require('bcrypt');
const User = require('../models/User');

passport.use(new LocalStrategy(function verify(username_input, password_input, done) {
    
    User.findOne({
        where: {username: username_input}
    })
    .then(user => {
        if(!user)
            return done(null, false, {message: 'User not found'});
        const validated = bcrypt.compareSync(password_input, user.password);
        console.log('strategy', validated);
        if(!validated)
            return done(null, false, {message: 'Wrong password'});
        return user;
    })
    .then(user => {
        console.log(user);
        return {id: user.id, password: user.passport};
    })
    .catch(err => done(err));
  }));


module.exports = passport;