// let count = 0;
// const navidata = ["네이버","다음","구글","아마존","깃","카카오"];

// setInterval(function() {
//     console.log(navidata[count]);
//     count++;
//     count %= navidata.length;
// }, 1000)

// **자바스크립트는 css와 다르다 연결된 html기준으로 처리해야한다.
let count = 3;

setInterval(function(){
    count++;
    count %= 5;
    document.querySelector("#bannerimg").setAttribute("src", `/banner/${count}.png`)
},3000)
