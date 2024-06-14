const express = require('express')
const app = express()
const PORT = 3000


const DBConnect = require('./database/connection')
DBConnect()

app.use(express.json())

const Routes = require("./routes/routes")
app.use(Routes)

app.use("/test", (req, res) =>{
    res.send("ok")
})


app.listen(PORT, () => {
    console.log(`Aplicação rodando na porta ${PORT}`)
})