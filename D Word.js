// console.log('deepanshu katiyar');


// function func1(){
//     let select = document.getElementById('frame');
//     console.log(select.options[select.selectedIndex].value);
// }

// function for square
let defaultSquareId, newSquareId, defaultTxtId, newTxtId, defaultImageId,newImageId,defaulth3id,newh3id;



//grabed the select option.
// let select = document.getElementById('frame');
// console.log(select);
// select.addEventListener('click', () => {
//     let selectedVal = select.checked;
//     console.log(selectedVal.value);
// window.addEventListener('mousemove',()=>{
//     console.log('deepanshu katiyar');

//     // .classList.add('input');
// })


// whole functionality of square


let squarebtn = document.getElementById('squarebtn');
// console.log(squarebtn.checked);
squarebtn.addEventListener('click',()=>{
//  console.log(squarebtn.checked);
    if (squarebtn.checked) {
        square();
        let html = ` 
    height:
    <input type="number" class='input' placeholder="Height">
    Width:
    <input type="number" class='input' placeholder="Width">
    position-x:
    <input type="number" class='input' placeholder="X-cord">
    position-y:
    <input type="number" class='input' placeholder="Y-cord">
    background-color:
    <input type="text" class='input' placeholder="Color">
    border:
    <input type="text" class='input' placeholder="ex: 2px solid red">
    border-radius:
    <input type="number" class='input' placeholder="number">
    Rotate:
    <input type="number" class='input' placeholder="number">

    <button id = 'squarebtn1' onclick="newsquare()">New Box</button>`


   
        //A div where all the option or navigation bar will be shown.

        let squares = document.getElementById('heightContainer');
        squares.innerHTML = html;
        // console.log(squares);

        //grabed all the inputs in the nav bar.


        let squareInput = document.getElementsByTagName('input');
        //  console.log(squareInput, 'here are all the input tags');
        //  console.log(heightInput.length);
        for (let i = 0; i < squareInput.length; i++) {
            //  console.log(squareInput[i].value);
            squareInput[i].addEventListener('input', () => {
                // console.log('Jai Hanuman');
                // let div = document.getElementById('square');
                let div = document.getElementById(`${defaultSquareId}`);

                switch (squareInput[i]) {
                    case squareInput[3]:
                    case squareInput[4]:
                    case squareInput[5]:
                    case squareInput[6]:
                    case squareInput[7]:
                    case squareInput[8]:
                    case squareInput[9]:
                    case squareInput[10]:
                        // console.log('jai hanuman', heightInput[0].value);
                        // console.log(div);
                        div.setAttribute('style', `height:${squareInput[3].value}px;width:${squareInput[4].value}px;
                        border:2px solid white; position:fixed;left:${squareInput[5].value}px;top:${squareInput[6].value}px;
                        background:${squareInput[7].value};border:${squareInput[8].value};border-radius:${squareInput[9].value}px;
                        z-index:0;transform:rotate(${squareInput[10].value+'deg'});`);
                        
                }
            })
        }
    }

    
});
//for taking input from user as newId.
function newsquare(){
    // console.log('fixed');
     newSquareId = Math.random()*100000000000000000;
     square();
     squarebtn.checked;
    //  imagebtn.checked;
    //  textbtn.checked;
     let newSquareInput = document.getElementsByTagName('input');
    for(let i =0; i<= newSquareInput.length; i++){
        newSquareInput[i].value = '';
    }
    
    // console.log(newSquareId);
  

}





    //  whole functionality of image

    let imageBtn = document.getElementById('imagebtn');
    imageBtn.addEventListener('click',()=>{
        if(imageBtn.checked){
            // console.log(imageBtn.checked);
            image();
            let images = document.getElementById('heightContainer');

            let imagehtml = ` 
    Hight:
    <input type="number" class='input' placeholder="Height">
    Width:
    <input type="number" class='input' placeholder="Width">
    Position-x:
    <input type="number" class='input' placeholder="X-cord">
    Position-y:
    <input type="number" class="input" placeholder='Y-cord'>
    Image:
    <input type="file" accept='image/*' onchange='openFile(event)' class="input" id='output'>
    background-size:
    <input type="number" class="input" placeholder='number'>
    Border:
    <input type="text" class="input" placeholder='ex: 2px solid black'>
    Border-radius:
    <input type="number" class="input" placeholder='number'>
    Rotate:
    <input type="number" class="input" placeholder='number'>
    <button id = 'imagebtn1' onclick="newImage()">New Image</button>`
            images.innerHTML = imagehtml;


            let imageInput = document.getElementsByTagName('input');
            // console.log(heightInput, 'here are all the input tags');
            // console.log(imageInput.length);
            for (let i = 0; i < imageInput.length; i++) {
                // console.log(imageInput[i]);
                imageInput[i].addEventListener('input', () => {
                    // console.log('Jai Hanuman');
                    // let div = document.getElementById('square');
                    let div = document.getElementById(`${defaultImageId}`);
// console.log(div);
                    switch (imageInput[i]) {
                        case imageInput[3]:
                        case imageInput[4]:
                        case imageInput[5]:
                        case imageInput[6]:
                        case imageInput[7]:
                        case imageInput[8]:
                        case imageInput[9]:
                        case imageInput[10]:
                        case imageInput[11]:
                            // case circleInput[3]:
                            // case circleInput[4]:
                            // case circleInput[5]:
                            // console.log('jai hanuman', heightInput[0].value);
                            // console.log(div);
                            div.setAttribute('style', `height:${imageInput[3].value}px;width:${imageInput[4].value}px;
                       position:fixed;left:${imageInput[5].value}px;top:${imageInput[6].value}px;
                       display:inline-block;border:2px solid white;z-index:1;background-image:url('${output.src}');
                       background-size:${imageInput[8].value}px;overflow:hidden;border:${imageInput[9].value};
                       border-radius:${imageInput[10].value}px;transform:rotate(${imageInput[11].value}deg);background-repeat:no-repeat`);


                    }
                })
            }


        }

    })


var openFile = function (file) {
    var input = file.target;

    var reader = new FileReader();
    reader.onload = function () {
        var dataURL = reader.result;
        var output = document.getElementById('output');
        output.src = dataURL;
    };
    reader.readAsDataURL(input.files[0]);
};
    // console.log(imageBtn);
    function newImage(){
        newImageId = Math.random()*1000000000000000000;
        image();
        imagebtn.checked;
        let newimageInput = document.getElementsByTagName('input');
        for (let i = 0; i <= newimageInput.length; i++) {
            newimageInput[i].value = '';
        }


        // console.log(newImageId);
    }


    //whole functionality of text.

let textBtn = document.getElementById('textbtn');
textBtn.addEventListener('click', () => {
    if (textBtn.checked) {
        // console.log(textBtn.checked);
        // text();
        let texts = document.getElementById('heightContainer');

        let texthtml = ` 
    font-size:
    <input type="number" class='input' placeholder="Height">
    Width:
    <input type="number" class='input' placeholder="Width">
    Position-x:
    <input type="number" class='input' placeholder="X-cord">
    Position-y:
    <input type="number" class="input" placeholder='Y-cord'>
    Put your text:
    <input type="text" id="input7" class="input" placeholder='text'>
    text-color:
    <input type="text" class="input" placeholder='Color'>
    Border:
    <input type="text" class="input" placeholder='ex: 2px solid black'>
    Border-radius:
    <input type="number" class="input" placeholder='number'>
    Rotate:
    <input type="number" class="input" placeholder='number'><br>
    Font-family:
    <input type="text" class="input" placeholder='font-family'>
    <button id = 'textbtn1' onclick="newTxt()">New Text</button>`
        texts.innerHTML = texthtml;
        text();
        


        let textInput = document.getElementsByTagName('input');
       
        // console.log(heightInput, 'here are all the input tags');
        // console.log(textInput.length);
        for (let i = 0; i < textInput.length; i++) {
            // console.log(textInput[i]);
            textInput[i].addEventListener('input', () => {
                // console.log('Jai Hanuman');
                // let div = document.getElementById('square');
                let div = document.getElementById(`${defaultTxtId}`);
                // console.log(div);
                switch (textInput[i]) {
                    case textInput[3]:
                    case textInput[4]:
                    case textInput[5]:
                    case textInput[6]:
                    case textInput[7]:
                    case textInput[8]:
                    case textInput[9]:
                    case textInput[10]:
                    case textInput[11]:
                    case textInput[12]:
                        // case h3:
                        // case circleInput[3]:
                        // case circleInput[4]:
                        // case circleInput[5]:
                        // console.log('jai hanuman', heightInput[0].value);
                        // console.log(div);
                        // text();
                        //   h3.innerHTML = `${textInput[7].value}`;
                        div.setAttribute('style', `width:${textInput[4].value}px;
                       position:fixed;left:${textInput[5].value}px;top:${textInput[6].value}px;
                       display:inline-block;border:2px solid white;z-index:1;
                       overflow:hidden;border:${textInput[9].value};
                       border-radius:${textInput[10].value}px;transform:rotate(${textInput[11].value}deg);background-repeat:no-repeat`);


                        let h3 = document.getElementById(`${defaulth3id}`);
                        h3.innerText = `${textInput[7].value}`;
                        h3.setAttribute('style',`color:${textInput[8].value};font-size:${textInput[3].value}px;
                        font-family:${textInput[12].value};display:inline-block`)
                        // console.log(h3);


                }
            })
        }


    }

})
// console.log(textBtn);
function newTxt() {
    newTxtId = Math.random()*1000000000000000000000000000;
    newh3id = Math.random()*1000000000000000000000000000;
    text();
    textbtn.checked;
    let newtextInput = document.getElementsByTagName('input');
    for (let i = 0; i <= newtextInput.length; i++) {
        newtextInput[i].value = '';
    }


    // console.log(newImageId);
}


//function for Text.

function text() {
    let div = document.createElement('div');
     let h3 = document.createElement('h3');
     if(newh3id){
         defaulth3id = newh3id;
     }else{
         defaulth3id = 'h3';
     }
     defaulth3id = newh3id || 'h3';
     h3.id = `${defaulth3id}`;
    // let textNode = document.createTextNode(`${textInput}`);
    //  h3.appendChild(textNode);
    if (newTxtId) {
        defaultTxtId = newTxtId;
    } else {
        defaultTxtId = 'txt';
    }
    defaultTxtId = newTxtId || 'txt';
    div.id = `${defaultTxtId}`;
     div.setAttribute('style','overflow:scroll;height:800px;')

    let container = document.getElementById('container');
    // console.log(container);
    container.appendChild(div);
     div.appendChild(h3);
}

//function for square.


function square() {
    // created a div element
    let div = document.createElement('div');
    //for default and new id.
    if (newSquareId) {
        defaultSquareId = newSquareId;
    } else {
        defaultSquareId = 'square';
    }
    defaultSquareId = newSquareId || 'square';
    div.id = `${defaultSquareId}`;
    div.setAttribute('style', 'overflow:scroll;height:800px;')

    // console.log(div.id);
    //  div.setAttribute('style','height:20px;width:20px;border:2px solid red');
    //A div where all the output off square will be shown.
    let container = document.getElementById('container');
    // console.log(container);
    container.appendChild(div);
    // console.log(div)
}





//function for images.


function image() {
    let div = document.createElement('div');
    if (newTxtId) {
        defaultImageId = newImageId;
    } else {
        defaultImageId = 'image';
    }
    defaultImageId = newImageId || 'image';
    div.id = `${defaultImageId}`;
    div.setAttribute('style', 'overflow:scroll;height:800px;')


    let container = document.getElementById('container');
    // console.log(container);
    container.appendChild(div);
}


 let container = document.getElementById('container');
 // console.log(container);
 container.addEventListener('click',(e)=>{
    //   console.log(e.target.id);
      let revisedId = document.getElementById(e.target.id);
      console.log(revisedId);
      console.log(newSquareId);
      newSquareId = e.target.id;
      console.log(newSquareId);
      let newId = document.getElementById(newSquareId);
      console.log(newId);
    //   let navbar = document.getElementById('heightContainer');
    //   console.log(navbar);

    //   revisedId.style = `height:${squareInput[3].value};width:100px;position:fixed;top:200px;border:2px solid white`;

     //   console.log(parseFloat(e.target.style.transform,10));

    let squareInput1 = document.getElementsByTagName('input');
     //  console.log(squareInput, 'here are all the input tags');
     //  console.log(heightInput.length);
     for (let i = 0; i < squareInput1.length; i++) {
    //      //  console.log(squareInput[i].value);
    squareInput1[i]         // console.log('Jai Hanuman');
    //          // let div = document.getElementById('square');
    //      //    console.log(squareInput[i])

  }
      squareInput1[3].value = parseInt(newId.style.height,10);
      console.log(squareInput1[3].value);
    //   squareInput1[4].value = parseInt(e.target.id.style.width,10);
    //   squareInput1[5].value = parseInt(e.target.id.style.left,10);
    //   squareInput1[6].value = parseInt(revisedId.style.top,10);
    //   squareInput1[7].value = e.target.id.style.background;
    //   squareInput1[8].value = e.target.id.style.border = '2px solid skyblue';
    //   squareInput1[9].value = parseInt(e.target.id.style.borderRadius,10);
    //  //  squareInput[10].value = e.target.style.transform;
    //  //  squareInput[3].value = parseInt(e.target.style.height,10);

 })


 




