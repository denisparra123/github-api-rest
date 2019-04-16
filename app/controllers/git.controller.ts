import { Router, Request, Response } from 'express';
const request = require('superagent');

const router: Router = Router();
let code;

router.get('/', (req: Request, res: Response) => {
  code = req.param('code');
  return res.status(200).send();
});

router.get('/code', (req:Request, res: Response) => {
  return res.status(200).send({code: code});
});

router.get('/access-token', (req:Request, res: Response) => {
  const body = {
    client_id: req.param('client_id'),
    client_secret: req.param('client_secret'),
    code: req.param('code')
  }

  request.post('https://github.com/login/oauth/access_token')
    .set('Content-Type', 'application/json')
    .send(JSON.stringify(body))
    .then(function(result) {
      const data = result.body;
      res.send(data);
    });
});

router.get('/users', (req:Request, res: Response) => {
  request
  .get('https://api.github.com/user')
  .set('Authorization', 'token ' + req.param('access-token'))
  .then(function(result) {
     const data = result.body;
     res.send(data);
  });
});

export const GitController: Router = router;