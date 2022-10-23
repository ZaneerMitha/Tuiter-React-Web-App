import posts from "./posts.js";
import postSummaryItem from "./PostSummaryItem.js";

function PostSummaryList() {
    return(`
     ${posts.map(value => {
        return(postSummaryItem(value));
    }).join('')}
    `);
}

export default PostSummaryList;