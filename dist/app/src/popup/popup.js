console.log("look here for some type of selection?", window.getSelection())

chrome.tabs.executeScript({
    code: "window.getSelection().toString();"
}, function(selection) {
    console.log('selection is: ', selection.toString())
})



// chrome
//     .extension
//     .sendMessage({}, function (response) {
//         var readyStateCheckInterval = setInterval(function () {
//             if (document.readyState === "complete") {
//                             chrome
//                                 .runtime
//                                 .sendMessage({
//                                     greeting: "hello"
//                                 }, function (response) {
//                                     console.log('about to farewell: ', response.farewell);
//                                 });
                       
//                         }
//                     })
//                 })