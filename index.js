document.getElementById('clickMeButton').addEventListener('click', function() {
    alert('Button clicked!');
});

document.getElementById('learnMoreButton').addEventListener('click', function() {
    document.getElementById('home').scrollIntoView({ behavior: 'smooth' });
});

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Message sent!');
});
