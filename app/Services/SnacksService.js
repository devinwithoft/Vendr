import { appState } from "../AppState.js";

class SnacksService {
    getChange() {
        // STUB WANT TO MAKE RANDOM
        appState.money = appState.money += .25
    }

    //         buySnack() {
    //             let snack = appState.activeSnack
    //             if (appState.money >= snack.price)
    //                 appState.money -= snack.price
    //             console.log("bought", snack.name)
    // }

    setActive(number) {
        let snack = appState.snacks.find(a => a.number == number)
        appState.activeSnack = snack
        console.log("service")
    }

    insertCash() {
        if (appState.money >= 1) {
            appState.money -= 1
            appState.moneyIn += 1
            console.log(appState.moneyIn)
            console.log(appState.money)
        }
    }
}

// }

export const snacksService = new SnacksService()