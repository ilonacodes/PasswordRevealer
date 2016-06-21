function PasswordRevealer(passwordController) {
    this.passwordController = passwordController
    
    this.toggle = function () {
        this.passwordController.reveal()
    }

}

if (typeof module != "undefined") {
    module.exports = PasswordRevealer
}