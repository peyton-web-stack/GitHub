// Simple form submission feedback
function handleFormSubmit(event) {
    event.preventDefault();
    const button = event.target.querySelector('button[type="submit"]');
    button.textContent = 'Message Sent!';
    button.style.background = '#d4a574';
    setTimeout(() => {
        button.textContent = 'Send Message';
        button.style.background = '#8b7355';
        event.target.reset();
    }, 2000);
}
