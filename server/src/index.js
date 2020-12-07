import express from 'express';
import renderer from './helper/renderer';

const app = express();

app.use(express.static('public'));

app.get("*", (req, res) => {
  res.send(renderer(req));
});

app.listen(3000, () => {
  console.log("server listening on 3000");
});
