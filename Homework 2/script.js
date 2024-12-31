document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Fetch user data from JSON file
    fetch('users.json')
        .then(response => response.json())
        .then(users => {
            const user = users.find(u => u.username === username && u.password === password);

            if (user) {
                if (user.role === 'admin') {
                    window.location.href = 'admin.html';
                } else if (user.role === 'teacher') {
                    window.location.href = 'teacher.html';
                } else {
                    alert('Role not recognized.');
                }
            } else {
                alert('Invalid username or password.');
            }
        })
        .catch(error => {
            console.error('Error loading user data:', error);
        });
});
