const pool = require('../db');

module.exports = {
    data: async (req, res) => {
        let q = 'SELECT * FROM Main_Data';
        try {
            const [data] = await pool.query(q);
            res.render('mainshow.ejs', { Main_Data: data });
        } catch (err) {
            console.log(err);
            res.send('Some error in the database');
        }
    },

    states: async (req, res) => {
        let q1 = 'SELECT * FROM state_wise';
        let q2 = 'SELECT * FROM main_data';

        try {
            const [data] = await pool.query(q2);
            const [info] = await pool.query(q1);
            res.render('state_wise.ejs', { Main_Data: info, state_wise: data });
        } catch (err) {
            console.error(err);
            res.send('Some error in the database');
        }
    },

    ut: async (req, res) => {
        let q1 = 'SELECT * FROM ut_wise';
        let q2 = 'SELECT * FROM main_data';

        try {
            const [data] = await pool.query(q1);
            const [info] = await pool.query(q2);
            res.render('ut_wise.ejs', { Main_Data: info, ut_wise: data });
        } catch (err) {
            console.error(err);
            res.send('Some error in the database');
        }
    },

    home: async (req, res) => {
        let q1 = 'SELECT * FROM ut_wise';

        try {
            const [data] = await pool.query(q1);
            res.render('index.ejs', { ut_wise: data });
        } catch (err) {
            console.error(err);
            res.send('Some error in the database');
        }
    },

    stolen: async (req, res) => {
        let q1 = 'SELECT * FROM Property_Stolen';
        let q2 = 'SELECT * FROM main_data';

        try {
            const [info] = await pool.query(q2);
            const [data] = await pool.query(q1);
            res.render('Property_Stolen.ejs', { Main_Data: info, Property_Stolen: data });
        } catch (err) {
            console.error(err);
            res.send('Some error in the database');
        }
    },

    recovered: async (req, res) => {
        let q1 = 'SELECT * FROM Property_Recovered';
        let q2 = 'SELECT * FROM main_data';

        try {
            const [info] = await pool.query(q2);
            const [data] = await pool.query(q1);
            res.render('Property_Recovered.ejs', { Main_Data: info, Property_Recovered: data });
        } catch (err) {
            console.error(err);
            res.send('Some error in the database');
        }
    },

    percentage: async (req, res) => {
        let q1 = 'SELECT * FROM Property_RecoveryPercentage';
        let q2 = 'SELECT * FROM main_data';

        try {
            const [info] = await pool.query(q2);
            const [data] = await pool.query(q1);
            res.render('Percentage_Recovered.ejs', { Main_Data: info, Property_RecoveryPercentage: data });
        } catch (err) {
            console.error(err);
            res.send('Some error in the database');
        }
    },

    total: async (req, res) => {
        let q1 = 'SELECT * FROM TotalAnalysis';
        let q2 = 'SELECT * FROM main_data';
    
        try {
            const [info] = await pool.query(q2);
            const [data] = await pool.query(q1);
            res.render('TotalAnalysis.ejs', { Main_Data: info, TotalAnalysis: data });
        } catch (err) {
            console.error(err);
            res.send('Some error in the database');
        }
    },

    update_stolen: async (req, res) => {
        const { category, stateOrUT, stolen2014, stolen2015, stolen2016} = req.body;
      
        console.log(req.body);
      
        const sql = `
          UPDATE Property_Stolen 
          SET 
            Category = ?, 
            Value_Stolen_2014 = ?, 
            Value_Stolen_2015 = ?, 
            Value_Stolen_2016 = ? 
          WHERE StateorUT = ?
        `;
      
        try {
          await pool.query(sql, [category, stolen2014, stolen2015, stolen2016, stateOrUT]);
          res.redirect('/stolen'); // Redirect to the main page or any other appropriate page
        } catch (err) {
          console.error('Error updating data: ' + err.stack);
          res.status(500).send('Internal Server Error');
        }
      },

      update_recovered: async (req, res) => {
        const { category, stateOrUT, recovered2014, recovered2015, recovered2016} = req.body;
      
        console.log(req.body);
      
        const sql = `
          UPDATE Property_Recovered 
          SET 
            Category = ?, 
            Value_Recovered_2014 = ?, 
            Value_Recovered_2015 = ?, 
            Value_Recovered_2016 = ? 
          WHERE StateorUT = ?
        `;
      
        try {
          await pool.query(sql, [category, recovered2014, recovered2015, recovered2016, stateOrUT]);
          res.redirect('/recovered'); // Redirect to the main page or any other appropriate page
        } catch (err) {
          console.error('Error updating data: ' + err.stack);
          res.status(500).send('Internal Server Error');
        }
      },

      update_percentage: async (req, res) => {
        const { category, stateOrUT, percentage2014, percentage2015, percentage2016} = req.body;
      
        const sql = `
          UPDATE Property_RecoveryPercentage 
          SET 
            Category = ?, 
            Percentage_Recovery_2014 = ?, 
            Percentage_Recovery_2015 = ?, 
            Percentage_Recovery_2016 = ? 
          WHERE StateorUT = ?
        `;
      
        try {
          const result = await pool.query(sql, [category, percentage2014, percentage2015, percentage2016, stateOrUT]);
          console.log('Rows affected:', result[0].affectedRows);
          res.redirect('/percentage');
        } catch (err) {
          console.error('Error updating data:', err.message);
          res.status(500).send('Internal Server Error');
        }
      },      

};

