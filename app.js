/**
 * SPRINGBOARD CITING
 * Introduction to DOM - Chapter
 * Query Selector Video
 * https://www.springboard.com/workshops/software-engineering-career-track/learn/206/#/curriculum/16925
 */

let form = document.querySelector('#memeForm')
const urlInput = document.querySelector('input[name="url"]')
const topTextInput = document.querySelector('#firstText')
const bottomTextInput = document.querySelector('#secondText')
let canvasRCount = 0
// store canvas inside the variable
// const canvas = document.querySelector("#meme");
// const anotherCanvas = document.createElement('img')

// anotherCanvas.setAttribute('src',"https://media.istockphoto.com/photos/astronaut-lying-in-the-meadow-picture-id1304263738")

/*
THISINTERESTSME CITING
Hiding an image
https://thisinterestsme.com/hide-image-javascript/#:~:text=How%20to%20hide%20an%20image%20using%20JavaScript.%201,%E2%80%9Conclick%E2%80%9D%20event%20handler%20to%20our%20image%20element.%20
*/

form.addEventListener('submit', function(e){
    e.preventDefault()
    
    // use newMeme variable to store the url image 
    const newMeme = makeMeme(urlInput.value)
    // const firstText = firstT(userInput.value)
    console.log("The image:", urlInput.value, urlInput.height, urlInput.width, urlInput.src)

    const canvasR = creatingCanvas(newMeme, topTextInput.value, bottomTextInput.value)
    
    // newMeme.addEventListener('load', function(e){
        // pass the url image and an empty canvas inside the update Meme Canvas function
    // const canvasImg = updateMemeCanvas(canvas, newMeme, "topTextInput", "bottomTextInput");

    // })

    
    //  document.body.appendChild(newMeme)
    // document.body.appendChild(firstText)
    // document.body.appendChild(anotherCanvas)

    /**
     * SPRINGBOARD CITING
     * Manipulating the DOM - Chapter
     * Adding element video
     * https://www.springboard.com/workshops/software-engineering-career-track/learn/206/#/curriculum/16926
     */

    // adding memes
    if(canvasRCount < 5){ 
    document.body.append(canvasR)
    canvasRCount++
    console.log("adding:",canvasRCount)
    }
    else{
        alert("You've reached the maximum appending allowed")
    }
    
    /* 
    SPRINGBOARD CITING
    Manipulating the DOM -Chapter
    Remove element Video
    https://www.springboard.com/workshops/software-engineering-career-track/learn/206/#/curriculum/16926
    */
    // remove meme
    canvasR.addEventListener('click', function(e){  
        canvasR.remove()
        canvasRCount--
        alert("One of the meme has been deleted")
    })
   
})

/*
    YOUTUBE CITING
    function retrieved from youtube video
    https://www.youtube.com/watch?v=io5FcMAdLyQ&t=688s
    Youtube video - How to build a Meme Generator with Javascript
*/
function creatingCanvas(newMeme, topText, bottomText){
    const canvas = document.createElement('canvas')
    canvas.setAttribute('id', 'meme')

    // replacing image by newMeme
    const ctx = canvas.getContext("2d");
    const width = newMeme.width;
    const height = newMeme.height;
    const fontSize = Math.floor(width / 10);
    const yOffset = height / 25;

    // replacing image by newMeme

    canvas.width = width;
    canvas.height = height;
    ctx.drawImage(newMeme,0, 0);

    //prepare text
    ctx.strokeStyle = "black";
    ctx.lineWidth = Math.floor(fontSize / 4);
    ctx.fillStyle = "white";
    ctx.textAlign = "center";
    ctx.lineJoin = "round";
    ctx.font = `${fontSize}px sans-serif`;

    // Add top text
    ctx.textBaseline = "top";
    ctx.strokeText(topText, width / 2, yOffset);
    ctx.fillText(topText, width / 2, yOffset);

    // Add bottom text
    ctx.textBaseline = "bottom";
    ctx.strokeText(bottomText, width / 2, height - yOffset);
    ctx.fillText(bottomText, width / 2, height - yOffset);

    return canvas;
}

/*
SPRINGBOARD CITING
Manipulating DOM - Chapter
Get and Set Attribute video from Springboard
https://www.springboard.com/workshops/software-engineering-career-track/learn/206/#/curriculum/16926
*/
function makeMeme(urlImage){
    const meme = document.createElement('img')
    meme.setAttribute('src', urlImage)
    meme.setAttribute('height', "500")
    meme.setAttribute('width', "500")
    
    return meme;
}

// function updateMemeCanvas(canvas, image, topText, bottomText){
//     const ctx = canvas.getContext("2d");
//     const width = image.width;
//     const height = image.height;
//     const fontSize = Math.floor(width / 10);
//     const yOffset = height / 25;

//     canvas.width = width;
//     canvas.height = height;
//     ctx.drawImage(image,0, 0);

//     //prepare text
//     ctx.strokeStyle = "black";
//     ctx.lineWidth = Math.floor(fontSize / 4);
//     ctx.fillStyle = "white";
//     ctx.textAlign = "center";
//     ctx.lineJoin = "round";
//     ctx.font = `${fontSize}px sans-serif`;

//     // Add top text
//     ctx.textBaseline = "top";
//     ctx.strokeText(topText, width / 2, yOffset);
//     ctx.fillText(topText, width / 2, yOffset);

//     // Add bottom text
//     ctx.textBaseline = "bottom";
//     ctx.strokeText(bottomText, width / 2, height - yOffset);
//     ctx.fillText(bottomText, width / 2, height - yOffset);

//     return ctx;
// }
