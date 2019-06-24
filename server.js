const express = require('express');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app
  .prepare()
  .then(() => {
    const server = express();

    server.get('/buildings/:building_slug/:suite_floor_slug', (req, res) => {
      const page = '/listing';
      const queryParams = {
        building_slug: req.params.building_slug,
        suite_floor_slug: req.params.suite_floor_slug
      };
      app.render(req, res, page, queryParams);
    });

    server.get('/buildings/:building_slug', (req, res) => {
      const page = '/building';
      const queryParams = { slug: req.params.building_slug };
      app.render(req, res, page, queryParams);
    });

    server.get('/news/:slug', (req, res) => {
      const page = '/newsarticle';
      const queryParams = { slug: req.params.slug };
      app.render(req, res, page, queryParams);
    });

    server.get('/press/', (req, res) => {
      const page = '/press';
      app.render(req, res, page);
    });

    server.get('*', (req, res) => {
      return handle(req, res);
    });

    server.listen(3000, err => {
      if (err) throw err;
      /* eslint-disable no-console */
      console.log('> Ready on http://localhost:3000');
      /* eslint-enable no-console */
    });
  })
  .catch(ex => {
    /* eslint-disable no-console */
    console.error(ex.stack);
    /* eslint-enable no-console */
    process.exit(1);
  });
