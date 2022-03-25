console.log("hello world");



function handleSubmit(evt) {
    evt.preventDefault();

    alert('form submit');
}


let form = document.querySelector('form#contact');

form.addEventListener('submit', handleSubmit);

document.getElementById("cat").addEventListener("mouseover", () => { alert("You're a clever kitty!"); })