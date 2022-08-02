const express = require('express');
const cors = require("cors")
const bodyParser = require("body-parser");


const app = express();
const dotenv = require("dotenv");
dotenv.config();
app.use(cors())
app.use(express.json())
app.use(bodyParser.urlencoded({extended : true}));
const Twitter  = require ("twitter")

const PORT = process.env.PORT || 3001;

const client = new Twitter({
    consumer_key: "RvRmQZfW4yA3FLXKGqYLmsH4I",
    consumer_secret: "IiaLogozJPbphhGM9ShLN223QGQGUm2jCXkhjZS2R4UEMdI0Jl",
    access_token_key: "1300479885928878080-o8JK5tkr4B8LMxV8PqJcV5bUhRNsFu",
    access_token_secret: "8lphF9gKfzZmAoMmT8fQ0dWro2erWFm4eabkHFuRo6WZ7"
  });

app.post("/", (req, res) => {
    const username = req.body.username;
    const query = req.body.query;
    console.log(username);
    console.log(query);
    

    let userId ;


    let newt = client.get(`https://api.twitter.com/2/users/by/username/${username}`,{})
    .then(tweets => {
        if(tweets !== undefined){
            userId = tweets['data'].id
            console.log(userId )
        }
    })
    .then(() => {
    let newTweets = client.get(`https://api.twitter.com/2/users/${userId}/tweets?tweet.fields=public_metrics&max_results=100&exclude=retweets,replies`,{})
    .then(feed => {
        if(feed !== undefined){
            // console.log(feed['data'] )
            
            if(query == 'TopPost'){
                const mapped = feed['data'].map((v, i) => {
                    return { i, value: v.public_metrics.like_count };
                  })
                  mapped.sort((a, b) => {
                    if (a.value > b.value) {
                      return -1;
                    }
                    if (a.value < b.value) {
                      return 1;
                    }
                    return 0;
                  });
                  const result = mapped.map(v => feed['data'][v.i]);
                
                res.send(result)
            }
            else{
                res.send(feed['data'])

            }
            
        }
    })
    })
    .catch(error => {
        console.log(error)

    })


})
if(process.env.NODE_ENV === "production"){
  app.use(express.static("client/build"));
}



app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})
