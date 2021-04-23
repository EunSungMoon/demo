function mood(str) {
  let MovieImages = [
    {
      src: "./MovieImages/joy.jpg",

    },
    {
      src: "./MovieImages/anger.jpg",

    },
    {
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

