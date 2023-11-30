import winston from 'winston'

const logger = winston.createLogger({
    transports: [
        new winston.transports.Console({
            level: 'info',
            format: winston.format.json()
        })
    ]
})

export default logger