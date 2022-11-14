export class Snack {
    constructor(data) {
        this.name = data.name
        this.price = data.price
        this.img = data.img
        this.number = data.number
    }

    get SnackTemplate() {
        return `<div class="col-5 text-center"><img src="${this.img}"
        class="img-fluid snacksize rounded my-2 border-bottom border-white" onclick="app.snacksController.setActive(${this.number})"><br> <span class="bg-white text-black"${this.number}</span>
</div>`
    }

    get ActiveTemplate() {
        return `<div> ${this.name} "${this.price}" ${this.number} </div>`
    }
}