// 하면좋은것 : button 이벤트가 4개인데 이벤트리스너 함수 1개로 처리해보세용
// 버튼에 이벤트걸기.addEventLienter('click', () => {
// mode(해당하는 버튼에 값을 가져오기 [data 속성활용]);
// });



//id =body 라는 dom 을 선택

/* 은성님이 짠 코드
let click_joy = document.getElementById('joy')
click_joy.addEventListener("click", () => {
  dom.appendChild(ImageArray[0])
});

let click_sadness = document.getElementById('sadness')
click_sadness.addEventListener("click", () => {
  dom.appendChild(ImageArray[1])
});

let click_anger = document.getElementById('anger')  == document.querySelector('#anger');
click_anger.addEventListener("click", () => {
  dom.appendChild(ImageArray[2])
});

let click_reset = document.getElementById('reset')
click_reset.addEventListener("click", function () {
  document.querySelector('#body').innerHTML ='';
});
*/

// 3. 초기화해보기 innerHTML 공부

//1. 함수가 여러개가 중복되는거 같아서 이것저것 해보면 코드량을 줄일수 있지 않을까?
//2. 일단 버튼을 한번에 다 선택해보자 data-btn 테그를 사용해서 !
// [ Dom1, Dom2, Dom3, Dom4];
//3. 배열로 값이 들어왔으닌까 for 문을 돌면서 각각 이벤트를 걸어보자 !

let Btn =document.querySelectorAll('[data-btn="moodBtn"]') // [dom1, dom2, dom3, dom4]

// //이건처음배울떄 쓰는코드

for(let i=0; i<Btn.length; i++){
  Btn[i].addEventListener("click", ()=>{
    //1. 초기화를한다
    document.querySelector('#body').innerHTML ='';
    //2. 이미지를 붙인다.
    dom.appendChild(ImageArray[i]);
  });
}

// let Btn=document.querySelectorAll('[data-btn="moodBtn"]')
// for(i=0; i<Btn.length; i++){
//   Btn[i].addEventListener('click', ()=>{
//     document.querySelector('#body').innerHTML='';
//     dom.appendChild(ImageArray[i])
//   })
// }

//공부를 해보세용 es6 문법
// Btn.forEach((v, i) => v.addEventListener('click', e => dom.appendChild(ImageArray[i])));

const dom=document.querySelector('#body')

let MovieImages = [
  {
    id: "Joy",
    src: "./MovieImages/joy.jpg",
  },
  {
    id: "Anger",
    src: "./MovieImages/anger.jpg",
  },
  {
    id: "Sadness",
    src: "./MovieImages/sadness.jpg",
  }
]


let ImageArray = []
for (i = 0, j = MovieImages.length; i < j; i++) {
  ImageArray[i] = new Image(240, 300)
  ImageArray[i].src = MovieImages[i].src
}







