//create an array with elective buttons
const buttonsArray = Array.from(document.querySelectorAll(".btn-big"));
buttonsArray.forEach((button) => {
    console.log(button.getAttribute("data-type"));
});

//pick random button of the elective for the computer to play
function computerClick() {
    let random = Math.floor(Math.random() * buttonsArray.length);
    return buttonsArray[random].getAttribute("data-type");
}