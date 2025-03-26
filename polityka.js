document.addEventListener('DOMContentLoaded', () => {
    const articlesContainer = document.getElementById('articles');
    const articles = JSON.parse(localStorage.getItem('polityka')) || [];

    articles.forEach(article => {
        const articleElement = document.createElement('article');
        const titleElement = document.createElement('h3');
        const contentElement = document.createElement('p');
        const imageElement = document.createElement('img');

        titleElement.textContent = article.title;
        contentElement.textContent = article.content;
        imageElement.src = article.image;
        imageElement.alt = article.title;

        articleElement.appendChild(titleElement);
        articleElement.appendChild(imageElement);
        articleElement.appendChild(contentElement);

        articlesContainer.appendChild(articleElement);
    });
});