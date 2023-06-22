import {defineStore} from "pinia";

interface valuesInterface extends IObjectKeys {
    price: number
    cost: number
    discount: number,
    enableDiscount: number
}

interface IObjectKeys {
    [key: string]: number;
}

export const userDataStore = defineStore('dataStore', {
    state: () => ({
        price: 0,
        cost: 0,
        discount: 0,
        enableDiscount: 0
    } as valuesInterface),
    actions: {
        updateValue: function (key: string, value: number) {
            if (!value) {
                this.$state[key] = 0
                return
            }
            this.$state[key] = value
        },
    },
    getters: {
        profit: (state: valuesInterface) => state.price * (100 - state.enableDiscount ? state.discount : 0) / 100 - state.cost
    },
})