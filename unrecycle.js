function deleteNode(n) {
    n.parentNode.removeChild(n);   
}

function removeRecycledTweets() {
    console.log("unrecycling!");
    var recycledTweets = document.querySelectorAll('div[data-component-context="suggest_recycled_tweet_inline"');
    var recapBlocks = document.querySelectorAll('div[data-component-context="suggest_recycled_tweet"]');
    
    // delete all recycled tweets and recap blocks
    recycledTweets.forEach(deleteNode);
    recapBlocks.forEach(deleteNode);
}

// Hook to timeline updates
var timeline = document.getElementById("timeline");
if (timeline) {
    var tlConfig = { attributes: false, childList: true, subtree: true };
    var observer = new MutationObserver(removeRecycledTweets);
    observer.observe(timeline, tlConfig);

    // Run when app starts
    document.addEventListener("DOMContentLoaded", removeRecycledTweets, false);
}
