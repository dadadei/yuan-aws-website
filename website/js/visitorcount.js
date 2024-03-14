document.addEventListener('DOMContentLoaded', (event) => {
    fetch('https://hmcmmrovh5c53cwkm6pd5nfnui0nwjnx.lambda-url.us-east-1.on.aws/')
        .then(response => response.json())
        .then(data => {
            const viewersCountElement = document.getElementById('visitors');
            viewersCountElement.textContent = data;
        })
        .catch(error => console.log('Error fetching visitor count:', error));
});
