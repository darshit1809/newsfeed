const apiKey = 'pub_598130368b2c233dc6f7c24a8ce5d43322fe3'; 
const newsContainer = document.getElementById('news-container');
const submitButton = document.getElementById('submit-button');

submitButton.addEventListener('click', fetchNewsAndDisplay);

function fetchNewsAndDisplay() {
    
    fetch(`https://newsdata.io/api/1/latest?apikey=pub_598130368b2c233dc6f7c24a8ce5d43322fe3&q=mental%20health&sentiment=negative`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            return response.json();
        })
        .then(data => {
            
            newsContainer.innerHTML = '';
           
            displayNews(data.articles);
        })
        .catch(error => console.error('Error fetching news:', error));
}

function displayNews(articles) {
    articles.forEach(article => {
        const articleElement = document.createElement('div');
        articleElement.innerHTML = `
            <h2>${article.title}</h2>
            <p>${article.description}</p>
        `;
        newsContainer.appendChild(articleElement);
    });
}