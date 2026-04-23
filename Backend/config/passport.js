require('dotenv').config();
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const GitHubStrategy = require('passport-github2').Strategy;
const authController = require('../controllers/authController');

// 🔥 SERIALIZACIÓN
passport.serializeUser((user, done) => {
    done(null, user);
});

passport.deserializeUser((user, done) => {
    done(null, user);
});

// 🔥 GOOGLE
passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: "http://localhost:3000/auth/google/callback"
},
async (accessToken, refreshToken, profile, done) => {
    try {
        const user = await authController.googleAuth(profile);
        done(null, user);
    } catch (err) {
        done(err, null);
    }
}));

// 🔥 GITHUB
passport.use(new GitHubStrategy({
    clientID: process.env.GITHUB_CLIENT_ID,
    clientSecret: process.env.GITHUB_CLIENT_SECRET,
    callbackURL: "http://localhost:3000/auth/github/callback",
    scope: ['user:email']
},
async (accessToken, refreshToken, profile, done) => {
    try {
        let correo = null;

        if (profile.emails && profile.emails.length > 0) {
            correo = profile.emails[0].value;
        } else {
            correo = `${profile.username}@github.com`;
        }

        const fakeProfile = {
            displayName: profile.displayName || profile.username,
            emails: [{ value: correo }]
        };

        const user = await authController.googleAuth(fakeProfile);

        done(null, user);
    } catch (err) {
        done(err, null);
    }
}));

module.exports = passport;