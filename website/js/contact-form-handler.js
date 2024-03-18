document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        subject: document.getElementById('subject').value,
        message: document.getElementById('message').value
    };

    fetch('https://vimwo2wn375bs3ftsjveoa5mna0qgtjd.lambda-url.us-east-1.on.aws/', { 
        method: 'POST',
        body: JSON.stringify(formData),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => response.json())
    .then(data => {
        console.log(data);
        alert("Message sent successfully!");
    })
    .catch((error) => {
        console.error('Error:', error);
        alert("Oops! Please send again!");
    });
});
