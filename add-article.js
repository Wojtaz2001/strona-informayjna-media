document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('article-form');

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const title = document.getElementById('title').value;
        const content = document.getElementById('content').value;
        const category = document.getElementById('category').value;
        const imageInput = document.getElementById('image');
        const imageFile = imageInput.files[0];

        const reader = new FileReader();
        reader.onload = function(e) {
            const imageUrl = e.target.result;

            const article = {
                title: title,
                content: content,
                image: imageUrl
            };

            let articles = JSON.parse(localStorage.getItem(category)) || [];
            articles.push(article);
            localStorage.setItem(category, JSON.stringify(articles));

            form.reset();
            alert('Artykuł został dodany!');
        };

        reader.readAsDataURL(imageFile);
    });
});