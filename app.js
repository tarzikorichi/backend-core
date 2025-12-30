const fs = require('fs');
const express = require('express');

const PORT = 3000;

const app = express();
app.use(express.json());



const candidatesData = JSON.parse(fs.readFileSync('./data/Candidate.json', 'utf-8'));



app.get('/api/v1/Candidates', (req, res) => {
    res.status(200)
        .json({
            status: 'success',
            results: candidatesData.length,
            data: {
                candidates: candidatesData
            }
        });
});


app.post('/api/v1/Candidates', (req, res) => {

    const conId = candidatesData[candidatesData.length - 1].id + 1;
    const newCon = Object.assign({ id: conId }, req.body);

    console.log(newCon);
    candidatesData.push(newCon);

    fs.writeFile('./data/Candidate.json', JSON.stringify(candidatesData), err => {
        res.status(201)
            .json({
                status: 'success',
                data: {
                    candidate: newCon
                }
            });
    });



});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
