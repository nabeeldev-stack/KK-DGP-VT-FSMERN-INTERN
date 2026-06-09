function login(email, password) {
    if (email === "a@gmail.com" && password === "1234") {
        return "login successful";
    } else {
        return "invalid login";
    }
}

module.exports = {login}