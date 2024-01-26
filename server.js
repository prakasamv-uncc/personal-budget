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
            title: 'Gas',
            budget: 50
        },
        {
            title: 'Entertainment',
            budget: 25
        },
        {
            title: 'Misc',
            budget: 15
        }, 
        {
            title: 'Savings',
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