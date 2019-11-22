const express = require('express');
const router  = express.Router();
const axios = require('axios')

/* GET home page */
router.get('/', (req, res, next) => {
  axios.get('https://bitbucket.org/!api/2.0/snippets/bookandlearn/7nBKB6/9b920327d8f70adb4b390eb7ebdb5177f84b05d8/files/sale.json')
  .then(response => {
    const data = response.data.data
    const total = {'January':0, 'February':0, 'March':0}
    for(let i = 0; i < data.length; i++){
      let date = data[i].date.split('-')
      let month = date[1]
      switch (month) {
        case '01':
          total['January'] += data[i].total
          break;
        case '02':
          total['February'] += data[i].total
          break;
        case '03':
          total['March'] += data[i].total
          break;
        default:
          break;
      }
    }
    res.send({total})
  })
  .catch(error => {
    console.log(error);
  });
});

module.exports = router;
