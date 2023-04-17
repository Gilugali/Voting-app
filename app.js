const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const dotenv = require('dotenv')
const path = require('path')
const app = express()
const port = 3000;

const Check = require('./models/check');
app.use(bodyParser.json());

app.listen(port, ()=>{
    console.log(`connected to port ${port}`)
});
//accessing the env file
dotenv.config()

const dbUri = process.env.dbUri
mongoose.connect(dbUri, { useNewUrlparser: true, useUnifiedTopology: true })
    .then((result) => console.log("connected to db"))
    .catch((err) => console.log(err));

//middleware
app.use('/html', express.static('html'))
app.use('/css', express.static('css'))
app.use('/img', express.static('img'))
app.use('/js', express.static('js'))

//rendering files 
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, '/html/index.html'));
})

app.get('/choices', async (req, res) => {
    const slides = await Check.find({})
    res.send(slides)
      slides.forEach((el,i)=>{
          if(el.leftVotes > el.rightVotes){
            console.log("Left Won")

          }
          else if(el.leftVotes == el.rightVotes){
            console.log('A tie')
          }
          else{
            console.log("Right Won")
          }
        
      })
})


app.post('/vote', async (req, res) => {
    try {
        
        const { votes } = req.body;
        const ip = req.ip
        
    
    
        for (let el of votes) {
            await Check.updateOne({ _id: el._id }, {
                $inc: {
                    ...(el.vote === 'left' ? { leftVotes: 1 } : { rightVotes: 1 })
                }
            })
        }
        res.send("SUCCESS")
    } catch (e) {
        console.log(e.message)
        res.send("FAILED")
    }

})

function putInDBFromJSON() {
    const slides = require('./test.json')
    slides.forEach(async (el, i) => {
        const slide = new Check({
            ...el
        })

        await slide.save();
        console.log('saved')
    })
}
putInDBFromJSON()   

async function getDataFromDB() {
    const slides = await Check.find({})
    alert("justin")
    slides.forEach((el, i)=>{
        alert("you're there")
        const total = el.rightVotes + el.leftVotes;
        console.log(el.leftVotes)
    })
    console.log(slides)
}


// getDataFromDB()