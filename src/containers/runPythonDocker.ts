// import Docker from 'dockerode';

import { PYTHON_IMAGE } from '../utils/constants';
import createContainer from './containerFactory';
import decodeDockerStream from './dockerHelper';
// import { TestCases } from '../types/testCases';

async function pythonRun(code:string,inputTestCases:string){
    const rawBuffer: Buffer[] =[];
    console.log("Initialising a new python container");
    const runCommand=`echo '${code.replace(/'/g,`'\\"`)}' > test.py && echo '${inputTestCases}' | python test.py`;

    const pythonDockerContainer=await createContainer(PYTHON_IMAGE,['/bin/sh','-c',runCommand]);

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
        const completeBuffer=Buffer.concat(rawBuffer);
        const decodedStream=decodeDockerStream(completeBuffer);
        console.log(decodedStream);
    });
    
    return pythonDockerContainer;

}

export default pythonRun;