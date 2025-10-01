const btn = document.getElementById('myBtn');
const navContainer = document.querySelector('nav');

btn.addEventListener('click', () => {
    console.log('Button was clicked!');

    fetch("/test")
    .then(r => r.json())
    .then(data => {
        const entityNavigation = new CharacterEntityNavigation(data);
        entityNavigation.setNavigation(navContainer);
        // console.log(entityNavigation)
        // console.log("Data received from server:", data);
    })
    .catch(err => console.error('Error fetching from server:', err));
});