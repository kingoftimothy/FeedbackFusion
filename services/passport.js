const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const GithubStrategy = require('passport-github').Strategy;
const mongoose = require('mongoose');
const keys = require('../config/keys');

const User = mongoose.model('users');

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser((id, done) => {
    User.findById(id).then(user => {
        done(null, user);
    });
});

passport.use(
    new GithubStrategy({
        clientID: keys.githubClientID,
        clientSecret: keys.githubClientSecret,
        callbackURL: '/auth/github/callback'
    }, (accessToken, refreshToken, profile, done) => {
        User.findOne({ githubId: profile.id }).then(existingUser => {
            if (existingUser) {
                // already have record with given profile ID
                done(null, existingUser);
            } else {
                // dont have user record with this profile ID -> make new record
                new User({ githubId: profile.id }).save()
                    .then(user => done(null, user));
            }
        });
    })
);

passport.use(
    new GoogleStrategy({
        clientID: keys.googleClientID,
        clientSecret: keys.googleClientSecret,
        callbackURL: '/auth/google/callback'
    }, (accessToken, refreshToken, profile, done) => {
        User.findOne({ googleId: profile.id }).then(existingUser => {
            if (existingUser) {
                // already have record with given profile ID
                done(null, existingUser);
            } else {
                // dont have user record with this profile ID -> make new record
                new User({ googleId: profile.id }).save()
                    .then(user => done(null, user));
            }
        });
    })
);