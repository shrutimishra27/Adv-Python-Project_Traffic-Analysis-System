// Get references to form elements and the login message div
const loginForm = document.getElementById('loginForm');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const loginMessage = document.getElementById('loginMessage');

// Add a submit event listener to the login form
loginForm.addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent the form from submitting

    // Validate the username and password (you should add your own validation logic here)
    const username = usernameInput.value;
    const password = passwordInput.value;

    if (username === 'yourusername' && password === 'yourpassword') {
        loginMessage.textContent = 'Login successful! Redirecting...';
        loginMessage.style.color = '#00cc00';
        setTimeout(() => {
            // Simulate a redirect to the dashboard page
            window.location.href = 'dashboard.html'; // Replace with the actual URL
        }, 2000);
    } else {
        loginMessage.textContent = 'Invalid username or password. Please try again.';
        loginMessage.style.color = '#ff0000';
    }

    // Display the login message
    loginMessage.style.display = 'block';
});
