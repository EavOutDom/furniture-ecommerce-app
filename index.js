const express = require('express')
const env = require('dotenv')
const mongoose = require('mongoose')
const app = express()
const cors = require('cors');
const productRouter = require('./routes/products');
const authRouter = require('./routes/auth');
const userRouter = require('./routes/user');
const cartRouter = require('./routes/cart');
const port = 3000;

env.config();
mongoose.connect(process.env.MONGO_URL).then(res => console.log('database connected')).catch(er => console.error(er));

app.use(cors({ origin: true, credentials: true }));
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ limit: '10mb', extended: true }));

app.use('/api/', authRouter);
app.use('/api/user', userRouter);
app.use('/api/products', productRouter);
app.use('/api/cart', cartRouter);
app.listen(process.env.PORT || port, () => console.log(`Example app listening on port ${process.env.PORT}!`));