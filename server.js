const express = require('express');
const bodyParser = require('body-parser');

const { mongoose } = require('./db/mongoose');
const { vote } = require('./models/vote');
const { match } = require('./models/match');

const voterList = ['Sachin', 'Amit', 'Selvi', 'Viji', 'Vivek', 'Vijay', 'Rakesh', 'Indu', 'Raks', 'Pawan', 'Satish', 'Divs'];
const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());


app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

app.get('/matches', (req, res) => {
    match.find({}, (err, doc) => {
        if (err) return res.status(400).send(err);
        
        res.status(200).send(doc);
    });
});

app.get('/matches/:date', (req, res) => {
    match.find({date:req.params.date}, (err, doc) => {
        if (err) return res.status(400).send(err);
        
        res.status(200).send(doc);
    });
});

app.get('/matches/:date/:time', (req, res) => {
    match.find({date:req.params.date, time:req.params.time}, (err, doc) => {
        if (err) return res.status(400).send(err);
        
        res.status(200).send(doc);
    });
});

app.get('/votes/:date/:time', (req, res) => {
    vote.find({matchDate:req.params.date, matchTime:req.params.time}, (err, doc) => {
        if (err) return res.status(400).send(err);
        
        res.status(200).send(doc);
    });
});

app.get('/votes', (req, res) => {
    vote.find({}, (err, doc) => {
        if (err) return res.status(400).send(err);
        
        res.status(200).send(doc);
    });
});

app.post('/matches', (req, res) => {
    var myMatch = new match({
        team1: req.body.team1,
        team2: req.body.team2,
        time: req.body.time,
        date: req.body.date,
        completed: req.body.completed
    });

    myMatch.save().then((doc) => {
        voterList.forEach((value, index, array) => {
            var addVoters = new vote({
                name: value,
                matchTime: req.body.time,
                matchDate: req.body.date, 
            });

            addVoters.save().then((doc) => {
                // console.log("Added voter:", doc);
            }, (err) => {
                console.log("Error while adding voter:", value);
            });
        });

        res.status(200).send(doc);
    }, (err) => {
        res.status(400).send(err);
    });
    
});

app.put('/votes', (req, res) => {
    vote.findOneAndUpdate({name: req.body.name, matchTime: req.body.matchTime, matchDate: req.body.matchDate}, 
                           {$set: {
                                name: req.body.name,
                                vote: req.body.vote,
                                matchDate: req.body.matchDate,
                                matchTime: req.body.matchTime,
                                voted: req.body.voted,
                                points: req.body.points
                            }}, 
                           {new: true, upsert: true}, (err, doc) => {
        if (err) return res.status(400).send(err);

        res.status(200).send(doc);        
    });
});

app.post('/votes', (req, res) => {
    var myVote = new vote({
        name: req.body.name,
        vote: req.body.vote,
        matchDate: req.body.matchDate,
        matchTime: req.body.matchTime,
    });

    myVote.save().then((doc) => {
        res.status(200).send(doc);
    }, (err) => {
        res.status(400).send(err);
    });
    
});

app.put('/matches', (req, res) => {
    match.findOneAndUpdate({date: req.body.date, time: req.body.time}, 
                           {$set: {completed: req.body.completed, winner: req.body.winner}}, 
                           {new: true}, (err, doc) => {
        if (err) return res.status(400).send(err);

        res.status(200).send(doc);        
    });
});

app.listen(port, () => {
    console.log(`Started server at port ${port}`);
});
