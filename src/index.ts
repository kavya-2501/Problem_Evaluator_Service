import bodyParser from 'body-parser';
import express, {Express} from "express";

import serverAdapter from "./config/bullboardConfig";
import serverConfig from "./config/server.config";
import SampleProducer from "./producers/sampleQueueProducer";
import apiRouter from "./routes";
import SampleWorker from "./workers/sampleQueueWorker";

const app: Express = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.text());

app.use('/api',apiRouter);
app.use('/admin/queues', serverAdapter.getRouter());

app.listen(serverConfig.PORT, () => {
  console.log(`Server started on port :${serverConfig.PORT}`);
  console.log('For the UI, open http://localhost:4000/admin/queues');

  SampleWorker('SampleQueue');

  SampleProducer('SampleJob',{
    name:'Disha',
    company:"Wells Fargo",
    position:"Trainee software engineer",
    locaation:'BLR'
  },2);
  
  SampleProducer('SampleJob',{
    name:'Kavya',
    company:"Credera",
    position:"Trainee software engineer",
    locaation:'Hyderabad'
  },1);
  
});
