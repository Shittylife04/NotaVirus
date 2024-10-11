const yesButton = document.getElementById('yesButton');
const noButton = document.getElementById('noButton');
const response = document.getElementById('response');

yesButton.addEventListener('click', () => {
    response.innerHTML = '<p>Yes! I knew it!</p><img src="response.gif"/>';
    response.classList.remove('hidden');
});

noButton.addEventListener('click', () => {
    moveButton(noButton);
});

function moveButton(button) {
    const x = Math.random() * window.innerWidth;
    const y = Math.random() * window.innerHeight;

    button.style.position = 'absolute';
    button.style.left = `${x}px`;
    button.style.top = `${y}px`;
}