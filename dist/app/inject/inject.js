// console.log('hello world');
// import {Translate} from '@google-cloud/translate';


// chrome.extension.sendMessage({}, function(response) {
// 	var readyStateCheckInterval = setInterval(function() {
// 	if (document.readyState === "complete") {
// 		clearInterval(readyStateCheckInterval);
// 		console.log('we have a module here? ', typeof Translate);
// 		// ----------------------------------------------------------
// 		// This part of the script triggers when page is done loading
// 		console.log("Hello. This message was sent from scripts/inject.js");
// 		// THIS IS THE CONTENT(WHOLE PAGE STUFF) SCRIPT FILE
// 		// //
// 		console.log('is document defined?' , document)
// 		let searchAr = ["lkjfalkdlskjfdlkjf", "scandal"];

// 		let pTags = document.getElementsByTagName("p");
// 		let pTagsArr = Array.prototype.slice.call( pTags )

// 		for(var i = 0; i<searchAr.length; i++){

// 			let searchWord = searchAr[i];

// 			pTagsArr.forEach( pTag => {
// 				console.log("check it fam", pTag.innerHTML)
// 				let para = pTag.innerHTML;
// 				if( para.toLowerCase().indexOf(searchWord.toLowerCase()) != -1 ){
// 					console.log("THIS PARAGRAPH CONTAINS THE WORD ", searchWord);
// 					chrome.runtime.sendMessage({greeting: "hello"}, function(response) {
// 						console.log('about to farewell: ', response.farewell);
// 					  });
// 				}
// 				else{
// 					console.log("THIS PARA DOES NOT CONTIAN: ", searchWord);

// 				}
// 			})
// 		}
// 		// var divs = document.getElementByTagName("div");
// 		// for(var i = 0; i < divs.length; i++){
// 		// 	console.log("found one!")
// 		// }


// 	}
// 	}, 10);
// });