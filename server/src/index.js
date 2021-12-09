/* eslint-disable no-console */
const { app, server } = require('./app');

app.listen(app.get('PORT'), () => {
  console.log(`Server in listening at http://localhost:${app.get('PORT')}`);
});

server.listen(7000, () => {
  console.log('Server in socket ');
});
