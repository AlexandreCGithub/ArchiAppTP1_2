var express = require('express');
var app = express();

var compteur = 0;

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

// Launch server
app.listen(8080, function() {
    console.log('Serveur démarré sur le port 8080');
});