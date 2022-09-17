var translate = document.querySelector("#translate");
var textInput = document.querySelector("#usr-input");
var outText = document.querySelector("#outText");

var serverUrl = "https://api.funtranslations.com/translate/navi.json";

function getTranslationUrl(text) {
    return serverUrl + "?" + "text=" + text;
}

function errorHandler(error) {
    alert("Something went wrong with the server! try again after some time");
}

function clickHandler() {
    var userInput = textInput.value;

    // calling server for processing 
    fetch(getTranslationUrl(userInput))
        .then(response => response.json())
        .then(json => {
            var translatedText = json.contents.translated;
            outText.innerText = translatedText;
        })
        .catch(errorHandler)

    // outText.innerText = textInput.value;
    outText.style.opacity = "100%";
}

translate.addEventListener("click", clickHandler);




