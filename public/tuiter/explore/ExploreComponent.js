import PostSummaryList from "../PostSummaryList/index.js";

const ExploreComponent = () => {
    return(`
            
        <div class="mb-3" style="position: relative">
            <input type="search"
                   class="form-control"
                   style="border-radius: 20px"
                   id="input1"
                   placeholder= "Search Tuiter"/>

        </div>



        <ul class="nav nav-tabs" style="margin-bottom: 10px">
            <li class="nav-item">
                <a class="nav-link active" href="for-you.html">For You</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="trending.html">Trending</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="news.html">News</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="sports.html">Sports</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="entertainment.html">Entertainment</a>
            </li>
        </ul>

        <div class="wd-big-pic">
            <img class="wd-center-img" src="tuiter-spacex.webp">
            <h1>SpaceX's Starship</h1>
        </div>
           ${PostSummaryList()}
    `);
}
export default ExploreComponent;

