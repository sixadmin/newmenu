const express = require('express');
const app =express();

const PORT = 3000;

app.use('/assets',express.static('assets'));

app.set('views', './views');
app.set('view engine', 'ejs');


app.get('/dashboard/add', (req, res) => {
    res.send('Formulaire d\'ajout')
});

app.get('/dashboard/:id', (req, res) => {
    const id = req.params.id;
    res.render('dashboard', {dashboardid: id});
});

app.get('/dashboard', (req, res) => {
    res.send('Bientôt')
});

app.get('/forgot-password', (req, res) => {
    res.render('auth-forgot-password-basic');
});

app.get('/login', (req, res) => {
    res.render('auth-login-basic');
});

app.get('/register', (req, res) => {
    res.render('auth-register-basic');
});

app.get('/cards', (req, res) => {
    res.render('cards-basic');
});

app.get('/cards', (req, res) => {
    res.render('cards-basic');
});

app.get('/scrollbar', (req, res) => {
    res.render('extended-ui-perfect-scrollbar');
});

app.get('/text-divider', (req, res) => {
    res.render('extended-ui-text-divider');
});

app.get('/layouts-horizontal', (req, res) => {
    res.render('form-layouts-horizontal');
});

app.get('/layouts-vertical', (req, res) => {
    res.render('form-layouts-vertical');
});

app.get('/forms-basic-', (req, res) => {
    res.render('forms-basic-inputs');
});

app.get('/forms-input', (req, res) => {
    res.render('forms-input-groups');
});
app.get('/xxx', (req, res) => {
    res.render('xxx');
});
app.get('/xxx', (req, res) => {
    res.render('xxx');
});
app.get('/xxx', (req, res) => {
    res.render('xxx');
});
app.get('/xxx', (req, res) => {
    res.render('xxx');
});
app.get('/xxx', (req, res) => {
    res.render('xxx');
});
app.get('/xxx', (req, res) => {
    res.render('xxx');
});
app.get('/xxx', (req, res) => {
    res.render('xxx');
});
app.get('/xxx', (req, res) => {
    res.render('xxx');
});
app.get('/xxx', (req, res) => {
    res.render('xxx');
});
app.get('/xxx', (req, res) => {
    res.render('xxx');
});
app.get('/xxx', (req, res) => {
    res.render('xxx');
});
app.get('/xxx', (req, res) => {
    res.render('xxx');
});
app.get('/xxx', (req, res) => {
    res.render('xxx');
});
app.get('/xxx', (req, res) => {
    res.render('xxx');
});
app.get('/xxx', (req, res) => {
    res.render('xxx');
});
app.get('/xxx', (req, res) => {
    res.render('xxx');
});
app.get('/xxx', (req, res) => {
    res.render('xxx');
});
app.get('/xxx', (req, res) => {
    res.render('xxx');
});
app.get('/xxx', (req, res) => {
    res.render('xxx');
});
app.get('/xxx', (req, res) => {
    res.render('xxx');
});
app.get('/xxx', (req, res) => {
    res.render('xxx');
});
app.get('/xxx', (req, res) => {
    res.render('xxx');
});
app.get('/xxx', (req, res) => {
    res.render('xxx');
});
app.get('/xxx', (req, res) => {
    res.render('xxx');
});
app.get('/xxx', (req, res) => {
    res.render('xxx');
});
app.get('/xxx', (req, res) => {
    res.render('xxx');
});
app.get('/xxx', (req, res) => {
    res.render('xxx');
});
app.get('/xxx', (req, res) => {
    res.render('xxx');
});
app.get('/xxx', (req, res) => {
    res.render('xxx');
});
app.get('/xxx', (req, res) => {
    res.render('xxx');
});
app.get('/xxx', (req, res) => {
    res.render('xxx');
});
app.get('/xxx', (req, res) => {
    res.render('xxx');
});
app.get('/xxx', (req, res) => {
    res.render('xxx');
});
app.get('/xxx', (req, res) => {
    res.render('xxx');
});
app.get('/xxx', (req, res) => {
    res.render('xxx');
});
app.get('/xxx', (req, res) => {
    res.render('xxx');
});
app.get('/xxx', (req, res) => {
    res.render('xxx');
});
app.get('/xxx', (req, res) => {
    res.render('xxx');
});
app.get('/xxx', (req, res) => {
    res.render('xxx');
});
app.get('/xxx', (req, res) => {
    res.render('xxx');
});
app.get('/xxx', (req, res) => {
    res.render('xxx');
});
app.get('/xxx', (req, res) => {
    res.render('xxx');
});
app.get('/xxx', (req, res) => {
    res.render('xxx');
});
app.get('/xxx', (req, res) => {
    res.render('xxx');
});

app.get('/', (req, res) => {
    res.render('index');
});

app.use('/favicon.ico', express.static('favicon.ico'));

app.listen(PORT, function() {
    console.log(`listening on port ${PORT}`);
})