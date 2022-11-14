import { appState } from "../AppState.js";
import { snacksService } from "../Services/SnacksService.js";
import { setHTML } from "../Utils/Writer.js";

function _drawSnacks() {
    let snacks = appState.snacks
    let template = ''
    snacks.forEach(s => template += s.SnackTemplate)
    setHTML('machinefront', template)
}

function _drawActive() {
    let snack = appState.activeSnack
    setHTML("snackName", snack.name)
    console.log("controller")
    setHTML("snackPrice", snack.price)
}

function _drawMoney() {
    setHTML("money", appState.money)
}

export class SnacksController {
    constructor() {
        _drawSnacks()
        appState.on('money', _drawMoney)
    }
    getChange() {
        console.log('asking for change');
        snacksService.getChange()
    }

    setActive(number) {
        snacksService.setActive(number)
        _drawActive()
    }

    insertCash() {
        snacksService.insertCash()
    }

    buySnack() {
        snacksService.buySnack()
    }
}


