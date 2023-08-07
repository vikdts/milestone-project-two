//create an array with elective buttons
const buttonsArray = Array.from(document.querySelectorAll(".btn-big"));
buttonsArray.forEach((button) => {
    // console.log(button.getAttribute("data-type"));
});

//pick random button of the elective for the computer to play
function computerClick() {
    let random = Math.floor(Math.random() * buttonsArray.length);
    return buttonsArray[random].getAttribute("data-type");
}



// Get all elements with class "btn-big" and the "btn-play" button
const bigButtons = document.querySelectorAll(".btn-big");
const playButton = document.querySelector(".btn-play");
const hiddenDiv = document.getElementById("result");





// Add event listeners to the "btn-big" buttons
bigButtons.forEach((bigButton) => {
    bigButton.addEventListener("click", function () {
        // Get data-type attribute of the clicked "btn-big" button
        const dataType = bigButton.getAttribute("data-type");
        if (dataType) {
            // Save the data-type to a variable to use later when the "btn-play" button is clicked
            lastClickedDataType = dataType;
        }
    });
});