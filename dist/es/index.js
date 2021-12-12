/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

function __spreadArray(to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
}

function append(array, element) {
  return __spreadArray(__spreadArray([], array, true), [element], false);
}
function prepend(array, element) {
  return __spreadArray([element], array, true);
}
function remove(array, indexToRemove, size) {
  if (size === void 0) {
    size = 1;
  }

  return array.slice(0, indexToRemove).concat(array.slice(indexToRemove + size));
}
function unique(array) {
  return array.filter(function (value, index, self) {
    return self.indexOf(value) === index;
  });
}

/**
 * Convert an angle from degrees to radians.
 */
function deg2rad(degrees) {
  return degrees * Math.PI / 180;
}
/**
 * Convert an angle from radians to degrees.
 */

function rad2deg(radians) {
  return radians * 180 / Math.PI;
}
/**
 * Create sine waves using familiar parameters.
 */

function sinWave(t, speed, amplitude, offset) {
  if (offset === void 0) {
    offset = 0;
  }

  return Math.sin(t * speed + offset) * amplitude;
}
/**
 * Create cosine waves using familiar parameters.
 */

function cosWave(t, speed, amplitude, offset) {
  if (offset === void 0) {
    offset = 0;
  }

  return Math.sin(t * speed + offset) * amplitude;
}

function randomBetween(min, max) {
  return Math.random() * (max - min) + min;
}
function randomID() {
  return Math.random().toString(36).replace('0.', '');
}

var Vector2 =
/** @class */
function () {
  function Vector2(x, y) {
    if (x === void 0) {
      x = 0;
    }

    if (y === void 0) {
      y = 0;
    }

    this.x = x;
    this.y = y;
  }
  /**
   * Returns the `x` and `y` components of the vector as an iterable array.
   */


  Vector2.prototype.components = function () {
    return [this.x, this.y];
  };
  /**
   * Negates the vector.
   * */


  Vector2.prototype.negate = function () {
    return createVector(-this.x, -this.y);
  };
  /**
   * Return the length of the vector.
   */


  Vector2.prototype.magnitude = function () {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  };
  /**
   * Returns the the vector scaled by an arbitrary amount.
   */


  Vector2.prototype.scale = function (scalar) {
    return createVector(this.x * scalar, this.y * scalar);
  };
  /**
   * Returns the vector scaled to unit length, always having a length of one.
   */


  Vector2.prototype.normalize = function () {
    var magnitude = this.magnitude(); // TODO: Describe **why** 1e-9 is used instead of zero.
    // Might be to do something with rounding error:
    // https://www.geeksforgeeks.org/problem-in-comparing-floating-point-numbers-and-how-to-compare-them-correctly/

    if (Math.abs(magnitude) < 1e-9) {
      return createVector(0, 0);
    } else {
      return createVector(this.x / magnitude, this.y / magnitude);
    }
  };
  /**
   * Add two vectors together.
   */


  Vector2.prototype.add = function (b) {
    return createVector(this.x + b.x, this.y + b.y);
  };
  /**
   * Subtract two vectors from each other.
   */


  Vector2.prototype.sub = function (b) {
    return createVector(this.x - b.x, this.y - b.y);
  };
  /**
   * Returns the distance between two vectors.
   */


  Vector2.prototype.distanceTo = function (b) {
    var difference = this.sub(b);
    return Math.sqrt(difference.x * difference.x + difference.y * difference.y);
  };
  /**
   * Returns a vector that is perpendicular to the current vector.
   */


  Vector2.prototype.perpendicular = function () {
    return createVector(this.y, -this.x);
  };

  Vector2.prototype.angle = function () {
    return Math.atan2(this.y, this.x);
  };

  Vector2.prototype.angleTo = function (b) {
    return b.sub(this).angle();
  };

  Vector2.prototype.abs = function () {
    return createVector(Math.abs(this.x), Math.abs(this.y));
  };

  Vector2.prototype.floor = function () {
    return createVector(Math.floor(this.x), Math.floor(this.y));
  };

  Vector2.prototype.ceil = function () {
    return createVector(Math.ceil(this.x), Math.ceil(this.y));
  };

  Vector2.ZERO = createVector(0, 0);
  Vector2.UP = createVector(0, -1);
  Vector2.DOWN = createVector(0, 1);
  Vector2.LEFT = createVector(-1, 0);
  Vector2.RIGHT = createVector(1, 0);
  return Vector2;
}();
function createVector(x, y) {
  if (x === void 0) {
    x = 0;
  }

  if (y === void 0) {
    y = 0;
  }

  return new Vector2(x, y);
}
function mouseEventToVector(event) {
  return createVector(event.offsetX, event.offsetY);
}

export { Vector2, append, cosWave, createVector, deg2rad, mouseEventToVector, prepend, rad2deg, randomBetween, randomID, remove, sinWave, unique };
