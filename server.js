
const path = require('path');
const express = require('express');
const app = express();

// Connect files
const frontend = path.join(__dirname, 'frontend');
app.use(express.static(frontend));

const backend = path.join(__dirname, 'backend');
app.use(express.static(backend));

app.use(express.json());
app.set('views', path.join(__dirname, 'frontend/views'));
app.set('view engine', 'ejs');

const PORT = process.env.PORT || 3000;

// Routes
app.get('/', (req, res) => {
    res.render('home');
});

app.get('/home', (req, res) => {
    res.render('home');
});

app.get('/ourteam', (req, res) => {
    res.render('about');
});

app.get('/resources', (req, res) => {
    res.render('resources-folder/home');
});

app.get('/resources/hackjam-one', (req, res) => {
    res.render('resources-folder/hackjam-one/hackjam-one');
});

app.get('/resources/dsa-arrays', (req, res) => {
    res.render('resources-folder/dsaArrays');
});

app.get('/resources/home', (req, res) => {
    res.render('resources-folder/home');
});

app.get('/resources/archived/spring2022', (req, res) => {
    res.render('resources-folder/spring2022');
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});