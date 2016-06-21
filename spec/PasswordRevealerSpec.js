var PasswordRevealer = require("../src/PasswordRevealer")

describe("Password Revealer", function () {
    context("When I have entered a password", function () {
        var passwordController

        beforeEach(function () {
            passwordController = new FakePasswordController()
        })

        it("is hidden", function () {
            expect(passwordController.getState()).toEqual("hidden")
        })

        context("When I toggle password reveal", function () {
            it("is revealed", function () {
                var passwordRevealer = new PasswordRevealer(passwordController)
                passwordRevealer.toggle()
                expect(passwordController.getState()).toEqual("revealed")
            })
        })
    })
})

function FakePasswordController() {
    this.state = "hidden";

    this.getState = function () {
        return this.state
    }

    this.reveal = function () {
        this.state = "revealed"
    }

}