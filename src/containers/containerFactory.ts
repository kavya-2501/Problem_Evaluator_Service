import Docker from 'dockerode';

async function createContainer(imageName:string,cmdExecutable:string[]){
    const docker =new Docker();

    const container=docker.createContainer({
        Image:imageName,
        Cmd:cmdExecutable,
        AttachStdin:true,     //attach/enable input stream
        AttachStdout:true,    //attach output stream
        AttachStderr:true,    //attach error stream
        OpenStdin:true        //input stream is enabled even in case of no docker interaction
    });
    return container;
}

export default createContainer;