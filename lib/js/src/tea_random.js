// Generated by ReScript, PLEASE EDIT WITH CARE
'use strict';

var Curry = require("rescript/lib/js/curry.js");
var Random = require("rescript/lib/js/random.js");
var Pervasives = require("rescript/lib/js/pervasives.js");

Random.self_init(undefined);

var bool = /* Generator */{
  _0: (function (state) {
      return Random.State.bool(state);
    })
};

function $$int(min, max) {
  var match = min < max ? [
      min,
      max
    ] : [
      max,
      min
    ];
  var max$1 = match[1];
  var min$1 = match[0];
  return /* Generator */{
          _0: (function (state) {
              return min$1 + Random.State.$$int(state, (max$1 - min$1 | 0) + 1 | 0) | 0;
            })
        };
}

function $$float(min, max) {
  return /* Generator */{
          _0: (function (state) {
              return min + Random.State.$$float(state, max - min);
            })
        };
}

function list(count, genCmd) {
  var genCmd$1 = genCmd._0;
  return /* Generator */{
          _0: (function (state) {
              var _i = count;
              var _acc = /* [] */0;
              while(true) {
                var acc = _acc;
                var i = _i;
                if (i <= 0) {
                  return acc;
                }
                _acc = {
                  hd: Curry._1(genCmd$1, state),
                  tl: acc
                };
                _i = i - 1 | 0;
                continue ;
              };
            })
        };
}

function map(func, genCmd) {
  var genCmd$1 = genCmd._0;
  return /* Generator */{
          _0: (function (state) {
              return Curry._1(func, Curry._1(genCmd$1, state));
            })
        };
}

function map2(func, genCmd1, genCmd2) {
  var genCmd2$1 = genCmd2._0;
  var genCmd1$1 = genCmd1._0;
  return /* Generator */{
          _0: (function (state) {
              var res1 = Curry._1(genCmd1$1, state);
              var res2 = Curry._1(genCmd2$1, state);
              return Curry._2(func, res1, res2);
            })
        };
}

function map3(func, genCmd1, genCmd2, genCmd3) {
  var genCmd3$1 = genCmd3._0;
  var genCmd2$1 = genCmd2._0;
  var genCmd1$1 = genCmd1._0;
  return /* Generator */{
          _0: (function (state) {
              var res1 = Curry._1(genCmd1$1, state);
              var res2 = Curry._1(genCmd2$1, state);
              var res3 = Curry._1(genCmd3$1, state);
              return Curry._3(func, res1, res2, res3);
            })
        };
}

function map4(func, genCmd1, genCmd2, genCmd3, genCmd4) {
  var genCmd4$1 = genCmd4._0;
  var genCmd3$1 = genCmd3._0;
  var genCmd2$1 = genCmd2._0;
  var genCmd1$1 = genCmd1._0;
  return /* Generator */{
          _0: (function (state) {
              var res1 = Curry._1(genCmd1$1, state);
              var res2 = Curry._1(genCmd2$1, state);
              var res3 = Curry._1(genCmd3$1, state);
              var res4 = Curry._1(genCmd4$1, state);
              return Curry._4(func, res1, res2, res3, res4);
            })
        };
}

function map5(func, genCmd1, genCmd2, genCmd3, genCmd4, genCmd5) {
  var genCmd5$1 = genCmd5._0;
  var genCmd4$1 = genCmd4._0;
  var genCmd3$1 = genCmd3._0;
  var genCmd2$1 = genCmd2._0;
  var genCmd1$1 = genCmd1._0;
  return /* Generator */{
          _0: (function (state) {
              var res1 = Curry._1(genCmd1$1, state);
              var res2 = Curry._1(genCmd2$1, state);
              var res3 = Curry._1(genCmd3$1, state);
              var res4 = Curry._1(genCmd4$1, state);
              var res5 = Curry._1(genCmd5$1, state);
              return Curry._5(func, res1, res2, res3, res4, res5);
            })
        };
}

function andThen(func, genCmd) {
  var genCmd$1 = genCmd._0;
  return /* Generator */{
          _0: (function (state) {
              var res = Curry._1(genCmd$1, state);
              var userGen = Curry._1(func, res);
              return Curry._1(userGen._0, state);
            })
        };
}

function pair(gen1, gen2) {
  return map2((function (a, b) {
                return [
                        a,
                        b
                      ];
              }), gen1, gen2);
}

function generate(tagger, genCmd) {
  var genCmd$1 = genCmd._0;
  return {
          TAG: /* EnqueueCall */2,
          _0: (function (callbacks) {
              var state = Random.get_state(undefined);
              var genValue = Curry._1(genCmd$1, state);
              Random.set_state(state);
              return Curry._1(callbacks.contents.enqueue, Curry._1(tagger, genValue));
            })
        };
}

function step(genCmd, state) {
  var newState = Random.State.copy(state._0);
  return [
          Curry._1(genCmd._0, newState),
          /* Seed */{
            _0: newState
          }
        ];
}

function initialSeed(seed) {
  return /* Seed */{
          _0: Random.State.make([seed])
        };
}

var minInt = Pervasives.min_int;

var maxInt = Pervasives.max_int;

var minFloat = Pervasives.min_float;

var maxFloat = Pervasives.max_float;

exports.minInt = minInt;
exports.maxInt = maxInt;
exports.minFloat = minFloat;
exports.maxFloat = maxFloat;
exports.bool = bool;
exports.$$int = $$int;
exports.$$float = $$float;
exports.list = list;
exports.map = map;
exports.map2 = map2;
exports.map3 = map3;
exports.map4 = map4;
exports.map5 = map5;
exports.andThen = andThen;
exports.pair = pair;
exports.generate = generate;
exports.step = step;
exports.initialSeed = initialSeed;
/*  Not a pure module */
