var express = require('express');
var app = express();

var compteur = 0;

var allMsgs = [
    { "msg": "Hello World", "date": "2025-03-09T13:06:49.213Z", "pseudo": "Alice" },
    { "msg": "Blah Blah", "date": "2025-03-09T13:08:02.287Z", "pseudo": "Bob" },
    { "msg": "I love cats", "date": "2025-03-09T13:08:04.798Z", "pseudo": "Charlie" }
];


// get counter value
app.get('/cpt/query', function(req, res) {
    res.json({ compteur: compteur });
});

// inc counter
app.get('/cpt/inc', (req, res) => {
    const v = req.query.v;
    
    if (v === undefined) {
        compteur += 1;
        res.json({ code: 0 });
    } else if (/^-?\d+$/.test(v)) {
        compteur += parseInt(v, 10);
        res.json({ code: 0 });
    } else {
        res.json({ code: -1 });
    }
});

// get message by id
app.get('/msg/get/:id', (req, res) => {
    const id = parseInt(req.params.id, 10);
    
    if (!isNaN(id) && id >= 0 && id < allMsgs.length) {
        res.json({ code: 1, msg: allMsgs[id] });
    } else {
        res.json({ code: 0 });
    }
});

// get number of messages
app.get('/msg/nber', (req, res) => {
    res.json({ nber: allMsgs.length });
});

// get all messages
app.get('/msg/getAll', (req, res) => {
    res.json( {messages: allMsgs});
});

// post a new message
app.get('/msg/post/:message', (req, res) => {
    const message = decodeURIComponent(req.params.message);
    allMsgs.push({ "msg": message, "date": new Date().toISOString(), "pseudo": "Anonymous" });
    res.json({ id: allMsgs.length - 1 });
});

// Launch server
app.listen(8080, function() {
    console.log('Serveur démarré sur le port 8080');
});