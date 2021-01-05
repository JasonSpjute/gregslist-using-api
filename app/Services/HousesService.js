import { ProxyState } from "../AppState.js"
import House from "../Models/House.js"
import { api } from "./AxiosService.js"


class HousesService{
    async bid(id, price) {
        let houseData = {price: price}
        await api.put("houses/"+id, houseData )
        this.getHouses()
    }
    async getHouses() {
        let res = await api.get("houses")
        console.log(res)
        ProxyState.houses = res.data.map(s=> new House(s))
    }
    async deleteHouse(id) {
        await api.delete("houses/"+id)
        ProxyState.houses = ProxyState.houses.filter(house=> house.id != id)
    }

    async createHouse(newHouse) {
        await api.post("houses", newHouse)
        this.getHouses()
    }
}

export const housesService = new HousesService()