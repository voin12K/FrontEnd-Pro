document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('postForm').addEventListener('submit', function(e) {
        e.preventDefault();

        const title = document.getElementById('postTitle').value;
        const content = document.getElementById('postContent').value;

        if (title && content) {
            addPostToPage(title, content);
            document.getElementById('postForm').reset();
        } else {
            alert("Заполните все поля!");
        }
    });

    function createPost(title, content) {
        const postDiv = document.createElement('div');
        postDiv.classList.add('post');

        const postTitle = document.createElement('h3');
        postTitle.textContent = title;

        const postContent = document.createElement('p');
        postContent.textContent = content;

        postDiv.appendChild(postTitle);
        postDiv.appendChild(postContent);

        return postDiv;
    }

    function addPostToPage(title, content) {
        const postsContainer = document.getElementById('posts');
        const postDiv = createPost(title, content);
        postsContainer.appendChild(postDiv);
    }
});
