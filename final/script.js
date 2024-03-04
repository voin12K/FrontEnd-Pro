document.addEventListener('DOMContentLoaded', function() {
    loadPosts();
    setupThemeToggle();

    document.getElementById('postForm').addEventListener('submit', function(e) {
        e.preventDefault();
        const title = document.getElementById('postTitle').value;
        const content = document.getElementById('postContent').value;
        const imageFile = document.getElementById('postImage').files[0];

        if (title && content && imageFile) {
            const reader = new FileReader();
            reader.onload = function(e) {
                const post = { title, content, imageUrl: e.target.result };
                addPostToPage(post);
                savePost(post);
                document.getElementById('postForm').reset();
            };
            reader.readAsDataURL(imageFile);
        } else {
            alert("Заполните все поля и выберите изображение!");
        }
    });

    document.getElementById('clearPosts').addEventListener('click', function() {
        localStorage.clear();
        loadPosts();
    });
});

function setupThemeToggle() {
    const themeToggle = document.getElementById('themeToggle');
    const currentTheme = localStorage.getItem('theme') || 'dark';
    document.body.className = currentTheme;

    themeToggle.addEventListener('click', function() {
        const currentTheme = document.body.className;
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

        document.body.className = newTheme;
        localStorage.setItem('theme', newTheme);
    });
}

function createPost(post, index) {
    const postDiv = document.createElement('div');
    postDiv.classList.add('post');

    if (post.imageUrl) {
        const postImage = document.createElement('img');
        postImage.src = post.imageUrl;
        postImage.style.width = '100%'; // Или другой размер, который вам подходит
        postDiv.appendChild(postImage);
    }

    const postTitle = document.createElement('h3');
    postTitle.textContent = post.title;
    const postContent = document.createElement('p');
    postContent.textContent = post.content;

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Удалить';
    deleteButton.addEventListener('click', function() {
        deletePost(index);
    });

    postDiv.appendChild(postTitle);
    postDiv.appendChild(postContent);
    postDiv.appendChild(deleteButton);

    return postDiv;
}

function addPostToPage(post) {
    const postsContainer = document.getElementById('posts');
    const postDiv = createPost(post);
    postsContainer.appendChild(postDiv);
}

function savePost(post) {
    let posts = JSON.parse(localStorage.getItem('posts')) || [];
    posts.push(post);
    localStorage.setItem('posts', JSON.stringify(posts));
}

function loadPosts() {
    const posts = JSON.parse(localStorage.getItem('posts')) || [];
    document.getElementById('posts').innerHTML = '';
    posts.forEach((post, index) => {
        addPostToPage(post, index);
    });
}

function deletePost(index) {
    let posts = JSON.parse(localStorage.getItem('posts')) || [];
    posts.splice(index, 1);
    localStorage.setItem('posts', JSON.stringify(posts));
    loadPosts();
}
