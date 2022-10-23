const PostSummaryItem = (post) => {
    return(`
   
    <div class="wd-big-border">
           <div class="wd-suggested-post-topic-or-tuit">${post.topic}</div>
                <div class="wd-suggested-post-author">${post.userName}
                    <i class="fa fa-check-circle"></i>
                    ${post.time}
                </div>
                <div class="wd-suggested-post-title">${post.title}</div>
                <img class="wd-suggested-post-pic" src="${post.image}"/>
                <div class="wd-float-done"></div>
    </div>
    
    `);
}
export default PostSummaryItem;