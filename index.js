const dotenv = require('dotenv');
const app = require('app.js');
dotenv.config({path : './config/config.env'})

const port = process.env.PORT || 3000;

app.listen(port, () =>{
    console.log(`Server started on port ${port} in ${process.env.NODE_ENV} mode.`)
})