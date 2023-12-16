const pool = require('../db');

module.exports = {
    telangana: async(req, res) => {
        let q1 = 'SELECT * FROM Main_Data WHERE StateorUT ="Telangana"';
        let q2 = 'SELECT * FROM Main_Data';
    
        try {
            const[data] = await pool.query(q1);
            const[info] = await pool.query(q2);
            res.render('Telangana.ejs', { Main_Data: data  });
        } catch (err) {
            console.error(err);
            res.send('Some error in the database');
        }
    },

    andhra_pradesh: async(req, res) => {
        let q1 = 'SELECT * FROM Main_Data WHERE StateorUT ="Andhra Pradesh"';
        let q2 = 'SELECT * FROM Main_Data';
    
        try {
            const[data] = await pool.query(q1);
            const[info] = await pool.query(q2);
            res.render('andhra.ejs', { Main_Data: data });
        } catch (err) {
            console.error(err);
            res.send('Some error in the database');
        }
    },

    arunachal_pradesh: async(req, res) => {
        let q1 = 'SELECT * FROM Main_Data WHERE StateorUT ="Arunachal Pradesh"';
        let q2 = 'SELECT * FROM Main_Data';
    
        try {
            const[data] = await pool.query(q1);
            const[info] = await pool.query(q2);
            res.render('arunachal.ejs', { Main_Data: data });
        } catch (err) {
            console.error(err);
            res.send('Some error in the database');
        }
    },

    assam: async(req, res) => {
        let q1 = 'SELECT * FROM Main_Data WHERE StateorUT ="Assam"';
        let q2 = 'SELECT * FROM Main_Data';
    
        try {
            const[data] = await pool.query(q1);
            const[info] = await pool.query(q2);
            res.render('assam.ejs', { Main_Data: data  });
        } catch (err) {
            console.error(err);
            res.send('Some error in the database');
        }
    },
    bihar: async(req, res) => {
        let q1 = 'SELECT * FROM Main_Data WHERE StateorUT ="Bihar"';
        let q2 = 'SELECT * FROM Main_Data';
    
        try {
            const[data] = await pool.query(q1);
            const[info] = await pool.query(q2);
            res.render('bihar.ejs', { Main_Data: data  });
        } catch (err) {
            console.error(err);
            res.send('Some error in the database');
        }
    },
    chhattisgarh: async(req, res) => {
        let q1 = 'SELECT * FROM Main_Data WHERE StateorUT ="Chhattisgarh"';
        let q2 = 'SELECT * FROM Main_Data';
    
        try {
            const[data] = await pool.query(q1);
            const[info] = await pool.query(q2);
            res.render('chhattisgarh.ejs', { Main_Data: data });
        } catch (err) {
            console.error(err);
            res.send('Some error in the database');
        }
    },
    goa: async(req, res) => {
        let q1 = 'SELECT * FROM Main_Data WHERE StateorUT ="Goa"';
    
        try {
            const[data] = await pool.query(q1);
            res.render('goa.ejs', { Main_Data: data  });
        } catch (err) {
            console.error(err);
            res.send('Some error in the database');
        }
    },
    gujarat: async(req, res) => {
        let q1 = 'SELECT * FROM Main_Data WHERE StateorUT ="Gujarat"';
    
        try {
            const[data] = await pool.query(q1);
            res.render('gujarat.ejs', { Main_Data: data });
        } catch (err) {
            console.error(err);
            res.send('Some error in the database');
        }
    },
    haryana: async(req, res) => {
        let q1 = 'SELECT * FROM Main_Data WHERE StateorUT ="Haryana"';
    
        try {
            const[data] = await pool.query(q1);
            res.render('haryana.ejs', { Main_Data: data });
        } catch (err) {
            console.error(err);
            res.send('Some error in the database');
        }
    },
    himachal_pradesh: async(req, res) => {
        let q1 = 'SELECT * FROM Main_Data WHERE StateorUT ="Himachal Pradesh"';
    
        try {
            const[data] = await pool.query(q1);
            res.render('himachal.ejs', { Main_Data: data });
        } catch (err) {
            console.error(err);
            res.send('Some error in the database');
        }
    },
    jammu_and_kashmir: async(req, res) => {
        let q1 = 'SELECT * FROM Main_Data WHERE StateorUT ="Jammu and Kashmir"';
    
        try {
            const[data] = await pool.query(q1);
            res.render('jammu.ejs', { Main_Data: data });
        } catch (err) {
            console.error(err);
            res.send('Some error in the database');
        }
    },
    jharkhand: async(req, res) => {
        let q1 = 'SELECT * FROM Main_Data WHERE StateorUT ="jharkhand"';
    
        try {
            const[data] = await pool.query(q1);
            res.render('jharkhand.ejs', { Main_Data: data });
        } catch (err) {
            console.error(err);
            res.send('Some error in the database');
        }
    },
    karnataka: async(req, res) => {
        let q1 = 'SELECT * FROM Main_Data WHERE StateorUT ="Karnataka"';
    
        try {
            const[data] = await pool.query(q1);
            res.render('karnataka.ejs', { Main_Data: data  });
        } catch (err) {
            console.error(err);
            res.send('Some error in the database');
        }
    },
    kerala: async(req, res) => {
        let q1 = 'SELECT * FROM Main_Data WHERE StateorUT ="Kerala"';
    
        try {
            const[data] = await pool.query(q1);
            res.render('kerala.ejs', { Main_Data: data });
        } catch (err) {
            console.error(err);
            res.send('Some error in the database');
        }
    },
    madhya_pradesh: async(req, res) => {
        let q1 = 'SELECT * FROM Main_Data WHERE StateorUT ="Madhya Pradesh"';
    
        try {
            const[data] = await pool.query(q1);
            res.render('madhya.ejs', { Main_Data: data });
        } catch (err) {
            console.error(err);
            res.send('Some error in the database');
        }
    },
    maharashtra: async(req, res) => {
        let q1 = 'SELECT * FROM Main_Data WHERE StateorUT ="Maharashtra"';
    
        try {
            const[data] = await pool.query(q1);
            res.render('maharashtra.ejs', { Main_Data: data });
        } catch (err) {
            console.error(err);
            res.send('Some error in the database');
        }
    },
    manipur: async(req, res) => {
        let q1 = 'SELECT * FROM Main_Data WHERE StateorUT ="Manipur"';
    
        try {
            const[data] = await pool.query(q1);
            res.render('manipur.ejs', { Main_Data: data });
        } catch (err) {
            console.error(err);
            res.send('Some error in the database');
        }
    },
    meghalaya: async(req, res) => {
        let q1 = 'SELECT * FROM Main_Data WHERE StateorUT ="Meghalaya"';
    
        try {
            const[data] = await pool.query(q1);
            res.render('meghalaya.ejs', { Main_Data: data });
        } catch (err) {
            console.error(err);
            res.send('Some error in the database');
        }
    },
    mizoram: async(req, res) => {
        let q1 = 'SELECT * FROM Main_Data WHERE StateorUT ="Mizoram"';
    
        try {
            const[data] = await pool.query(q1);
            res.render('mizoram.ejs', { Main_Data: data });
        } catch (err) {
            console.error(err);
            res.send('Some error in the database');
        }
    },
    nagaland: async(req, res) => {
        let q1 = 'SELECT * FROM Main_Data WHERE StateorUT ="Nagaland"';
    
        try {
            const[data] = await pool.query(q1);
            res.render('nagaland.ejs', { Main_Data: data });
        } catch (err) {
            console.error(err);
            res.send('Some error in the database');
        }
    },
    odisha: async(req, res) => {
        let q1 = 'SELECT * FROM Main_Data WHERE StateorUT ="Odisha"';
    
        try {
            const[data] = await pool.query(q1);
            res.render('odisha.ejs', { Main_Data: data  });
        } catch (err) {
            console.error(err);
            res.send('Some error in the database');
        }
    },
    punjab: async(req, res) => {
        let q1 = 'SELECT * FROM Main_Data WHERE StateorUT ="Punjab"';
    
        try {
            const[data] = await pool.query(q1);
            res.render('punjab.ejs', { Main_Data: data  });
        } catch (err) {
            console.error(err);
            res.send('Some error in the database');
        }
    },
    rajasthan: async(req, res) => {
        let q1 = 'SELECT * FROM Main_Data WHERE StateorUT ="Rajasthan"';
    
        try {
            const[data] = await pool.query(q1);
            res.render('rajasthan.ejs', { Main_Data: data });
        } catch (err) {
            console.error(err);
            res.send('Some error in the database');
        }
    },
    sikkim: async(req, res) => {
        let q1 = 'SELECT * FROM Main_Data WHERE StateorUT ="Sikkim"';
    
        try {
            const[data] = await pool.query(q1);
            res.render('sikkim.ejs', { Main_Data: data  });
        } catch (err) {
            console.error(err);
            res.send('Some error in the database');
        }
    },
    tamil_nadu: async(req, res) => {
        let q1 = 'SELECT * FROM Main_Data WHERE StateorUT ="Tamil Nadu"';
    
        try {
            const[data] = await pool.query(q1);
            res.render('tamil.ejs', { Main_Data: data  });
        } catch (err) {
            console.error(err);
            res.send('Some error in the database');
        }
    },
    tripura: async(req, res) => {
        let q1 = 'SELECT * FROM Main_Data WHERE StateorUT ="Tripura"';
    
        try {
            const[data] = await pool.query(q1);
            res.render('tripura.ejs', { Main_Data: data });
        } catch (err) {
            console.error(err);
            res.send('Some error in the database');
        }
    },
    uttar_pradesh: async(req, res) => {
        let q1 = 'SELECT * FROM Main_Data WHERE StateorUT ="Uttar Pradesh"';
    
        try {
            const[data] = await pool.query(q1);
            res.render('uttar.ejs', { Main_Data: data});
        } catch (err) {
            console.error(err);
            res.send('Some error in the database');
        }
    },
    uttarakhand: async(req, res) => {
        let q1 = 'SELECT * FROM Main_Data WHERE StateorUT ="Uttarakhand"';
    
        try {
            const[data] = await pool.query(q1);
            res.render('uttarakhand.ejs', { Main_Data: data });
        } catch (err) {
            console.error(err);
            res.send('Some error in the database');
        }
    },
    west_bengal: async(req, res) => {
        let q1 = 'SELECT * FROM Main_Data WHERE StateorUT ="West Bengal"';
    
        try {
            const[data] = await pool.query(q1);
            res.render('westbengal.ejs', { Main_Data: data});
        } catch (err) {
            console.error(err);
            res.send('Some error in the database');
        }
    },
    andaman_and_nicobar_islands: async(req, res) => {
        let q1 = 'SELECT * FROM Main_Data WHERE StateorUT ="Andaman and Nicobar Islands"';
    
        try {
            const[data] = await pool.query(q1);
            res.render('andaman.ejs', { Main_Data: data });
        } catch (err) {
            console.error(err);
            res.send('Some error in the database');
        }
    },
    chandigarh: async(req, res) => {
        let q1 = 'SELECT * FROM Main_Data WHERE StateorUT ="Chandigarh"';
    
        try {
            const[data] = await pool.query(q1);
            res.render('chandigarh.ejs', { Main_Data: data });
        } catch (err) {
            console.error(err);
            res.send('Some error in the database');
        }
    },
    dadra_and_nagar_haveli: async(req, res) => {
        let q1 = 'SELECT * FROM Main_Data WHERE StateorUT ="Dadra and Nagar Haveli"';
    
        try {
            const[data] = await pool.query(q1);
            res.render('dadra.ejs', { Main_Data: data });
        } catch (err) {
            console.error(err);
            res.send('Some error in the database');
        }
    },
    daman_and_diu: async(req, res) => {
        let q1 = 'SELECT * FROM Main_Data WHERE StateorUT ="Daman and Diu"';
    
        try {
            const[data] = await pool.query(q1);
            res.render('daman.ejs', { Main_Data: data  });
        } catch (err) {
            console.error(err);
            res.send('Some error in the database');
        }
    },
    delhi: async(req, res) => {
        let q1 = 'SELECT * FROM Main_Data WHERE StateorUT ="Delhi"';
    
        try {
            const[data] = await pool.query(q1);
            res.render('delhi.ejs', { Main_Data: data });
        } catch (err) {
            console.error(err);
            res.send('Some error in the database');
        }
    },
    lakshadweep: async(req, res) => {
        let q1 = 'SELECT * FROM Main_Data WHERE StateorUT ="Lakshadweep"';
    
        try {
            const[data] = await pool.query(q1);

            res.render('lakshadweep.ejs', { Main_Data: data });
        } catch (err) {
            console.error(err);
            res.send('Some error in the database');
        }
    },

    puducherry: async(req, res) => {
        let q1 = 'SELECT * FROM Main_Data WHERE StateorUT ="Puducherry"';
    
        try {
            const[data] = await pool.query(q1);
            res.render('puducherry.ejs', { Main_Data: data });
        } catch (err) {
            console.error(err);
            res.send('Some error in the database');
        }
    },

};

