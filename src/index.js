import P5 from 'p5';

/**
 * @param {P5} p
 * @param {{x: number, y: number}} position
 * @param {number} angle
 * @param {number} radius
 * @returns {{x: number, y: number}}
 */
function createHandle(p, position, angle, radius) {
  return {
    x: position.x + p.sin(angle) * radius,
    y: position.y + p.cos(angle) * radius,
  };
}

/**
 *
 * @param {P5} p
 * @param {[number, number, number, number][]} handles
 */
function renderBezierDebug(p, handles) {
  p.stroke('red');
  for (const [originX, originY, handleX, handleY] of handles) {
    p.strokeWeight(10);
    p.point(handleX, handleY);
    p.strokeWeight(1);
    p.line(originX, originY, handleX, handleY);
  }
}

/**
 * @param {P5} p
 * @param {{x: number, y: number}} start
 * @param {{x: number, y: number}} end
 * @param {boolean} debug
 */
function drawBall(p, start, end, debug = false) {
  const handle1 = createHandle(p, start, 1, 50);
  const handle2 = createHandle(p, end, 2, 100);

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
    renderBezierDebug(p, [
      [start.x, start.y, handle1.x, handle1.y],
      [end.x, end.y, handle2.x, handle2.y],
    ]);
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
