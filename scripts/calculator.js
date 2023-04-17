let calculator = {
    sum() {
      return this.a + this.b;
    },
    sub(){
        return this.a - this.b;
    },
  
    mul() {
      return this.a * this.b;
    },
    div() {
        return this.a / this.b;
    },
  
    read() {
      this.a = +prompt('First Number', 0);
      this.b = +prompt('Second Number', 0);
    }
  };