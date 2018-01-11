'use strict';

module.exports = function(server) {
  // Install a `/` route that returns server status
  // rn
  // fbdt
  // hd
  // hd
  // bdhd
  // hdgr
  var router = server.loopback.Router();
  router.get('/', server.loopback.status());
  server.use(router);
};
