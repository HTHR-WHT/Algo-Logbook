#### Solution

```html
<body>
  <div id="swatch"></div>
  <p>You are viewing: <span id="value"></span></p>
  <button id="filter">Rose Filter</button>
</body>
```

```css
#swatch {
  height: 250px;
  width: 250px;
  border: 2px solid black;
}
```

```javascript
let colorStr = '1AB20D';
const swatch = document.getElementById('swatch');
const span = document.getElementById('value')
const roseBtn = document.getElementById('filter');
swatch.style.backgroundColor = span.innerHTML = `#${colorStr}`;
const colorize = () => {
  // slice each 2-digift color hex val, convert to base-10;
  // NB: 255 === FF in hex
  let redVal = (parseInt(colorStr.slice(0, 2), 16));
  let greenVal = (parseInt(colorStr.slice(2, 4), 16));
  let blueVal = (parseInt(colorStr.slice(4, 6), 16));
  // adjust values to be more rose, within (0,255) range
  // NB: 25 == 10% of 255 (FF)
  redVal < 205 ? redVal += 50 : redVal = 255;
  greenVal > 24 ? greenVal -= 25 : greenVal = 0;
  blueVal < 230 ? blueVal += 25 : blueVal = 255;

  //convert back to hex && add buffer 0 to single-digit strings
  const convertAndAddBuffer = val => val.toString(16).length === 1 ? '0' + val.toString(16) : val.toString(16);
  colorStr = [redVal, greenVal, blueVal].map(convertAndAddBuffer).join('');
  swatch.style.backgroundColor = span.innerHTML = `#${colorStr.toUpperCase()}`;
};
roseBtn.addEventListener('click', colorize));
```
