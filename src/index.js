import P5 from 'p5';

/**
 * P5 Sketch
 * @param {P5} p
 */
function sketch(p) {
  p.setup = () => {
    p.createCanvas(500, 500);
    p.background('#fff');
  };
}

(function createSketch() {
  const sketchContainerElement = document.querySelector('#sketch-container');

  if (sketchContainerElement) {
    new P5(sketch, sketchContainerElement);
  }
})();
