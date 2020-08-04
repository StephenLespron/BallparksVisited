const express = require('express');
const app = express();
const ctrlPV = require('./controllers/park-visits.js');
const SERVER_PORT = 4256;

app.use(express.static(`${__dirname}/../build`));

app.use(express.json());

//Endpoints for list

app.get('/api/parkVisits', ctrlPV.getPV);
app.post('/api/parkVisits', ctrlPV.newPV);
app.put('/api/parkVisits/:pv_id', ctrlPV.updatePV);
app.delete('/api/parkVisits/:pv_id', ctrlPV.deletePV);

app.listen(SERVER_PORT, () =>
	console.log(`Root, root, root for the home team on port ${SERVER_PORT}`)
);
