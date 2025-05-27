$( document ).ready(function() {

   const JSON_PATH = '/resources/posts.json';
   const BATCH_SIZE = 3;
   let posts = [];
   let loadedCount = 0;


   $.getJSON(JSON_PATH, function(json) {
        posts = json;
        loadPosts();
   });

   function loadPosts() {
        const nextItems = posts.slice(loadedCount, loadedCount + BATCH_SIZE);
        renderItems(nextItems);
        loadedCount += nextItems.length;
        if (loadedCount >= posts.length) {
            $('#load-more').hide();
        }
   }

   function renderItems(items) {
        items.forEach(item => {
            $('#posts-content').append(
                `<a class="post-card" href="${item.postLink}">
                    <img class="post-image" src="${item.imageLink}" alt="Post image">
                    <h3 class="post-title">${item.title}</h3>
                    <p class="post-desc">${item.description}</p>
                </a>`
            );
        });
   }

   $('#load-more').on('click', loadPosts);


});