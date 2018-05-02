let privateKeyOld = "AIzaSyDWs9iUn0uLyfFkdqinP4gq7uq6imB1mn0"
var googleTranslate = require('google-translate')(privateKeyOld);

chrome
    .extension
    .sendMessage({}, function (response) {
        var readyStateCheckInterval = setInterval(function () {
            if (document.readyState === "complete") {
                //this will pass once the document has completely loaded. Agrees with load parameters in manifest.json
                clearInterval(readyStateCheckInterval);

                //import file with 1000 words
                //.csv file
                //take all the word
                //ideally this array is from a word bank the user has preloaded or specified.
                let searchAr = ["supercalifragilisticexpialidocious", "pirates", "liquor"];

                let pTags = document.getElementsByTagName("p");
                let pTagsArr = Array
                    .prototype
                    .slice
                    .call(pTags)

                for (var i = 0; i < searchAr.length; i++) {

                    let searchWord = searchAr[i];

                    pTagsArr.forEach(pTag => {
                        let para = pTag.innerHTML;
                        if (para.toLowerCase().indexOf(searchWord.toLowerCase()) != -1) {
                            console.log("THIS PARAGRAPH CONTAINS THE WORD ", searchWord);
                            let paraTrans = '';
                            googleTranslate.translate(searchWord, 'zh', function (err, translation) {
                                const translatedWord = translation.translatedText;
                                pTag.innerHTML = pTag
                                    .innerHTML
                                    .replace(searchWord, translatedWord.bold());
                                pTag.addEventListener('click', function () {
                                    googleTranslate
                                        .translate(para, 'zh', function (err, translation) {
                                            alert(translation.translatedText);
                                        })
                                })
                            });

                            chrome
                                .runtime
                                .sendMessage({
                                    greeting: "hello"
                                }, function (response) {
                                    console.log('about to farewell: ', response.farewell);
                                });
                        } else {
                            console.log(searchWord, ' not found.');

                        }
                    })
                }
            }
        })
    })

    // chrome.runtime.onMessage.addListener(
    //     function(request, sender, sendResponse) {
    //         console.log('We received a click! Would be cool to call the translation acation again with a different language code input')
    //     });