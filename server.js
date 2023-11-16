const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('public'));

// Dummy user credentials for login (replace with a database in a real application)
const users = [
    { username: 'your_username', password: 'your_password' },
];

app.post('/login', (req, res) => {
    const { username, password } = req.body;
    const user = users.find(u => u.username === username && u.password === password);
    
    if (user) {
        res.redirect('/dashboard.html');
    } else {
        res.redirect('/index.html');
    }
});

app.listen(3000, () => {
    console.log('Server is running on http://localhost:${3000}');
});
