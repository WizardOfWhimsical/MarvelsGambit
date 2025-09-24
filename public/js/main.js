const btn = document.getElementById('myBtn');

btn.addEventListener('click', () => {
    console.log('Button was clicked!');

    fetch("/")
    .then(r => console.log(r))
});