// chrome.tabs.executeScript( {
//     code: "window.getSelection().toString();"
//   }, function(selection) {
//     document.getElementById("output").value = selection[0];
//   });

// let changeColor = document.getElementById('changeColor');
let testMe = document.getElementById('testDiv')
console.log(typeof testMe)
console.log('hello world right herex')

// console.log('change color is ', changeColor)
// console.log(typeof changeColor)

console.log("look here for some type of selectionk?", window.getSelection())


chrome.tabs.executeScript({
    code: "window.getSelection().toString();"
}, function(selection) {
    console.log('selection is: ', selection.toString())
})
// changeColor.onClick = function(element) {
//     console.log("onclick happens")

//     // let color = element.target.value;
//     // chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
//     //   chrome.tabs.executeScript(
//     //       tabs[0].id,
//     //       {code: 'document.body.style.backgroundColor = "' + color + '";'});
//     // });
//   };

//   document.getElementById("changeColor").addEventListener("click", function(){
//     // document.getElementById("demo").innerHTML = "Hello World";
//     console.log('hello world')
    

// });