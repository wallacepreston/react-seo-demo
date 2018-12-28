// const {db} = require('./db');
const app = require('./app');
const port = process.env.PORT || 4000;

// db.sync({force: false})  // sync our database
//   .then(function(){
//     console.log('db synced')
    app.listen(port, () => console.log(`cookin' up good stuff on port ${port}`)) // then start listening with our express server once we have synced
  // })

// module.exports = db
