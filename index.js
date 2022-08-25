function clickAlert() {
    alert("You have clicked me!")
}

function addingEventListener() {
    const input = document.getElementById("button");
    input.addEventListener("click", clickAlert);
}