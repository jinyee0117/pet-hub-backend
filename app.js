import express from "express"
import userRouter from "./src/controllers/users.controllers.js"
import authRouter from "./src/controllers/auth.controllers.js"
import cors from 'cors'
// import prisma from "./src/utils/prisma.js"

const app = express()
app.use(express.json())
app.use(cors())

app.use('/users', userRouter)
app.use('/signIn',authRouter)

export default app