

var map = {};
map.width = 700;
map.height = 700;

map.canvas =
  d3.select('.compare')
    .append('canvas')
      .attr('width', map.width)
      .attr('height', map.height)
      .node().getContext('2d');

map.svg =
  d3.select('.compare')
    .append('svg')
      .attr('width', map.width)
      .attr('height', map.height)
      .append('g');

map.svg.append('rect')
  .attr('class', 'overlay')
  .attr('width', map.width)
  .attr('height', map.height);

map.canvas.nodes =
  d3.range(65).map(function(d, i) {
    return {
      x: Math.random() * map.width / 8,
      y: Math.random() * map.height / 8,
      r: 5
    };
  });
map.svg.nodes =
  d3.range(830).map(function(d, i) {
    return {
      x: Math.random() * map.width / 8,
      y: Math.random() * map.height / 8,
      r: 5
    };
  });

map.nodes = map.svg.nodes.concat( map.canvas.nodes );
var root = map.nodes[0];
root.r = 0;
root.fixed = true;

var x =
  d3.scale.linear()
    .domain([0, map.width])
    .range([0, map.width]);

var y =
  d3.scale.linear()
    .domain([0, map.height])
    .range([map.height, 0]);


map.canvas.draw =
  function() {
    map.canvas.clearRect(0, 0, map.width, map.height);
    map.canvas.beginPath();
    var i = -1, cx, cy;
    while (++i < map.canvas.nodes.length) {
      d = map.canvas.nodes[i];
      cx = x( d.x );
      cy = y( d.y );
      map.canvas.moveTo(cx, cy);
      map.canvas.arc(cx, cy, d.r, 0, 2 * Math.PI);
    }
    map.canvas.fill();
    
  };

map.svg.draw =
  function() {
    circle = map.svg.selectAll('circle')
      .data(map.svg.nodes).enter()
      .append('circle')
        .attr('r', function(d) { return d.r; })
        .attr('fill', '#ffd7a9')
        .attr('transform', map.svg.transform);
  };

map.canvas.draw();
map.svg.draw();

map.redraw = function() {
  map.canvas.draw();
  circle.attr('transform', map.svg.transform);
};

map.svg.transform =
  function(d) {
    return 'translate(' + x( d.x ) + ',' + y( d.y ) + ')';
  };


/* FORCE */

var force =
  d3.layout.force()
    .gravity(0.02)
    .charge( function(d, i) { return i ? 0 : -2000; } )
    .nodes(map.nodes)
    .size([map.width, map.height])
    .start();

force.on('tick', function(e) {
  var q = d3.geom.quadtree(map.nodes), i;
  for (i = 1; i < map.nodes.length; ++i) {
    q.visit( collide(map.nodes[i]) );
  }
  map.redraw();
});

function collide(node) {
  var r = node.r + 15,
    nx1 = node.x - r,
    nx2 = node.x + r,
    ny1 = node.y - r,
    ny2 = node.y + r;
  return function(quad, x1, y1, x2, y2) {
    if (quad.point && (quad.point !== node)) {
      var x = node.x - quad.point.x,
          y = node.y - quad.point.y,
          l = Math.sqrt(x * x*0.39 + y * y * 0.39),
          r = node.r + quad.point.r;
      if (l < r) {
        l = (l - r) / l * 0.55;
        node.x -= x *= l;
        node.y -= y *= l;
        quad.point.x += x;
        quad.point.y += y;
      }
    }
    return x1 > nx2 || x2 < nx1 || y1 > ny2 || y2 < ny1;
  };
}


/* LISTENERS */

function mousemove() {
  var p = d3.mouse(this);
  root.px = x.invert( p[0] );
  root.py = y.invert( p[1] );
  force.resume();
}

d3.select('body')
  .on('mousemove', mousemove)
  .call( d3.behavior.zoom().x( x ).y( y ).scaleExtent([1, 8]).on('zoom', map.redraw) );