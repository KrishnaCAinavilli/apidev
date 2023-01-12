const express = require('express')
const app = express()
const port = 3005

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/loan', (req, res) => {

const loans=[{
  loannumber:"2",
  name:"ajith",
  age:24
},
{
  loannumber:"7",
  name:"krishna",
  age:21
}]

const requestedLoan=req.query.loannumber
if(true){
  eg=10;
  let y=12;
}
y=45;
const requestloanDetails=loans.filter(loan=>loan.loannumber===requestedLoan);
res.send(requestloanDetails)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})