const express = require('express')
const app = express();
app.set('port', 3001 || process.env.PORT )
app.get('/',(req,res)=>{
    res.send("heythere1")
})
app.listen(app.get('port'))
