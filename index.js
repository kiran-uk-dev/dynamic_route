let express = require('express');
let app = express();
let port = 4000;

app.get('/welcome/:username', (req,res)=>{
    let username = req.params.username;
    const role = req.query.role;

    const message = `Welcome ${username}, your role is ${role || "Guest"}`;

    console.log(`GET ${req.url} - ${message}`);

    res.send(message);
});
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});