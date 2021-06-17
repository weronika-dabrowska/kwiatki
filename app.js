const express = require('express');

const app = express();

app.use(express.static(`${__dirname}/public`))
app.get('/', (req, res) => res.send('No nareszcie'));

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`App running on port ${PORT}...`);
});