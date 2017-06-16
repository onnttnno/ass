
//this is superclass for operate value
function Operate (val1,val2) {
  this.val1 = val1;
  this.val2 = val2;
}

Operate.prototype.calculated = function () {
  console.log(' ...');
}

//plus value
class Plus extends Operate {
  calculated() {

    return this.val1+this.val2;
  }
}


//Minus value
class Minus extends Operate {
  calculated() {

    return this.val1-this.val2;
  }
}

//multiplae
class Multi extends Operate {
  calculated() {

    return this.val1*this.val2;
  }
}


//devide
class Devide extends Operate {
  calculated() {
    if(this.val2 != 0){
      return this.val1/this.val2;
    }
    else{

      return "error becuse number2 equal 0";
    }
  }
}
