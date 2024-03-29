import express from "express";
import Loadable from "react-loadable";

import indexController from "./controllers/index";

const PORT = process.env.PORT || 3000;

const app = express();

app.use(indexController);

Loadable.preloadAll().then(() => {
  app.listen(PORT, () => {
    console.log(`Floaty-ing on port ${PORT}`);
  });
});
