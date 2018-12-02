class Options {
  constructor(height, width, bg, fontSize, textAlign, color) {
    this.height = height;
    this.width = width;
    this.bg = bg;
    this.fontSize = fontSize;
    this.color = color;
    this.textAlign = textAlign;
  }
  opt() {
    let div = document.createElement('div');
    div.innerHTML = 'Есть здесь кто?';
    div.style.cssText = `height:${this.height}px;
                         width:${this.width}px;
                         background:${this.bg}; 
                         color:${this.color};
                         font-Size:${this.fontSize}px;
                         text-align:${this.textAlign};`;
    document.body.appendChild(div);
    console.log(div);
  }
  
}
let opts = new Options(1080, 1920, 'url(./img/apple_true.jpg) center no-repeat', 200, 'center', 'red');
opts.opt();