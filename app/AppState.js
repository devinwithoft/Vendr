import { Snack } from "./Models/Snack.js"
import { Value } from "./Models/Value.js"
import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"
import { loadState } from "./Utils/Store.js"

class AppState extends EventEmitter {
    /** @type {import('./Models/Value').Value[]} */
    values = loadState('values', [Value])

    snacks = [
        new Snack({
            name: "Doritos",
            price: 1.50,
            img: 'https://www.caseys.com/medias/sys_master/images/h12/h27/8986511835166/2840016464_base-400x400/2840016464-base-400x400.png',
            number: 1,
        }),
        new Snack({
            name: 'Pretzles',
            price: 1.25,
            img: 'https://image.influenster.com/eyJidWNrZXQiOiAiaW5mbHVlbnN0ZXJfcHJvZHVjdGlvbiIsICJrZXkiOiAibWVkaWEvcHJvZHVjdC9pbWFnZS82YjY2YmIzYi02OTI5LTRkOWUtOGEwMi00YmM2NjU3MTZlZjUucG5nIiwgImVkaXRzIjogeyJyb3RhdGUiOiBudWxsLCAicmVzaXplIjogeyJ3aWR0aCI6IDc1MCwgImhlaWdodCI6IDc1MCwgImZpdCI6ICJpbnNpZGUiLCAiYmFja2dyb3VuZCI6IHsiciI6IDEsICJnIjogMSwgImIiOiAxLCAiYWxwaGEiOiAwfSwgIndpdGhvdXRFbmxhcmdlbWVudCI6IHRydWV9fSwgImV4dGVuZCI6IHt9fQ==',
            number: 2
        }),
        new Snack({
            name: 'Fritos',
            price: 1.50,
            img: 'https://www.fritolay.com/sites/fritolay.com/files/fritos-original.png',
            number: 3
        }),
        new Snack({
            name: 'Cookies',
            price: 2.25,
            img: 'https://media.officedepot.com/images/f_auto,q_auto,e_sharpen,h_450/products/918106/918106_o02_outofpackage/918106',
            number: 4
        }),
        new Snack({
            name: 'Twix',
            price: 1.25,
            img: 'http://yalinscandystore.weebly.com/uploads/2/4/6/4/24648956/6279534_orig.png',
            number: 5
        }),
        new Snack({
            name: 'Skittles',
            price: 1.25,
            img: 'https://justdash-it.com/wp-content/uploads/2021/09/skittles-candy-category-300x300.png',
            number: 6
        })]

    money = 0
    moneyIn = 0
    activeSnack = null
}

export const appState = new Proxy(new AppState(), {
    get(target, prop) {
        isValidProp(target, prop)
        return target[prop]
    },
    set(target, prop, value) {
        isValidProp(target, prop)
        target[prop] = value
        target.emit(prop, value)
        return true
    }
})
