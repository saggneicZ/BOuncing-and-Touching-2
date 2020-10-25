function bouncing (o1,o2) {
    if(o2.x-o1.x<=o1.width/2+o2.width/2 &&
      o1.x-box2.x<=o1.width/2+o2.width/2 &&
      o2.y-box1.y<=o1.height/2+o2.height/2 &&
      o1.y-box2.y<=o1.height/2+o2.height/2){
  

  
    o1.velocityX=o1.velocityX*(-1);
    o2.velocityX=o2.velocityX*(-1);
      }
  
      else{
      
        o1.velocityX=o1.velocityX;
        o2.velocityX=o2.velocityX;
      }
  }
  function touching (o1,o2) {
    if(o2.x-o1.x<=o1.width/2+o2.width/2 &&
      o1.x-box2.x<=o1.width/2+o2.width/2 &&
      o2.y-box1.y<=o1.height/2+o2.height/2 &&
      o1.y-box2.y<=o1.height/2+o2.height/2){
      return true;
      }
  
      else{
     return false;
      }
  }