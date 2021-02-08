const express = require('express');
const app = express();

const bookRoute = require('./router/books');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(bookRoute);

// Error
app.use((req, res, next) => {
    res.status(404).json({
        status: "fail",
        errors: "Are you lost?"
    })
})

app.use((err, req, res, next) => {
    console.log(err)
    res.status(500).json({
        status: "fail",
        errors: err.message
    })
})

app.listen(9999, () => {
    console.log('Server nyala di port 9999!')
})