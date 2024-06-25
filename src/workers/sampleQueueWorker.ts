import { Job, Worker } from "bullmq";

import redisConnection from "../config/redisConfig";
import SampleJob from "../jobs/sampleJob";

export default function SampleWorker(queueName:string){
    new Worker(
        queueName,
        async (job:Job)=>{
            if(job.name==="SampleJob"){
               const sampleJobinstance= new SampleJob(job?.data);
               sampleJobinstance.handle(job);
               return true;
            }
        },
        {
            connection:redisConnection
        }
    );
}