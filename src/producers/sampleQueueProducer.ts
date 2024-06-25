import sampleQueue from "../queues/sampleQueue";

export default async function SampleProducer(name:string,payload:Record<string,unknown>) {
    await sampleQueue.add(name,payload,);
    console.log("Successfully added a new job");
    
};