// Load search history from JSON file or localStorage
document.addEventListener('DOMContentLoaded', () => {
    const searchHistory = JSON.parse(localStorage.getItem('searchHistory')) || [];
    displayHistory(searchHistory);
});

// Search button functionality
document.getElementById('searchBtn').addEventListener('click', () => {
    const searchInput = document.getElementById('searchInput').value.trim();
    if (searchInput) {
        let searchHistory = JSON.parse(localStorage.getItem('searchHistory')) || [];
        searchHistory.push(searchInput);
        localStorage.setItem('searchHistory', JSON.stringify(searchHistory));
        displayHistory(searchHistory);
        document.getElementById('searchInput').value = ''; // clear input
    }
});

// Clear history functionality
document.getElementById('clearBtn').addEventListener('click', () => {
    localStorage.removeItem('searchHistory');
    displayHistory([]);
});

// Function to display search history
function displayHistory(history) {
    const historyList = document.getElementById('searchHistory');
    historyList.innerHTML = '';
    history.forEach((term, index) => {
        let listItem = document.createElement('li');
        listItem.textContent = `${index + 1}. ${term}`;
        historyList.appendChild(listItem);
    });
}
