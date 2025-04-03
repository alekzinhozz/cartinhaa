const confettiCount = 100;
for (let i = 0; i < confettiCount; i++) {
    const confetti = document.createElement('div');
    confetti.classList.add('confetti');
    confetti.style.left = Math.random() * 100 + 'vw';
    confetti.style.animationDelay = Math.random() * 5 + 's';
    document.body.appendChild(confetti);
}
const confettiElements = document.querySelectorAll('.confetti');
const colors = ['#FF5733', '#33FF57', '#3357FF', '#FF33A1', '#FFBD33'];
confettiElements.forEach((confetti, index) => {
    confetti.style.backgroundColor = colors[index % colors.length];
});
const button = document.getElementById('button');



