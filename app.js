const express = require('express');
const app =express();

const PORT = 3000;

app.use('/assets',express.static('assets'));

app.set('views', './views');
app.set('view engine', 'ejs');

app.get('/forgot-password', (req, res) => {
    res.render('auth-forgot-password-basic');
});

app.get('/login', (req, res) => {
    res.render('auth-login-basic');
});

app.get('/commandes', (req, res) => {
    res.render('commandes');
});

app.get('/qrcode', (req, res) => {
    res.render('qrcode');
});


app.get('/menu-management', (req, res) => {
    res.render('menu-management');
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

app.get('/forms-basic-inputs', (req, res) => {
    res.render('forms-basic-inputs');
});

app.get('/forms-input-groups', (req, res) => {
    res.render('forms-input-groups');
});

app.get('/icons-boxicons', (req, res) => {
    res.render('icons-boxicons');
});

app.get('/layouts-blank', (req, res) => {
    res.render('layouts-blank');
});
app.get('/layouts-container', (req, res) => {
    res.render('layouts-container');
});
app.get('/layouts-fluid', (req, res) => {
    res.render('layouts-fluid');
});
app.get('/layouts-without-menu', (req, res) => {
    res.render('layouts-without-menu');
});
app.get('/layouts-without-navbar', (req, res) => {
    res.render('layouts-without-navbar');
});
app.get('/pages-account-settings-account', (req, res) => {
    res.render('pages-account-settings-account');
});
app.get('/pages-account-settings-connections', (req, res) => {
    res.render('pages-account-settings-connections');
});
app.get('/pages-account-settings-notifications', (req, res) => {
    res.render('pages-account-settings-notifications');
});
app.get('/pages-misc-error', (req, res) => {
    res.render('pages-misc-error');
});
app.get('/pages-misc-under-maintenance', (req, res) => {
    res.render('pages-misc-under-maintenance');
});
app.get('/tables-basic', (req, res) => {
    res.render('tables-basic');
});
app.get('/ui-accordion', (req, res) => {
    res.render('ui-accordion');
});
app.get('/ui-alerts', (req, res) => {
    res.render('ui-alerts');
});
app.get('/ui-badges', (req, res) => {
    res.render('ui-badges');
});
app.get('/ui-buttons', (req, res) => {
    res.render('ui-buttons');
});
app.get('/ui-carousel', (req, res) => {
    res.render('ui-carousel');
});
app.get('/ui-collapse', (req, res) => {
    res.render('ui-collapse');
});
app.get('/ui-dropdowns', (req, res) => {
    res.render('ui-dropdowns');
});

app.get('/ui-footer', (req, res) => {
    res.render('ui-footer');
});
app.get('/ui-list-groups', (req, res) => {
    res.render('ui-list-groups');
});
app.get('/ui-modals', (req, res) => {
    res.render('ui-modals');
});
app.get('/ui-navbar', (req, res) => {
    res.render('ui-navbar');
});
app.get('/ui-offcanvas', (req, res) => {
    res.render('ui-offcanvas');
});
app.get('/ui-pagination-breadcrumbs', (req, res) => {
    res.render('ui-pagination-breadcrumbs');
});
app.get('/ui-progress', (req, res) => {
    res.render('ui-progress');
});
app.get('/ui-spinners', (req, res) => {
    res.render('ui-spinners');
});
app.get('/ui-tabs-pills', (req, res) => {
    res.render('ui-tabs-pills');
});
app.get('/ui-toasts', (req, res) => {
    res.render('ui-toasts');
});
app.get('/ui-tooltips-popovers', (req, res) => {
    res.render('ui-tooltips-popovers');
});
app.get('/ui-typography', (req, res) => {
    res.render('ui-typography');
});

app.get('/', (req, res) => {
    res.render('index');
});

app.use('/favicon.ico', express.static('favicon.ico'));

app.listen(PORT, function() {
    console.log(`listening on port ${PORT}`);
})