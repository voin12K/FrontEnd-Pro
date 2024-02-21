document.addEventListener('DOMContentLoaded', function() {
    loadPosts();

    document.getElementById('postForm').addEventListener('submit', function(e) {
        e.preventDefault();
        const title = document.getElementById('postTitle').value;
        const content = document.getElementById('postContent').value;
        if (title && content) {
            const post = { title, content };
            addPostToPage(post);
            savePost(post);
            document.getElementById('postForm').reset();
        } else {
            alert("Заполните все поля!");
        }
    });
});

function createPost(post, index) {
    const postDiv = document.createElement('div');
    postDiv.classList.add('post');
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

function addPostToPage(post, index) {
    const postsContainer = document.getElementById('posts');
    const postDiv = createPost(post, index);
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
