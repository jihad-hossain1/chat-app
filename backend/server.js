const express = require('express');
const dotenv = require('dotenv')
const cors = require('cors');
const connectDB = require('./config/db');
const userRoutes = require('./routes/userRoutes');
const chatRoutes = require('./routes/chatRoutes')
const { notFound, errorHandler } = require('./middleware/errorMiddleware');

dotenv.config()
connectDB();
const app = express();
app.use(cors())
app.use(express.json())

app.get('/', (req,res) => {
    res.send('api runing')
})

app.use('/api/user', userRoutes)
app.use('/api/chat',chatRoutes)

app.use(notFound)
app.use(errorHandler)


const PORT = process.env.PORT || 5000

app.listen(5000, console.log(`server run on port ${PORT}`))