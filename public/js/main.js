const btn = document.getElementById('myBtn');

btn.addEventListener('click', () => {
    console.log('Button was clicked!');

    fetch("/test")
    .then(r => r.json())
    .then(data => console.log(data.data.results))
    .catch(err => console.error('Error fetching from server:', err));
});