function removeRecycledTweets() {
    console.log("unrecycling!");
    var recycledTweets = document.querySelectorAll('div[data-component-context="suggest_recycled_tweet_inline"');

    // delete all recycled tweets
    recycledTweets.forEach(function (tweet) {
        tweet.parentNode.removeChild(tweet);
    });
}

// Run when app starts
document.addEventListener("DOMContentLoaded", removeRecycledTweets, false);

// Hook to timeline updates
var timeline = document.getElementById("timeline");
var tlConfig = { attributes: false, childList: true, subtree: true };
var observer = new MutationObserver(removeRecycledTweets);
observer.observe(timeline, tlConfig);
