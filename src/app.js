import express from "express";
import __dirname from "./utils.js";
import handlebars from 'express-handlebars'
import mongoose from "mongoose";
import cartsRouter from './routes/carts.router.js'
import viewRouter from './routes/views.router.js'

const app = express()
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.engine('handlebars',handlebars.engine())
app.set('views',__dirname + '/views')
app.set('view engine', 'handlebars')
app.use(express.static(__dirname + '/public'))

app.use("/",viewRouter)
app.use("/api/carts",cartsRouter)

const SERVER_PORT = 9090
app.listen(SERVER_PORT,()=> {
    console.log(`Escuchando en el puerto http://localhost:${SERVER_PORT}`)
})
const connectMongoDB = async ()=> {
    await mongoose.connect('mongodb+srv://roxanarmoa:coderhouse@cluster0.p0ja74o.mongodb.net/E-commerce?retryWrites=true&w=majority&appName=Cluster0')
    console.log("Conectado con exito a MongoDB usando Moongose.");
}
connectMongoDB()