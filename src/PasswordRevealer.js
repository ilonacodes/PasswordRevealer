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

function PasswordController() {
    var password = document.getElementById("password")

    this.reveal = function () {
        password.type = "text"
    }

    this.hide = function () {
        password.type = "password"
    }
}

function RevealController() {
    var toggleButton = document.getElementById("password_revealer_toggle_button")

    this.turnOn = function () {
        toggleButton.value = "Hide"
    }

    this.turnOff = function () {
        toggleButton.value = "Reveal"
    }
}

if (typeof module != "undefined") {
    module.exports = PasswordRevealer
}