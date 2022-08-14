function clickAlert() {
    alert("You have clicked me!")
}

function addingEventListener() {
    const input = document.getElementById("input");
    input.addEventListener("click", clickAlert);
}