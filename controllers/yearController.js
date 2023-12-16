const pool = require('../db');

module.exports = {
  data2014: async (req, res) => {
    let q1 = 'SELECT * FROM data_2014';
    let q2 = 'SELECT * FROM main_data';

    try {
      const [data] = await pool.query(q1);
      const [info] = await pool.query(q2);

      res.render('data_2014.ejs', { Main_Data: info, data_2014: data });
    } catch (err) {
      console.error(err);
      res.send('Some error in the database');
    }
  },

  data2015: async (req, res) => {
    let q1 = 'SELECT * FROM data_2015';
    let q2 = 'SELECT * FROM main_data';

    try {
      const [data] = await pool.query(q1);
      const [info] = await pool.query(q2);

      res.render('data_2015.ejs', { Main_Data: info, data_2015: data });
    } catch (err) {
      console.error(err);
      res.send('Some error in the database');
    }
  },

  data2016: async (req, res) => {
    let q1 = 'SELECT * FROM data_2016';
    let q2 = 'SELECT * FROM main_data';

    try {
      const [data] = await pool.query(q1);
      const [info] = await pool.query(q2);

      res.render('data_2016.ejs', { Main_Data: info, data_2016: data });
    } catch (err) {
      console.error(err);
      res.send('Some error in the database');
    }
  },

  update_2014: async (req, res) => {
    const { category, stateOrUT, valueStolen, valueRecovered, percentageRecovery } = req.body;
  
    console.log(req.body);
  
    const sql = `
      UPDATE data_2014 
      SET 
        Category = ?, 
        Value_Stolen_2014 = ?, 
        Value_Recovered_2014 = ?, 
        Percentage_Recovery_2014 = ? 
      WHERE StateorUT = ?
    `;
  
    try {
      await pool.query(sql, [category, valueStolen, valueRecovered, percentageRecovery, stateOrUT]);
      res.redirect('/2014'); // Redirect to the main page or any other appropriate page
    } catch (err) {
      console.error('Error updating data: ' + err.stack);
      res.status(500).send('Internal Server Error');
    }
  },

  update_2015: async (req, res) => {
    const { category, stateOrUT, valueStolen, valueRecovered, percentageRecovery } = req.body;
  
    console.log(req.body);
  
    const sql = `
      UPDATE data_2015 
      SET 
        Category = ?, 
        Value_Stolen_2015 = ?, 
        Value_Recovered_2015 = ?, 
        Percentage_Recovery_2015 = ? 
      WHERE StateorUT = ?
    `;
  
    try {
      await pool.query(sql, [category, valueStolen, valueRecovered, percentageRecovery, stateOrUT]);
      res.redirect('/2015'); // Redirect to the main page or any other appropriate page
    } catch (err) {
      console.error('Error updating data: ' + err.stack);
      res.status(500).send('Internal Server Error');
    }
  },

  update_2016: async (req, res) => {
    const { category, stateOrUT, valueStolen, valueRecovered, percentageRecovery } = req.body;
  
    console.log(req.body);
  
    const sql = `
      UPDATE data_2016 
      SET 
        Category = ?, 
        Value_Stolen_2016 = ?, 
        Value_Recovered_2016 = ?, 
        Percentage_Recovery_2016 = ? 
      WHERE StateorUT = ?
    `;
  
    try {
      await pool.query(sql, [category, valueStolen, valueRecovered, percentageRecovery, stateOrUT]);
      res.redirect('/2016'); // Redirect to the main page or any other appropriate page
    } catch (err) {
      console.error('Error updating data: ' + err.stack);
      res.status(500).send('Internal Server Error');
    }
  },

};