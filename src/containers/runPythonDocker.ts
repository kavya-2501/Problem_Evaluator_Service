// import Docker from 'dockerode';

import { PYTHON_IMAGE } from '../utils/constants';
import createContainer from './containerFactory';
// import { TestCases } from '../types/testCases';

async function pythonRun(code:string){
    const rawBuffer: Buffer[] =[];
    console.log("Initialising a new python container");

    const pythonDockerContainer=await createContainer(PYTHON_IMAGE,['python3','-c',code,'stty-echo']);

    // Starting/booting the container
    await pythonDockerContainer.start();
    console.log("Started the docker container");
    const loggerStream=await pythonDockerContainer.logs({
        stderr:true,
        stdout:true,
        timestamps:false,
        follow:true   //whether logs are streamed or returned as a string
    });

    // Attach events on the stream to stop and start reading
    loggerStream.on('data',(chunk)=>{
        rawBuffer.push(chunk);
    });

    loggerStream.on('end',()=>{
        console.log(rawBuffer);
    });
    
    return pythonDockerContainer;

}

export default pythonRun;