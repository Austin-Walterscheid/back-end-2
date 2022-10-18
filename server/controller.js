
const houses = require(`./db.json`)
const newHouse = 4
module.exports = {
    getAllHouses: (req, res) => {
    res.status(200).send(houses)
    },
    deleteHouse: (req, res) => {
        const deleteId =req.params.id
        let index =houses.findIndex(element => element.id === +deleteId)
        houses.splice(index, 1)
        res.status(200).send(houses)
    },
    createHouse: (req, res) => {
        const {address, price, imageURL} =req.body
        let biggestId = -1

        //loops through house db to find the biggest id
        for (let i = 0; i < houses.length; i++){
            if(houses[i].id > biggestId){
                biggestId = houses[i].id
            }
        }
        let nextId = biggestId + 1

        let newHouse = {
            id: nextId,
            address,
            price: +price,
            imageURL
        }
        houses.push(newHouse)
        res.status(200).send(houses)
    },
    updateHouse: (req, res) => {
        let type = req.body.type
        let id = req.params.id
        let index = houses.findIndex(element => element.id === +id)
        if(type === `plus`) {
            houses[index].price += 1000
        }else if (type === `minus`) {
            houses[index].price -= 1000
        }else{
        res.sendStatus(400)}

        res.status(200).send(houses)
    }
}





