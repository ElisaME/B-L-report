const axios = require('axios')

exports.ReportController= (req,res)=> {  
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
      const revenue_total = obj => Object.values(total).reduce((a, b) => a + b);
      res.render('Home',{total,revenue_total})
    })
    .catch(error => {
      console.log(error);
    });
}

