let rectangle = {
    length: 5,
    width: 10,
    area: function() {
      return this.length * this.width;
    },
    perimeter: function() {
      return 2 * (this.length + this.width);
    }
  };
  
  console.log("Rectangle Area:", rectangle.area());
  console.log("Rectangle Perimeter:", rectangle.perimeter());

