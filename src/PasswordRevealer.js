function PasswordRevealer(passwordController, revealController) {
    var amountOfToggles = 0

    this.passwordController = passwordController
    this.revealController = revealController

    this.toggle = function () {
        amountOfToggles += 1
        if (amountOfToggles % 2 == 1) {
            this.passwordController.reveal()
            this.revealController.turnOn()
        } else {
            this.passwordController.hide()
            this.revealController.turnOff()
        }
    }
}

if (typeof module != "undefined") {
    module.exports = PasswordRevealer
}