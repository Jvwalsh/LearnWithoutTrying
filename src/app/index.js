import arr1000 from './1000.js'
let privateKeyOld = "AIzaSyDWs9iUn0uLyfFkdqinP4gq7uq6imB1mn0"
var googleTranslate = require('google-translate')(privateKeyOld);

chrome
    .extension
    .sendMessage({}, function (response) {
        var readyStateCheckInterval = setInterval(function () {
            if (document.readyState === "complete") {
                //this will pass once the document has completely loaded. Agrees with load parameters in manifest.json
                clearInterval(readyStateCheckInterval);

                console.log('inside adn the arr1000 is: ', typeof arr1000, arr1000.length)
              
                function shuffle(arr) {
                    var currentIndex = arr.length, tempValue, randomIndex;

                    while(0 !== currentIndex){
                        randomIndex = Math.floor(Math.random() * currentIndex);
                        currentIndex -= 1;

                        tempValue = arr[currentIndex];
                        arr[currentIndex] = arr[randomIndex];
                        arr[randomIndex] = tempValue;
                    }
                    return arr;
                }

                shuffle(arr1000);
                console.log('is this wokring? ', arr1000)
                // let searchAr = 
                //we need to loop through the array and look for a match in the each paragraph tag in a semi-random way

                let pTags = document.getElementsByTagName("p");
                let pTagsArr = Array
                    .prototype
                    .slice
                    .call(pTags)
                let allSentences = [];
                pTagsArr.forEach(paragraph => {
                    console.log('paragraph is: ', paragraph)
                    let tempSentences = paragraph.innerHTML.split('. ')
                    allSentences.push(tempSentences);
                })

                console.log('all sentences are like: ', allSentences);

                    pTagsArr.forEach(pTag => {
                        let para = pTag.innerHTML;
                        let paraSentences = para.split('. ');
                        let runOnce = false;
                        for( var j = 0; j < paraSentences.length; j++){
                            for( var k = 0; k < arr1000.length; k++){
                                let searchWord = arr1000[k];
                                //instead of searching all string text let's seperate words and look for exact match
                                if (paraSentences[j].toLowerCase().split(' ').indexOf(searchWord.toLowerCase()) != -1) {
                                    let a = paraSentences[j].toLowerCase().split(' ')
                                    console.log('a is: ', a)
                                    console.log("THIS PARAGRAPH CONTAINS THE WORD ", searchWord);
                                    googleTranslate.translate(searchWord, 'es', function (err, translation) {
                                        const translatedWord = translation.translatedText;
                                        pTag.innerHTML = pTag
                                            .innerHTML
                                            .replace(searchWord, translatedWord.bold());
                                        if(runOnce === false){
                                            console.log('entering for para number ', j)
                                            runOnce = true;
                                            pTag.addEventListener('click', function () {
                                                googleTranslate
                                                    .translate(para, 'es', function (err, translation) {
                                                        alert(translation.translatedText);
                                                    })
                                            })
                                        }
                                    });
        
                                    chrome
                                        .runtime
                                        .sendMessage({
                                            greeting: "hello"
                                        }, function (response) {
                                            console.log('about to farewell: ', response.farewell);
                                        });
                                    break;
                                } 
                            }
                        }
                    })
            }
        })
    })

    // chrome.runtime.onMessage.addListener(
    //     function(request, sender, sendResponse) {
    //         console.log('We received a click! Would be cool to call the translation acation again with a different language code input')
    //     });