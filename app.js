const express = require('express');
const app = express();
const PORT = process.env.PORT || 4000;
app.get('/',(req,res) => {
    res.status(200);
    res.send("Korovin Nikita 602")
});
app.listen(PORT,()=>console.log(`Server working on ${PORT}`)); 
