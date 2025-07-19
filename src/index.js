import P5 from 'p5';

/**
 * @param {P5} p
 * @param {{x: number, y: number}} start
 * @param {{x: number, y: number}} end
 * @param {boolean} debug
 */
function drawBall(p, start, end, debug = false) {
  const handle1 = { x: start.x + 40, y: start.y - 40 };
  const handle2 = { x: end.x + 40, y: end.y - 40 };

  p.bezier(
    start.x,
    start.y,
    handle1.x,
    handle1.y,
    handle2.x,
    handle2.y,
    end.x,
    end.y
  );

  if (debug) {
    p.stroke('red');
    p.strokeWeight(10);
    p.point(handle1.x, handle1.y);
    p.point(handle2.x, handle2.y);
  }

  p.stroke('black');
  p.strokeWeight(1);
  p.circle(end.x, end.y, 20);
}

/** @param {P5} p */
function sketch(p) {
  p.setup = () => {
    p.createCanvas(500, 500);
    p.background('#fff');

    drawBall(p, { x: 120, y: 120 }, { x: 200, y: 300 }, true);
  };
}

(function createSketch() {
  const sketchContainerElement = document.querySelector('#sketch-container');

  if (sketchContainerElement) {
    new P5(sketch, sketchContainerElement);
  }
})();
