// 하면좋은것 : button 이벤트가 4개인데 이벤트리스너 함수 1개로 처리해보세용
// 버튼에 이벤트걸기.addEventLienter('click', () => {
// mode(해당하는 버튼에 값을 가져오기 [data 속성활용]);
// });


// 2222222222
//꼭할것 :  HTML 에 박혀있는 onclick method 를 js로 빼세요 -> click evt listener를 활용하면됨!
let click_joy = document.getElementById('joy')
click_joy.addEventListener("click", function () {
  dom.appendChild(ImageArray[0])
});

let click_sadness = document.getElementById('sadness')
click_sadness.addEventListener("click", function () {
  dom.appendChild(ImageArray[1])
});

let click_anger = document.getElementById('anger')
click_anger.addEventListener("click", function () {
  dom.appendChild(ImageArray[2])
});


let click_reset = document.getElementById('reset')
click_reset.addEventListener("click", function () {

  //1
  // 선택자 모르면 mdn 뒤지면서 사용해보기 document.querySelector
  // let reset =document.querySelector('img')   //<-완성
  // reset.parentElement.removeChild(reset)

  //그냥 dom 잡아서 innerHTML 로 초기화하기 -> 1줄컷 ㅋ
  document.getElementById('body').innerHTML = "";
});



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

//id =body 라는 dom 을 선택
const dom = document.querySelector('#body');

let ImageArray = []
for (i = 0, j = MovieImages.length; i < j; i++) {
  ImageArray[i] = new Image(240, 300)
  ImageArray[i].src = MovieImages[i].src
}




// 3. 초기화해보기 innerHTML 공부

  //리셋짜기ㅋㅋㅋ
  // img 선택 -> 이미지 부모 선택 -> 이미지 부모에서 자식 지우기



