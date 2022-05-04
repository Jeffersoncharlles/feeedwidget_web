
import express from 'express'

import { Routes } from './routes'


const server = express()
server.use(express.json())
server.use(Routes)


server.listen(3333, () => console.log("server running"))