const express = require('express');
const cors = require('cors');

const port = process.env.PORT ?? 3001;
const app = express();
app.use(cors())
app.set('view engine', 'ejs');
app.use(express.static('assets'));
// app.get('/', (req, res) => {
//   res.send
// })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})