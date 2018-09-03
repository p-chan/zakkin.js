var Zakkin = function() {};

Zakkin.prototype = {

  init: function(width, height, points) {
    var _this = this;
    this.points = points;
    // Create canvas
    this.stage = document.createElement('canvas');
    this.board = document.createElement('canvas');
    this.palet = document.createElement('canvas');
    // Set size
    this.stage.width = width;
    this.stage.height = height;
    this.board.width = width;
    this.board.height = height;
    this.palet.width = 1;
    this.palet.height = 255;
    // Get 2D context
    this.stageContext = this.stage.getContext('2d');
    this.boardContext = this.board.getContext('2d');
    this.paletContext = this.palet.getContext('2d');
    // Import Gradient
    _this.paletData = null;
    var img = new Image();
    // img.src = 'gradient.png';
    img.src = 'data:image/png;base64,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';
    img.onload = function() {
      _this.paletContext.drawImage(img, 0, 0, img.width, img.height);
      _this.paletData = _this.paletContext.getImageData(0, 0, 1, 255);
    }
    this.stageData = _this.stageContext.getImageData(0, 0, _this.stage.width, _this.stage.height);
    this.boardData = _this.boardContext.getImageData(0, 0, _this.board.width, _this.board.height);
    this.updateAreaData = null;
    this.clear();
  },

  clear: function() {
    // clear
    this.stageContext.fillStyle = 'rgba(0,0,0,1)';
    this.stageContext.fillRect(0, 0, this.stage.width, this.stage.height);
  },

  execute: function () {
    var _this = this;
    this.points.forEach(function(point){
      _this.draw(point);
    });
    this.process();
  },

  setup: function () {
    var _this = this;
    this.points = [];
    for (var i = 1; i <= 1000; i++) {
      _this.points.push({
        x : Math.floor(Math.random()*_this.stage.width),
        y : Math.floor(Math.random()*_this.stage.height),
        radius : 40
      });
    };
  },

  draw: function (point) {
    if(this.updateAreaData) {
      this.updateAreaData = {
        start: {
          x: Math.min(point.x - point.radius, this.updateAreaData.start.x),
          y: Math.min(point.y - point.radius, this.updateAreaData.start.y)
        },
        end: {
          x: Math.max(point.x + point.radius, this.updateAreaData.end.x),
          y: Math.max(point.y + point.radius, this.updateAreaData.end.y)
        }
      }
    } else {
      this.updateAreaData = {
        start: {
          x: point.x - point.radius,
          y: point.y - point.radius
        },
        end: {
          x: point.x + point.radius,
          y: point.y + point.radius
        }
      }
    }

    // Point Draw
    this.stageContext.globalCompositeOperation = 'lighter'; // 明るくするよ
    this.stageContext.beginPath();
    var gradient = this.stageContext.createRadialGradient(point.x, point.y, 0, point.x, point.y, point.radius);
    gradient.addColorStop(0.0, 'rgba(10, 10, 10, 1)'); // 25ずつ足すよ
    gradient.addColorStop(1.0, 'rgba(0, 0, 0, 1)'); // 端っこは足されないよ
    this.stageContext.arc(point.x, point.y, point.radius, 0, Math.PI*2, false);
    this.stageContext.fillStyle = gradient;
    this.stageContext.fill();
  },

  process: function () {
    var _this = this;
    if(!this.updateAreaData || !this.paletData) { return false; }

    var data = _this.boardData.data;
    var x = this.updateAreaData.start.x;
    var y = this.updateAreaData.start.y;
    var width = this.updateAreaData.end.x - this.updateAreaData.start.x;
    var height = this.updateAreaData.end.y - this.updateAreaData.start.y;

    var updateArea = _this.stageContext.getImageData(x, y, width, height);

    for (var i =0; i < height; i++) {
     var offsetY = (i + y) * _this.stage.width;
     for (var j = 0; j < width; j++) {
      var offsetX = x;
      var index = (offsetY+offsetX+j) * 4;
      var alpha = updateArea.data[(i*width+j)*4];
      if (alpha > 0) {
        data[index + 0] = _this.paletData.data[(alpha * 4) - 4];
        data[index + 1] = _this.paletData.data[(alpha * 4) - 3];
        data[index + 2] = _this.paletData.data[(alpha * 4) - 2];
        data[index + 3] = _this.paletData.data[(alpha * 4) - 1];
      };
      if (alpha == 0) {
        data[index + 3] = 0;
      };
     };
    };

    _this.boardData.data = data;
    _this.boardContext.putImageData(_this.boardData, 0, 0);
    this.updateAreaData = null;
  },

  render: function(id) {
    document.getElementById(id).appendChild(this.board);
    // document.getElementById(id).appendChild(this.stage);
    // document.getElementById(id).appendChild(this.palet);
  },

  picker: function (x, y) {
    rgb = this.stageContext.getImageData(x, y, 1, 1).data[0];
    return Math.ceil(rgb/2.55);
  }
}
