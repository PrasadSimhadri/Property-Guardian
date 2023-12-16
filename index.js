const express = require('express');
const path = require('path');
const methodOverride = require('method-override');
const ejsMate = require('ejs-mate');
const basicController = require('./routes/route');

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.engine('ejs', ejsMate);

app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));
app.use(express.static(path.join(__dirname, 'public')));

// Use the basicController for routes
app.use('/', basicController);



const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.get('/login', async (req, res) => {
  // Check if email and password are provided in the request body
  if (
    req.body.email === null ||
    req.body.email === undefined ||
    req.body.email === '' ||
    !validator.isEmail(req.body.email) ||
    req.body.password === null ||
    req.body.password === undefined ||
    req.body.password === ''
  ) {
    return res.status(400).send({ message: 'Missing details.' });
  }

  let db_connection = await db.promise().getConnection();

  try {
    // Check if it's the user's first login
    let [user] = await db_connection.query('SELECT * FROM USERDATA WHERE email = ?', [req.body.email]);

    if (user.length > 0) {
      if (user[0].isFirstLogin === 1) {
        // First-time login logic
        // ... Generate and send OTP, update isFirstLogin flag
        // Example: sendOTP(user[0].email);
        // Example: await db_connection.query('UPDATE USERDATA SET isFirstLogin = 0 WHERE email = ?', [user[0].email]);

        // Render the login.ejs page
        return res.render('login.ejs', {
          message: 'First time login! OTP sent to email.',
          isFirstLogin: true,
          // Additional data if needed
        });
      } else {
        // Regular login logic
        // ... Check password, update login status

        // Render the login.ejs page
        return res.render('login.ejs', {
          message: 'User logged in!',
          isFirstLogin: false,
          // Additional data if needed
        });
      }
    } else {
      return res.status(400).send({ message: 'Invalid email or password!' });
    }

  } catch (err) {
    console.error(err);
    return res.status(500).send({ message: 'Internal Server Error' });
  } finally {
    db_connection.release();
  }
});

app.listen(3000, () => {
  console.log(`Server is running on port 3000`);
});


