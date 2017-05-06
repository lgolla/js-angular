// TODO
if (!Array.prototype.odd) {
    Array.prototype.odd = function(n) {
        return this.filter(function(n) {
            return n % 2 !== 0;
        });
    }
}
if (!Array.prototype.even) { 
      Array.prototype.even = function(n) {
        return this.filter(function(n) {
            return n % 2 === 0;
        });
    }
}
if (!Array.prototype.average) {
    Array.prototype.average = function() {
        return this.sum() / this.length;
    }
}

if (!Array.prototype.sum) {
    Array.prototype.sum = function() {
        return this.reduce(function(n1, n2) {
            return n1 + n2;
        }, 0);
    }
}

if (!Array.prototype.cube) {
    Array.prototype.cube = function() {
        return this.map(function(n) {
            return n * n * n;
        });
    }
}


if (!Array.prototype.square) {
    Array.prototype.square = function() {
        return this.map(function(n) {
            return n * n;
        });
    }
}