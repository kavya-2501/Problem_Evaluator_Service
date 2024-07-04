import DockerStreamOutput from "../types/dockerStreamOutput";
import { DOCKER_STREAM_HEADER_SIZE } from "../utils/constants";

export default function decodeDockerStream(buffer:Buffer) :(DockerStreamOutput){
    let offset=0;

    // The output that will store the accumulated stdout and stderr output as strings.
    const output:DockerStreamOutput ={stdout:'',stderr:''};
    
    // loop till output reaches the end of the buffer
    while(offset<buffer.length){
        const typeOfStream=buffer[offset];

        // the length holds the length of data frame/part of buffer where data is
        const length=buffer.readUint32BE(offset+4);

        offset+=DOCKER_STREAM_HEADER_SIZE;

        if(typeOfStream===1){
            //stdout stream
            output.stdout+=buffer.toString('utf-8',offset,offset+length);
        }
        else if (typeOfStream===2){
            //stderr stream
            output.stderr+=buffer.toString('utf-8',offset,offset+length);
        }
        offset+=length;

    }
    return output;
}

// suppose if we have a chunk of data then the first 8 bytes is the header of the chunk of which
// header(8byte)= 4 bytes tell about type of stream(output/error) + 4 bytes about the length of the actual value

// Step 1 
// Extract the type of stream first by buffer[offset];

// Step 2
// extract the length of data by using offset+4

// Step 3 
// extract the value of the buffer by doing offset+=DOCKER_STREAM HEADER SIZE;

// Step 4
// move to the next chunk by doing offset+=length;