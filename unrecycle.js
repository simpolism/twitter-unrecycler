function deleteNode(n) {
    n.parentNode.removeChild(n);
}

function removeRecycledTweets() {
    console.log("unrecycling!");
    var recycledTweets = document.querySelectorAll('div[data-component-context="suggest_recycled_tweet_inline"]');
    var recapBlocks = document.querySelectorAll('div[data-component-context="suggest_recycled_tweet"]');
    var activityBlocks = document.querySelectorAll('div[data-component-context="suggest_activity_tweet"]');
    var promotedBlocks = document.querySelectorAll('div[data-promoted="true"]');

    // delete all recycled tweets and recap blocks
    recycledTweets.forEach(deleteNode);
    recapBlocks.forEach(deleteNode);
    activityBlocks.forEach(deleteNode);
    promotedBlocks.forEach(deleteNode);
}

function scheduleRemoval() {
    // wait 200 ms to guarantee all page elements have loaded
    setTimeout(removeRecycledTweets, 200);
}

// Hook to timeline updates
var timeline = document.getElementById("timeline");
if (timeline) {
    var tlConfig = { attributes: false, childList: true, subtree: true };
    var observer = new MutationObserver(scheduleRemoval);
    observer.observe(timeline, tlConfig);

    // Run when app starts
    window.attachEvent('onload', scheduleRemoval);
}
