let count = 649;
function render() {
    const element = document.getElementById('container');
    element.innerHTML = `<img class='icons' src="https://tinyurl.com/ironhack-pokemons/${count}.svg">`
}
render();
let prev = document.getElementById('prev');
let next = document.getElementById('next');

prev.onclick = function () {
    if (count > 1) {
        count -= 1;
        render()
    }
}

next.onclick = function () {
    if (count < 649) {
        count += 1;
        render()
    }
}
