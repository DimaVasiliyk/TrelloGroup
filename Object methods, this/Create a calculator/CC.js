
let calculator = {
    sum(){
        return this.a + this.b   
    },
   mul(){
      return this.a * this.b 
   },  
   read(){
    this.a = +prompt("")
    this.b = +prompt("")   
   }
  };
  
calculator.read();
alert( calculator.sum() );

alert( calculator.mul() );