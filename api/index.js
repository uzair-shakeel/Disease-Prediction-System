import express from "express"
import dotenv from "dotenv"
import cors from 'cors'
import cookieParser from "cookie-parser"
import diseaseRoute from './routes/diseaseRoute.js'

dotenv.config();
const app = express();
const port = process.env.PORT ||  8000
const corsOption = {
    origin: true,
    credentials: true,
};

//testing
app.get('/',(req, res)=>{
    res.send("api is working");
})

//middleware
app.use(express.json())
app.use(cors(corsOption))
app.use(cookieParser())

//Routes
app.use('/api/predict', diseaseRoute)


app.listen(port,()=>{
    console.log(`server listening on port: ${port}`);
})
