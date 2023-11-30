import express from 'express'
import logger from './logger.js'
import usersRouter from './routers/users.router.js'

const app = express()
app.use('/api/users', usersRouter)

app.listen(8080, () => logger.info('Server Up'))