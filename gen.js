var background = document.getElementById("background");
var skin = document.getElementById("skin");
var eyes = document.getElementById("eyes");
var eyebrows = document.getElementById("eyebrows");
var mouth = document.getElementById("mouth");
var faceitems = document.getElementById("faceitems");
var glasses = document.getElementById("glasses");
var hat = document.getElementById("hat");
var shirt = document.getElementById("shirt");

let canvas = document.getElementById("canvas");
let context = canvas.getContext("2d");

const createImage = function (source) {
  const tempImg = new Image();
  tempImg.src = source;
  return tempImg;
};

const selectedValues = {
  background: "",
  skin: "",
  eyes: "",
  eyebrows: "",
  mouth: "",
  faceitems: "",
  glasses: "",
  hat: "",
  shirt: "",
  
  // ...etc
};

const backgroundImgs = {
  brown: createImage(
    "./foxes/background/blue.png"
  ),
  chinese: createImage(
    "./foxes/background/flowers.png"
  ),
  clay: createImage(
    "./foxes/background/forest.png"
  ),
  cloudy: createImage(
    "./foxes/background/graveyard.png"
  ),
  forest: createImage(
    "./foxes/background/green.png"
  ),
  waves: createImage(
    "./foxes/background/haunted_forest.png"
  ),
  maroon: createImage(
    "./foxes/background/hippy.png"
  ),
  Mountains: createImage(
    "./foxes/background/underwater.png"
  ),
  Mountains1: createImage(
    "./foxes/background/sky.png"
  ),
  Mountains2: createImage(
    "./foxes/background/shrooms.png"
  ),
};

const skinImgs = {
  none: createImage(
    "./foxes/Base/chrome.png"
  ),
  skin1: createImage(
    "./foxes/Base/donut.png"
  ),
  skin2: createImage(
    "./foxes/Base/dreamy.png"
  ),
  skin3: createImage(
    "./foxes/Base/juice.png"
  ),
  skin4: createImage(
    "./foxes/Base/normal.png"
  ),
  skin5: createImage(
    "./foxes/Base/panther.png"
  ),
  skin6: createImage(
    "./foxes/Base/robot.png"
  ),
  skin7: createImage(
    "./foxes/Base/rock.png"
  ),
  skin8: createImage(
    "./foxes/Base/skeleton.png"
  ),
  skin9: createImage(
    "./foxes/Base/toy.png"
  ),
};

const eyesImgs = {
  none: createImage(
    "./foxes/Clothing/Beach_Shirt.png"
  ),
  eyes1: createImage(
    "./foxes/Clothing/Black_puffer.png"
  ),
  eyes2: createImage(
    "./foxes/Clothing/black_tshirt.png"
  ),
  eyes3: createImage(
    "./foxes/Clothing/bling.png"
  ),
  eyes4: createImage(
    "./foxes/Clothing/dork.png"
  ),
  eyes5: createImage(
    "./foxes/Clothing/fc_tshirt.png"
  ),
  eyes6: createImage(
    "./foxes/Clothing/fcpd.png"
  ),
  eyes7: createImage(
    "./foxes/Clothing/goth.png"
  ),
  eyes8: createImage(
    "./foxes/Clothing/hoodie.png"
  ),
  eyes9: createImage(
    "./foxes/Clothing/jersey.png"
  ),
};

const eyebrowsImgs = {
  none: createImage(
    "./foxes/eyes/dazed.png"
  ),
  eyebrows1: createImage(
    "./foxes/eyes/eyepiece.png"
  ),
  eyebrows2: createImage(
    "./foxes/eyes/gold_eye.png"
  ),
  eyebrows3: createImage(
    "./foxes/eyes/haunted_eye.png"
  ),
  eyebrows4: createImage(
    "./foxes/eyes/heart_eye.png"
  ),
  eyebrows5: createImage(
    "./foxes/eyes/pirate_eye.png"
  ),
  eyebrows6: createImage(
    "./foxes/eyes/robot_eye.png"
  ),
  eyebrows7: createImage(
    "./foxes/eyes/serious_eye.png"
  ),
};

const mouthImgs = {
  none: createImage(
    "./foxes/mouth/bone.png"
  ),
  mouth1: createImage(
    "./foxes/mouth/bubble.png"
  ),
  mouth2: createImage(
    "./foxes/mouth/cigar.png"
  ),
  mouth3: createImage(
    "./foxes/mouth/cigarette.png"
  ),
  mouth4: createImage(
    "./foxes/mouth/fish.png"
  ),
  mouth5: createImage(
    "./foxes/mouth/grill.png"
  ),
  mouth6: createImage(
    "./foxes/mouth/normal.png"
  ),
  mouth7: createImage(
    "./foxes/mouth/pizza.png"
  ),
  mouth8: createImage(
    "./foxes/mouth/steak.png"
  ),
  mouth9: createImage(
    "./foxes/mouth/tnt.png"
  ),
};





const hatImgs = {
  none: createImage(
    "./foxes/head/afro.png"
  ),
  hat1: createImage(
    "./foxes/head/arrow.png"
  ),
  hat2: createImage(
    "./foxes/head/cowboy.png"
  ),
  hat3: createImage(
    "./foxes/head/dino_hat.png"
  ),
  redbandana: createImage(
    "./foxes/head/drink_helmet.png"
  ),
  bluebandana: createImage(
    "./foxes/head/golden_unicorn.png"
  ),
  greenbandana: createImage(
    "./foxes/head/green_beanie.png"
  ),
  blackbeanie: createImage(
    "./foxes/head/hachimaki.png"
  ),
};

const faceitemsImgs = {
    none: createImage(
      "./foxes/head/afro.png"
    ),
    bluebandana: createImage(
      "./foxes/head/arrow.png"
    ),
    greenbandana: createImage(
      "./foxes/head/cowboy.png"
    ),
    redbandana: createImage(
      "./foxes/head/dino_hat.png"
    ),
    cigarette: createImage(
      "./foxes/head/golden_unicorn.png"
    ),
    blunt: createImage(
      "./foxes/head/green_beanie.png"
    ),
    pipe: createImage(
      "./foxes/head/hachimaki.png"
    ),
  
  };


const drawFullFace = function () {

  // first clear the canvas
  context.clearRect(0, 0, canvas.width, canvas.height);
  document.getElementById("clear").addEventListener(
    "click",
    function () {
      context.clearRect(0, 0, canvas.width, canvas.height);
    },
    false
  );
  if (selectedValues.background !== "")
    context.drawImage(
      backgroundImgs[selectedValues.background],
      0,
      0,
      canvas.width,
      canvas.height
    );
  if (selectedValues.skin !== "")
    context.drawImage(
      skinImgs[selectedValues.skin],
      0,
      0,
      canvas.width,
      canvas.height
    );
  if (selectedValues.eyes !== "")
    context.drawImage(
      eyesImgs[selectedValues.eyes],
      0,
      0,
      canvas.width,
      canvas.height
    );
  if (selectedValues.eyebrows !== "")
    context.drawImage(
      eyebrowsImgs[selectedValues.eyebrows],
      0,
      0,
      canvas.width,
      canvas.height
    );
  if (selectedValues.mouth !== "")
    context.drawImage(
      mouthImgs[selectedValues.mouth],
      0,
      0,
      canvas.width,
      canvas.height
    );
  if (selectedValues.faceitems !== "")
    context.drawImage(
      faceitemsImgs[selectedValues.faceitems],
      0,
      0,
      canvas.width,
      canvas.height
    );
  if (selectedValues.glasses !== "")
    context.drawImage(
      glassesImgs[selectedValues.glasses],
      0,
      0,
      canvas.width,
      canvas.height
    );
  if (selectedValues.hat !== "")
    context.drawImage(
      hatImgs[selectedValues.hat],
      0,
      0,
      canvas.width,
      canvas.height
    );
  if (selectedValues.shirt !== "")
    context.drawImage(
      shirtImgs[selectedValues.shirt],
      0,
      0,
      canvas.width,
      canvas.height
    );
};

// EVENT LISTENERS

background.addEventListener("change", function (event) {
  selectedValues.background = event.target.value;
  drawFullFace();
});

skin.addEventListener("change", function (event) {
  selectedValues.skin = event.target.value;
  drawFullFace();
});

eyes.addEventListener("change", function (event) {
  selectedValues.eyes = event.target.value;
  drawFullFace();
});

eyebrows.addEventListener("change", function (event) {
  selectedValues.eyebrows = event.target.value;
  drawFullFace();
});

mouth.addEventListener("change", function (event) {
  selectedValues.mouth = event.target.value;
  drawFullFace();
});

faceitems.addEventListener("change", function (event) {
  selectedValues.faceitems = event.target.value;
  drawFullFace();
});

glasses.addEventListener("change", function (event) {
  selectedValues.glasses = event.target.value;
  drawFullFace();
});

hat.addEventListener("change", function (event) {
  selectedValues.hat = event.target.value;
  drawFullFace();
});

shirt.addEventListener("change", function (event) {
  selectedValues.shirt = event.target.value;
  drawFullFace();
});

// ...etc

