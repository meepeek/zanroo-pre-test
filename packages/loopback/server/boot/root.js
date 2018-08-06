'use strict';

module.exports = function(server) {
  // Install a `/` route that returns server status
  var router = server.loopback.Router();
  router.get('/', server.loopback.status());

  server.post('/login', function(req, res) {
    const {username, password} = req.body
    const email = username
    server.models.User.login({
      email,
      password
    }, 'user', function(err, token) {
      if (err) {
        res.status(400).send(JSON.stringify({ message: 'Username or password was not correct' }))
        return;
      }

      res.setHeader('Content-Type', 'application/json');
      res.send(JSON.stringify({ email, token: token.id }));
    });
  });

  server.post('/logout', function(req, res, next) {
    console.log(req.body)
    const token = req.body.token
    if (!token) return res.sendStatus(401); //return 401:unauthorized if accessToken is not present
    else
    server.models.User.logout(token, function(err) {
      if (err) return next(err);
    });
    res.sendStatus(204)
  });

  server.use(router);
};
