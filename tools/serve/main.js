import app from './src/internal/app.js'
import './src/proxy.js'

const port = 3000;


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`app listening on port ${port}`)
})
