const pool = require('../db');

exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;

        const sql = 'SELECT * FROM USERDATA WHERE email = ? AND password = ?';
        const results = await pool.query(sql, [email, password]);

        if (results.length > 0 && results[0].email === email && results[0].password === password) {
            // Valid login credentials
            console.log('Login successful');
            return res.redirect('/home');
        } else {
            // Invalid email or password
            console.log('Invalid email or password');
            return res.redirect('/login');
        }
    } catch (error) {
        console.error('Error during login:', error);
        return res.redirect('/login');
    }
};

exports.register = async (req, res) => {
    try {
        const { email, password, username } = req.body;

        // Validate that email is not null before inserting into the database
        if (!email) {
            return res.status(400).json({ success: false, message: 'Email cannot be null' });
        }

        const sql = 'INSERT INTO USERDATA (email, password, userName) VALUES (?, ?, ?)';
        await pool.query(sql, [email, password, username]);

        console.log('User registered successfully');
        return res.redirect('/home');  // Redirect to the home page or any other page after successful registration
    } catch (error) {
        console.error('Error registering user:', error);
        return res.status(500).json({ success: false, message: 'Error registering user' });
    }
};
