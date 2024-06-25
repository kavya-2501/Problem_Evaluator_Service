import express, {Express} from "express";

import serverConfig from "./config/server.config";
import SampleProducer from "./producers/sampleQueueProducer";
import apiRouter from "./routes";
import SampleWorker from "./workers/sampleQueueWorker";

const app: Express = express();

app.use('/api',apiRouter);

app.listen(serverConfig.PORT, () => {
  console.log(`Server started on port :${serverConfig.PORT}`);

  SampleWorker('SampleQueue');

  SampleProducer('SampleJob',{
    name:'Kavya',
    company:"Credera",
    position:"Trainee software engineer",
    locaation:'Hyderabad'
  });
});
