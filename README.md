# zakkin.js

> zakkin.js is a heatmap display library

## Usage
```javascript
cosnt points = [{
  x: 15,
  y: 15,
  radius: 30
}, {
  x: 10,
  y: 10,
  radius: 30
}, ...];

const zakkin = new Zakkin();
zakkin.init(320, 740, points);
zakkin.execute();
zakkin.render('stage');
```

## Install
```
$ npm install zakkin
```

or

```html
<script src="https://cdn.jsdelivr.net/npm/zakkin@1.0.1/zakkin.min.js"></script>
```

## API
### Zakkin.prototype.init(width, height, points)
Generate and initialize a new canvas.

#### width[Number]
Set to canvas.width.

#### height[Number]
Set to canvas.height.

#### points[Array<Point>]
Initial drawing data.

##### Point.x[Number]
The x-axis px of the point.

##### Point.y[Number]
The y-axis px of the point.

##### Point.radius[Number]
Radius of drawing circle.

### Zakkin.prototype.execute()
Perform initial drawing.

### Zakkin.prototype.clear()
Clear canvas.

### Zakkin.prototype.draw(Point)
Draw a single point.

##### Point.x[Number]
The x-axis px of the point.

##### Point.y[Number]
The y-axis px of the point.

##### Point.radius[Number]
Radius of drawing circle.

### Zakkin.prototype.process()
Update screen canvas to the current drawing state.

### Zakkin.prototype.render(id)
Insert screen canvas into the dom of the specified id.

#### id[String]
element-id.

### Zakkin.prototype.picker(x, y)
Returns the density of the specified coordinates.

#### x[Number]
The x-axis px.

#### y[Number]
The y-axis px.
