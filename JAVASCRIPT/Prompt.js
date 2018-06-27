function welcome() {
    var person = prompt("Please enter your name for a personalised welcome message",);
    if (person != null) {
        document.getElementById("displayMessage").innerHTML ="Hi " + person + "! Welcome to my portfolio - hope you enjoy it!";
    }
}
