const express = require('express');
const router = express.Router();
const yearController = require('../controllers/yearController');
const regionController = require('../controllers/regionController');
const basicController = require('../controllers/basicController');
const statesController = require('../controllers/statesController');

router.get('/', (req, res) => {
    res.send("Hello");
});

router.get('/2014', yearController.data2014);
router.get('/2015', yearController.data2015);
router.get('/2016', yearController.data2016);
router.get('/update_2014', (req, res) => {
    res.render('update2014');
  });
router.post('/update_2014',yearController.update_2014);
router.get('/update_2015', (req, res) => {
    res.render('update2015');
  });
router.post('/update_2015',yearController.update_2015);
router.get('/update_2016', (req, res) => {
    res.render('update2016');
  });
router.post('/update_2016',yearController.update_2016);


router.get('/north',regionController.north);
router.get('/east',regionController.east);
router.get('/west',regionController.west);
router.get('/south',regionController.south);
router.get('/central',regionController.central);
router.get('/delete_north', (req, res) => {
    res.render('delete_north');
  });
router.post('/delete_north',regionController.delete_north);
router.get('/delete_east', (req, res) => {
    res.render('delete_east');
  });
router.post('/delete_east',regionController.delete_east);
router.get('/add_west', (req, res) => {
    res.render('add_west');
  });
router.post('/add_west',regionController.add_west);
router.get('/add_south', (req, res) => {
  res.render('add_south');
});
router.post('/add_south',regionController.add_south);
router.get('/add_central', (req, res) => {
  res.render('add_central');
});
router.post('/add_central',regionController.add_central);

router.get('/data',basicController.data);
router.get('/states',basicController.states);
router.get('/ut',basicController.ut);
router.get('/home',basicController.home);
router.get('/stolen',basicController.stolen);
router.get('/recovered',basicController.recovered);
router.get('/percentage',basicController.percentage);
router.get('/total',basicController.total);
router.get('/update_stolen', (req, res) => {
    res.render('update_stolen');
  });
router.post('/update_stolen',basicController.update_stolen);
router.get('/update_recovered', (req, res) => {
    res.render('update_recovered');
  });
router.post('/update_recovered',basicController.update_recovered);
router.get('/update_percentage', (req, res) => {
    res.render('update_percentage');
  });
router.post('/update_percentage',basicController.update_percentage);

router.get('/telangana',statesController.telangana);
router.get('/andhra_pradesh',statesController.andhra_pradesh);
router.get('/arunachal_pradesh',statesController.arunachal_pradesh);
router.get('/assam',statesController.assam);
router.get('/bihar',statesController.bihar);
router.get('/chhattisgarh',statesController.chhattisgarh);
router.get('/goa',statesController.goa);
router.get('/gujarat',statesController.gujarat);
router.get('/haryana',statesController.haryana);
router.get('/himachal_pradesh',statesController.himachal_pradesh);
router.get('/jammu_and_kashmir',statesController.jammu_and_kashmir);
router.get('/jharkhand',statesController.jharkhand);
router.get('/karnataka',statesController.karnataka);
router.get('/kerala',statesController.kerala);
router.get('/madhya_pradesh',statesController.madhya_pradesh);
router.get('/maharashtra',statesController.maharashtra);
router.get('/manipur',statesController.manipur);
router.get('/meghalaya',statesController.meghalaya);
router.get('/mizoram',statesController.mizoram);
router.get('/nagaland',statesController.nagaland);
router.get('/odisha',statesController.odisha);
router.get('/punjab',statesController.punjab);
router.get('/rajasthan',statesController.rajasthan);
router.get('/sikkim',statesController.sikkim);
router.get('/tamil_nadu',statesController.tamil_nadu);
router.get('/tripura',statesController.tripura);
router.get('/uttar_pradesh',statesController.uttar_pradesh);
router.get('/uttarakhand',statesController.uttarakhand);
router.get('/west_bengal',statesController.west_bengal);
router.get('/andaman_and_nicobar_islands',statesController.andaman_and_nicobar_islands);
router.get('/chandigarh',statesController.chandigarh);
router.get('/dadra_and_nagar_haveli',statesController.dadra_and_nagar_haveli);
router.get('/daman_and_diu',statesController.daman_and_diu);
router.get('/delhi',statesController.delhi);
router.get('/lakshadweep',statesController.lakshadweep);
router.get('/puducherry',statesController.puducherry);

module.exports = router;