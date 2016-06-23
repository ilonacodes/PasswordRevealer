var PasswordRevealer = require("../src/PasswordRevealer")

describe("Password Revealer", function () {
    context("When I have entered a password", function () {
        var passwordController, passwordRevealer, revealController

        beforeEach(function () {
            passwordController = new FakePasswordController()
            revealController = new FakeRevealController()
            passwordRevealer = new PasswordRevealer(passwordController, revealController)
        })

        it("is hidden", function () {
            expect(passwordController.getState()).toEqual("hidden")
        })

        it("has password reveal control off", function () {
            expect(revealController.getState()).toEqual("off")
        })

        context("When I toggle password reveal", function () {
            beforeEach(function () {
                passwordRevealer.toggle()
            })

            it("has password reveal control on", function () {
                expect(revealController.getState()).toEqual("on")
            })

            it("is revealed", function () {
                expect(passwordController.getState()).toEqual("revealed")
            })

            context("When I toggle password reveal again", function () {
                beforeEach(function () {
                    passwordRevealer.toggle()
                })

                it("is hidden", function () {
                    expect(passwordController.getState()).toEqual("hidden")
                })

                it("has password reveal control off", function () {
                    expect(revealController.getState()).toEqual("off")
                })

                context("When I toggle password reveal again", function () {
                    beforeEach(function () {
                        passwordRevealer.toggle()
                    })

                    it("is revealed", function () {
                        expect(passwordController.getState()).toEqual("revealed")
                    })
                })
            })
        })
    })
})

function FakeRevealController() {
    this.turnOff = function () {
        this.state = "off";
    }

    this.getState = function () {
        return this.state
    }

    this.turnOn = function () {
        this.state = "on"
    }

    this.turnOff()
}

function FakePasswordController() {
    this.state = "hidden";

    this.getState = function () {
        return this.state
    }

    this.reveal = function () {
        this.state = "revealed"
    }
    
    this.hide = function () {
        this.state = "hidden"
    }

}