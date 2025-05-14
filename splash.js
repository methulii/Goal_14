
setTimeout(function() {
    window.location.href = 'home.html'; 
}, 4000); // 4 seconds


// script.js fro progressing bar
document.addEventListener('DOMContentLoaded', function() {
    const progressBar = document.getElementById('progress');
    const redirectUrl = ''; // Set my redirect URL here
    const duration = 4000; // 4 seconds
    const interval = 10; // Update every 10ms
    let elapsedTime = 0;

    const intervalId = setInterval(() => {
        elapsedTime += interval;
        const progress = (elapsedTime / duration) * 100;
        progressBar.style.width = progress + '%';

        if (elapsedTime >= duration) {
            clearInterval(intervalId);
            window.location.href = redirectUrl; // Redirect to the home page
        }
    }, interval);
});
