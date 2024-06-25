import winston from "winston";

const allowedTransports=[];

allowedTransports.push(new winston.transports.Console());


const logger=winston.createLogger({
    format:winston.format.combine(
        winston.format.timestamp({
            format:'YYYY-MM-DD HH:mm:sss'
        }),
        winston.format.printf((log)=>`${log.timestamp} [${log.level}] ${log.message}`)
    ),
    transports:allowedTransports
});

export default logger;