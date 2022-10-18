const express = require(`express`)
const cors = require(`cors`)

const app = express()

app.use(cors())
app.use(express.json())


const {getAllHouses, deleteHouse, createHouse, updateHouse } = require(`./controller.js`)


app.get(`/api/houses`, getAllHouses)
app.post(`/api/houses`, createHouse)
app.delete(`/api/houses/:id`, deleteHouse)
app.put(`/api/houses/:id`, updateHouse)





//infinity loop to run server
app.listen(4004, () => {
    console.log(`running on port 6000`)
})