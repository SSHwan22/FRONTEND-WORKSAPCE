//app.js
class App{
    constructor() {
      this.canvas = document.createElement('canvas');
      this.ctx = this.canvas.getContext('2d');
  
      document.body.appendChild(this.canvas);
    //   this.canvas.width = document.body.clientWidth;
    //   this.canvas.height = document.body.clientHeight;
        console.log(this);

      window.addEventListener('resize', this.resize.bind(this));
      this.resize();
}
resize(){
    this.canvas.width = document.body.clientWidth;
    this.canvas.width = document.body.clientHeight;

    this.animate();
}

animate(){
    // 직사각형 생성
    this.ctx.rect(0, 0, this.canvas.width, this.canvas.height);
    this.ctx.fillStyle = '#b197fc';
    this.ctx.fill();

    this.ctx.beginPath();
    // this.ctx.arc(200, 200, 50, 0, 2 * Math.PI);
    this.ctx.fillStyle = '#faa2c1';
    this.ctx.rect(10,10,100,100);
    this.ctx.fill();
    this.ctx.closePath();
}
  }

  new App();