// @ts-nocheck
require('dotenv').config();
const express = require('express');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const jwt = require('jsonwebtoken');
const session = require('express-session');
const fs = require('fs');
const https = require('https');
const http = require('http');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 5000;
const pool = require('./config/database')
const key = fs.readFileSync('./ssl/key.pem');
const cert = fs.readFileSync('./ssl/cert.pem');

const httpsOptions = {
    key: key,
    cert: cert
};

// Create HTTPS server
const httpsServer = https.createServer(httpsOptions, app);

// Create HTTP server to redirect to HTTPS
const httpApp = express();
httpApp.use((req, res, next) => {

    if (!req.secure) {
        return res.redirect('https://' + req.headers.host + req.url);
    }
    next();
});



// Passport configuration
passport.use(new GoogleStrategy({
    // old
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    //new

    callbackURL: "/auth/google/callback",
},
    async (accessToken, refreshToken, profile, done) => {
        const email = profile.emails[0].value;
        const name = profile.displayName;
        const image = profile.photos[0].value;
        const provider = profile.provider;
        const providerAccountId = profile.id;

        pool.query('SELECT * FROM career_user WHERE email = ?', [email], (err, results) => {
            if (err) return done(err);
            if (results.length === 0) {
                pool.query(
                    'INSERT INTO career_user (email, name, image, provider, providerAccountId) VALUES (?, ?, ?, ?, ?)',
                    [email, name, image, provider, providerAccountId],
                    (err, results) => {
                        if (err) return done(err);
                        return done(null, profile);
                    }
                );
            } else {
                return done(null, profile);
            }
        });
    }));

passport.serializeUser((user, done) => {
    done(null, user);
});

passport.deserializeUser((obj, done) => {
    done(null, obj);
});

// Middleware
app.use(session({
    secret: '#;fknknl&67er-09258645fl;MIni(&84nhgd0989j)KmcljT7%$$#uththgNHN',
    resave: true,
    saveUninitialized: true
}));

app.use(passport.initialize());
app.use(passport.session());

// Routes
app.get('/auth/google', passport.authenticate('google', { scope: ['https://www.googleapis.com/auth/plus.login', 'email'] }));

app.get('/auth/google/callback',
    passport.authenticate('google', { failureRedirect: '/' }),
    (req, res) => {
        // console.log(req.user)
        const token = jwt.sign({ id: req.user.id }, '#&%^ghjTmchd*&*slkjoljJID54259GFMHN*jkdgbuyn9779)()*&bjjbjk,nshlmkhd%$$4165BYj76JNhgjk', { expiresIn: '1h' });
        const usdUhdsa = {
            id: req.user.id,
            name: req.user.displayName,
            email: req.user.emails,
            image: req.user.photos
        }

        const encryptFile = encodeURIComponent(JSON.stringify(usdUhdsa))
        const tkn = encodeURIComponent(token)
        // res.redirect(`http://localhost:3000`);Career
        // res.redirect(`http://localhost:3000/CandidateLogin?usdsa=${tkn}&info=${encryptFile}`);
        res.redirect(`http://localhost:3000/Career?usdsa=${tkn}&info=${encryptFile}`);

    }
);

app.get('/auth', (req, res) => {
    res.json({ token: req.query.token });
});

// app.listen(port, () => {
//     console.log(`Server running on port ${port}`);
// });

app.use(cors());
app.use(express.json());


// const appRegistration = require('./api/ApplicationReg/application.router');
const Career = require('./api/Carrer/carrer.router');
const getCommonQery = require('./api/CommonCode/common.router');
const Uploadfile = require('./api/uploadFile/upload.router');

// app.use('/api/app_registration', appRegistration)
app.use('/api/Career', Career)
app.use('/api/common', getCommonQery)
app.use('/api/upload', Uploadfile)

// console.log("ffcyfvy");
// Start servers
httpsServer.listen(5000, () => {
    console.log('HTTPS Server running on port 443');
});

http.createServer(httpApp).listen(5001, () => {
    console.log('HTTP Server running on port 80 and redirecting to HTTPS');
});