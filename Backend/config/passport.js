const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const { googleAuth } = require('../controllers/authController');

passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: "http://localhost:3000/auth/google/callback"
},
async (accessToken, refreshToken, profile, done) => {
    try {
        const usuario = await googleAuth(profile);
        return done(null, usuario);
    } catch (error) {
        return done(error, null);
    }
}));

passport.serializeUser((user, done) => done(null, user));
passport.deserializeUser((user, done) => done(null, user));

module.exports = passport;