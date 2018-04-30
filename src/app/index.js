let privateKeyOld = "AIzaSyDWs9iUn0uLyfFkdqinP4gq7uq6imB1mn0"
var googleTranslate = require('google-translate')(privateKeyOld);

chrome
    .extension
    .sendMessage({}, function (response) {
        console.log('inside chrome extension?')
        var readyStateCheckInterval = setInterval(function () {
            if (document.readyState === "complete") {
                
                clearInterval(readyStateCheckInterval);

                console.log('hello this message is from the content injection script')

                //ideally this array is from a word bank the user has preloaded or specified.
                let searchAr = ["supercalifragilisticexpialidocious", "scandal", "education"];

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
                            googleTranslate.translate(searchWord, 'es', function (err, translation) {
                                const translatedWord = translation.translatedText;
                                console.log("Translated as: ", paraTrans);
                                pTag.innerHTML = pTag
                                    .innerHTML
                                    .replace(searchWord, translatedWord.bold());
                                pTag.addEventListener('click', function () {
                                    googleTranslate
                                        .translate(para, 'es', function (err, translation) {
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
                            console.log("THIS PARA DOES NOT CONTIAN: ", searchWord);

                        }
                    })
                }
            }
        })
    })

