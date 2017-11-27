const bodyParser = require('body-parser');

module.exports = function(app) {

    app.use(bodyParser.urlencoded({ extended: true }));

    app.get('/api/codes', function (req, res) {

        if (req.headers['authorization'] !== "Bearer success_token") {
          return res.status(401).send('Unauthorized');
        }
    });

    app.post('/token', function(req, res) {
        res.send({ access_token: "success_token" });
    });
};
