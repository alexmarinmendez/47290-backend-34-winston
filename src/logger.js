import winston from 'winston'

const customWinstonLevels = {
    levels: {
        debug: 0,
        http: 1,
        info: 2,
        warning: 3,
        error: 4,
        fatal: 5
    },
    colors: {
        debug: 'white',
        http: 'green',
        info: 'blue',
        warning: 'yellow',
        error: 'magenta',
        fatal: 'red'
    }
}

winston.addColors(customWinstonLevels.colors)

const logger = winston.createLogger({
    levels: customWinstonLevels.levels,
    transports: [
        new winston.transports.Console({
            level: 'fatal',
            format: winston.format.combine(
                winston.format.timestamp(),
                winston.format.colorize(),
                winston.format.simple()
            )
        }),
        new  winston.transports.File({
            filename: 'server.log',
            level: 'info',
            format: winston.format.json()
        })
    ]
})

export default logger