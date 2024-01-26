// Budget API

const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors());

const budget = {
    myBudget: [
        {
            title: 'Eat out',
            budget: 25
        },
        {
            title: 'Rent',
            budget: 275
        },
        {
            title: 'Grocery',
            budget: 110
        },
        {
            title: 'Car',
            budget: 100
        },
        {
            title: 'Utilities',
            budget: 90
        },
        {
            title: 'Internet',
            budget: 50
        },
        {
            title: 'Phone',
            budget: 50
        },
        {
            title: 'Gas',
            budget: 40
        },
        {
            title: 'Insurance',
            budget: 100
        },
        {
            title: 'Misc',
            budget: 100
        }
    ]
};


app.get('/budget', (req, res) => {
    res.json(budget);
});

app.listen(port, () => {
    console.log(`API served at http://137.184.110.255:${port}`);
});