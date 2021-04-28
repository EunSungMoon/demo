function mood(str) {
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
  


  if (str == "Joy")
    document.body.appendChild(ImageArray[0])

  else if (str == "Sadness")
    document.body.appendChild(ImageArray[1])

  else if (str == "Anger")
    document.body.appendChild(ImageArray[2])
}

function Reset(){
  console.log('reset');
  let reset=document.getElementsByTagName('img')
  ImageArray.parentNode.removeChild(ImageArray)
}


