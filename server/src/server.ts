
import express from 'express'
import cors from 'cors'
import { Routes } from './routes'

const server = express()

server.use(cors())
server.use(express.json())
server.use(Routes)


server.listen(3333, () => console.log("server running"))