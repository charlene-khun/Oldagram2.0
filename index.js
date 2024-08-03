const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]

// Get the container element where posts will be rendered
const postsContainer = document.getElementById('posts-container');

// Iterate over the array of posts using a for loop
for (let i = 0; i < posts.length; i++) {
    const post = posts[i];

    // Use template literals to create the HTML for each post
    const postHTML = `
        <section class="post">
            <img class="profile" src="${post.avatar}" alt="${post.name} Profile">
            <div class="info">
                <p class="name">${post.name}</p>
                <p class="place">${post.location}</p>
            </div>
        </section>
        <section class="post">
            <img class="post-image" src="${post.post}" alt="${post.name} Post">
        </section>
        <footer>
                <button class="heart ${post.liked ? 'liked' : ''}"><img src="images/icon-heart.png" alt="Heart Icon"></button>
                <button class="comment"><img src="images/icon-comment.png" alt="Comment Icon"></button>
                <button class="dm"><img src="images/icon-dm.png" alt="DM Icon"></button>
                <p class="likes">${post.likes} Likes</p>
                <p class="caption"><span>${post.username}</span> ${post.comment}</p>
        </footer>
    `;
    
     postsContainer.innerHTML += postHTML;
}

postsContainer.addEventListener('click', function(event) {
    const heartButton = event.target.closest('.heart');
    if (heartButton) {
        // Find the closest post element
        const postSection = heartButton.closest('footer');
        
        // Find the likes paragraph within the post section
        const likesParagraph = postSection.querySelector('.likes');
        
        // Extract current likes number
        let currentLikes = parseInt(likesParagraph.textContent);
        
        // Check if the post is already liked
        const isLiked = heartButton.classList.contains('liked');

        if (isLiked) {
            // Remove like
            currentLikes -= 1;
            heartButton.classList.remove('liked');
            postSection.querySelector('img').src = 'images/icon-heart.png'
        } else {
            // Add like
            currentLikes += 1;
            heartButton.classList.add('liked');
            const image = postSection.querySelector('img');
            image.src = 'images/red-heart-icon.png';
        }

        // Update the likes paragraph text
        likesParagraph.textContent = `${currentLikes} Likes`;
    }
});




 