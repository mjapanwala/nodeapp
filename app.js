import express from 'express'

const app = express();

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('ddd')
  console.log('hehe')
})

app.listen(PORT, () => {
  console.log('This app is listening on localhost 3000')
})