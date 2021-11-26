var bg;
var loadA,loadB,loadC,loadD,loadE,loadF,loadG,loadH,loadI,loadJ,loadK,loadL,loadM,loadN,loadO,loadP,loadQ,loadR,loadS,loadT,loadU,loadV,loadW,loadX,loadY,loadZ;
var addA,addB,addC,addD,addE,addF,addG,addH,addI,addJ,addK,addL,addM,addN,addO,addP,addQ,addR,addS,addT,addU,addV,addW,addX,addY,addZ;




function preload() {

bg = loadImage("images/background.jpg");
loadA = loadImage("images/alphabetA.png");
loadB = loadImage("images/alphabetB.jpg");
loadC = loadImage("images/alphabetC.jpg");
loadD = loadImage("images/alphabetD.jpg");
loadE = loadImage("images/alphabetE.jpg");
loadF = loadImage("images/alphabetF.jpg");
loadG = loadImage("images/alphabetG.jpg");
loadH = loadImage("images/alphabetH.jpg");
loadI = loadImage("images/alphabetI.jpg");
loadJ = loadImage("images/alphabetJ.jpg");
loadK = loadImage("images/alphabetK.jpg");
loadL = loadImage("images/alphabetL.jpg");
loadM = loadImage("images/alphabetM.jpg");
loadN = loadImage("images/alphabetN.jpg");
loadO = loadImage("images/alphabetO.jpg");
loadP = loadImage("images/alphabetP.jpg");
loadQ = loadImage("images/alphabetQ.jpg");
loadR = loadImage("images/alphabetR.jpg");
loadS = loadImage("images/alphabetS.jpg");
loadT = loadImage("images/alphabetT.jpg");
loadU = loadImage("images/alphabetU.jpg");
loadV = loadImage("images/alphabetV.jpg");
loadW = loadImage("images/alphabetW.jpg");
loadX = loadImage("images/alphabetX.jpg");
loadY = loadImage("images/alphabetY.jpg");
loadZ = loadImage("images/alphabetZ.jpg");
};


function setup(){
canvas = createCanvas(windowWidth,windowHeight);
addA = createSprite();
addB = createSprite();
addC = createSprite();
addD = createSprite();
addE = createSprite();
addF = createSprite();
addG = createSprite();
addH = createSprite();
addI = createSprite();
addJ = createSprite();
addK = createSprite();
addL = createSprite();
addM = createSprite();
addN = createSprite();
addO = createSprite();
addP = createSprite();
addQ = createSprite();
addR = createSprite();
addS = createSprite();
addT = createSprite();
addU = createSprite();
addV = createSprite();
addW = createSprite();
addX = createSprite();
addY = createSprite();
addZ = createSprite();
};


  

function draw() {
  background(bg);


  textSize(25);
  fill("black");
  text("Note: press any letter between A-Z.",550,35);


 if(keyDown("A")){
   addA.addImage("A",loadA);
   addA.x = 790;
   addA.y = 330;
   addA.scale = 0.7;
   addA.lifetime = 175;
  };
  if(keyDown("B")){
    addB.addImage("B",loadB); 
    addB.x = 790;
    addB.y = 330;
    addB.scale = 1.2;
    addB.lifetime = 175;
  };

  if(keyDown("C")){
    addC.addImage("C",loadC);
    addC.x = 790;
    addC.y = 330;
    addC.scale = 1.2;
    addC.lifetime = 175;
  };

  if(keyDown("D")){
    addD.addImage("D",loadD);
    addD.x = 790;
    addD.y = 330;
    addD.scale = 1.2;
    addD.lifetime = 175;
  };
  if(keyDown("E")){
    addE.addImage("E",loadE);
    addE.x = 790;
    addE.y = 330;
    addE.scale = 1.2;
    addE.lifetime = 175;
  }
  if(keyDown("F")){
    addF.addImage("F",loadF);
    addF.x = 790;
    addF.y = 330;
    addF.scale = 1.2;
    addF.lifetime = 175;
  }
  if(keyDown("G")){
    addG.addImage("G",loadG);
    addG.x = 790;
    addG.y = 330;
    addG.scale = 1.2;
    addG.lifetime = 175;
  }
  if(keyDown("H")){
    addH.addImage("H",loadH);
    addH.x = 790;
    addH.y = 330;
    addH.scale = 1.2;
    addH.lifetime = 175;
  }
  if(keyDown("I")){
    addI.addImage("I",loadI);
    addI.x = 790;
    addI.y = 330;
    addI.scale = 1.2;
    addI.lifetime = 175;
  }
  if(keyDown("J")){
    addJ.addImage("J",loadJ);
    addJ.x = 790;
    addJ.y = 330;
    addJ.scale = 1.2;
    addJ.lifetime = 175;
  }
  if(keyDown("K")){
    addK.addImage("K",loadK);
    addK.x = 790;
    addK.y = 330;
    addK.scale = 1.2;
    addK.lifetime = 175;
  }
  if(keyDown("L")){
    addL.addImage("L",loadL);
    addL.x = 790;
    addL.y = 330;
    addL.scale = 1.2;
    addL.lifetime = 175;
  }
  if(keyDown("M")){
    addM.addImage("M",loadM);
    addM.x = 790;
    addM.y = 330;
    addM.scale = 1.2;
    addM.lifetime = 175;
  }
  if(keyDown("N")){
    addN.addImage("N",loadN);
    addN.x = 790;
    addN.y = 330;
    addN.scale = 1.2;
    addN.lifetime = 175;
  }
  if(keyDown("O")){
    addO.addImage("O",loadO);
    addO.x = 790;
    addO.y = 330;
    addO.scale = 1.2;
    addO.lifetime = 175;
  }
  if(keyDown("P")){
    addP.addImage("P",loadP);
    addP.x = 790;
    addP.y = 330;
    addP.scale = 1.2;
    addP.lifetime = 175;
  }
  if(keyDown("Q")){
    addQ.addImage("Q",loadQ);
    addQ.x = 790;
    addQ.y = 330;
    addQ.scale = 1.2;
    addQ.lifetime = 175;
  }
  if(keyDown("R")){
    addR.addImage("R",loadR);
    addR.x = 790;
    addR.y = 330;
    addR.scale = 1.2;
    addR.lifetime = 175;
  }if(keyDown("S")){
    addS.addImage("S",loadS);
    addS.x = 790;
    addS.y = 330;
    addS.scale = 1.2;
    addS.lifetime = 175;
  }
  if(keyDown("T")){
    addT.addImage("T",loadT);
    addT.x = 790;
    addT.y = 330;
    addT.scale = 1.2;
    addT.lifetime = 175;
  }
  if(keyDown("U")){
    addU.addImage("U",loadU);
    addU.x = 790;
    addU.y = 330;
    addU.scale = 1.2;
    addU.lifetime = 175;
  }
  if(keyDown("V")){
    addV.addImage("V",loadV);
    addV.x = 790;
    addV.y = 330;
    addV.scale = 0.8;
    addV.lifetime = 175;
  }
  if(keyDown("W")){
    addW.addImage("W",loadW);
    addW.x = 790;
    addW.y = 330;
    addW.scale = 0.8;
    addW.lifetime = 175;
  }
  if(keyDown("X")){
    addX.addImage("X",loadX);
    addX.x = 790;
    addX.y = 330;
    addX.scale = 0.6;
    addX.lifetime = 175;
  }
  if(keyDown("Y")){
    addY.addImage("Y",loadY);
    addY.x = 790;
    addY.y = 330;
    addY.scale = 0.9;
    addY.lifetime = 175;
  }
  if(keyDown("Z")){
    addZ.addImage("Z",loadZ);
    addZ.x = 790;
    addZ.y = 330;
    addZ.scale = 0.5;
    addZ.lifetime = 175;
  }

 
  
  


















  drawSprites();
  };








