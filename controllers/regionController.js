const pool = require('../db'); // Import the database connection

module.exports = {
    north: async (req, res) => {
        let q1 = 'SELECT SerialNo, Category, Location, StateorUT, Value_Stolen_2014, Value_Recovered_2014, Percentage_Recovery_2014, Value_Stolen_2015, Value_Recovered_2015, Percentage_Recovery_2015, Value_Stolen_2016, Value_Recovered_2016, Percentage_Recovery_2016 FROM Main_Data WHERE Location = "North"';
        let q2 = 'SELECT * FROM Main_Data';
        try {
            const [data] = await pool.query(q1);
            const [info] = await pool.query(q2);
            res.render('north.ejs', { Main_Data: data ,Main_Data:info});
        } catch (err) {
            console.error(err);
            res.send('Some error in the database');
        }
    },

    east: async (req, res) => {
        let q1 = 'SELECT SerialNo, Category, Location, StateorUT, Value_Stolen_2014, Value_Recovered_2014, Percentage_Recovery_2014, Value_Stolen_2015, Value_Recovered_2015, Percentage_Recovery_2015, Value_Stolen_2016, Value_Recovered_2016, Percentage_Recovery_2016 FROM Main_Data WHERE Location = "East"';
        let q2 = 'SELECT * FROM Main_Data';
        try {
            const [data] = await pool.query(q1);
            const [info] = await pool.query(q2);
            res.render('east.ejs', { Main_Data: data,Main_Data:info });
        } catch (err) {
            console.error(err);
            res.send('Some error in the database');
        }
    },

    west: async (req, res) => {
        let q1 = 'SELECT SerialNo, Category, Location, StateorUT, Value_Stolen_2014, Value_Recovered_2014, Percentage_Recovery_2014, Value_Stolen_2015, Value_Recovered_2015, Percentage_Recovery_2015, Value_Stolen_2016, Value_Recovered_2016, Percentage_Recovery_2016 FROM Main_Data WHERE Location = "West"';
        let q2 = 'SELECT * FROM Main_Data';
        try {
            const [data] = await pool.query(q1);
            const [info] = await pool.query(q2);
            res.render('west.ejs', { Main_Data: data ,Main_Data:info});
        } catch (err) {
            console.error(err);
            res.send('Some error in the database');
        }
    },

    south: async (req, res) => {
        let q1 = 'SELECT SerialNo, Category, Location, StateorUT, Value_Stolen_2014, Value_Recovered_2014, Percentage_Recovery_2014, Value_Stolen_2015, Value_Recovered_2015, Percentage_Recovery_2015, Value_Stolen_2016, Value_Recovered_2016, Percentage_Recovery_2016 FROM Main_Data WHERE Location = "South"';
        let q2 = 'SELECT * FROM Main_Data';
        try {
            const [data] = await pool.query(q1);
            const [info] = await pool.query(q2);
            res.render('south.ejs', { Main_Data: data ,Main_Data:info});
        } catch (err) {
            console.error(err);
            res.send('Some error in the database');
        }
    },

    central: async (req, res) => {
        let q1 = 'SELECT SerialNo, Category, Location, StateorUT, Value_Stolen_2014, Value_Recovered_2014, Percentage_Recovery_2014, Value_Stolen_2015, Value_Recovered_2015, Percentage_Recovery_2015, Value_Stolen_2016, Value_Recovered_2016, Percentage_Recovery_2016 FROM Main_Data WHERE Location = "Central"';
        let q2 = 'SELECT * FROM Main_Data';
        try {
            const [data] = await pool.query(q1);
            const [info] = await pool.query(q2);
            res.render('central.ejs', { Main_Data: data ,Main_Data:info});
        } catch (err) {
            console.error(err);
            res.send('Some error in the database');
        }
    },

    delete_north: async (req, res) => {
        const { stateOrUT } = req.body;

        const sql = `DELETE FROM Main_Data WHERE StateorUT = ? AND Location = 'North'`;

        try {
            const { stateOrUT } = req.body;
            console.log('Deleting for StateorUT:', stateOrUT);

            const sql = `DELETE FROM Main_Data WHERE StateorUT = ? AND Location = 'North'`;
            console.log('SQL Query:', sql);

            const result = await pool.query(sql, [stateOrUT]);
            console.log('Rows affected:', result[0].affectedRows);

            if (result[0].affectedRows > 0) {
                res.redirect('/north');
            } else {
                res.send('No record found for deletion.');
            }
        } catch (err) {
            console.error('Error deleting data:', err.message);
            res.status(500).send('Internal Server Error');
        }
    },

    delete_east: async (req, res) => {
        const { stateOrUT } = req.body;

        const sql = `DELETE FROM Main_Data WHERE StateorUT = ? AND Location = 'East'`;

        try {
            const { stateOrUT } = req.body;
            console.log('Deleting for StateorUT:', stateOrUT);

            const sql = `DELETE FROM Main_Data WHERE StateorUT = ? AND Location = 'East'`;
            console.log('SQL Query:', sql);

            const result = await pool.query(sql, [stateOrUT]);
            console.log('Rows affected:', result[0].affectedRows);

            if (result[0].affectedRows > 0) {
                res.redirect('/east');
            } else {
                res.send('No record found for deletion.');
            }
        } catch (err) {
            console.error('Error deleting data:', err.message);
            res.status(500).send('Internal Server Error');
        }
    },

    add_west: async (req, res) => {
        try {
            const {
                serialNo,
                category,
                location,
                stateOrUT,
                valueStolen2014,
                valueRecovered2014,
                percentageRecovery2014,
                valueStolen2015,
                valueRecovered2015,
                percentageRecovery2015,
                valueStolen2016,
                valueRecovered2016,
                percentageRecovery2016
            } = req.body;

            console.log(req.body);

            const sql = `
                INSERT INTO Main_Data (
                    SerialNo,
                    Category,
                    Location,
                    StateorUT,
                    Value_Stolen_2014,
                    Value_Recovered_2014,
                    Percentage_Recovery_2014,
                    Value_Stolen_2015,
                    Value_Recovered_2015,
                    Percentage_Recovery_2015,
                    Value_Stolen_2016,
                    Value_Recovered_2016,
                    Percentage_Recovery_2016
                ) VALUES (?, ?, ?, ?, ? , ?, ?, ?, ?, ?, ?, ?, ?)
            `;

            const values = [
                serialNo,
                category,
                location,
                stateOrUT,
                valueStolen2014,
                valueRecovered2014,
                percentageRecovery2014,
                valueStolen2015,
                valueRecovered2015,
                percentageRecovery2015,
                valueStolen2016,
                valueRecovered2016,
                percentageRecovery2016
            ];

            await pool.query(sql, values, (error, results) => {
                if (error) {
                    console.error('Error executing query:', error.message);
                    res.status(500).send('Internal Server Error');
                } else {
                    console.log('Rows affected:', results.affectedRows);
                        console.log('Record added successfully.');
                    res.redirect('/west');
                }
            });

        } catch (err) {
            console.error('Error adding data:', err.message);
            res.status(500).send('Internal Server Error');
        }
    },

    add_south: async (req, res) => {
        try {
            const {
                serialNo,
                category,
                location,
                stateOrUT,
                valueStolen2014,
                valueRecovered2014,
                percentageRecovery2014,
                valueStolen2015,
                valueRecovered2015,
                percentageRecovery2015,
                valueStolen2016,
                valueRecovered2016,
                percentageRecovery2016
            } = req.body;

            console.log(req.body);

            const sql = `
                INSERT INTO Main_Data (
                    SerialNo,
                    Category,
                    Location,
                    StateorUT,
                    Value_Stolen_2014,
                    Value_Recovered_2014,
                    Percentage_Recovery_2014,
                    Value_Stolen_2015,
                    Value_Recovered_2015,
                    Percentage_Recovery_2015,
                    Value_Stolen_2016,
                    Value_Recovered_2016,
                    Percentage_Recovery_2016
                ) VALUES (?, ?, ?, ?, ? , ?, ?, ?, ?, ?, ?, ?, ?)
            `;

            const values = [
                serialNo,
                category,
                location,
                stateOrUT,
                valueStolen2014,
                valueRecovered2014,
                percentageRecovery2014,
                valueStolen2015,
                valueRecovered2015,
                percentageRecovery2015,
                valueStolen2016,
                valueRecovered2016,
                percentageRecovery2016
            ];

            await pool.query(sql, values, (error, results) => {
                if (error) {
                    console.error('Error executing query:', error.message);
                    res.status(500).send('Internal Server Error');
                } else {
                    console.log('Rows affected:', results.affectedRows);
                        console.log('Record added successfully.');
                    res.redirect('/south');
                }
            });

        } catch (err) {
            console.error('Error adding data:', err.message);
            res.status(500).send('Internal Server Error');
        }
    },

    add_central: async (req, res) => {
        try {
            const {
                serialNo,
                category,
                location,
                stateOrUT,
                valueStolen2014,
                valueRecovered2014,
                percentageRecovery2014,
                valueStolen2015,
                valueRecovered2015,
                percentageRecovery2015,
                valueStolen2016,
                valueRecovered2016,
                percentageRecovery2016
            } = req.body;

            console.log(req.body);

            const sql = `
                INSERT INTO Main_Data (
                    SerialNo,
                    Category,
                    Location,
                    StateorUT,
                    Value_Stolen_2014,
                    Value_Recovered_2014,
                    Percentage_Recovery_2014,
                    Value_Stolen_2015,
                    Value_Recovered_2015,
                    Percentage_Recovery_2015,
                    Value_Stolen_2016,
                    Value_Recovered_2016,
                    Percentage_Recovery_2016
                ) VALUES (?, ?, ?, ?, ? , ?, ?, ?, ?, ?, ?, ?, ?)
            `;

            const values = [
                serialNo,
                category,
                location,
                stateOrUT,
                valueStolen2014,
                valueRecovered2014,
                percentageRecovery2014,
                valueStolen2015,
                valueRecovered2015,
                percentageRecovery2015,
                valueStolen2016,
                valueRecovered2016,
                percentageRecovery2016
            ];

            await pool.query(sql, values, (error, results) => {
                if (error) {
                    console.error('Error executing query:', error.message);
                    res.status(500).send('Internal Server Error');
                } else {
                    console.log('Rows affected:', results.affectedRows);
                        console.log('Record added successfully.');
                    res.redirect('/central');
                }
            });

        } catch (err) {
            console.error('Error adding data:', err.message);
            res.status(500).send('Internal Server Error');
        }
    },

};    