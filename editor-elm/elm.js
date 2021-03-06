var Elm = Elm || { Native: {} };
Elm.Array = Elm.Array || {};
Elm.Array.make = function (_elm) {
   "use strict";
   _elm.Array = _elm.Array || {};
   if (_elm.Array.values)
   return _elm.Array.values;
   var _op = {},
   _N = Elm.Native,
   _U = _N.Utils.make(_elm),
   _L = _N.List.make(_elm),
   $moduleName = "Array",
   $Basics = Elm.Basics.make(_elm),
   $List = Elm.List.make(_elm),
   $Maybe = Elm.Maybe.make(_elm),
   $Native$Array = Elm.Native.Array.make(_elm);
   var append = $Native$Array.append;
   var length = $Native$Array.length;
   var slice = $Native$Array.slice;
   var set = $Native$Array.set;
   var get = F2(function (i,
   array) {
      return _U.cmp(0,
      i) < 1 && _U.cmp(i,
      $Native$Array.length(array)) < 0 ? $Maybe.Just(A2($Native$Array.get,
      i,
      array)) : $Maybe.Nothing;
   });
   var push = $Native$Array.push;
   var empty = $Native$Array.empty;
   var filter = F2(function (isOkay,
   arr) {
      return function () {
         var update = F2(function (x,
         xs) {
            return isOkay(x) ? A2($Native$Array.push,
            x,
            xs) : xs;
         });
         return A3($Native$Array.foldl,
         update,
         $Native$Array.empty,
         arr);
      }();
   });
   var foldr = $Native$Array.foldr;
   var foldl = $Native$Array.foldl;
   var indexedMap = $Native$Array.indexedMap;
   var map = $Native$Array.map;
   var toIndexedList = function (array) {
      return A3($List.map2,
      F2(function (v0,v1) {
         return {ctor: "_Tuple2"
                ,_0: v0
                ,_1: v1};
      }),
      _L.range(0,
      $Native$Array.length(array) - 1),
      $Native$Array.toList(array));
   };
   var toList = $Native$Array.toList;
   var fromList = $Native$Array.fromList;
   var initialize = $Native$Array.initialize;
   var repeat = F2(function (n,e) {
      return A2(initialize,
      n,
      $Basics.always(e));
   });
   var Array = {ctor: "Array"};
   _elm.Array.values = {_op: _op
                       ,empty: empty
                       ,repeat: repeat
                       ,initialize: initialize
                       ,fromList: fromList
                       ,length: length
                       ,push: push
                       ,append: append
                       ,get: get
                       ,set: set
                       ,slice: slice
                       ,toList: toList
                       ,toIndexedList: toIndexedList
                       ,map: map
                       ,indexedMap: indexedMap
                       ,filter: filter
                       ,foldl: foldl
                       ,foldr: foldr};
   return _elm.Array.values;
};
Elm.Basics = Elm.Basics || {};
Elm.Basics.make = function (_elm) {
   "use strict";
   _elm.Basics = _elm.Basics || {};
   if (_elm.Basics.values)
   return _elm.Basics.values;
   var _op = {},
   _N = Elm.Native,
   _U = _N.Utils.make(_elm),
   _L = _N.List.make(_elm),
   $moduleName = "Basics",
   $Native$Basics = Elm.Native.Basics.make(_elm),
   $Native$Show = Elm.Native.Show.make(_elm),
   $Native$Utils = Elm.Native.Utils.make(_elm);
   var uncurry = F2(function (f,
   _v0) {
      return function () {
         switch (_v0.ctor)
         {case "_Tuple2": return A2(f,
              _v0._0,
              _v0._1);}
         _U.badCase($moduleName,
         "on line 595, column 3 to 8");
      }();
   });
   var curry = F3(function (f,
   a,
   b) {
      return f({ctor: "_Tuple2"
               ,_0: a
               ,_1: b});
   });
   var flip = F3(function (f,b,a) {
      return A2(f,a,b);
   });
   var snd = function (_v4) {
      return function () {
         switch (_v4.ctor)
         {case "_Tuple2": return _v4._1;}
         _U.badCase($moduleName,
         "on line 573, column 3 to 4");
      }();
   };
   var fst = function (_v8) {
      return function () {
         switch (_v8.ctor)
         {case "_Tuple2": return _v8._0;}
         _U.badCase($moduleName,
         "on line 567, column 3 to 4");
      }();
   };
   var always = F2(function (a,
   _v12) {
      return function () {
         return a;
      }();
   });
   var identity = function (x) {
      return x;
   };
   _op["<|"] = F2(function (f,x) {
      return f(x);
   });
   _op["|>"] = F2(function (x,f) {
      return f(x);
   });
   _op[">>"] = F3(function (f,
   g,
   x) {
      return g(f(x));
   });
   _op["<<"] = F3(function (g,
   f,
   x) {
      return g(f(x));
   });
   _op["++"] = $Native$Utils.append;
   var toString = $Native$Show.toString;
   var isInfinite = $Native$Basics.isInfinite;
   var isNaN = $Native$Basics.isNaN;
   var toFloat = $Native$Basics.toFloat;
   var ceiling = $Native$Basics.ceiling;
   var floor = $Native$Basics.floor;
   var truncate = $Native$Basics.truncate;
   var round = $Native$Basics.round;
   var otherwise = true;
   var not = $Native$Basics.not;
   var xor = $Native$Basics.xor;
   _op["||"] = $Native$Basics.or;
   _op["&&"] = $Native$Basics.and;
   var max = $Native$Basics.max;
   var min = $Native$Basics.min;
   var GT = {ctor: "GT"};
   var EQ = {ctor: "EQ"};
   var LT = {ctor: "LT"};
   var compare = $Native$Basics.compare;
   _op[">="] = $Native$Basics.ge;
   _op["<="] = $Native$Basics.le;
   _op[">"] = $Native$Basics.gt;
   _op["<"] = $Native$Basics.lt;
   _op["/="] = $Native$Basics.neq;
   _op["=="] = $Native$Basics.eq;
   var e = $Native$Basics.e;
   var pi = $Native$Basics.pi;
   var clamp = $Native$Basics.clamp;
   var logBase = $Native$Basics.logBase;
   var abs = $Native$Basics.abs;
   var negate = $Native$Basics.negate;
   var sqrt = $Native$Basics.sqrt;
   var atan2 = $Native$Basics.atan2;
   var atan = $Native$Basics.atan;
   var asin = $Native$Basics.asin;
   var acos = $Native$Basics.acos;
   var tan = $Native$Basics.tan;
   var sin = $Native$Basics.sin;
   var cos = $Native$Basics.cos;
   _op["^"] = $Native$Basics.exp;
   _op["%"] = $Native$Basics.mod;
   var rem = $Native$Basics.rem;
   _op["//"] = $Native$Basics.div;
   _op["/"] = $Native$Basics.floatDiv;
   _op["*"] = $Native$Basics.mul;
   _op["-"] = $Native$Basics.sub;
   _op["+"] = $Native$Basics.add;
   var toPolar = $Native$Basics.toPolar;
   var fromPolar = $Native$Basics.fromPolar;
   var turns = $Native$Basics.turns;
   var degrees = $Native$Basics.degrees;
   var radians = function (t) {
      return t;
   };
   _elm.Basics.values = {_op: _op
                        ,max: max
                        ,min: min
                        ,compare: compare
                        ,not: not
                        ,xor: xor
                        ,otherwise: otherwise
                        ,rem: rem
                        ,negate: negate
                        ,abs: abs
                        ,sqrt: sqrt
                        ,clamp: clamp
                        ,logBase: logBase
                        ,e: e
                        ,pi: pi
                        ,cos: cos
                        ,sin: sin
                        ,tan: tan
                        ,acos: acos
                        ,asin: asin
                        ,atan: atan
                        ,atan2: atan2
                        ,round: round
                        ,floor: floor
                        ,ceiling: ceiling
                        ,truncate: truncate
                        ,toFloat: toFloat
                        ,degrees: degrees
                        ,radians: radians
                        ,turns: turns
                        ,toPolar: toPolar
                        ,fromPolar: fromPolar
                        ,isNaN: isNaN
                        ,isInfinite: isInfinite
                        ,toString: toString
                        ,fst: fst
                        ,snd: snd
                        ,identity: identity
                        ,always: always
                        ,flip: flip
                        ,curry: curry
                        ,uncurry: uncurry
                        ,LT: LT
                        ,EQ: EQ
                        ,GT: GT};
   return _elm.Basics.values;
};
Elm.Char = Elm.Char || {};
Elm.Char.make = function (_elm) {
   "use strict";
   _elm.Char = _elm.Char || {};
   if (_elm.Char.values)
   return _elm.Char.values;
   var _op = {},
   _N = Elm.Native,
   _U = _N.Utils.make(_elm),
   _L = _N.List.make(_elm),
   $moduleName = "Char",
   $Basics = Elm.Basics.make(_elm),
   $Native$Char = Elm.Native.Char.make(_elm);
   var fromCode = $Native$Char.fromCode;
   var toCode = $Native$Char.toCode;
   var toLocaleLower = $Native$Char.toLocaleLower;
   var toLocaleUpper = $Native$Char.toLocaleUpper;
   var toLower = $Native$Char.toLower;
   var toUpper = $Native$Char.toUpper;
   var isBetween = F3(function (low,
   high,
   $char) {
      return function () {
         var code = toCode($char);
         return _U.cmp(code,
         toCode(low)) > -1 && _U.cmp(code,
         toCode(high)) < 1;
      }();
   });
   var isUpper = A2(isBetween,
   _U.chr("A"),
   _U.chr("Z"));
   var isLower = A2(isBetween,
   _U.chr("a"),
   _U.chr("z"));
   var isDigit = A2(isBetween,
   _U.chr("0"),
   _U.chr("9"));
   var isOctDigit = A2(isBetween,
   _U.chr("0"),
   _U.chr("7"));
   var isHexDigit = function ($char) {
      return isDigit($char) || (A3(isBetween,
      _U.chr("a"),
      _U.chr("f"),
      $char) || A3(isBetween,
      _U.chr("A"),
      _U.chr("F"),
      $char));
   };
   _elm.Char.values = {_op: _op
                      ,isUpper: isUpper
                      ,isLower: isLower
                      ,isDigit: isDigit
                      ,isOctDigit: isOctDigit
                      ,isHexDigit: isHexDigit
                      ,toUpper: toUpper
                      ,toLower: toLower
                      ,toLocaleUpper: toLocaleUpper
                      ,toLocaleLower: toLocaleLower
                      ,toCode: toCode
                      ,fromCode: fromCode};
   return _elm.Char.values;
};
Elm.Color = Elm.Color || {};
Elm.Color.make = function (_elm) {
   "use strict";
   _elm.Color = _elm.Color || {};
   if (_elm.Color.values)
   return _elm.Color.values;
   var _op = {},
   _N = Elm.Native,
   _U = _N.Utils.make(_elm),
   _L = _N.List.make(_elm),
   $moduleName = "Color",
   $Basics = Elm.Basics.make(_elm);
   var Radial = F5(function (a,
   b,
   c,
   d,
   e) {
      return {ctor: "Radial"
             ,_0: a
             ,_1: b
             ,_2: c
             ,_3: d
             ,_4: e};
   });
   var radial = Radial;
   var Linear = F3(function (a,
   b,
   c) {
      return {ctor: "Linear"
             ,_0: a
             ,_1: b
             ,_2: c};
   });
   var linear = Linear;
   var fmod = F2(function (f,n) {
      return function () {
         var integer = $Basics.floor(f);
         return $Basics.toFloat(A2($Basics._op["%"],
         integer,
         n)) + f - $Basics.toFloat(integer);
      }();
   });
   var rgbToHsl = F3(function (red,
   green,
   blue) {
      return function () {
         var b = $Basics.toFloat(blue) / 255;
         var g = $Basics.toFloat(green) / 255;
         var r = $Basics.toFloat(red) / 255;
         var cMax = A2($Basics.max,
         A2($Basics.max,r,g),
         b);
         var cMin = A2($Basics.min,
         A2($Basics.min,r,g),
         b);
         var c = cMax - cMin;
         var lightness = (cMax + cMin) / 2;
         var saturation = _U.eq(lightness,
         0) ? 0 : c / (1 - $Basics.abs(2 * lightness - 1));
         var hue = $Basics.degrees(60) * (_U.eq(cMax,
         r) ? A2(fmod,
         (g - b) / c,
         6) : _U.eq(cMax,
         g) ? (b - r) / c + 2 : _U.eq(cMax,
         b) ? (r - g) / c + 4 : _U.badIf($moduleName,
         "between lines 150 and 152"));
         return {ctor: "_Tuple3"
                ,_0: hue
                ,_1: saturation
                ,_2: lightness};
      }();
   });
   var hslToRgb = F3(function (hue,
   saturation,
   lightness) {
      return function () {
         var hue$ = hue / $Basics.degrees(60);
         var chroma = (1 - $Basics.abs(2 * lightness - 1)) * saturation;
         var x = chroma * (1 - $Basics.abs(A2(fmod,
         hue$,
         2) - 1));
         var $ = _U.cmp(hue$,
         0) < 0 ? {ctor: "_Tuple3"
                  ,_0: 0
                  ,_1: 0
                  ,_2: 0} : _U.cmp(hue$,
         1) < 0 ? {ctor: "_Tuple3"
                  ,_0: chroma
                  ,_1: x
                  ,_2: 0} : _U.cmp(hue$,
         2) < 0 ? {ctor: "_Tuple3"
                  ,_0: x
                  ,_1: chroma
                  ,_2: 0} : _U.cmp(hue$,
         3) < 0 ? {ctor: "_Tuple3"
                  ,_0: 0
                  ,_1: chroma
                  ,_2: x} : _U.cmp(hue$,
         4) < 0 ? {ctor: "_Tuple3"
                  ,_0: 0
                  ,_1: x
                  ,_2: chroma} : _U.cmp(hue$,
         5) < 0 ? {ctor: "_Tuple3"
                  ,_0: x
                  ,_1: 0
                  ,_2: chroma} : _U.cmp(hue$,
         6) < 0 ? {ctor: "_Tuple3"
                  ,_0: chroma
                  ,_1: 0
                  ,_2: x} : {ctor: "_Tuple3"
                            ,_0: 0
                            ,_1: 0
                            ,_2: 0},
         r = $._0,
         g = $._1,
         b = $._2;
         var m = lightness - chroma / 2;
         return {ctor: "_Tuple3"
                ,_0: r + m
                ,_1: g + m
                ,_2: b + m};
      }();
   });
   var toRgb = function (color) {
      return function () {
         switch (color.ctor)
         {case "HSLA":
            return function () {
                 var $ = A3(hslToRgb,
                 color._0,
                 color._1,
                 color._2),
                 r = $._0,
                 g = $._1,
                 b = $._2;
                 return {_: {}
                        ,alpha: color._3
                        ,blue: $Basics.round(255 * b)
                        ,green: $Basics.round(255 * g)
                        ,red: $Basics.round(255 * r)};
              }();
            case "RGBA": return {_: {}
                                ,alpha: color._3
                                ,blue: color._2
                                ,green: color._1
                                ,red: color._0};}
         _U.badCase($moduleName,
         "between lines 124 and 132");
      }();
   };
   var toHsl = function (color) {
      return function () {
         switch (color.ctor)
         {case "HSLA": return {_: {}
                              ,alpha: color._3
                              ,hue: color._0
                              ,lightness: color._2
                              ,saturation: color._1};
            case "RGBA":
            return function () {
                 var $ = A3(rgbToHsl,
                 color._0,
                 color._1,
                 color._2),
                 h = $._0,
                 s = $._1,
                 l = $._2;
                 return {_: {}
                        ,alpha: color._3
                        ,hue: h
                        ,lightness: l
                        ,saturation: s};
              }();}
         _U.badCase($moduleName,
         "between lines 114 and 121");
      }();
   };
   var HSLA = F4(function (a,
   b,
   c,
   d) {
      return {ctor: "HSLA"
             ,_0: a
             ,_1: b
             ,_2: c
             ,_3: d};
   });
   var hsla = F4(function (hue,
   saturation,
   lightness,
   alpha) {
      return A4(HSLA,
      hue - $Basics.turns($Basics.toFloat($Basics.floor(hue / (2 * $Basics.pi)))),
      saturation,
      lightness,
      alpha);
   });
   var hsl = F3(function (hue,
   saturation,
   lightness) {
      return A4(hsla,
      hue,
      saturation,
      lightness,
      1);
   });
   var complement = function (color) {
      return function () {
         switch (color.ctor)
         {case "HSLA": return A4(hsla,
              color._0 + $Basics.degrees(180),
              color._1,
              color._2,
              color._3);
            case "RGBA":
            return function () {
                 var $ = A3(rgbToHsl,
                 color._0,
                 color._1,
                 color._2),
                 h = $._0,
                 s = $._1,
                 l = $._2;
                 return A4(hsla,
                 h + $Basics.degrees(180),
                 s,
                 l,
                 color._3);
              }();}
         _U.badCase($moduleName,
         "between lines 105 and 111");
      }();
   };
   var grayscale = function (p) {
      return A4(HSLA,0,0,1 - p,1);
   };
   var greyscale = function (p) {
      return A4(HSLA,0,0,1 - p,1);
   };
   var RGBA = F4(function (a,
   b,
   c,
   d) {
      return {ctor: "RGBA"
             ,_0: a
             ,_1: b
             ,_2: c
             ,_3: d};
   });
   var rgba = RGBA;
   var rgb = F3(function (r,g,b) {
      return A4(RGBA,r,g,b,1);
   });
   var lightRed = A4(RGBA,
   239,
   41,
   41,
   1);
   var red = A4(RGBA,204,0,0,1);
   var darkRed = A4(RGBA,
   164,
   0,
   0,
   1);
   var lightOrange = A4(RGBA,
   252,
   175,
   62,
   1);
   var orange = A4(RGBA,
   245,
   121,
   0,
   1);
   var darkOrange = A4(RGBA,
   206,
   92,
   0,
   1);
   var lightYellow = A4(RGBA,
   255,
   233,
   79,
   1);
   var yellow = A4(RGBA,
   237,
   212,
   0,
   1);
   var darkYellow = A4(RGBA,
   196,
   160,
   0,
   1);
   var lightGreen = A4(RGBA,
   138,
   226,
   52,
   1);
   var green = A4(RGBA,
   115,
   210,
   22,
   1);
   var darkGreen = A4(RGBA,
   78,
   154,
   6,
   1);
   var lightBlue = A4(RGBA,
   114,
   159,
   207,
   1);
   var blue = A4(RGBA,
   52,
   101,
   164,
   1);
   var darkBlue = A4(RGBA,
   32,
   74,
   135,
   1);
   var lightPurple = A4(RGBA,
   173,
   127,
   168,
   1);
   var purple = A4(RGBA,
   117,
   80,
   123,
   1);
   var darkPurple = A4(RGBA,
   92,
   53,
   102,
   1);
   var lightBrown = A4(RGBA,
   233,
   185,
   110,
   1);
   var brown = A4(RGBA,
   193,
   125,
   17,
   1);
   var darkBrown = A4(RGBA,
   143,
   89,
   2,
   1);
   var black = A4(RGBA,0,0,0,1);
   var white = A4(RGBA,
   255,
   255,
   255,
   1);
   var lightGrey = A4(RGBA,
   238,
   238,
   236,
   1);
   var grey = A4(RGBA,
   211,
   215,
   207,
   1);
   var darkGrey = A4(RGBA,
   186,
   189,
   182,
   1);
   var lightGray = A4(RGBA,
   238,
   238,
   236,
   1);
   var gray = A4(RGBA,
   211,
   215,
   207,
   1);
   var darkGray = A4(RGBA,
   186,
   189,
   182,
   1);
   var lightCharcoal = A4(RGBA,
   136,
   138,
   133,
   1);
   var charcoal = A4(RGBA,
   85,
   87,
   83,
   1);
   var darkCharcoal = A4(RGBA,
   46,
   52,
   54,
   1);
   _elm.Color.values = {_op: _op
                       ,rgb: rgb
                       ,rgba: rgba
                       ,hsl: hsl
                       ,hsla: hsla
                       ,greyscale: greyscale
                       ,grayscale: grayscale
                       ,complement: complement
                       ,linear: linear
                       ,radial: radial
                       ,toRgb: toRgb
                       ,toHsl: toHsl
                       ,red: red
                       ,orange: orange
                       ,yellow: yellow
                       ,green: green
                       ,blue: blue
                       ,purple: purple
                       ,brown: brown
                       ,lightRed: lightRed
                       ,lightOrange: lightOrange
                       ,lightYellow: lightYellow
                       ,lightGreen: lightGreen
                       ,lightBlue: lightBlue
                       ,lightPurple: lightPurple
                       ,lightBrown: lightBrown
                       ,darkRed: darkRed
                       ,darkOrange: darkOrange
                       ,darkYellow: darkYellow
                       ,darkGreen: darkGreen
                       ,darkBlue: darkBlue
                       ,darkPurple: darkPurple
                       ,darkBrown: darkBrown
                       ,white: white
                       ,lightGrey: lightGrey
                       ,grey: grey
                       ,darkGrey: darkGrey
                       ,lightCharcoal: lightCharcoal
                       ,charcoal: charcoal
                       ,darkCharcoal: darkCharcoal
                       ,black: black
                       ,lightGray: lightGray
                       ,gray: gray
                       ,darkGray: darkGray};
   return _elm.Color.values;
};
Elm.Debug = Elm.Debug || {};
Elm.Debug.make = function (_elm) {
   "use strict";
   _elm.Debug = _elm.Debug || {};
   if (_elm.Debug.values)
   return _elm.Debug.values;
   var _op = {},
   _N = Elm.Native,
   _U = _N.Utils.make(_elm),
   _L = _N.List.make(_elm),
   $moduleName = "Debug",
   $Graphics$Collage = Elm.Graphics.Collage.make(_elm),
   $Native$Debug = Elm.Native.Debug.make(_elm);
   var trace = $Native$Debug.tracePath;
   var watchSummary = $Native$Debug.watchSummary;
   var watch = $Native$Debug.watch;
   var crash = $Native$Debug.crash;
   var log = $Native$Debug.log;
   _elm.Debug.values = {_op: _op
                       ,log: log
                       ,crash: crash
                       ,watch: watch
                       ,watchSummary: watchSummary
                       ,trace: trace};
   return _elm.Debug.values;
};
Elm.Dict = Elm.Dict || {};
Elm.Dict.make = function (_elm) {
   "use strict";
   _elm.Dict = _elm.Dict || {};
   if (_elm.Dict.values)
   return _elm.Dict.values;
   var _op = {},
   _N = Elm.Native,
   _U = _N.Utils.make(_elm),
   _L = _N.List.make(_elm),
   $moduleName = "Dict",
   $Basics = Elm.Basics.make(_elm),
   $List = Elm.List.make(_elm),
   $Maybe = Elm.Maybe.make(_elm),
   $Native$Debug = Elm.Native.Debug.make(_elm),
   $String = Elm.String.make(_elm);
   var foldr = F3(function (f,
   acc,
   t) {
      return function () {
         switch (t.ctor)
         {case "RBEmpty":
            switch (t._0.ctor)
              {case "LBlack": return acc;}
              break;
            case "RBNode": return A3(foldr,
              f,
              A3(f,
              t._1,
              t._2,
              A3(foldr,f,acc,t._4)),
              t._3);}
         _U.badCase($moduleName,
         "between lines 408 and 416");
      }();
   });
   var keys = function (dict) {
      return A3(foldr,
      F3(function (key,
      value,
      keyList) {
         return A2($List._op["::"],
         key,
         keyList);
      }),
      _L.fromArray([]),
      dict);
   };
   var values = function (dict) {
      return A3(foldr,
      F3(function (key,
      value,
      valueList) {
         return A2($List._op["::"],
         value,
         valueList);
      }),
      _L.fromArray([]),
      dict);
   };
   var toList = function (dict) {
      return A3(foldr,
      F3(function (key,value,list) {
         return A2($List._op["::"],
         {ctor: "_Tuple2"
         ,_0: key
         ,_1: value},
         list);
      }),
      _L.fromArray([]),
      dict);
   };
   var foldl = F3(function (f,
   acc,
   dict) {
      return function () {
         switch (dict.ctor)
         {case "RBEmpty":
            switch (dict._0.ctor)
              {case "LBlack": return acc;}
              break;
            case "RBNode": return A3(foldl,
              f,
              A3(f,
              dict._1,
              dict._2,
              A3(foldl,f,acc,dict._3)),
              dict._4);}
         _U.badCase($moduleName,
         "between lines 397 and 405");
      }();
   });
   var isBBlack = function (dict) {
      return function () {
         switch (dict.ctor)
         {case "RBEmpty":
            switch (dict._0.ctor)
              {case "LBBlack": return true;}
              break;
            case "RBNode":
            switch (dict._0.ctor)
              {case "BBlack": return true;}
              break;}
         return false;
      }();
   };
   var showFlag = function (f) {
      return function () {
         switch (f.ctor)
         {case "Insert": return "Insert";
            case "Remove": return "Remove";
            case "Same": return "Same";}
         _U.badCase($moduleName,
         "between lines 173 and 179");
      }();
   };
   var Same = {ctor: "Same"};
   var Remove = {ctor: "Remove"};
   var Insert = {ctor: "Insert"};
   var get = F2(function (targetKey,
   dict) {
      return function () {
         switch (dict.ctor)
         {case "RBEmpty":
            switch (dict._0.ctor)
              {case "LBlack":
                 return $Maybe.Nothing;}
              break;
            case "RBNode":
            return function () {
                 var _v29 = A2($Basics.compare,
                 targetKey,
                 dict._1);
                 switch (_v29.ctor)
                 {case "EQ":
                    return $Maybe.Just(dict._2);
                    case "GT": return A2(get,
                      targetKey,
                      dict._4);
                    case "LT": return A2(get,
                      targetKey,
                      dict._3);}
                 _U.badCase($moduleName,
                 "between lines 129 and 135");
              }();}
         _U.badCase($moduleName,
         "between lines 124 and 135");
      }();
   });
   var member = F2(function (key,
   dict) {
      return function () {
         var _v30 = A2(get,key,dict);
         switch (_v30.ctor)
         {case "Just": return true;
            case "Nothing": return false;}
         _U.badCase($moduleName,
         "between lines 138 and 140");
      }();
   });
   var max = function (dict) {
      return function () {
         switch (dict.ctor)
         {case "RBEmpty":
            return $Native$Debug.crash("(max Empty) is not defined");
            case "RBNode":
            switch (dict._4.ctor)
              {case "RBEmpty":
                 return {ctor: "_Tuple2"
                        ,_0: dict._1
                        ,_1: dict._2};}
              return max(dict._4);}
         _U.badCase($moduleName,
         "between lines 100 and 121");
      }();
   };
   var min = function (dict) {
      return function () {
         switch (dict.ctor)
         {case "RBEmpty":
            switch (dict._0.ctor)
              {case "LBlack":
                 return $Native$Debug.crash("(min Empty) is not defined");}
              break;
            case "RBNode":
            switch (dict._3.ctor)
              {case "RBEmpty":
                 switch (dict._3._0.ctor)
                   {case "LBlack":
                      return {ctor: "_Tuple2"
                             ,_0: dict._1
                             ,_1: dict._2};}
                   break;}
              return min(dict._3);}
         _U.badCase($moduleName,
         "between lines 87 and 95");
      }();
   };
   var RBEmpty = function (a) {
      return {ctor: "RBEmpty"
             ,_0: a};
   };
   var RBNode = F5(function (a,
   b,
   c,
   d,
   e) {
      return {ctor: "RBNode"
             ,_0: a
             ,_1: b
             ,_2: c
             ,_3: d
             ,_4: e};
   });
   var showLColor = function (color) {
      return function () {
         switch (color.ctor)
         {case "LBBlack":
            return "LBBlack";
            case "LBlack": return "LBlack";}
         _U.badCase($moduleName,
         "between lines 70 and 72");
      }();
   };
   var LBBlack = {ctor: "LBBlack"};
   var LBlack = {ctor: "LBlack"};
   var empty = RBEmpty(LBlack);
   var map = F2(function (f,dict) {
      return function () {
         switch (dict.ctor)
         {case "RBEmpty":
            switch (dict._0.ctor)
              {case "LBlack":
                 return RBEmpty(LBlack);}
              break;
            case "RBNode": return A5(RBNode,
              dict._0,
              dict._1,
              A2(f,dict._1,dict._2),
              A2(map,f,dict._3),
              A2(map,f,dict._4));}
         _U.badCase($moduleName,
         "between lines 385 and 394");
      }();
   });
   var showNColor = function (c) {
      return function () {
         switch (c.ctor)
         {case "BBlack": return "BBlack";
            case "Black": return "Black";
            case "NBlack": return "NBlack";
            case "Red": return "Red";}
         _U.badCase($moduleName,
         "between lines 56 and 60");
      }();
   };
   var reportRemBug = F4(function (msg,
   c,
   lgot,
   rgot) {
      return $Native$Debug.crash($String.concat(_L.fromArray(["Internal red-black tree invariant violated, expected "
                                                             ,msg
                                                             ," and got "
                                                             ,showNColor(c)
                                                             ,"/"
                                                             ,lgot
                                                             ,"/"
                                                             ,rgot
                                                             ,"\nPlease report this bug to <https://github.com/elm-lang/Elm/issues>"])));
   });
   var NBlack = {ctor: "NBlack"};
   var BBlack = {ctor: "BBlack"};
   var Black = {ctor: "Black"};
   var ensureBlackRoot = function (dict) {
      return function () {
         switch (dict.ctor)
         {case "RBEmpty":
            switch (dict._0.ctor)
              {case "LBlack": return dict;}
              break;
            case "RBNode":
            switch (dict._0.ctor)
              {case "Black": return dict;
                 case "Red": return A5(RBNode,
                   Black,
                   dict._1,
                   dict._2,
                   dict._3,
                   dict._4);}
              break;}
         _U.badCase($moduleName,
         "between lines 145 and 157");
      }();
   };
   var blackish = function (t) {
      return function () {
         switch (t.ctor)
         {case "RBEmpty": return true;
            case "RBNode":
            return _U.eq(t._0,
              Black) || _U.eq(t._0,BBlack);}
         _U.badCase($moduleName,
         "between lines 330 and 332");
      }();
   };
   var blacken = function (t) {
      return function () {
         switch (t.ctor)
         {case "RBEmpty":
            return RBEmpty(LBlack);
            case "RBNode": return A5(RBNode,
              Black,
              t._1,
              t._2,
              t._3,
              t._4);}
         _U.badCase($moduleName,
         "between lines 369 and 371");
      }();
   };
   var Red = {ctor: "Red"};
   var moreBlack = function (color) {
      return function () {
         switch (color.ctor)
         {case "BBlack":
            return $Native$Debug.crash("Can\'t make a double black node more black!");
            case "Black": return BBlack;
            case "NBlack": return Red;
            case "Red": return Black;}
         _U.badCase($moduleName,
         "between lines 235 and 239");
      }();
   };
   var lessBlack = function (color) {
      return function () {
         switch (color.ctor)
         {case "BBlack": return Black;
            case "Black": return Red;
            case "NBlack":
            return $Native$Debug.crash("Can\'t make a negative black node less black!");
            case "Red": return NBlack;}
         _U.badCase($moduleName,
         "between lines 244 and 248");
      }();
   };
   var lessBlackTree = function (dict) {
      return function () {
         switch (dict.ctor)
         {case "RBEmpty":
            switch (dict._0.ctor)
              {case "LBBlack":
                 return RBEmpty(LBlack);}
              break;
            case "RBNode": return A5(RBNode,
              lessBlack(dict._0),
              dict._1,
              dict._2,
              dict._3,
              dict._4);}
         _U.badCase($moduleName,
         "between lines 253 and 255");
      }();
   };
   var redden = function (t) {
      return function () {
         switch (t.ctor)
         {case "RBEmpty":
            return $Native$Debug.crash("can\'t make a Leaf red");
            case "RBNode": return A5(RBNode,
              Red,
              t._1,
              t._2,
              t._3,
              t._4);}
         _U.badCase($moduleName,
         "between lines 377 and 382");
      }();
   };
   var balance_node = function (t) {
      return function () {
         var assemble = function (col) {
            return function (xk) {
               return function (xv) {
                  return function (yk) {
                     return function (yv) {
                        return function (zk) {
                           return function (zv) {
                              return function (a) {
                                 return function (b) {
                                    return function (c) {
                                       return function (d) {
                                          return A5(RBNode,
                                          lessBlack(col),
                                          yk,
                                          yv,
                                          A5(RBNode,Black,xk,xv,a,b),
                                          A5(RBNode,Black,zk,zv,c,d));
                                       };
                                    };
                                 };
                              };
                           };
                        };
                     };
                  };
               };
            };
         };
         return blackish(t) ? function () {
            switch (t.ctor)
            {case "RBNode":
               switch (t._3.ctor)
                 {case "RBNode":
                    switch (t._3._0.ctor)
                      {case "Red":
                         switch (t._3._3.ctor)
                           {case "RBNode":
                              switch (t._3._3._0.ctor)
                                {case "Red":
                                   return assemble(t._0)(t._3._3._1)(t._3._3._2)(t._3._1)(t._3._2)(t._1)(t._2)(t._3._3._3)(t._3._3._4)(t._3._4)(t._4);}
                                break;}
                           switch (t._3._4.ctor)
                           {case "RBNode":
                              switch (t._3._4._0.ctor)
                                {case "Red":
                                   return assemble(t._0)(t._3._1)(t._3._2)(t._3._4._1)(t._3._4._2)(t._1)(t._2)(t._3._3)(t._3._4._3)(t._3._4._4)(t._4);}
                                break;}
                           break;}
                      break;}
                 switch (t._4.ctor)
                 {case "RBNode":
                    switch (t._4._0.ctor)
                      {case "Red":
                         switch (t._4._3.ctor)
                           {case "RBNode":
                              switch (t._4._3._0.ctor)
                                {case "Red":
                                   return assemble(t._0)(t._1)(t._2)(t._4._3._1)(t._4._3._2)(t._4._1)(t._4._2)(t._3)(t._4._3._3)(t._4._3._4)(t._4._4);}
                                break;}
                           switch (t._4._4.ctor)
                           {case "RBNode":
                              switch (t._4._4._0.ctor)
                                {case "Red":
                                   return assemble(t._0)(t._1)(t._2)(t._4._1)(t._4._2)(t._4._4._1)(t._4._4._2)(t._3)(t._4._3)(t._4._4._3)(t._4._4._4);}
                                break;}
                           break;}
                      break;}
                 switch (t._0.ctor)
                 {case "BBlack":
                    switch (t._4.ctor)
                      {case "RBNode":
                         switch (t._4._0.ctor)
                           {case "NBlack":
                              switch (t._4._3.ctor)
                                {case "RBNode":
                                   switch (t._4._3._0.ctor)
                                     {case "Black":
                                        return function () {
                                             switch (t._4._4.ctor)
                                             {case "RBNode":
                                                switch (t._4._4._0.ctor)
                                                  {case "Black":
                                                     return A5(RBNode,
                                                       Black,
                                                       t._4._3._1,
                                                       t._4._3._2,
                                                       A5(RBNode,
                                                       Black,
                                                       t._1,
                                                       t._2,
                                                       t._3,
                                                       t._4._3._3),
                                                       A5(balance,
                                                       Black,
                                                       t._4._1,
                                                       t._4._2,
                                                       t._4._3._4,
                                                       redden(t._4._4)));}
                                                  break;}
                                             return t;
                                          }();}
                                     break;}
                                break;}
                           break;}
                      switch (t._3.ctor)
                      {case "RBNode":
                         switch (t._3._0.ctor)
                           {case "NBlack":
                              switch (t._3._4.ctor)
                                {case "RBNode":
                                   switch (t._3._4._0.ctor)
                                     {case "Black":
                                        return function () {
                                             switch (t._3._3.ctor)
                                             {case "RBNode":
                                                switch (t._3._3._0.ctor)
                                                  {case "Black":
                                                     return A5(RBNode,
                                                       Black,
                                                       t._3._4._1,
                                                       t._3._4._2,
                                                       A5(balance,
                                                       Black,
                                                       t._3._1,
                                                       t._3._2,
                                                       redden(t._3._3),
                                                       t._3._4._3),
                                                       A5(RBNode,
                                                       Black,
                                                       t._1,
                                                       t._2,
                                                       t._3._4._4,
                                                       t._4));}
                                                  break;}
                                             return t;
                                          }();}
                                     break;}
                                break;}
                           break;}
                      break;}
                 break;}
            return t;
         }() : t;
      }();
   };
   var balance = F5(function (c,
   k,
   v,
   l,
   r) {
      return balance_node(A5(RBNode,
      c,
      k,
      v,
      l,
      r));
   });
   var bubble = F5(function (c,
   k,
   v,
   l,
   r) {
      return isBBlack(l) || isBBlack(r) ? A5(balance,
      moreBlack(c),
      k,
      v,
      lessBlackTree(l),
      lessBlackTree(r)) : A5(RBNode,
      c,
      k,
      v,
      l,
      r);
   });
   var remove_max = F5(function (c,
   k,
   v,
   l,
   r) {
      return function () {
         switch (r.ctor)
         {case "RBEmpty": return A3(rem,
              c,
              l,
              r);
            case "RBNode": return A5(bubble,
              c,
              k,
              v,
              l,
              A5(remove_max,
              r._0,
              r._1,
              r._2,
              r._3,
              r._4));}
         _U.badCase($moduleName,
         "between lines 314 and 319");
      }();
   });
   var rem = F3(function (c,l,r) {
      return function () {
         var _v169 = {ctor: "_Tuple2"
                     ,_0: l
                     ,_1: r};
         switch (_v169.ctor)
         {case "_Tuple2":
            switch (_v169._0.ctor)
              {case "RBEmpty":
                 switch (_v169._1.ctor)
                   {case "RBEmpty":
                      return function () {
                           switch (c.ctor)
                           {case "Black":
                              return RBEmpty(LBBlack);
                              case "Red":
                              return RBEmpty(LBlack);}
                           _U.badCase($moduleName,
                           "between lines 273 and 277");
                        }();
                      case "RBNode":
                      return function () {
                           var _v191 = {ctor: "_Tuple3"
                                       ,_0: c
                                       ,_1: _v169._0._0
                                       ,_2: _v169._1._0};
                           switch (_v191.ctor)
                           {case "_Tuple3":
                              switch (_v191._0.ctor)
                                {case "Black":
                                   switch (_v191._1.ctor)
                                     {case "LBlack":
                                        switch (_v191._2.ctor)
                                          {case "Red": return A5(RBNode,
                                               Black,
                                               _v169._1._1,
                                               _v169._1._2,
                                               _v169._1._3,
                                               _v169._1._4);}
                                          break;}
                                     break;}
                                break;}
                           return A4(reportRemBug,
                           "Black/LBlack/Red",
                           c,
                           showLColor(_v169._0._0),
                           showNColor(_v169._1._0));
                        }();}
                   break;
                 case "RBNode":
                 switch (_v169._1.ctor)
                   {case "RBEmpty":
                      return function () {
                           var _v195 = {ctor: "_Tuple3"
                                       ,_0: c
                                       ,_1: _v169._0._0
                                       ,_2: _v169._1._0};
                           switch (_v195.ctor)
                           {case "_Tuple3":
                              switch (_v195._0.ctor)
                                {case "Black":
                                   switch (_v195._1.ctor)
                                     {case "Red":
                                        switch (_v195._2.ctor)
                                          {case "LBlack":
                                             return A5(RBNode,
                                               Black,
                                               _v169._0._1,
                                               _v169._0._2,
                                               _v169._0._3,
                                               _v169._0._4);}
                                          break;}
                                     break;}
                                break;}
                           return A4(reportRemBug,
                           "Black/Red/LBlack",
                           c,
                           showNColor(_v169._0._0),
                           showLColor(_v169._1._0));
                        }();
                      case "RBNode":
                      return function () {
                           var l$ = A5(remove_max,
                           _v169._0._0,
                           _v169._0._1,
                           _v169._0._2,
                           _v169._0._3,
                           _v169._0._4);
                           var r = A5(RBNode,
                           _v169._1._0,
                           _v169._1._1,
                           _v169._1._2,
                           _v169._1._3,
                           _v169._1._4);
                           var l = A5(RBNode,
                           _v169._0._0,
                           _v169._0._1,
                           _v169._0._2,
                           _v169._0._3,
                           _v169._0._4);
                           var $ = max(l),
                           k = $._0,
                           v = $._1;
                           return A5(bubble,c,k,v,l$,r);
                        }();}
                   break;}
              break;}
         _U.badCase($moduleName,
         "between lines 271 and 300");
      }();
   });
   var update = F3(function (k,
   alter,
   dict) {
      return function () {
         var up = function (dict) {
            return function () {
               switch (dict.ctor)
               {case "RBEmpty":
                  switch (dict._0.ctor)
                    {case "LBlack":
                       return function () {
                            var _v206 = alter($Maybe.Nothing);
                            switch (_v206.ctor)
                            {case "Just":
                               return {ctor: "_Tuple2"
                                      ,_0: Insert
                                      ,_1: A5(RBNode,
                                      Red,
                                      k,
                                      _v206._0,
                                      empty,
                                      empty)};
                               case "Nothing":
                               return {ctor: "_Tuple2"
                                      ,_0: Same
                                      ,_1: empty};}
                            _U.badCase($moduleName,
                            "between lines 185 and 189");
                         }();}
                    break;
                  case "RBNode":
                  return function () {
                       var _v208 = A2($Basics.compare,
                       k,
                       dict._1);
                       switch (_v208.ctor)
                       {case "EQ": return function () {
                               var _v209 = alter($Maybe.Just(dict._2));
                               switch (_v209.ctor)
                               {case "Just":
                                  return {ctor: "_Tuple2"
                                         ,_0: Same
                                         ,_1: A5(RBNode,
                                         dict._0,
                                         dict._1,
                                         _v209._0,
                                         dict._3,
                                         dict._4)};
                                  case "Nothing":
                                  return {ctor: "_Tuple2"
                                         ,_0: Remove
                                         ,_1: A3(rem,
                                         dict._0,
                                         dict._3,
                                         dict._4)};}
                               _U.badCase($moduleName,
                               "between lines 192 and 197");
                            }();
                          case "GT": return function () {
                               var $ = up(dict._4),
                               flag = $._0,
                               newRight = $._1;
                               return function () {
                                  switch (flag.ctor)
                                  {case "Insert":
                                     return {ctor: "_Tuple2"
                                            ,_0: Insert
                                            ,_1: A5(balance,
                                            dict._0,
                                            dict._1,
                                            dict._2,
                                            dict._3,
                                            newRight)};
                                     case "Remove":
                                     return {ctor: "_Tuple2"
                                            ,_0: Remove
                                            ,_1: A5(bubble,
                                            dict._0,
                                            dict._1,
                                            dict._2,
                                            dict._3,
                                            newRight)};
                                     case "Same":
                                     return {ctor: "_Tuple2"
                                            ,_0: Same
                                            ,_1: A5(RBNode,
                                            dict._0,
                                            dict._1,
                                            dict._2,
                                            dict._3,
                                            newRight)};}
                                  _U.badCase($moduleName,
                                  "between lines 206 and 211");
                               }();
                            }();
                          case "LT": return function () {
                               var $ = up(dict._3),
                               flag = $._0,
                               newLeft = $._1;
                               return function () {
                                  switch (flag.ctor)
                                  {case "Insert":
                                     return {ctor: "_Tuple2"
                                            ,_0: Insert
                                            ,_1: A5(balance,
                                            dict._0,
                                            dict._1,
                                            dict._2,
                                            newLeft,
                                            dict._4)};
                                     case "Remove":
                                     return {ctor: "_Tuple2"
                                            ,_0: Remove
                                            ,_1: A5(bubble,
                                            dict._0,
                                            dict._1,
                                            dict._2,
                                            newLeft,
                                            dict._4)};
                                     case "Same":
                                     return {ctor: "_Tuple2"
                                            ,_0: Same
                                            ,_1: A5(RBNode,
                                            dict._0,
                                            dict._1,
                                            dict._2,
                                            newLeft,
                                            dict._4)};}
                                  _U.badCase($moduleName,
                                  "between lines 199 and 204");
                               }();
                            }();}
                       _U.badCase($moduleName,
                       "between lines 190 and 211");
                    }();}
               _U.badCase($moduleName,
               "between lines 183 and 211");
            }();
         };
         var $ = up(dict),
         flag = $._0,
         updatedDict = $._1;
         return function () {
            switch (flag.ctor)
            {case "Insert":
               return ensureBlackRoot(updatedDict);
               case "Remove":
               return blacken(updatedDict);
               case "Same":
               return updatedDict;}
            _U.badCase($moduleName,
            "between lines 213 and 219");
         }();
      }();
   });
   var insert = F3(function (key,
   value,
   dict) {
      return A3(update,
      key,
      $Basics.always($Maybe.Just(value)),
      dict);
   });
   var singleton = F2(function (key,
   value) {
      return A3(insert,
      key,
      value,
      RBEmpty(LBlack));
   });
   var union = F2(function (t1,
   t2) {
      return A3(foldl,
      insert,
      t2,
      t1);
   });
   var fromList = function (assocs) {
      return A3($List.foldl,
      F2(function (_v214,dict) {
         return function () {
            switch (_v214.ctor)
            {case "_Tuple2":
               return A3(insert,
                 _v214._0,
                 _v214._1,
                 dict);}
            _U.badCase($moduleName,
            "on line 457, column 38 to 59");
         }();
      }),
      empty,
      assocs);
   };
   var filter = F2(function (predicate,
   dictionary) {
      return function () {
         var add = F3(function (key,
         value,
         dict) {
            return A2(predicate,
            key,
            value) ? A3(insert,
            key,
            value,
            dict) : dict;
         });
         return A3(foldl,
         add,
         empty,
         dictionary);
      }();
   });
   var intersect = F2(function (t1,
   t2) {
      return A2(filter,
      F2(function (k,_v218) {
         return function () {
            return A2(member,k,t2);
         }();
      }),
      t1);
   });
   var partition = F2(function (predicate,
   dict) {
      return function () {
         var add = F3(function (key,
         value,
         _v220) {
            return function () {
               switch (_v220.ctor)
               {case "_Tuple2":
                  return A2(predicate,
                    key,
                    value) ? {ctor: "_Tuple2"
                             ,_0: A3(insert,
                             key,
                             value,
                             _v220._0)
                             ,_1: _v220._1} : {ctor: "_Tuple2"
                                              ,_0: _v220._0
                                              ,_1: A3(insert,
                                              key,
                                              value,
                                              _v220._1)};}
               _U.badCase($moduleName,
               "between lines 478 and 480");
            }();
         });
         return A3(foldl,
         add,
         {ctor: "_Tuple2"
         ,_0: empty
         ,_1: empty},
         dict);
      }();
   });
   var remove = F2(function (key,
   dict) {
      return A3(update,
      key,
      $Basics.always($Maybe.Nothing),
      dict);
   });
   var diff = F2(function (t1,t2) {
      return A3(foldl,
      F3(function (k,v,t) {
         return A2(remove,k,t);
      }),
      t1,
      t2);
   });
   _elm.Dict.values = {_op: _op
                      ,empty: empty
                      ,singleton: singleton
                      ,insert: insert
                      ,update: update
                      ,get: get
                      ,remove: remove
                      ,member: member
                      ,filter: filter
                      ,partition: partition
                      ,foldl: foldl
                      ,foldr: foldr
                      ,map: map
                      ,union: union
                      ,intersect: intersect
                      ,diff: diff
                      ,keys: keys
                      ,values: values
                      ,toList: toList
                      ,fromList: fromList};
   return _elm.Dict.values;
};
Elm.Elmz = Elm.Elmz || {};
Elm.Elmz.Distance = Elm.Elmz.Distance || {};
Elm.Elmz.Distance.make = function (_elm) {
   "use strict";
   _elm.Elmz = _elm.Elmz || {};
   _elm.Elmz.Distance = _elm.Elmz.Distance || {};
   if (_elm.Elmz.Distance.values)
   return _elm.Elmz.Distance.values;
   var _op = {},
   _N = Elm.Native,
   _U = _N.Utils.make(_elm),
   _L = _N.List.make(_elm),
   $moduleName = "Elmz.Distance",
   $Basics = Elm.Basics.make(_elm);
   var pixels = F2(function (d,
   dmax) {
      return function () {
         switch (d.ctor)
         {case "Ceiling":
            return $Basics.toFloat($Basics.ceiling(A2(pixels,
              d._0,
              dmax)));
            case "Floor":
            return $Basics.toFloat($Basics.floor(A2(pixels,
              d._0,
              dmax)));
            case "Fraction":
            return dmax * d._0;
            case "Max":
            return A2($Basics.max,
              A2(pixels,d._0,dmax),
              A2(pixels,d._1,dmax));
            case "Min":
            return A2($Basics.min,
              A2(pixels,d._0,dmax),
              A2(pixels,d._1,dmax));
            case "Pixel": return 1.0;
            case "Scale":
            return d._0 * A2(pixels,
              d._1,
              dmax);}
         _U.badCase($moduleName,
         "between lines 17 and 24");
      }();
   });
   var Min = F2(function (a,b) {
      return {ctor: "Min"
             ,_0: a
             ,_1: b};
   });
   var Max = F2(function (a,b) {
      return {ctor: "Max"
             ,_0: a
             ,_1: b};
   });
   var Floor = function (a) {
      return {ctor: "Floor",_0: a};
   };
   var Ceiling = function (a) {
      return {ctor: "Ceiling"
             ,_0: a};
   };
   var Scale = F2(function (a,b) {
      return {ctor: "Scale"
             ,_0: a
             ,_1: b};
   });
   var Fraction = function (a) {
      return {ctor: "Fraction"
             ,_0: a};
   };
   var Pixel = {ctor: "Pixel"};
   _elm.Elmz.Distance.values = {_op: _op
                               ,Pixel: Pixel
                               ,Fraction: Fraction
                               ,Scale: Scale
                               ,Ceiling: Ceiling
                               ,Floor: Floor
                               ,Max: Max
                               ,Min: Min
                               ,pixels: pixels};
   return _elm.Elmz.Distance.values;
};
Elm.Elmz = Elm.Elmz || {};
Elm.Elmz.Json = Elm.Elmz.Json || {};
Elm.Elmz.Json.Decoder = Elm.Elmz.Json.Decoder || {};
Elm.Elmz.Json.Decoder.make = function (_elm) {
   "use strict";
   _elm.Elmz = _elm.Elmz || {};
   _elm.Elmz.Json = _elm.Elmz.Json || {};
   _elm.Elmz.Json.Decoder = _elm.Elmz.Json.Decoder || {};
   if (_elm.Elmz.Json.Decoder.values)
   return _elm.Elmz.Json.Decoder.values;
   var _op = {},
   _N = Elm.Native,
   _U = _N.Utils.make(_elm),
   _L = _N.List.make(_elm),
   $moduleName = "Elmz.Json.Decoder",
   $Basics = Elm.Basics.make(_elm),
   $Json$Decode = Elm.Json.Decode.make(_elm),
   $List = Elm.List.make(_elm),
   $Maybe = Elm.Maybe.make(_elm),
   $Set = Elm.Set.make(_elm);
   var safeIndex = F2(function (i,
   xs) {
      return function () {
         var _v0 = A2($List.drop,
         i,
         xs);
         switch (_v0.ctor)
         {case "::":
            return $Maybe.Just(_v0._0);
            case "[]":
            return $Maybe.Nothing;}
         _U.badCase($moduleName,
         "between lines 78 and 80");
      }();
   });
   var set = function (p) {
      return A2($Json$Decode.map,
      $Set.fromList,
      $Json$Decode.list(p));
   };
   var apply = F2(function (f,a) {
      return A3($Json$Decode.object2,
      F2(function (x,y) {
         return x(y);
      }),
      f,
      a);
   });
   _op["#"] = F2(function (f,a) {
      return A2(apply,f,a);
   });
   var lazy = function (a) {
      return A2($Json$Decode.andThen,
      $Json$Decode.succeed({ctor: "_Tuple0"}),
      function (_v3) {
         return function () {
            return a({ctor: "_Tuple0"});
         }();
      });
   };
   var object = $Json$Decode.dict;
   var decodeString = $Json$Decode.decodeString;
   var maybe = $Json$Decode.maybe;
   var tuple5 = $Json$Decode.tuple5(F5(function (v0,
   v1,
   v2,
   v3,
   v4) {
      return {ctor: "_Tuple5"
             ,_0: v0
             ,_1: v1
             ,_2: v2
             ,_3: v3
             ,_4: v4};
   }));
   var tuple4 = $Json$Decode.tuple4(F4(function (v0,
   v1,
   v2,
   v3) {
      return {ctor: "_Tuple4"
             ,_0: v0
             ,_1: v1
             ,_2: v2
             ,_3: v3};
   }));
   var tuple3 = $Json$Decode.tuple3(F3(function (v0,
   v1,
   v2) {
      return {ctor: "_Tuple3"
             ,_0: v0
             ,_1: v1
             ,_2: v2};
   }));
   var tuple2 = $Json$Decode.tuple2(F2(function (v0,
   v1) {
      return {ctor: "_Tuple2"
             ,_0: v0
             ,_1: v1};
   }));
   var product6 = $Json$Decode.tuple6;
   var product5 = $Json$Decode.tuple5;
   var product4 = $Json$Decode.tuple4;
   var product3 = $Json$Decode.tuple3;
   var product2 = $Json$Decode.tuple2;
   var andThen = $Json$Decode.andThen;
   var union = F3(function (tag,
   contents,
   f) {
      return A2(andThen,
      A2($Json$Decode.at,
      _L.fromArray([tag]),
      $Json$Decode.string),
      function (t) {
         return A2($Json$Decode.at,
         _L.fromArray([contents]),
         f(t));
      });
   });
   var union$ = A2(union,
   "tag",
   "contents");
   var newtyped$ = F2(function (f,
   p) {
      return union$(function (_v5) {
         return function () {
            return A2($Json$Decode.map,
            f,
            p);
         }();
      });
   });
   var unit = $Json$Decode.succeed;
   var fail = $Json$Decode.fail;
   var at = $Json$Decode.at;
   var map5 = $Json$Decode.object5;
   var map4 = $Json$Decode.object4;
   var map3 = $Json$Decode.object3;
   var map2 = $Json$Decode.object2;
   var map = $Json$Decode.map;
   var array = $Json$Decode.array;
   var list = $Json$Decode.list;
   var bool = $Json$Decode.bool;
   var $float = $Json$Decode.$float;
   var string = $Json$Decode.string;
   var arrayUnion = function (f) {
      return A2(andThen,
      A3(product2,
      $Basics.always,
      string,
      unit({ctor: "_Tuple0"})),
      function (t) {
         return A3(product2,
         F2(function (_v7,a) {
            return function () {
               return a;
            }();
         }),
         unit({ctor: "_Tuple0"}),
         f(t));
      });
   };
   var arrayNewtyped = F2(function (expected,
   d) {
      return function () {
         var ok = function (t) {
            return _U.eq(t,
            expected) ? d : fail(A2($Basics._op["++"],
            "expected ",
            A2($Basics._op["++"],
            expected,
            A2($Basics._op["++"],
            " got :",
            t))));
         };
         return arrayUnion(ok);
      }();
   });
   var $int = $Json$Decode.$int;
   _elm.Elmz.Json.Decoder.values = {_op: _op
                                   ,$int: $int
                                   ,string: string
                                   ,$float: $float
                                   ,bool: bool
                                   ,list: list
                                   ,array: array
                                   ,map: map
                                   ,map2: map2
                                   ,map3: map3
                                   ,map4: map4
                                   ,map5: map5
                                   ,at: at
                                   ,fail: fail
                                   ,unit: unit
                                   ,andThen: andThen
                                   ,product2: product2
                                   ,product3: product3
                                   ,product4: product4
                                   ,product5: product5
                                   ,product6: product6
                                   ,tuple2: tuple2
                                   ,tuple3: tuple3
                                   ,tuple4: tuple4
                                   ,tuple5: tuple5
                                   ,maybe: maybe
                                   ,decodeString: decodeString
                                   ,object: object
                                   ,lazy: lazy
                                   ,apply: apply
                                   ,set: set
                                   ,union: union
                                   ,union$: union$
                                   ,arrayUnion: arrayUnion
                                   ,arrayNewtyped: arrayNewtyped
                                   ,newtyped$: newtyped$
                                   ,safeIndex: safeIndex};
   return _elm.Elmz.Json.Decoder.values;
};
Elm.Elmz = Elm.Elmz || {};
Elm.Elmz.Json = Elm.Elmz.Json || {};
Elm.Elmz.Json.Encoder = Elm.Elmz.Json.Encoder || {};
Elm.Elmz.Json.Encoder.make = function (_elm) {
   "use strict";
   _elm.Elmz = _elm.Elmz || {};
   _elm.Elmz.Json = _elm.Elmz.Json || {};
   _elm.Elmz.Json.Encoder = _elm.Elmz.Json.Encoder || {};
   if (_elm.Elmz.Json.Encoder.values)
   return _elm.Elmz.Json.Encoder.values;
   var _op = {},
   _N = Elm.Native,
   _U = _N.Utils.make(_elm),
   _L = _N.List.make(_elm),
   $moduleName = "Elmz.Json.Encoder",
   $Basics = Elm.Basics.make(_elm),
   $Dict = Elm.Dict.make(_elm),
   $Json$Encode = Elm.Json.Encode.make(_elm),
   $List = Elm.List.make(_elm),
   $Maybe = Elm.Maybe.make(_elm),
   $Set = Elm.Set.make(_elm);
   var product0 = function (_v0) {
      return function () {
         return $Json$Encode.list(_L.fromArray([]));
      }();
   };
   var tagProduct = F3(function (t,
   encoder,
   a) {
      return $Json$Encode.list(_L.fromArray([$Json$Encode.string(t)
                                            ,encoder(a)]));
   });
   var tag = F5(function (tagKey,
   contentsKey,
   tagValue,
   j,
   a) {
      return $Json$Encode.object(_L.fromArray([{ctor: "_Tuple2"
                                               ,_0: tagKey
                                               ,_1: $Json$Encode.string(tagValue)}
                                              ,{ctor: "_Tuple2"
                                               ,_0: contentsKey
                                               ,_1: j(a)}]));
   });
   var tag$ = A2(tag,
   "tag",
   "contents");
   var tuple5 = F6(function (ja,
   jb,
   jc,
   jd,
   je,
   p) {
      return function () {
         switch (p.ctor)
         {case "_Tuple5":
            return $Json$Encode.list(_L.fromArray([ja(p._0)
                                                  ,jb(p._1)
                                                  ,jc(p._2)
                                                  ,jd(p._3)
                                                  ,je(p._4)]));}
         _U.badCase($moduleName,
         "between lines 95 and 96");
      }();
   });
   var tuple4 = F5(function (ja,
   jb,
   jc,
   jd,
   p) {
      return function () {
         switch (p.ctor)
         {case "_Tuple4":
            return $Json$Encode.list(_L.fromArray([ja(p._0)
                                                  ,jb(p._1)
                                                  ,jc(p._2)
                                                  ,jd(p._3)]));}
         _U.badCase($moduleName,
         "between lines 86 and 87");
      }();
   });
   var tuple3 = F4(function (ja,
   jb,
   jc,
   p) {
      return function () {
         switch (p.ctor)
         {case "_Tuple3":
            return $Json$Encode.list(_L.fromArray([ja(p._0)
                                                  ,jb(p._1)
                                                  ,jc(p._2)]));}
         _U.badCase($moduleName,
         "between lines 82 and 83");
      }();
   });
   var tuple2 = F3(function (a,
   b,
   p) {
      return $Json$Encode.list(_L.fromArray([a($Basics.fst(p))
                                            ,b($Basics.snd(p))]));
   });
   var tuple1 = F2(function (ea,
   a) {
      return $Json$Encode.list(_L.fromArray([ea(a)]));
   });
   var object4 = F5(function (_v17,
   _v18,
   _v19,
   _v20,
   _v21) {
      return function () {
         switch (_v21.ctor)
         {case "_Tuple4":
            return function () {
                 switch (_v20.ctor)
                 {case "_Tuple2":
                    return function () {
                         switch (_v19.ctor)
                         {case "_Tuple2":
                            return function () {
                                 switch (_v18.ctor)
                                 {case "_Tuple2":
                                    return function () {
                                         switch (_v17.ctor)
                                         {case "_Tuple2":
                                            return $Json$Encode.object(_L.fromArray([{ctor: "_Tuple2"
                                                                                     ,_0: _v17._0
                                                                                     ,_1: _v17._1(_v21._0)}
                                                                                    ,{ctor: "_Tuple2"
                                                                                     ,_0: _v18._0
                                                                                     ,_1: _v18._1(_v21._1)}
                                                                                    ,{ctor: "_Tuple2"
                                                                                     ,_0: _v19._0
                                                                                     ,_1: _v19._1(_v21._2)}
                                                                                    ,{ctor: "_Tuple2"
                                                                                     ,_0: _v20._0
                                                                                     ,_1: _v20._1(_v21._3)}]));}
                                         _U.badCase($moduleName,
                                         "on line 73, column 3 to 63");
                                      }();}
                                 _U.badCase($moduleName,
                                 "on line 73, column 3 to 63");
                              }();}
                         _U.badCase($moduleName,
                         "on line 73, column 3 to 63");
                      }();}
                 _U.badCase($moduleName,
                 "on line 73, column 3 to 63");
              }();}
         _U.badCase($moduleName,
         "on line 73, column 3 to 63");
      }();
   });
   var object3 = F4(function (_v39,
   _v40,
   _v41,
   _v42) {
      return function () {
         switch (_v42.ctor)
         {case "_Tuple3":
            return function () {
                 switch (_v41.ctor)
                 {case "_Tuple2":
                    return function () {
                         switch (_v40.ctor)
                         {case "_Tuple2":
                            return function () {
                                 switch (_v39.ctor)
                                 {case "_Tuple2":
                                    return $Json$Encode.object(_L.fromArray([{ctor: "_Tuple2"
                                                                             ,_0: _v39._0
                                                                             ,_1: _v39._1(_v42._0)}
                                                                            ,{ctor: "_Tuple2"
                                                                             ,_0: _v40._0
                                                                             ,_1: _v40._1(_v42._1)}
                                                                            ,{ctor: "_Tuple2"
                                                                             ,_0: _v41._0
                                                                             ,_1: _v41._1(_v42._2)}]));}
                                 _U.badCase($moduleName,
                                 "on line 65, column 3 to 50");
                              }();}
                         _U.badCase($moduleName,
                         "on line 65, column 3 to 50");
                      }();}
                 _U.badCase($moduleName,
                 "on line 65, column 3 to 50");
              }();}
         _U.badCase($moduleName,
         "on line 65, column 3 to 50");
      }();
   });
   var object2 = F3(function (_v56,
   _v57,
   _v58) {
      return function () {
         switch (_v58.ctor)
         {case "_Tuple2":
            return function () {
                 switch (_v57.ctor)
                 {case "_Tuple2":
                    return function () {
                         switch (_v56.ctor)
                         {case "_Tuple2":
                            return $Json$Encode.object(_L.fromArray([{ctor: "_Tuple2"
                                                                     ,_0: _v56._0
                                                                     ,_1: _v56._1(_v58._0)}
                                                                    ,{ctor: "_Tuple2"
                                                                     ,_0: _v57._0
                                                                     ,_1: _v57._1(_v58._1)}]));}
                         _U.badCase($moduleName,
                         "on line 58, column 3 to 37");
                      }();}
                 _U.badCase($moduleName,
                 "on line 58, column 3 to 37");
              }();}
         _U.badCase($moduleName,
         "on line 58, column 3 to 37");
      }();
   });
   var object = function (v) {
      return function ($) {
         return $Json$Encode.object($Dict.toList($Dict.map(F2(function (k,
         val) {
            return v(val);
         }))($)));
      };
   };
   var emptyArray = function (_v68) {
      return function () {
         return $Json$Encode.list(_L.fromArray([]));
      }();
   };
   var list = F2(function (f,vs) {
      return $Json$Encode.list(A2($List.map,
      f,
      vs));
   });
   var set = function (a) {
      return function ($) {
         return list(a)($Set.toList($));
      };
   };
   var dict = F2(function (k,v) {
      return function ($) {
         return list(A2(tuple2,
         k,
         v))($Dict.toList($));
      };
   });
   var bool = $Json$Encode.bool;
   var optional = F2(function (ja,
   oa) {
      return A2($Maybe.withDefault,
      $Json$Encode.$null,
      A2($Maybe.map,ja,oa));
   });
   var $int = function (n) {
      return $Json$Encode.$float($Basics.toFloat(n));
   };
   var $float = $Json$Encode.$float;
   var $null = function (_v70) {
      return function () {
         return $Json$Encode.$null;
      }();
   };
   var string = $Json$Encode.string;
   var unit = F2(function (v,
   _v72) {
      return function () {
         return v;
      }();
   });
   var contramap = F2(function (f,
   j) {
      return function ($) {
         return j(f($));
      };
   });
   var render = F2(function (ja,
   a) {
      return A2($Json$Encode.encode,
      0,
      ja(a));
   });
   _elm.Elmz.Json.Encoder.values = {_op: _op
                                   ,render: render
                                   ,contramap: contramap
                                   ,unit: unit
                                   ,string: string
                                   ,$null: $null
                                   ,$float: $float
                                   ,$int: $int
                                   ,optional: optional
                                   ,bool: bool
                                   ,list: list
                                   ,emptyArray: emptyArray
                                   ,set: set
                                   ,dict: dict
                                   ,object: object
                                   ,object2: object2
                                   ,object3: object3
                                   ,object4: object4
                                   ,tuple1: tuple1
                                   ,tuple2: tuple2
                                   ,tuple3: tuple3
                                   ,tuple4: tuple4
                                   ,tuple5: tuple5
                                   ,tag: tag
                                   ,tag$: tag$
                                   ,tagProduct: tagProduct
                                   ,product0: product0};
   return _elm.Elmz.Json.Encoder.values;
};
Elm.Elmz = Elm.Elmz || {};
Elm.Elmz.Json = Elm.Elmz.Json || {};
Elm.Elmz.Json.Request = Elm.Elmz.Json.Request || {};
Elm.Elmz.Json.Request.make = function (_elm) {
   "use strict";
   _elm.Elmz = _elm.Elmz || {};
   _elm.Elmz.Json = _elm.Elmz.Json || {};
   _elm.Elmz.Json.Request = _elm.Elmz.Json.Request || {};
   if (_elm.Elmz.Json.Request.values)
   return _elm.Elmz.Json.Request.values;
   var _op = {},
   _N = Elm.Native,
   _U = _N.Utils.make(_elm),
   _L = _N.List.make(_elm),
   $moduleName = "Elmz.Json.Request",
   $Basics = Elm.Basics.make(_elm),
   $Elmz$Json$Decoder = Elm.Elmz.Json.Decoder.make(_elm),
   $Elmz$Json$Encoder = Elm.Elmz.Json.Encoder.make(_elm),
   $Http = Elm.Http.make(_elm),
   $Maybe = Elm.Maybe.make(_elm),
   $Signal = Elm.Signal.make(_elm),
   $Task = Elm.Task.make(_elm);
   var sendPost = F2(function (r,
   a) {
      return function () {
         var out = r.encoder(a);
         return A3($Http.post,
         r.decoder,
         out.url,
         $Http.string(out.body));
      }();
   });
   var posts = F2(function (r,a) {
      return function () {
         var f = function (a) {
            return function () {
               switch (a.ctor)
               {case "Just":
                  return A2($Task.map,
                    $Maybe.Just,
                    A2(sendPost,r,a._0));
                  case "Nothing":
                  return $Task.succeed($Maybe.Nothing);}
               _U.badCase($moduleName,
               "between lines 47 and 50");
            }();
         };
         return A2($Signal.map,f,a);
      }();
   });
   var map = F2(function (f,r) {
      return _U.replace([["decoder"
                         ,A2($Elmz$Json$Decoder.map,
                         f,
                         r.decoder)]],
      r);
   });
   var to = F2(function (r,f) {
      return A2(map,f,r);
   });
   var contramap = F2(function (f,
   r) {
      return _U.replace([["encoder"
                         ,function ($) {
                            return r.encoder(f($));
                         }]],
      r);
   });
   var Failed = function (a) {
      return {ctor: "Failed"
             ,_0: a};
   };
   var Waiting = {ctor: "Waiting"};
   var Inactive = {ctor: "Inactive"};
   var Out = F3(function (a,b,c) {
      return {_: {}
             ,body: c
             ,url: b
             ,verb: a};
   });
   var Request = F2(function (a,
   b) {
      return {_: {}
             ,decoder: b
             ,encoder: a};
   });
   var post = F4(function (host,
   path,
   e,
   d) {
      return function () {
         var out = function (a) {
            return A3(Out,
            "POST",
            A2($Basics._op["++"],
            host,
            A2($Basics._op["++"],"/",path)),
            A2($Elmz$Json$Encoder.render,
            e,
            a));
         };
         return A2(Request,out,d);
      }();
   });
   _elm.Elmz.Json.Request.values = {_op: _op
                                   ,Request: Request
                                   ,Out: Out
                                   ,Inactive: Inactive
                                   ,Waiting: Waiting
                                   ,Failed: Failed
                                   ,post: post
                                   ,contramap: contramap
                                   ,map: map
                                   ,to: to
                                   ,sendPost: sendPost
                                   ,posts: posts};
   return _elm.Elmz.Json.Request.values;
};
Elm.Elmz = Elm.Elmz || {};
Elm.Elmz.Layout = Elm.Elmz.Layout || {};
Elm.Elmz.Layout.make = function (_elm) {
   "use strict";
   _elm.Elmz = _elm.Elmz || {};
   _elm.Elmz.Layout = _elm.Elmz.Layout || {};
   if (_elm.Elmz.Layout.values)
   return _elm.Elmz.Layout.values;
   var _op = {},
   _N = Elm.Native,
   _U = _N.Utils.make(_elm),
   _L = _N.List.make(_elm),
   $moduleName = "Elmz.Layout",
   $Basics = Elm.Basics.make(_elm),
   $Color = Elm.Color.make(_elm),
   $Graphics$Element = Elm.Graphics.Element.make(_elm),
   $List = Elm.List.make(_elm),
   $Maybe = Elm.Maybe.make(_elm);
   var reduceBalanced = F3(function (z,
   op,
   xs) {
      return function () {
         var finalize = function (stack) {
            return A3($List.foldl,
            op,
            z,
            A2($List.map,
            $Basics.fst,
            stack));
         };
         var fixup = function (stack) {
            return function () {
               switch (stack.ctor)
               {case "::":
                  switch (stack._0.ctor)
                    {case "_Tuple2":
                       switch (stack._1.ctor)
                         {case "::":
                            switch (stack._1._0.ctor)
                              {case "_Tuple2":
                                 return _U.cmp(stack._0._1,
                                   stack._1._0._1) > -1 ? fixup(A2($List._op["::"],
                                   {ctor: "_Tuple2"
                                   ,_0: A2(op,
                                   stack._1._0._0,
                                   stack._0._0)
                                   ,_1: stack._0._1 + stack._1._0._1},
                                   stack._1._1)) : A2($List._op["::"],
                                   {ctor: "_Tuple2"
                                   ,_0: stack._0._0
                                   ,_1: stack._0._1},
                                   A2($List._op["::"],
                                   {ctor: "_Tuple2"
                                   ,_0: stack._1._0._0
                                   ,_1: stack._1._0._1},
                                   stack._1._1));}
                              break;}
                         break;}
                    break;}
               return stack;
            }();
         };
         return finalize(A3($List.foldl,
         F2(function (a,stack) {
            return fixup(A2($List._op["::"],
            {ctor: "_Tuple2",_0: a,_1: 1},
            stack));
         }),
         _L.fromArray([]),
         xs));
      }();
   });
   var element = function (_v9) {
      return function () {
         switch (_v9.ctor)
         {case "Layout": return _v9._1;}
         _U.badCase($moduleName,
         "on line 74, column 26 to 27");
      }();
   };
   var widthOf = function (l) {
      return $Graphics$Element.widthOf(element(l));
   };
   var heightOf = function (l) {
      return $Graphics$Element.heightOf(element(l));
   };
   var tag = function (_v14) {
      return function () {
         switch (_v14.ctor)
         {case "Layout": return _v14._2;}
         _U.badCase($moduleName,
         "on line 71, column 22 to 23");
      }();
   };
   var filter = F2(function (f,
   _v19) {
      return function () {
         switch (_v19.ctor)
         {case "Layout":
            return F2(function (x,y) {
                 return A2($List._op["::"],
                 x,
                 y);
              })(_v19._2)(function () {
                 switch (_v19._0.ctor)
                 {case "Above":
                    return A2($List.append,
                      A2(filter,f,_v19._0._0),
                      A2(filter,f,_v19._0._1));
                    case "Beside":
                    return A2($List.append,
                      A2(filter,f,_v19._0._0),
                      A2(filter,f,_v19._0._1));
                    case "Container":
                    return A2(filter,f,_v19._0._1);
                    case "Embed":
                    return _L.fromArray([]);}
                 _U.badCase($moduleName,
                 "between lines 56 and 60");
              }());}
         _U.badCase($moduleName,
         "between lines 56 and 60");
      }();
   });
   var tags = filter($Basics.always(true));
   var find = F2(function (f,
   _v32) {
      return function () {
         switch (_v32.ctor)
         {case "Layout":
            return f(_v32._2) ? $Maybe.Just(_v32._2) : function () {
                 switch (_v32._0.ctor)
                 {case "Above":
                    return $Maybe.oneOf(_L.fromArray([A2(find,
                                                     f,
                                                     _v32._0._0)
                                                     ,A2(find,f,_v32._0._1)]));
                    case "Beside":
                    return $Maybe.oneOf(_L.fromArray([A2(find,
                                                     f,
                                                     _v32._0._0)
                                                     ,A2(find,f,_v32._0._1)]));
                    case "Container":
                    return A2(find,f,_v32._0._1);
                    case "Embed":
                    return $Maybe.Nothing;}
                 _U.badCase($moduleName,
                 "between lines 49 and 53");
              }();}
         _U.badCase($moduleName,
         "between lines 48 and 53");
      }();
   });
   var exists = F2(function (f,l) {
      return function () {
         var _v45 = A2(find,f,l);
         switch (_v45.ctor)
         {case "Just": return true;
            case "Nothing": return false;}
         _U.badCase($moduleName,
         "between lines 66 and 68");
      }();
   });
   var Layout = F3(function (a,
   b,
   c) {
      return {ctor: "Layout"
             ,_0: a
             ,_1: b
             ,_2: c};
   });
   var transform = F2(function (f,
   _v47) {
      return function () {
         switch (_v47.ctor)
         {case "Layout":
            return A3(Layout,
              _v47._0,
              f(_v47._1),
              _v47._2);}
         _U.badCase($moduleName,
         "on line 77, column 30 to 46");
      }();
   });
   var Embed = function (a) {
      return {ctor: "Embed",_0: a};
   };
   var embed = F2(function (k,e) {
      return A3(Layout,
      Embed(e),
      e,
      k);
   });
   var empty = function (k) {
      return A2(embed,
      k,
      $Graphics$Element.empty);
   };
   var Container = F2(function (a,
   b) {
      return {ctor: "Container"
             ,_0: a
             ,_1: b};
   });
   var container = F5(function (k,
   w,
   h,
   pt,
   l) {
      return function () {
         var pos = A2($Graphics$Element.topLeftAt,
         $Graphics$Element.absolute(pt.x),
         $Graphics$Element.absolute(pt.y));
         var e = A4($Graphics$Element.container,
         w,
         h,
         pos,
         element(l));
         return A3(Layout,
         A2(Container,
         {_: {}
         ,height: h
         ,innerTopLeft: pt
         ,width: w},
         l),
         e,
         k);
      }();
   });
   var pinPt = F3(function (origin,
   k,
   l) {
      return A5(container,
      k,
      origin.x + widthOf(l),
      origin.y + heightOf(l),
      origin,
      l);
   });
   var Above = F2(function (a,b) {
      return {ctor: "Above"
             ,_0: a
             ,_1: b};
   });
   var above = F3(function (k,
   top,
   bot) {
      return A3(Layout,
      A2(Above,top,bot),
      A2($Graphics$Element.above,
      element(top),
      element(bot)),
      k);
   });
   var vertical = F2(function (k,
   ls) {
      return A3(reduceBalanced,
      empty(k),
      above(k),
      ls);
   });
   var intersperseVertical = F2(function (sep,
   ls) {
      return A2(vertical,
      tag(sep),
      A2($List.intersperse,sep,ls));
   });
   var Beside = F2(function (a,b) {
      return {ctor: "Beside"
             ,_0: a
             ,_1: b};
   });
   var map = F2(function (f,_v52) {
      return function () {
         switch (_v52.ctor)
         {case "Layout":
            return A3(Layout,
              function () {
                 switch (_v52._0.ctor)
                 {case "Above": return A2(Above,
                      A2(map,f,_v52._0._0),
                      A2(map,f,_v52._0._1));
                    case "Beside": return A2(Beside,
                      A2(map,f,_v52._0._0),
                      A2(map,f,_v52._0._1));
                    case "Container":
                    return A2(Container,
                      _v52._0._0,
                      A2(map,f,_v52._0._1));
                    case "Embed":
                    return Embed(_v52._0._0);}
                 _U.badCase($moduleName,
                 "between lines 40 and 44");
              }(),
              _v52._1,
              f(_v52._2));}
         _U.badCase($moduleName,
         "between lines 40 and 44");
      }();
   });
   var beside = F3(function (k,
   left,
   right) {
      return A3(Layout,
      A2(Beside,left,right),
      A2($Graphics$Element.beside,
      element(left),
      element(right)),
      k);
   });
   var horizontal = F2(function (k,
   ls) {
      return A3(reduceBalanced,
      empty(k),
      beside(k),
      ls);
   });
   var intersperseHorizontal = F2(function (sep,
   ls) {
      return A2(horizontal,
      tag(sep),
      A2($List.intersperse,sep,ls));
   });
   var bounds = function (r) {
      return {_: {}
             ,height: r.topLeft.y + r.height
             ,width: r.topLeft.x + r.width};
   };
   var Outside = {ctor: "Outside"};
   var Inside = {ctor: "Inside"};
   var Region = F3(function (a,
   b,
   c) {
      return {_: {}
             ,height: c
             ,topLeft: a
             ,width: b};
   });
   var Pt = F2(function (a,b) {
      return {_: {},x: a,y: b};
   });
   var ptFromPair = function (_v65) {
      return function () {
         switch (_v65.ctor)
         {case "_Tuple2": return A2(Pt,
              _v65._0,
              _v65._1);}
         _U.badCase($moduleName,
         "on line 16, column 20 to 26");
      }();
   };
   var offset = F2(function (_v69,
   region) {
      return function () {
         switch (_v69.ctor)
         {case "_Tuple2":
            return _U.replace([["topLeft"
                               ,A2(Pt,
                               _v69._0 + region.topLeft.x,
                               _v69._1 + region.topLeft.y)]],
              region);}
         _U.badCase($moduleName,
         "on line 19, column 32 to 89");
      }();
   });
   var pin = function (_v73) {
      return function () {
         switch (_v73.ctor)
         {case "_Tuple2":
            return pinPt(A2(Pt,
              _v73._0,
              _v73._1));}
         _U.badCase($moduleName,
         "on line 33, column 13 to 26");
      }();
   };
   var pad = F3(function (eastWestPad,
   northSouthPad,
   l) {
      return A5(container,
      tag(l),
      widthOf(l) + eastWestPad * 2,
      heightOf(l) + northSouthPad * 2,
      A2(Pt,
      eastWestPad,
      northSouthPad),
      l);
   });
   var outline = F3(function (c,
   thickness,
   l) {
      return transform($Graphics$Element.color(c))(A3(pad,
      thickness,
      thickness,
      l));
   });
   var pad$ = F2(function (padding,
   l) {
      return A5(container,
      tag(l),
      widthOf(l) + padding.left + padding.right,
      heightOf(l) + padding.top + padding.bottom,
      A2(Pt,padding.left,padding.top),
      l);
   });
   var fill = F2(function (c,e) {
      return transform($Graphics$Element.color(c))(A5(container,
      tag(e),
      widthOf(e),
      heightOf(e),
      A2(Pt,0,0),
      e));
   });
   var row = function (ls) {
      return function () {
         switch (ls.ctor)
         {case "[]":
            return _L.fromArray([]);}
         return function () {
            var maxh = A2($Maybe.withDefault,
            0,
            $List.maximum(A2($List.map,
            heightOf,
            ls)));
            var cell = function (e) {
               return function () {
                  var diff = maxh - heightOf(e);
                  return _U.eq(diff,
                  0) ? e : A5(container,
                  tag(e),
                  widthOf(e),
                  maxh,
                  A2(Pt,
                  0,
                  $Basics.floor($Basics.toFloat(diff) / 2)),
                  e);
               }();
            };
            return A2($List.map,cell,ls);
         }();
      }();
   };
   var column = function (ls) {
      return function () {
         switch (ls.ctor)
         {case "[]":
            return _L.fromArray([]);}
         return function () {
            var maxw = A2($Maybe.withDefault,
            0,
            $List.maximum(A2($List.map,
            widthOf,
            ls)));
            var cell = function (e) {
               return function () {
                  var diff = maxw - widthOf(e);
                  return _U.eq(diff,
                  0) ? e : A5(container,
                  tag(e),
                  maxw,
                  heightOf(e),
                  A2(Pt,
                  $Basics.floor($Basics.toFloat(diff) / 2),
                  0),
                  e);
               }();
            };
            return A2($List.map,cell,ls);
         }();
      }();
   };
   var leftAlignedColumn = function (ls) {
      return function () {
         switch (ls.ctor)
         {case "[]":
            return _L.fromArray([]);}
         return function () {
            var maxw = A2($Maybe.withDefault,
            0,
            $List.maximum(A2($List.map,
            widthOf,
            ls)));
            var cell = function (e) {
               return function () {
                  var diff = maxw - widthOf(e);
                  return _U.eq(diff,
                  0) ? e : A5(container,
                  tag(e),
                  maxw,
                  heightOf(e),
                  A2(Pt,0,0),
                  e);
               }();
            };
            return A2($List.map,cell,ls);
         }();
      }();
   };
   var region = F4(function (prefixOf,
   by,
   l,
   ks) {
      return function () {
         var go = F3(function (origin,
         ks,
         _v80) {
            return function () {
               switch (_v80.ctor)
               {case "Layout": return _U.eq(ks,
                    by(_v80._2)) ? _L.fromArray([{ctor: "_Tuple2"
                                                 ,_0: _v80._2
                                                 ,_1: A3(Region,
                                                 origin,
                                                 $Graphics$Element.widthOf(_v80._1),
                                                 $Graphics$Element.heightOf(_v80._1))}]) : $Basics.not(A2(prefixOf,
                    by(_v80._2),
                    ks)) ? _L.fromArray([]) : function () {
                       switch (_v80._0.ctor)
                       {case "Above":
                          return A2($Basics._op["++"],
                            A3(go,origin,ks,_v80._0._0),
                            A3(go,
                            _U.replace([["y"
                                        ,origin.y + heightOf(_v80._0._0)]],
                            origin),
                            ks,
                            _v80._0._1));
                          case "Beside":
                          return A2($Basics._op["++"],
                            A3(go,origin,ks,_v80._0._0),
                            A3(go,
                            _U.replace([["x"
                                        ,origin.x + widthOf(_v80._0._0)]],
                            origin),
                            ks,
                            _v80._0._1));
                          case "Container": return A3(go,
                            _U.replace([["x"
                                        ,origin.x + _v80._0._0.innerTopLeft.x]
                                       ,["y"
                                        ,origin.y + _v80._0._0.innerTopLeft.y]],
                            origin),
                            ks,
                            _v80._0._1);
                          case "Embed":
                          return _L.fromArray([]);}
                       _U.badCase($moduleName,
                       "between lines 188 and 200");
                    }();}
               _U.badCase($moduleName,
               "between lines 186 and 200");
            }();
         });
         return A3(go,A2(Pt,0,0),ks,l);
      }();
   });
   var at = F2(function (l,r) {
      return function () {
         var distinctCons = F2(function (h,
         t) {
            return function () {
               switch (t.ctor)
               {case "::": return _U.eq(t._0,
                    h) ? t : A2($List._op["::"],
                    h,
                    t);
                  case "[]":
                  return _L.fromArray([h]);}
               _U.badCase($moduleName,
               "between lines 235 and 239");
            }();
         });
         var by1 = r.topLeft.y;
         var by2 = by1 + r.height;
         var bx1 = r.topLeft.x;
         var bx2 = bx1 + r.width;
         var intersects = F3(function (topLeft,
         w,
         h) {
            return function () {
               var ay1 = topLeft.y;
               var ay2 = ay1 + h;
               var ax1 = topLeft.x;
               var ax2 = ax1 + w;
               return _U.cmp(ax1,
               bx2) < 0 && (_U.cmp(ax2,
               bx1) > 0 && (_U.cmp(ay1,
               by2) < 0 && _U.cmp(ay2,
               by1) > 0));
            }();
         });
         var go = F2(function (origin,
         _v96) {
            return function () {
               switch (_v96.ctor)
               {case "Layout":
                  return $Basics.not(A3(intersects,
                    origin,
                    $Graphics$Element.widthOf(_v96._1),
                    $Graphics$Element.heightOf(_v96._1))) ? _L.fromArray([]) : A2(distinctCons,
                    _v96._2,
                    function () {
                       switch (_v96._0.ctor)
                       {case "Above":
                          return A2($Basics._op["++"],
                            A2(go,origin,_v96._0._0),
                            A2(go,
                            _U.replace([["y"
                                        ,origin.y + heightOf(_v96._0._0)]],
                            origin),
                            _v96._0._1));
                          case "Beside":
                          return A2($Basics._op["++"],
                            A2(go,origin,_v96._0._0),
                            A2(go,
                            _U.replace([["x"
                                        ,origin.x + widthOf(_v96._0._0)]],
                            origin),
                            _v96._0._1));
                          case "Container": return A2(go,
                            _U.replace([["x"
                                        ,origin.x + _v96._0._0.innerTopLeft.x]
                                       ,["y"
                                        ,origin.y + _v96._0._0.innerTopLeft.y]],
                            origin),
                            _v96._0._1);
                          case "Embed":
                          return _L.fromArray([]);}
                       _U.badCase($moduleName,
                       "between lines 242 and 254");
                    }());}
               _U.badCase($moduleName,
               "between lines 240 and 254");
            }();
         });
         return A2(go,A2(Pt,0,0),l);
      }();
   });
   var atPoint = F2(function (l,
   xy) {
      return A2(at,
      l,
      {_: {}
      ,height: 1
      ,topLeft: xy
      ,width: 1});
   });
   var leafAt = F2(function (l,r) {
      return function () {
         var _v109 = $List.reverse(A2(at,
         l,
         r));
         switch (_v109.ctor)
         {case "::":
            return $Maybe.Just(_v109._0);
            case "[]":
            return $Maybe.Nothing;}
         _U.badCase($moduleName,
         "between lines 208 and 212");
      }();
   });
   var leafAtPoint = F2(function (l,
   xy) {
      return A2(leafAt,
      l,
      {_: {}
      ,height: 1
      ,topLeft: xy
      ,width: 1});
   });
   var atRanked = F3(function (rank,
   l,
   r) {
      return function () {
         var done = function (_v112) {
            return function () {
               switch (_v112.ctor)
               {case "_Tuple3":
                  return A2($List._op["::"],
                    $List.reverse(_v112._1),
                    _v112._2);}
               _U.badCase($moduleName,
               "on line 267, column 28 to 51");
            }();
         };
         var g = F2(function (_v117,
         _v118) {
            return function () {
               switch (_v118.ctor)
               {case "_Tuple3":
                  return function () {
                       switch (_v117.ctor)
                       {case "_Tuple2":
                          return _U.eq(_v117._0,
                            _v118._0) ? {ctor: "_Tuple3"
                                        ,_0: _v118._0
                                        ,_1: A2($List._op["::"],
                                        _v117._1,
                                        _v118._1)
                                        ,_2: _v118._2} : {ctor: "_Tuple3"
                                                         ,_0: _v117._0
                                                         ,_1: _L.fromArray([_v117._1])
                                                         ,_2: A2($List._op["::"],
                                                         $List.reverse(_v118._1),
                                                         _v118._2)};}
                       _U.badCase($moduleName,
                       "between lines 265 and 266");
                    }();}
               _U.badCase($moduleName,
               "between lines 265 and 266");
            }();
         });
         var f = function (k) {
            return {ctor: "_Tuple2"
                   ,_0: rank(k)
                   ,_1: k};
         };
         return function () {
            var _v126 = $List.sortBy($Basics.fst)(A2($List.map,
            f,
            A2(at,l,r)));
            switch (_v126.ctor)
            {case "::":
               switch (_v126._0.ctor)
                 {case "_Tuple2":
                    return done(A3($List.foldl,
                      g,
                      {ctor: "_Tuple3"
                      ,_0: _v126._0._0
                      ,_1: _L.fromArray([_v126._0._1])
                      ,_2: _L.fromArray([])},
                      _v126._1));}
                 break;
               case "[]":
               return _L.fromArray([]);}
            _U.badCase($moduleName,
            "between lines 268 and 270");
         }();
      }();
   });
   var lub = F2(function (r1,r2) {
      return function () {
         var botRight = A2(Pt,
         r1.topLeft.x + A2($Basics.max,
         r1.width,
         r2.topLeft.x) + r2.width,
         r1.topLeft.y + A2($Basics.max,
         r1.height,
         r2.topLeft.x) + r2.height);
         var topLeft = A2(Pt,
         A2($Basics.min,
         r1.topLeft.x,
         r2.topLeft.x),
         A2($Basics.min,
         r1.topLeft.y,
         r2.topLeft.y));
         return A3(Region,
         topLeft,
         botRight.x - topLeft.x,
         botRight.y - topLeft.y);
      }();
   });
   var selectableLub = F2(function (f,
   rs) {
      return function () {
         var _v131 = A2($List.filter,
         function ($) {
            return f($Basics.fst($));
         },
         rs);
         switch (_v131.ctor)
         {case "::":
            return $Maybe.Just(A3($List.foldl,
              lub,
              $Basics.snd(_v131._0),
              A2($List.map,
              $Basics.snd,
              _v131._1)));
            case "[]":
            return $Maybe.Nothing;}
         _U.badCase($moduleName,
         "between lines 280 and 282");
      }();
   });
   _elm.Elmz.Layout.values = {_op: _op
                             ,Pt: Pt
                             ,Region: Region
                             ,Inside: Inside
                             ,Outside: Outside
                             ,ptFromPair: ptFromPair
                             ,offset: offset
                             ,bounds: bounds
                             ,Beside: Beside
                             ,Above: Above
                             ,Container: Container
                             ,Embed: Embed
                             ,Layout: Layout
                             ,pin: pin
                             ,pinPt: pinPt
                             ,map: map
                             ,find: find
                             ,filter: filter
                             ,tags: tags
                             ,exists: exists
                             ,tag: tag
                             ,element: element
                             ,transform: transform
                             ,widthOf: widthOf
                             ,heightOf: heightOf
                             ,embed: embed
                             ,empty: empty
                             ,beside: beside
                             ,above: above
                             ,horizontal: horizontal
                             ,vertical: vertical
                             ,intersperseHorizontal: intersperseHorizontal
                             ,intersperseVertical: intersperseVertical
                             ,container: container
                             ,pad: pad
                             ,pad$: pad$
                             ,outline: outline
                             ,fill: fill
                             ,row: row
                             ,column: column
                             ,leftAlignedColumn: leftAlignedColumn
                             ,region: region
                             ,atPoint: atPoint
                             ,leafAt: leafAt
                             ,leafAtPoint: leafAtPoint
                             ,at: at
                             ,atRanked: atRanked
                             ,lub: lub
                             ,selectableLub: selectableLub
                             ,reduceBalanced: reduceBalanced};
   return _elm.Elmz.Layout.values;
};
Elm.Elmz = Elm.Elmz || {};
Elm.Elmz.Matcher = Elm.Elmz.Matcher || {};
Elm.Elmz.Matcher.make = function (_elm) {
   "use strict";
   _elm.Elmz = _elm.Elmz || {};
   _elm.Elmz.Matcher = _elm.Elmz.Matcher || {};
   if (_elm.Elmz.Matcher.values)
   return _elm.Elmz.Matcher.values;
   var _op = {},
   _N = Elm.Native,
   _U = _N.Utils.make(_elm),
   _L = _N.List.make(_elm),
   $moduleName = "Elmz.Matcher",
   $Basics = Elm.Basics.make(_elm),
   $Elmz$Moore = Elm.Elmz.Moore.make(_elm),
   $List = Elm.List.make(_elm),
   $Maybe = Elm.Maybe.make(_elm),
   $String = Elm.String.make(_elm);
   var model = function (matches) {
      return function () {
         var waiting = F2(function (q,
         e) {
            return $Maybe.Just(function () {
               switch (e.ctor)
               {case "Query":
                  return A2($Elmz$Moore.Moore,
                    {_: {}
                    ,matches: A2($List.filter,
                    matches(e._0.string),
                    e._0.values)
                    ,query: $Maybe.Nothing},
                    waiting(e._0));
                  case "Results":
                  return A2($Elmz$Moore.Moore,
                    {_: {}
                    ,matches: A2($List.filter,
                    matches(q.string),
                    A2($Basics._op["++"],
                    q.values,
                    e._0.values))
                    ,query: $Maybe.Nothing},
                    hasresults(e._0));}
               _U.badCase($moduleName,
               "between lines 27 and 33");
            }());
         });
         var hasresults = F2(function (r,
         e) {
            return $Maybe.Just(function () {
               switch (e.ctor)
               {case "Query":
                  return function () {
                       var lastExamined = A2($Maybe.withDefault,
                       -1,
                       $List.maximum(r.positionsExamined));
                       var full = _U.cmp(r.additionalResults,
                       0) < 1;
                       var ok = _U.eq(r.query,
                       e._0.string) || (full && A2($String.startsWith,
                       r.query,
                       e._0.string) || full && (A2($String.startsWith,
                       e._0.string,
                       r.query) && _U.cmp(lastExamined,
                       $String.length(e._0.string)) < 0));
                       var out = A2($List.filter,
                       matches(e._0.string),
                       A2($Basics._op["++"],
                       e._0.values,
                       r.values));
                       return A3($Elmz$Moore.spike,
                       {_: {}
                       ,matches: out
                       ,query: ok ? $Maybe.Nothing : $Maybe.Just(e._0.string)},
                       {_: {}
                       ,matches: out
                       ,query: $Maybe.Nothing},
                       ok ? hasresults(r) : waiting(e._0));
                    }();
                  case "Results":
                  return A2($Elmz$Moore.Moore,
                    {_: {}
                    ,matches: A2($List.filter,
                    matches(e._0.query),
                    e._0.values)
                    ,query: $Maybe.Nothing},
                    hasresults(e._0));}
               _U.badCase($moduleName,
               "between lines 33 and 53");
            }());
         });
         var empty = function (e) {
            return $Maybe.Just(function () {
               switch (e.ctor)
               {case "Query":
                  return function () {
                       var o = {_: {}
                               ,matches: A2($List.filter,
                               matches(e._0.string),
                               e._0.values)
                               ,query: $Maybe.Just(e._0.string)};
                       return A3($Elmz$Moore.spike,
                       o,
                       _U.replace([["query"
                                   ,$Maybe.Nothing]],
                       o),
                       waiting(e._0));
                    }();
                  case "Results":
                  return A2($Elmz$Moore.Moore,
                    {_: {}
                    ,matches: e._0.values
                    ,query: $Maybe.Nothing},
                    hasresults(e._0));}
               _U.badCase($moduleName,
               "between lines 21 and 27");
            }());
         };
         return A2($Elmz$Moore.Moore,
         {_: {}
         ,matches: _L.fromArray([])
         ,query: $Maybe.Nothing},
         empty);
      }();
   };
   var Results = function (a) {
      return {ctor: "Results"
             ,_0: a};
   };
   var Query = function (a) {
      return {ctor: "Query",_0: a};
   };
   _elm.Elmz.Matcher.values = {_op: _op
                              ,Query: Query
                              ,Results: Results
                              ,model: model};
   return _elm.Elmz.Matcher.values;
};
Elm.Elmz = Elm.Elmz || {};
Elm.Elmz.Maybe = Elm.Elmz.Maybe || {};
Elm.Elmz.Maybe.make = function (_elm) {
   "use strict";
   _elm.Elmz = _elm.Elmz || {};
   _elm.Elmz.Maybe = _elm.Elmz.Maybe || {};
   if (_elm.Elmz.Maybe.values)
   return _elm.Elmz.Maybe.values;
   var _op = {},
   _N = Elm.Native,
   _U = _N.Utils.make(_elm),
   _L = _N.List.make(_elm),
   $moduleName = "Elmz.Maybe",
   $Basics = Elm.Basics.make(_elm),
   $List = Elm.List.make(_elm),
   $Maybe = Elm.Maybe.make(_elm);
   var sequence = function (ms) {
      return function () {
         var j = A2($List.filterMap,
         $Basics.identity,
         ms);
         return _U.eq($List.length(j),
         $List.length(ms)) ? $Maybe.Just(j) : $Maybe.Nothing;
      }();
   };
   var traverse = F2(function (f,
   a) {
      return sequence(A2($List.map,
      f,
      a));
   });
   var map = F2(function (f,m) {
      return function () {
         switch (m.ctor)
         {case "Just":
            return $Maybe.Just(f(m._0));
            case "Nothing":
            return $Maybe.Nothing;}
         _U.badCase($moduleName,
         "between lines 38 and 40");
      }();
   });
   var join = function (a) {
      return function () {
         switch (a.ctor)
         {case "Just": return a._0;
            case "Nothing":
            return $Maybe.Nothing;}
         _U.badCase($moduleName,
         "between lines 27 and 29");
      }();
   };
   var ap = F2(function (f,a) {
      return function () {
         switch (f.ctor)
         {case "Just":
            return function () {
                 switch (a.ctor)
                 {case "Just":
                    return $Maybe.Just(f._0(a._0));}
                 return $Maybe.Nothing;
              }();}
         return $Maybe.Nothing;
      }();
   });
   var fromMaybe = F2(function (a,
   m) {
      return function () {
         switch (m.ctor)
         {case "Just": return m._0;
            case "Nothing": return a;}
         _U.badCase($moduleName,
         "between lines 15 and 17");
      }();
   });
   var maybe = F3(function (nothing,
   just,
   a) {
      return function () {
         switch (a.ctor)
         {case "Just": return just(a._0);
            case "Nothing": return nothing;}
         _U.badCase($moduleName,
         "between lines 10 and 12");
      }();
   });
   var pure = $Maybe.Just;
   var map2 = F3(function (f,a,b) {
      return A2(ap,
      A2(ap,pure(f),a),
      b);
   });
   var map3 = F4(function (f,
   a,
   b,
   c) {
      return A2(ap,
      A2(ap,A2(ap,pure(f),a),b),
      c);
   });
   _elm.Elmz.Maybe.values = {_op: _op
                            ,pure: pure
                            ,maybe: maybe
                            ,fromMaybe: fromMaybe
                            ,ap: ap
                            ,join: join
                            ,map2: map2
                            ,map3: map3
                            ,map: map
                            ,sequence: sequence
                            ,traverse: traverse};
   return _elm.Elmz.Maybe.values;
};
Elm.Elmz = Elm.Elmz || {};
Elm.Elmz.Moore = Elm.Elmz.Moore || {};
Elm.Elmz.Moore.make = function (_elm) {
   "use strict";
   _elm.Elmz = _elm.Elmz || {};
   _elm.Elmz.Moore = _elm.Elmz.Moore || {};
   if (_elm.Elmz.Moore.values)
   return _elm.Elmz.Moore.values;
   var _op = {},
   _N = Elm.Native,
   _U = _N.Utils.make(_elm),
   _L = _N.List.make(_elm),
   $moduleName = "Elmz.Moore",
   $Basics = Elm.Basics.make(_elm),
   $Maybe = Elm.Maybe.make(_elm),
   $Signal = Elm.Signal.make(_elm);
   var step = F2(function (i,_v0) {
      return function () {
         switch (_v0.ctor)
         {case "Moore":
            return _v0._1(i);}
         _U.badCase($moduleName,
         "on line 99, column 22 to 25");
      }();
   });
   var feed = F2(function (i,_v4) {
      return function () {
         switch (_v4.ctor)
         {case "Moore":
            return A2($Maybe.withDefault,
              _v4,
              _v4._1(i));}
         _U.badCase($moduleName,
         "on line 40, column 29 to 53");
      }();
   });
   var feeds = F2(function (i,m) {
      return function () {
         switch (i.ctor)
         {case "::": return A2(feeds,
              i._1,
              A2(feed,i._0,m));
            case "[]": return m;}
         _U.badCase($moduleName,
         "between lines 43 and 45");
      }();
   });
   var extract = function (_v11) {
      return function () {
         switch (_v11.ctor)
         {case "Moore": return _v11._0;}
         _U.badCase($moduleName,
         "on line 37, column 23 to 24");
      }();
   };
   var transform = F2(function (m,
   i) {
      return function () {
         var s = F2(function (i,m) {
            return A2(feed,i,m);
         });
         return A2($Signal._op["<~"],
         extract,
         A3($Signal.foldp,s,m,i));
      }();
   });
   var Moore = F2(function (a,b) {
      return {ctor: "Moore"
             ,_0: a
             ,_1: b};
   });
   var contramap = F2(function (f,
   _v15) {
      return function () {
         switch (_v15.ctor)
         {case "Moore": return A2(Moore,
              _v15._0,
              function (i) {
                 return A2($Maybe.map,
                 contramap(f),
                 _v15._1(f(i)));
              });}
         _U.badCase($moduleName,
         "on line 22, column 27 to 73");
      }();
   });
   var duplicate = function (m) {
      return A2(Moore,
      m,
      function (i) {
         return A2($Maybe.map,
         duplicate,
         A2(step,i,m));
      });
   };
   var emit = F2(function (oz,
   _v19) {
      return function () {
         switch (_v19.ctor)
         {case "Moore": return A2(Moore,
              oz,
              function (i) {
                 return A2($Maybe.map,
                 emit(_v19._0),
                 _v19._1(i));
              });}
         _U.badCase($moduleName,
         "on line 34, column 23 to 62");
      }();
   });
   var focus = F2(function (f,
   _v23) {
      return function () {
         switch (_v23.ctor)
         {case "Moore":
            return function () {
                 var k$ = function (a) {
                    return A2($Maybe.andThen,
                    f(a),
                    function (b) {
                       return A2($Maybe.map,
                       focus(f),
                       _v23._1(b));
                    });
                 };
                 return A2(Moore,_v23._0,k$);
              }();}
         _U.badCase($moduleName,
         "between lines 49 and 50");
      }();
   });
   var loop = function (_v27) {
      return function () {
         switch (_v27.ctor)
         {case "Moore":
            switch (_v27._0.ctor)
              {case "_Tuple2":
                 return function () {
                      var step = function (a) {
                         return A2($Maybe.map,
                         loop,
                         _v27._1({ctor: "_Tuple2"
                                 ,_0: a
                                 ,_1: _v27._0._1}));
                      };
                      return A2(Moore,
                      _v27._0._0,
                      step);
                   }();}
              break;}
         _U.badCase($moduleName,
         "between lines 54 and 55");
      }();
   };
   var map2 = F3(function (f,
   _v33,
   _v34) {
      return function () {
         switch (_v34.ctor)
         {case "Moore":
            return function () {
                 switch (_v33.ctor)
                 {case "Moore": return A2(Moore,
                      A2(f,_v33._0,_v34._0),
                      function (i) {
                         return function () {
                            var _v41 = {ctor: "_Tuple2"
                                       ,_0: _v33._1(i)
                                       ,_1: _v34._1(i)};
                            switch (_v41.ctor)
                            {case "_Tuple2":
                               switch (_v41._0.ctor)
                                 {case "Nothing":
                                    switch (_v41._1.ctor)
                                      {case "Nothing":
                                         return $Maybe.Nothing;}
                                      break;}
                                 return $Maybe.Just(A3(map2,
                                 f,
                                 A2($Maybe.withDefault,
                                 _v33,
                                 _v41._0),
                                 A2($Maybe.withDefault,
                                 _v34,
                                 _v41._1)));}
                            _U.badCase($moduleName,
                            "between lines 60 and 64");
                         }();
                      });}
                 _U.badCase($moduleName,
                 "between lines 59 and 64");
              }();}
         _U.badCase($moduleName,
         "between lines 59 and 64");
      }();
   });
   var ap = map2(F2(function (x,
   y) {
      return x(y);
   }));
   var moore = F2(function (o,k) {
      return A2(Moore,
      o,
      function ($) {
         return $Maybe.Just(k($));
      });
   });
   var echo = function (o) {
      return A2(moore,o,echo);
   };
   var echo$ = echo($Maybe.Nothing);
   var changesBy = function (f) {
      return function () {
         var g = F2(function (prev,
         cur) {
            return function () {
               var _v44 = {ctor: "_Tuple2"
                          ,_0: prev
                          ,_1: cur};
               switch (_v44.ctor)
               {case "_Tuple2":
                  switch (_v44._0.ctor)
                    {case "Just":
                       switch (_v44._1.ctor)
                         {case "Just": return A2(f,
                              _v44._0._0,
                              _v44._1._0);}
                         break;}
                    break;}
               return $Maybe.Nothing;
            }();
         });
         var cur = A2(contramap,
         $Maybe.Just,
         echo$);
         var prev = A2(contramap,
         $Maybe.Just,
         A2(emit,$Maybe.Nothing,echo$));
         return A3(map2,g,prev,cur);
      }();
   };
   var map = F2(function (f,_v49) {
      return function () {
         switch (_v49.ctor)
         {case "Moore": return A2(Moore,
              f(_v49._0),
              function (i) {
                 return A2($Maybe.map,
                 map(f),
                 _v49._1(i));
              });}
         _U.badCase($moduleName,
         "on line 70, column 21 to 62");
      }();
   });
   var split = map(function (b) {
      return {ctor: "_Tuple2"
             ,_0: b
             ,_1: b};
   });
   var pipe = F2(function (_v53,
   _v54) {
      return function () {
         switch (_v54.ctor)
         {case "Moore":
            return function () {
                 switch (_v53.ctor)
                 {case "Moore":
                    return function () {
                         var step = function (a) {
                            return A2($Maybe.andThen,
                            _v53._1(a),
                            function (m1) {
                               return A2($Maybe.map,
                               pipe(m1),
                               _v54._1(_v53._0));
                            });
                         };
                         return A2(Moore,_v54._0,step);
                      }();}
                 _U.badCase($moduleName,
                 "between lines 74 and 75");
              }();}
         _U.badCase($moduleName,
         "between lines 74 and 75");
      }();
   });
   var pipe$ = F2(function (m1,f) {
      return A2(pipe,
      m1,
      f(extract(m1)));
   });
   var pipe1 = F2(function (_v61,
   _v62) {
      return function () {
         switch (_v62.ctor)
         {case "Moore":
            return function () {
                 switch (_v61.ctor)
                 {case "Moore":
                    switch (_v61._0.ctor)
                      {case "_Tuple2":
                         return function () {
                              var step = function (a) {
                                 return A2($Maybe.andThen,
                                 _v61._1(a),
                                 function (m1) {
                                    return A2($Maybe.map,
                                    pipe1(m1),
                                    _v62._1(_v61._0._0));
                                 });
                              };
                              return A2(Moore,
                              {ctor: "_Tuple2"
                              ,_0: _v62._0
                              ,_1: _v61._0._1},
                              step);
                           }();}
                      break;}
                 _U.badCase($moduleName,
                 "between lines 82 and 83");
              }();}
         _U.badCase($moduleName,
         "between lines 82 and 83");
      }();
   });
   var pipe2 = F2(function (i,c) {
      return function () {
         var swap = function (_v71) {
            return function () {
               switch (_v71.ctor)
               {case "_Tuple2":
                  return {ctor: "_Tuple2"
                         ,_0: _v71._1
                         ,_1: _v71._0};}
               _U.badCase($moduleName,
               "on line 87, column 21 to 24");
            }();
         };
         return A2(map,
         swap,
         A2(pipe1,A2(map,swap,i),c));
      }();
   });
   var spike = F3(function (b,
   bquiet,
   k1) {
      return function () {
         var k = function (a) {
            return $Maybe.oneOf(_L.fromArray([k1(a)
                                             ,$Maybe.Just(A2(Moore,
                                             bquiet,
                                             k1))]));
         };
         return A2(Moore,b,k);
      }();
   });
   var unit = function (o) {
      return A2(Moore,
      o,
      $Basics.always($Maybe.Nothing));
   };
   _elm.Elmz.Moore.values = {_op: _op
                            ,Moore: Moore
                            ,ap: ap
                            ,changesBy: changesBy
                            ,contramap: contramap
                            ,duplicate: duplicate
                            ,echo: echo
                            ,echo$: echo$
                            ,emit: emit
                            ,extract: extract
                            ,feed: feed
                            ,feeds: feeds
                            ,focus: focus
                            ,loop: loop
                            ,map2: map2
                            ,moore: moore
                            ,map: map
                            ,pipe: pipe
                            ,pipe$: pipe$
                            ,pipe1: pipe1
                            ,pipe2: pipe2
                            ,spike: spike
                            ,split: split
                            ,step: step
                            ,transform: transform
                            ,unit: unit};
   return _elm.Elmz.Moore.values;
};
Elm.Elmz = Elm.Elmz || {};
Elm.Elmz.Movement = Elm.Elmz.Movement || {};
Elm.Elmz.Movement.make = function (_elm) {
   "use strict";
   _elm.Elmz = _elm.Elmz || {};
   _elm.Elmz.Movement = _elm.Elmz.Movement || {};
   if (_elm.Elmz.Movement.values)
   return _elm.Elmz.Movement.values;
   var _op = {},
   _N = Elm.Native,
   _U = _N.Utils.make(_elm),
   _L = _N.List.make(_elm),
   $moduleName = "Elmz.Movement",
   $Basics = Elm.Basics.make(_elm),
   $Elmz$Signal = Elm.Elmz.Signal.make(_elm),
   $Keyboard = Elm.Keyboard.make(_elm),
   $Maybe = Elm.Maybe.make(_elm),
   $Signal = Elm.Signal.make(_elm),
   $Time = Elm.Time.make(_elm);
   var interpretD1 = F2(function (_v0,
   i) {
      return function () {
         switch (_v0.ctor)
         {case "D1": return function () {
                 switch (_v0._0.ctor)
                 {case "Negative": return i - 1;
                    case "Positive": return i + 1;
                    case "Zero": return i;}
                 _U.badCase($moduleName,
                 "between lines 38 and 43");
              }();}
         _U.badCase($moduleName,
         "between lines 38 and 43");
      }();
   });
   var D3 = F3(function (a,b,c) {
      return {ctor: "D3"
             ,_0: a
             ,_1: b
             ,_2: c};
   });
   var D2 = F2(function (a,b) {
      return {ctor: "D2"
             ,_0: a
             ,_1: b};
   });
   var D1 = function (a) {
      return {ctor: "D1",_0: a};
   };
   var xy_y = function (_v4) {
      return function () {
         switch (_v4.ctor)
         {case "D2": return D1(_v4._1);}
         _U.badCase($moduleName,
         "on line 32, column 17 to 21");
      }();
   };
   var Negative = {ctor: "Negative"};
   var Positive = {ctor: "Positive"};
   var movement1 = function (t) {
      return t ? Positive : Negative;
   };
   var d1b = function (t) {
      return D1(movement1(t));
   };
   var d1b$ = function (s) {
      return A2($Signal._op["<~"],
      d1b,
      s);
   };
   var moveD1 = F4(function (mover,
   reset,
   base,
   movements) {
      return function () {
         var edit = F2(function (_v8,
         s) {
            return function () {
               switch (_v8.ctor)
               {case "D1":
                  return (_U.eq(_v8._0,
                    Positive) ? mover.increment : _U.eq(_v8._0,
                    Negative) ? mover.decrement : $Basics.identity)(s);}
               _U.badCase($moduleName,
               "between lines 93 and 96");
            }();
         });
         return A4($Elmz$Signal.foldpBetween$,
         reset,
         edit,
         base,
         movements);
      }();
   });
   var moveD2 = F4(function (mover,
   reset,
   base,
   movements) {
      return function () {
         var edit = F2(function (_v11,
         s) {
            return function () {
               switch (_v11.ctor)
               {case "D2":
                  return (_U.eq(_v11._0,
                    Negative) ? mover.left : $Basics.identity)((_U.eq(_v11._0,
                    Positive) ? mover.right : $Basics.identity)((_U.eq(_v11._1,
                    Negative) ? mover.down : $Basics.identity)((_U.eq(_v11._1,
                    Positive) ? mover.up : $Basics.identity)(s))));}
               _U.badCase($moduleName,
               "between lines 106 and 110");
            }();
         });
         return A4($Elmz$Signal.foldpBetween$,
         reset,
         edit,
         base,
         movements);
      }();
   });
   var Zero = {ctor: "Zero"};
   var sign = function (i) {
      return _U.eq(i,
      0) ? Zero : _U.cmp(i,
      0) < 0 ? Negative : _U.cmp(i,
      0) > 0 ? Positive : _U.badIf($moduleName,
      "between lines 18 and 20");
   };
   var inverseSign = function (i) {
      return sign(0 - i);
   };
   var downUp = A2($Signal.map,
   function ($) {
      return D1(inverseSign(function (_) {
         return _.y;
      }($)));
   },
   $Keyboard.arrows);
   var d1 = function ($) {
      return D1(sign($));
   };
   var upDown = A2($Signal.map,
   function ($) {
      return d1(function (_) {
         return _.y;
      }($));
   },
   $Keyboard.arrows);
   var d1$ = function (s) {
      return A2($Signal._op["<~"],
      d1,
      s);
   };
   var d2 = function (_v15) {
      return function () {
         return A2(D2,
         sign(_v15.x),
         sign(_v15.y));
      }();
   };
   var d2$ = function (s) {
      return A2($Signal._op["<~"],
      d2,
      s);
   };
   var d3 = function (_v17) {
      return function () {
         return A3(D3,
         sign(_v17.x),
         sign(_v17.y),
         sign(_v17.z));
      }();
   };
   var negateD1 = function (_v19) {
      return function () {
         switch (_v19.ctor)
         {case "D1":
            return D1(function () {
                 switch (_v19._0.ctor)
                 {case "Negative":
                    return Positive;
                    case "Positive":
                    return Negative;
                    case "Zero": return Zero;}
                 _U.badCase($moduleName,
                 "between lines 26 and 29");
              }());}
         _U.badCase($moduleName,
         "between lines 26 and 29");
      }();
   };
   var d3mod = F2(function (_v23,
   modifier) {
      return function () {
         return modifier ? A3(D3,
         sign(_v23.x),
         Zero,
         sign(_v23.y)) : A3(D3,
         sign(_v23.x),
         sign(_v23.y),
         Zero);
      }();
   });
   var d3mod$ = F2(function (xy,
   modifier) {
      return A2($Signal._op["~"],
      A2($Signal._op["<~"],d3mod,xy),
      modifier);
   });
   var nonzeroD1 = function (_v25) {
      return function () {
         switch (_v25.ctor)
         {case "D1":
            return !_U.eq(_v25._0,Zero);}
         _U.badCase($moduleName,
         "on line 73, column 20 to 29");
      }();
   };
   var repeatD1 = function (d1) {
      return A4($Elmz$Signal.repeatAfterIf,
      300 * $Time.millisecond,
      20,
      nonzeroD1,
      d1);
   };
   var nonzeroD2 = function (_v28) {
      return function () {
         switch (_v28.ctor)
         {case "D2":
            return !_U.eq(_v28._0,
              Zero) || !_U.eq(_v28._1,Zero);}
         _U.badCase($moduleName,
         "on line 76, column 22 to 44");
      }();
   };
   var repeatD2 = function (d2) {
      return A4($Elmz$Signal.repeatAfterIf,
      300 * $Time.millisecond,
      20,
      nonzeroD2,
      d2);
   };
   var nonzeroD3 = function (_v32) {
      return function () {
         switch (_v32.ctor)
         {case "D3":
            return !_U.eq(_v32._0,
              Zero) || (!_U.eq(_v32._1,
              Zero) || !_U.eq(_v32._2,Zero));}
         _U.badCase($moduleName,
         "on line 79, column 24 to 59");
      }();
   };
   var repeatD3 = function (d3) {
      return A4($Elmz$Signal.repeatAfterIf,
      300 * $Time.millisecond,
      20,
      nonzeroD3,
      d3);
   };
   _elm.Elmz.Movement.values = {_op: _op
                               ,Zero: Zero
                               ,Positive: Positive
                               ,Negative: Negative
                               ,D1: D1
                               ,D2: D2
                               ,D3: D3
                               ,sign: sign
                               ,inverseSign: inverseSign
                               ,negateD1: negateD1
                               ,xy_y: xy_y
                               ,d1: d1
                               ,interpretD1: interpretD1
                               ,upDown: upDown
                               ,downUp: downUp
                               ,d1b: d1b
                               ,d2: d2
                               ,movement1: movement1
                               ,d3: d3
                               ,d3mod: d3mod
                               ,d1$: d1$
                               ,d1b$: d1b$
                               ,d2$: d2$
                               ,d3mod$: d3mod$
                               ,nonzeroD1: nonzeroD1
                               ,nonzeroD2: nonzeroD2
                               ,nonzeroD3: nonzeroD3
                               ,repeatD1: repeatD1
                               ,repeatD2: repeatD2
                               ,repeatD3: repeatD3
                               ,moveD1: moveD1
                               ,moveD2: moveD2};
   return _elm.Elmz.Movement.values;
};
Elm.Elmz = Elm.Elmz || {};
Elm.Elmz.Parser = Elm.Elmz.Parser || {};
Elm.Elmz.Parser.make = function (_elm) {
   "use strict";
   _elm.Elmz = _elm.Elmz || {};
   _elm.Elmz.Parser = _elm.Elmz.Parser || {};
   if (_elm.Elmz.Parser.values)
   return _elm.Elmz.Parser.values;
   var _op = {},
   _N = Elm.Native,
   _U = _N.Utils.make(_elm),
   _L = _N.List.make(_elm),
   $moduleName = "Elmz.Parser",
   $Basics = Elm.Basics.make(_elm),
   $List = Elm.List.make(_elm),
   $Maybe = Elm.Maybe.make(_elm),
   $Regex = Elm.Regex.make(_elm),
   $Result = Elm.Result.make(_elm),
   $String = Elm.String.make(_elm);
   var reset = function (s) {
      return {_: {}
             ,offset: 0
             ,string: A2($String.dropLeft,
             s.offset,
             s.string)};
   };
   var regex = F2(function (r,s) {
      return function () {
         var compiled = $Regex.regex(r);
         return function () {
            var _v0 = reset(s);
            return function () {
               var _v1 = A2($List.map,
               function (_) {
                  return _.match;
               },
               A3($Regex.find,
               $Regex.AtMost(1),
               compiled,
               _v0.string));
               switch (_v1.ctor)
               {case "::":
                  return $Result.Ok({ctor: "_Tuple2"
                                    ,_0: _v1._0
                                    ,_1: $String.length(_v1._0)});
                  case "[]":
                  return $Result.Err({_: {}
                                     ,committed: false
                                     ,message: _L.fromArray([])});}
               _U.badCase($moduleName,
               "between lines 120 and 122");
            }();
         }();
      }();
   });
   var digits = regex("\\d+");
   var token = F2(function (t,s) {
      return A2($String.startsWith,
      t,
      A2($String.dropLeft,
      s.offset,
      s.string)) ? $Result.Ok({ctor: "_Tuple2"
                              ,_0: t
                              ,_1: $String.length(t)}) : $Result.Err({_: {}
                                                                     ,committed: false
                                                                     ,message: _L.fromArray([A2($Basics._op["++"],
                                                                     "expected ",
                                                                     t)])});
   });
   var satisfy = F2(function (f,
   s) {
      return function () {
         var sub = A3($String.slice,
         s.offset,
         A2($Basics.min,
         $String.length(s.string),
         s.offset + 1),
         s.string);
         return A2($String.all,
         f,
         sub) && _U.cmp(s.offset,
         $String.length(s.string)) < 0 ? $Result.Ok({ctor: "_Tuple2"
                                                    ,_0: sub
                                                    ,_1: 1}) : $Result.Err({_: {}
                                                                           ,committed: false
                                                                           ,message: _L.fromArray([])});
      }();
   });
   var symbol = function (c) {
      return satisfy(F2(function (x,
      y) {
         return _U.eq(x,y);
      })(c));
   };
   var or = F3(function (p,p2,s) {
      return function () {
         var _v4 = p(s);
         switch (_v4.ctor)
         {case "Err":
            return _v4._0.committed ? $Result.Err(_v4._0) : p2(s);
            case "Ok":
            return $Result.Ok(_v4._0);}
         _U.badCase($moduleName,
         "between lines 68 and 70");
      }();
   });
   var label = F3(function (lbl,
   p,
   s) {
      return function () {
         var _v7 = p(s);
         switch (_v7.ctor)
         {case "Err":
            return $Result.Err(_U.replace([["message"
                                           ,_L.fromArray([lbl])]],
              _v7._0));
            case "Ok":
            return $Result.Ok(_v7._0);}
         _U.badCase($moduleName,
         "between lines 63 and 65");
      }();
   });
   var scope = F3(function (lbl,
   p,
   s) {
      return function () {
         var _v10 = p(s);
         switch (_v10.ctor)
         {case "Err":
            return $Result.Err(_U.replace([["message"
                                           ,A2($List._op["::"],
                                           lbl,
                                           _v10._0.message)]],
              _v10._0));
            case "Ok":
            return $Result.Ok(_v10._0);}
         _U.badCase($moduleName,
         "between lines 58 and 60");
      }();
   });
   var attempt = F2(function (p,
   s) {
      return function () {
         var _v13 = p(s);
         switch (_v13.ctor)
         {case "Err":
            return $Result.Err(_U.replace([["committed"
                                           ,false]],
              _v13._0));
            case "Ok":
            return $Result.Ok(_v13._0);}
         _U.badCase($moduleName,
         "between lines 53 and 55");
      }();
   });
   var commit = F2(function (p,s) {
      return function () {
         var _v16 = p(s);
         switch (_v16.ctor)
         {case "Err":
            return $Result.Err(_U.replace([["committed"
                                           ,true]],
              _v16._0));}
         return _v16;
      }();
   });
   var andThen = F3(function (p,
   f,
   s) {
      return function () {
         var _v18 = p(s);
         switch (_v18.ctor)
         {case "Err":
            return $Result.Err(_v18._0);
            case "Ok": switch (_v18._0.ctor)
              {case "_Tuple2":
                 return function () {
                      var _v23 = A2(f,
                      _v18._0._0,
                      _U.replace([["offset"
                                  ,s.offset + _v18._0._1]],
                      s));
                      switch (_v23.ctor)
                      {case "Err":
                         return $Result.Err(_v23._0);
                         case "Ok": switch (_v23._0.ctor)
                           {case "_Tuple2":
                              return $Result.Ok({ctor: "_Tuple2"
                                                ,_0: _v23._0._0
                                                ,_1: _v18._0._1 + _v23._0._1});}
                           break;}
                      _U.badCase($moduleName,
                      "between lines 43 and 45");
                   }();}
              break;}
         _U.badCase($moduleName,
         "between lines 41 and 45");
      }();
   });
   var map = F3(function (f,p,s) {
      return function () {
         var _v28 = p(s);
         switch (_v28.ctor)
         {case "Err":
            return $Result.Err(_v28._0);
            case "Ok": switch (_v28._0.ctor)
              {case "_Tuple2":
                 return $Result.Ok({ctor: "_Tuple2"
                                   ,_0: f(_v28._0._0)
                                   ,_1: _v28._0._1});}
              break;}
         _U.badCase($moduleName,
         "between lines 23 and 25");
      }();
   });
   _op["<$>"] = map;
   var ap = F2(function (f,a) {
      return A2(andThen,
      f,
      function (f) {
         return A2(map,f,a);
      });
   });
   _op["<*>"] = ap;
   _op["<$"] = F2(function (a,p) {
      return A2(map,
      $Basics.always(a),
      p);
   });
   var fail = function (s) {
      return $Result.Err({_: {}
                         ,committed: false
                         ,message: _L.fromArray([])});
   };
   var choice = A2($List.foldr,
   or,
   fail);
   var unit = F2(function (a,
   _v33) {
      return function () {
         return $Result.Ok({ctor: "_Tuple2"
                           ,_0: a
                           ,_1: 0});
      }();
   });
   var many = function (a) {
      return A2(or,
      A2(andThen,
      a,
      function (hd) {
         return A2(map,
         F2(function (x,y) {
            return A2($List._op["::"],
            x,
            y);
         })(hd),
         many(a));
      }),
      unit(_L.fromArray([])));
   };
   var some = function (a) {
      return A2(_op["<*>"],
      A2(_op["<$>"],
      F2(function (x,y) {
         return A2($List._op["::"],
         x,
         y);
      }),
      a),
      many(a));
   };
   var until1 = function (c) {
      return A2(map,
      $String.concat,
      some(satisfy(F2(function (x,y) {
         return !_U.eq(x,y);
      })(c))));
   };
   var until = function (c) {
      return A2(map,
      $String.concat,
      many(satisfy(F2(function (x,y) {
         return !_U.eq(x,y);
      })(c))));
   };
   var nonnegativeInt = A2(andThen,
   digits,
   function (s) {
      return function () {
         var _v35 = $String.toInt(s);
         switch (_v35.ctor)
         {case "Err": return A2(label,
              _v35._0,
              fail);
            case "Ok":
            return unit(_v35._0);}
         _U.badCase($moduleName,
         "between lines 101 and 103");
      }();
   });
   var $float = A2(andThen,
   regex("[+-]?\\d+\\.\\d+"),
   function (s) {
      return function () {
         var _v38 = $String.toFloat(s);
         switch (_v38.ctor)
         {case "Err": return A2(label,
              _v38._0,
              fail);
            case "Ok":
            return unit(_v38._0);}
         _U.badCase($moduleName,
         "between lines 111 and 113");
      }();
   });
   var optional = function (p) {
      return A2(or,
      A2(map,$Maybe.Just,p),
      unit($Maybe.Nothing));
   };
   var $int = A2(andThen,
   optional(symbol(_U.chr("-"))),
   function (sign) {
      return function () {
         switch (sign.ctor)
         {case "Just": return A2(map,
              $Basics.negate,
              nonnegativeInt);
            case "Nothing":
            return nonnegativeInt;}
         _U.badCase($moduleName,
         "between lines 106 and 108");
      }();
   });
   _op["<*"] = F2(function (a,b) {
      return A2(_op["<*>"],
      A2(_op["<*>"],
      unit($Basics.always),
      a),
      b);
   });
   _op["*>"] = F2(function (a,b) {
      return A2(_op["<*>"],
      A2(_op["<*>"],
      unit(F2(function (_v43,b) {
         return function () {
            return b;
         }();
      })),
      a),
      b);
   });
   var parse = F2(function (p,s) {
      return function () {
         var _v45 = p({_: {}
                      ,offset: 0
                      ,string: s});
         switch (_v45.ctor)
         {case "Err":
            return $Result.Err(A2($String.join,
              "\n",
              _v45._0.message));
            case "Ok": switch (_v45._0.ctor)
              {case "_Tuple2":
                 return $Result.Ok(_v45._0._0);}
              break;}
         _U.badCase($moduleName,
         "between lines 12 and 14");
      }();
   });
   var Status = F2(function (a,b) {
      return {_: {}
             ,committed: b
             ,message: a};
   });
   _elm.Elmz.Parser.values = {_op: _op
                             ,Status: Status
                             ,parse: parse
                             ,unit: unit
                             ,fail: fail
                             ,map: map
                             ,many: many
                             ,some: some
                             ,andThen: andThen
                             ,commit: commit
                             ,attempt: attempt
                             ,scope: scope
                             ,label: label
                             ,or: or
                             ,choice: choice
                             ,ap: ap
                             ,satisfy: satisfy
                             ,symbol: symbol
                             ,token: token
                             ,reset: reset
                             ,digits: digits
                             ,nonnegativeInt: nonnegativeInt
                             ,$int: $int
                             ,$float: $float
                             ,optional: optional
                             ,regex: regex
                             ,until: until
                             ,until1: until1};
   return _elm.Elmz.Parser.values;
};
Elm.Elmz = Elm.Elmz || {};
Elm.Elmz.Selection1D = Elm.Elmz.Selection1D || {};
Elm.Elmz.Selection1D.make = function (_elm) {
   "use strict";
   _elm.Elmz = _elm.Elmz || {};
   _elm.Elmz.Selection1D = _elm.Elmz.Selection1D || {};
   if (_elm.Elmz.Selection1D.values)
   return _elm.Elmz.Selection1D.values;
   var _op = {},
   _N = Elm.Native,
   _U = _N.Utils.make(_elm),
   _L = _N.List.make(_elm),
   $moduleName = "Elmz.Selection1D",
   $Basics = Elm.Basics.make(_elm),
   $Elmz$Layout = Elm.Elmz.Layout.make(_elm),
   $Elmz$Moore = Elm.Elmz.Moore.make(_elm),
   $Elmz$Movement = Elm.Elmz.Movement.make(_elm),
   $List = Elm.List.make(_elm),
   $Maybe = Elm.Maybe.make(_elm);
   var index = F2(function (i,l) {
      return function () {
         var _v0 = A2($List.drop,i,l);
         switch (_v0.ctor)
         {case "::":
            return $Maybe.Just(_v0._0);}
         return $Maybe.Nothing;
      }();
   });
   var indexOf = F2(function (f,
   l) {
      return index(0)($List.filterMap(function (_v3) {
         return function () {
            switch (_v3.ctor)
            {case "_Tuple2":
               return _v3._1 ? $Maybe.Just(_v3._0) : $Maybe.Nothing;}
            _U.badCase($moduleName,
            "on line 75, column 41 to 70");
         }();
      })(A2($List.indexedMap,
      F2(function (i,a) {
         return {ctor: "_Tuple2"
                ,_0: i
                ,_1: f(a)};
      }),
      l)));
   });
   var In = F2(function (a,b) {
      return {_: {}
             ,event: a
             ,layout: b};
   });
   var Out = F2(function (a,b) {
      return {_: {}
             ,index: b
             ,region: a};
   });
   var model = function () {
      var region = F2(function (index,
      layout) {
         return A2($Elmz$Layout.selectableLub,
         $Basics.always(true),
         A4($Elmz$Layout.region,
         F2(function (x,y) {
            return _U.cmp(x,y) < 1;
         }),
         $Maybe.withDefault(-1),
         layout,
         index));
      });
      var novalues = function (_v7) {
         return function () {
            return function () {
               var _v9 = _v7.event;
               switch (_v9.ctor)
               {case "Just":
                  switch (_v9._0.ctor)
                    {case "Values":
                       return $List.isEmpty(_v9._0._0) ? $Maybe.Nothing : $Maybe.Just(A2($Elmz$Moore.Moore,
                         {ctor: "_Tuple2"
                         ,_0: A2(region,0,_v7.layout)
                         ,_1: $Maybe.Just(0)},
                         A2(interactive,0,_v9._0._0)));}
                    break;}
               return $Maybe.Nothing;
            }();
         }();
      };
      var interactive = F3(function (ind,
      values,
      _v12) {
         return function () {
            return function () {
               var limitExclusive = $List.length(values);
               var m2 = A2($Maybe.andThen,
               _v12.event,
               function (event) {
                  return function () {
                     switch (event.ctor)
                     {case "Mouse":
                        switch (event._0.ctor)
                          {case "_Tuple2":
                             return A2($Maybe.andThen,
                               A2($Elmz$Layout.leafAtPoint,
                               _v12.layout,
                               A2($Elmz$Layout.Pt,
                               event._0._0,
                               event._0._1)),
                               function (i) {
                                  return A2($Maybe.andThen,
                                  i,
                                  function (i) {
                                     return _U.eq(i,
                                     ind) ? $Maybe.Nothing : $Maybe.Just(A2($Elmz$Moore.Moore,
                                     {ctor: "_Tuple2"
                                     ,_0: A2(region,i,_v12.layout)
                                     ,_1: $Maybe.Just(i)},
                                     A2(interactive,i,values)));
                                  });
                               });}
                          break;
                        case "Move":
                        switch (event._0.ctor)
                          {case "D1": return function () {
                                  var index$ = function () {
                                     switch (event._0._0.ctor)
                                     {case "Negative":
                                        return A2($Basics.max,
                                          0,
                                          ind - 1);
                                        case "Positive":
                                        return A2($Basics.max,
                                          A2($Basics.min,
                                          limitExclusive - 1,
                                          ind + 1),
                                          0);
                                        case "Zero": return ind;}
                                     _U.badCase($moduleName,
                                     "between lines 40 and 44");
                                  }();
                                  return _U.eq(ind,
                                  index$) ? $Maybe.Nothing : $Maybe.Just(A2($Elmz$Moore.Moore,
                                  {ctor: "_Tuple2"
                                  ,_0: A2(region,
                                  index$,
                                  _v12.layout)
                                  ,_1: $Maybe.Just(index$)},
                                  A2(interactive,index$,values)));
                               }();}
                          break;
                        case "Values":
                        return _U.eq(event._0,
                          values) ? $Maybe.Nothing : function () {
                             var _v22 = A2(index,
                             ind,
                             values);
                             switch (_v22.ctor)
                             {case "Just":
                                return function () {
                                     var ind$ = A2($Maybe.withDefault,
                                     0,
                                     A2(indexOf,
                                     F2(function (x,y) {
                                        return _U.eq(x,y);
                                     })(_v22._0),
                                     event._0));
                                     return $List.isEmpty(event._0) ? $Maybe.Just(state0) : $Maybe.Just(A2($Elmz$Moore.Moore,
                                     {ctor: "_Tuple2"
                                     ,_0: A2(region,ind$,_v12.layout)
                                     ,_1: $Maybe.Just(ind$)},
                                     A2(interactive,ind$,event._0)));
                                  }();
                                case "Nothing":
                                return $Maybe.Just(A2($Elmz$Moore.feed,
                                  _v12,
                                  state0));}
                             _U.badCase($moduleName,
                             "between lines 51 and 58");
                          }();}
                     _U.badCase($moduleName,
                     "between lines 37 and 58");
                  }();
               });
               return function () {
                  switch (m2.ctor)
                  {case "Just":
                     return $Maybe.Just(m2._0);
                     case "Nothing":
                     return $Maybe.Just(A2($Elmz$Moore.Moore,
                       {ctor: "_Tuple2"
                       ,_0: A2(region,ind,_v12.layout)
                       ,_1: $Maybe.Just(ind)},
                       A2(interactive,ind,values)));}
                  _U.badCase($moduleName,
                  "between lines 58 and 62");
               }();
            }();
         }();
      });
      var state0 = A2($Elmz$Moore.Moore,
      {ctor: "_Tuple2"
      ,_0: $Maybe.Nothing
      ,_1: $Maybe.Nothing},
      novalues);
      return $Elmz$Moore.map(function (_v26) {
         return function () {
            switch (_v26.ctor)
            {case "_Tuple2": return A2(Out,
                 _v26._0,
                 _v26._1);}
            _U.badCase($moduleName,
            "on line 66, column 38 to 45");
         }();
      })(state0);
   }();
   var Values = function (a) {
      return {ctor: "Values"
             ,_0: a};
   };
   var Mouse = function (a) {
      return {ctor: "Mouse",_0: a};
   };
   var Move = function (a) {
      return {ctor: "Move",_0: a};
   };
   _elm.Elmz.Selection1D.values = {_op: _op
                                  ,Move: Move
                                  ,Mouse: Mouse
                                  ,Values: Values
                                  ,Out: Out
                                  ,In: In
                                  ,model: model
                                  ,index: index
                                  ,indexOf: indexOf};
   return _elm.Elmz.Selection1D.values;
};
Elm.Elmz = Elm.Elmz || {};
Elm.Elmz.Signal = Elm.Elmz.Signal || {};
Elm.Elmz.Signal.make = function (_elm) {
   "use strict";
   _elm.Elmz = _elm.Elmz || {};
   _elm.Elmz.Signal = _elm.Elmz.Signal || {};
   if (_elm.Elmz.Signal.values)
   return _elm.Elmz.Signal.values;
   var _op = {},
   _N = Elm.Native,
   _U = _N.Utils.make(_elm),
   _L = _N.List.make(_elm),
   $moduleName = "Elmz.Signal",
   $Basics = Elm.Basics.make(_elm),
   $Debug = Elm.Debug.make(_elm),
   $Elmz$Maybe = Elm.Elmz.Maybe.make(_elm),
   $Keyboard = Elm.Keyboard.make(_elm),
   $List = Elm.List.make(_elm),
   $Maybe = Elm.Maybe.make(_elm),
   $Mouse = Elm.Mouse.make(_elm),
   $Result = Elm.Result.make(_elm),
   $Set = Elm.Set.make(_elm),
   $Signal = Elm.Signal.make(_elm),
   $Time = Elm.Time.make(_elm);
   var zip = $Signal.map2(F2(function (v0,
   v1) {
      return {ctor: "_Tuple2"
             ,_0: v0
             ,_1: v1};
   }));
   var ups = function (s) {
      return A3($Signal.filter,
      $Basics.identity,
      false,
      s);
   };
   var tuple2 = F2(function (s,
   s2) {
      return A2($Signal._op["~"],
      A2($Signal._op["<~"],
      F2(function (v0,v1) {
         return {ctor: "_Tuple2"
                ,_0: v0
                ,_1: v1};
      }),
      s),
      s2);
   });
   var toggle = F2(function (b,s) {
      return A3($Signal.foldp,
      F2(function (_v0,b) {
         return function () {
            return $Basics.not(b);
         }();
      }),
      b,
      s);
   });
   var tagEvent = F2(function (event,
   behavior) {
      return function () {
         var ae = A2($Signal.merge,
         A2($Signal._op["<~"],
         $Maybe.Just,
         event),
         A2($Signal._op["<~"],
         $Basics.always($Maybe.Nothing),
         behavior));
         return A2(zip,ae,behavior);
      }();
   });
   var sampleOnMerge = F2(function (a,
   b) {
      return A3($Signal.map2,
      $Basics.always,
      b,
      a);
   });
   var steady = F2(function (t,s) {
      return A2($Signal.sampleOn,
      A2($Signal.filter,
      $Basics.not,
      false)(A2($Time.since,t,s)),
      s);
   });
   var repeatAfterIf = F4(function (time,
   fps,
   f,
   s) {
      return function () {
         var repeatable = A2($Signal.map,
         f,
         s);
         var delayedRep = $Signal.map($Basics.not)($Time.since(time)(A2($Signal.filter,
         $Basics.identity,
         false)(repeatable)));
         var resetDelay = A2($Signal.merge,
         A2($Signal._op["<~"],
         $Basics.always(false),
         s),
         delayedRep);
         var repeats = A2($Time.fpsWhen,
         fps,
         A2($Signal._op["~"],
         A2($Signal._op["<~"],
         F2(function (x,y) {
            return x && y;
         }),
         repeatable),
         $Signal.dropRepeats(resetDelay)));
         return A2($Signal.sampleOn,
         repeats,
         s);
      }();
   });
   var mask = $Signal.map2(F2(function (b,
   a) {
      return b ? $Maybe.Just(a) : $Maybe.Nothing;
   }));
   var map2r = F3(function (f,
   a,
   b) {
      return A2($Signal.sampleOn,
      b,
      A3($Signal.map2,f,a,b));
   });
   var keyChordEvent = F2(function (k,
   codes) {
      return function () {
         var hazTehCodez = function (pressed) {
            return A2($List.all,
            function (k) {
               return A2($Set.member,
               k,
               pressed);
            },
            codes);
         };
         return A2($Signal.map,
         $Basics.always(k),
         ups(A2($Signal.map,
         hazTehCodez,
         $Keyboard.keysDown)));
      }();
   });
   var keyEvent = F2(function (k,
   code) {
      return A2($Signal.map,
      $Basics.always(k),
      ups($Keyboard.isDown(code)));
   });
   var justs = function (s) {
      return A3($Signal.filter,
      function ($) {
         return $Maybe.withDefault(false)($Maybe.map($Basics.always(true))($));
      },
      $Maybe.Nothing,
      s);
   };
   var fromMaybe = $Signal.map2($Elmz$Maybe.fromMaybe);
   var flattenMaybe = function (s) {
      return A2(fromMaybe,
      $Signal.constant($Maybe.Nothing),
      s);
   };
   var foldpWhen = F4(function (cond,
   f,
   z,
   a) {
      return function () {
         var go = F2(function (_v2,
         b) {
            return function () {
               switch (_v2.ctor)
               {case "_Tuple2":
                  return _v2._0 ? A2(f,
                    _v2._1,
                    b) : z;}
               _U.badCase($moduleName,
               "on line 108, column 23 to 48");
            }();
         });
         return A3($Signal.foldp,
         go,
         z,
         A3($Signal.map2,
         F2(function (v0,v1) {
            return {ctor: "_Tuple2"
                   ,_0: v0
                   ,_1: v1};
         }),
         cond,
         a));
      }();
   });
   var foldpWhen$ = F4(function (cond,
   f,
   z,
   a) {
      return function () {
         var go = F2(function (_v6,
         b) {
            return function () {
               switch (_v6.ctor)
               {case "_Tuple2":
                  return function () {
                       switch (b.ctor)
                       {case "Just":
                          return $Maybe.Just(A2(f,
                            _v6._0,
                            b._0));
                          case "Nothing":
                          return $Maybe.Just(A2(f,
                            _v6._0,
                            _v6._1));}
                       _U.badCase($moduleName,
                       "between lines 115 and 117");
                    }();}
               _U.badCase($moduleName,
               "between lines 115 and 117");
            }();
         });
         return A4(foldpWhen,
         cond,
         go,
         $Maybe.Nothing,
         A3($Signal.map2,
         F2(function (v0,v1) {
            return {ctor: "_Tuple2"
                   ,_0: v0
                   ,_1: v1};
         }),
         a,
         z));
      }();
   });
   var foldpBetween = F4(function (reset,
   f,
   z,
   a) {
      return function () {
         var f$ = F2(function (a,b) {
            return function () {
               switch (a.ctor)
               {case "Just": return A2(f,
                    a._0,
                    b);
                  case "Nothing": return z;}
               _U.badCase($moduleName,
               "between lines 90 and 93");
            }();
         });
         return A3($Signal.foldp,
         f$,
         z,
         A2($Signal.merge,
         A2($Signal.map,
         $Basics.always($Maybe.Nothing),
         reset),
         A2($Signal.map,$Maybe.Just,a)));
      }();
   });
   var foldpBetween$ = F4(function (reset,
   f,
   z,
   a) {
      return function () {
         var f$ = F2(function (_v14,
         b) {
            return function () {
               switch (_v14.ctor)
               {case "_Tuple2":
                  return function () {
                       switch (b.ctor)
                       {case "Just":
                          return $Maybe.Just(A2(f,
                            _v14._0,
                            b._0));
                          case "Nothing":
                          return $Maybe.Just(A2(f,
                            _v14._0,
                            _v14._1));}
                       _U.badCase($moduleName,
                       "between lines 99 and 102");
                    }();}
               _U.badCase($moduleName,
               "between lines 99 and 102");
            }();
         });
         return A4(foldpBetween,
         reset,
         f$,
         $Maybe.Nothing,
         A3($Signal.map2,
         F2(function (v0,v1) {
            return {ctor: "_Tuple2"
                   ,_0: v0
                   ,_1: v1};
         }),
         a,
         z));
      }();
   });
   var clickLocations = A2($Signal.sampleOn,
   $Mouse.clicks,
   A3($Signal.map2,
   $Basics.always,
   $Mouse.position,
   $Mouse.clicks));
   var changed = function (a) {
      return A2($Signal.merge,
      A2($Signal._op["<~"],
      $Basics.always(false),
      A2($Time.delay,0,a)),
      A2($Signal._op["<~"],
      $Basics.always(true),
      a));
   };
   var events = function (s) {
      return function () {
         var f = F2(function (b,a) {
            return b ? $Maybe.Just(a) : $Maybe.Nothing;
         });
         return A3($Signal.map2,
         f,
         changed(s),
         s);
      }();
   };
   var unchanged = function (a) {
      return A2($Signal.map,
      $Basics.not,
      changed(a));
   };
   var choose = F3(function (cond,
   t,
   f) {
      return function () {
         var go = F3(function (cond,
         a,
         a2) {
            return cond ? a : a2;
         });
         return A2($Signal._op["~"],
         A2($Signal._op["~"],
         A2($Signal._op["<~"],go,cond),
         t),
         f);
      }();
   });
   var during = F2(function (a,b) {
      return A3($Signal.map2,
      $Basics.always,
      a,
      A2($Signal.sampleOn,
      $Signal.constant({ctor: "_Tuple0"}),
      b));
   });
   var downs = function (s) {
      return A3($Signal.filter,
      $Basics.not,
      true,
      s);
   };
   var delay = F2(function (h,s) {
      return function () {
         var go = F2(function (a,
         _v20) {
            return function () {
               return {_: {}
                      ,cur: _v20.prev
                      ,prev: a};
            }();
         });
         return $Signal.map(function (_) {
            return _.cur;
         })(A3($Signal.foldp,
         go,
         {_: {},cur: h,prev: h},
         s));
      }();
   });
   var doubleWithin = F2(function (within,
   s) {
      return function () {
         var f = F2(function (t1,t2) {
            return function () {
               switch (t1.ctor)
               {case "Just":
                  return _U.cmp(t2 - t1._0,
                    within) < 0 ? true : false;
                  case "Nothing": return false;}
               _U.badCase($moduleName,
               "between lines 55 and 58");
            }();
         });
         var ts = A2($Signal.map,
         $Basics.fst,
         $Time.timestamp(s));
         return $Signal.map($Basics.always({ctor: "_Tuple0"}))(A2($Signal.filter,
         $Basics.identity,
         false)(A3($Signal.map2,
         f,
         A2(delay,
         $Maybe.Nothing,
         A2($Signal.map,$Maybe.Just,ts)),
         ts)));
      }();
   });
   var replaceFirst = F2(function (a0,
   s) {
      return function () {
         var f = F2(function (replace,
         a) {
            return replace ? A2($Debug.log,
            A2($Basics._op["++"],
            "replacing ",
            $Basics.toString(a)),
            a0) : a;
         });
         var first = A2(delay,
         true,
         A2($Signal.map,
         $Basics.always(false),
         s));
         return A3($Signal.map2,
         f,
         first,
         s);
      }();
   });
   var transitionsBy = F2(function (same,
   s) {
      return function () {
         var f = F2(function (prev,
         cur) {
            return function () {
               switch (prev.ctor)
               {case "Just": return A2(same,
                    prev._0,
                    cur);
                  case "Nothing": return true;}
               _U.badCase($moduleName,
               "between lines 189 and 192");
            }();
         });
         return A3($Signal.map2,
         f,
         A2(delay,
         $Maybe.Nothing,
         A2($Signal.map,$Maybe.Just,s)),
         s);
      }();
   });
   var transitions = transitionsBy(F2(function (x,
   y) {
      return _U.eq(x,y);
   }));
   var count = function (a) {
      return A3($Signal.foldp,
      F2(function (_v26,n) {
         return function () {
            return n + 1;
         }();
      }),
      0,
      a);
   };
   var alternate = F3(function (left,
   right,
   input) {
      return function () {
         var r = $Result.toMaybe;
         var rs = justs(A2($Signal._op["<~"],
         r,
         input));
         var l = function (e) {
            return function () {
               switch (e.ctor)
               {case "Err":
                  return $Maybe.Just(e._0);
                  case "Ok":
                  return $Maybe.Nothing;}
               _U.badCase($moduleName,
               "between lines 29 and 31");
            }();
         };
         var ls = justs(A2($Signal._op["<~"],
         l,
         input));
         return A2($Signal.merge,
         left(ls),
         right(rs));
      }();
   });
   var accumulateWhen = F2(function (cond,
   a) {
      return $Signal.map($List.reverse)(A4(foldpWhen,
      cond,
      F2(function (x,y) {
         return A2($List._op["::"],
         x,
         y);
      }),
      _L.fromArray([]),
      a));
   });
   _elm.Elmz.Signal.values = {_op: _op
                             ,accumulateWhen: accumulateWhen
                             ,alternate: alternate
                             ,count: count
                             ,delay: delay
                             ,downs: downs
                             ,doubleWithin: doubleWithin
                             ,during: during
                             ,choose: choose
                             ,changed: changed
                             ,clickLocations: clickLocations
                             ,events: events
                             ,foldpBetween: foldpBetween
                             ,foldpBetween$: foldpBetween$
                             ,foldpWhen: foldpWhen
                             ,foldpWhen$: foldpWhen$
                             ,fromMaybe: fromMaybe
                             ,flattenMaybe: flattenMaybe
                             ,justs: justs
                             ,keyEvent: keyEvent
                             ,keyChordEvent: keyChordEvent
                             ,map2r: map2r
                             ,mask: mask
                             ,replaceFirst: replaceFirst
                             ,repeatAfterIf: repeatAfterIf
                             ,steady: steady
                             ,sampleOnMerge: sampleOnMerge
                             ,tagEvent: tagEvent
                             ,transitions: transitions
                             ,transitionsBy: transitionsBy
                             ,toggle: toggle
                             ,tuple2: tuple2
                             ,unchanged: unchanged
                             ,ups: ups
                             ,zip: zip};
   return _elm.Elmz.Signal.values;
};
Elm.Elmz = Elm.Elmz || {};
Elm.Elmz.Trie = Elm.Elmz.Trie || {};
Elm.Elmz.Trie.make = function (_elm) {
   "use strict";
   _elm.Elmz = _elm.Elmz || {};
   _elm.Elmz.Trie = _elm.Elmz.Trie || {};
   if (_elm.Elmz.Trie.values)
   return _elm.Elmz.Trie.values;
   var _op = {},
   _N = Elm.Native,
   _U = _N.Utils.make(_elm),
   _L = _N.List.make(_elm),
   $moduleName = "Elmz.Trie",
   $Basics = Elm.Basics.make(_elm),
   $List = Elm.List.make(_elm),
   $Maybe = Elm.Maybe.make(_elm);
   var keys = function (_v0) {
      return function () {
         switch (_v0.ctor)
         {case "Trie":
            return function () {
                 var addroot = function () {
                    switch (_v0._0.ctor)
                    {case "Just":
                       return function (tl) {
                            return A2($List._op["::"],
                            _L.fromArray([]),
                            tl);
                         };
                       case "Nothing":
                       return $Basics.identity;}
                    _U.badCase($moduleName,
                    "between lines 72 and 75");
                 }();
                 var f = function (_v6) {
                    return function () {
                       switch (_v6.ctor)
                       {case "_Tuple2":
                          return A2($List.map,
                            F2(function (x,y) {
                               return A2($List._op["::"],
                               x,
                               y);
                            })(_v6._0),
                            keys(_v6._1));}
                       _U.badCase($moduleName,
                       "on line 71, column 17 to 42");
                    }();
                 };
                 return addroot(A2($List.concatMap,
                 f,
                 _v0._1));
              }();}
         _U.badCase($moduleName,
         "between lines 71 and 75");
      }();
   };
   var lookup = F2(function (k,
   _v10) {
      return function () {
         switch (_v10.ctor)
         {case "Trie":
            return function () {
                 switch (k.ctor)
                 {case "::": return function () {
                         var f = function (_v17) {
                            return function () {
                               switch (_v17.ctor)
                               {case "_Tuple2":
                                  return _U.eq(_v17._0,
                                    k._0) ? $Maybe.Just(_v17._1) : $Maybe.Nothing;}
                               _U.badCase($moduleName,
                               "on line 45, column 27 to 61");
                            }();
                         };
                         return function () {
                            var _v21 = A2($List.filterMap,
                            f,
                            _v10._1);
                            switch (_v21.ctor)
                            {case "::": return A2(lookup,
                                 k._1,
                                 _v21._0);
                               case "[]":
                               return $Maybe.Nothing;}
                            _U.badCase($moduleName,
                            "between lines 46 and 48");
                         }();
                      }();
                    case "[]": return _v10._0;}
                 _U.badCase($moduleName,
                 "between lines 43 and 48");
              }();}
         _U.badCase($moduleName,
         "between lines 43 and 48");
      }();
   });
   var contains = F2(function (k,
   t) {
      return function () {
         var _v24 = A2(lookup,k,t);
         switch (_v24.ctor)
         {case "Just": return true;
            case "Nothing": return false;}
         _U.badCase($moduleName,
         "between lines 65 and 67");
      }();
   });
   var isEmpty = function (t) {
      return function () {
         switch (t.ctor)
         {case "Trie": switch (t._0.ctor)
              {case "Nothing":
                 switch (t._1.ctor)
                   {case "[]": return true;}
                   break;}
              break;}
         return false;
      }();
   };
   var Trie = F2(function (a,b) {
      return {ctor: "Trie"
             ,_0: a
             ,_1: b};
   });
   var empty = A2(Trie,
   $Maybe.Nothing,
   _L.fromArray([]));
   var leaf = function (v) {
      return A2(Trie,
      $Maybe.Just(v),
      _L.fromArray([]));
   };
   var cons = F2(function (hd,t) {
      return A2(Trie,
      $Maybe.Nothing,
      _L.fromArray([{ctor: "_Tuple2"
                    ,_0: hd
                    ,_1: t}]));
   });
   var set = F2(function (v,_v29) {
      return function () {
         switch (_v29.ctor)
         {case "Trie": return A2(Trie,
              $Maybe.Just(v),
              _v29._1);}
         _U.badCase($moduleName,
         "on line 23, column 21 to 37");
      }();
   });
   var mergeDisjoint = F2(function (_v33,
   _v34) {
      return function () {
         switch (_v34.ctor)
         {case "Trie":
            return function () {
                 switch (_v33.ctor)
                 {case "Trie":
                    return _U.eq(A2(Trie,
                      _v34._0,
                      _v34._1),
                      empty) ? A2(Trie,
                      _v33._0,
                      _v33._1) : _U.eq(A2(Trie,
                      _v33._0,
                      _v33._1),
                      empty) ? A2(Trie,
                      _v34._0,
                      _v34._1) : A2(Trie,
                      $Maybe.oneOf(_L.fromArray([_v33._0
                                                ,_v34._0])),
                      A2($Basics._op["++"],
                      _v33._1,
                      _v34._1));}
                 _U.badCase($moduleName,
                 "between lines 27 and 29");
              }();}
         _U.badCase($moduleName,
         "between lines 27 and 29");
      }();
   });
   var insert = F3(function (k,
   v,
   _v41) {
      return function () {
         switch (_v41.ctor)
         {case "Trie":
            return function () {
                 switch (k.ctor)
                 {case "::": return function () {
                         var $ = A2($List.partition,
                         function (_v48) {
                            return function () {
                               switch (_v48.ctor)
                               {case "_Tuple2":
                                  return _U.eq(_v48._0,k._0);}
                               _U.badCase($moduleName,
                               "on line 37, column 55 to 62");
                            }();
                         },
                         _v41._1),
                         yes = $._0,
                         no = $._1;
                         return function () {
                            switch (yes.ctor)
                            {case "::": switch (yes._0.ctor)
                                 {case "_Tuple2": return A2(Trie,
                                      _v41._0,
                                      A2($List._op["::"],
                                      {ctor: "_Tuple2"
                                      ,_0: k._0
                                      ,_1: A3(insert,
                                      k._1,
                                      v,
                                      yes._0._1)},
                                      no));}
                                 break;
                               case "[]": return A2(Trie,
                                 _v41._0,
                                 A2($List._op["::"],
                                 {ctor: "_Tuple2"
                                 ,_0: k._0
                                 ,_1: A3(insert,k._1,v,empty)},
                                 no));}
                            _U.badCase($moduleName,
                            "between lines 38 and 40");
                         }();
                      }();
                    case "[]": return A2(Trie,
                      $Maybe.Just(v),
                      _v41._1);}
                 _U.badCase($moduleName,
                 "between lines 35 and 40");
              }();}
         _U.badCase($moduleName,
         "between lines 35 and 40");
      }();
   });
   var fromList = function (kvs) {
      return A3($List.foldl,
      F2(function (_v57,acc) {
         return function () {
            switch (_v57.ctor)
            {case "_Tuple2":
               return A3(insert,
                 _v57._0,
                 _v57._1,
                 acc);}
            _U.badCase($moduleName,
            "on line 32, column 42 to 56");
         }();
      }),
      empty,
      kvs);
   };
   var deleteSubtree = F2(function (k,
   _v61) {
      return function () {
         switch (_v61.ctor)
         {case "Trie":
            return function () {
                 switch (k.ctor)
                 {case "::": switch (k._1.ctor)
                      {case "[]": return function () {
                              var f2 = function (_v68) {
                                 return function () {
                                    switch (_v68.ctor)
                                    {case "_Tuple2":
                                       return _U.eq(_v68._0,
                                         k._0) ? $Maybe.Nothing : $Maybe.Just({ctor: "_Tuple2"
                                                                              ,_0: _v68._0
                                                                              ,_1: _v68._1});}
                                    _U.badCase($moduleName,
                                    "on line 53, column 33 to 76");
                                 }();
                              };
                              return A2(Trie,
                              _v61._0,
                              A2($List.filterMap,f2,_v61._1));
                           }();}
                      return function () {
                         var f2 = function (_v72) {
                            return function () {
                               switch (_v72.ctor)
                               {case "_Tuple2":
                                  return _U.eq(_v72._0,
                                    k._0) ? {ctor: "_Tuple2"
                                            ,_0: _v72._0
                                            ,_1: A2(deleteSubtree,
                                            k._1,
                                            _v72._1)} : {ctor: "_Tuple2"
                                                        ,_0: _v72._0
                                                        ,_1: _v72._1};}
                               _U.badCase($moduleName,
                               "on line 55, column 32 to 89");
                            }();
                         };
                         return A2(Trie,
                         _v61._0,
                         A2($List.map,f2,_v61._1));
                      }();
                    case "[]": return empty;}
                 _U.badCase($moduleName,
                 "between lines 51 and 56");
              }();}
         _U.badCase($moduleName,
         "between lines 51 and 56");
      }();
   });
   var $delete = F2(function (k,
   _v76) {
      return function () {
         switch (_v76.ctor)
         {case "Trie":
            return function () {
                 switch (k.ctor)
                 {case "::": return function () {
                         var f2 = function (_v83) {
                            return function () {
                               switch (_v83.ctor)
                               {case "_Tuple2":
                                  return _U.eq(_v83._0,
                                    k._0) ? {ctor: "_Tuple2"
                                            ,_0: _v83._0
                                            ,_1: A2($delete,
                                            k._1,
                                            _v83._1)} : {ctor: "_Tuple2"
                                                        ,_0: _v83._0
                                                        ,_1: _v83._1};}
                               _U.badCase($moduleName,
                               "on line 61, column 32 to 82");
                            }();
                         };
                         return A2(Trie,
                         _v76._0,
                         A2($List.map,f2,_v76._1));
                      }();
                    case "[]": return A2(Trie,
                      $Maybe.Nothing,
                      _v76._1);}
                 _U.badCase($moduleName,
                 "between lines 59 and 62");
              }();}
         _U.badCase($moduleName,
         "between lines 59 and 62");
      }();
   });
   _elm.Elmz.Trie.values = {_op: _op
                           ,Trie: Trie
                           ,empty: empty
                           ,isEmpty: isEmpty
                           ,leaf: leaf
                           ,cons: cons
                           ,set: set
                           ,mergeDisjoint: mergeDisjoint
                           ,fromList: fromList
                           ,insert: insert
                           ,lookup: lookup
                           ,deleteSubtree: deleteSubtree
                           ,$delete: $delete
                           ,contains: contains
                           ,keys: keys};
   return _elm.Elmz.Trie.values;
};
Elm.Graphics = Elm.Graphics || {};
Elm.Graphics.Collage = Elm.Graphics.Collage || {};
Elm.Graphics.Collage.make = function (_elm) {
   "use strict";
   _elm.Graphics = _elm.Graphics || {};
   _elm.Graphics.Collage = _elm.Graphics.Collage || {};
   if (_elm.Graphics.Collage.values)
   return _elm.Graphics.Collage.values;
   var _op = {},
   _N = Elm.Native,
   _U = _N.Utils.make(_elm),
   _L = _N.List.make(_elm),
   $moduleName = "Graphics.Collage",
   $Basics = Elm.Basics.make(_elm),
   $Color = Elm.Color.make(_elm),
   $Graphics$Element = Elm.Graphics.Element.make(_elm),
   $List = Elm.List.make(_elm),
   $Native$Graphics$Collage = Elm.Native.Graphics.Collage.make(_elm),
   $Text = Elm.Text.make(_elm),
   $Transform2D = Elm.Transform2D.make(_elm);
   var ngon = F2(function (n,r) {
      return function () {
         var m = $Basics.toFloat(n);
         var t = 2 * $Basics.pi / m;
         var f = function (i) {
            return {ctor: "_Tuple2"
                   ,_0: r * $Basics.cos(t * i)
                   ,_1: r * $Basics.sin(t * i)};
         };
         return A2($List.map,
         f,
         _L.range(0,m - 1));
      }();
   });
   var oval = F2(function (w,h) {
      return function () {
         var hh = h / 2;
         var hw = w / 2;
         var n = 50;
         var t = 2 * $Basics.pi / n;
         var f = function (i) {
            return {ctor: "_Tuple2"
                   ,_0: hw * $Basics.cos(t * i)
                   ,_1: hh * $Basics.sin(t * i)};
         };
         return A2($List.map,
         f,
         _L.range(0,n - 1));
      }();
   });
   var circle = function (r) {
      return A2(oval,2 * r,2 * r);
   };
   var rect = F2(function (w,h) {
      return function () {
         var hh = h / 2;
         var hw = w / 2;
         return _L.fromArray([{ctor: "_Tuple2"
                              ,_0: 0 - hw
                              ,_1: 0 - hh}
                             ,{ctor: "_Tuple2"
                              ,_0: 0 - hw
                              ,_1: hh}
                             ,{ctor: "_Tuple2",_0: hw,_1: hh}
                             ,{ctor: "_Tuple2"
                              ,_0: hw
                              ,_1: 0 - hh}]);
      }();
   });
   var square = function (n) {
      return A2(rect,n,n);
   };
   var polygon = function (points) {
      return points;
   };
   var segment = F2(function (p1,
   p2) {
      return _L.fromArray([p1,p2]);
   });
   var path = function (ps) {
      return ps;
   };
   var collage = $Native$Graphics$Collage.collage;
   var alpha = F2(function (a,f) {
      return _U.replace([["alpha"
                         ,a]],
      f);
   });
   var rotate = F2(function (t,f) {
      return _U.replace([["theta"
                         ,f.theta + t]],
      f);
   });
   var scale = F2(function (s,f) {
      return _U.replace([["scale"
                         ,f.scale * s]],
      f);
   });
   var moveY = F2(function (y,f) {
      return _U.replace([["y"
                         ,f.y + y]],
      f);
   });
   var moveX = F2(function (x,f) {
      return _U.replace([["x"
                         ,f.x + x]],
      f);
   });
   var move = F2(function (_v0,f) {
      return function () {
         switch (_v0.ctor)
         {case "_Tuple2":
            return _U.replace([["x"
                               ,f.x + _v0._0]
                              ,["y",f.y + _v0._1]],
              f);}
         _U.badCase($moduleName,
         "on line 226, column 7 to 35");
      }();
   });
   var form = function (f) {
      return {_: {}
             ,alpha: 1
             ,form: f
             ,scale: 1
             ,theta: 0
             ,x: 0
             ,y: 0};
   };
   var Fill = function (a) {
      return {ctor: "Fill",_0: a};
   };
   var Line = function (a) {
      return {ctor: "Line",_0: a};
   };
   var FGroup = F2(function (a,b) {
      return {ctor: "FGroup"
             ,_0: a
             ,_1: b};
   });
   var group = function (fs) {
      return form(A2(FGroup,
      $Transform2D.identity,
      fs));
   };
   var groupTransform = F2(function (matrix,
   fs) {
      return form(A2(FGroup,
      matrix,
      fs));
   });
   var FElement = function (a) {
      return {ctor: "FElement"
             ,_0: a};
   };
   var toForm = function (e) {
      return form(FElement(e));
   };
   var FImage = F4(function (a,
   b,
   c,
   d) {
      return {ctor: "FImage"
             ,_0: a
             ,_1: b
             ,_2: c
             ,_3: d};
   });
   var sprite = F4(function (w,
   h,
   pos,
   src) {
      return form(A4(FImage,
      w,
      h,
      pos,
      src));
   });
   var FText = function (a) {
      return {ctor: "FText",_0: a};
   };
   var text = function (t) {
      return form(FText(t));
   };
   var FOutlinedText = F2(function (a,
   b) {
      return {ctor: "FOutlinedText"
             ,_0: a
             ,_1: b};
   });
   var outlinedText = F2(function (ls,
   t) {
      return form(A2(FOutlinedText,
      ls,
      t));
   });
   var FShape = F2(function (a,b) {
      return {ctor: "FShape"
             ,_0: a
             ,_1: b};
   });
   var fill = F2(function (style,
   shape) {
      return form(A2(FShape,
      Fill(style),
      shape));
   });
   var outlined = F2(function (style,
   shape) {
      return form(A2(FShape,
      Line(style),
      shape));
   });
   var FPath = F2(function (a,b) {
      return {ctor: "FPath"
             ,_0: a
             ,_1: b};
   });
   var traced = F2(function (style,
   path) {
      return form(A2(FPath,
      style,
      path));
   });
   var LineStyle = F6(function (a,
   b,
   c,
   d,
   e,
   f) {
      return {_: {}
             ,cap: c
             ,color: a
             ,dashOffset: f
             ,dashing: e
             ,join: d
             ,width: b};
   });
   var Clipped = {ctor: "Clipped"};
   var Sharp = function (a) {
      return {ctor: "Sharp",_0: a};
   };
   var Smooth = {ctor: "Smooth"};
   var Padded = {ctor: "Padded"};
   var Round = {ctor: "Round"};
   var Flat = {ctor: "Flat"};
   var defaultLine = {_: {}
                     ,cap: Flat
                     ,color: $Color.black
                     ,dashOffset: 0
                     ,dashing: _L.fromArray([])
                     ,join: Sharp(10)
                     ,width: 1};
   var solid = function (clr) {
      return _U.replace([["color"
                         ,clr]],
      defaultLine);
   };
   var dashed = function (clr) {
      return _U.replace([["color"
                         ,clr]
                        ,["dashing"
                         ,_L.fromArray([8,4])]],
      defaultLine);
   };
   var dotted = function (clr) {
      return _U.replace([["color"
                         ,clr]
                        ,["dashing"
                         ,_L.fromArray([3,3])]],
      defaultLine);
   };
   var Grad = function (a) {
      return {ctor: "Grad",_0: a};
   };
   var gradient = F2(function (grad,
   shape) {
      return A2(fill,
      Grad(grad),
      shape);
   });
   var Texture = function (a) {
      return {ctor: "Texture"
             ,_0: a};
   };
   var textured = F2(function (src,
   shape) {
      return A2(fill,
      Texture(src),
      shape);
   });
   var Solid = function (a) {
      return {ctor: "Solid",_0: a};
   };
   var filled = F2(function (color,
   shape) {
      return A2(fill,
      Solid(color),
      shape);
   });
   var Form = F6(function (a,
   b,
   c,
   d,
   e,
   f) {
      return {_: {}
             ,alpha: e
             ,form: f
             ,scale: b
             ,theta: a
             ,x: c
             ,y: d};
   });
   _elm.Graphics.Collage.values = {_op: _op
                                  ,collage: collage
                                  ,toForm: toForm
                                  ,filled: filled
                                  ,textured: textured
                                  ,gradient: gradient
                                  ,outlined: outlined
                                  ,traced: traced
                                  ,text: text
                                  ,outlinedText: outlinedText
                                  ,move: move
                                  ,moveX: moveX
                                  ,moveY: moveY
                                  ,scale: scale
                                  ,rotate: rotate
                                  ,alpha: alpha
                                  ,group: group
                                  ,groupTransform: groupTransform
                                  ,rect: rect
                                  ,oval: oval
                                  ,square: square
                                  ,circle: circle
                                  ,ngon: ngon
                                  ,polygon: polygon
                                  ,segment: segment
                                  ,path: path
                                  ,solid: solid
                                  ,dashed: dashed
                                  ,dotted: dotted
                                  ,defaultLine: defaultLine
                                  ,Form: Form
                                  ,LineStyle: LineStyle
                                  ,Flat: Flat
                                  ,Round: Round
                                  ,Padded: Padded
                                  ,Smooth: Smooth
                                  ,Sharp: Sharp
                                  ,Clipped: Clipped};
   return _elm.Graphics.Collage.values;
};
Elm.Graphics = Elm.Graphics || {};
Elm.Graphics.Element = Elm.Graphics.Element || {};
Elm.Graphics.Element.make = function (_elm) {
   "use strict";
   _elm.Graphics = _elm.Graphics || {};
   _elm.Graphics.Element = _elm.Graphics.Element || {};
   if (_elm.Graphics.Element.values)
   return _elm.Graphics.Element.values;
   var _op = {},
   _N = Elm.Native,
   _U = _N.Utils.make(_elm),
   _L = _N.List.make(_elm),
   $moduleName = "Graphics.Element",
   $Basics = Elm.Basics.make(_elm),
   $Color = Elm.Color.make(_elm),
   $List = Elm.List.make(_elm),
   $Maybe = Elm.Maybe.make(_elm),
   $Native$Graphics$Element = Elm.Native.Graphics.Element.make(_elm),
   $Text = Elm.Text.make(_elm);
   var DOut = {ctor: "DOut"};
   var outward = DOut;
   var DIn = {ctor: "DIn"};
   var inward = DIn;
   var DRight = {ctor: "DRight"};
   var right = DRight;
   var DLeft = {ctor: "DLeft"};
   var left = DLeft;
   var DDown = {ctor: "DDown"};
   var down = DDown;
   var DUp = {ctor: "DUp"};
   var up = DUp;
   var Position = F4(function (a,
   b,
   c,
   d) {
      return {_: {}
             ,horizontal: a
             ,vertical: b
             ,x: c
             ,y: d};
   });
   var Relative = function (a) {
      return {ctor: "Relative"
             ,_0: a};
   };
   var relative = Relative;
   var Absolute = function (a) {
      return {ctor: "Absolute"
             ,_0: a};
   };
   var absolute = Absolute;
   var N = {ctor: "N"};
   var bottomLeftAt = F2(function (x,
   y) {
      return {_: {}
             ,horizontal: N
             ,vertical: N
             ,x: x
             ,y: y};
   });
   var Z = {ctor: "Z"};
   var middle = {_: {}
                ,horizontal: Z
                ,vertical: Z
                ,x: Relative(0.5)
                ,y: Relative(0.5)};
   var midLeft = _U.replace([["horizontal"
                             ,N]
                            ,["x",Absolute(0)]],
   middle);
   var middleAt = F2(function (x,
   y) {
      return {_: {}
             ,horizontal: Z
             ,vertical: Z
             ,x: x
             ,y: y};
   });
   var midLeftAt = F2(function (x,
   y) {
      return {_: {}
             ,horizontal: N
             ,vertical: Z
             ,x: x
             ,y: y};
   });
   var midBottomAt = F2(function (x,
   y) {
      return {_: {}
             ,horizontal: Z
             ,vertical: N
             ,x: x
             ,y: y};
   });
   var P = {ctor: "P"};
   var topLeft = {_: {}
                 ,horizontal: N
                 ,vertical: P
                 ,x: Absolute(0)
                 ,y: Absolute(0)};
   var bottomLeft = _U.replace([["vertical"
                                ,N]],
   topLeft);
   var topRight = _U.replace([["horizontal"
                              ,P]],
   topLeft);
   var bottomRight = _U.replace([["horizontal"
                                 ,P]],
   bottomLeft);
   var midRight = _U.replace([["horizontal"
                              ,P]],
   midLeft);
   var midTop = _U.replace([["vertical"
                            ,P]
                           ,["y",Absolute(0)]],
   middle);
   var midBottom = _U.replace([["vertical"
                               ,N]],
   midTop);
   var topLeftAt = F2(function (x,
   y) {
      return {_: {}
             ,horizontal: N
             ,vertical: P
             ,x: x
             ,y: y};
   });
   var topRightAt = F2(function (x,
   y) {
      return {_: {}
             ,horizontal: P
             ,vertical: P
             ,x: x
             ,y: y};
   });
   var bottomRightAt = F2(function (x,
   y) {
      return {_: {}
             ,horizontal: P
             ,vertical: N
             ,x: x
             ,y: y};
   });
   var midRightAt = F2(function (x,
   y) {
      return {_: {}
             ,horizontal: P
             ,vertical: Z
             ,x: x
             ,y: y};
   });
   var midTopAt = F2(function (x,
   y) {
      return {_: {}
             ,horizontal: Z
             ,vertical: P
             ,x: x
             ,y: y};
   });
   var justified = $Native$Graphics$Element.block("justify");
   var centered = $Native$Graphics$Element.block("center");
   var rightAligned = $Native$Graphics$Element.block("right");
   var leftAligned = $Native$Graphics$Element.block("left");
   var show = function (value) {
      return leftAligned($Text.monospace($Text.fromString($Basics.toString(value))));
   };
   var Tiled = {ctor: "Tiled"};
   var Cropped = function (a) {
      return {ctor: "Cropped"
             ,_0: a};
   };
   var Fitted = {ctor: "Fitted"};
   var Plain = {ctor: "Plain"};
   var Custom = {ctor: "Custom"};
   var RawHtml = {ctor: "RawHtml"};
   var Spacer = {ctor: "Spacer"};
   var Flow = F2(function (a,b) {
      return {ctor: "Flow"
             ,_0: a
             ,_1: b};
   });
   var Container = F2(function (a,
   b) {
      return {ctor: "Container"
             ,_0: a
             ,_1: b};
   });
   var Image = F4(function (a,
   b,
   c,
   d) {
      return {ctor: "Image"
             ,_0: a
             ,_1: b
             ,_2: c
             ,_3: d};
   });
   var newElement = $Native$Graphics$Element.newElement;
   var image = F3(function (w,
   h,
   src) {
      return A3(newElement,
      w,
      h,
      A4(Image,Plain,w,h,src));
   });
   var fittedImage = F3(function (w,
   h,
   src) {
      return A3(newElement,
      w,
      h,
      A4(Image,Fitted,w,h,src));
   });
   var croppedImage = F4(function (pos,
   w,
   h,
   src) {
      return A3(newElement,
      w,
      h,
      A4(Image,Cropped(pos),w,h,src));
   });
   var tiledImage = F3(function (w,
   h,
   src) {
      return A3(newElement,
      w,
      h,
      A4(Image,Tiled,w,h,src));
   });
   var container = F4(function (w,
   h,
   pos,
   e) {
      return A3(newElement,
      w,
      h,
      A2(Container,pos,e));
   });
   var spacer = F2(function (w,h) {
      return A3(newElement,
      w,
      h,
      Spacer);
   });
   var link = F2(function (href,
   e) {
      return function () {
         var p = e.props;
         return {_: {}
                ,element: e.element
                ,props: _U.replace([["href"
                                    ,href]],
                p)};
      }();
   });
   var tag = F2(function (name,e) {
      return function () {
         var p = e.props;
         return {_: {}
                ,element: e.element
                ,props: _U.replace([["tag"
                                    ,name]],
                p)};
      }();
   });
   var color = F2(function (c,e) {
      return function () {
         var p = e.props;
         return {_: {}
                ,element: e.element
                ,props: _U.replace([["color"
                                    ,$Maybe.Just(c)]],
                p)};
      }();
   });
   var opacity = F2(function (o,
   e) {
      return function () {
         var p = e.props;
         return {_: {}
                ,element: e.element
                ,props: _U.replace([["opacity"
                                    ,o]],
                p)};
      }();
   });
   var height = F2(function (nh,
   e) {
      return function () {
         var p = e.props;
         var props = function () {
            var _v0 = e.element;
            switch (_v0.ctor)
            {case "Image":
               return _U.replace([["width"
                                  ,$Basics.round($Basics.toFloat(_v0._1) / $Basics.toFloat(_v0._2) * $Basics.toFloat(nh))]],
                 p);}
            return p;
         }();
         return {_: {}
                ,element: e.element
                ,props: _U.replace([["height"
                                    ,nh]],
                p)};
      }();
   });
   var width = F2(function (nw,e) {
      return function () {
         var p = e.props;
         var props = function () {
            var _v5 = e.element;
            switch (_v5.ctor)
            {case "Image":
               return _U.replace([["height"
                                  ,$Basics.round($Basics.toFloat(_v5._2) / $Basics.toFloat(_v5._1) * $Basics.toFloat(nw))]],
                 p);
               case "RawHtml":
               return _U.replace([["height"
                                  ,$Basics.snd(A2($Native$Graphics$Element.htmlHeight,
                                  nw,
                                  e.element))]],
                 p);}
            return p;
         }();
         return {_: {}
                ,element: e.element
                ,props: _U.replace([["width"
                                    ,nw]],
                props)};
      }();
   });
   var size = F3(function (w,h,e) {
      return A2(height,
      h,
      A2(width,w,e));
   });
   var sizeOf = function (e) {
      return {ctor: "_Tuple2"
             ,_0: e.props.width
             ,_1: e.props.height};
   };
   var heightOf = function (e) {
      return e.props.height;
   };
   var widthOf = function (e) {
      return e.props.width;
   };
   var above = F2(function (hi,
   lo) {
      return A3(newElement,
      A2($Basics.max,
      widthOf(hi),
      widthOf(lo)),
      heightOf(hi) + heightOf(lo),
      A2(Flow,
      DDown,
      _L.fromArray([hi,lo])));
   });
   var below = F2(function (lo,
   hi) {
      return A3(newElement,
      A2($Basics.max,
      widthOf(hi),
      widthOf(lo)),
      heightOf(hi) + heightOf(lo),
      A2(Flow,
      DDown,
      _L.fromArray([hi,lo])));
   });
   var beside = F2(function (lft,
   rht) {
      return A3(newElement,
      widthOf(lft) + widthOf(rht),
      A2($Basics.max,
      heightOf(lft),
      heightOf(rht)),
      A2(Flow,
      right,
      _L.fromArray([lft,rht])));
   });
   var layers = function (es) {
      return function () {
         var hs = A2($List.map,
         heightOf,
         es);
         var ws = A2($List.map,
         widthOf,
         es);
         return A3(newElement,
         A2($Maybe.withDefault,
         0,
         $List.maximum(ws)),
         A2($Maybe.withDefault,
         0,
         $List.maximum(hs)),
         A2(Flow,DOut,es));
      }();
   };
   var empty = A2(spacer,0,0);
   var flow = F2(function (dir,
   es) {
      return function () {
         var newFlow = F2(function (w,
         h) {
            return A3(newElement,
            w,
            h,
            A2(Flow,dir,es));
         });
         var maxOrZero = function (list) {
            return A2($Maybe.withDefault,
            0,
            $List.maximum(list));
         };
         var hs = A2($List.map,
         heightOf,
         es);
         var ws = A2($List.map,
         widthOf,
         es);
         return _U.eq(es,
         _L.fromArray([])) ? empty : function () {
            switch (dir.ctor)
            {case "DDown":
               return A2(newFlow,
                 maxOrZero(ws),
                 $List.sum(hs));
               case "DIn": return A2(newFlow,
                 maxOrZero(ws),
                 maxOrZero(hs));
               case "DLeft": return A2(newFlow,
                 $List.sum(ws),
                 maxOrZero(hs));
               case "DOut": return A2(newFlow,
                 maxOrZero(ws),
                 maxOrZero(hs));
               case "DRight":
               return A2(newFlow,
                 $List.sum(ws),
                 maxOrZero(hs));
               case "DUp": return A2(newFlow,
                 maxOrZero(ws),
                 $List.sum(hs));}
            _U.badCase($moduleName,
            "between lines 362 and 373");
         }();
      }();
   });
   var Properties = F9(function (a,
   b,
   c,
   d,
   e,
   f,
   g,
   h,
   i) {
      return {_: {}
             ,click: i
             ,color: e
             ,height: c
             ,hover: h
             ,href: f
             ,id: a
             ,opacity: d
             ,tag: g
             ,width: b};
   });
   var Element = F2(function (a,
   b) {
      return {_: {}
             ,element: b
             ,props: a};
   });
   _elm.Graphics.Element.values = {_op: _op
                                  ,image: image
                                  ,fittedImage: fittedImage
                                  ,croppedImage: croppedImage
                                  ,tiledImage: tiledImage
                                  ,leftAligned: leftAligned
                                  ,rightAligned: rightAligned
                                  ,centered: centered
                                  ,justified: justified
                                  ,show: show
                                  ,width: width
                                  ,height: height
                                  ,size: size
                                  ,color: color
                                  ,opacity: opacity
                                  ,link: link
                                  ,tag: tag
                                  ,widthOf: widthOf
                                  ,heightOf: heightOf
                                  ,sizeOf: sizeOf
                                  ,flow: flow
                                  ,up: up
                                  ,down: down
                                  ,left: left
                                  ,right: right
                                  ,inward: inward
                                  ,outward: outward
                                  ,layers: layers
                                  ,above: above
                                  ,below: below
                                  ,beside: beside
                                  ,empty: empty
                                  ,spacer: spacer
                                  ,container: container
                                  ,middle: middle
                                  ,midTop: midTop
                                  ,midBottom: midBottom
                                  ,midLeft: midLeft
                                  ,midRight: midRight
                                  ,topLeft: topLeft
                                  ,topRight: topRight
                                  ,bottomLeft: bottomLeft
                                  ,bottomRight: bottomRight
                                  ,absolute: absolute
                                  ,relative: relative
                                  ,middleAt: middleAt
                                  ,midTopAt: midTopAt
                                  ,midBottomAt: midBottomAt
                                  ,midLeftAt: midLeftAt
                                  ,midRightAt: midRightAt
                                  ,topLeftAt: topLeftAt
                                  ,topRightAt: topRightAt
                                  ,bottomLeftAt: bottomLeftAt
                                  ,bottomRightAt: bottomRightAt
                                  ,Element: Element
                                  ,Position: Position};
   return _elm.Graphics.Element.values;
};
Elm.Graphics = Elm.Graphics || {};
Elm.Graphics.Input = Elm.Graphics.Input || {};
Elm.Graphics.Input.Field = Elm.Graphics.Input.Field || {};
Elm.Graphics.Input.Field.make = function (_elm) {
   "use strict";
   _elm.Graphics = _elm.Graphics || {};
   _elm.Graphics.Input = _elm.Graphics.Input || {};
   _elm.Graphics.Input.Field = _elm.Graphics.Input.Field || {};
   if (_elm.Graphics.Input.Field.values)
   return _elm.Graphics.Input.Field.values;
   var _op = {},
   _N = Elm.Native,
   _U = _N.Utils.make(_elm),
   _L = _N.List.make(_elm),
   $moduleName = "Graphics.Input.Field",
   $Color = Elm.Color.make(_elm),
   $Graphics$Element = Elm.Graphics.Element.make(_elm),
   $Native$Graphics$Input = Elm.Native.Graphics.Input.make(_elm),
   $Signal = Elm.Signal.make(_elm),
   $Text = Elm.Text.make(_elm);
   var email = $Native$Graphics$Input.email;
   var password = $Native$Graphics$Input.password;
   var field = $Native$Graphics$Input.field;
   var Backward = {ctor: "Backward"};
   var Forward = {ctor: "Forward"};
   var Selection = F3(function (a,
   b,
   c) {
      return {_: {}
             ,direction: c
             ,end: b
             ,start: a};
   });
   var Content = F2(function (a,
   b) {
      return {_: {}
             ,selection: b
             ,string: a};
   });
   var noContent = A2(Content,
   "",
   A3(Selection,0,0,Forward));
   var Style = F4(function (a,
   b,
   c,
   d) {
      return {_: {}
             ,highlight: c
             ,outline: b
             ,padding: a
             ,style: d};
   });
   var Highlight = F2(function (a,
   b) {
      return {_: {}
             ,color: a
             ,width: b};
   });
   var noHighlight = A2(Highlight,
   $Color.blue,
   0);
   var Outline = F3(function (a,
   b,
   c) {
      return {_: {}
             ,color: a
             ,radius: c
             ,width: b};
   });
   var Dimensions = F4(function (a,
   b,
   c,
   d) {
      return {_: {}
             ,bottom: d
             ,left: a
             ,right: b
             ,top: c};
   });
   var uniformly = function (n) {
      return A4(Dimensions,
      n,
      n,
      n,
      n);
   };
   var noOutline = A3(Outline,
   $Color.grey,
   uniformly(0),
   0);
   var defaultStyle = {_: {}
                      ,highlight: A2(Highlight,
                      $Color.blue,
                      1)
                      ,outline: A3(Outline,
                      $Color.grey,
                      uniformly(1),
                      2)
                      ,padding: uniformly(4)
                      ,style: $Text.defaultStyle};
   _elm.Graphics.Input.Field.values = {_op: _op
                                      ,uniformly: uniformly
                                      ,Dimensions: Dimensions
                                      ,Outline: Outline
                                      ,noOutline: noOutline
                                      ,Highlight: Highlight
                                      ,noHighlight: noHighlight
                                      ,Style: Style
                                      ,defaultStyle: defaultStyle
                                      ,Content: Content
                                      ,Selection: Selection
                                      ,Forward: Forward
                                      ,Backward: Backward
                                      ,noContent: noContent
                                      ,field: field
                                      ,password: password
                                      ,email: email};
   return _elm.Graphics.Input.Field.values;
};
Elm.Http = Elm.Http || {};
Elm.Http.make = function (_elm) {
   "use strict";
   _elm.Http = _elm.Http || {};
   if (_elm.Http.values)
   return _elm.Http.values;
   var _op = {},
   _N = Elm.Native,
   _U = _N.Utils.make(_elm),
   _L = _N.List.make(_elm),
   $moduleName = "Http",
   $Basics = Elm.Basics.make(_elm),
   $Dict = Elm.Dict.make(_elm),
   $Json$Decode = Elm.Json.Decode.make(_elm),
   $List = Elm.List.make(_elm),
   $Maybe = Elm.Maybe.make(_elm),
   $Native$Http = Elm.Native.Http.make(_elm),
   $Result = Elm.Result.make(_elm),
   $String = Elm.String.make(_elm),
   $Task = Elm.Task.make(_elm),
   $Time = Elm.Time.make(_elm);
   var send = $Native$Http.send;
   var BadResponse = F2(function (a,
   b) {
      return {ctor: "BadResponse"
             ,_0: a
             ,_1: b};
   });
   var UnexpectedPayload = function (a) {
      return {ctor: "UnexpectedPayload"
             ,_0: a};
   };
   var handleResponse = F2(function (handle,
   response) {
      return function () {
         var _v0 = _U.cmp(200,
         response.status) < 1 && _U.cmp(response.status,
         300) < 0;
         switch (_v0)
         {case false:
            return $Task.fail(A2(BadResponse,
              response.status,
              response.statusText));
            case true: return function () {
                 var _v1 = response.value;
                 switch (_v1.ctor)
                 {case "Text":
                    return handle(_v1._0);}
                 return $Task.fail(UnexpectedPayload("Response body is a blob, expecting a string."));
              }();}
         _U.badCase($moduleName,
         "between lines 419 and 426");
      }();
   });
   var NetworkError = {ctor: "NetworkError"};
   var Timeout = {ctor: "Timeout"};
   var promoteError = function (rawError) {
      return function () {
         switch (rawError.ctor)
         {case "RawNetworkError":
            return NetworkError;
            case "RawTimeout":
            return Timeout;}
         _U.badCase($moduleName,
         "between lines 431 and 433");
      }();
   };
   var fromJson = F2(function (decoder,
   response) {
      return function () {
         var decode = function (str) {
            return function () {
               var _v4 = A2($Json$Decode.decodeString,
               decoder,
               str);
               switch (_v4.ctor)
               {case "Err":
                  return $Task.fail(UnexpectedPayload(_v4._0));
                  case "Ok":
                  return $Task.succeed(_v4._0);}
               _U.badCase($moduleName,
               "between lines 409 and 412");
            }();
         };
         return A2($Task.andThen,
         A2($Task.mapError,
         promoteError,
         response),
         handleResponse(decode));
      }();
   });
   var RawNetworkError = {ctor: "RawNetworkError"};
   var RawTimeout = {ctor: "RawTimeout"};
   var Blob = function (a) {
      return {ctor: "Blob",_0: a};
   };
   var Text = function (a) {
      return {ctor: "Text",_0: a};
   };
   var Response = F5(function (a,
   b,
   c,
   d,
   e) {
      return {_: {}
             ,headers: c
             ,status: a
             ,statusText: b
             ,url: d
             ,value: e};
   });
   var defaultSettings = {_: {}
                         ,desiredResponseType: $Maybe.Nothing
                         ,onProgress: $Maybe.Nothing
                         ,onStart: $Maybe.Nothing
                         ,timeout: 0};
   var post = F3(function (decoder,
   url,
   body) {
      return function () {
         var request = {_: {}
                       ,body: body
                       ,headers: _L.fromArray([])
                       ,url: url
                       ,verb: "POST"};
         return A2(fromJson,
         decoder,
         A2(send,
         defaultSettings,
         request));
      }();
   });
   var Settings = F4(function (a,
   b,
   c,
   d) {
      return {_: {}
             ,desiredResponseType: d
             ,onProgress: c
             ,onStart: b
             ,timeout: a};
   });
   var multipart = $Native$Http.multipart;
   var FileData = F3(function (a,
   b,
   c) {
      return {ctor: "FileData"
             ,_0: a
             ,_1: b
             ,_2: c};
   });
   var BlobData = F3(function (a,
   b,
   c) {
      return {ctor: "BlobData"
             ,_0: a
             ,_1: b
             ,_2: c};
   });
   var blobData = BlobData;
   var StringData = F2(function (a,
   b) {
      return {ctor: "StringData"
             ,_0: a
             ,_1: b};
   });
   var stringData = StringData;
   var BodyBlob = function (a) {
      return {ctor: "BodyBlob"
             ,_0: a};
   };
   var BodyFormData = {ctor: "BodyFormData"};
   var ArrayBuffer = {ctor: "ArrayBuffer"};
   var BodyString = function (a) {
      return {ctor: "BodyString"
             ,_0: a};
   };
   var string = BodyString;
   var Empty = {ctor: "Empty"};
   var empty = Empty;
   var getString = function (url) {
      return function () {
         var request = {_: {}
                       ,body: empty
                       ,headers: _L.fromArray([])
                       ,url: url
                       ,verb: "GET"};
         return A2($Task.andThen,
         A2($Task.mapError,
         promoteError,
         A2(send,
         defaultSettings,
         request)),
         handleResponse($Task.succeed));
      }();
   };
   var get = F2(function (decoder,
   url) {
      return function () {
         var request = {_: {}
                       ,body: empty
                       ,headers: _L.fromArray([])
                       ,url: url
                       ,verb: "GET"};
         return A2(fromJson,
         decoder,
         A2(send,
         defaultSettings,
         request));
      }();
   });
   var Request = F4(function (a,
   b,
   c,
   d) {
      return {_: {}
             ,body: d
             ,headers: b
             ,url: c
             ,verb: a};
   });
   var uriDecode = $Native$Http.uriDecode;
   var uriEncode = $Native$Http.uriEncode;
   var queryEscape = function (string) {
      return A2($String.join,
      "+",
      A2($String.split,
      "%20",
      uriEncode(string)));
   };
   var queryPair = function (_v7) {
      return function () {
         switch (_v7.ctor)
         {case "_Tuple2":
            return A2($Basics._op["++"],
              queryEscape(_v7._0),
              A2($Basics._op["++"],
              "=",
              queryEscape(_v7._1)));}
         _U.badCase($moduleName,
         "on line 63, column 3 to 46");
      }();
   };
   var url = F2(function (domain,
   args) {
      return function () {
         switch (args.ctor)
         {case "[]": return domain;}
         return A2($Basics._op["++"],
         domain,
         A2($Basics._op["++"],
         "?",
         A2($String.join,
         "&",
         A2($List.map,queryPair,args))));
      }();
   });
   var TODO_implement_file_in_another_library = {ctor: "TODO_implement_file_in_another_library"};
   var TODO_implement_blob_in_another_library = {ctor: "TODO_implement_blob_in_another_library"};
   _elm.Http.values = {_op: _op
                      ,getString: getString
                      ,get: get
                      ,post: post
                      ,send: send
                      ,url: url
                      ,uriEncode: uriEncode
                      ,uriDecode: uriDecode
                      ,empty: empty
                      ,string: string
                      ,multipart: multipart
                      ,stringData: stringData
                      ,blobData: blobData
                      ,defaultSettings: defaultSettings
                      ,fromJson: fromJson
                      ,Request: Request
                      ,Settings: Settings
                      ,Response: Response
                      ,Text: Text
                      ,Blob: Blob
                      ,Timeout: Timeout
                      ,NetworkError: NetworkError
                      ,UnexpectedPayload: UnexpectedPayload
                      ,BadResponse: BadResponse
                      ,RawTimeout: RawTimeout
                      ,RawNetworkError: RawNetworkError};
   return _elm.Http.values;
};
Elm.Json = Elm.Json || {};
Elm.Json.Decode = Elm.Json.Decode || {};
Elm.Json.Decode.make = function (_elm) {
   "use strict";
   _elm.Json = _elm.Json || {};
   _elm.Json.Decode = _elm.Json.Decode || {};
   if (_elm.Json.Decode.values)
   return _elm.Json.Decode.values;
   var _op = {},
   _N = Elm.Native,
   _U = _N.Utils.make(_elm),
   _L = _N.List.make(_elm),
   $moduleName = "Json.Decode",
   $Array = Elm.Array.make(_elm),
   $Dict = Elm.Dict.make(_elm),
   $Json$Encode = Elm.Json.Encode.make(_elm),
   $List = Elm.List.make(_elm),
   $Maybe = Elm.Maybe.make(_elm),
   $Native$Json = Elm.Native.Json.make(_elm),
   $Result = Elm.Result.make(_elm);
   var tuple8 = $Native$Json.decodeTuple8;
   var tuple7 = $Native$Json.decodeTuple7;
   var tuple6 = $Native$Json.decodeTuple6;
   var tuple5 = $Native$Json.decodeTuple5;
   var tuple4 = $Native$Json.decodeTuple4;
   var tuple3 = $Native$Json.decodeTuple3;
   var tuple2 = $Native$Json.decodeTuple2;
   var tuple1 = $Native$Json.decodeTuple1;
   var succeed = $Native$Json.succeed;
   var fail = $Native$Json.fail;
   var andThen = $Native$Json.andThen;
   var customDecoder = $Native$Json.customDecoder;
   var decodeValue = $Native$Json.runDecoderValue;
   var value = $Native$Json.decodeValue;
   var maybe = $Native$Json.decodeMaybe;
   var $null = $Native$Json.decodeNull;
   var array = $Native$Json.decodeArray;
   var list = $Native$Json.decodeList;
   var bool = $Native$Json.decodeBool;
   var $int = $Native$Json.decodeInt;
   var $float = $Native$Json.decodeFloat;
   var string = $Native$Json.decodeString;
   var oneOf = $Native$Json.oneOf;
   var keyValuePairs = $Native$Json.decodeKeyValuePairs;
   var object8 = $Native$Json.decodeObject8;
   var object7 = $Native$Json.decodeObject7;
   var object6 = $Native$Json.decodeObject6;
   var object5 = $Native$Json.decodeObject5;
   var object4 = $Native$Json.decodeObject4;
   var object3 = $Native$Json.decodeObject3;
   var object2 = $Native$Json.decodeObject2;
   var object1 = $Native$Json.decodeObject1;
   _op[":="] = $Native$Json.decodeField;
   var at = F2(function (fields,
   decoder) {
      return A3($List.foldr,
      F2(function (x,y) {
         return A2(_op[":="],x,y);
      }),
      decoder,
      fields);
   });
   var decodeString = $Native$Json.runDecoderString;
   var map = $Native$Json.decodeObject1;
   var dict = function (decoder) {
      return A2(map,
      $Dict.fromList,
      keyValuePairs(decoder));
   };
   var Decoder = {ctor: "Decoder"};
   _elm.Json.Decode.values = {_op: _op
                             ,Decoder: Decoder
                             ,map: map
                             ,decodeString: decodeString
                             ,at: at
                             ,object1: object1
                             ,object2: object2
                             ,object3: object3
                             ,object4: object4
                             ,object5: object5
                             ,object6: object6
                             ,object7: object7
                             ,object8: object8
                             ,keyValuePairs: keyValuePairs
                             ,dict: dict
                             ,oneOf: oneOf
                             ,string: string
                             ,$float: $float
                             ,$int: $int
                             ,bool: bool
                             ,list: list
                             ,array: array
                             ,$null: $null
                             ,maybe: maybe
                             ,value: value
                             ,decodeValue: decodeValue
                             ,customDecoder: customDecoder
                             ,andThen: andThen
                             ,fail: fail
                             ,succeed: succeed
                             ,tuple1: tuple1
                             ,tuple2: tuple2
                             ,tuple3: tuple3
                             ,tuple4: tuple4
                             ,tuple5: tuple5
                             ,tuple6: tuple6
                             ,tuple7: tuple7
                             ,tuple8: tuple8};
   return _elm.Json.Decode.values;
};
Elm.Json = Elm.Json || {};
Elm.Json.Encode = Elm.Json.Encode || {};
Elm.Json.Encode.make = function (_elm) {
   "use strict";
   _elm.Json = _elm.Json || {};
   _elm.Json.Encode = _elm.Json.Encode || {};
   if (_elm.Json.Encode.values)
   return _elm.Json.Encode.values;
   var _op = {},
   _N = Elm.Native,
   _U = _N.Utils.make(_elm),
   _L = _N.List.make(_elm),
   $moduleName = "Json.Encode",
   $Array = Elm.Array.make(_elm),
   $Native$Json = Elm.Native.Json.make(_elm);
   var list = $Native$Json.encodeList;
   var array = $Native$Json.encodeArray;
   var object = $Native$Json.encodeObject;
   var $null = $Native$Json.encodeNull;
   var bool = $Native$Json.identity;
   var $float = $Native$Json.identity;
   var $int = $Native$Json.identity;
   var string = $Native$Json.identity;
   var encode = $Native$Json.encode;
   var Value = {ctor: "Value"};
   _elm.Json.Encode.values = {_op: _op
                             ,Value: Value
                             ,encode: encode
                             ,string: string
                             ,$int: $int
                             ,$float: $float
                             ,bool: bool
                             ,$null: $null
                             ,object: object
                             ,array: array
                             ,list: list};
   return _elm.Json.Encode.values;
};
Elm.Keyboard = Elm.Keyboard || {};
Elm.Keyboard.make = function (_elm) {
   "use strict";
   _elm.Keyboard = _elm.Keyboard || {};
   if (_elm.Keyboard.values)
   return _elm.Keyboard.values;
   var _op = {},
   _N = Elm.Native,
   _U = _N.Utils.make(_elm),
   _L = _N.List.make(_elm),
   $moduleName = "Keyboard",
   $Basics = Elm.Basics.make(_elm),
   $Native$Keyboard = Elm.Native.Keyboard.make(_elm),
   $Set = Elm.Set.make(_elm),
   $Signal = Elm.Signal.make(_elm);
   var presses = A2($Signal.map,
   function (_) {
      return _.keyCode;
   },
   $Native$Keyboard.presses);
   var toXY = F2(function (_v0,
   keyCodes) {
      return function () {
         return function () {
            var is = function (keyCode) {
               return A2($Set.member,
               keyCode,
               keyCodes) ? 1 : 0;
            };
            return {_: {}
                   ,x: is(_v0.right) - is(_v0.left)
                   ,y: is(_v0.up) - is(_v0.down)};
         }();
      }();
   });
   var Directions = F4(function (a,
   b,
   c,
   d) {
      return {_: {}
             ,down: b
             ,left: c
             ,right: d
             ,up: a};
   });
   var dropMap = F2(function (f,
   signal) {
      return $Signal.dropRepeats(A2($Signal.map,
      f,
      signal));
   });
   var EventInfo = F3(function (a,
   b,
   c) {
      return {_: {}
             ,alt: a
             ,keyCode: c
             ,meta: b};
   });
   var Blur = {ctor: "Blur"};
   var Down = function (a) {
      return {ctor: "Down",_0: a};
   };
   var Up = function (a) {
      return {ctor: "Up",_0: a};
   };
   var rawEvents = $Signal.mergeMany(_L.fromArray([A2($Signal.map,
                                                  Up,
                                                  $Native$Keyboard.ups)
                                                  ,A2($Signal.map,
                                                  Down,
                                                  $Native$Keyboard.downs)
                                                  ,A2($Signal.map,
                                                  $Basics.always(Blur),
                                                  $Native$Keyboard.blurs)]));
   var empty = {_: {}
               ,alt: false
               ,keyCodes: $Set.empty
               ,meta: false};
   var update = F2(function (event,
   model) {
      return function () {
         switch (event.ctor)
         {case "Blur": return empty;
            case "Down": return {_: {}
                                ,alt: event._0.alt
                                ,keyCodes: A2($Set.insert,
                                event._0.keyCode,
                                model.keyCodes)
                                ,meta: event._0.meta};
            case "Up": return {_: {}
                              ,alt: event._0.alt
                              ,keyCodes: A2($Set.remove,
                              event._0.keyCode,
                              model.keyCodes)
                              ,meta: event._0.meta};}
         _U.badCase($moduleName,
         "between lines 68 and 82");
      }();
   });
   var model = A3($Signal.foldp,
   update,
   empty,
   rawEvents);
   var alt = A2(dropMap,
   function (_) {
      return _.alt;
   },
   model);
   var meta = A2(dropMap,
   function (_) {
      return _.meta;
   },
   model);
   var keysDown = A2(dropMap,
   function (_) {
      return _.keyCodes;
   },
   model);
   var arrows = A2(dropMap,
   toXY({_: {}
        ,down: 40
        ,left: 37
        ,right: 39
        ,up: 38}),
   keysDown);
   var wasd = A2(dropMap,
   toXY({_: {}
        ,down: 83
        ,left: 65
        ,right: 68
        ,up: 87}),
   keysDown);
   var isDown = function (keyCode) {
      return A2(dropMap,
      $Set.member(keyCode),
      keysDown);
   };
   var ctrl = isDown(17);
   var shift = isDown(16);
   var space = isDown(32);
   var enter = isDown(13);
   var Model = F3(function (a,
   b,
   c) {
      return {_: {}
             ,alt: a
             ,keyCodes: c
             ,meta: b};
   });
   _elm.Keyboard.values = {_op: _op
                          ,arrows: arrows
                          ,wasd: wasd
                          ,enter: enter
                          ,space: space
                          ,ctrl: ctrl
                          ,shift: shift
                          ,alt: alt
                          ,meta: meta
                          ,isDown: isDown
                          ,keysDown: keysDown
                          ,presses: presses};
   return _elm.Keyboard.values;
};
Elm.List = Elm.List || {};
Elm.List.make = function (_elm) {
   "use strict";
   _elm.List = _elm.List || {};
   if (_elm.List.values)
   return _elm.List.values;
   var _op = {},
   _N = Elm.Native,
   _U = _N.Utils.make(_elm),
   _L = _N.List.make(_elm),
   $moduleName = "List",
   $Basics = Elm.Basics.make(_elm),
   $Maybe = Elm.Maybe.make(_elm),
   $Native$List = Elm.Native.List.make(_elm);
   var sortWith = $Native$List.sortWith;
   var sortBy = $Native$List.sortBy;
   var sort = function (xs) {
      return A2(sortBy,
      $Basics.identity,
      xs);
   };
   var repeat = $Native$List.repeat;
   var drop = $Native$List.drop;
   var take = $Native$List.take;
   var map5 = $Native$List.map5;
   var map4 = $Native$List.map4;
   var map3 = $Native$List.map3;
   var map2 = $Native$List.map2;
   var any = $Native$List.any;
   var all = F2(function (pred,
   xs) {
      return $Basics.not(A2(any,
      function ($) {
         return $Basics.not(pred($));
      },
      xs));
   });
   var foldr = $Native$List.foldr;
   var foldl = $Native$List.foldl;
   var length = function (xs) {
      return A3(foldl,
      F2(function (_v0,i) {
         return function () {
            return i + 1;
         }();
      }),
      0,
      xs);
   };
   var sum = function (numbers) {
      return A3(foldl,
      F2(function (x,y) {
         return x + y;
      }),
      0,
      numbers);
   };
   var product = function (numbers) {
      return A3(foldl,
      F2(function (x,y) {
         return x * y;
      }),
      1,
      numbers);
   };
   var maximum = function (list) {
      return function () {
         switch (list.ctor)
         {case "::":
            return $Maybe.Just(A3(foldl,
              $Basics.max,
              list._0,
              list._1));}
         return $Maybe.Nothing;
      }();
   };
   var minimum = function (list) {
      return function () {
         switch (list.ctor)
         {case "::":
            return $Maybe.Just(A3(foldl,
              $Basics.min,
              list._0,
              list._1));}
         return $Maybe.Nothing;
      }();
   };
   var indexedMap = F2(function (f,
   xs) {
      return A3(map2,
      f,
      _L.range(0,length(xs) - 1),
      xs);
   });
   var member = F2(function (x,
   xs) {
      return A2(any,
      function (a) {
         return _U.eq(a,x);
      },
      xs);
   });
   var isEmpty = function (xs) {
      return function () {
         switch (xs.ctor)
         {case "[]": return true;}
         return false;
      }();
   };
   var tail = function (list) {
      return function () {
         switch (list.ctor)
         {case "::":
            return $Maybe.Just(list._1);
            case "[]":
            return $Maybe.Nothing;}
         _U.badCase($moduleName,
         "between lines 87 and 95");
      }();
   };
   var head = function (list) {
      return function () {
         switch (list.ctor)
         {case "::":
            return $Maybe.Just(list._0);
            case "[]":
            return $Maybe.Nothing;}
         _U.badCase($moduleName,
         "between lines 75 and 84");
      }();
   };
   _op["::"] = $Native$List.cons;
   var map = F2(function (f,xs) {
      return A3(foldr,
      F2(function (x,acc) {
         return A2(_op["::"],
         f(x),
         acc);
      }),
      _L.fromArray([]),
      xs);
   });
   var filter = F2(function (pred,
   xs) {
      return function () {
         var conditionalCons = F2(function (x,
         xs$) {
            return pred(x) ? A2(_op["::"],
            x,
            xs$) : xs$;
         });
         return A3(foldr,
         conditionalCons,
         _L.fromArray([]),
         xs);
      }();
   });
   var maybeCons = F3(function (f,
   mx,
   xs) {
      return function () {
         var _v15 = f(mx);
         switch (_v15.ctor)
         {case "Just":
            return A2(_op["::"],_v15._0,xs);
            case "Nothing": return xs;}
         _U.badCase($moduleName,
         "between lines 179 and 186");
      }();
   });
   var filterMap = F2(function (f,
   xs) {
      return A3(foldr,
      maybeCons(f),
      _L.fromArray([]),
      xs);
   });
   var reverse = function (list) {
      return A3(foldl,
      F2(function (x,y) {
         return A2(_op["::"],x,y);
      }),
      _L.fromArray([]),
      list);
   };
   var scanl = F3(function (f,
   b,
   xs) {
      return function () {
         var scan1 = F2(function (x,
         accAcc) {
            return function () {
               switch (accAcc.ctor)
               {case "::": return A2(_op["::"],
                    A2(f,x,accAcc._0),
                    accAcc);
                  case "[]":
                  return _L.fromArray([]);}
               _U.badCase($moduleName,
               "between lines 148 and 151");
            }();
         });
         return reverse(A3(foldl,
         scan1,
         _L.fromArray([b]),
         xs));
      }();
   });
   var append = F2(function (xs,
   ys) {
      return function () {
         switch (ys.ctor)
         {case "[]": return xs;}
         return A3(foldr,
         F2(function (x,y) {
            return A2(_op["::"],x,y);
         }),
         ys,
         xs);
      }();
   });
   var concat = function (lists) {
      return A3(foldr,
      append,
      _L.fromArray([]),
      lists);
   };
   var concatMap = F2(function (f,
   list) {
      return concat(A2(map,
      f,
      list));
   });
   var partition = F2(function (pred,
   list) {
      return function () {
         var step = F2(function (x,
         _v21) {
            return function () {
               switch (_v21.ctor)
               {case "_Tuple2":
                  return pred(x) ? {ctor: "_Tuple2"
                                   ,_0: A2(_op["::"],x,_v21._0)
                                   ,_1: _v21._1} : {ctor: "_Tuple2"
                                                   ,_0: _v21._0
                                                   ,_1: A2(_op["::"],
                                                   x,
                                                   _v21._1)};}
               _U.badCase($moduleName,
               "between lines 301 and 303");
            }();
         });
         return A3(foldr,
         step,
         {ctor: "_Tuple2"
         ,_0: _L.fromArray([])
         ,_1: _L.fromArray([])},
         list);
      }();
   });
   var unzip = function (pairs) {
      return function () {
         var step = F2(function (_v25,
         _v26) {
            return function () {
               switch (_v26.ctor)
               {case "_Tuple2":
                  return function () {
                       switch (_v25.ctor)
                       {case "_Tuple2":
                          return {ctor: "_Tuple2"
                                 ,_0: A2(_op["::"],
                                 _v25._0,
                                 _v26._0)
                                 ,_1: A2(_op["::"],
                                 _v25._1,
                                 _v26._1)};}
                       _U.badCase($moduleName,
                       "on line 339, column 12 to 28");
                    }();}
               _U.badCase($moduleName,
               "on line 339, column 12 to 28");
            }();
         });
         return A3(foldr,
         step,
         {ctor: "_Tuple2"
         ,_0: _L.fromArray([])
         ,_1: _L.fromArray([])},
         pairs);
      }();
   };
   var intersperse = F2(function (sep,
   xs) {
      return function () {
         switch (xs.ctor)
         {case "::": return function () {
                 var step = F2(function (x,
                 rest) {
                    return A2(_op["::"],
                    sep,
                    A2(_op["::"],x,rest));
                 });
                 var spersed = A3(foldr,
                 step,
                 _L.fromArray([]),
                 xs._1);
                 return A2(_op["::"],
                 xs._0,
                 spersed);
              }();
            case "[]":
            return _L.fromArray([]);}
         _U.badCase($moduleName,
         "between lines 350 and 361");
      }();
   });
   _elm.List.values = {_op: _op
                      ,isEmpty: isEmpty
                      ,length: length
                      ,reverse: reverse
                      ,member: member
                      ,head: head
                      ,tail: tail
                      ,filter: filter
                      ,take: take
                      ,drop: drop
                      ,repeat: repeat
                      ,append: append
                      ,concat: concat
                      ,intersperse: intersperse
                      ,partition: partition
                      ,unzip: unzip
                      ,map: map
                      ,map2: map2
                      ,map3: map3
                      ,map4: map4
                      ,map5: map5
                      ,filterMap: filterMap
                      ,concatMap: concatMap
                      ,indexedMap: indexedMap
                      ,foldr: foldr
                      ,foldl: foldl
                      ,sum: sum
                      ,product: product
                      ,maximum: maximum
                      ,minimum: minimum
                      ,all: all
                      ,any: any
                      ,scanl: scanl
                      ,sort: sort
                      ,sortBy: sortBy
                      ,sortWith: sortWith};
   return _elm.List.values;
};
Elm.Maybe = Elm.Maybe || {};
Elm.Maybe.make = function (_elm) {
   "use strict";
   _elm.Maybe = _elm.Maybe || {};
   if (_elm.Maybe.values)
   return _elm.Maybe.values;
   var _op = {},
   _N = Elm.Native,
   _U = _N.Utils.make(_elm),
   _L = _N.List.make(_elm),
   $moduleName = "Maybe";
   var withDefault = F2(function ($default,
   maybe) {
      return function () {
         switch (maybe.ctor)
         {case "Just": return maybe._0;
            case "Nothing":
            return $default;}
         _U.badCase($moduleName,
         "between lines 45 and 56");
      }();
   });
   var Nothing = {ctor: "Nothing"};
   var oneOf = function (maybes) {
      return function () {
         switch (maybes.ctor)
         {case "::": return function () {
                 switch (maybes._0.ctor)
                 {case "Just": return maybes._0;
                    case "Nothing":
                    return oneOf(maybes._1);}
                 _U.badCase($moduleName,
                 "between lines 64 and 73");
              }();
            case "[]": return Nothing;}
         _U.badCase($moduleName,
         "between lines 59 and 73");
      }();
   };
   var andThen = F2(function (maybeValue,
   callback) {
      return function () {
         switch (maybeValue.ctor)
         {case "Just":
            return callback(maybeValue._0);
            case "Nothing": return Nothing;}
         _U.badCase($moduleName,
         "between lines 110 and 112");
      }();
   });
   var Just = function (a) {
      return {ctor: "Just",_0: a};
   };
   var map = F2(function (f,
   maybe) {
      return function () {
         switch (maybe.ctor)
         {case "Just":
            return Just(f(maybe._0));
            case "Nothing": return Nothing;}
         _U.badCase($moduleName,
         "between lines 76 and 107");
      }();
   });
   _elm.Maybe.values = {_op: _op
                       ,andThen: andThen
                       ,map: map
                       ,withDefault: withDefault
                       ,oneOf: oneOf
                       ,Just: Just
                       ,Nothing: Nothing};
   return _elm.Maybe.values;
};
Elm.Mouse = Elm.Mouse || {};
Elm.Mouse.make = function (_elm) {
   "use strict";
   _elm.Mouse = _elm.Mouse || {};
   if (_elm.Mouse.values)
   return _elm.Mouse.values;
   var _op = {},
   _N = Elm.Native,
   _U = _N.Utils.make(_elm),
   _L = _N.List.make(_elm),
   $moduleName = "Mouse",
   $Basics = Elm.Basics.make(_elm),
   $Native$Mouse = Elm.Native.Mouse.make(_elm),
   $Signal = Elm.Signal.make(_elm);
   var clicks = $Native$Mouse.clicks;
   var isDown = $Native$Mouse.isDown;
   var position = $Native$Mouse.position;
   var x = A2($Signal.map,
   $Basics.fst,
   position);
   var y = A2($Signal.map,
   $Basics.snd,
   position);
   _elm.Mouse.values = {_op: _op
                       ,position: position
                       ,x: x
                       ,y: y
                       ,isDown: isDown
                       ,clicks: clicks};
   return _elm.Mouse.values;
};
Elm.Native.Array = {};
Elm.Native.Array.make = function(localRuntime) {

	localRuntime.Native = localRuntime.Native || {};
	localRuntime.Native.Array = localRuntime.Native.Array || {};
	if (localRuntime.Native.Array.values)
	{
		return localRuntime.Native.Array.values;
	}
	if ('values' in Elm.Native.Array)
	{
		return localRuntime.Native.Array.values = Elm.Native.Array.values;
	}

	var List = Elm.Native.List.make(localRuntime);

	// A RRB-Tree has two distinct data types.
	// Leaf -> "height"  is always 0
	//         "table"   is an array of elements
	// Node -> "height"  is always greater than 0
	//         "table"   is an array of child nodes
	//         "lengths" is an array of accumulated lengths of the child nodes

	// M is the maximal table size. 32 seems fast. E is the allowed increase
	// of search steps when concatting to find an index. Lower values will
	// decrease balancing, but will increase search steps.
	var M = 32;
	var E = 2;

	// An empty array.
	var empty = {
		ctor: "_Array",
		height: 0,
		table: new Array()
	};


	function get(i, array)
	{
		if (i < 0 || i >= length(array))
		{
			throw new Error(
				"Index " + i + " is out of range. Check the length of " +
				"your array first or use getMaybe or getWithDefault.");
		}
		return unsafeGet(i, array);
	}


	function unsafeGet(i, array)
	{
		for (var x = array.height; x > 0; x--)
		{
			var slot = i >> (x * 5);
			while (array.lengths[slot] <= i)
			{
				slot++;
			}
			if (slot > 0)
			{
				i -= array.lengths[slot - 1];
			}
			array = array.table[slot];
		}
		return array.table[i];
	}


	// Sets the value at the index i. Only the nodes leading to i will get
	// copied and updated.
	function set(i, item, array)
	{
		if (i < 0 || length(array) <= i)
		{
			return array;
		}
		return unsafeSet(i, item, array);
	}


	function unsafeSet(i, item, array)
	{
		array = nodeCopy(array);

		if (array.height == 0)
		{
			array.table[i] = item;
		}
		else
		{
			var slot = getSlot(i, array);
			if (slot > 0)
			{
				i -= array.lengths[slot - 1];
			}
			array.table[slot] = unsafeSet(i, item, array.table[slot]);
		}
		return array;
	}


	function initialize(len, f)
	{
		if (len == 0)
		{
			return empty;
		}
		var h = Math.floor( Math.log(len) / Math.log(M) );
		return initialize_(f, h, 0, len);
	}

	function initialize_(f, h, from, to)
	{
		if (h == 0)
		{
			var table = new Array((to - from) % (M + 1));
			for (var i = 0; i < table.length; i++)
			{
			  table[i] = f(from + i);
			}
			return {
				ctor: "_Array",
				height: 0,
				table: table
			};
		}

		var step = Math.pow(M, h);
		var table = new Array(Math.ceil((to - from) / step));
		var lengths = new Array(table.length);
		for (var i = 0; i < table.length; i++)
		{
			table[i] = initialize_(f, h - 1, from + (i * step), Math.min(from + ((i + 1) * step), to));
			lengths[i] = length(table[i]) + (i > 0 ? lengths[i-1] : 0);
		}
		return {
			ctor: "_Array",
			height: h,
			table: table,
			lengths: lengths
		};
	}

	function fromList(list)
	{
		if (list == List.Nil)
		{
			return empty;
		}

		// Allocate M sized blocks (table) and write list elements to it.
		var table = new Array(M);
		var nodes = new Array();
		var i = 0;

		while (list.ctor !== '[]')
		{
			table[i] = list._0;
			list = list._1;
			i++;

			// table is full, so we can push a leaf containing it into the
			// next node.
			if (i == M)
			{
				var leaf = {
					ctor: "_Array",
					height: 0,
					table: table
				};
				fromListPush(leaf, nodes);
				table = new Array(M);
				i = 0;
			}
		}

		// Maybe there is something left on the table.
		if (i > 0)
		{
			var leaf = {
				ctor: "_Array",
				height: 0,
				table: table.splice(0,i)
			};
			fromListPush(leaf, nodes);
		}

		// Go through all of the nodes and eventually push them into higher nodes.
		for (var h = 0; h < nodes.length - 1; h++)
		{
			if (nodes[h].table.length > 0)
			{
				fromListPush(nodes[h], nodes);
			}
		}

		var head = nodes[nodes.length - 1];
		if (head.height > 0 && head.table.length == 1)
		{
			return head.table[0];
		}
		else
		{
			return head;
		}
	}

	// Push a node into a higher node as a child.
	function fromListPush(toPush, nodes)
	{
		var h = toPush.height;

		// Maybe the node on this height does not exist.
		if (nodes.length == h)
		{
			var node = {
				ctor: "_Array",
				height: h + 1,
				table: new Array(),
				lengths: new Array()
			};
			nodes.push(node);
		}

		nodes[h].table.push(toPush);
		var len = length(toPush);
		if (nodes[h].lengths.length > 0)
		{
			len += nodes[h].lengths[nodes[h].lengths.length - 1];
		}
		nodes[h].lengths.push(len);

		if (nodes[h].table.length == M)
		{
			fromListPush(nodes[h], nodes);
			nodes[h] = {
				ctor: "_Array",
				height: h + 1,
				table: new Array(),
				lengths: new Array()
			};
		}
	}

	// Pushes an item via push_ to the bottom right of a tree.
	function push(item, a)
	{
		var pushed = push_(item, a);
		if (pushed !== null)
		{
			return pushed;
		}

		var newTree = create(item, a.height);
		return siblise(a, newTree);
	}

	// Recursively tries to push an item to the bottom-right most
	// tree possible. If there is no space left for the item,
	// null will be returned.
	function push_(item, a)
	{
		// Handle resursion stop at leaf level.
		if (a.height == 0)
		{
			if (a.table.length < M)
			{
				var newA = {
					ctor: "_Array",
					height: 0,
					table: a.table.slice()
				};
				newA.table.push(item);
				return newA;
			}
			else
			{
			  return null;
			}
		}

		// Recursively push
		var pushed = push_(item, botRight(a));

		// There was space in the bottom right tree, so the slot will
		// be updated.
		if (pushed != null)
		{
			var newA = nodeCopy(a);
			newA.table[newA.table.length - 1] = pushed;
			newA.lengths[newA.lengths.length - 1]++;
			return newA;
		}

		// When there was no space left, check if there is space left
		// for a new slot with a tree which contains only the item
		// at the bottom.
		if (a.table.length < M)
		{
			var newSlot = create(item, a.height - 1);
			var newA = nodeCopy(a);
			newA.table.push(newSlot);
			newA.lengths.push(newA.lengths[newA.lengths.length - 1] + length(newSlot));
			return newA;
		}
		else
		{
			return null;
		}
	}

	// Converts an array into a list of elements.
	function toList(a)
	{
		return toList_(List.Nil, a);
	}

	function toList_(list, a)
	{
		for (var i = a.table.length - 1; i >= 0; i--)
		{
			list =
				a.height == 0
					? List.Cons(a.table[i], list)
					: toList_(list, a.table[i]);
		}
		return list;
	}

	// Maps a function over the elements of an array.
	function map(f, a)
	{
		var newA = {
			ctor: "_Array",
			height: a.height,
			table: new Array(a.table.length)
		};
		if (a.height > 0)
		{
			newA.lengths = a.lengths;
		}
		for (var i = 0; i < a.table.length; i++)
		{
			newA.table[i] =
				a.height == 0
					? f(a.table[i])
					: map(f, a.table[i]);
		}
		return newA;
	}

	// Maps a function over the elements with their index as first argument.
	function indexedMap(f, a)
	{
		return indexedMap_(f, a, 0);
	}

	function indexedMap_(f, a, from)
	{
		var newA = {
			ctor: "_Array",
			height: a.height,
			table: new Array(a.table.length)
		};
		if (a.height > 0)
		{
			newA.lengths = a.lengths;
		}
		for (var i = 0; i < a.table.length; i++)
		{
			newA.table[i] =
				a.height == 0
					? A2(f, from + i, a.table[i])
					: indexedMap_(f, a.table[i], i == 0 ? 0 : a.lengths[i - 1]);
		}
		return newA;
	}

	function foldl(f, b, a)
	{
		if (a.height == 0)
		{
			for (var i = 0; i < a.table.length; i++)
			{
				b = A2(f, a.table[i], b);
			}
		}
		else
		{
			for (var i = 0; i < a.table.length; i++)
			{
				b = foldl(f, b, a.table[i]);
			}
		}
		return b;
	}

	function foldr(f, b, a)
	{
		if (a.height == 0)
		{
			for (var i = a.table.length; i--; )
			{
				b = A2(f, a.table[i], b);
			}
		}
		else
		{
			for (var i = a.table.length; i--; )
			{
				b = foldr(f, b, a.table[i]);
			}
		}
		return b;
	}

	// TODO: currently, it slices the right, then the left. This can be
	// optimized.
	function slice(from, to, a)
	{
		if (from < 0)
		{
			from += length(a);
		}
		if (to < 0)
		{
			to += length(a);
		}
		return sliceLeft(from, sliceRight(to, a));
	}

	function sliceRight(to, a)
	{
		if (to == length(a))
		{
			return a;
		}

		// Handle leaf level.
		if (a.height == 0)
		{
			var newA = { ctor:"_Array", height:0 };
			newA.table = a.table.slice(0, to);
			return newA;
		}

		// Slice the right recursively.
		var right = getSlot(to, a);
		var sliced = sliceRight(to - (right > 0 ? a.lengths[right - 1] : 0), a.table[right]);

		// Maybe the a node is not even needed, as sliced contains the whole slice.
		if (right == 0)
		{
			return sliced;
		}

		// Create new node.
		var newA = {
			ctor: "_Array",
			height: a.height,
			table: a.table.slice(0, right),
			lengths: a.lengths.slice(0, right)
		};
		if (sliced.table.length > 0)
		{
			newA.table[right] = sliced;
			newA.lengths[right] = length(sliced) + (right > 0 ? newA.lengths[right - 1] : 0);
		}
		return newA;
	}

	function sliceLeft(from, a)
	{
		if (from == 0)
		{
			return a;
		}

		// Handle leaf level.
		if (a.height == 0)
		{
			var newA = { ctor:"_Array", height:0 };
			newA.table = a.table.slice(from, a.table.length + 1);
			return newA;
		}

		// Slice the left recursively.
		var left = getSlot(from, a);
		var sliced = sliceLeft(from - (left > 0 ? a.lengths[left - 1] : 0), a.table[left]);

		// Maybe the a node is not even needed, as sliced contains the whole slice.
		if (left == a.table.length - 1)
		{
			return sliced;
		}

		// Create new node.
		var newA = {
			ctor: "_Array",
			height: a.height,
			table: a.table.slice(left, a.table.length + 1),
			lengths: new Array(a.table.length - left)
		};
		newA.table[0] = sliced;
		var len = 0;
		for (var i = 0; i < newA.table.length; i++)
		{
			len += length(newA.table[i]);
			newA.lengths[i] = len;
		}

		return newA;
	}

	// Appends two trees.
	function append(a,b)
	{
		if (a.table.length === 0)
		{
			return b;
		}
		if (b.table.length === 0)
		{
			return a;
		}

		var c = append_(a, b);

		// Check if both nodes can be crunshed together.
		if (c[0].table.length + c[1].table.length <= M)
		{
			if (c[0].table.length === 0)
			{
				return c[1];
			}
			if (c[1].table.length === 0)
			{
				return c[0];
			}

			// Adjust .table and .lengths
			c[0].table = c[0].table.concat(c[1].table);
			if (c[0].height > 0)
			{
				var len = length(c[0]);
				for (var i = 0; i < c[1].lengths.length; i++)
				{
					c[1].lengths[i] += len;
				}
				c[0].lengths = c[0].lengths.concat(c[1].lengths);
			}

			return c[0];
		}

		if (c[0].height > 0)
		{
			var toRemove = calcToRemove(a, b);
			if (toRemove > E)
			{
				c = shuffle(c[0], c[1], toRemove);
			}
		}

		return siblise(c[0], c[1]);
	}

	// Returns an array of two nodes; right and left. One node _may_ be empty.
	function append_(a, b)
	{
		if (a.height === 0 && b.height === 0)
		{
			return [a, b];
		}

		if (a.height !== 1 || b.height !== 1)
		{
			if (a.height === b.height)
			{
				a = nodeCopy(a);
				b = nodeCopy(b);
				var appended = append_(botRight(a), botLeft(b));

				insertRight(a, appended[1]);
				insertLeft(b, appended[0]);
			}
			else if (a.height > b.height)
			{
				a = nodeCopy(a);
				var appended = append_(botRight(a), b);

				insertRight(a, appended[0]);
				b = parentise(appended[1], appended[1].height + 1);
			}
			else
			{
				b = nodeCopy(b);
				var appended = append_(a, botLeft(b));

				var left = appended[0].table.length === 0 ? 0 : 1;
				var right = left === 0 ? 1 : 0;
				insertLeft(b, appended[left]);
				a = parentise(appended[right], appended[right].height + 1);
			}
		}

		// Check if balancing is needed and return based on that.
		if (a.table.length === 0 || b.table.length === 0)
		{
			return [a,b];
		}

		var toRemove = calcToRemove(a, b);
		if (toRemove <= E)
		{
			return [a,b];
		}
		return shuffle(a, b, toRemove);
	}

	// Helperfunctions for append_. Replaces a child node at the side of the parent.
	function insertRight(parent, node)
	{
		var index = parent.table.length - 1;
		parent.table[index] = node;
		parent.lengths[index] = length(node)
		parent.lengths[index] += index > 0 ? parent.lengths[index - 1] : 0;
	}

	function insertLeft(parent, node)
	{
		if (node.table.length > 0)
		{
			parent.table[0] = node;
			parent.lengths[0] = length(node);

			var len = length(parent.table[0]);
			for (var i = 1; i < parent.lengths.length; i++)
			{
				len += length(parent.table[i]);
				parent.lengths[i] = len;
			}
		}
		else
		{
			parent.table.shift();
			for (var i = 1; i < parent.lengths.length; i++)
			{
				parent.lengths[i] = parent.lengths[i] - parent.lengths[0];
			}
			parent.lengths.shift();
		}
	}

	// Returns the extra search steps for E. Refer to the paper.
	function calcToRemove(a, b)
	{
		var subLengths = 0;
		for (var i = 0; i < a.table.length; i++)
		{
			subLengths += a.table[i].table.length;
		}
		for (var i = 0; i < b.table.length; i++)
		{
			subLengths += b.table[i].table.length;
		}

		var toRemove = a.table.length + b.table.length
		return toRemove - (Math.floor((subLengths - 1) / M) + 1);
	}

	// get2, set2 and saveSlot are helpers for accessing elements over two arrays.
	function get2(a, b, index)
	{
		return index < a.length
			? a[index]
			: b[index - a.length];
	}

	function set2(a, b, index, value)
	{
		if (index < a.length)
		{
			a[index] = value;
		}
		else
		{
			b[index - a.length] = value;
		}
	}

	function saveSlot(a, b, index, slot)
	{
		set2(a.table, b.table, index, slot);

		var l = (index == 0 || index == a.lengths.length)
			? 0
			: get2(a.lengths, a.lengths, index - 1);

		set2(a.lengths, b.lengths, index, l + length(slot));
	}

	// Creates a node or leaf with a given length at their arrays for perfomance.
	// Is only used by shuffle.
	function createNode(h, length)
	{
		if (length < 0)
		{
			length = 0;
		}
		var a = {
			ctor: "_Array",
			height: h,
			table: new Array(length)
		};
		if (h > 0)
		{
			a.lengths = new Array(length);
		}
		return a;
	}

	// Returns an array of two balanced nodes.
	function shuffle(a, b, toRemove)
	{
		var newA = createNode(a.height, Math.min(M, a.table.length + b.table.length - toRemove));
		var newB = createNode(a.height, newA.table.length - (a.table.length + b.table.length - toRemove));

		// Skip the slots with size M. More precise: copy the slot references
		// to the new node
		var read = 0;
		while (get2(a.table, b.table, read).table.length % M == 0)
		{
			set2(newA.table, newB.table, read, get2(a.table, b.table, read));
			set2(newA.lengths, newB.lengths, read, get2(a.lengths, b.lengths, read));
			read++;
		}

		// Pulling items from left to right, caching in a slot before writing
		// it into the new nodes.
		var write = read;
		var slot = new createNode(a.height - 1, 0);
		var from = 0;

		// If the current slot is still containing data, then there will be at
		// least one more write, so we do not break this loop yet.
		while (read - write - (slot.table.length > 0 ? 1 : 0) < toRemove)
		{
			// Find out the max possible items for copying.
			var source = get2(a.table, b.table, read);
			var to = Math.min(M - slot.table.length, source.table.length)

			// Copy and adjust size table.
			slot.table = slot.table.concat(source.table.slice(from, to));
			if (slot.height > 0)
			{
				var len = slot.lengths.length;
				for (var i = len; i < len + to - from; i++)
				{
					slot.lengths[i] = length(slot.table[i]);
					slot.lengths[i] += (i > 0 ? slot.lengths[i - 1] : 0);
				}
			}

			from += to;

			// Only proceed to next slots[i] if the current one was
			// fully copied.
			if (source.table.length <= to)
			{
				read++; from = 0;
			}

			// Only create a new slot if the current one is filled up.
			if (slot.table.length == M)
			{
				saveSlot(newA, newB, write, slot);
				slot = createNode(a.height - 1,0);
				write++;
			}
		}

		// Cleanup after the loop. Copy the last slot into the new nodes.
		if (slot.table.length > 0)
		{
			saveSlot(newA, newB, write, slot);
			write++;
		}

		// Shift the untouched slots to the left
		while (read < a.table.length + b.table.length )
		{
			saveSlot(newA, newB, write, get2(a.table, b.table, read));
			read++;
			write++;
		}

		return [newA, newB];
	}

	// Navigation functions
	function botRight(a)
	{
		return a.table[a.table.length - 1];
	}
	function botLeft(a)
	{
		return a.table[0];
	}

	// Copies a node for updating. Note that you should not use this if
	// only updating only one of "table" or "lengths" for performance reasons.
	function nodeCopy(a)
	{
		var newA = {
			ctor: "_Array",
			height: a.height,
			table: a.table.slice()
		};
		if (a.height > 0)
		{
			newA.lengths = a.lengths.slice();
		}
		return newA;
	}

	// Returns how many items are in the tree.
	function length(array)
	{
		if (array.height == 0)
		{
			return array.table.length;
		}
		else
		{
			return array.lengths[array.lengths.length - 1];
		}
	}

	// Calculates in which slot of "table" the item probably is, then
	// find the exact slot via forward searching in  "lengths". Returns the index.
	function getSlot(i, a)
	{
		var slot = i >> (5 * a.height);
		while (a.lengths[slot] <= i)
		{
			slot++;
		}
		return slot;
	}

	// Recursively creates a tree with a given height containing
	// only the given item.
	function create(item, h)
	{
		if (h == 0)
		{
			return {
				ctor: "_Array",
				height: 0,
				table: [item]
			};
		}
		return {
			ctor: "_Array",
			height: h,
			table: [create(item, h - 1)],
			lengths: [1]
		};
	}

	// Recursively creates a tree that contains the given tree.
	function parentise(tree, h)
	{
		if (h == tree.height)
		{
			return tree;
		}

		return {
			ctor: "_Array",
			height: h,
			table: [parentise(tree, h - 1)],
			lengths: [length(tree)]
		};
	}

	// Emphasizes blood brotherhood beneath two trees.
	function siblise(a, b)
	{
		return {
			ctor: "_Array",
			height: a.height + 1,
			table: [a, b],
			lengths: [length(a), length(a) + length(b)]
		};
	}

	function toJSArray(a)
	{
		var jsArray = new Array(length(a));
		toJSArray_(jsArray, 0, a);
		return jsArray;
	}

	function toJSArray_(jsArray, i, a)
	{
		for (var t = 0; t < a.table.length; t++)
		{
			if (a.height == 0)
			{
				jsArray[i + t] = a.table[t];
			}
			else
			{
				var inc = t == 0 ? 0 : a.lengths[t - 1];
				toJSArray_(jsArray, i + inc, a.table[t]);
			}
		}
	}

	function fromJSArray(jsArray)
	{
		if (jsArray.length == 0)
		{
			return empty;
		}
		var h = Math.floor(Math.log(jsArray.length) / Math.log(M));
		return fromJSArray_(jsArray, h, 0, jsArray.length);
	}

	function fromJSArray_(jsArray, h, from, to)
	{
		if (h == 0)
		{
			return {
				ctor: "_Array",
				height: 0,
				table: jsArray.slice(from, to)
			};
		}

		var step = Math.pow(M, h);
		var table = new Array(Math.ceil((to - from) / step));
		var lengths = new Array(table.length);
		for (var i = 0; i < table.length; i++)
		{
			table[i] = fromJSArray_(jsArray, h - 1, from + (i * step), Math.min(from + ((i + 1) * step), to));
			lengths[i] = length(table[i]) + (i > 0 ? lengths[i-1] : 0);
		}
		return {
			ctor: "_Array",
			height: h,
			table: table,
			lengths: lengths
		};
	}

	Elm.Native.Array.values = {
		empty: empty,
		fromList: fromList,
		toList: toList,
		initialize: F2(initialize),
		append: F2(append),
		push: F2(push),
		slice: F3(slice),
		get: F2(get),
		set: F3(set),
		map: F2(map),
		indexedMap: F2(indexedMap),
		foldl: F3(foldl),
		foldr: F3(foldr),
		length: length,

		toJSArray:toJSArray,
		fromJSArray:fromJSArray
	};

	return localRuntime.Native.Array.values = Elm.Native.Array.values;

}

Elm.Native.Basics = {};
Elm.Native.Basics.make = function(localRuntime) {

	localRuntime.Native = localRuntime.Native || {};
	localRuntime.Native.Basics = localRuntime.Native.Basics || {};
	if (localRuntime.Native.Basics.values)
	{
		return localRuntime.Native.Basics.values;
	}

	var Utils = Elm.Native.Utils.make(localRuntime);

	function div(a, b)
	{
		return (a/b)|0;
	}
	function rem(a, b)
	{
		return a % b;
	}
	function mod(a, b)
	{
		if (b === 0)
		{
			throw new Error("Cannot perform mod 0. Division by zero error.");
		}
		var r = a % b;
		var m = a === 0 ? 0 : (b > 0 ? (a >= 0 ? r : r+b) : -mod(-a,-b));

		return m === b ? 0 : m;
	}
	function logBase(base, n)
	{
		return Math.log(n) / Math.log(base);
	}
	function negate(n)
	{
		return -n;
	}
	function abs(n)
	{
		return n < 0 ? -n : n;
	}

	function min(a, b)
	{
		return Utils.cmp(a,b) < 0 ? a : b;
	}
	function max(a, b)
	{
		return Utils.cmp(a,b) > 0 ? a : b;
	}
	function clamp(lo, hi, n)
	{
		return Utils.cmp(n,lo) < 0 ? lo : Utils.cmp(n,hi) > 0 ? hi : n;
	}

	function xor(a, b)
	{
		return a !== b;
	}
	function not(b)
	{
		return !b;
	}
	function isInfinite(n)
	{
		return n === Infinity || n === -Infinity
	}

	function truncate(n)
	{
		return n|0;
	}

	function degrees(d)
	{
		return d * Math.PI / 180;
	}
	function turns(t)
	{
		return 2 * Math.PI * t;
	}
	function fromPolar(point)
	{
		var r = point._0;
		var t = point._1;
		return Utils.Tuple2(r * Math.cos(t), r * Math.sin(t));
	}
	function toPolar(point)
	{
		var x = point._0;
		var y = point._1;
		return Utils.Tuple2(Math.sqrt(x * x + y * y), Math.atan2(y,x));
	}

	return localRuntime.Native.Basics.values = {
		div: F2(div),
		rem: F2(rem),
		mod: F2(mod),

		pi: Math.PI,
		e: Math.E,
		cos: Math.cos,
		sin: Math.sin,
		tan: Math.tan,
		acos: Math.acos,
		asin: Math.asin,
		atan: Math.atan,
		atan2: F2(Math.atan2),

		degrees:  degrees,
		turns:  turns,
		fromPolar:  fromPolar,
		toPolar:  toPolar,

		sqrt: Math.sqrt,
		logBase: F2(logBase),
		negate: negate,
		abs: abs,
		min: F2(min),
		max: F2(max),
		clamp: F3(clamp),
		compare: Utils.compare,

		xor: F2(xor),
		not: not,

		truncate: truncate,
		ceiling: Math.ceil,
		floor: Math.floor,
		round: Math.round,
		toFloat: function(x) { return x; },
		isNaN: isNaN,
		isInfinite: isInfinite
	};
};

Elm.Native.Char = {};
Elm.Native.Char.make = function(localRuntime) {
	localRuntime.Native = localRuntime.Native || {};
	localRuntime.Native.Char = localRuntime.Native.Char || {};
	if (localRuntime.Native.Char.values)
	{
		return localRuntime.Native.Char.values;
	}

	var Utils = Elm.Native.Utils.make(localRuntime);

	return localRuntime.Native.Char.values = {
		fromCode : function(c) { return Utils.chr(String.fromCharCode(c)); },
		toCode   : function(c) { return c.charCodeAt(0); },
		toUpper  : function(c) { return Utils.chr(c.toUpperCase()); },
		toLower  : function(c) { return Utils.chr(c.toLowerCase()); },
		toLocaleUpper : function(c) { return Utils.chr(c.toLocaleUpperCase()); },
		toLocaleLower : function(c) { return Utils.chr(c.toLocaleLowerCase()); },
	};
};

Elm.Native.Color = {};
Elm.Native.Color.make = function(localRuntime) {
	localRuntime.Native = localRuntime.Native || {};
	localRuntime.Native.Color = localRuntime.Native.Color || {};
	if (localRuntime.Native.Color.values)
	{
		return localRuntime.Native.Color.values;
	}

	function toCss(c)
	{
		var format = '';
		var colors = '';
		if (c.ctor === 'RGBA')
		{
			format = 'rgb';
			colors = c._0 + ', ' + c._1 + ', ' + c._2;
		}
		else
		{
			format = 'hsl';
			colors = (c._0 * 180 / Math.PI) + ', ' +
					 (c._1 * 100) + '%, ' +
					 (c._2 * 100) + '%';
		}
		if (c._3 === 1)
		{
			return format + '(' + colors + ')';
		}
		else
		{
			return format + 'a(' + colors + ', ' + c._3 + ')';
		}
	}

	return localRuntime.Native.Color.values = {
		toCss: toCss
	};

};

Elm.Native.Debug = {};
Elm.Native.Debug.make = function(localRuntime) {
	localRuntime.Native = localRuntime.Native || {};
	localRuntime.Native.Debug = localRuntime.Native.Debug || {};
	if (localRuntime.Native.Debug.values)
	{
		return localRuntime.Native.Debug.values;
	}

	var toString = Elm.Native.Show.make(localRuntime).toString;

	function log(tag, value)
	{
		var msg = tag + ': ' + toString(value);
		var process = process || {};
		if (process.stdout)
		{
			process.stdout.write(msg);
		}
		else
		{
			console.log(msg);
		}
		return value;
	}

	function crash(message)
	{
		throw new Error(message);
	}

	function tracePath(tag, form)
	{
		if (localRuntime.debug)
		{
			return localRuntime.debug.trace(tag, form);
		}
		return form;
	}

	function watch(tag, value)
	{
		if (localRuntime.debug)
		{
			localRuntime.debug.watch(tag, value);
		}
		return value;
	}

	function watchSummary(tag, summarize, value)
	{
		if (localRuntime.debug)
		{
			localRuntime.debug.watch(tag, summarize(value));
		}
		return value;
	}

	return localRuntime.Native.Debug.values = {
		crash: crash,
		tracePath: F2(tracePath),
		log: F2(log),
		watch: F2(watch),
		watchSummary:F3(watchSummary),
	};
};


// setup
Elm.Native = Elm.Native || {};
Elm.Native.Graphics = Elm.Native.Graphics || {};
Elm.Native.Graphics.Collage = Elm.Native.Graphics.Collage || {};

// definition
Elm.Native.Graphics.Collage.make = function(localRuntime) {
	'use strict';

	// attempt to short-circuit
	localRuntime.Native = localRuntime.Native || {};
	localRuntime.Native.Graphics = localRuntime.Native.Graphics || {};
	localRuntime.Native.Graphics.Collage = localRuntime.Native.Graphics.Collage || {};
	if ('values' in localRuntime.Native.Graphics.Collage)
	{
		return localRuntime.Native.Graphics.Collage.values;
	}

	// okay, we cannot short-ciruit, so now we define everything
	var Color = Elm.Native.Color.make(localRuntime);
	var List = Elm.Native.List.make(localRuntime);
	var NativeElement = Elm.Native.Graphics.Element.make(localRuntime);
	var Transform = Elm.Transform2D.make(localRuntime);
	var Utils = Elm.Native.Utils.make(localRuntime);

	function setStrokeStyle(ctx, style)
	{
		ctx.lineWidth = style.width;

		var cap = style.cap.ctor;
		ctx.lineCap = cap === 'Flat'
			? 'butt'
			: cap === 'Round'
				? 'round'
				: 'square';

		var join = style.join.ctor;
		ctx.lineJoin = join === 'Smooth'
			? 'round'
			: join === 'Sharp'
				? 'miter'
				: 'bevel';

		ctx.miterLimit = style.join._0 || 10;
		ctx.strokeStyle = Color.toCss(style.color);
	}

	function setFillStyle(ctx, style)
	{
		var sty = style.ctor;
		ctx.fillStyle = sty === 'Solid'
			? Color.toCss(style._0)
			: sty === 'Texture'
				? texture(redo, ctx, style._0)
				: gradient(ctx, style._0);
	}

	function trace(ctx, path)
	{
		var points = List.toArray(path);
		var i = points.length - 1;
		if (i <= 0)
		{
			return;
		}
		ctx.moveTo(points[i]._0, points[i]._1);
		while (i--)
		{
			ctx.lineTo(points[i]._0, points[i]._1);
		}
		if (path.closed)
		{
			i = points.length - 1;
			ctx.lineTo(points[i]._0, points[i]._1);
		}
	}

	function line(ctx,style,path)
	{
		(style.dashing.ctor === '[]')
			? trace(ctx, path)
			: customLineHelp(ctx, style, path);
		ctx.scale(1,-1);
		ctx.stroke();
	}

	function customLineHelp(ctx, style, path)
	{
		var points = List.toArray(path);
		if (path.closed)
		{
			points.push(points[0]);
		}
		var pattern = List.toArray(style.dashing);
		var i = points.length - 1;
		if (i <= 0)
		{
			return;
		}
		var x0 = points[i]._0, y0 = points[i]._1;
		var x1=0, y1=0, dx=0, dy=0, remaining=0, nx=0, ny=0;
		var pindex = 0, plen = pattern.length;
		var draw = true, segmentLength = pattern[0];
		ctx.moveTo(x0,y0);
		while (i--)
		{
			x1 = points[i]._0;
			y1 = points[i]._1;
			dx = x1 - x0;
			dy = y1 - y0;
			remaining = Math.sqrt(dx * dx + dy * dy);
			while (segmentLength <= remaining)
			{
				x0 += dx * segmentLength / remaining;
				y0 += dy * segmentLength / remaining;
				ctx[draw ? 'lineTo' : 'moveTo'](x0, y0);
				// update starting position
				dx = x1 - x0;
				dy = y1 - y0;
				remaining = Math.sqrt(dx * dx + dy * dy);
				// update pattern
				draw = !draw;
				pindex = (pindex + 1) % plen;
				segmentLength = pattern[pindex];
			}
			if (remaining > 0)
			{
				ctx[draw ? 'lineTo' : 'moveTo'](x1, y1);
				segmentLength -= remaining;
			}
			x0 = x1;
			y0 = y1;
		}
	}

	function drawLine(ctx, style, path)
	{
		setStrokeStyle(ctx, style);
		return line(ctx, style, path);
	}

	function texture(redo, ctx, src)
	{
		var img = new Image();
		img.src = src;
		img.onload = redo;
		return ctx.createPattern(img, 'repeat');
	}

	function gradient(ctx, grad)
	{
		var g;
		var stops = [];
		if (grad.ctor === 'Linear')
		{
			var p0 = grad._0, p1 = grad._1;
			g = ctx.createLinearGradient(p0._0, -p0._1, p1._0, -p1._1);
			stops = List.toArray(grad._2);
		}
		else
		{
			var p0 = grad._0, p2 = grad._2;
			g = ctx.createRadialGradient(p0._0, -p0._1, grad._1, p2._0, -p2._1, grad._3);
			stops = List.toArray(grad._4);
		}
		var len = stops.length;
		for (var i = 0; i < len; ++i)
		{
			var stop = stops[i];
			g.addColorStop(stop._0, Color.toCss(stop._1));
		}
		return g;
	}

	function drawShape(redo, ctx, style, path)
	{
		trace(ctx, path);
		setFillStyle(ctx, style);
		ctx.scale(1,-1);
		ctx.fill();
	}


	// TEXT RENDERING

	function fillText(redo, ctx, text)
	{
		drawText(ctx, text, ctx.fillText);
	}

	function strokeText(redo, ctx, style, text)
	{
		setStrokeStyle(ctx, style);
		// Use native canvas API for dashes only for text for now
		// Degrades to non-dashed on IE 9 + 10
		if (style.dashing.ctor !== '[]' && ctx.setLineDash)
		{
			var pattern = List.toArray(style.dashing);
			ctx.setLineDash(pattern);
		}
		drawText(ctx, text, ctx.strokeText);
	}

	function drawText(ctx, text, canvasDrawFn)
	{
		var textChunks = chunkText(defaultContext, text);

		var totalWidth = 0;
		var maxHeight = 0;
		var numChunks = textChunks.length;

		ctx.scale(1,-1);

		for (var i = numChunks; i--; )
		{
			var chunk = textChunks[i];
			ctx.font = chunk.font;
			var metrics = ctx.measureText(chunk.text);
			chunk.width = metrics.width;
			totalWidth += chunk.width;
			if (chunk.height > maxHeight)
			{
				maxHeight = chunk.height;
			}
		}

		var x = -totalWidth / 2.0;
		for (var i = 0; i < numChunks; ++i)
		{
			var chunk = textChunks[i];
			ctx.font = chunk.font;
			ctx.fillStyle = chunk.color;
			canvasDrawFn.call(ctx, chunk.text, x, maxHeight / 2);
			x += chunk.width;
		}
	}

	function toFont(props)
	{
		return [
			props['font-style'],
			props['font-variant'],
			props['font-weight'],
			props['font-size'],
			props['font-family']
		].join(' ');
	}


	// Convert the object returned by the text module
	// into something we can use for styling canvas text
	function chunkText(context, text)
	{
		var tag = text.ctor;
		if (tag === 'Text:Append')
		{
			var leftChunks = chunkText(context, text._0);
			var rightChunks = chunkText(context, text._1);
			return leftChunks.concat(rightChunks);
		}
		if (tag === 'Text:Text')
		{
			return [{
				text: text._0,
				color: context.color,
				height: context['font-size'].slice(0,-2) | 0,
				font: toFont(context)
			}];
		}
		if (tag === 'Text:Meta')
		{
			var newContext = freshContext(text._0, context);
			return chunkText(newContext, text._1);
		}
	}

	function freshContext(props, ctx)
	{
		return {
			'font-style': props['font-style'] || ctx['font-style'],
			'font-variant': props['font-variant'] || ctx['font-variant'],
			'font-weight': props['font-weight'] || ctx['font-weight'],
			'font-size': props['font-size'] || ctx['font-size'],
			'font-family': props['font-family'] || ctx['font-family'],
			'color': props['color'] || ctx['color']
		};
	}

	var defaultContext = {
		'font-style': 'normal',
		'font-variant': 'normal',
		'font-weight': 'normal',
		'font-size': '12px',
		'font-family': 'sans-serif',
		'color': 'black'
	};


	// IMAGES

	function drawImage(redo, ctx, form)
	{
		var img = new Image();
		img.onload = redo;
		img.src = form._3;
		var w = form._0,
			h = form._1,
			pos = form._2,
			srcX = pos._0,
			srcY = pos._1,
			srcW = w,
			srcH = h,
			destX = -w/2,
			destY = -h/2,
			destW = w,
			destH = h;

		ctx.scale(1,-1);
		ctx.drawImage(img, srcX, srcY, srcW, srcH, destX, destY, destW, destH);
	}

	function renderForm(redo, ctx, form)
	{
		ctx.save();

		var x = form.x,
			y = form.y,
			theta = form.theta,
			scale = form.scale;

		if (x !== 0 || y !== 0)
		{
			ctx.translate(x, y);
		}
		if (theta !== 0)
		{
			ctx.rotate(theta);
		}
		if (scale !== 1)
		{
			ctx.scale(scale,scale);
		}
		if (form.alpha !== 1)
		{
			ctx.globalAlpha = ctx.globalAlpha * form.alpha;
		}

		ctx.beginPath();
		var f = form.form;
		switch (f.ctor)
		{
			case 'FPath':
				drawLine(ctx, f._0, f._1);
				break;

			case 'FImage':
				drawImage(redo, ctx, f);
				break;

			case 'FShape':
				if (f._0.ctor === 'Line')
				{
					f._1.closed = true;
					drawLine(ctx, f._0._0, f._1);
				}
				else
				{
					drawShape(redo, ctx, f._0._0, f._1);
				}
				break;

			case 'FText':
				fillText(redo, ctx, f._0);
				break;

			case 'FOutlinedText':
				strokeText(redo, ctx, f._0, f._1);
				break;
		}
		ctx.restore();
	}

	function formToMatrix(form)
	{
	   var scale = form.scale;
	   var matrix = A6( Transform.matrix, scale, 0, 0, scale, form.x, form.y );

	   var theta = form.theta
	   if (theta !== 0)
	   {
		   matrix = A2( Transform.multiply, matrix, Transform.rotation(theta) );
	   }

	   return matrix;
	}

	function str(n)
	{
		if (n < 0.00001 && n > -0.00001)
		{
			return 0;
		}
		return n;
	}

	function makeTransform(w, h, form, matrices)
	{
		var props = form.form._0.props;
		var m = A6( Transform.matrix, 1, 0, 0, -1,
					(w - props.width ) / 2,
					(h - props.height) / 2 );
		var len = matrices.length;
		for (var i = 0; i < len; ++i)
		{
			m = A2( Transform.multiply, m, matrices[i] );
		}
		m = A2( Transform.multiply, m, formToMatrix(form) );

		return 'matrix(' +
			str( m[0]) + ', ' + str( m[3]) + ', ' +
			str(-m[1]) + ', ' + str(-m[4]) + ', ' +
			str( m[2]) + ', ' + str( m[5]) + ')';
	}

	function stepperHelp(list)
	{
		var arr = List.toArray(list);
		var i = 0;
		function peekNext()
		{
			return i < arr.length ? arr[i].form.ctor : '';
		}
		// assumes that there is a next element
		function next()
		{
			var out = arr[i];
			++i;
			return out;
		}
		return {
			peekNext: peekNext,
			next: next
		};
	}

	function formStepper(forms)
	{
		var ps = [stepperHelp(forms)];
		var matrices = [];
		var alphas = [];
		function peekNext()
		{
			var len = ps.length;
			var formType = '';
			for (var i = 0; i < len; ++i )
			{
				if (formType = ps[i].peekNext()) return formType;
			}
			return '';
		}
		// assumes that there is a next element
		function next(ctx)
		{
			while (!ps[0].peekNext())
			{
				ps.shift();
				matrices.pop();
				alphas.shift();
				if (ctx)
				{
					ctx.restore();
				}
			}
			var out = ps[0].next();
			var f = out.form;
			if (f.ctor === 'FGroup')
			{
				ps.unshift(stepperHelp(f._1));
				var m = A2(Transform.multiply, f._0, formToMatrix(out));
				ctx.save();
				ctx.transform(m[0], m[3], m[1], m[4], m[2], m[5]);
				matrices.push(m);

				var alpha = (alphas[0] || 1) * out.alpha;
				alphas.unshift(alpha);
				ctx.globalAlpha = alpha;
			}
			return out;
		}
		function transforms()
		{
			return matrices;
		}
		function alpha()
		{
			return alphas[0] || 1;
		}
		return {
			peekNext: peekNext,
			next: next,
			transforms: transforms,
			alpha: alpha
		};
	}

	function makeCanvas(w,h)
	{
		var canvas = NativeElement.createNode('canvas');
		canvas.style.width  = w + 'px';
		canvas.style.height = h + 'px';
		canvas.style.display = "block";
		canvas.style.position = "absolute";
		var ratio = window.devicePixelRatio || 1;
		canvas.width  = w * ratio;
		canvas.height = h * ratio;
		return canvas;
	}

	function render(model)
	{
		var div = NativeElement.createNode('div');
		div.style.overflow = 'hidden';
		div.style.position = 'relative';
		update(div, model, model);
		return div;
	}

	function nodeStepper(w,h,div)
	{
		var kids = div.childNodes;
		var i = 0;
		var ratio = window.devicePixelRatio || 1;

		function transform(transforms, ctx)
		{
			ctx.translate( w / 2 * ratio, h / 2 * ratio );
			ctx.scale( ratio, -ratio );
			var len = transforms.length;
			for (var i = 0; i < len; ++i)
			{
				var m = transforms[i];
				ctx.save();
				ctx.transform(m[0], m[3], m[1], m[4], m[2], m[5]);
			}
			return ctx;
		}
		function nextContext(transforms)
		{
			while (i < kids.length)
			{
				var node = kids[i];
				if (node.getContext)
				{
					node.width = w * ratio;
					node.height = h * ratio;
					node.style.width = w + 'px';
					node.style.height = h + 'px';
					++i;
					return transform(transforms, node.getContext('2d'));
				}
				div.removeChild(node);
			}
			var canvas = makeCanvas(w,h);
			div.appendChild(canvas);
			// we have added a new node, so we must step our position
			++i;
			return transform(transforms, canvas.getContext('2d'));
		}
		function addElement(matrices, alpha, form)
		{
			var kid = kids[i];
			var elem = form.form._0;

			var node = (!kid || kid.getContext)
				? NativeElement.render(elem)
				: NativeElement.update(kid, kid.oldElement, elem);

			node.style.position = 'absolute';
			node.style.opacity = alpha * form.alpha * elem.props.opacity;
			NativeElement.addTransform(node.style, makeTransform(w, h, form, matrices));
			node.oldElement = elem;
			++i;
			if (!kid)
			{
				div.appendChild(node);
			}
			else
			{
				div.insertBefore(node, kid);
			}
		}
		function clearRest()
		{
			while (i < kids.length)
			{
				div.removeChild(kids[i]);
			}
		}
		return {
			nextContext: nextContext,
			addElement: addElement,
			clearRest: clearRest
		};
	}


	function update(div, _, model)
	{
		var w = model.w;
		var h = model.h;

		var forms = formStepper(model.forms);
		var nodes = nodeStepper(w,h,div);
		var ctx = null;
		var formType = '';

		while (formType = forms.peekNext())
		{
			// make sure we have context if we need it
			if (ctx === null && formType !== 'FElement')
			{
				ctx = nodes.nextContext(forms.transforms());
				ctx.globalAlpha = forms.alpha();
			}

			var form = forms.next(ctx);
			// if it is FGroup, all updates are made within formStepper when next is called.
			if (formType === 'FElement')
			{
				// update or insert an element, get a new context
				nodes.addElement(forms.transforms(), forms.alpha(), form);
				ctx = null;
			}
			else if (formType !== 'FGroup')
			{
				renderForm(function() { update(div, model, model); }, ctx, form);
			}
		}
		nodes.clearRest();
		return div;
	}


	function collage(w,h,forms)
	{
		return A3(NativeElement.newElement, w, h, {
			ctor: 'Custom',
			type: 'Collage',
			render: render,
			update: update,
			model: {w:w, h:h, forms:forms}
		});
	}

	return localRuntime.Native.Graphics.Collage.values = {
		collage: F3(collage)
	};

};


// setup
Elm.Native = Elm.Native || {};
Elm.Native.Graphics = Elm.Native.Graphics || {};
Elm.Native.Graphics.Element = Elm.Native.Graphics.Element || {};

// definition
Elm.Native.Graphics.Element.make = function(localRuntime) {
	'use strict';

	// attempt to short-circuit
	localRuntime.Native = localRuntime.Native || {};
	localRuntime.Native.Graphics = localRuntime.Native.Graphics || {};
	localRuntime.Native.Graphics.Element = localRuntime.Native.Graphics.Element || {};
	if ('values' in localRuntime.Native.Graphics.Element)
	{
		return localRuntime.Native.Graphics.Element.values;
	}

	var Color = Elm.Native.Color.make(localRuntime);
	var List = Elm.Native.List.make(localRuntime);
	var Maybe = Elm.Maybe.make(localRuntime);
	var Text = Elm.Native.Text.make(localRuntime);
	var Utils = Elm.Native.Utils.make(localRuntime);


	// CREATION

	function createNode(elementType)
	{
		var node = document.createElement(elementType);
		node.style.padding = "0";
		node.style.margin = "0";
		return node;
	}


	function newElement(width, height, elementPrim)
	{
		return {
			_: {},
			element: elementPrim,
			props: {
				_: {},
				id: Utils.guid(),
				width: width,
				height: height,
				opacity: 1,
				color: Maybe.Nothing,
				href: "",
				tag: "",
				hover: Utils.Tuple0,
				click: Utils.Tuple0
			}
		};
	}


	// PROPERTIES

	function setProps(elem, node)
	{
		var props = elem.props;

		var element = elem.element;
		var width = props.width - (element.adjustWidth || 0);
		var height = props.height - (element.adjustHeight || 0);
		node.style.width  = (width |0) + 'px';
		node.style.height = (height|0) + 'px';

		if (props.opacity !== 1)
		{
			node.style.opacity = props.opacity;
		}

		if (props.color.ctor === 'Just')
		{
			node.style.backgroundColor = Color.toCss(props.color._0);
		}

		if (props.tag !== '')
		{
			node.id = props.tag;
		}

		if (props.hover.ctor !== '_Tuple0')
		{
			addHover(node, props.hover);
		}

		if (props.click.ctor !== '_Tuple0')
		{
			addClick(node, props.click);
		}

		if (props.href !== '')
		{
			var anchor = createNode('a');
			anchor.href = props.href;
			anchor.style.display = 'block';
			anchor.style.pointerEvents = 'auto';
			anchor.appendChild(node);
			node = anchor;
		}

		return node;
	}

	function addClick(e, handler)
	{
		e.style.pointerEvents = 'auto';
		e.elm_click_handler = handler;
		function trigger(ev)
		{
			e.elm_click_handler(Utils.Tuple0);
			ev.stopPropagation();
		}
		e.elm_click_trigger = trigger;
		e.addEventListener('click', trigger);
	}

	function removeClick(e, handler)
	{
		if (e.elm_click_trigger)
		{
			e.removeEventListener('click', e.elm_click_trigger);
			e.elm_click_trigger = null;
			e.elm_click_handler = null;
		}
	}

	function addHover(e, handler)
	{
		e.style.pointerEvents = 'auto';
		e.elm_hover_handler = handler;
		e.elm_hover_count = 0;

		function over(evt)
		{
			if (e.elm_hover_count++ > 0) return;
			e.elm_hover_handler(true);
			evt.stopPropagation();
		}
		function out(evt)
		{
			if (e.contains(evt.toElement || evt.relatedTarget)) return;
			e.elm_hover_count = 0;
			e.elm_hover_handler(false);
			evt.stopPropagation();
		}
		e.elm_hover_over = over;
		e.elm_hover_out = out;
		e.addEventListener('mouseover', over);
		e.addEventListener('mouseout', out);
	}

	function removeHover(e)
	{
		e.elm_hover_handler = null;
		if (e.elm_hover_over)
		{
			e.removeEventListener('mouseover', e.elm_hover_over);
			e.elm_hover_over = null;
		}
		if (e.elm_hover_out)
		{
			e.removeEventListener('mouseout', e.elm_hover_out);
			e.elm_hover_out = null;
		}
	}


	// IMAGES

	function image(props, img)
	{
		switch (img._0.ctor)
		{
			case 'Plain':
				return plainImage(img._3);

			case 'Fitted':
				return fittedImage(props.width, props.height, img._3);

			case 'Cropped':
				return croppedImage(img,props.width,props.height,img._3);

			case 'Tiled':
				return tiledImage(img._3);
		}
	}

	function plainImage(src)
	{
		var img = createNode('img');
		img.src = src;
		img.name = src;
		img.style.display = "block";
		return img;
	}

	function tiledImage(src)
	{
		var div = createNode('div');
		div.style.backgroundImage = 'url(' + src + ')';
		return div;
	}

	function fittedImage(w, h, src)
	{
		var div = createNode('div');
		div.style.background = 'url(' + src + ') no-repeat center';
		div.style.webkitBackgroundSize = 'cover';
		div.style.MozBackgroundSize = 'cover';
		div.style.OBackgroundSize = 'cover';
		div.style.backgroundSize = 'cover';
		return div;
	}

	function croppedImage(elem, w, h, src)
	{
		var pos = elem._0._0;
		var e = createNode('div');
		e.style.overflow = "hidden";

		var img = createNode('img');
		img.onload = function() {
			var sw = w / elem._1, sh = h / elem._2;
			img.style.width = ((this.width * sw)|0) + 'px';
			img.style.height = ((this.height * sh)|0) + 'px';
			img.style.marginLeft = ((- pos._0 * sw)|0) + 'px';
			img.style.marginTop = ((- pos._1 * sh)|0) + 'px';
		};
		img.src = src;
		img.name = src;
		e.appendChild(img);
		return e;
	}


	// FLOW

	function goOut(node)
	{
		node.style.position = 'absolute';
		return node;
	}
	function goDown(node)
	{
		return node;
	}
	function goRight(node)
	{
		node.style.styleFloat = 'left';
		node.style.cssFloat = 'left';
		return node;
	}

	var directionTable = {
		DUp    : goDown,
		DDown  : goDown,
		DLeft  : goRight,
		DRight : goRight,
		DIn    : goOut,
		DOut   : goOut
	};
	function needsReversal(dir)
	{
		return dir == 'DUp' || dir == 'DLeft' || dir == 'DIn';
	}

	function flow(dir,elist)
	{
		var array = List.toArray(elist);
		var container = createNode('div');
		var goDir = directionTable[dir];
		if (goDir == goOut)
		{
			container.style.pointerEvents = 'none';
		}
		if (needsReversal(dir))
		{
			array.reverse();
		}
		var len = array.length;
		for (var i = 0; i < len; ++i)
		{
			container.appendChild(goDir(render(array[i])));
		}
		return container;
	}


	// CONTAINER

	function toPos(pos)
	{
		return pos.ctor === "Absolute"
			? pos._0 + "px"
			: (pos._0 * 100) + "%";
	}

	// must clear right, left, top, bottom, and transform
	// before calling this function
	function setPos(pos,elem,e)
	{
		var element = elem.element;
		var props = elem.props;
		var w = props.width + (element.adjustWidth ? element.adjustWidth : 0);
		var h = props.height + (element.adjustHeight ? element.adjustHeight : 0);

		e.style.position = 'absolute';
		e.style.margin = 'auto';
		var transform = '';

		switch (pos.horizontal.ctor)
		{
			case 'P':
				e.style.right = toPos(pos.x);
				e.style.removeProperty('left');
				break;

			case 'Z':
				transform = 'translateX(' + ((-w/2)|0) + 'px) ';

			case 'N':
				e.style.left = toPos(pos.x);
				e.style.removeProperty('right');
				break;
		}
		switch (pos.vertical.ctor)
		{
			case 'N':
				e.style.bottom = toPos(pos.y);
				e.style.removeProperty('top');
				break;

			case 'Z':
				transform += 'translateY(' + ((-h/2)|0) + 'px)';

			case 'P':
				e.style.top = toPos(pos.y);
				e.style.removeProperty('bottom');
				break;
		}
		if (transform !== '')
		{
			addTransform(e.style, transform);
		}
		return e;
	}

	function addTransform(style, transform)
	{
		style.transform       = transform;
		style.msTransform     = transform;
		style.MozTransform    = transform;
		style.webkitTransform = transform;
		style.OTransform      = transform;
	}

	function container(pos,elem)
	{
		var e = render(elem);
		setPos(pos, elem, e);
		var div = createNode('div');
		div.style.position = 'relative';
		div.style.overflow = 'hidden';
		div.appendChild(e);
		return div;
	}


	function rawHtml(elem)
	{
		var html = elem.html;
		var guid = elem.guid;
		var align = elem.align;

		var div = createNode('div');
		div.innerHTML = html;
		div.style.visibility = "hidden";
		if (align)
		{
			div.style.textAlign = align;
		}
		div.style.visibility = 'visible';
		div.style.pointerEvents = 'auto';
		return div;
	}


	// RENDER

	function render(elem)
	{
		return setProps(elem, makeElement(elem));
	}
	function makeElement(e)
	{
		var elem = e.element;
		switch(elem.ctor)
		{
			case 'Image':
				return image(e.props, elem);

			case 'Flow':
				return flow(elem._0.ctor, elem._1);

			case 'Container':
				return container(elem._0, elem._1);

			case 'Spacer':
				return createNode('div');

			case 'RawHtml':
				return rawHtml(elem);

			case 'Custom':
				return elem.render(elem.model);
		}
	}

	function updateAndReplace(node, curr, next)
	{
		var newNode = update(node, curr, next);
		if (newNode !== node)
		{
			node.parentNode.replaceChild(newNode, node);
		}
		return newNode;
	}


	// UPDATE

	function update(node, curr, next)
	{
		var rootNode = node;
		if (node.tagName === 'A')
		{
			node = node.firstChild;
		}
		if (curr.props.id === next.props.id)
		{
			updateProps(node, curr, next);
			return rootNode;
		}
		if (curr.element.ctor !== next.element.ctor)
		{
			return render(next);
		}
		var nextE = next.element;
		var currE = curr.element;
		switch(nextE.ctor)
		{
			case "Spacer":
				updateProps(node, curr, next);
				return rootNode;

			case "RawHtml":
				if(currE.html.valueOf() !== nextE.html.valueOf())
				{
					node.innerHTML = nextE.html;
				}
				updateProps(node, curr, next);
				return rootNode;

			case "Image":
				if (nextE._0.ctor === 'Plain')
				{
					if (nextE._3 !== currE._3)
					{
						node.src = nextE._3;
					}
				}
				else if (!Utils.eq(nextE,currE)
					|| next.props.width !== curr.props.width
					|| next.props.height !== curr.props.height)
				{
					return render(next);
				}
				updateProps(node, curr, next);
				return rootNode;

			case "Flow":
				var arr = List.toArray(nextE._1);
				for (var i = arr.length; i--; )
				{
					arr[i] = arr[i].element.ctor;
				}
				if (nextE._0.ctor !== currE._0.ctor)
				{
					return render(next);
				}
				var nexts = List.toArray(nextE._1);
				var kids = node.childNodes;
				if (nexts.length !== kids.length)
				{
					return render(next);
				}
				var currs = List.toArray(currE._1);
				var dir = nextE._0.ctor;
				var goDir = directionTable[dir];
				var toReverse = needsReversal(dir);
				var len = kids.length;
				for (var i = len; i-- ;)
				{
					var subNode = kids[toReverse ? len - i - 1 : i];
					goDir(updateAndReplace(subNode, currs[i], nexts[i]));
				}
				updateProps(node, curr, next);
				return rootNode;

			case "Container":
				var subNode = node.firstChild;
				var newSubNode = updateAndReplace(subNode, currE._1, nextE._1);
				setPos(nextE._0, nextE._1, newSubNode);
				updateProps(node, curr, next);
				return rootNode;

			case "Custom":
				if (currE.type === nextE.type)
				{
					var updatedNode = nextE.update(node, currE.model, nextE.model);
					updateProps(updatedNode, curr, next);
					return updatedNode;
				}
				return render(next);
		}
	}

	function updateProps(node, curr, next)
	{
		var nextProps = next.props;
		var currProps = curr.props;

		var element = next.element;
		var width = nextProps.width - (element.adjustWidth || 0);
		var height = nextProps.height - (element.adjustHeight || 0);
		if (width !== currProps.width)
		{
			node.style.width = (width|0) + 'px';
		}
		if (height !== currProps.height)
		{
			node.style.height = (height|0) + 'px';
		}

		if (nextProps.opacity !== currProps.opacity)
		{
			node.style.opacity = nextProps.opacity;
		}

		var nextColor = nextProps.color.ctor === 'Just'
			? Color.toCss(nextProps.color._0)
			: '';
		if (node.style.backgroundColor !== nextColor)
		{
			node.style.backgroundColor = nextColor;
		}

		if (nextProps.tag !== currProps.tag)
		{
			node.id = nextProps.tag;
		}

		if (nextProps.href !== currProps.href)
		{
			if (currProps.href === '')
			{
				// add a surrounding href
				var anchor = createNode('a');
				anchor.href = nextProps.href;
				anchor.style.display = 'block';
				anchor.style.pointerEvents = 'auto';

				node.parentNode.replaceChild(anchor, node);
				anchor.appendChild(node);
			}
			else if (nextProps.href === '')
			{
				// remove the surrounding href
				var anchor = node.parentNode;
				anchor.parentNode.replaceChild(node, anchor);
			}
			else
			{
				// just update the link
				node.parentNode.href = nextProps.href;
			}
		}

		// update click and hover handlers
		var removed = false;

		// update hover handlers
		if (currProps.hover.ctor === '_Tuple0')
		{
			if (nextProps.hover.ctor !== '_Tuple0')
			{
				addHover(node, nextProps.hover);
			}
		}
		else
		{
			if (nextProps.hover.ctor === '_Tuple0')
			{
				removed = true;
				removeHover(node);
			}
			else
			{
				node.elm_hover_handler = nextProps.hover;
			}
		}

		// update click handlers
		if (currProps.click.ctor === '_Tuple0')
		{
			if (nextProps.click.ctor !== '_Tuple0')
			{
				addClick(node, nextProps.click);
			}
		}
		else
		{
			if (nextProps.click.ctor === '_Tuple0')
			{
				removed = true;
				removeClick(node);
			}
			else
			{
				node.elm_click_handler = nextProps.click;
			}
		}

		// stop capturing clicks if
		if (removed
			&& nextProps.hover.ctor === '_Tuple0'
			&& nextProps.click.ctor === '_Tuple0')
		{
			node.style.pointerEvents = 'none';
		}
	}


	// TEXT

	function block(align)
	{
		return function(text)
		{
			var raw = {
				ctor :'RawHtml',
				html : Text.renderHtml(text),
				align: align
			};
			var pos = htmlHeight(0, raw);
			return newElement(pos._0, pos._1, raw);
		}
	}

	function markdown(text)
	{
		var raw = {
			ctor:'RawHtml',
			html: text,
			align: null
		};
		var pos = htmlHeight(0, raw);
		return newElement(pos._0, pos._1, raw);
	}

	function htmlHeight(width, rawHtml)
	{
		// create dummy node
		var temp = document.createElement('div');
		temp.innerHTML = rawHtml.html;
		if (width > 0)
		{
			temp.style.width = width + "px";
		}
		temp.style.visibility = "hidden";
		temp.style.styleFloat = "left";
		temp.style.cssFloat   = "left";

		document.body.appendChild(temp);

		// get dimensions
		var style = window.getComputedStyle(temp, null);
		var w = Math.ceil(style.getPropertyValue("width").slice(0,-2) - 0);
		var h = Math.ceil(style.getPropertyValue("height").slice(0,-2) - 0);
		document.body.removeChild(temp);
		return Utils.Tuple2(w,h);
	}


	return localRuntime.Native.Graphics.Element.values = {
		render: render,
		update: update,
		updateAndReplace: updateAndReplace,

		createNode: createNode,
		newElement: F3(newElement),
		addTransform: addTransform,
		htmlHeight: F2(htmlHeight),
		guid: Utils.guid,

		block: block,
		markdown: markdown
	};

};

// setup
Elm.Native = Elm.Native || {};
Elm.Native.Graphics = Elm.Native.Graphics || {};
Elm.Native.Graphics.Input = Elm.Native.Graphics.Input || {};

// definition
Elm.Native.Graphics.Input.make = function(localRuntime) {
	'use strict';

	// attempt to short-circuit
	if ('values' in Elm.Native.Graphics.Input) {
		return Elm.Native.Graphics.Input.values;
	}

	var Color = Elm.Native.Color.make(localRuntime);
	var List = Elm.Native.List.make(localRuntime);
	var Signal = Elm.Native.Signal.make(localRuntime);
	var Text = Elm.Native.Text.make(localRuntime);
	var Utils = Elm.Native.Utils.make(localRuntime);

	var Element = Elm.Native.Graphics.Element.make(localRuntime);


	function renderDropDown(model)
	{
		var drop = Element.createNode('select');
		drop.style.border = '0 solid';
		drop.style.pointerEvents = 'auto';
		drop.style.display = 'block';

		drop.elm_values = List.toArray(model.values);
		drop.elm_handler = model.handler;
		var values = drop.elm_values;

		for (var i = 0; i < values.length; ++i)
		{
			var option = Element.createNode('option');
			var name = values[i]._0;
			option.value = name;
			option.innerHTML = name;
			drop.appendChild(option);
		}
		drop.addEventListener('change', function() {
			Signal.sendMessage(drop.elm_handler(drop.elm_values[drop.selectedIndex]._1));
		});

		return drop;
	}

	function updateDropDown(node, oldModel, newModel)
	{
		node.elm_values = List.toArray(newModel.values);
		node.elm_handler = newModel.handler;

		var values = node.elm_values;
		var kids = node.childNodes;
		var kidsLength = kids.length;

		var i = 0;
		for (; i < kidsLength && i < values.length; ++i)
		{
			var option = kids[i];
			var name = values[i]._0;
			option.value = name;
			option.innerHTML = name;
		}
		for (; i < kidsLength; ++i)
		{
			node.removeChild(node.lastChild);
		}
		for (; i < values.length; ++i)
		{
			var option = Element.createNode('option');
			var name = values[i]._0;
			option.value = name;
			option.innerHTML = name;
			node.appendChild(option);
		}
		return node;
	}

	function dropDown(handler, values)
	{
		return A3(Element.newElement, 100, 24, {
			ctor: 'Custom',
			type: 'DropDown',
			render: renderDropDown,
			update: updateDropDown,
			model: {
				values: values,
				handler: handler
			}
		});
	}

	function renderButton(model)
	{
		var node = Element.createNode('button');
		node.style.display = 'block';
		node.style.pointerEvents = 'auto';
		node.elm_message = model.message;
		function click()
		{
			Signal.sendMessage(node.elm_message);
		}
		node.addEventListener('click', click);
		node.innerHTML = model.text;
		return node;
	}

	function updateButton(node, oldModel, newModel)
	{
		node.elm_message = newModel.message;
		var txt = newModel.text;
		if (oldModel.text !== txt)
		{
			node.innerHTML = txt;
		}
		return node;
	}

	function button(message, text)
	{
		return A3(Element.newElement, 100, 40, {
			ctor: 'Custom',
			type: 'Button',
			render: renderButton,
			update: updateButton,
			model: {
				message: message,
				text:text
			}
		});
	}

	function renderCustomButton(model)
	{
		var btn = Element.createNode('div');
		btn.style.pointerEvents = 'auto';
		btn.elm_message = model.message;

		btn.elm_up    = Element.render(model.up);
		btn.elm_hover = Element.render(model.hover);
		btn.elm_down  = Element.render(model.down);

		btn.elm_up.style.display = 'block';
		btn.elm_hover.style.display = 'none';
		btn.elm_down.style.display = 'none';

		btn.appendChild(btn.elm_up);
		btn.appendChild(btn.elm_hover);
		btn.appendChild(btn.elm_down);

		function swap(visibleNode, hiddenNode1, hiddenNode2)
		{
			visibleNode.style.display = 'block';
			hiddenNode1.style.display = 'none';
			hiddenNode2.style.display = 'none';
		}

		var overCount = 0;
		function over(e)
		{
			if (overCount++ > 0) return;
			swap(btn.elm_hover, btn.elm_down, btn.elm_up);
		}
		function out(e)
		{
			if (btn.contains(e.toElement || e.relatedTarget)) return;
			overCount = 0;
			swap(btn.elm_up, btn.elm_down, btn.elm_hover);
		}
		function up()
		{
			swap(btn.elm_hover, btn.elm_down, btn.elm_up);
			Signal.sendMessage(btn.elm_message);
		}
		function down()
		{
			swap(btn.elm_down, btn.elm_hover, btn.elm_up);
		}

		btn.addEventListener('mouseover', over);
		btn.addEventListener('mouseout' , out);
		btn.addEventListener('mousedown', down);
		btn.addEventListener('mouseup'  , up);

		return btn;
	}

	function updateCustomButton(node, oldModel, newModel)
	{
		node.elm_message = newModel.message;

		var kids = node.childNodes;
		var styleUp    = kids[0].style.display;
		var styleHover = kids[1].style.display;
		var styleDown  = kids[2].style.display;

		Element.updateAndReplace(kids[0], oldModel.up, newModel.up);
		Element.updateAndReplace(kids[1], oldModel.hover, newModel.hover);
		Element.updateAndReplace(kids[2], oldModel.down, newModel.down);

		var kids = node.childNodes;
		kids[0].style.display = styleUp;
		kids[1].style.display = styleHover;
		kids[2].style.display = styleDown;

		return node;
	}

	function max3(a,b,c)
	{
		var ab = a > b ? a : b;
		return ab > c ? ab : c;
	}

	function customButton(message, up, hover, down)
	{
		return A3(Element.newElement,
				  max3(up.props.width, hover.props.width, down.props.width),
				  max3(up.props.height, hover.props.height, down.props.height),
				  { ctor: 'Custom',
					type: 'CustomButton',
					render: renderCustomButton,
					update: updateCustomButton,
					model: {
						message: message,
						up: up,
						hover: hover,
						down: down
					}
				  });
	}

	function renderCheckbox(model)
	{
		var node = Element.createNode('input');
		node.type = 'checkbox';
		node.checked = model.checked;
		node.style.display = 'block';
		node.style.pointerEvents = 'auto';
		node.elm_handler = model.handler;
		function change()
		{
			Signal.sendMessage(node.elm_handler(node.checked));
		}
		node.addEventListener('change', change);
		return node;
	}

	function updateCheckbox(node, oldModel, newModel)
	{
		node.elm_handler = newModel.handler;
		node.checked = newModel.checked;
		return node;
	}

	function checkbox(handler, checked)
	{
		return A3(Element.newElement, 13, 13, {
			ctor: 'Custom',
			type: 'CheckBox',
			render: renderCheckbox,
			update: updateCheckbox,
			model: { handler:handler, checked:checked }
		});
	}

	function setRange(node, start, end, dir)
	{
		if (node.parentNode)
		{
			node.setSelectionRange(start, end, dir);
		}
		else
		{
			setTimeout(function(){node.setSelectionRange(start, end, dir);}, 0);
		}
	}

	function updateIfNeeded(css, attribute, latestAttribute)
	{
		if (css[attribute] !== latestAttribute)
		{
			css[attribute] = latestAttribute;
		}
	}
	function cssDimensions(dimensions)
	{
		return dimensions.top    + 'px ' +
			   dimensions.right  + 'px ' +
			   dimensions.bottom + 'px ' +
			   dimensions.left   + 'px';
	}
	function updateFieldStyle(css, style)
	{
		updateIfNeeded(css, 'padding', cssDimensions(style.padding));

		var outline = style.outline;
		updateIfNeeded(css, 'border-width', cssDimensions(outline.width));
		updateIfNeeded(css, 'border-color', Color.toCss(outline.color));
		updateIfNeeded(css, 'border-radius', outline.radius + 'px');

		var highlight = style.highlight;
		if (highlight.width === 0)
		{
			css.outline = 'none';
		}
		else
		{
			updateIfNeeded(css, 'outline-width', highlight.width + 'px');
			updateIfNeeded(css, 'outline-color', Color.toCss(highlight.color));
		}

		var textStyle = style.style;
		updateIfNeeded(css, 'color', Color.toCss(textStyle.color));
		if (textStyle.typeface.ctor !== '[]')
		{
			updateIfNeeded(css, 'font-family', Text.toTypefaces(textStyle.typeface));
		}
		if (textStyle.height.ctor !== "Nothing")
		{
			updateIfNeeded(css, 'font-size', textStyle.height._0 + 'px');
		}
		updateIfNeeded(css, 'font-weight', textStyle.bold ? 'bold' : 'normal');
		updateIfNeeded(css, 'font-style', textStyle.italic ? 'italic' : 'normal');
		if (textStyle.line.ctor !== 'Nothing')
		{
			updateIfNeeded(css, 'text-decoration', Text.toLine(textStyle.line._0));
		}
	}

	function renderField(model)
	{
		var field = Element.createNode('input');
		updateFieldStyle(field.style, model.style);
		field.style.borderStyle = 'solid';
		field.style.pointerEvents = 'auto';

		field.type = model.type;
		field.placeholder = model.placeHolder;
		field.value = model.content.string;

		field.elm_handler = model.handler;
		field.elm_old_value = field.value;

		function inputUpdate(event)
		{
			var curr = field.elm_old_value;
			var next = field.value;
			if (curr === next)
			{
				return;
			}

			var direction = field.selectionDirection === 'forward' ? 'Forward' : 'Backward';
			var start = field.selectionStart;
			var end = field.selectionEnd;
			field.value = field.elm_old_value;

			Signal.sendMessage(field.elm_handler({
				_:{},
				string: next,
				selection: {
					_:{},
					start: start,
					end: end,
					direction: { ctor: direction }
				}
			}));
		}

		field.addEventListener('input', inputUpdate);
		field.addEventListener('focus', function() {
			field.elm_hasFocus = true;
		});
		field.addEventListener('blur', function() {
			field.elm_hasFocus = false;
		});

		return field;
	}

	function updateField(field, oldModel, newModel)
	{
		if (oldModel.style !== newModel.style)
		{
			updateFieldStyle(field.style, newModel.style);
		}
		field.elm_handler = newModel.handler;

		field.type = newModel.type;
		field.placeholder = newModel.placeHolder;
		var value = newModel.content.string;
		field.value = value;
		field.elm_old_value = value;
		if (field.elm_hasFocus)
		{
			var selection = newModel.content.selection;
			var direction = selection.direction.ctor === 'Forward' ? 'forward' : 'backward';
			setRange(field, selection.start, selection.end, direction);
		}
		return field;
	}

	function mkField(type)
	{
		function field(style, handler, placeHolder, content)
		{
			var padding = style.padding;
			var outline = style.outline.width;
			var adjustWidth = padding.left + padding.right + outline.left + outline.right;
			var adjustHeight = padding.top + padding.bottom + outline.top + outline.bottom;
			return A3(Element.newElement, 200, 30, {
				ctor: 'Custom',
				type: type + 'Field',
				adjustWidth: adjustWidth,
				adjustHeight: adjustHeight,
				render: renderField,
				update: updateField,
				model: {
					handler:handler,
					placeHolder:placeHolder,
					content:content,
					style:style,
					type:type
				}
			});
		}
		return F4(field);
	}

	function hoverable(handler, elem)
	{
		function onHover(bool)
		{
			Signal.sendMessage(handler(bool));
		}
		var props = Utils.replace([['hover',onHover]], elem.props);
		return {
			props: props,
			element: elem.element
		};
	}

	function clickable(message, elem)
	{
		function onClick()
		{
			Signal.sendMessage(message);
		}
		var props = Utils.replace([['click',onClick]], elem.props);
		return {
			props: props,
			element: elem.element
		};
	}

	return Elm.Native.Graphics.Input.values = {
		button: F2(button),
		customButton: F4(customButton),
		checkbox: F2(checkbox),
		dropDown: F2(dropDown),
		field: mkField('text'),
		email: mkField('email'),
		password: mkField('password'),
		hoverable: F2(hoverable),
		clickable: F2(clickable)
	};

};

Elm.Native.Http = {};
Elm.Native.Http.make = function(localRuntime) {

	localRuntime.Native = localRuntime.Native || {};
	localRuntime.Native.Http = localRuntime.Native.Http || {};
	if (localRuntime.Native.Http.values)
	{
		return localRuntime.Native.Http.values;
	}

	var Dict = Elm.Dict.make(localRuntime);
	var List = Elm.List.make(localRuntime);
	var Maybe = Elm.Maybe.make(localRuntime);
	var Task = Elm.Native.Task.make(localRuntime);


	function send(settings, request)
	{
		return Task.asyncFunction(function(callback) {
			var req = new XMLHttpRequest();

			// start
			if (settings.onStart.ctor === 'Just')
			{
				req.addEventListener('loadStart', function() {
					var task = settings.onStart._0;
					Task.spawn(task);
				});
			}

			// progress
			if (settings.onProgress.ctor === 'Just')
			{
				req.addEventListener('progress', function(event) {
					var progress = !event.lengthComputable
						? Maybe.Nothing
						: Maybe.Just({
							_: {},
							loaded: event.loaded,
							total: event.total
						});
					var task = settings.onProgress._0(progress);
					Task.spawn(task);
				});
			}

			// end
			req.addEventListener('error', function() {
				return callback(Task.fail({ ctor: 'RawNetworkError' }));
			});

			req.addEventListener('timeout', function() {
				return callback(Task.fail({ ctor: 'RawTimeout' }));
			});

			req.addEventListener('load', function() {
				return callback(Task.succeed(toResponse(req)));
			});

			req.open(request.verb, request.url, true);

			// set all the headers
			function setHeader(pair) {
				req.setRequestHeader(pair._0, pair._1);
			}
			A2(List.map, setHeader, request.headers);

			// set the timeout
			req.timeout = settings.timeout;

			// ask for a specific MIME type for the response
			if (settings.desiredResponseType.ctor === 'Just')
			{
				req.overrideMimeType(settings.desiredResponseType._0);
			}

			req.send(request.body._0);
		});
	}


	// deal with responses

	function toResponse(req)
	{
		var tag = typeof req.response === 'string' ? 'Text' : 'Blob';
		return {
			_: {},
			status: req.status,
			statusText: req.statusText,
			headers: parseHeaders(req.getAllResponseHeaders()),
			url: req.responseURL,
			value: { ctor: tag, _0: req.response }
		};
	}


	function parseHeaders(rawHeaders)
	{
		var headers = Dict.empty;

		if (!rawHeaders)
		{
			return headers;
		}

		var headerPairs = rawHeaders.split('\u000d\u000a');
		for (var i = headerPairs.length; i--; )
		{
			var headerPair = headerPairs[i];
			var index = headerPair.indexOf('\u003a\u0020');
			if (index > 0)
			{
				var key = headerPair.substring(0, index);
				var value = headerPair.substring(index + 2);

				headers = A3(Dict.update, key, function(oldValue) {
					if (oldValue.ctor === 'Just')
					{
						return Maybe.Just(value + ', ' + oldValue._0);
					}
					return Maybe.Just(value);
				}, headers);
			}
		}

		return headers;
	}


	function multipart(dataList)
	{
		var formData = new FormData();

		while (dataList.ctor !== '[]')
		{
			var data = dataList._0;
			if (type === 'StringData')
			{
				formData.append(data._0, data._1);
			}
			else
			{
				var fileName = data._1.ctor === 'Nothing'
					? undefined
					: data._1._0;
				formData.append(data._0, data._2, fileName);
			}
			dataList = dataList._1;
		}

		return { ctor: 'FormData', formData: formData };
	}


	function uriEncode(string)
	{
		return encodeURIComponent(string);
	}

	function uriDecode(string)
	{
		return decodeURIComponent(string);
	}

	return localRuntime.Native.Http.values = {
		send: F2(send),
		multipart: multipart,
		uriEncode: uriEncode,
		uriDecode: uriDecode
	};
};

Elm.Native.Json = {};
Elm.Native.Json.make = function(localRuntime) {

	localRuntime.Native = localRuntime.Native || {};
	localRuntime.Native.Json = localRuntime.Native.Json || {};
	if (localRuntime.Native.Json.values) {
		return localRuntime.Native.Json.values;
	}

	var ElmArray = Elm.Native.Array.make(localRuntime);
	var List = Elm.Native.List.make(localRuntime);
	var Maybe = Elm.Maybe.make(localRuntime);
	var Result = Elm.Result.make(localRuntime);
	var Utils = Elm.Native.Utils.make(localRuntime);


	function crash(expected, actual) {
		throw new Error(
			'expecting ' + expected + ' but got ' + JSON.stringify(actual)
		);
	}


	// PRIMITIVE VALUES

	function decodeNull(successValue) {
		return function(value) {
			if (value === null) {
				return successValue;
			}
			crash('null', value);
		};
	}


	function decodeString(value) {
		if (typeof value === 'string' || value instanceof String) {
			return value;
		}
		crash('a String', value);
	}


	function decodeFloat(value) {
		if (typeof value === 'number') {
			return value;
		}
		crash('a Float', value);
	}


	function decodeInt(value) {
		if (typeof value === 'number' && (value|0) === value) {
			return value;
		}
		crash('an Int', value);
	}


	function decodeBool(value) {
		if (typeof value === 'boolean') {
			return value;
		}
		crash('a Bool', value);
	}


	// ARRAY

	function decodeArray(decoder) {
		return function(value) {
			if (value instanceof Array) {
				var len = value.length;
				var array = new Array(len);
				for (var i = len; i-- ; ) {
					array[i] = decoder(value[i]);
				}
				return ElmArray.fromJSArray(array);
			}
			crash('an Array', value);
		};
	}


	// LIST

	function decodeList(decoder) {
		return function(value) {
			if (value instanceof Array) {
				var len = value.length;
				var list = List.Nil;
				for (var i = len; i-- ; ) {
					list = List.Cons( decoder(value[i]), list );
				}
				return list;
			}
			crash('a List', value);
		};
	}


	// MAYBE

	function decodeMaybe(decoder) {
		return function(value) {
			try {
				return Maybe.Just(decoder(value));
			} catch(e) {
				return Maybe.Nothing;
			}
		};
	}


	// FIELDS

	function decodeField(field, decoder) {
		return function(value) {
			var subValue = value[field];
			if (subValue !== undefined) {
				return decoder(subValue);
			}
			crash("an object with field '" + field + "'", value);
		};
	}


	// OBJECTS

	function decodeKeyValuePairs(decoder) {
		return function(value) {
			var isObject =
				typeof value === 'object'
					&& value !== null
					&& !(value instanceof Array);

			if (isObject) {
				var keyValuePairs = List.Nil;
				for (var key in value) {
					var elmValue = decoder(value[key]);
					var pair = Utils.Tuple2(key, elmValue);
					keyValuePairs = List.Cons(pair, keyValuePairs);
				}
				return keyValuePairs;
			}

			crash("an object", value);
		};
	}

	function decodeObject1(f, d1) {
		return function(value) {
			return f(d1(value));
		};
	}

	function decodeObject2(f, d1, d2) {
		return function(value) {
			return A2( f, d1(value), d2(value) );
		};
	}

	function decodeObject3(f, d1, d2, d3) {
		return function(value) {
			return A3( f, d1(value), d2(value), d3(value) );
		};
	}

	function decodeObject4(f, d1, d2, d3, d4) {
		return function(value) {
			return A4( f, d1(value), d2(value), d3(value), d4(value) );
		};
	}

	function decodeObject5(f, d1, d2, d3, d4, d5) {
		return function(value) {
			return A5( f, d1(value), d2(value), d3(value), d4(value), d5(value) );
		};
	}

	function decodeObject6(f, d1, d2, d3, d4, d5, d6) {
		return function(value) {
			return A6( f,
				d1(value),
				d2(value),
				d3(value),
				d4(value),
				d5(value),
				d6(value)
			);
		};
	}

	function decodeObject7(f, d1, d2, d3, d4, d5, d6, d7) {
		return function(value) {
			return A7( f,
				d1(value),
				d2(value),
				d3(value),
				d4(value),
				d5(value),
				d6(value),
				d7(value)
			);
		};
	}

	function decodeObject8(f, d1, d2, d3, d4, d5, d6, d7, d8) {
		return function(value) {
			return A8( f,
				d1(value),
				d2(value),
				d3(value),
				d4(value),
				d5(value),
				d6(value),
				d7(value),
				d8(value)
			);
		};
	}


	// TUPLES

	function decodeTuple1(f, d1) {
		return function(value) {
			if ( !(value instanceof Array) || value.length !== 1 ) {
				crash('a Tuple of length 1', value);
			}
			return f( d1(value[0]) );
		};
	}

	function decodeTuple2(f, d1, d2) {
		return function(value) {
			if ( !(value instanceof Array) || value.length !== 2 ) {
				crash('a Tuple of length 2', value);
			}
			return A2( f, d1(value[0]), d2(value[1]) );
		};
	}

	function decodeTuple3(f, d1, d2, d3) {
		return function(value) {
			if ( !(value instanceof Array) || value.length !== 3 ) {
				crash('a Tuple of length 3', value);
			}
			return A3( f, d1(value[0]), d2(value[1]), d3(value[2]) );
		};
	}


	function decodeTuple4(f, d1, d2, d3, d4) {
		return function(value) {
			if ( !(value instanceof Array) || value.length !== 4 ) {
				crash('a Tuple of length 4', value);
			}
			return A4( f, d1(value[0]), d2(value[1]), d3(value[2]), d4(value[3]) );
		};
	}


	function decodeTuple5(f, d1, d2, d3, d4, d5) {
		return function(value) {
			if ( !(value instanceof Array) || value.length !== 5 ) {
				crash('a Tuple of length 5', value);
			}
			return A5( f,
				d1(value[0]),
				d2(value[1]),
				d3(value[2]),
				d4(value[3]),
				d5(value[4])
			);
		};
	}


	function decodeTuple6(f, d1, d2, d3, d4, d5, d6) {
		return function(value) {
			if ( !(value instanceof Array) || value.length !== 6 ) {
				crash('a Tuple of length 6', value);
			}
			return A6( f,
				d1(value[0]),
				d2(value[1]),
				d3(value[2]),
				d4(value[3]),
				d5(value[4]),
				d6(value[5])
			);
		};
	}

	function decodeTuple7(f, d1, d2, d3, d4, d5, d6, d7) {
		return function(value) {
			if ( !(value instanceof Array) || value.length !== 7 ) {
				crash('a Tuple of length 7', value);
			}
			return A7( f,
				d1(value[0]),
				d2(value[1]),
				d3(value[2]),
				d4(value[3]),
				d5(value[4]),
				d6(value[5]),
				d7(value[6])
			);
		};
	}


	function decodeTuple8(f, d1, d2, d3, d4, d5, d6, d7, d8) {
		return function(value) {
			if ( !(value instanceof Array) || value.length !== 8 ) {
				crash('a Tuple of length 8', value);
			}
			return A8( f,
				d1(value[0]),
				d2(value[1]),
				d3(value[2]),
				d4(value[3]),
				d5(value[4]),
				d6(value[5]),
				d7(value[6]),
				d8(value[7])
			);
		};
	}


	// CUSTOM DECODERS

	function decodeValue(value) {
		return value;
	}

	function runDecoderValue(decoder, value) {
		try {
			return Result.Ok(decoder(value));
		} catch(e) {
			return Result.Err(e.message);
		}
	}

	function customDecoder(decoder, callback) {
		return function(value) {
			var result = callback(decoder(value));
			if (result.ctor === 'Err') {
				throw new Error('custom decoder failed: ' + result._0);
			}
			return result._0;
		}
	}

	function andThen(decode, callback) {
		return function(value) {
			var result = decode(value);
			return callback(result)(value);
		}
	}

	function fail(msg) {
		return function(value) {
			throw new Error(msg);
		}
	}

	function succeed(successValue) {
		return function(value) {
			return successValue;
		}
	}


	// ONE OF MANY

	function oneOf(decoders) {
		return function(value) {
			var errors = [];
			var temp = decoders;
			while (temp.ctor !== '[]') {
				try {
					return temp._0(value);
				} catch(e) {
					errors.push(e.message);
				}
				temp = temp._1;
			}
			throw new Error('expecting one of the following:\n    ' + errors.join('\n    '));
		}
	}

	function get(decoder, value) {
		try {
			return Result.Ok(decoder(value));
		} catch(e) {
			return Result.Err(e.message);
		}
	}


	// ENCODE / DECODE

	function runDecoderString(decoder, string) {
		try {
			return Result.Ok(decoder(JSON.parse(string)));
		} catch(e) {
			return Result.Err(e.message);
		}
	}

	function encode(indentLevel, value) {
		return JSON.stringify(value, null, indentLevel);
	}

	function identity(value) {
		return value;
	}

	function encodeObject(keyValuePairs) {
		var obj = {};
		while (keyValuePairs.ctor !== '[]') {
			var pair = keyValuePairs._0;
			obj[pair._0] = pair._1;
			keyValuePairs = keyValuePairs._1;
		}
		return obj;
	}

	return localRuntime.Native.Json.values = {
		encode: F2(encode),
		runDecoderString: F2(runDecoderString),
		runDecoderValue: F2(runDecoderValue),

		get: F2(get),
		oneOf: oneOf,

		decodeNull: decodeNull,
		decodeInt: decodeInt,
		decodeFloat: decodeFloat,
		decodeString: decodeString,
		decodeBool: decodeBool,

		decodeMaybe: decodeMaybe,

		decodeList: decodeList,
		decodeArray: decodeArray,

		decodeField: F2(decodeField),

		decodeObject1: F2(decodeObject1),
		decodeObject2: F3(decodeObject2),
		decodeObject3: F4(decodeObject3),
		decodeObject4: F5(decodeObject4),
		decodeObject5: F6(decodeObject5),
		decodeObject6: F7(decodeObject6),
		decodeObject7: F8(decodeObject7),
		decodeObject8: F9(decodeObject8),
		decodeKeyValuePairs: decodeKeyValuePairs,

		decodeTuple1: F2(decodeTuple1),
		decodeTuple2: F3(decodeTuple2),
		decodeTuple3: F4(decodeTuple3),
		decodeTuple4: F5(decodeTuple4),
		decodeTuple5: F6(decodeTuple5),
		decodeTuple6: F7(decodeTuple6),
		decodeTuple7: F8(decodeTuple7),
		decodeTuple8: F9(decodeTuple8),

		andThen: F2(andThen),
		decodeValue: decodeValue,
		customDecoder: F2(customDecoder),
		fail: fail,
		succeed: succeed,

		identity: identity,
		encodeNull: null,
		encodeArray: ElmArray.toJSArray,
		encodeList: List.toArray,
		encodeObject: encodeObject

	};

};

Elm.Native.Keyboard = {};
Elm.Native.Keyboard.make = function(localRuntime) {

	localRuntime.Native = localRuntime.Native || {};
	localRuntime.Native.Keyboard = localRuntime.Native.Keyboard || {};
	if (localRuntime.Native.Keyboard.values)
	{
		return localRuntime.Native.Keyboard.values;
	}

	var NS = Elm.Native.Signal.make(localRuntime);


	function keyEvent(event)
	{
		return {
			_: {},
			alt: event.altKey,
			meta: event.metaKey,
			keyCode: event.keyCode
		};
	}


	function keyStream(node, eventName, handler)
	{
		var stream = NS.input(eventName, '\0');

		localRuntime.addListener([stream.id], node, eventName, function(e) {
			localRuntime.notify(stream.id, handler(e));
		});

		return stream;
	}

	var downs = keyStream(document, 'keydown', keyEvent);
	var ups = keyStream(document, 'keyup', keyEvent);
	var presses = keyStream(document, 'keypress', keyEvent);
	var blurs = keyStream(window, 'blur', function() { return null; });


	return localRuntime.Native.Keyboard.values = {
		downs: downs,
		ups: ups,
		blurs: blurs,
		presses: presses
	};

};

Elm.Native.List = {};
Elm.Native.List.make = function(localRuntime) {
	localRuntime.Native = localRuntime.Native || {};
	localRuntime.Native.List = localRuntime.Native.List || {};
	if (localRuntime.Native.List.values)
	{
		return localRuntime.Native.List.values;
	}
	if ('values' in Elm.Native.List)
	{
		return localRuntime.Native.List.values = Elm.Native.List.values;
	}

	var Utils = Elm.Native.Utils.make(localRuntime);

	var Nil = Utils.Nil;
	var Cons = Utils.Cons;

	function toArray(xs)
	{
		var out = [];
		while (xs.ctor !== '[]')
		{
			out.push(xs._0);
			xs = xs._1;
		}
		return out;
	}

	function fromArray(arr)
	{
		var out = Nil;
		for (var i = arr.length; i--; )
		{
			out = Cons(arr[i], out);
		}
		return out;
	}

	function range(lo,hi)
	{
		var lst = Nil;
		if (lo <= hi)
		{
			do { lst = Cons(hi,lst) } while (hi-->lo);
		}
		return lst
	}

	// f defined similarly for both foldl and foldr (NB: different from Haskell)
	// ie, foldl : (a -> b -> b) -> b -> [a] -> b
	function foldl(f, b, xs)
	{
		var acc = b;
		while (xs.ctor !== '[]')
		{
			acc = A2(f, xs._0, acc);
			xs = xs._1;
		}
		return acc;
	}

	function foldr(f, b, xs)
	{
		var arr = toArray(xs);
		var acc = b;
		for (var i = arr.length; i--; )
		{
			acc = A2(f, arr[i], acc);
		}
		return acc;
	}

	function any(pred, xs)
	{
		while (xs.ctor !== '[]')
		{
			if (pred(xs._0))
			{
				return true;
			}
			xs = xs._1;
		}
		return false;
	}

	function map2(f, xs, ys)
	{
		var arr = [];
		while (xs.ctor !== '[]' && ys.ctor !== '[]')
		{
			arr.push(A2(f, xs._0, ys._0));
			xs = xs._1;
			ys = ys._1;
		}
		return fromArray(arr);
	}

	function map3(f, xs, ys, zs)
	{
		var arr = [];
		while (xs.ctor !== '[]' && ys.ctor !== '[]' && zs.ctor !== '[]')
		{
			arr.push(A3(f, xs._0, ys._0, zs._0));
			xs = xs._1;
			ys = ys._1;
			zs = zs._1;
		}
		return fromArray(arr);
	}

	function map4(f, ws, xs, ys, zs)
	{
		var arr = [];
		while (   ws.ctor !== '[]'
			   && xs.ctor !== '[]'
			   && ys.ctor !== '[]'
			   && zs.ctor !== '[]')
		{
			arr.push(A4(f, ws._0, xs._0, ys._0, zs._0));
			ws = ws._1;
			xs = xs._1;
			ys = ys._1;
			zs = zs._1;
		}
		return fromArray(arr);
	}

	function map5(f, vs, ws, xs, ys, zs)
	{
		var arr = [];
		while (   vs.ctor !== '[]'
			   && ws.ctor !== '[]'
			   && xs.ctor !== '[]'
			   && ys.ctor !== '[]'
			   && zs.ctor !== '[]')
		{
			arr.push(A5(f, vs._0, ws._0, xs._0, ys._0, zs._0));
			vs = vs._1;
			ws = ws._1;
			xs = xs._1;
			ys = ys._1;
			zs = zs._1;
		}
		return fromArray(arr);
	}

	function sortBy(f, xs)
	{
		return fromArray(toArray(xs).sort(function(a,b){
			return Utils.cmp(f(a), f(b));
		}));
	}

	function sortWith(f, xs)
	{
		return fromArray(toArray(xs).sort(function(a,b){
			var ord = f(a)(b).ctor;
			return ord === 'EQ' ? 0 : ord === 'LT' ? -1 : 1;
		}));
	}

	function take(n, xs)
	{
		var arr = [];
		while (xs.ctor !== '[]' && n > 0)
		{
			arr.push(xs._0);
			xs = xs._1;
			--n;
		}
		return fromArray(arr);
	}

	function drop(n, xs)
	{
		while (xs.ctor !== '[]' && n > 0)
		{
			xs = xs._1;
			--n;
		}
		return xs;
	}

	function repeat(n, x)
	{
		var arr = [];
		var pattern = [x];
		while (n > 0)
		{
			if (n & 1)
			{
				arr = arr.concat(pattern);
			}
			n >>= 1, pattern = pattern.concat(pattern);
		}
		return fromArray(arr);
	}


	Elm.Native.List.values = {
		Nil:Nil,
		Cons:Cons,
		cons:F2(Cons),
		toArray:toArray,
		fromArray:fromArray,
		range:range,

		foldl:F3(foldl),
		foldr:F3(foldr),

		any:F2(any),
		map2:F3(map2),
		map3:F4(map3),
		map4:F5(map4),
		map5:F6(map5),
		sortBy:F2(sortBy),
		sortWith:F2(sortWith),
		take:F2(take),
		drop:F2(drop),
		repeat:F2(repeat)
	};
	return localRuntime.Native.List.values = Elm.Native.List.values;

};

Elm.Native = Elm.Native || {};
Elm.Native.Mouse = {};
Elm.Native.Mouse.make = function(localRuntime) {

	localRuntime.Native = localRuntime.Native || {};
	localRuntime.Native.Mouse = localRuntime.Native.Mouse || {};
	if (localRuntime.Native.Mouse.values)
	{
		return localRuntime.Native.Mouse.values;
	}

	var NS = Elm.Native.Signal.make(localRuntime);
	var Utils = Elm.Native.Utils.make(localRuntime);

	var position = NS.input('Mouse.position', Utils.Tuple2(0,0));

	var isDown = NS.input('Mouse.isDown', false);

	var clicks = NS.input('Mouse.clicks', Utils.Tuple0);

	var node = localRuntime.isFullscreen()
		? document
		: localRuntime.node;

	localRuntime.addListener([clicks.id], node, 'click', function click() {
		localRuntime.notify(clicks.id, Utils.Tuple0);
	});
	localRuntime.addListener([isDown.id], node, 'mousedown', function down() {
		localRuntime.notify(isDown.id, true);
	});
	localRuntime.addListener([isDown.id], node, 'mouseup', function up() {
		localRuntime.notify(isDown.id, false);
	});
	localRuntime.addListener([position.id], node, 'mousemove', function move(e) {
		localRuntime.notify(position.id, Utils.getXY(e));
	});

	return localRuntime.Native.Mouse.values = {
		position: position,
		isDown: isDown,
		clicks: clicks
	};
};

Elm.Native.Port = {};
Elm.Native.Port.make = function(localRuntime) {

	localRuntime.Native = localRuntime.Native || {};
	localRuntime.Native.Port = localRuntime.Native.Port || {};
	if (localRuntime.Native.Port.values)
	{
		return localRuntime.Native.Port.values;
	}

	var NS;
	var Utils = Elm.Native.Utils.make(localRuntime);


	// INBOUND

	function inbound(name, type, converter)
	{
		if (!localRuntime.argsTracker[name])
		{
			throw new Error(
				"Port Error:\n" +
				"No argument was given for the port named '" + name + "' with type:\n\n" +
				"    " + type.split('\n').join('\n        ') + "\n\n" +
				"You need to provide an initial value!\n\n" +
				"Find out more about ports here <http://elm-lang.org/learn/Ports.elm>"
			);
		}
		var arg = localRuntime.argsTracker[name];
		arg.used = true;

		return jsToElm(name, type, converter, arg.value);
	}


	function inboundSignal(name, type, converter)
	{
		var initialValue = inbound(name, type, converter);

		if (!NS)
		{
			NS = Elm.Native.Signal.make(localRuntime);
		}
		var signal = NS.input('inbound-port-' + name, initialValue);

		function send(jsValue)
		{
			var elmValue = jsToElm(name, type, converter, jsValue);
			setTimeout(function() {
				localRuntime.notify(signal.id, elmValue);
			}, 0);
		}

		localRuntime.ports[name] = { send: send };

		return signal;
	}


	function jsToElm(name, type, converter, value)
	{
		try
		{
			return converter(value);
		}
		catch(e)
		{
			throw new Error(
				"Port Error:\n" +
				"Regarding the port named '" + name + "' with type:\n\n" +
				"    " + type.split('\n').join('\n        ') + "\n\n" +
				"You just sent the value:\n\n" +
				"    " + JSON.stringify(arg.value) + "\n\n" +
				"but it cannot be converted to the necessary type.\n" +
				e.message
			);
		}
	}


	// OUTBOUND

	function outbound(name, converter, elmValue)
	{
		localRuntime.ports[name] = converter(elmValue);
	}


	function outboundSignal(name, converter, signal)
	{
		var subscribers = [];

		function subscribe(handler)
		{
			subscribers.push(handler);
		}
		function unsubscribe(handler)
		{
			subscribers.pop(subscribers.indexOf(handler));
		}

		function notify(elmValue)
		{
			var jsValue = converter(elmValue);
			var len = subscribers.length;
			for (var i = 0; i < len; ++i)
			{
				subscribers[i](jsValue);
			}
		}

		if (!NS)
		{
			NS = Elm.Native.Signal.make(localRuntime);
		}
		NS.output('outbound-port-' + name, notify, signal);

		localRuntime.ports[name] = {
			subscribe: subscribe,
			unsubscribe: unsubscribe
		};

		return signal;
	}


	return localRuntime.Native.Port.values = {
		inbound: inbound,
		outbound: outbound,
		inboundSignal: inboundSignal,
		outboundSignal: outboundSignal
	};
};

Elm.Native.Regex = {};
Elm.Native.Regex.make = function(localRuntime) {
	localRuntime.Native = localRuntime.Native || {};
	localRuntime.Native.Regex = localRuntime.Native.Regex || {};
	if (localRuntime.Native.Regex.values)
	{
		return localRuntime.Native.Regex.values;
	}
	if ('values' in Elm.Native.Regex)
	{
		return localRuntime.Native.Regex.values = Elm.Native.Regex.values;
	}

	var List = Elm.Native.List.make(localRuntime);
	var Maybe = Elm.Maybe.make(localRuntime);

	function escape(str)
	{
		return str.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
	}
	function caseInsensitive(re)
	{
		return new RegExp(re.source, 'gi');
	}
	function regex(raw)
	{
		return new RegExp(raw, 'g');
	}

	function contains(re, string)
	{
		return string.match(re) !== null;
	}

	function find(n, re, str)
	{
		n = n.ctor === "All" ? Infinity : n._0;
		var out = [];
		var number = 0;
		var string = str;
		var lastIndex = re.lastIndex;
		var prevLastIndex = -1;
		var result;
		while (number++ < n && (result = re.exec(string)))
		{
			if (prevLastIndex === re.lastIndex) break;
			var i = result.length - 1;
			var subs = new Array(i);
			while (i > 0)
			{
				var submatch = result[i];
				subs[--i] = submatch === undefined
					? Maybe.Nothing
					: Maybe.Just(submatch);
			}
			out.push({
				_:{},
				match: result[0],
				submatches: List.fromArray(subs),
				index: result.index,
				number: number
			});
			prevLastIndex = re.lastIndex;
		}
		re.lastIndex = lastIndex;
		return List.fromArray(out);
	}

	function replace(n, re, replacer, string)
	{
		n = n.ctor === "All" ? Infinity : n._0;
		var count = 0;
		function jsReplacer(match)
		{
			if (count++ > n)
			{
				return match;
			}
			var i = arguments.length-3;
			var submatches = new Array(i);
			while (i > 0)
			{
				var submatch = arguments[i];
				submatches[--i] = submatch === undefined
					? Maybe.Nothing
					: Maybe.Just(submatch);
			}
			return replacer({
				_:{},
				match:match,
				submatches:List.fromArray(submatches),
				index:arguments[i-1],
				number:count
			});
		}
		return string.replace(re, jsReplacer);
	}

	function split(n, re, str)
	{
		n = n.ctor === "All" ? Infinity : n._0;
		if (n === Infinity)
		{
			return List.fromArray(str.split(re));
		}
		var string = str;
		var result;
		var out = [];
		var start = re.lastIndex;
		while (n--)
		{
			if (!(result = re.exec(string))) break;
			out.push(string.slice(start, result.index));
			start = re.lastIndex;
		}
		out.push(string.slice(start));
		return List.fromArray(out);
	}

	return Elm.Native.Regex.values = {
		regex: regex,
		caseInsensitive: caseInsensitive,
		escape: escape,

		contains: F2(contains),
		find: F3(find),
		replace: F4(replace),
		split: F3(split)
	};
};


if (!Elm.fullscreen) {

	(function() {
		'use strict';

		var Display = {
			FULLSCREEN: 0,
			COMPONENT: 1,
			NONE: 2
		};

		Elm.fullscreen = function(module, args)
		{
			var container = document.createElement('div');
			document.body.appendChild(container);
			return init(Display.FULLSCREEN, container, module, args || {});
		};

		Elm.embed = function(module, container, args)
		{
			var tag = container.tagName;
			if (tag !== 'DIV')
			{
				throw new Error('Elm.node must be given a DIV, not a ' + tag + '.');
			}
			return init(Display.COMPONENT, container, module, args || {});
		};

		Elm.worker = function(module, args)
		{
			return init(Display.NONE, {}, module, args || {});
		};

		function init(display, container, module, args, moduleToReplace)
		{
			// defining state needed for an instance of the Elm RTS
			var inputs = [];

			/* OFFSET
			 * Elm's time traveling debugger lets you pause time. This means
			 * "now" may be shifted a bit into the past. By wrapping Date.now()
			 * we can manage this.
			 */
			var timer = {
				programStart: Date.now(),
				now: function()
				{
					return Date.now();
				}
			};

			var updateInProgress = false;
			function notify(id, v)
			{
				if (updateInProgress)
				{
					throw new Error(
						'The notify function has been called synchronously!\n' +
						'This can lead to frames being dropped.\n' +
						'Definitely report this to <https://github.com/elm-lang/Elm/issues>\n');
				}
				updateInProgress = true;
				var timestep = timer.now();
				for (var i = inputs.length; i--; )
				{
					inputs[i].notify(timestep, id, v);
				}
				updateInProgress = false;
			}
			function setTimeout(func, delay)
			{
				return window.setTimeout(func, delay);
			}

			var listeners = [];
			function addListener(relevantInputs, domNode, eventName, func)
			{
				domNode.addEventListener(eventName, func);
				var listener = {
					relevantInputs: relevantInputs,
					domNode: domNode,
					eventName: eventName,
					func: func
				};
				listeners.push(listener);
			}

			var argsTracker = {};
			for (var name in args)
			{
				argsTracker[name] = {
					value: args[name],
					used: false
				};
			}

			// create the actual RTS. Any impure modules will attach themselves to this
			// object. This permits many Elm programs to be embedded per document.
			var elm = {
				notify: notify,
				setTimeout: setTimeout,
				node: container,
				addListener: addListener,
				inputs: inputs,
				timer: timer,
				argsTracker: argsTracker,
				ports: {},

				isFullscreen: function() { return display === Display.FULLSCREEN; },
				isEmbed: function() { return display === Display.COMPONENT; },
				isWorker: function() { return display === Display.NONE; }
			};

			function swap(newModule)
			{
				removeListeners(listeners);
				var div = document.createElement('div');
				var newElm = init(display, div, newModule, args, elm);
				inputs = [];
				// elm.swap = newElm.swap;
				return newElm;
			}

			function dispose()
			{
				removeListeners(listeners);
				inputs = [];
			}

			var Module = {};
			try
			{
				Module = module.make(elm);
				checkInputs(elm);
			}
			catch (error)
			{
				if (typeof container.appendChild == 'undefined')
				{
					console.log(error.message);
				}
				else
				{
					container.appendChild(errorNode(error.message));
				}
				throw error;
			}

			if (display !== Display.NONE)
			{
				var graphicsNode = initGraphics(elm, Module);
			}

			var rootNode = { kids: inputs };
			trimDeadNodes(rootNode);
			inputs = rootNode.kids;
			filterListeners(inputs, listeners);

			addReceivers(elm.ports);

			if (typeof moduleToReplace !== 'undefined')
			{
				hotSwap(moduleToReplace, elm);

				// rerender scene if graphics are enabled.
				if (typeof graphicsNode !== 'undefined')
				{
					graphicsNode.notify(0, true, 0);
				}
			}

			return {
				swap: swap,
				ports: elm.ports,
				dispose: dispose
			};
		};

		function checkInputs(elm)
		{
			var argsTracker = elm.argsTracker;
			for (var name in argsTracker)
			{
				if (!argsTracker[name].used)
				{
					throw new Error(
						"Port Error:\nYou provided an argument named '" + name +
						"' but there is no corresponding port!\n\n" +
						"Maybe add a port '" + name + "' to your Elm module?\n" +
						"Maybe remove the '" + name + "' argument from your initialization code in JS?"
					);
				}
			}
		}

		function errorNode(message)
		{
			var code = document.createElement('code');

			var lines = message.split('\n');
			code.appendChild(document.createTextNode(lines[0]));
			code.appendChild(document.createElement('br'));
			code.appendChild(document.createElement('br'));
			for (var i = 1; i < lines.length; ++i)
			{
				code.appendChild(document.createTextNode('\u00A0 \u00A0 ' + lines[i].replace(/  /g, '\u00A0 ')));
				code.appendChild(document.createElement('br'));
			}
			code.appendChild(document.createElement('br'));
			code.appendChild(document.createTextNode("Open the developer console for more details."));
			return code;
		}


		//// FILTER SIGNALS ////

		// TODO: move this code into the signal module and create a function
		// Signal.initializeGraph that actually instantiates everything.

		function filterListeners(inputs, listeners)
		{
			loop:
			for (var i = listeners.length; i--; )
			{
				var listener = listeners[i];
				for (var j = inputs.length; j--; )
				{
					if (listener.relevantInputs.indexOf(inputs[j].id) >= 0)
					{
						continue loop;
					}
				}
				listener.domNode.removeEventListener(listener.eventName, listener.func);
			}
		}

		function removeListeners(listeners)
		{
			for (var i = listeners.length; i--; )
			{
				var listener = listeners[i];
				listener.domNode.removeEventListener(listener.eventName, listener.func);
			}
		}

		// add receivers for built-in ports if they are defined
		function addReceivers(ports)
		{
			if ('title' in ports)
			{
				if (typeof ports.title === 'string')
				{
					document.title = ports.title;
				}
				else
				{
					ports.title.subscribe(function(v) { document.title = v; });
				}
			}
			if ('redirect' in ports)
			{
				ports.redirect.subscribe(function(v) {
					if (v.length > 0)
					{
						window.location = v;
					}
				});
			}
		}


		// returns a boolean representing whether the node is alive or not.
		function trimDeadNodes(node)
		{
			if (node.isOutput)
			{
				return true;
			}

			var liveKids = [];
			for (var i = node.kids.length; i--; )
			{
				var kid = node.kids[i];
				if (trimDeadNodes(kid))
				{
					liveKids.push(kid);
				}
			}
			node.kids = liveKids;

			return liveKids.length > 0;
		}


		////  RENDERING  ////

		function initGraphics(elm, Module)
		{
			if (!('main' in Module))
			{
				throw new Error("'main' is missing! What do I display?!");
			}

			var signalGraph = Module.main;

			// make sure the signal graph is actually a signal & extract the visual model
			if (!('notify' in signalGraph))
			{
				signalGraph = Elm.Signal.make(elm).constant(signalGraph);
			}
			var initialScene = signalGraph.value;

			// Figure out what the render functions should be
			var render;
			var update;
			if (initialScene.props)
			{
				var Element = Elm.Native.Graphics.Element.make(elm);
				render = Element.render;
				update = Element.updateAndReplace;
			}
			else
			{
				var VirtualDom = Elm.Native.VirtualDom.make(elm);
				render = VirtualDom.render;
				update = VirtualDom.updateAndReplace;
			}

			// Add the initialScene to the DOM
			var container = elm.node;
			var node = render(initialScene);
			while (container.firstChild)
			{
				container.removeChild(container.firstChild);
			}
			container.appendChild(node);

			var _requestAnimationFrame =
				typeof requestAnimationFrame !== 'undefined'
					? requestAnimationFrame
					: function(cb) { setTimeout(cb, 1000/60); }
					;

			// domUpdate is called whenever the main Signal changes.
			//
			// domUpdate and drawCallback implement a small state machine in order
			// to schedule only 1 draw per animation frame. This enforces that
			// once draw has been called, it will not be called again until the
			// next frame.
			//
			// drawCallback is scheduled whenever
			// 1. The state transitions from PENDING_REQUEST to EXTRA_REQUEST, or
			// 2. The state transitions from NO_REQUEST to PENDING_REQUEST
			//
			// Invariants:
			// 1. In the NO_REQUEST state, there is never a scheduled drawCallback.
			// 2. In the PENDING_REQUEST and EXTRA_REQUEST states, there is always exactly 1
			//    scheduled drawCallback.
			var NO_REQUEST = 0;
			var PENDING_REQUEST = 1;
			var EXTRA_REQUEST = 2;
			var state = NO_REQUEST;
			var savedScene = initialScene;
			var scheduledScene = initialScene;

			function domUpdate(newScene)
			{
				scheduledScene = newScene;

				switch (state)
				{
					case NO_REQUEST:
						_requestAnimationFrame(drawCallback);
						state = PENDING_REQUEST;
						return;
					case PENDING_REQUEST:
						state = PENDING_REQUEST;
						return;
					case EXTRA_REQUEST:
						state = PENDING_REQUEST;
						return;
				}
			}

			function drawCallback()
			{
				switch (state)
				{
					case NO_REQUEST:
						// This state should not be possible. How can there be no
						// request, yet somehow we are actively fulfilling a
						// request?
						throw new Error(
							"Unexpected draw callback.\n" +
							"Please report this to <https://github.com/elm-lang/core/issues>."
						);

					case PENDING_REQUEST:
						// At this point, we do not *know* that another frame is
						// needed, but we make an extra request to rAF just in
						// case. It's possible to drop a frame if rAF is called
						// too late, so we just do it preemptively.
						_requestAnimationFrame(drawCallback);
						state = EXTRA_REQUEST;

						// There's also stuff we definitely need to draw.
						draw();
						return;

					case EXTRA_REQUEST:
						// Turns out the extra request was not needed, so we will
						// stop calling rAF. No reason to call it all the time if
						// no one needs it.
						state = NO_REQUEST;
						return;
				}
			}

			function draw()
			{
				update(elm.node.firstChild, savedScene, scheduledScene);
				if (elm.Native.Window)
				{
					elm.Native.Window.values.resizeIfNeeded();
				}
				savedScene = scheduledScene;
			}

			var renderer = Elm.Native.Signal.make(elm).output('main', domUpdate, signalGraph);

			// must check for resize after 'renderer' is created so
			// that changes show up.
			if (elm.Native.Window)
			{
				elm.Native.Window.values.resizeIfNeeded();
			}

			return renderer;
		}

		//// HOT SWAPPING ////

		// Returns boolean indicating if the swap was successful.
		// Requires that the two signal graphs have exactly the same
		// structure.
		function hotSwap(from, to)
		{
			function similar(nodeOld,nodeNew)
			{
				if (nodeOld.id !== nodeNew.id)
				{
					return false;
				}
				if (nodeOld.isOutput)
				{
					return nodeNew.isOutput;
				}
				return nodeOld.kids.length === nodeNew.kids.length;
			}
			function swap(nodeOld,nodeNew)
			{
				nodeNew.value = nodeOld.value;
				return true;
			}
			var canSwap = depthFirstTraversals(similar, from.inputs, to.inputs);
			if (canSwap)
			{
				depthFirstTraversals(swap, from.inputs, to.inputs);
			}
			from.node.parentNode.replaceChild(to.node, from.node);

			return canSwap;
		}

		// Returns false if the node operation f ever fails.
		function depthFirstTraversals(f, queueOld, queueNew)
		{
			if (queueOld.length !== queueNew.length)
			{
				return false;
			}
			queueOld = queueOld.slice(0);
			queueNew = queueNew.slice(0);

			var seen = [];
			while (queueOld.length > 0 && queueNew.length > 0)
			{
				var nodeOld = queueOld.pop();
				var nodeNew = queueNew.pop();
				if (seen.indexOf(nodeOld.id) < 0)
				{
					if (!f(nodeOld, nodeNew))
					{
						return false;
					}
					queueOld = queueOld.concat(nodeOld.kids || []);
					queueNew = queueNew.concat(nodeNew.kids || []);
					seen.push(nodeOld.id);
				}
			}
			return true;
		}
	}());

	function F2(fun)
	{
		function wrapper(a) { return function(b) { return fun(a,b) } }
		wrapper.arity = 2;
		wrapper.func = fun;
		return wrapper;
	}

	function F3(fun)
	{
		function wrapper(a) {
			return function(b) { return function(c) { return fun(a,b,c) }}
		}
		wrapper.arity = 3;
		wrapper.func = fun;
		return wrapper;
	}

	function F4(fun)
	{
		function wrapper(a) { return function(b) { return function(c) {
			return function(d) { return fun(a,b,c,d) }}}
		}
		wrapper.arity = 4;
		wrapper.func = fun;
		return wrapper;
	}

	function F5(fun)
	{
		function wrapper(a) { return function(b) { return function(c) {
			return function(d) { return function(e) { return fun(a,b,c,d,e) }}}}
		}
		wrapper.arity = 5;
		wrapper.func = fun;
		return wrapper;
	}

	function F6(fun)
	{
		function wrapper(a) { return function(b) { return function(c) {
			return function(d) { return function(e) { return function(f) {
			return fun(a,b,c,d,e,f) }}}}}
		}
		wrapper.arity = 6;
		wrapper.func = fun;
		return wrapper;
	}

	function F7(fun)
	{
		function wrapper(a) { return function(b) { return function(c) {
			return function(d) { return function(e) { return function(f) {
			return function(g) { return fun(a,b,c,d,e,f,g) }}}}}}
		}
		wrapper.arity = 7;
		wrapper.func = fun;
		return wrapper;
	}

	function F8(fun)
	{
		function wrapper(a) { return function(b) { return function(c) {
			return function(d) { return function(e) { return function(f) {
			return function(g) { return function(h) {
			return fun(a,b,c,d,e,f,g,h)}}}}}}}
		}
		wrapper.arity = 8;
		wrapper.func = fun;
		return wrapper;
	}

	function F9(fun)
	{
		function wrapper(a) { return function(b) { return function(c) {
			return function(d) { return function(e) { return function(f) {
			return function(g) { return function(h) { return function(i) {
			return fun(a,b,c,d,e,f,g,h,i) }}}}}}}}
		}
		wrapper.arity = 9;
		wrapper.func = fun;
		return wrapper;
	}

	function A2(fun,a,b)
	{
		return fun.arity === 2
			? fun.func(a,b)
			: fun(a)(b);
	}
	function A3(fun,a,b,c)
	{
		return fun.arity === 3
			? fun.func(a,b,c)
			: fun(a)(b)(c);
	}
	function A4(fun,a,b,c,d)
	{
		return fun.arity === 4
			? fun.func(a,b,c,d)
			: fun(a)(b)(c)(d);
	}
	function A5(fun,a,b,c,d,e)
	{
		return fun.arity === 5
			? fun.func(a,b,c,d,e)
			: fun(a)(b)(c)(d)(e);
	}
	function A6(fun,a,b,c,d,e,f)
	{
		return fun.arity === 6
			? fun.func(a,b,c,d,e,f)
			: fun(a)(b)(c)(d)(e)(f);
	}
	function A7(fun,a,b,c,d,e,f,g)
	{
		return fun.arity === 7
			? fun.func(a,b,c,d,e,f,g)
			: fun(a)(b)(c)(d)(e)(f)(g);
	}
	function A8(fun,a,b,c,d,e,f,g,h)
	{
		return fun.arity === 8
			? fun.func(a,b,c,d,e,f,g,h)
			: fun(a)(b)(c)(d)(e)(f)(g)(h);
	}
	function A9(fun,a,b,c,d,e,f,g,h,i)
	{
		return fun.arity === 9
			? fun.func(a,b,c,d,e,f,g,h,i)
			: fun(a)(b)(c)(d)(e)(f)(g)(h)(i);
	}
}

Elm.Native.Show = {};
Elm.Native.Show.make = function(localRuntime) {
	localRuntime.Native = localRuntime.Native || {};
	localRuntime.Native.Show = localRuntime.Native.Show || {};
	if (localRuntime.Native.Show.values)
	{
		return localRuntime.Native.Show.values;
	}

	var _Array;
	var Dict;
	var List;
	var Utils = Elm.Native.Utils.make(localRuntime);

	var toString = function(v)
	{
		var type = typeof v;
		if (type === "function")
		{
			var name = v.func ? v.func.name : v.name;
			return '<function' + (name === '' ? '' : ': ') + name + '>';
		}
		else if (type === "boolean")
		{
			return v ? "True" : "False";
		}
		else if (type === "number")
		{
			return v + "";
		}
		else if ((v instanceof String) && v.isChar)
		{
			return "'" + addSlashes(v, true) + "'";
		}
		else if (type === "string")
		{
			return '"' + addSlashes(v, false) + '"';
		}
		else if (type === "object" && '_' in v && probablyPublic(v))
		{
			var output = [];
			for (var k in v._)
			{
				for (var i = v._[k].length; i--; )
				{
					output.push(k + " = " + toString(v._[k][i]));
				}
			}
			for (var k in v)
			{
				if (k === '_') continue;
				output.push(k + " = " + toString(v[k]));
			}
			if (output.length === 0)
			{
				return "{}";
			}
			return "{ " + output.join(", ") + " }";
		}
		else if (type === "object" && 'ctor' in v)
		{
			if (v.ctor.substring(0,6) === "_Tuple")
			{
				var output = [];
				for (var k in v)
				{
					if (k === 'ctor') continue;
					output.push(toString(v[k]));
				}
				return "(" + output.join(",") + ")";
			}
			else if (v.ctor === "_Array")
			{
				if (!_Array)
				{
					_Array = Elm.Array.make(localRuntime);
				}
				var list = _Array.toList(v);
				return "Array.fromList " + toString(list);
			}
			else if (v.ctor === "::")
			{
				var output = '[' + toString(v._0);
				v = v._1;
				while (v.ctor === "::")
				{
					output += "," + toString(v._0);
					v = v._1;
				}
				return output + ']';
			}
			else if (v.ctor === "[]")
			{
				return "[]";
			}
			else if (v.ctor === "RBNode" || v.ctor === "RBEmpty")
			{
				if (!Dict)
				{
					Dict = Elm.Dict.make(localRuntime);
				}
				if (!List)
				{
					List = Elm.List.make(localRuntime);
				}
				var list = Dict.toList(v);
				var name = "Dict";
				if (list.ctor === "::" && list._0._1.ctor === "_Tuple0")
				{
					name = "Set";
					list = A2(List.map, function(x){return x._0}, list);
				}
				return name + ".fromList " + toString(list);
			}
			else if (v.ctor.slice(0,5) === "Text:")
			{
				return '<text>'
			}
			else
			{
				var output = "";
				for (var i in v)
				{
					if (i === 'ctor') continue;
					var str = toString(v[i]);
					var parenless = str[0] === '{' || str[0] === '<' || str.indexOf(' ') < 0;
					output += ' ' + (parenless ? str : '(' + str + ')');
				}
				return v.ctor + output;
			}
		}
		if (type === 'object' && 'notify' in v && 'id' in v)
		{
			return 'initialValue' in v
				? '<Signal>'
				: '<Stream>';
		}
		return "<internal structure>";
	};

	function addSlashes(str, isChar)
	{
		var s = str.replace(/\\/g, '\\\\')
				  .replace(/\n/g, '\\n')
				  .replace(/\t/g, '\\t')
				  .replace(/\r/g, '\\r')
				  .replace(/\v/g, '\\v')
				  .replace(/\0/g, '\\0');
		if (isChar)
		{
			return s.replace(/\'/g, "\\'")
		}
		else
		{
			return s.replace(/\"/g, '\\"');
		}
	}

	function probablyPublic(v)
	{
		var keys = Object.keys(v);
		var len = keys.length;
		if (len === 3
			&& 'props' in v
			&& 'element' in v)
		{
			return false;
		}
		else if (len === 5
			&& 'horizontal' in v
			&& 'vertical' in v
			&& 'x' in v
			&& 'y' in v)
		{
			return false;
		}
		else if (len === 7
			&& 'theta' in v
			&& 'scale' in v
			&& 'x' in v
			&& 'y' in v
			&& 'alpha' in v
			&& 'form' in v)
		{
			return false;
		}
		return true;
	}

	return localRuntime.Native.Show.values = {
		toString: toString
	};
};

Elm.Native.Signal = {};
Elm.Native.Signal.make = function(localRuntime) {

	localRuntime.Native = localRuntime.Native || {};
	localRuntime.Native.Signal = localRuntime.Native.Signal || {};
	if (localRuntime.Native.Signal.values)
	{
		return localRuntime.Native.Signal.values;
	}


	var Task = Elm.Native.Task.make(localRuntime);
	var Utils = Elm.Native.Utils.make(localRuntime);


	function broadcastToKids(node, timestamp, update)
	{
		var kids = node.kids;
		for (var i = kids.length; i--; )
		{
			kids[i].notify(timestamp, update, node.id);
		}
	}


	// INPUT

	function input(name, base)
	{
		var node = {
			id: Utils.guid(),
			name: 'input-' + name,
			value: base,
			parents: [],
			kids: []
		};

		node.notify = function(timestamp, targetId, value) {
			var update = targetId === node.id;
			if (update)
			{
				node.value = value;
			}
			broadcastToKids(node, timestamp, update);
			return update;
		};

		localRuntime.inputs.push(node);

		return node;
	}

	function constant(value)
	{
		return input('constant', value);
	}


	// MAILBOX

	function mailbox(base)
	{
		var signal = input('mailbox', base);

		function send(value) {
			return Task.asyncFunction(function(callback) {
				localRuntime.setTimeout(function() {
					localRuntime.notify(signal.id, value);
				}, 0);
				callback(Task.succeed(Utils.Tuple0));
			});
		}

		return {
			_: {},
			signal: signal,
			address: {
				ctor: 'Address',
				_0: send
			}
		};
	}

	function sendMessage(message)
	{
		Task.perform(message._0);
	}


	// OUTPUT

	function output(name, handler, parent)
	{
		var node = {
			id: Utils.guid(),
			name: 'output-' + name,
			parents: [parent],
			isOutput: true
		};

		node.notify = function(timestamp, parentUpdate, parentID)
		{
			if (parentUpdate)
			{
				handler(parent.value);
			}
		};

		parent.kids.push(node);

		return node;
	}


	// MAP

	function mapMany(refreshValue, args)
	{
		var node = {
			id: Utils.guid(),
			name: 'map' + args.length,
			value: refreshValue(),
			parents: args,
			kids: []
		};

		var numberOfParents = args.length;
		var count = 0;
		var update = false;

		node.notify = function(timestamp, parentUpdate, parentID)
		{
			++count;

			update = update || parentUpdate;

			if (count === numberOfParents)
			{
				if (update)
				{
					node.value = refreshValue();
				}
				broadcastToKids(node, timestamp, update);
				update = false;
				count = 0;
			}
		};

		for (var i = numberOfParents; i--; )
		{
			args[i].kids.push(node);
		}

		return node;
	}


	function map(func, a)
	{
		function refreshValue()
		{
			return func(a.value);
		}
		return mapMany(refreshValue, [a]);
	}


	function map2(func, a, b)
	{
		function refreshValue()
		{
			return A2( func, a.value, b.value );
		}
		return mapMany(refreshValue, [a,b]);
	}


	function map3(func, a, b, c)
	{
		function refreshValue()
		{
			return A3( func, a.value, b.value, c.value );
		}
		return mapMany(refreshValue, [a,b,c]);
	}


	function map4(func, a, b, c, d)
	{
		function refreshValue()
		{
			return A4( func, a.value, b.value, c.value, d.value );
		}
		return mapMany(refreshValue, [a,b,c,d]);
	}


	function map5(func, a, b, c, d, e)
	{
		function refreshValue()
		{
			return A5( func, a.value, b.value, c.value, d.value, e.value );
		}
		return mapMany(refreshValue, [a,b,c,d,e]);
	}



	// FOLD

	function foldp(update, state, signal)
	{
		var node = {
			id: Utils.guid(),
			name: 'foldp',
			parents: [signal],
			kids: [],
			value: state
		};

		node.notify = function(timestamp, parentUpdate, parentID)
		{
			if (parentUpdate)
			{
				node.value = A2( update, signal.value, node.value );
			}
			broadcastToKids(node, timestamp, parentUpdate);
		};

		signal.kids.push(node);

		return node;
	}


	// TIME

	function timestamp(signal)
	{
		var node = {
			id: Utils.guid(),
			name: 'timestamp',
			value: Utils.Tuple2(localRuntime.timer.programStart, signal.value),
			parents: [signal],
			kids: []
		};

		node.notify = function(timestamp, parentUpdate, parentID)
		{
			if (parentUpdate)
			{
				node.value = Utils.Tuple2(timestamp, signal.value);
			}
			broadcastToKids(node, timestamp, parentUpdate);
		};

		signal.kids.push(node);

		return node;
	}


	function delay(time, signal)
	{
		var delayed = input('delay-input-' + time, signal.value);

		function handler(value)
		{
			setTimeout(function() {
				localRuntime.notify(delayed.id, value);
			}, time);
		}

		output('delay-output-' + time, handler, signal);

		return delayed;
	}


	// MERGING

	function genericMerge(tieBreaker, leftStream, rightStream)
	{
		var node = {
			id: Utils.guid(),
			name: 'merge',
			value: A2(tieBreaker, leftStream.value, rightStream.value),
			parents: [leftStream, rightStream],
			kids: []
		};

		var left = { touched: false, update: false, value: null };
		var right = { touched: false, update: false, value: null };

		node.notify = function(timestamp, parentUpdate, parentID)
		{
			if (parentID === leftStream.id)
			{
				left.touched = true;
				left.update = parentUpdate;
				left.value = leftStream.value;
			}
			if (parentID === rightStream.id)
			{
				right.touched = true;
				right.update = parentUpdate;
				right.value = rightStream.value;
			}

			if (left.touched && right.touched)
			{
				var update = false;
				if (left.update && right.update)
				{
					node.value = A2(tieBreaker, left.value, right.value);
					update = true;
				}
				else if (left.update)
				{
					node.value = left.value;
					update = true;
				}
				else if (right.update)
				{
					node.value = right.value;
					update = true;
				}
				left.touched = false;
				right.touched = false;

				broadcastToKids(node, timestamp, update);
			}
		};

		leftStream.kids.push(node);
		rightStream.kids.push(node);

		return node;
	}


	// FILTERING

	function filterMap(toMaybe, base, signal)
	{
		var maybe = toMaybe(signal.value);
		var node = {
			id: Utils.guid(),
			name: 'filterMap',
			value: maybe.ctor === 'Nothing' ? base : maybe._0,
			parents: [signal],
			kids: []
		};

		node.notify = function(timestamp, parentUpdate, parentID)
		{
			var update = false;
			if (parentUpdate)
			{
				var maybe = toMaybe(signal.value);
				if (maybe.ctor === 'Just')
				{
					update = true;
					node.value = maybe._0;
				}
			}
			broadcastToKids(node, timestamp, update);
		};

		signal.kids.push(node);

		return node;
	}


	// SAMPLING

	function sampleOn(ticker, signal)
	{
		var node = {
			id: Utils.guid(),
			name: 'sampleOn',
			value: signal.value,
			parents: [ticker, signal],
			kids: []
		};

		var signalTouch = false;
		var tickerTouch = false;
		var tickerUpdate = false;

		node.notify = function(timestamp, parentUpdate, parentID)
		{
			if (parentID === ticker.id)
			{
				tickerTouch = true;
				tickerUpdate = parentUpdate;
			}
			if (parentID === signal.id)
			{
				signalTouch = true;
			}

			if (tickerTouch && signalTouch)
			{
				if (tickerUpdate)
				{
					node.value = signal.value;
				}
				tickerTouch = false;
				signalTouch = false;

				broadcastToKids(node, timestamp, tickerUpdate);
			}
		};

		ticker.kids.push(node);
		signal.kids.push(node);

		return node;
	}


	// DROP REPEATS

	function dropRepeats(signal)
	{
		var node = {
			id: Utils.guid(),
			name: 'dropRepeats',
			value: signal.value,
			parents: [signal],
			kids: []
		};

		node.notify = function(timestamp, parentUpdate, parentID)
		{
			var update = false;
			if (parentUpdate && !Utils.eq(node.value, signal.value))
			{
				node.value = signal.value;
				update = true;
			}
			broadcastToKids(node, timestamp, update);
		};

		signal.kids.push(node);

		return node;
	}


	return localRuntime.Native.Signal.values = {
		input: input,
		constant: constant,
		mailbox: mailbox,
		sendMessage: sendMessage,
		output: output,
		map: F2(map),
		map2: F3(map2),
		map3: F4(map3),
		map4: F5(map4),
		map5: F6(map5),
		foldp: F3(foldp),
		genericMerge: F3(genericMerge),
		filterMap: F3(filterMap),
		sampleOn: F2(sampleOn),
		dropRepeats: dropRepeats,
		timestamp: timestamp,
		delay: F2(delay)
	};
};

Elm.Native.String = {};
Elm.Native.String.make = function(localRuntime) {

	localRuntime.Native = localRuntime.Native || {};
	localRuntime.Native.String = localRuntime.Native.String || {};
	if (localRuntime.Native.String.values)
	{
		return localRuntime.Native.String.values;
	}
	if ('values' in Elm.Native.String)
	{
		return localRuntime.Native.String.values = Elm.Native.String.values;
	}


	var Char = Elm.Char.make(localRuntime);
	var List = Elm.Native.List.make(localRuntime);
	var Maybe = Elm.Maybe.make(localRuntime);
	var Result = Elm.Result.make(localRuntime);
	var Utils = Elm.Native.Utils.make(localRuntime);

	function isEmpty(str)
	{
		return str.length === 0;
	}
	function cons(chr,str)
	{
		return chr + str;
	}
	function uncons(str)
	{
		var hd;
		return (hd = str[0])
			? Maybe.Just(Utils.Tuple2(Utils.chr(hd), str.slice(1)))
			: Maybe.Nothing;
	}
	function append(a,b)
	{
		return a + b;
	}
	function concat(strs)
	{
		return List.toArray(strs).join('');
	}
	function length(str)
	{
		return str.length;
	}
	function map(f,str)
	{
		var out = str.split('');
		for (var i = out.length; i--; )
		{
			out[i] = f(Utils.chr(out[i]));
		}
		return out.join('');
	}
	function filter(pred,str)
	{
		return str.split('').map(Utils.chr).filter(pred).join('');
	}
	function reverse(str)
	{
		return str.split('').reverse().join('');
	}
	function foldl(f,b,str)
	{
		var len = str.length;
		for (var i = 0; i < len; ++i)
		{
			b = A2(f, Utils.chr(str[i]), b);
		}
		return b;
	}
	function foldr(f,b,str)
	{
		for (var i = str.length; i--; )
		{
			b = A2(f, Utils.chr(str[i]), b);
		}
		return b;
	}

	function split(sep, str)
	{
		return List.fromArray(str.split(sep));
	}
	function join(sep, strs)
	{
		return List.toArray(strs).join(sep);
	}
	function repeat(n, str)
	{
		var result = '';
		while (n > 0)
		{
			if (n & 1)
			{
				result += str;
			}
			n >>= 1, str += str;
		}
		return result;
	}

	function slice(start, end, str)
	{
		return str.slice(start,end);
	}
	function left(n, str)
	{
		return n < 1 ? "" : str.slice(0,n);
	}
	function right(n, str)
	{
		return n < 1 ? "" : str.slice(-n);
	}
	function dropLeft(n, str)
	{
		return n < 1 ? str : str.slice(n);
	}
	function dropRight(n, str)
	{
		return n < 1 ? str : str.slice(0,-n);
	}

	function pad(n,chr,str)
	{
		var half = (n - str.length) / 2;
		return repeat(Math.ceil(half),chr) + str + repeat(half|0,chr);
	}
	function padRight(n,chr,str)
	{
		return str + repeat(n - str.length, chr);
	}
	function padLeft(n,chr,str)
	{
		return repeat(n - str.length, chr) + str;
	}

	function trim(str)
	{
		return str.trim();
	}
	function trimLeft(str)
	{
		return str.trimLeft();
	}
	function trimRight(str)
	{
		return str.trimRight();
	}

	function words(str)
	{
		return List.fromArray(str.trim().split(/\s+/g));
	}
	function lines(str)
	{
		return List.fromArray(str.split(/\r\n|\r|\n/g));
	}

	function toUpper(str)
	{
		return str.toUpperCase();
	}
	function toLower(str)
	{
		return str.toLowerCase();
	}

	function any(pred, str)
	{
		for (var i = str.length; i--; )
		{
			if (pred(Utils.chr(str[i])))
			{
				return true;
			}
		}
		return false;
	}
	function all(pred, str)
	{
		for (var i = str.length; i--; )
		{
			if (!pred(Utils.chr(str[i])))
			{
				return false;
			}
		}
		return true;
	}

	function contains(sub, str)
	{
		return str.indexOf(sub) > -1;
	}
	function startsWith(sub, str)
	{
		return str.indexOf(sub) === 0;
	}
	function endsWith(sub, str)
	{
		return str.length >= sub.length &&
			str.lastIndexOf(sub) === str.length - sub.length;
	}
	function indexes(sub, str)
	{
		var subLen = sub.length;
		var i = 0;
		var is = [];
		while ((i = str.indexOf(sub, i)) > -1)
		{
			is.push(i);
			i = i + subLen;
		}
		return List.fromArray(is);
	}

	function toInt(s)
	{
		var len = s.length;
		if (len === 0)
		{
			return Result.Err("could not convert string '" + s + "' to an Int" );
		}
		var start = 0;
		if (s[0] == '-')
		{
			if (len === 1)
			{
				return Result.Err("could not convert string '" + s + "' to an Int" );
			}
			start = 1;
		}
		for (var i = start; i < len; ++i)
		{
			if (!Char.isDigit(s[i]))
			{
				return Result.Err("could not convert string '" + s + "' to an Int" );
			}
		}
		return Result.Ok(parseInt(s, 10));
	}

	function toFloat(s)
	{
		var len = s.length;
		if (len === 0)
		{
			return Result.Err("could not convert string '" + s + "' to a Float" );
		}
		var start = 0;
		if (s[0] == '-')
		{
			if (len === 1)
			{
				return Result.Err("could not convert string '" + s + "' to a Float" );
			}
			start = 1;
		}
		var dotCount = 0;
		for (var i = start; i < len; ++i)
		{
			if (Char.isDigit(s[i]))
			{
				continue;
			}
			if (s[i] === '.')
			{
				dotCount += 1;
				if (dotCount <= 1)
				{
					continue;
				}
			}
			return Result.Err("could not convert string '" + s + "' to a Float" );
		}
		return Result.Ok(parseFloat(s));
	}

	function toList(str)
	{
		return List.fromArray(str.split('').map(Utils.chr));
	}
	function fromList(chars)
	{
		return List.toArray(chars).join('');
	}

	return Elm.Native.String.values = {
		isEmpty: isEmpty,
		cons: F2(cons),
		uncons: uncons,
		append: F2(append),
		concat: concat,
		length: length,
		map: F2(map),
		filter: F2(filter),
		reverse: reverse,
		foldl: F3(foldl),
		foldr: F3(foldr),

		split: F2(split),
		join: F2(join),
		repeat: F2(repeat),

		slice: F3(slice),
		left: F2(left),
		right: F2(right),
		dropLeft: F2(dropLeft),
		dropRight: F2(dropRight),

		pad: F3(pad),
		padLeft: F3(padLeft),
		padRight: F3(padRight),

		trim: trim,
		trimLeft: trimLeft,
		trimRight: trimRight,

		words: words,
		lines: lines,

		toUpper: toUpper,
		toLower: toLower,

		any: F2(any),
		all: F2(all),

		contains: F2(contains),
		startsWith: F2(startsWith),
		endsWith: F2(endsWith),
		indexes: F2(indexes),

		toInt: toInt,
		toFloat: toFloat,
		toList: toList,
		fromList: fromList
	};
};

Elm.Native.Task = {};
Elm.Native.Task.make = function(localRuntime) {

	localRuntime.Native = localRuntime.Native || {};
	localRuntime.Native.Task = localRuntime.Native.Task || {};
	if (localRuntime.Native.Task.values)
	{
		return localRuntime.Native.Task.values;
	}

	var Result = Elm.Result.make(localRuntime);
	var Signal;
	var Utils = Elm.Native.Utils.make(localRuntime);


	// CONSTRUCTORS

	function succeed(value)
	{
		return {
			tag: 'Succeed',
			value: value
		};
	}

	function fail(error)
	{
		return {
			tag: 'Fail',
			value: error
		};
	}

	function asyncFunction(func)
	{
		return {
			tag: 'Async',
			asyncFunction: func
		};
	}

	function andThen(task, callback)
	{
		return {
			tag: 'AndThen',
			task: task,
			callback: callback
		};
	}

	function catch_(task, callback)
	{
		return {
			tag: 'Catch',
			task: task,
			callback: callback
		};
	}


	// RUNNER

	function perform(task) {
		runTask({ task: task }, function() {});
	}

	function performSignal(name, signal)
	{
		var workQueue = [];

		function onComplete()
		{
			workQueue.shift();

			setTimeout(function() {
				if (workQueue.length > 0)
				{
					runTask(workQueue[0], onComplete);
				}
			}, 0);
		}

		function register(task)
		{
			var root = { task: task };
			workQueue.push(root);
			if (workQueue.length === 1)
			{
				runTask(root, onComplete);
			}
		}

		if (!Signal)
		{
			Signal = Elm.Native.Signal.make(localRuntime);
		}
		Signal.output('perform-tasks-' + name, register, signal);

		register(signal.value);

		return signal;
	}

	function mark(status, task)
	{
		return { status: status, task: task };
	}

	function runTask(root, onComplete)
	{
		var result = mark('runnable', root.task);
		while (result.status === 'runnable')
		{
			result = stepTask(onComplete, root, result.task);
		}

		if (result.status === 'done')
		{
			root.task = result.task;
			onComplete();
		}

		if (result.status === 'blocked')
		{
			root.task = result.task;
		}
	}

	function stepTask(onComplete, root, task)
	{
		var tag = task.tag;

		if (tag === 'Succeed' || tag === 'Fail')
		{
			return mark('done', task);
		}

		if (tag === 'Async')
		{
			var placeHolder = {};
			var couldBeSync = true;
			var wasSync = false;

			task.asyncFunction(function(result) {
				placeHolder.tag = result.tag;
				placeHolder.value = result.value;
				if (couldBeSync)
				{
					wasSync = true;
				}
				else
				{
					runTask(root, onComplete);
				}
			});
			couldBeSync = false;
			return mark(wasSync ? 'done' : 'blocked', placeHolder);
		}

		if (tag === 'AndThen' || tag === 'Catch')
		{
			var result = mark('runnable', task.task);
			while (result.status === 'runnable')
			{
				result = stepTask(onComplete, root, result.task);
			}

			if (result.status === 'done')
			{
				var activeTask = result.task;
				var activeTag = activeTask.tag;

				var succeedChain = activeTag === 'Succeed' && tag === 'AndThen';
				var failChain = activeTag === 'Fail' && tag === 'Catch';

				return (succeedChain || failChain)
					? mark('runnable', task.callback(activeTask.value))
					: mark('runnable', activeTask);
			}
			if (result.status === 'blocked')
			{
				return mark('blocked', {
					tag: tag,
					task: result.task,
					callback: task.callback
				});
			}
		}
	}


	// THREADS

	function sleep(time) {
		return asyncFunction(function(callback) {
			setTimeout(function() {
				callback(succeed(Utils.Tuple0));
			}, time);
		});
	}

	function spawn(task) {
		return asyncFunction(function(callback) {
			var id = setTimeout(function() {
				perform(task);
			}, 0);
			callback(succeed(id));
		});
	}


	return localRuntime.Native.Task.values = {
		succeed: succeed,
		fail: fail,
		asyncFunction: asyncFunction,
		andThen: F2(andThen),
		catch_: F2(catch_),
		perform: perform,
		performSignal: performSignal,
		spawn: spawn,
		sleep: sleep
	};
};

Elm.Native.Text = {};
Elm.Native.Text.make = function(localRuntime) {
	localRuntime.Native = localRuntime.Native || {};
	localRuntime.Native.Text = localRuntime.Native.Text || {};
	if (localRuntime.Native.Text.values)
	{
		return localRuntime.Native.Text.values;
	}

	var toCss = Elm.Native.Color.make(localRuntime).toCss;
	var List = Elm.Native.List.make(localRuntime);


	// CONSTRUCTORS

	function fromString(str)
	{
		return {
			ctor: 'Text:Text',
			_0: str
		};
	}

	function append(a, b)
	{
		return {
			ctor: 'Text:Append',
			_0: a,
			_1: b
		};
	}

	function addMeta(field, value, text)
	{
		var newProps = {};
		var newText = {
			ctor: 'Text:Meta',
			_0: newProps,
			_1: text
		};

		if (text.ctor === 'Text:Meta')
		{
			newText._1 = text._1;
			var props = text._0;
			for (var i = metaKeys.length; i--; )
			{
				var key = metaKeys[i];
				var val = props[key];
				if (val)
				{
					newProps[key] = val;
				}
			}
		}
		newProps[field] = value;
		return newText;
	}

	var metaKeys = [
		'font-size',
		'font-family',
		'font-style',
		'font-weight',
		'href',
		'text-decoration',
		'color'
	];


	// conversions from Elm values to CSS

	function toTypefaces(list)
	{
		var typefaces = List.toArray(list);
		for (var i = typefaces.length; i--; )
		{
			var typeface = typefaces[i];
			if (typeface.indexOf(' ') > -1)
			{
				typefaces[i] = "'" + typeface + "'";
			}
		}
		return typefaces.join(',');
	}

	function toLine(line)
	{
		var ctor = line.ctor;
		return ctor === 'Under'
			? 'underline'
			: ctor === 'Over'
				? 'overline'
				: 'line-through';
	}

	// setting styles of Text

	function style(style, text)
	{
		var newText = addMeta('color', toCss(style.color), text);
		var props = newText._0;

		if (style.typeface.ctor !== '[]')
		{
			props['font-family'] = toTypefaces(style.typeface);
		}
		if (style.height.ctor !== "Nothing")
		{
			props['font-size'] = style.height._0 + 'px';
		}
		if (style.bold)
		{
			props['font-weight'] = 'bold';
		}
		if (style.italic)
		{
			props['font-style'] = 'italic';
		}
		if (style.line.ctor !== 'Nothing')
		{
			props['text-decoration'] = toLine(style.line._0);
		}
		return newText;
	}

	function height(px, text)
	{
		return addMeta('font-size', px + 'px', text);
	}

	function typeface(names, text)
	{
		return addMeta('font-family', toTypefaces(names), text);
	}

	function monospace(text)
	{
		return addMeta('font-family', 'monospace', text);
	}

	function italic(text)
	{
		return addMeta('font-style', 'italic', text);
	}

	function bold(text)
	{
		return addMeta('font-weight', 'bold', text);
	}

	function link(href, text)
	{
		return addMeta('href', href, text);
	}

	function line(line, text)
	{
		return addMeta('text-decoration', toLine(line), text);
	}

	function color(color, text)
	{
		return addMeta('color', toCss(color), text);;
	}


	// RENDER

	function renderHtml(text)
	{
		var tag = text.ctor;
		if (tag === 'Text:Append')
		{
			return renderHtml(text._0) + renderHtml(text._1);
		}
		if (tag === 'Text:Text')
		{
			return properEscape(text._0);
		}
		if (tag === 'Text:Meta')
		{
			return renderMeta(text._0, renderHtml(text._1));
		}
	}

	function renderMeta(metas, string)
	{
		var href = metas['href'];
		if (href)
		{
			string = '<a href="' + href + '">' + string + '</a>';
		}
		var styles = '';
		for (var key in metas)
		{
			if (key === 'href')
			{
				continue;
			}
			styles += key + ':' + metas[key] + ';';
		}
		if (styles)
		{
			string = '<span style="' + styles + '">' + string + '</span>';
		}
		return string;
	}

	function properEscape(str)
	{
		if (str.length == 0)
		{
			return str;
		}
		str = str //.replace(/&/g,  "&#38;")
			.replace(/"/g,  '&#34;')
			.replace(/'/g,  "&#39;")
			.replace(/</g,  "&#60;")
			.replace(/>/g,  "&#62;");
		var arr = str.split('\n');
		for (var i = arr.length; i--; )
		{
			arr[i] = makeSpaces(arr[i]);
		}
		return arr.join('<br/>');
	}

	function makeSpaces(s)
	{
		if (s.length == 0)
		{
			return s;
		}
		var arr = s.split('');
		if (arr[0] == ' ')
		{
			arr[0] = "&nbsp;"
		}
		for (var i = arr.length; --i; )
		{
			if (arr[i][0] == ' ' && arr[i-1] == ' ')
			{
				arr[i-1] = arr[i-1] + arr[i];
				arr[i] = '';
			}
		}
		for (var i = arr.length; i--; )
		{
			if (arr[i].length > 1 && arr[i][0] == ' ')
			{
				var spaces = arr[i].split('');
				for (var j = spaces.length - 2; j >= 0; j -= 2)
				{
					spaces[j] = '&nbsp;';
				}
				arr[i] = spaces.join('');
			}
		}
		arr = arr.join('');
		if (arr[arr.length-1] === " ")
		{
			return arr.slice(0,-1) + '&nbsp;';
		}
		return arr;
	}


	return localRuntime.Native.Text.values = {
		fromString: fromString,
		append: F2(append),

		height: F2(height),
		italic: italic,
		bold: bold,
		line: F2(line),
		monospace: monospace,
		typeface: F2(typeface),
		color: F2(color),
		link: F2(link),
		style: F2(style),

		toTypefaces: toTypefaces,
		toLine: toLine,
		renderHtml: renderHtml
	};
};

Elm.Native.Time = {};
Elm.Native.Time.make = function(localRuntime)
{

	localRuntime.Native = localRuntime.Native || {};
	localRuntime.Native.Time = localRuntime.Native.Time || {};
	if (localRuntime.Native.Time.values)
	{
		return localRuntime.Native.Time.values;
	}

	var NS = Elm.Native.Signal.make(localRuntime);
	var Maybe = Elm.Maybe.make(localRuntime);


	// FRAMES PER SECOND

	function fpsWhen(desiredFPS, isOn)
	{
		var msPerFrame = 1000 / desiredFPS;
		var ticker = NS.input('fps-' + desiredFPS, null);

		function notifyTicker()
		{
			localRuntime.notify(ticker.id, null);
		}

		function firstArg(x, y)
		{
			return x;
		}

		// input fires either when isOn changes, or when ticker fires.
		// Its value is a tuple with the current timestamp, and the state of isOn
		var input = NS.timestamp(A3(NS.map2, F2(firstArg), NS.dropRepeats(isOn), ticker));

		var initialState = {
			isOn: false,
			time: localRuntime.timer.programStart,
			delta: 0
		};

		var timeoutId;

		function update(input,state)
		{
			var currentTime = input._0;
			var isOn = input._1;
			var wasOn = state.isOn;
			var previousTime = state.time;

			if (isOn)
			{
				timeoutId = localRuntime.setTimeout(notifyTicker, msPerFrame);
			}
			else if (wasOn)
			{
				clearTimeout(timeoutId);
			}

			return {
				isOn: isOn,
				time: currentTime,
				delta: (isOn && !wasOn) ? 0 : currentTime - previousTime
			};
		}

		return A2(
			NS.map,
			function(state) { return state.delta; },
			A3(NS.foldp, F2(update), update(input.value,initialState), input)
		);
	}


	// EVERY

	function every(t)
	{
		var ticker = NS.input('every-' + t, null);
		function tellTime()
		{
			localRuntime.notify(ticker.id, null);
		}
		var clock = A2( NS.map, fst, NS.timestamp(ticker) );
		setInterval(tellTime, t);
		return clock;
	}


	function fst(pair)
	{
		return pair._0;
	}


	function read(s)
	{
		var t = Date.parse(s);
		return isNaN(t) ? Maybe.Nothing : Maybe.Just(t);
	}

	return localRuntime.Native.Time.values = {
		fpsWhen: F2(fpsWhen),
		every: every,
		toDate: function(t) { return new window.Date(t); },
		read: read
	};

};

Elm.Native.Transform2D = {};
Elm.Native.Transform2D.make = function(localRuntime) {

	localRuntime.Native = localRuntime.Native || {};
	localRuntime.Native.Transform2D = localRuntime.Native.Transform2D || {};
	if (localRuntime.Native.Transform2D.values)
	{
		return localRuntime.Native.Transform2D.values;
	}

	var A;
	if (typeof Float32Array === 'undefined')
	{
		A = function(arr)
		{
			this.length = arr.length;
			this[0] = arr[0];
			this[1] = arr[1];
			this[2] = arr[2];
			this[3] = arr[3];
			this[4] = arr[4];
			this[5] = arr[5];
		};
	}
	else
	{
		A = Float32Array;
	}

	// layout of matrix in an array is
	//
	//   | m11 m12 dx |
	//   | m21 m22 dy |
	//   |  0   0   1 |
	//
	//  new A([ m11, m12, dx, m21, m22, dy ])

	var identity = new A([1,0,0,0,1,0]);
	function matrix(m11, m12, m21, m22, dx, dy)
	{
		return new A([m11, m12, dx, m21, m22, dy]);
	}

	function rotation(t)
	{
		var c = Math.cos(t);
		var s = Math.sin(t);
		return new A([c, -s, 0, s, c, 0]);
	}

	function rotate(t,m)
	{
		var c = Math.cos(t);
		var s = Math.sin(t);
		var m11 = m[0], m12 = m[1], m21 = m[3], m22 = m[4];
		return new A([m11*c + m12*s, -m11*s + m12*c, m[2],
					  m21*c + m22*s, -m21*s + m22*c, m[5]]);
	}
	/*
	function move(xy,m) {
		var x = xy._0;
		var y = xy._1;
		var m11 = m[0], m12 = m[1], m21 = m[3], m22 = m[4];
		return new A([m11, m12, m11*x + m12*y + m[2],
					  m21, m22, m21*x + m22*y + m[5]]);
	}
	function scale(s,m) { return new A([m[0]*s, m[1]*s, m[2], m[3]*s, m[4]*s, m[5]]); }
	function scaleX(x,m) { return new A([m[0]*x, m[1], m[2], m[3]*x, m[4], m[5]]); }
	function scaleY(y,m) { return new A([m[0], m[1]*y, m[2], m[3], m[4]*y, m[5]]); }
	function reflectX(m) { return new A([-m[0], m[1], m[2], -m[3], m[4], m[5]]); }
	function reflectY(m) { return new A([m[0], -m[1], m[2], m[3], -m[4], m[5]]); }

	function transform(m11, m21, m12, m22, mdx, mdy, n) {
		var n11 = n[0], n12 = n[1], n21 = n[3], n22 = n[4], ndx = n[2], ndy = n[5];
		return new A([m11*n11 + m12*n21,
					  m11*n12 + m12*n22,
					  m11*ndx + m12*ndy + mdx,
					  m21*n11 + m22*n21,
					  m21*n12 + m22*n22,
					  m21*ndx + m22*ndy + mdy]);
	}
	*/
	function multiply(m, n)
	{
		var m11 = m[0], m12 = m[1], m21 = m[3], m22 = m[4], mdx = m[2], mdy = m[5];
		var n11 = n[0], n12 = n[1], n21 = n[3], n22 = n[4], ndx = n[2], ndy = n[5];
		return new A([m11*n11 + m12*n21,
					  m11*n12 + m12*n22,
					  m11*ndx + m12*ndy + mdx,
					  m21*n11 + m22*n21,
					  m21*n12 + m22*n22,
					  m21*ndx + m22*ndy + mdy]);
	}

	return localRuntime.Native.Transform2D.values = {
		identity:identity,
		matrix:F6(matrix),
		rotation:rotation,
		multiply:F2(multiply)
		/*
		transform:F7(transform),
		rotate:F2(rotate),
		move:F2(move),
		scale:F2(scale),
		scaleX:F2(scaleX),
		scaleY:F2(scaleY),
		reflectX:reflectX,
		reflectY:reflectY
		*/
	};

};

Elm.Native = Elm.Native || {};
Elm.Native.Utils = {};
Elm.Native.Utils.make = function(localRuntime) {

	localRuntime.Native = localRuntime.Native || {};
	localRuntime.Native.Utils = localRuntime.Native.Utils || {};
	if (localRuntime.Native.Utils.values)
	{
		return localRuntime.Native.Utils.values;
	}

	function eq(l,r)
	{
		var stack = [{'x': l, 'y': r}]
		while (stack.length > 0)
		{
			var front = stack.pop();
			var x = front.x;
			var y = front.y;
			if (x === y)
			{
				continue;
			}
			if (typeof x === "object")
			{
				var c = 0;
				for (var i in x)
				{
					++c;
					if (i in y)
					{
						if (i !== 'ctor')
						{
							stack.push({ 'x': x[i], 'y': y[i] });
						}
					}
					else
					{
						return false;
					}
				}
				if ('ctor' in x)
				{
					stack.push({'x': x.ctor, 'y': y.ctor});
				}
				if (c !== Object.keys(y).length)
				{
					return false;
				}
			}
			else if (typeof x === 'function')
			{
				throw new Error('Equality error: general function equality is ' +
								'undecidable, and therefore, unsupported');
			}
			else
			{
				return false;
			}
		}
		return true;
	}

	// code in Generate/JavaScript.hs depends on the particular
	// integer values assigned to LT, EQ, and GT
	var LT = -1, EQ = 0, GT = 1, ord = ['LT','EQ','GT'];

	function compare(x,y)
	{
		return {
			ctor: ord[cmp(x,y)+1]
		};
	}

	function cmp(x,y) {
		var ord;
		if (typeof x !== 'object')
		{
			return x === y ? EQ : x < y ? LT : GT;
		}
		else if (x.isChar)
		{
			var a = x.toString();
			var b = y.toString();
			return a === b
				? EQ
				: a < b
					? LT
					: GT;
		}
		else if (x.ctor === "::" || x.ctor === "[]")
		{
			while (true)
			{
				if (x.ctor === "[]" && y.ctor === "[]")
				{
					return EQ;
				}
				if (x.ctor !== y.ctor)
				{
					return x.ctor === '[]' ? LT : GT;
				}
				ord = cmp(x._0, y._0);
				if (ord !== EQ)
				{
					return ord;
				}
				x = x._1;
				y = y._1;
			}
		}
		else if (x.ctor.slice(0,6) === '_Tuple')
		{
			var n = x.ctor.slice(6) - 0;
			var err = 'cannot compare tuples with more than 6 elements.';
			if (n === 0) return EQ;
			if (n >= 1) { ord = cmp(x._0, y._0); if (ord !== EQ) return ord;
			if (n >= 2) { ord = cmp(x._1, y._1); if (ord !== EQ) return ord;
			if (n >= 3) { ord = cmp(x._2, y._2); if (ord !== EQ) return ord;
			if (n >= 4) { ord = cmp(x._3, y._3); if (ord !== EQ) return ord;
			if (n >= 5) { ord = cmp(x._4, y._4); if (ord !== EQ) return ord;
			if (n >= 6) { ord = cmp(x._5, y._5); if (ord !== EQ) return ord;
			if (n >= 7) throw new Error('Comparison error: ' + err); } } } } } }
			return EQ;
		}
		else
		{
			throw new Error('Comparison error: comparison is only defined on ints, ' +
							'floats, times, chars, strings, lists of comparable values, ' +
							'and tuples of comparable values.');
		}
	}


	var Tuple0 = {
		ctor: "_Tuple0"
	};

	function Tuple2(x,y)
	{
		return {
			ctor: "_Tuple2",
			_0: x,
			_1: y
		};
	}

	function chr(c)
	{
		var x = new String(c);
		x.isChar = true;
		return x;
	}

	function txt(str)
	{
		var t = new String(str);
		t.text = true;
		return t;
	}

	var count = 0;
	function guid(_)
	{
		return count++
	}

	function copy(oldRecord)
	{
		var newRecord = {};
		for (var key in oldRecord)
		{
			var value = key === '_'
				? copy(oldRecord._)
				: oldRecord[key];
			newRecord[key] = value;
		}
		return newRecord;
	}

	function remove(key, oldRecord)
	{
		var record = copy(oldRecord);
		if (key in record._)
		{
			record[key] = record._[key][0];
			record._[key] = record._[key].slice(1);
			if (record._[key].length === 0)
			{
				delete record._[key];
			}
		}
		else
		{
			delete record[key];
		}
		return record;
	}

	function replace(keyValuePairs, oldRecord)
	{
		var record = copy(oldRecord);
		for (var i = keyValuePairs.length; i--; )
		{
			var pair = keyValuePairs[i];
			record[pair[0]] = pair[1];
		}
		return record;
	}

	function insert(key, value, oldRecord)
	{
		var newRecord = copy(oldRecord);
		if (key in newRecord)
		{
			var values = newRecord._[key];
			var copiedValues = values ? values.slice(0) : [];
			newRecord._[key] = [newRecord[key]].concat(copiedValues);
		}
		newRecord[key] = value;
		return newRecord;
	}

	function getXY(e)
	{
		var posx = 0;
		var posy = 0;
		if (e.pageX || e.pageY)
		{
			posx = e.pageX;
			posy = e.pageY;
		}
		else if (e.clientX || e.clientY)
		{
			posx = e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
			posy = e.clientY + document.body.scrollTop + document.documentElement.scrollTop;
		}

		if (localRuntime.isEmbed())
		{
			var rect = localRuntime.node.getBoundingClientRect();
			var relx = rect.left + document.body.scrollLeft + document.documentElement.scrollLeft;
			var rely = rect.top + document.body.scrollTop + document.documentElement.scrollTop;
			// TODO: figure out if there is a way to avoid rounding here
			posx = posx - Math.round(relx) - localRuntime.node.clientLeft;
			posy = posy - Math.round(rely) - localRuntime.node.clientTop;
		}
		return Tuple2(posx, posy);
	}


	//// LIST STUFF ////

	var Nil = { ctor:'[]' };

	function Cons(hd,tl)
	{
		return {
			ctor: "::",
			_0: hd,
			_1: tl
		};
	}

	function append(xs,ys)
	{
		// append Strings
		if (typeof xs === "string")
		{
			return xs + ys;
		}

		// append Text
		if (xs.ctor.slice(0,5) === 'Text:')
		{
			return {
				ctor: 'Text:Append',
				_0: xs,
				_1: ys
			};
		}



		// append Lists
		if (xs.ctor === '[]')
		{
			return ys;
		}
		var root = Cons(xs._0, Nil);
		var curr = root;
		xs = xs._1;
		while (xs.ctor !== '[]')
		{
			curr._1 = Cons(xs._0, Nil);
			xs = xs._1;
			curr = curr._1;
		}
		curr._1 = ys;
		return root;
	}

	//// RUNTIME ERRORS ////

	function indent(lines)
	{
		return '\n' + lines.join('\n');
	}

	function badCase(moduleName, span)
	{
		var msg = indent([
			'Non-exhaustive pattern match in case-expression.',
			'Make sure your patterns cover every case!'
		]);
		throw new Error('Runtime error in module ' + moduleName + ' (' + span + ')' + msg);
	}

	function badIf(moduleName, span)
	{
		var msg = indent([
			'Non-exhaustive pattern match in multi-way-if expression.',
			'It is best to use \'otherwise\' as the last branch of multi-way-if.'
		]);
		throw new Error('Runtime error in module ' + moduleName + ' (' + span + ')' + msg);
	}


	function badPort(expected, received)
	{
		var msg = indent([
			'Expecting ' + expected + ' but was given ',
			JSON.stringify(received)
		]);
		throw new Error('Runtime error when sending values through a port.' + msg);
	}


	return localRuntime.Native.Utils.values = {
		eq: eq,
		cmp: cmp,
		compare: F2(compare),
		Tuple0: Tuple0,
		Tuple2: Tuple2,
		chr: chr,
		txt: txt,
		copy: copy,
		remove: remove,
		replace: replace,
		insert: insert,
		guid: guid,
		getXY: getXY,

		Nil: Nil,
		Cons: Cons,
		append: F2(append),

		badCase: badCase,
		badIf: badIf,
		badPort: badPort
	};
};

Elm.Native = Elm.Native || {};
Elm.Native.Window = {};
Elm.Native.Window.make = function(localRuntime) {

	localRuntime.Native = localRuntime.Native || {};
	localRuntime.Native.Window = localRuntime.Native.Window || {};
	if (localRuntime.Native.Window.values)
	{
		return localRuntime.Native.Window.values;
	}

	var NS = Elm.Native.Signal.make(localRuntime);
	var Tuple2 = Elm.Native.Utils.make(localRuntime).Tuple2;


	function getWidth()
	{
		return localRuntime.node.clientWidth;
	}


	function getHeight()
	{
		if (localRuntime.isFullscreen())
		{
			return window.innerHeight;
		}
		return localRuntime.node.clientHeight;
	}


	var dimensions = NS.input('Window.dimensions', Tuple2(getWidth(), getHeight()));


	function resizeIfNeeded()
	{
		// Do not trigger event if the dimensions have not changed.
		// This should be most of the time.
		var w = getWidth();
		var h = getHeight();
		if (dimensions.value._0 === w && dimensions.value._1 === h)
		{
			return;
		}

		setTimeout(function () {
			// Check again to see if the dimensions have changed.
			// It is conceivable that the dimensions have changed
			// again while some other event was being processed.
			var w = getWidth();
			var h = getHeight();
			if (dimensions.value._0 === w && dimensions.value._1 === h)
			{
				return;
			}
			localRuntime.notify(dimensions.id, Tuple2(w,h));
		}, 0);
	}


	localRuntime.addListener([dimensions.id], window, 'resize', resizeIfNeeded);


	return localRuntime.Native.Window.values = {
		dimensions: dimensions,
		resizeIfNeeded: resizeIfNeeded
	};
};

Elm.Regex = Elm.Regex || {};
Elm.Regex.make = function (_elm) {
   "use strict";
   _elm.Regex = _elm.Regex || {};
   if (_elm.Regex.values)
   return _elm.Regex.values;
   var _op = {},
   _N = Elm.Native,
   _U = _N.Utils.make(_elm),
   _L = _N.List.make(_elm),
   $moduleName = "Regex",
   $Maybe = Elm.Maybe.make(_elm),
   $Native$Regex = Elm.Native.Regex.make(_elm);
   var split = $Native$Regex.split;
   var replace = $Native$Regex.replace;
   var find = $Native$Regex.find;
   var AtMost = function (a) {
      return {ctor: "AtMost"
             ,_0: a};
   };
   var All = {ctor: "All"};
   var Match = F4(function (a,
   b,
   c,
   d) {
      return {_: {}
             ,index: c
             ,match: a
             ,number: d
             ,submatches: b};
   });
   var contains = $Native$Regex.contains;
   var caseInsensitive = $Native$Regex.caseInsensitive;
   var regex = $Native$Regex.regex;
   var escape = $Native$Regex.escape;
   var Regex = {ctor: "Regex"};
   _elm.Regex.values = {_op: _op
                       ,regex: regex
                       ,escape: escape
                       ,caseInsensitive: caseInsensitive
                       ,contains: contains
                       ,find: find
                       ,replace: replace
                       ,split: split
                       ,Match: Match
                       ,All: All
                       ,AtMost: AtMost};
   return _elm.Regex.values;
};
Elm.Result = Elm.Result || {};
Elm.Result.make = function (_elm) {
   "use strict";
   _elm.Result = _elm.Result || {};
   if (_elm.Result.values)
   return _elm.Result.values;
   var _op = {},
   _N = Elm.Native,
   _U = _N.Utils.make(_elm),
   _L = _N.List.make(_elm),
   $moduleName = "Result",
   $Maybe = Elm.Maybe.make(_elm);
   var toMaybe = function (result) {
      return function () {
         switch (result.ctor)
         {case "Err":
            return $Maybe.Nothing;
            case "Ok":
            return $Maybe.Just(result._0);}
         _U.badCase($moduleName,
         "between lines 164 and 177");
      }();
   };
   var Err = function (a) {
      return {ctor: "Err",_0: a};
   };
   var andThen = F2(function (result,
   callback) {
      return function () {
         switch (result.ctor)
         {case "Err":
            return Err(result._0);
            case "Ok":
            return callback(result._0);}
         _U.badCase($moduleName,
         "between lines 126 and 145");
      }();
   });
   var Ok = function (a) {
      return {ctor: "Ok",_0: a};
   };
   var map = F2(function (func,
   ra) {
      return function () {
         switch (ra.ctor)
         {case "Err": return Err(ra._0);
            case "Ok":
            return Ok(func(ra._0));}
         _U.badCase($moduleName,
         "between lines 41 and 52");
      }();
   });
   var map2 = F3(function (func,
   ra,
   rb) {
      return function () {
         var _v9 = {ctor: "_Tuple2"
                   ,_0: ra
                   ,_1: rb};
         switch (_v9.ctor)
         {case "_Tuple2":
            switch (_v9._0.ctor)
              {case "Err":
                 return Err(_v9._0._0);
                 case "Ok": switch (_v9._1.ctor)
                   {case "Ok": return Ok(A2(func,
                        _v9._0._0,
                        _v9._1._0));}
                   break;}
              switch (_v9._1.ctor)
              {case "Err":
                 return Err(_v9._1._0);}
              break;}
         _U.badCase($moduleName,
         "between lines 55 and 58");
      }();
   });
   var map3 = F4(function (func,
   ra,
   rb,
   rc) {
      return function () {
         var _v16 = {ctor: "_Tuple3"
                    ,_0: ra
                    ,_1: rb
                    ,_2: rc};
         switch (_v16.ctor)
         {case "_Tuple3":
            switch (_v16._0.ctor)
              {case "Err":
                 return Err(_v16._0._0);
                 case "Ok": switch (_v16._1.ctor)
                   {case "Ok":
                      switch (_v16._2.ctor)
                        {case "Ok": return Ok(A3(func,
                             _v16._0._0,
                             _v16._1._0,
                             _v16._2._0));}
                        break;}
                   break;}
              switch (_v16._1.ctor)
              {case "Err":
                 return Err(_v16._1._0);}
              switch (_v16._2.ctor)
              {case "Err":
                 return Err(_v16._2._0);}
              break;}
         _U.badCase($moduleName,
         "between lines 63 and 67");
      }();
   });
   var map4 = F5(function (func,
   ra,
   rb,
   rc,
   rd) {
      return function () {
         var _v26 = {ctor: "_Tuple4"
                    ,_0: ra
                    ,_1: rb
                    ,_2: rc
                    ,_3: rd};
         switch (_v26.ctor)
         {case "_Tuple4":
            switch (_v26._0.ctor)
              {case "Err":
                 return Err(_v26._0._0);
                 case "Ok": switch (_v26._1.ctor)
                   {case "Ok":
                      switch (_v26._2.ctor)
                        {case "Ok":
                           switch (_v26._3.ctor)
                             {case "Ok": return Ok(A4(func,
                                  _v26._0._0,
                                  _v26._1._0,
                                  _v26._2._0,
                                  _v26._3._0));}
                             break;}
                        break;}
                   break;}
              switch (_v26._1.ctor)
              {case "Err":
                 return Err(_v26._1._0);}
              switch (_v26._2.ctor)
              {case "Err":
                 return Err(_v26._2._0);}
              switch (_v26._3.ctor)
              {case "Err":
                 return Err(_v26._3._0);}
              break;}
         _U.badCase($moduleName,
         "between lines 72 and 77");
      }();
   });
   var map5 = F6(function (func,
   ra,
   rb,
   rc,
   rd,
   re) {
      return function () {
         var _v39 = {ctor: "_Tuple5"
                    ,_0: ra
                    ,_1: rb
                    ,_2: rc
                    ,_3: rd
                    ,_4: re};
         switch (_v39.ctor)
         {case "_Tuple5":
            switch (_v39._0.ctor)
              {case "Err":
                 return Err(_v39._0._0);
                 case "Ok": switch (_v39._1.ctor)
                   {case "Ok":
                      switch (_v39._2.ctor)
                        {case "Ok":
                           switch (_v39._3.ctor)
                             {case "Ok":
                                switch (_v39._4.ctor)
                                  {case "Ok": return Ok(A5(func,
                                       _v39._0._0,
                                       _v39._1._0,
                                       _v39._2._0,
                                       _v39._3._0,
                                       _v39._4._0));}
                                  break;}
                             break;}
                        break;}
                   break;}
              switch (_v39._1.ctor)
              {case "Err":
                 return Err(_v39._1._0);}
              switch (_v39._2.ctor)
              {case "Err":
                 return Err(_v39._2._0);}
              switch (_v39._3.ctor)
              {case "Err":
                 return Err(_v39._3._0);}
              switch (_v39._4.ctor)
              {case "Err":
                 return Err(_v39._4._0);}
              break;}
         _U.badCase($moduleName,
         "between lines 82 and 123");
      }();
   });
   var formatError = F2(function (f,
   result) {
      return function () {
         switch (result.ctor)
         {case "Err":
            return Err(f(result._0));
            case "Ok":
            return Ok(result._0);}
         _U.badCase($moduleName,
         "between lines 148 and 161");
      }();
   });
   var fromMaybe = F2(function (err,
   maybe) {
      return function () {
         switch (maybe.ctor)
         {case "Just":
            return Ok(maybe._0);
            case "Nothing":
            return Err(err);}
         _U.badCase($moduleName,
         "between lines 180 and 182");
      }();
   });
   _elm.Result.values = {_op: _op
                        ,map: map
                        ,map2: map2
                        ,map3: map3
                        ,map4: map4
                        ,map5: map5
                        ,andThen: andThen
                        ,toMaybe: toMaybe
                        ,fromMaybe: fromMaybe
                        ,formatError: formatError
                        ,Ok: Ok
                        ,Err: Err};
   return _elm.Result.values;
};
Elm.Set = Elm.Set || {};
Elm.Set.make = function (_elm) {
   "use strict";
   _elm.Set = _elm.Set || {};
   if (_elm.Set.values)
   return _elm.Set.values;
   var _op = {},
   _N = Elm.Native,
   _U = _N.Utils.make(_elm),
   _L = _N.List.make(_elm),
   $moduleName = "Set",
   $Dict = Elm.Dict.make(_elm),
   $List = Elm.List.make(_elm);
   var partition = F2(function (p,
   set) {
      return A2($Dict.partition,
      F2(function (k,_v0) {
         return function () {
            return p(k);
         }();
      }),
      set);
   });
   var filter = F2(function (p,
   set) {
      return A2($Dict.filter,
      F2(function (k,_v2) {
         return function () {
            return p(k);
         }();
      }),
      set);
   });
   var foldr = F3(function (f,
   b,
   s) {
      return A3($Dict.foldr,
      F3(function (k,_v4,b) {
         return function () {
            return A2(f,k,b);
         }();
      }),
      b,
      s);
   });
   var foldl = F3(function (f,
   b,
   s) {
      return A3($Dict.foldl,
      F3(function (k,_v6,b) {
         return function () {
            return A2(f,k,b);
         }();
      }),
      b,
      s);
   });
   var toList = $Dict.keys;
   var diff = $Dict.diff;
   var intersect = $Dict.intersect;
   var union = $Dict.union;
   var member = $Dict.member;
   var remove = $Dict.remove;
   var insert = function (k) {
      return A2($Dict.insert,
      k,
      {ctor: "_Tuple0"});
   };
   var singleton = function (k) {
      return A2($Dict.singleton,
      k,
      {ctor: "_Tuple0"});
   };
   var empty = $Dict.empty;
   var fromList = function (xs) {
      return A3($List.foldl,
      insert,
      empty,
      xs);
   };
   var map = F2(function (f,s) {
      return fromList(A2($List.map,
      f,
      toList(s)));
   });
   _elm.Set.values = {_op: _op
                     ,empty: empty
                     ,singleton: singleton
                     ,insert: insert
                     ,remove: remove
                     ,member: member
                     ,foldl: foldl
                     ,foldr: foldr
                     ,map: map
                     ,filter: filter
                     ,partition: partition
                     ,union: union
                     ,intersect: intersect
                     ,diff: diff
                     ,toList: toList
                     ,fromList: fromList};
   return _elm.Set.values;
};
Elm.Signal = Elm.Signal || {};
Elm.Signal.make = function (_elm) {
   "use strict";
   _elm.Signal = _elm.Signal || {};
   if (_elm.Signal.values)
   return _elm.Signal.values;
   var _op = {},
   _N = Elm.Native,
   _U = _N.Utils.make(_elm),
   _L = _N.List.make(_elm),
   $moduleName = "Signal",
   $Basics = Elm.Basics.make(_elm),
   $Debug = Elm.Debug.make(_elm),
   $List = Elm.List.make(_elm),
   $Maybe = Elm.Maybe.make(_elm),
   $Native$Signal = Elm.Native.Signal.make(_elm),
   $Task = Elm.Task.make(_elm);
   var send = F2(function (_v0,
   value) {
      return function () {
         switch (_v0.ctor)
         {case "Address":
            return A2($Task.onError,
              _v0._0(value),
              function (_v3) {
                 return function () {
                    return $Task.succeed({ctor: "_Tuple0"});
                 }();
              });}
         _U.badCase($moduleName,
         "between lines 370 and 371");
      }();
   });
   var Message = function (a) {
      return {ctor: "Message"
             ,_0: a};
   };
   var message = F2(function (_v5,
   value) {
      return function () {
         switch (_v5.ctor)
         {case "Address":
            return Message(_v5._0(value));}
         _U.badCase($moduleName,
         "on line 352, column 5 to 24");
      }();
   });
   var mailbox = $Native$Signal.mailbox;
   var Address = function (a) {
      return {ctor: "Address"
             ,_0: a};
   };
   var forwardTo = F2(function (_v8,
   f) {
      return function () {
         switch (_v8.ctor)
         {case "Address":
            return Address(function (x) {
                 return _v8._0(f(x));
              });}
         _U.badCase($moduleName,
         "on line 339, column 5 to 29");
      }();
   });
   var Mailbox = F2(function (a,
   b) {
      return {_: {}
             ,address: a
             ,signal: b};
   });
   var sampleOn = $Native$Signal.sampleOn;
   var dropRepeats = $Native$Signal.dropRepeats;
   var filterMap = $Native$Signal.filterMap;
   var filter = F3(function (isOk,
   base,
   signal) {
      return A3(filterMap,
      function (value) {
         return isOk(value) ? $Maybe.Just(value) : $Maybe.Nothing;
      },
      base,
      signal);
   });
   var merge = F2(function (left,
   right) {
      return A3($Native$Signal.genericMerge,
      $Basics.always,
      left,
      right);
   });
   var mergeMany = function (signalList) {
      return function () {
         var _v11 = $List.reverse(signalList);
         switch (_v11.ctor)
         {case "::":
            return A3($List.foldl,
              merge,
              _v11._0,
              _v11._1);
            case "[]":
            return $Debug.crash("mergeMany was given an empty list!");}
         _U.badCase($moduleName,
         "between lines 177 and 197");
      }();
   };
   var foldp = $Native$Signal.foldp;
   var map5 = $Native$Signal.map5;
   var map4 = $Native$Signal.map4;
   var map3 = $Native$Signal.map3;
   var map2 = $Native$Signal.map2;
   _op["~"] = F2(function (funcs,
   args) {
      return A3(map2,
      F2(function (f,v) {
         return f(v);
      }),
      funcs,
      args);
   });
   var map = $Native$Signal.map;
   _op["<~"] = map;
   var constant = $Native$Signal.constant;
   var Signal = {ctor: "Signal"};
   _elm.Signal.values = {_op: _op
                        ,merge: merge
                        ,mergeMany: mergeMany
                        ,map: map
                        ,map2: map2
                        ,map3: map3
                        ,map4: map4
                        ,map5: map5
                        ,constant: constant
                        ,dropRepeats: dropRepeats
                        ,filter: filter
                        ,filterMap: filterMap
                        ,sampleOn: sampleOn
                        ,foldp: foldp
                        ,mailbox: mailbox
                        ,send: send
                        ,message: message
                        ,forwardTo: forwardTo
                        ,Mailbox: Mailbox};
   return _elm.Signal.values;
};
Elm.String = Elm.String || {};
Elm.String.make = function (_elm) {
   "use strict";
   _elm.String = _elm.String || {};
   if (_elm.String.values)
   return _elm.String.values;
   var _op = {},
   _N = Elm.Native,
   _U = _N.Utils.make(_elm),
   _L = _N.List.make(_elm),
   $moduleName = "String",
   $Maybe = Elm.Maybe.make(_elm),
   $Native$String = Elm.Native.String.make(_elm),
   $Result = Elm.Result.make(_elm);
   var fromList = $Native$String.fromList;
   var toList = $Native$String.toList;
   var toFloat = $Native$String.toFloat;
   var toInt = $Native$String.toInt;
   var indices = $Native$String.indexes;
   var indexes = $Native$String.indexes;
   var endsWith = $Native$String.endsWith;
   var startsWith = $Native$String.startsWith;
   var contains = $Native$String.contains;
   var all = $Native$String.all;
   var any = $Native$String.any;
   var toLower = $Native$String.toLower;
   var toUpper = $Native$String.toUpper;
   var lines = $Native$String.lines;
   var words = $Native$String.words;
   var trimRight = $Native$String.trimRight;
   var trimLeft = $Native$String.trimLeft;
   var trim = $Native$String.trim;
   var padRight = $Native$String.padRight;
   var padLeft = $Native$String.padLeft;
   var pad = $Native$String.pad;
   var dropRight = $Native$String.dropRight;
   var dropLeft = $Native$String.dropLeft;
   var right = $Native$String.right;
   var left = $Native$String.left;
   var slice = $Native$String.slice;
   var repeat = $Native$String.repeat;
   var join = $Native$String.join;
   var split = $Native$String.split;
   var foldr = $Native$String.foldr;
   var foldl = $Native$String.foldl;
   var reverse = $Native$String.reverse;
   var filter = $Native$String.filter;
   var map = $Native$String.map;
   var length = $Native$String.length;
   var concat = $Native$String.concat;
   var append = $Native$String.append;
   var uncons = $Native$String.uncons;
   var cons = $Native$String.cons;
   var fromChar = function ($char) {
      return A2(cons,$char,"");
   };
   var isEmpty = $Native$String.isEmpty;
   _elm.String.values = {_op: _op
                        ,isEmpty: isEmpty
                        ,length: length
                        ,reverse: reverse
                        ,repeat: repeat
                        ,cons: cons
                        ,uncons: uncons
                        ,fromChar: fromChar
                        ,append: append
                        ,concat: concat
                        ,split: split
                        ,join: join
                        ,words: words
                        ,lines: lines
                        ,slice: slice
                        ,left: left
                        ,right: right
                        ,dropLeft: dropLeft
                        ,dropRight: dropRight
                        ,contains: contains
                        ,startsWith: startsWith
                        ,endsWith: endsWith
                        ,indexes: indexes
                        ,indices: indices
                        ,toInt: toInt
                        ,toFloat: toFloat
                        ,toList: toList
                        ,fromList: fromList
                        ,toUpper: toUpper
                        ,toLower: toLower
                        ,pad: pad
                        ,padLeft: padLeft
                        ,padRight: padRight
                        ,trim: trim
                        ,trimLeft: trimLeft
                        ,trimRight: trimRight
                        ,map: map
                        ,filter: filter
                        ,foldl: foldl
                        ,foldr: foldr
                        ,any: any
                        ,all: all};
   return _elm.String.values;
};
Elm.Task = Elm.Task || {};
Elm.Task.make = function (_elm) {
   "use strict";
   _elm.Task = _elm.Task || {};
   if (_elm.Task.values)
   return _elm.Task.values;
   var _op = {},
   _N = Elm.Native,
   _U = _N.Utils.make(_elm),
   _L = _N.List.make(_elm),
   $moduleName = "Task",
   $List = Elm.List.make(_elm),
   $Maybe = Elm.Maybe.make(_elm),
   $Native$Task = Elm.Native.Task.make(_elm),
   $Result = Elm.Result.make(_elm);
   var sleep = $Native$Task.sleep;
   var spawn = $Native$Task.spawn;
   var ThreadID = function (a) {
      return {ctor: "ThreadID"
             ,_0: a};
   };
   var onError = $Native$Task.catch_;
   var andThen = $Native$Task.andThen;
   var fail = $Native$Task.fail;
   var mapError = F2(function (f,
   promise) {
      return A2(onError,
      promise,
      function (err) {
         return fail(f(err));
      });
   });
   var succeed = $Native$Task.succeed;
   var map = F2(function (func,
   promiseA) {
      return A2(andThen,
      promiseA,
      function (a) {
         return succeed(func(a));
      });
   });
   var map2 = F3(function (func,
   promiseA,
   promiseB) {
      return A2(andThen,
      promiseA,
      function (a) {
         return A2(andThen,
         promiseB,
         function (b) {
            return succeed(A2(func,a,b));
         });
      });
   });
   var map3 = F4(function (func,
   promiseA,
   promiseB,
   promiseC) {
      return A2(andThen,
      promiseA,
      function (a) {
         return A2(andThen,
         promiseB,
         function (b) {
            return A2(andThen,
            promiseC,
            function (c) {
               return succeed(A3(func,
               a,
               b,
               c));
            });
         });
      });
   });
   var map4 = F5(function (func,
   promiseA,
   promiseB,
   promiseC,
   promiseD) {
      return A2(andThen,
      promiseA,
      function (a) {
         return A2(andThen,
         promiseB,
         function (b) {
            return A2(andThen,
            promiseC,
            function (c) {
               return A2(andThen,
               promiseD,
               function (d) {
                  return succeed(A4(func,
                  a,
                  b,
                  c,
                  d));
               });
            });
         });
      });
   });
   var map5 = F6(function (func,
   promiseA,
   promiseB,
   promiseC,
   promiseD,
   promiseE) {
      return A2(andThen,
      promiseA,
      function (a) {
         return A2(andThen,
         promiseB,
         function (b) {
            return A2(andThen,
            promiseC,
            function (c) {
               return A2(andThen,
               promiseD,
               function (d) {
                  return A2(andThen,
                  promiseE,
                  function (e) {
                     return succeed(A5(func,
                     a,
                     b,
                     c,
                     d,
                     e));
                  });
               });
            });
         });
      });
   });
   var andMap = F2(function (promiseFunc,
   promiseValue) {
      return A2(andThen,
      promiseFunc,
      function (func) {
         return A2(andThen,
         promiseValue,
         function (value) {
            return succeed(func(value));
         });
      });
   });
   var sequence = function (promises) {
      return function () {
         switch (promises.ctor)
         {case "::": return A3(map2,
              F2(function (x,y) {
                 return A2($List._op["::"],
                 x,
                 y);
              }),
              promises._0,
              sequence(promises._1));
            case "[]":
            return succeed(_L.fromArray([]));}
         _U.badCase($moduleName,
         "between lines 101 and 106");
      }();
   };
   var toMaybe = function (task) {
      return A2(onError,
      A2(map,$Maybe.Just,task),
      function (_v3) {
         return function () {
            return succeed($Maybe.Nothing);
         }();
      });
   };
   var fromMaybe = F2(function ($default,
   maybe) {
      return function () {
         switch (maybe.ctor)
         {case "Just":
            return succeed(maybe._0);
            case "Nothing":
            return fail($default);}
         _U.badCase($moduleName,
         "between lines 139 and 141");
      }();
   });
   var toResult = function (task) {
      return A2(onError,
      A2(map,$Result.Ok,task),
      function (msg) {
         return succeed($Result.Err(msg));
      });
   };
   var fromResult = function (result) {
      return function () {
         switch (result.ctor)
         {case "Err":
            return fail(result._0);
            case "Ok":
            return succeed(result._0);}
         _U.badCase($moduleName,
         "between lines 151 and 153");
      }();
   };
   var Task = {ctor: "Task"};
   _elm.Task.values = {_op: _op
                      ,succeed: succeed
                      ,fail: fail
                      ,map: map
                      ,map2: map2
                      ,map3: map3
                      ,map4: map4
                      ,map5: map5
                      ,andMap: andMap
                      ,sequence: sequence
                      ,andThen: andThen
                      ,onError: onError
                      ,mapError: mapError
                      ,toMaybe: toMaybe
                      ,fromMaybe: fromMaybe
                      ,toResult: toResult
                      ,fromResult: fromResult
                      ,spawn: spawn
                      ,sleep: sleep};
   return _elm.Task.values;
};
Elm.Text = Elm.Text || {};
Elm.Text.make = function (_elm) {
   "use strict";
   _elm.Text = _elm.Text || {};
   if (_elm.Text.values)
   return _elm.Text.values;
   var _op = {},
   _N = Elm.Native,
   _U = _N.Utils.make(_elm),
   _L = _N.List.make(_elm),
   $moduleName = "Text",
   $Color = Elm.Color.make(_elm),
   $List = Elm.List.make(_elm),
   $Maybe = Elm.Maybe.make(_elm),
   $Native$Text = Elm.Native.Text.make(_elm);
   var line = $Native$Text.line;
   var italic = $Native$Text.italic;
   var bold = $Native$Text.bold;
   var color = $Native$Text.color;
   var height = $Native$Text.height;
   var link = $Native$Text.link;
   var monospace = $Native$Text.monospace;
   var typeface = $Native$Text.typeface;
   var style = $Native$Text.style;
   var append = $Native$Text.append;
   var fromString = $Native$Text.fromString;
   var empty = fromString("");
   var concat = function (texts) {
      return A3($List.foldr,
      append,
      empty,
      texts);
   };
   var join = F2(function (seperator,
   texts) {
      return concat(A2($List.intersperse,
      seperator,
      texts));
   });
   var defaultStyle = {_: {}
                      ,bold: false
                      ,color: $Color.black
                      ,height: $Maybe.Nothing
                      ,italic: false
                      ,line: $Maybe.Nothing
                      ,typeface: _L.fromArray([])};
   var Style = F6(function (a,
   b,
   c,
   d,
   e,
   f) {
      return {_: {}
             ,bold: d
             ,color: c
             ,height: b
             ,italic: e
             ,line: f
             ,typeface: a};
   });
   var Through = {ctor: "Through"};
   var Over = {ctor: "Over"};
   var Under = {ctor: "Under"};
   var Text = {ctor: "Text"};
   _elm.Text.values = {_op: _op
                      ,fromString: fromString
                      ,empty: empty
                      ,append: append
                      ,concat: concat
                      ,join: join
                      ,link: link
                      ,style: style
                      ,defaultStyle: defaultStyle
                      ,typeface: typeface
                      ,monospace: monospace
                      ,height: height
                      ,color: color
                      ,bold: bold
                      ,italic: italic
                      ,line: line
                      ,Style: Style
                      ,Under: Under
                      ,Over: Over
                      ,Through: Through};
   return _elm.Text.values;
};
Elm.Time = Elm.Time || {};
Elm.Time.make = function (_elm) {
   "use strict";
   _elm.Time = _elm.Time || {};
   if (_elm.Time.values)
   return _elm.Time.values;
   var _op = {},
   _N = Elm.Native,
   _U = _N.Utils.make(_elm),
   _L = _N.List.make(_elm),
   $moduleName = "Time",
   $Basics = Elm.Basics.make(_elm),
   $Native$Signal = Elm.Native.Signal.make(_elm),
   $Native$Time = Elm.Native.Time.make(_elm),
   $Signal = Elm.Signal.make(_elm);
   var delay = $Native$Signal.delay;
   var since = F2(function (time,
   signal) {
      return function () {
         var stop = A2($Signal.map,
         $Basics.always(-1),
         A2(delay,time,signal));
         var start = A2($Signal.map,
         $Basics.always(1),
         signal);
         var delaydiff = A3($Signal.foldp,
         F2(function (x,y) {
            return x + y;
         }),
         0,
         A2($Signal.merge,start,stop));
         return A2($Signal.map,
         F2(function (x,y) {
            return !_U.eq(x,y);
         })(0),
         delaydiff);
      }();
   });
   var timestamp = $Native$Signal.timestamp;
   var every = $Native$Time.every;
   var fpsWhen = $Native$Time.fpsWhen;
   var fps = function (targetFrames) {
      return A2(fpsWhen,
      targetFrames,
      $Signal.constant(true));
   };
   var inMilliseconds = function (t) {
      return t;
   };
   var millisecond = 1;
   var second = 1000 * millisecond;
   var minute = 60 * second;
   var hour = 60 * minute;
   var inHours = function (t) {
      return t / hour;
   };
   var inMinutes = function (t) {
      return t / minute;
   };
   var inSeconds = function (t) {
      return t / second;
   };
   _elm.Time.values = {_op: _op
                      ,millisecond: millisecond
                      ,second: second
                      ,minute: minute
                      ,hour: hour
                      ,inMilliseconds: inMilliseconds
                      ,inSeconds: inSeconds
                      ,inMinutes: inMinutes
                      ,inHours: inHours
                      ,fps: fps
                      ,fpsWhen: fpsWhen
                      ,every: every
                      ,timestamp: timestamp
                      ,delay: delay
                      ,since: since};
   return _elm.Time.values;
};
Elm.Transform2D = Elm.Transform2D || {};
Elm.Transform2D.make = function (_elm) {
   "use strict";
   _elm.Transform2D = _elm.Transform2D || {};
   if (_elm.Transform2D.values)
   return _elm.Transform2D.values;
   var _op = {},
   _N = Elm.Native,
   _U = _N.Utils.make(_elm),
   _L = _N.List.make(_elm),
   $moduleName = "Transform2D",
   $Native$Transform2D = Elm.Native.Transform2D.make(_elm);
   var multiply = $Native$Transform2D.multiply;
   var rotation = $Native$Transform2D.rotation;
   var matrix = $Native$Transform2D.matrix;
   var translation = F2(function (x,
   y) {
      return A6(matrix,
      1,
      0,
      0,
      1,
      x,
      y);
   });
   var scale = function (s) {
      return A6(matrix,
      s,
      0,
      0,
      s,
      0,
      0);
   };
   var scaleX = function (x) {
      return A6(matrix,
      x,
      0,
      0,
      1,
      0,
      0);
   };
   var scaleY = function (y) {
      return A6(matrix,
      1,
      0,
      0,
      y,
      0,
      0);
   };
   var identity = $Native$Transform2D.identity;
   var Transform2D = {ctor: "Transform2D"};
   _elm.Transform2D.values = {_op: _op
                             ,identity: identity
                             ,matrix: matrix
                             ,multiply: multiply
                             ,rotation: rotation
                             ,translation: translation
                             ,scale: scale
                             ,scaleX: scaleX
                             ,scaleY: scaleY};
   return _elm.Transform2D.values;
};
Elm.Unison = Elm.Unison || {};
Elm.Unison.Action = Elm.Unison.Action || {};
Elm.Unison.Action.make = function (_elm) {
   "use strict";
   _elm.Unison = _elm.Unison || {};
   _elm.Unison.Action = _elm.Unison.Action || {};
   if (_elm.Unison.Action.values)
   return _elm.Unison.Action.values;
   var _op = {},
   _N = Elm.Native,
   _U = _N.Utils.make(_elm),
   _L = _N.List.make(_elm),
   $moduleName = "Unison.Action",
   $Elmz$Json$Encoder = Elm.Elmz.Json.Encoder.make(_elm),
   $Unison$Symbol = Elm.Unison.Symbol.make(_elm);
   var encode = function (a) {
      return function () {
         switch (a.ctor)
         {case "Abstract":
            return A3($Elmz$Json$Encoder.tag$,
              "Abstract",
              $Elmz$Json$Encoder.product0,
              {ctor: "_Tuple0"});
            case "AbstractLet":
            return A3($Elmz$Json$Encoder.tag$,
              "AbstractLet",
              $Elmz$Json$Encoder.product0,
              {ctor: "_Tuple0"});
            case "AllowRec":
            return A3($Elmz$Json$Encoder.tag$,
              "AllowRec",
              $Elmz$Json$Encoder.product0,
              {ctor: "_Tuple0"});
            case "EtaReduce":
            return A3($Elmz$Json$Encoder.tag$,
              "EtaReduce",
              $Elmz$Json$Encoder.product0,
              {ctor: "_Tuple0"});
            case "FloatOut":
            return A3($Elmz$Json$Encoder.tag$,
              "FloatOut",
              $Elmz$Json$Encoder.product0,
              {ctor: "_Tuple0"});
            case "Inline":
            return A3($Elmz$Json$Encoder.tag$,
              "Inline",
              $Elmz$Json$Encoder.product0,
              {ctor: "_Tuple0"});
            case "MergeLet":
            return A3($Elmz$Json$Encoder.tag$,
              "MergeLet",
              $Elmz$Json$Encoder.product0,
              {ctor: "_Tuple0"});
            case "Noop":
            return A3($Elmz$Json$Encoder.tag$,
              "Noop",
              $Elmz$Json$Encoder.product0,
              {ctor: "_Tuple0"});
            case "Rename":
            return A3($Elmz$Json$Encoder.tag$,
              "Rename",
              $Unison$Symbol.encodeSymbol,
              a._0);
            case "Step":
            return A3($Elmz$Json$Encoder.tag$,
              "Step",
              $Elmz$Json$Encoder.product0,
              {ctor: "_Tuple0"});
            case "SwapDown":
            return A3($Elmz$Json$Encoder.tag$,
              "SwapDown",
              $Elmz$Json$Encoder.product0,
              {ctor: "_Tuple0"});
            case "SwapUp":
            return A3($Elmz$Json$Encoder.tag$,
              "SwapUp",
              $Elmz$Json$Encoder.product0,
              {ctor: "_Tuple0"});
            case "WHNF":
            return A3($Elmz$Json$Encoder.tag$,
              "WHNF",
              $Elmz$Json$Encoder.product0,
              {ctor: "_Tuple0"});}
         _U.badCase($moduleName,
         "between lines 26 and 39");
      }();
   };
   var WHNF = {ctor: "WHNF"};
   var SwapUp = {ctor: "SwapUp"};
   var SwapDown = {ctor: "SwapDown"};
   var Step = {ctor: "Step"};
   var Rename = function (a) {
      return {ctor: "Rename"
             ,_0: a};
   };
   var Noop = {ctor: "Noop"};
   var MergeLet = {ctor: "MergeLet"};
   var Inline = {ctor: "Inline"};
   var FloatOut = {ctor: "FloatOut"};
   var EtaReduce = {ctor: "EtaReduce"};
   var AllowRec = {ctor: "AllowRec"};
   var AbstractLet = {ctor: "AbstractLet"};
   var Abstract = {ctor: "Abstract"};
   _elm.Unison.Action.values = {_op: _op
                               ,Abstract: Abstract
                               ,AbstractLet: AbstractLet
                               ,AllowRec: AllowRec
                               ,EtaReduce: EtaReduce
                               ,FloatOut: FloatOut
                               ,Inline: Inline
                               ,MergeLet: MergeLet
                               ,Noop: Noop
                               ,Rename: Rename
                               ,Step: Step
                               ,SwapDown: SwapDown
                               ,SwapUp: SwapUp
                               ,WHNF: WHNF
                               ,encode: encode};
   return _elm.Unison.Action.values;
};
Elm.Unison = Elm.Unison || {};
Elm.Unison.EditableTerm = Elm.Unison.EditableTerm || {};
Elm.Unison.EditableTerm.make = function (_elm) {
   "use strict";
   _elm.Unison = _elm.Unison || {};
   _elm.Unison.EditableTerm = _elm.Unison.EditableTerm || {};
   if (_elm.Unison.EditableTerm.values)
   return _elm.Unison.EditableTerm.values;
   var _op = {},
   _N = Elm.Native,
   _U = _N.Utils.make(_elm),
   _L = _N.List.make(_elm),
   $moduleName = "Unison.EditableTerm",
   $Basics = Elm.Basics.make(_elm),
   $Elmz$Layout = Elm.Elmz.Layout.make(_elm),
   $Elmz$Moore = Elm.Elmz.Moore.make(_elm),
   $Elmz$Movement = Elm.Elmz.Movement.make(_elm),
   $Elmz$Trie = Elm.Elmz.Trie.make(_elm),
   $Graphics$Element = Elm.Graphics.Element.make(_elm),
   $List = Elm.List.make(_elm),
   $Maybe = Elm.Maybe.make(_elm),
   $Unison$Metadata = Elm.Unison.Metadata.make(_elm),
   $Unison$Node = Elm.Unison.Node.make(_elm),
   $Unison$Path = Elm.Unison.Path.make(_elm),
   $Unison$Reference = Elm.Unison.Reference.make(_elm),
   $Unison$Scope = Elm.Unison.Scope.make(_elm),
   $Unison$Styles = Elm.Unison.Styles.make(_elm),
   $Unison$Term = Elm.Unison.Term.make(_elm),
   $Unison$View = Elm.Unison.View.make(_elm);
   var subterm = function (m) {
      return function () {
         var out = $Elmz$Moore.extract(m);
         return A2($Maybe.andThen,
         out.scope,
         function (scope) {
            return A2($Unison$Term.at,
            scope.focus,
            out.term);
         });
      }();
   };
   var In = F5(function (a,
   b,
   c,
   d,
   e) {
      return {_: {}
             ,availableWidth: c
             ,event: a
             ,explorerOpen: b
             ,metadata: d
             ,topLeft: e};
   });
   var Out = F5(function (a,
   b,
   c,
   d,
   e) {
      return {_: {}
             ,dirtyPaths: d
             ,layout: b
             ,scope: c
             ,selection: e
             ,term: a};
   });
   var out = F3(function (term,
   layout,
   scope) {
      return A5(Out,
      term,
      layout,
      scope,
      $Elmz$Trie.empty,
      $Maybe.Nothing);
   });
   var model = function (term) {
      return function () {
         var highlight = function (o) {
            return $Maybe.withDefault(_U.replace([["selection"
                                                  ,$Maybe.Nothing]],
            o))(A2($Maybe.andThen,
            o.scope,
            function (scope) {
               return A2($Maybe.andThen,
               A2($Unison$Scope.view,
               o.layout,
               scope),
               function (region) {
                  return function () {
                     var f = function (e) {
                        return $Graphics$Element.layers(_L.fromArray([e
                                                                     ,$Unison$Styles.selection(region)]));
                     };
                     return $Maybe.Just(_U.replace([["selection"
                                                    ,$Maybe.Just(region)]
                                                   ,["layout"
                                                    ,A2($Elmz$Layout.transform,
                                                    f,
                                                    o.layout)]],
                     o));
                  }();
               });
            }));
         };
         var refresh = F4(function (env,
         raw,
         evals,
         s) {
            return function () {
               var evals$ = env.explorerOpen ? function () {
                  var _v0 = s.scope;
                  switch (_v0.ctor)
                  {case "Just":
                     return A2($Elmz$Trie.$delete,
                       _v0._0.focus,
                       evals);
                     case "Nothing": return evals;}
                  _U.badCase($moduleName,
                  "between lines 68 and 71");
               }() : evals;
               var l = A2($Elmz$Layout.pin,
               env.topLeft,
               $Unison$View.l0)(A2($Unison$View.layout,
               s.term,
               {_: {}
               ,availableWidth: env.availableWidth
               ,metadata: env.metadata
               ,overrides: function (p) {
                  return A2($Elmz$Trie.lookup,
                  p,
                  evals$);
               }
               ,raw: raw ? A2($Maybe.map,
               function (_) {
                  return _.focus;
               },
               s.scope) : $Maybe.Nothing}));
               return _U.replace([["layout"
                                  ,l]],
               s);
            }();
         });
         var next = F4(function (raw,
         evals,
         s,
         e) {
            return function () {
               var _v2 = e.event;
               switch (_v2.ctor)
               {case "Just":
                  return function () {
                       switch (_v2._0.ctor)
                       {case "Evaluations":
                          return function () {
                               var f = function (e) {
                                  return _U.eq(A2($Unison$Term.at,
                                  e.path,
                                  s.term),
                                  $Maybe.Just(e.old)) ? $Maybe.Just({ctor: "_Tuple2"
                                                                    ,_0: e.path
                                                                    ,_1: e.$new}) : $Maybe.Nothing;
                               };
                               var evals$ = $Elmz$Trie.fromList(A2($List.filterMap,
                               f,
                               _v2._0._0));
                               var s$ = A4(refresh,
                               e,
                               raw,
                               evals$,
                               s);
                               return $Elmz$Trie.isEmpty(evals$) ? $Maybe.Nothing : $Maybe.Just(A2($Elmz$Moore.Moore,
                               s$,
                               A3(next,raw,evals$,s$)));
                            }();
                          case "Modify":
                          return A2($Maybe.andThen,
                            s.scope,
                            function (scope) {
                               return A2($Maybe.andThen,
                               A3($Unison$Term.modify,
                               scope.focus,
                               _v2._0._0,
                               s.term),
                               function (term) {
                                  return function () {
                                     var evals$ = A2($Elmz$Trie.deleteSubtree,
                                     scope.focus,
                                     evals);
                                     var s$ = A4(refresh,
                                     e,
                                     raw,
                                     evals$,
                                     _U.replace([["term",term]
                                                ,["dirtyPaths"
                                                 ,$Unison$View.reactivePaths(term)]
                                                ,["scope"
                                                 ,$Maybe.Just($Unison$Scope.scope(scope.focus))]],
                                     s));
                                     return $Maybe.Just(A2($Elmz$Moore.Moore,
                                     s$,
                                     A3(next,
                                     raw,
                                     evals$,
                                     _U.replace([["dirtyPaths"
                                                 ,$Elmz$Trie.empty]],
                                     s$))));
                                  }();
                               });
                            });
                          case "Mouse":
                          return function () {
                               var _v10 = A3($Unison$Scope.mouse,
                               _v2._0._0,
                               s.layout,
                               $Maybe.Nothing);
                               return function () {
                                  var s$ = A4(refresh,
                                  e,
                                  raw,
                                  evals,
                                  _U.replace([["scope",_v10]],s));
                                  return $Maybe.Just(A2($Elmz$Moore.Moore,
                                  s$,
                                  A3(next,raw,evals,s$)));
                               }();
                            }();
                          case "Movement":
                          return function () {
                               var _v11 = A3($Unison$Scope.movement,
                               s.term,
                               _v2._0._0,
                               s.scope);
                               return function () {
                                  var s$ = A4(refresh,
                                  e,
                                  raw,
                                  evals,
                                  _U.replace([["scope",_v11]],s));
                                  return $Maybe.Just(A2($Elmz$Moore.Moore,
                                  s$,
                                  A3(next,raw,evals,s$)));
                               }();
                            }();
                          case "Replace":
                          return _U.eq(A2($Unison$Term.at,
                            _v2._0._0.path,
                            s.term),
                            $Maybe.Just(_v2._0._0.old)) ? A2($Maybe.andThen,
                            A3($Unison$Term.modify,
                            _v2._0._0.path,
                            $Basics.always(_v2._0._0.$new),
                            s.term),
                            function (term) {
                               return function () {
                                  var s$ = A4(refresh,
                                  e,
                                  raw,
                                  evals,
                                  _U.replace([["term",term]],s));
                                  return $Maybe.Just(A2($Elmz$Moore.Moore,
                                  s$,
                                  A3(next,raw,evals,s$)));
                               }();
                            }) : $Maybe.Nothing;
                          case "ToggleRaw":
                          return function () {
                               var s$ = A4(refresh,
                               e,
                               $Basics.not(raw),
                               evals,
                               s);
                               return $Maybe.Just(A2($Elmz$Moore.Moore,
                               s$,
                               A3(next,
                               $Basics.not(raw),
                               evals,
                               s$)));
                            }();}
                       _U.badCase($moduleName,
                       "between lines 85 and 123");
                    }();
                  case "Nothing":
                  return function () {
                       var s$ = A4(refresh,
                       e,
                       raw,
                       evals,
                       s);
                       return $Maybe.Just(A2($Elmz$Moore.Moore,
                       s$,
                       A3(next,raw,evals,s$)));
                    }();}
               _U.badCase($moduleName,
               "between lines 81 and 123");
            }();
         });
         var s0 = A3(out,
         term,
         $Elmz$Layout.empty({_: {}
                            ,path: _L.fromArray([])
                            ,selectable: false}),
         $Maybe.Just($Unison$Scope.scope(_L.fromArray([]))));
         return $Elmz$Moore.map(highlight)(A2($Elmz$Moore.Moore,
         s0,
         A3(next,
         false,
         $Elmz$Trie.empty,
         s0)));
      }();
   };
   var ToggleRaw = {ctor: "ToggleRaw"};
   var Replace = function (a) {
      return {ctor: "Replace"
             ,_0: a};
   };
   var Evaluations = function (a) {
      return {ctor: "Evaluations"
             ,_0: a};
   };
   var Modify = function (a) {
      return {ctor: "Modify"
             ,_0: a};
   };
   var Movement = function (a) {
      return {ctor: "Movement"
             ,_0: a};
   };
   var Mouse = function (a) {
      return {ctor: "Mouse",_0: a};
   };
   _elm.Unison.EditableTerm.values = {_op: _op
                                     ,Mouse: Mouse
                                     ,Movement: Movement
                                     ,Modify: Modify
                                     ,Evaluations: Evaluations
                                     ,Replace: Replace
                                     ,ToggleRaw: ToggleRaw
                                     ,Out: Out
                                     ,out: out
                                     ,In: In
                                     ,subterm: subterm
                                     ,model: model};
   return _elm.Unison.EditableTerm.values;
};
Elm.Unison = Elm.Unison || {};
Elm.Unison.Editor = Elm.Unison.Editor || {};
Elm.Unison.Editor.make = function (_elm) {
   "use strict";
   _elm.Unison = _elm.Unison || {};
   _elm.Unison.Editor = _elm.Unison.Editor || {};
   if (_elm.Unison.Editor.values)
   return _elm.Unison.Editor.values;
   var _op = {},
   _N = Elm.Native,
   _U = _N.Utils.make(_elm),
   _L = _N.List.make(_elm),
   $moduleName = "Unison.Editor",
   $Basics = Elm.Basics.make(_elm),
   $Debug = Elm.Debug.make(_elm),
   $Elmz$Json$Request = Elm.Elmz.Json.Request.make(_elm),
   $Elmz$Layout = Elm.Elmz.Layout.make(_elm),
   $Elmz$Moore = Elm.Elmz.Moore.make(_elm),
   $Elmz$Movement = Elm.Elmz.Movement.make(_elm),
   $Elmz$Selection1D = Elm.Elmz.Selection1D.make(_elm),
   $Elmz$Signal = Elm.Elmz.Signal.make(_elm),
   $Graphics$Element = Elm.Graphics.Element.make(_elm),
   $Graphics$Input$Field = Elm.Graphics.Input.Field.make(_elm),
   $Http = Elm.Http.make(_elm),
   $Keyboard = Elm.Keyboard.make(_elm),
   $Maybe = Elm.Maybe.make(_elm),
   $Mouse = Elm.Mouse.make(_elm),
   $Result = Elm.Result.make(_elm),
   $Signal = Elm.Signal.make(_elm),
   $Task = Elm.Task.make(_elm),
   $Unison$Action = Elm.Unison.Action.make(_elm),
   $Unison$EditableTerm = Elm.Unison.EditableTerm.make(_elm),
   $Unison$Metadata = Elm.Unison.Metadata.make(_elm),
   $Unison$Node = Elm.Unison.Node.make(_elm),
   $Unison$Path = Elm.Unison.Path.make(_elm),
   $Unison$Reference = Elm.Unison.Reference.make(_elm),
   $Unison$Styles = Elm.Unison.Styles.make(_elm),
   $Unison$Term = Elm.Unison.Term.make(_elm),
   $Unison$TermExplorer = Elm.Unison.TermExplorer.make(_elm),
   $Window = Elm.Window.make(_elm);
   var requestResponses0 = $Signal.mailbox($Maybe.Nothing);
   var responses0 = $Signal.mailbox($Maybe.Nothing);
   var runner2 = Elm.Native.Task.make(_elm).performSignal("runner2",
   function () {
      var f = function (msg) {
         return function () {
            switch (msg.ctor)
            {case "Nothing":
               return $Task.succeed({ctor: "_Tuple0"});}
            return A2($Signal.send,
            responses0.address,
            msg);
         }();
      };
      return A2($Signal.map,
      f,
      requestResponses0.signal);
   }());
   var requests0 = $Signal.mailbox($Maybe.Nothing);
   var searchbox0 = $Signal.mailbox($Graphics$Input$Field.noContent);
   var ignoreUpDown = function (s) {
      return function () {
         var k = A2($Signal.sampleOn,
         A3($Signal.filter,
         function (a) {
            return !_U.eq(a.y,0);
         },
         {_: {},x: 0,y: 0},
         $Keyboard.arrows),
         A2($Elmz$Signal.delay,
         $Graphics$Input$Field.noContent,
         s));
         return A2($Signal.merge,k,s);
      }();
   };
   var Out = F3(function (a,b,c) {
      return {_: {}
             ,request: c
             ,term: a
             ,view: b};
   });
   var In = F3(function (a,b,c) {
      return {_: {}
             ,availableWidth: b
             ,event: a
             ,topLeft: c};
   });
   var Metadatas = function (a) {
      return {ctor: "Metadatas"
             ,_0: a};
   };
   var Evaluations = function (a) {
      return {ctor: "Evaluations"
             ,_0: a};
   };
   var Declare = function (a) {
      return {ctor: "Declare"
             ,_0: a};
   };
   var EditRequest = F2(function (a,
   b) {
      return {ctor: "EditRequest"
             ,_0: a
             ,_1: b};
   });
   var ExplorerRequest = function (a) {
      return {ctor: "ExplorerRequest"
             ,_0: a};
   };
   var ViewToggle = {ctor: "ViewToggle"};
   var MetadataResults = function (a) {
      return {ctor: "MetadataResults"
             ,_0: a};
   };
   var SearchResults = function (a) {
      return {ctor: "SearchResults"
             ,_0: a};
   };
   var Replace = function (a) {
      return {ctor: "Replace"
             ,_0: a};
   };
   var Preapply = {ctor: "Preapply"};
   var Movement = function (a) {
      return {ctor: "Movement"
             ,_0: a};
   };
   var moveDown = function (i) {
      return _U.replace([["event"
                         ,$Maybe.Just(Movement(A2($Elmz$Movement.D2,
                         $Elmz$Movement.Zero,
                         $Elmz$Movement.Negative)))]],
      i);
   };
   var model = F2(function (sink,
   term0) {
      return function () {
         var ex0 = $Unison$TermExplorer.model(sink);
         var stepX = F5(function (pt,
         w,
         md,
         e,
         m) {
            return A2($Elmz$Moore.step,
            {_: {}
            ,availableWidth: w
            ,event: $Maybe.Just(e)
            ,explorerOpen: false
            ,metadata: md
            ,topLeft: pt},
            m);
         });
         var feedX = F5(function (pt,
         w,
         md,
         e,
         m) {
            return A2($Elmz$Moore.feed,
            {_: {}
            ,availableWidth: w
            ,event: $Maybe.Just(e)
            ,explorerOpen: false
            ,metadata: md
            ,topLeft: pt},
            m);
         });
         var explorerXY = F2(function (term,
         _v1) {
            return function () {
               switch (_v1.ctor)
               {case "_Tuple2":
                  return function () {
                       var _v5 = function (_) {
                          return _.selection;
                       }($Elmz$Moore.extract(term));
                       switch (_v5.ctor)
                       {case "Just":
                          return {ctor: "_Tuple2"
                                 ,_0: _v1._0 - _v5._0.topLeft.x - $Unison$Styles.selectionBorderWidth
                                 ,_1: _v1._1 - (_v5._0.topLeft.y + _v5._0.height)};
                          case "Nothing":
                          return {ctor: "_Tuple2"
                                 ,_0: _v1._0
                                 ,_1: _v1._1};}
                       _U.badCase($moduleName,
                       "between lines 82 and 85");
                    }();}
               _U.badCase($moduleName,
               "between lines 82 and 85");
            }();
         });
         var offset = F2(function (term,
         e) {
            return function () {
               var _v7 = function (_) {
                  return _.selection;
               }($Elmz$Moore.extract(term));
               switch (_v7.ctor)
               {case "Just":
                  return A3($Unison$Styles.padNW,
                    _v7._0.topLeft.x - $Unison$Styles.selectionBorderWidth,
                    _v7._0.topLeft.y + _v7._0.height,
                    e);
                  case "Nothing":
                  return $Graphics$Element.empty;}
               _U.badCase($moduleName,
               "between lines 79 and 82");
            }();
         });
         var out = F2(function (term,
         explorer) {
            return function () {
               var req = A2($Maybe.map,
               ExplorerRequest,
               function (_) {
                  return _.request;
               }($Elmz$Moore.extract(explorer)));
               return {_: {}
                      ,request: req
                      ,term: function (_) {
                         return _.term;
                      }($Elmz$Moore.extract(term))
                      ,view: $Graphics$Element.layers(_L.fromArray([$Elmz$Layout.element(function (_) {
                                                                      return _.layout;
                                                                   }($Elmz$Moore.extract(term)))
                                                                   ,A2(offset,
                                                                   term,
                                                                   function (_) {
                                                                      return _.view;
                                                                   }($Elmz$Moore.extract(explorer)))]))};
            }();
         });
         var exploreropen = F4(function (mds,
         term,
         explorer,
         e) {
            return function () {
               var _v9 = {ctor: "_Tuple2"
                         ,_0: e.event
                         ,_1: e.availableWidth};
               switch (_v9.ctor)
               {case "_Tuple2":
                  switch (_v9._0.ctor)
                    {case "Just":
                       return function () {
                            switch (_v9._0._0.ctor)
                            {case "Click":
                               return function () {
                                    var eview = function (_) {
                                       return _.view;
                                    }($Elmz$Moore.extract(explorer));
                                    var $ = A2(explorerXY,
                                    term,
                                    _v9._0._0._0),
                                    x = $._0,
                                    y = $._1;
                                    return _U.cmp(x,
                                    0) < 0 || (_U.cmp(y,
                                    0) < 0 || (_U.cmp(x,
                                    $Graphics$Element.widthOf(eview)) > 0 || _U.cmp(y,
                                    $Graphics$Element.heightOf(eview)) > 0)) ? $Maybe.Just(A2($Elmz$Moore.Moore,
                                    A2(out,term,ex0),
                                    A3(explorerclosed,
                                    mds,
                                    term,
                                    ex0))) : A5(tryAccept,
                                    e.topLeft,
                                    _v9._1,
                                    mds,
                                    term,
                                    A2($Elmz$Moore.step,
                                    $Unison$TermExplorer.Click({ctor: "_Tuple2"
                                                               ,_0: x
                                                               ,_1: y}),
                                    explorer));
                                 }();
                               case "Enter":
                               return function () {
                                    var _v22 = A2($Elmz$Moore.feed,
                                    $Unison$TermExplorer.Enter,
                                    explorer);
                                    return function () {
                                       var _v23 = function (_) {
                                          return _.selection;
                                       }($Elmz$Moore.extract(_v22));
                                       switch (_v23.ctor)
                                       {case "Just":
                                          return A5(tryAccept,
                                            e.topLeft,
                                            _v9._1,
                                            mds,
                                            term,
                                            $Maybe.Just(_v22));
                                          case "Nothing":
                                          return $Maybe.Just(A2($Elmz$Moore.Moore,
                                            A2(out,term,ex0),
                                            A3(explorerclosed,
                                            mds,
                                            term,
                                            ex0)));}
                                       _U.badCase($moduleName,
                                       "between lines 171 and 175");
                                    }();
                                 }();
                               case "FieldContent":
                               return A5(tryAccept,
                                 e.topLeft,
                                 _v9._1,
                                 mds,
                                 term,
                                 A2($Elmz$Moore.step,
                                 $Unison$TermExplorer.FieldContent(_v9._0._0._0),
                                 explorer));
                               case "LocalInfoResults":
                               return A2($Maybe.andThen,
                                 A2($Elmz$Moore.step,
                                 $Unison$TermExplorer.LocalInfoResults(_v9._0._0._0),
                                 explorer),
                                 function (explorer) {
                                    return $Maybe.Just(A2($Elmz$Moore.Moore,
                                    A2(out,term,explorer),
                                    A3(exploreropen,
                                    mds,
                                    term,
                                    explorer)));
                                 });
                               case "MetadataResults":
                               return function () {
                                    var _v25 = A2($Elmz$Moore.feed,
                                    _v9._0._0._0,
                                    mds);
                                    return $Maybe.Just(A2($Elmz$Moore.Moore,
                                    A2(out,term,explorer),
                                    A3(exploreropen,
                                    _v25,
                                    term,
                                    explorer)));
                                 }();
                               case "Mouse":
                               return function () {
                                    var xy$ = A2(explorerXY,
                                    term,
                                    _v9._0._0._0);
                                    return A2($Maybe.andThen,
                                    A2($Elmz$Moore.step,
                                    $Unison$TermExplorer.Navigate($Elmz$Selection1D.Mouse(xy$)),
                                    explorer),
                                    function (explorer) {
                                       return $Maybe.Just(A2($Elmz$Moore.Moore,
                                       A2(out,term,explorer),
                                       A3(exploreropen,
                                       mds,
                                       term,
                                       explorer)));
                                    });
                                 }();
                               case "Movement":
                               return function () {
                                    var d1 = $Elmz$Movement.negateD1($Elmz$Movement.xy_y(_v9._0._0._0));
                                    return A2($Maybe.andThen,
                                    A2($Elmz$Moore.step,
                                    $Unison$TermExplorer.Navigate($Elmz$Selection1D.Move(d1)),
                                    explorer),
                                    function (explorer) {
                                       return $Maybe.Just(A2($Elmz$Moore.Moore,
                                       A2(out,term,explorer),
                                       A3(exploreropen,
                                       mds,
                                       term,
                                       explorer)));
                                    });
                                 }();
                               case "Replace":
                               return function () {
                                    var msg = {_: {}
                                              ,availableWidth: _v9._1
                                              ,event: $Maybe.Just($Unison$EditableTerm.Replace(_v9._0._0._0))
                                              ,explorerOpen: true
                                              ,metadata: $Elmz$Moore.extract(mds)
                                              ,topLeft: e.topLeft};
                                    return A2($Maybe.andThen,
                                    A2($Elmz$Moore.step,msg,term),
                                    function (term) {
                                       return $Maybe.Just(A2($Elmz$Moore.Moore,
                                       A2(out,term,explorer),
                                       A3(explorerclosed,
                                       mds,
                                       term,
                                       explorer)));
                                    });
                                 }();
                               case "SearchResults":
                               return function () {
                                    var _v26 = A2($Elmz$Moore.feed,
                                    _v9._0._0._0.references,
                                    mds);
                                    return A2($Maybe.andThen,
                                    A2($Elmz$Moore.step,
                                    $Unison$TermExplorer.SearchResults(_v9._0._0._0),
                                    explorer),
                                    function (explorer) {
                                       return $Maybe.Just(A2($Elmz$Moore.Moore,
                                       A2(out,term,explorer),
                                       A3(exploreropen,
                                       _v26,
                                       term,
                                       explorer)));
                                    });
                                 }();}
                            return $Maybe.Nothing;
                         }();
                       case "Nothing":
                       return A2($Maybe.map,
                         function (term) {
                            return function () {
                               var o = A2(out,
                               term,
                               explorer);
                               return A2($Elmz$Moore.Moore,
                               _U.replace([["request"
                                           ,$Maybe.Nothing]],
                               o),
                               A3(exploreropen,
                               mds,
                               term,
                               explorer));
                            }();
                         },
                         A2($Elmz$Moore.step,
                         {_: {}
                         ,availableWidth: _v9._1
                         ,event: $Maybe.Nothing
                         ,explorerOpen: true
                         ,metadata: $Elmz$Moore.extract(mds)
                         ,topLeft: e.topLeft},
                         term));}
                    break;}
               _U.badCase($moduleName,
               "between lines 156 and 200");
            }();
         });
         var explorerclosed = F4(function (mds,
         term,
         explorer,
         e) {
            return function () {
               var _v27 = {ctor: "_Tuple3"
                          ,_0: e.event
                          ,_1: e.availableWidth
                          ,_2: $Elmz$Moore.extract(mds)};
               switch (_v27.ctor)
               {case "_Tuple3":
                  switch (_v27._0.ctor)
                    {case "Just":
                       return function () {
                            switch (_v27._0._0.ctor)
                            {case "Act":
                               return A2($Maybe.andThen,
                                 function (_) {
                                    return _.scope;
                                 }($Elmz$Moore.extract(term)),
                                 function (scope) {
                                    return function () {
                                       var r = A2(out,
                                       term,
                                       explorer);
                                       var focus = A2($Unison$TermExplorer.localFocus,
                                       scope.focus,
                                       function (_) {
                                          return _.term;
                                       }($Elmz$Moore.extract(term)));
                                       var o = _U.replace([["request"
                                                           ,$Maybe.Just(A2(EditRequest,
                                                           focus,
                                                           _v27._0._0._0))]],
                                       r);
                                       return $Maybe.Just(A3($Elmz$Moore.spike,
                                       o,
                                       _U.replace([["request"
                                                   ,$Maybe.Nothing]],
                                       o),
                                       A3(explorerclosed,
                                       mds,
                                       term,
                                       explorer)));
                                    }();
                                 });
                               case "Click":
                               return function () {
                                    var _v39 = A5(feedX,
                                    e.topLeft,
                                    _v27._1,
                                    _v27._2,
                                    $Unison$EditableTerm.Mouse(_v27._0._0._0),
                                    term);
                                    return A2($Maybe.andThen,
                                    function (_) {
                                       return _.scope;
                                    }($Elmz$Moore.extract(_v39)),
                                    function (scope) {
                                       return $Maybe.Just(A6(toOpen,
                                       e.topLeft,
                                       _v27._1,
                                       mds,
                                       _v39,
                                       explorer,
                                       scope));
                                    });
                                 }();
                               case "Enter":
                               return A2($Maybe.andThen,
                                 function (_) {
                                    return _.scope;
                                 }($Elmz$Moore.extract(term)),
                                 function (scope) {
                                    return $Maybe.Just(A6(toOpen,
                                    e.topLeft,
                                    _v27._1,
                                    mds,
                                    term,
                                    explorer,
                                    scope));
                                 });
                               case "MetadataResults":
                               return function () {
                                    var _v40 = A2($Elmz$Moore.feed,
                                    _v27._0._0._0,
                                    mds);
                                    return $Maybe.Just(A2($Elmz$Moore.Moore,
                                    A2(out,term,explorer),
                                    A3(explorerclosed,
                                    _v40,
                                    term,
                                    explorer)));
                                 }();
                               case "Mouse":
                               return A2($Maybe.andThen,
                                 A5(stepX,
                                 e.topLeft,
                                 _v27._1,
                                 _v27._2,
                                 $Unison$EditableTerm.Mouse(_v27._0._0._0),
                                 term),
                                 function (term) {
                                    return $Maybe.Just(A2($Elmz$Moore.Moore,
                                    A2(out,term,explorer),
                                    A3(explorerclosed,
                                    mds,
                                    term,
                                    explorer)));
                                 });
                               case "Movement":
                               return A2($Maybe.andThen,
                                 A5(stepX,
                                 e.topLeft,
                                 _v27._1,
                                 _v27._2,
                                 $Unison$EditableTerm.Movement(_v27._0._0._0),
                                 term),
                                 function (term) {
                                    return $Maybe.Just(A2($Elmz$Moore.Moore,
                                    A2(out,term,explorer),
                                    A3(explorerclosed,
                                    mds,
                                    term,
                                    explorer)));
                                 });
                               case "Preapply":
                               return A2($Maybe.andThen,
                                 A5(stepX,
                                 e.topLeft,
                                 _v27._1,
                                 _v27._2,
                                 $Unison$EditableTerm.Modify($Unison$Term.App($Unison$Term.Blank)),
                                 term),
                                 function (term) {
                                    return $Maybe.Just($Elmz$Moore.feed(moveDown(e))(A2($Elmz$Moore.Moore,
                                    A2(out,term,explorer),
                                    A3(explorerclosed,
                                    mds,
                                    term,
                                    explorer))));
                                 });
                               case "Replace":
                               return A2($Maybe.andThen,
                                 A5(stepX,
                                 e.topLeft,
                                 _v27._1,
                                 _v27._2,
                                 $Unison$EditableTerm.Replace(_v27._0._0._0),
                                 term),
                                 function (term) {
                                    return $Maybe.Just(A2($Elmz$Moore.Moore,
                                    A2(out,term,explorer),
                                    A3(explorerclosed,
                                    mds,
                                    term,
                                    explorer)));
                                 });
                               case "ViewToggle":
                               return A2($Maybe.andThen,
                                 A5(stepX,
                                 e.topLeft,
                                 _v27._1,
                                 _v27._2,
                                 $Unison$EditableTerm.ToggleRaw,
                                 term),
                                 function (term) {
                                    return $Maybe.Just(A2($Elmz$Moore.Moore,
                                    A2(out,term,explorer),
                                    A3(explorerclosed,
                                    mds,
                                    term,
                                    explorer)));
                                 });}
                            return $Maybe.Nothing;
                         }();
                       case "Nothing":
                       return A2($Maybe.map,
                         function (term) {
                            return function () {
                               var o = A2(out,
                               term,
                               explorer);
                               return A2($Elmz$Moore.Moore,
                               _U.replace([["request"
                                           ,$Maybe.Nothing]],
                               o),
                               A3(explorerclosed,
                               mds,
                               term,
                               explorer));
                            }();
                         },
                         A2($Elmz$Moore.step,
                         {_: {}
                         ,availableWidth: _v27._1
                         ,event: $Maybe.Nothing
                         ,explorerOpen: false
                         ,metadata: _v27._2
                         ,topLeft: e.topLeft},
                         term));}
                    break;}
               _U.badCase($moduleName,
               "between lines 111 and 144");
            }();
         });
         var toOpen = F6(function (pt,
         w,
         mds,
         term,
         explorer,
         scope) {
            return function () {
               var env = {_: {}
                         ,availableWidth: 500
                         ,metadata: $Elmz$Moore.extract(mds)
                         ,overrides: $Basics.always($Maybe.Nothing)
                         ,raw: $Maybe.Nothing};
               var term$ = A2($Elmz$Moore.feed,
               {_: {}
               ,availableWidth: w
               ,event: $Maybe.Nothing
               ,explorerOpen: true
               ,metadata: env.metadata
               ,topLeft: pt},
               term);
               var focus = A2($Unison$TermExplorer.localFocus,
               scope.focus,
               function (_) {
                  return _.term;
               }($Elmz$Moore.extract(term)));
               var ex = A2($Elmz$Moore.feed,
               A3($Unison$TermExplorer.Open,
               env,
               focus,
               $Graphics$Input$Field.noContent),
               explorer);
               var o = function () {
                  var r = A2(out,term$,ex);
                  return _U.replace([["request"
                                     ,A2($Maybe.map,
                                     ExplorerRequest,
                                     function (_) {
                                        return _.request;
                                     }($Elmz$Moore.extract(ex)))]],
                  r);
               }();
               return A3($Elmz$Moore.spike,
               o,
               _U.replace([["request"
                           ,$Maybe.Nothing]],
               o),
               A3(exploreropen,mds,term$,ex));
            }();
         });
         var tryAccept = F5(function (pt,
         w,
         mds,
         term,
         explorer) {
            return A2($Maybe.andThen,
            explorer,
            function (explorer) {
               return function () {
                  var _v41 = function (_) {
                     return _.selection;
                  }($Elmz$Moore.extract(explorer));
                  switch (_v41.ctor)
                  {case "Just":
                     switch (_v41._0.ctor)
                       {case "_Tuple2":
                          return function () {
                               var term$ = A2($Elmz$Moore.feed,
                               {_: {}
                               ,availableWidth: w
                               ,event: $Maybe.Just($Unison$EditableTerm.Modify($Basics.always(_v41._0._1)))
                               ,explorerOpen: false
                               ,metadata: $Elmz$Moore.extract(mds)
                               ,topLeft: pt},
                               term);
                               return $Maybe.Just(A2($Elmz$Moore.Moore,
                               A2(out,term$,ex0),
                               A3(explorerclosed,
                               mds,
                               term$,
                               ex0)));
                            }();}
                       break;
                     case "Nothing":
                     return $Maybe.Just(A2($Elmz$Moore.Moore,
                       A2(out,term,explorer),
                       A3(exploreropen,
                       mds,
                       term,
                       explorer)));}
                  _U.badCase($moduleName,
                  "between lines 146 and 156");
               }();
            });
         });
         var explorer0 = $Unison$TermExplorer.model(sink);
         var terms0 = $Unison$EditableTerm.model(term0);
         return A2($Elmz$Moore.Moore,
         A2(out,terms0,explorer0),
         A3(explorerclosed,
         $Unison$Metadata.cache,
         terms0,
         explorer0));
      }();
   });
   var Mouse = function (a) {
      return {ctor: "Mouse",_0: a};
   };
   var LocalInfoResults = function (a) {
      return {ctor: "LocalInfoResults"
             ,_0: a};
   };
   var FieldContent = function (a) {
      return {ctor: "FieldContent"
             ,_0: a};
   };
   var EvaluationResults = function (a) {
      return {ctor: "EvaluationResults"
             ,_0: a};
   };
   var responses = F2(function (host,
   reqs) {
      return function () {
         var send = function (r) {
            return function () {
               switch (r.ctor)
               {case "Just":
                  return function () {
                       switch (r._0.ctor)
                       {case "EditRequest":
                          return $Task.map($Maybe.Just)(A2($Elmz$Json$Request.sendPost,
                            A2($Elmz$Json$Request.to,
                            $Unison$Node.editTerm(host),
                            Replace),
                            {ctor: "_Tuple4"
                            ,_0: r._0._0.pathToClosedSubterm
                            ,_1: r._0._0.pathFromClosedSubterm
                            ,_2: r._0._1
                            ,_3: r._0._0.closedSubterm}));
                          case "Evaluations":
                          return $Task.map($Maybe.Just)(A2($Elmz$Json$Request.sendPost,
                            A2($Elmz$Json$Request.to,
                            $Unison$Node.evaluateTerms(host),
                            EvaluationResults),
                            r._0._0));
                          case "ExplorerRequest":
                          switch (r._0._0.ctor)
                            {case "LocalInfo":
                               return $Task.map($Maybe.Just)(A2($Elmz$Json$Request.sendPost,
                                 A2($Elmz$Json$Request.to,
                                 $Unison$Node.localInfo(host),
                                 LocalInfoResults),
                                 {ctor: "_Tuple2"
                                 ,_0: r._0._0._0.closedSubterm
                                 ,_1: r._0._0._0.pathFromClosedSubterm}));
                               case "Search":
                               return $Task.map($Maybe.Just)(A2($Elmz$Json$Request.sendPost,
                                 A2($Elmz$Json$Request.to,
                                 $Unison$Node.search(host),
                                 SearchResults),
                                 r._0._0._0));}
                            break;
                          case "Metadatas":
                          return $Task.map($Maybe.Just)(A2($Elmz$Json$Request.sendPost,
                            A2($Elmz$Json$Request.to,
                            $Unison$Node.metadatas(host),
                            MetadataResults),
                            r._0._0));}
                       _U.badCase($moduleName,
                       "between lines 235 and 251");
                    }();
                  case "Nothing":
                  return $Task.succeed($Maybe.Nothing);}
               _U.badCase($moduleName,
               "between lines 233 and 251");
            }();
         };
         return A2($Signal.map,
         send,
         reqs);
      }();
   });
   var Enter = {ctor: "Enter"};
   var Delete = {ctor: "Delete"};
   var Click = function (a) {
      return {ctor: "Click",_0: a};
   };
   var Act = function (a) {
      return {ctor: "Act",_0: a};
   };
   var actions = F2(function (searchbox,
   responses) {
      return function () {
         var merge = $Signal.merge;
         return A2(merge,
         responses,
         $Signal.map($Maybe.Just)(A2(merge,
         A2(merge,
         A2(merge,
         A2(merge,
         A2(merge,
         A2(merge,
         A2(merge,
         A2(merge,
         A2(merge,
         A2(merge,
         A2($Elmz$Signal.keyEvent,
         Act($Unison$Action.Step),
         83),
         A2($Elmz$Signal.keyEvent,
         Act($Unison$Action.WHNF),
         69)),
         A2($Elmz$Signal.keyEvent,
         Act($Unison$Action.EtaReduce),
         82)),
         A2($Elmz$Signal.keyEvent,
         Delete,
         68)),
         A2($Elmz$Signal.keyEvent,
         Preapply,
         65)),
         A2($Elmz$Signal.keyEvent,
         ViewToggle,
         86)),
         A2($Elmz$Signal.keyEvent,
         Enter,
         13)),
         A2($Signal.map,
         Movement,
         $Elmz$Movement.d2$($Keyboard.arrows))),
         A2($Signal.map,
         Click,
         A2($Signal.sampleOn,
         $Mouse.clicks,
         $Mouse.position))),
         A2($Signal.map,
         Mouse,
         $Mouse.position)),
         A2($Signal.map,
         FieldContent,
         ignoreUpDown(searchbox)))));
      }();
   });
   var editor = F4(function (searchbox0,
   responses0,
   requestResponses0,
   term0) {
      return function () {
         var f = function (t) {
            return A2($Task.andThen,
            $Task.toResult(t),
            function (r) {
               return function () {
                  switch (r.ctor)
                  {case "Err":
                     return function () {
                          var u = A2($Debug.log,
                          "error",
                          r._0);
                          return $Task.succeed({ctor: "_Tuple0"});
                       }();
                     case "Ok":
                     return A2($Signal.send,
                       requestResponses0.address,
                       r._0);}
                  _U.badCase($moduleName,
                  "between lines 279 and 282");
               }();
            });
         };
         var outs = $Elmz$Moore.transform(A2(model,
         $Signal.message(searchbox0.address),
         term0))($Signal.map(function (_v58) {
            return function () {
               switch (_v58.ctor)
               {case "_Tuple2": return {_: {}
                                       ,availableWidth: _v58._1
                                       ,event: A2($Maybe.withDefault,
                                       $Maybe.Nothing,
                                       _v58._0)
                                       ,topLeft: {ctor: "_Tuple2"
                                                 ,_0: 16
                                                 ,_1: 16}};}
               _U.badCase($moduleName,
               "on line 259, column 36 to 110");
            }();
         })(A2($Elmz$Signal.tagEvent,
         A2(actions,
         searchbox0.signal,
         responses0.signal),
         $Window.width)));
         var host = "http://localhost:8080";
         var send = function (r) {
            return function () {
               switch (r.ctor)
               {case "Just":
                  return function () {
                       switch (r._0.ctor)
                       {case "EditRequest":
                          return $Task.map($Maybe.Just)(A2($Elmz$Json$Request.sendPost,
                            A2($Elmz$Json$Request.to,
                            $Unison$Node.editTerm(host),
                            Replace),
                            {ctor: "_Tuple4"
                            ,_0: r._0._0.pathToClosedSubterm
                            ,_1: r._0._0.pathFromClosedSubterm
                            ,_2: r._0._1
                            ,_3: r._0._0.closedSubterm}));
                          case "Evaluations":
                          return $Task.map($Maybe.Just)(A2($Elmz$Json$Request.sendPost,
                            A2($Elmz$Json$Request.to,
                            $Unison$Node.evaluateTerms(host),
                            EvaluationResults),
                            r._0._0));
                          case "ExplorerRequest":
                          switch (r._0._0.ctor)
                            {case "LocalInfo":
                               return $Task.map($Maybe.Just)(A2($Elmz$Json$Request.sendPost,
                                 A2($Elmz$Json$Request.to,
                                 $Unison$Node.localInfo(host),
                                 LocalInfoResults),
                                 {ctor: "_Tuple2"
                                 ,_0: r._0._0._0.closedSubterm
                                 ,_1: r._0._0._0.pathFromClosedSubterm}));
                               case "Search":
                               return $Task.map($Maybe.Just)(A2($Elmz$Json$Request.sendPost,
                                 A2($Elmz$Json$Request.to,
                                 $Unison$Node.search(host),
                                 SearchResults),
                                 r._0._0._0));}
                            break;
                          case "Metadatas":
                          return $Task.map($Maybe.Just)(A2($Elmz$Json$Request.sendPost,
                            A2($Elmz$Json$Request.to,
                            $Unison$Node.metadatas(host),
                            MetadataResults),
                            r._0._0));}
                       _U.badCase($moduleName,
                       "between lines 263 and 279");
                    }();
                  case "Nothing":
                  return $Task.succeed($Maybe.Nothing);}
               _U.badCase($moduleName,
               "between lines 261 and 279");
            }();
         };
         var tasks = $Signal.map(f)($Signal.map(send)($Elmz$Signal.justs(A2($Signal.map,
         function (_) {
            return _.request;
         },
         outs))));
         return {ctor: "_Tuple2"
                ,_0: A2($Signal.map,
                function (_) {
                   return _.view;
                },
                outs)
                ,_1: tasks};
      }();
   });
   var $ = A4(editor,
   searchbox0,
   responses0,
   requestResponses0,
   $Unison$Term.Blank),
   views0 = $._0,
   tasks = $._1;
   var runner1 = Elm.Native.Task.make(_elm).performSignal("runner1",
   tasks);
   var main = views0;
   _elm.Unison.Editor.values = {_op: _op
                               ,Act: Act
                               ,Click: Click
                               ,Delete: Delete
                               ,Enter: Enter
                               ,EvaluationResults: EvaluationResults
                               ,FieldContent: FieldContent
                               ,LocalInfoResults: LocalInfoResults
                               ,Mouse: Mouse
                               ,Movement: Movement
                               ,Preapply: Preapply
                               ,Replace: Replace
                               ,SearchResults: SearchResults
                               ,MetadataResults: MetadataResults
                               ,ViewToggle: ViewToggle
                               ,ExplorerRequest: ExplorerRequest
                               ,EditRequest: EditRequest
                               ,Declare: Declare
                               ,Evaluations: Evaluations
                               ,Metadatas: Metadatas
                               ,In: In
                               ,Out: Out
                               ,moveDown: moveDown
                               ,model: model
                               ,ignoreUpDown: ignoreUpDown
                               ,actions: actions
                               ,responses: responses
                               ,editor: editor
                               ,searchbox0: searchbox0
                               ,requests0: requests0
                               ,responses0: responses0
                               ,requestResponses0: requestResponses0
                               ,tasks: tasks
                               ,views0: views0
                               ,main: main};
   return _elm.Unison.Editor.values;
};
Elm.Unison = Elm.Unison || {};
Elm.Unison.Hash = Elm.Unison.Hash || {};
Elm.Unison.Hash.make = function (_elm) {
   "use strict";
   _elm.Unison = _elm.Unison || {};
   _elm.Unison.Hash = _elm.Unison.Hash || {};
   if (_elm.Unison.Hash.values)
   return _elm.Unison.Hash.values;
   var _op = {},
   _N = Elm.Native,
   _U = _N.Utils.make(_elm),
   _L = _N.List.make(_elm),
   $moduleName = "Unison.Hash",
   $Elmz$Json$Encoder = Elm.Elmz.Json.Encoder.make(_elm),
   $Json$Decode = Elm.Json.Decode.make(_elm);
   var encode = $Elmz$Json$Encoder.string;
   var decode = $Json$Decode.string;
   var base64 = function (h) {
      return h;
   };
   _elm.Unison.Hash.values = {_op: _op
                             ,base64: base64
                             ,decode: decode
                             ,encode: encode};
   return _elm.Unison.Hash.values;
};
Elm.Unison = Elm.Unison || {};
Elm.Unison.Metadata = Elm.Unison.Metadata || {};
Elm.Unison.Metadata.make = function (_elm) {
   "use strict";
   _elm.Unison = _elm.Unison || {};
   _elm.Unison.Metadata = _elm.Unison.Metadata || {};
   if (_elm.Unison.Metadata.values)
   return _elm.Unison.Metadata.values;
   var _op = {},
   _N = Elm.Native,
   _U = _N.Utils.make(_elm),
   _L = _N.List.make(_elm),
   $moduleName = "Unison.Metadata",
   $Basics = Elm.Basics.make(_elm),
   $Dict = Elm.Dict.make(_elm),
   $Elmz$Json$Decoder = Elm.Elmz.Json.Decoder.make(_elm),
   $Elmz$Json$Encoder = Elm.Elmz.Json.Encoder.make(_elm),
   $Elmz$Moore = Elm.Elmz.Moore.make(_elm),
   $List = Elm.List.make(_elm),
   $Maybe = Elm.Maybe.make(_elm),
   $Unison$Path = Elm.Unison.Path.make(_elm),
   $Unison$Reference = Elm.Unison.Reference.make(_elm),
   $Unison$Symbol = Elm.Unison.Symbol.make(_elm);
   var encodeNames = $Elmz$Json$Encoder.list($Unison$Symbol.encodeSymbol);
   var decodeNames = $Elmz$Json$Decoder.list($Unison$Symbol.decodeSymbol);
   var encodeQuery = $Elmz$Json$Encoder.string;
   var decodeQuery = $Elmz$Json$Decoder.string;
   var encodeSort = function (s) {
      return function () {
         switch (s.ctor)
         {case "Term":
            return $Elmz$Json$Encoder.string("Term");
            case "Type":
            return $Elmz$Json$Encoder.string("Type");}
         _U.badCase($moduleName,
         "between lines 65 and 67");
      }();
   };
   var encodeMetadata = function (md) {
      return A4($Elmz$Json$Encoder.object3,
      {ctor: "_Tuple2"
      ,_0: "sort"
      ,_1: encodeSort},
      {ctor: "_Tuple2"
      ,_0: "names"
      ,_1: encodeNames},
      {ctor: "_Tuple2"
      ,_0: "description"
      ,_1: $Elmz$Json$Encoder.optional($Unison$Reference.encode)},
      {ctor: "_Tuple3"
      ,_0: md.sort
      ,_1: md.names
      ,_2: md.description});
   };
   var firstName = F2(function (ifEmpty,
   md) {
      return A2($Maybe.withDefault,
      ifEmpty,
      A2($Maybe.map,
      function (_) {
         return _.name;
      },
      $List.head(md.names)));
   });
   var firstSymbol = F2(function (defaultName,
   md) {
      return function () {
         var _v1 = md.names;
         switch (_v1.ctor)
         {case "::": return _v1._0;
            case "[]": return {_: {}
                              ,fixity: $Unison$Symbol.Prefix
                              ,freshId: 0
                              ,name: defaultName
                              ,precedence: 9};}
         _U.badCase($moduleName,
         "between lines 46 and 48");
      }();
   });
   var Metadata = F3(function (a,
   b,
   c) {
      return {_: {}
             ,description: c
             ,names: b
             ,sort: a};
   });
   var Term = {ctor: "Term"};
   var anonymousTerm = A3(Metadata,
   Term,
   _L.fromArray([]),
   $Maybe.Nothing);
   var defaultMetadata = function (s) {
      return A3(Metadata,
      Term,
      _L.fromArray([$Unison$Symbol.prefix($Unison$Reference.toKey(s))]),
      $Maybe.Nothing);
   };
   var cache = function () {
      var go = F2(function (acc,
      entries) {
         return function () {
            var acc$ = A2($Dict.union,
            $Dict.fromList(entries),
            acc);
            return $Maybe.Just(A2($Elmz$Moore.Moore,
            acc$,
            go(acc$)));
         }();
      });
      return $Elmz$Moore.map(F2(function (dict,
      r) {
         return A2($Maybe.withDefault,
         defaultMetadata(r),
         A2($Dict.get,
         $Unison$Reference.toKey(r),
         dict));
      }))(A2($Elmz$Moore.Moore,
      $Dict.empty,
      go($Dict.empty)));
   }();
   var Type = {ctor: "Type"};
   var decodeSort = $Elmz$Json$Decoder.andThen($Elmz$Json$Decoder.string)(function (t) {
      return _U.eq(t,
      "Type") ? $Elmz$Json$Decoder.unit(Type) : _U.eq(t,
      "Term") ? $Elmz$Json$Decoder.unit(Term) : $Elmz$Json$Decoder.fail(A2($Basics._op["++"],
      "expected {Type, Term}, got : ",
      t));
   });
   var decodeMetadata = A4($Elmz$Json$Decoder.map3,
   Metadata,
   A2($Elmz$Json$Decoder.at,
   _L.fromArray(["sort"]),
   decodeSort),
   A2($Elmz$Json$Decoder.at,
   _L.fromArray(["names"]),
   decodeNames),
   A2($Elmz$Json$Decoder.at,
   _L.fromArray(["description"]),
   $Elmz$Json$Decoder.maybe($Unison$Reference.decode)));
   _elm.Unison.Metadata.values = {_op: _op
                                 ,Type: Type
                                 ,Term: Term
                                 ,Metadata: Metadata
                                 ,cache: cache
                                 ,anonymousTerm: anonymousTerm
                                 ,defaultMetadata: defaultMetadata
                                 ,firstSymbol: firstSymbol
                                 ,firstName: firstName
                                 ,decodeSort: decodeSort
                                 ,encodeSort: encodeSort
                                 ,decodeQuery: decodeQuery
                                 ,encodeQuery: encodeQuery
                                 ,decodeNames: decodeNames
                                 ,encodeNames: encodeNames
                                 ,decodeMetadata: decodeMetadata
                                 ,encodeMetadata: encodeMetadata};
   return _elm.Unison.Metadata.values;
};
Elm.Unison = Elm.Unison || {};
Elm.Unison.Node = Elm.Unison.Node || {};
Elm.Unison.Node.make = function (_elm) {
   "use strict";
   _elm.Unison = _elm.Unison || {};
   _elm.Unison.Node = _elm.Unison.Node || {};
   if (_elm.Unison.Node.values)
   return _elm.Unison.Node.values;
   var _op = {},
   _N = Elm.Native,
   _U = _N.Utils.make(_elm),
   _L = _N.List.make(_elm),
   $moduleName = "Unison.Node",
   $Basics = Elm.Basics.make(_elm),
   $Dict = Elm.Dict.make(_elm),
   $Elmz$Json$Decoder = Elm.Elmz.Json.Decoder.make(_elm),
   $Elmz$Json$Encoder = Elm.Elmz.Json.Encoder.make(_elm),
   $Elmz$Json$Request = Elm.Elmz.Json.Request.make(_elm),
   $Maybe = Elm.Maybe.make(_elm),
   $Unison$Action = Elm.Unison.Action.make(_elm),
   $Unison$Metadata = Elm.Unison.Metadata.make(_elm),
   $Unison$Path = Elm.Unison.Path.make(_elm),
   $Unison$Reference = Elm.Unison.Reference.make(_elm),
   $Unison$Term = Elm.Unison.Term.make(_elm),
   $Unison$Type = Elm.Unison.Type.make(_elm);
   var updateMetadata = function (host) {
      return A4($Elmz$Json$Request.post,
      host,
      "update-metadata",
      A2($Elmz$Json$Encoder.tuple2,
      $Unison$Reference.encode,
      $Unison$Metadata.encodeMetadata),
      $Elmz$Json$Decoder.unit({ctor: "_Tuple0"}));
   };
   var types = function (host) {
      return A4($Elmz$Json$Request.post,
      host,
      "types",
      $Elmz$Json$Encoder.list($Unison$Reference.encode),
      $Unison$Reference.decodeMap($Unison$Type.decodeType));
   };
   var transitiveDependents = function (host) {
      return A4($Elmz$Json$Request.post,
      host,
      "transitive-dependents",
      A2($Elmz$Json$Encoder.tuple2,
      $Elmz$Json$Encoder.optional($Elmz$Json$Encoder.list($Unison$Reference.encode)),
      $Unison$Reference.encode),
      $Elmz$Json$Decoder.list($Unison$Reference.decode));
   };
   var transitiveDependencies = function (host) {
      return A4($Elmz$Json$Request.post,
      host,
      "transitive-dependencies",
      A2($Elmz$Json$Encoder.tuple2,
      $Elmz$Json$Encoder.optional($Elmz$Json$Encoder.list($Unison$Reference.encode)),
      $Unison$Reference.encode),
      $Elmz$Json$Decoder.list($Unison$Reference.decode));
   };
   var terms = function (host) {
      return A4($Elmz$Json$Request.post,
      host,
      "terms",
      $Elmz$Json$Encoder.list($Unison$Reference.encode),
      $Unison$Reference.decodeMap($Unison$Term.decodeTerm));
   };
   var areResultsComplete = function (results) {
      return _U.eq($Basics.snd(results.illTypedMatches),
      0) && _U.eq($Basics.snd(results.matches),
      0);
   };
   var SearchResults = F5(function (a,
   b,
   c,
   d,
   e) {
      return {_: {}
             ,illTypedMatches: d
             ,matches: c
             ,positionsExamined: e
             ,query: a
             ,references: b};
   });
   var search = function (host) {
      return A4($Elmz$Json$Request.post,
      host,
      "search",
      A5($Elmz$Json$Encoder.tuple5,
      $Unison$Term.encodeTerm,
      $Unison$Path.encodePath,
      $Elmz$Json$Encoder.$int,
      $Unison$Metadata.encodeQuery,
      $Elmz$Json$Encoder.optional($Unison$Type.encodeType)),
      A6($Elmz$Json$Decoder.map5,
      SearchResults,
      $Elmz$Json$Decoder.at(_L.fromArray(["query"]))($Unison$Metadata.decodeQuery),
      $Elmz$Json$Decoder.at(_L.fromArray(["references"]))($Unison$Reference.decodeAssociationList($Unison$Metadata.decodeMetadata)),
      $Elmz$Json$Decoder.at(_L.fromArray(["matches"]))(A2($Elmz$Json$Decoder.tuple2,
      $Elmz$Json$Decoder.list($Unison$Term.decodeTerm),
      $Elmz$Json$Decoder.$int)),
      $Elmz$Json$Decoder.at(_L.fromArray(["illTypedMatches"]))(A2($Elmz$Json$Decoder.tuple2,
      $Elmz$Json$Decoder.list($Unison$Term.decodeTerm),
      $Elmz$Json$Decoder.$int)),
      $Elmz$Json$Decoder.at(_L.fromArray(["positionsExamined"]))($Elmz$Json$Decoder.list($Elmz$Json$Decoder.$int))));
   };
   var metadatas = function (host) {
      return A4($Elmz$Json$Request.post,
      host,
      "metadatas",
      $Elmz$Json$Encoder.list($Unison$Reference.encode),
      $Unison$Reference.decodeAssociationList($Unison$Metadata.decodeMetadata));
   };
   var LocalInfo = F6(function (a,
   b,
   c,
   d,
   e,
   f) {
      return {_: {}
             ,admissible: c
             ,current: b
             ,localApplications: e
             ,locals: d
             ,subterm: a
             ,wellTypedLocals: f};
   });
   var localInfo = function (host) {
      return A4($Elmz$Json$Request.post,
      host,
      "local-info",
      A2($Elmz$Json$Encoder.tuple2,
      $Unison$Term.encodeTerm,
      $Unison$Path.encodePath),
      A7($Elmz$Json$Decoder.product6,
      LocalInfo,
      $Unison$Term.decodeTerm,
      $Unison$Type.decodeType,
      $Unison$Type.decodeType,
      $Elmz$Json$Decoder.list($Unison$Term.decodeTerm),
      $Elmz$Json$Decoder.list($Elmz$Json$Decoder.$int),
      $Elmz$Json$Decoder.list($Unison$Term.decodeTerm)));
   };
   var editType = function (host) {
      return A4($Elmz$Json$Request.post,
      host,
      "edit-type",
      A3($Elmz$Json$Encoder.tuple3,
      $Unison$Path.encodePath,
      $Unison$Action.encode,
      $Unison$Type.encodeType),
      $Unison$Type.decodeType);
   };
   var Replacement = F4(function (a,
   b,
   c,
   d) {
      return {_: {}
             ,$new: c
             ,newPath: d
             ,old: b
             ,path: a};
   });
   var editTerm = function (host) {
      return A4($Elmz$Json$Request.post,
      host,
      "edit-term",
      A4($Elmz$Json$Encoder.tuple4,
      $Unison$Path.encodePath,
      $Unison$Path.encodePath,
      $Unison$Action.encode,
      $Unison$Term.encodeTerm),
      A5($Elmz$Json$Decoder.product4,
      Replacement,
      $Unison$Path.decodePath,
      $Unison$Term.decodeTerm,
      $Unison$Term.decodeTerm,
      $Unison$Path.decodePath));
   };
   var evaluateTerms = function (host) {
      return A4($Elmz$Json$Request.post,
      host,
      "evaluate-terms",
      $Elmz$Json$Encoder.list(A2($Elmz$Json$Encoder.tuple2,
      $Unison$Path.encodePath,
      $Unison$Term.encodeTerm)),
      $Elmz$Json$Decoder.list(A5($Elmz$Json$Decoder.product4,
      Replacement,
      $Unison$Path.decodePath,
      $Unison$Term.decodeTerm,
      $Unison$Term.decodeTerm,
      $Unison$Path.decodePath)));
   };
   var dependents = function (host) {
      return A4($Elmz$Json$Request.post,
      host,
      "dependents",
      A2($Elmz$Json$Encoder.tuple2,
      $Elmz$Json$Encoder.optional($Elmz$Json$Encoder.list($Unison$Reference.encode)),
      $Unison$Reference.encode),
      $Elmz$Json$Decoder.list($Unison$Reference.decode));
   };
   var dependencies = function (host) {
      return A4($Elmz$Json$Request.post,
      host,
      "dependencies",
      A2($Elmz$Json$Encoder.tuple2,
      $Elmz$Json$Encoder.optional($Elmz$Json$Encoder.list($Unison$Reference.encode)),
      $Unison$Reference.encode),
      $Elmz$Json$Decoder.list($Unison$Reference.decode));
   };
   var createType = function (host) {
      return A4($Elmz$Json$Request.post,
      host,
      "create-type",
      A2($Elmz$Json$Encoder.tuple2,
      $Unison$Type.encodeType,
      $Unison$Metadata.encodeMetadata),
      $Unison$Reference.decode);
   };
   var createTerm = function (host) {
      return A4($Elmz$Json$Request.post,
      host,
      "create-term",
      A2($Elmz$Json$Encoder.tuple2,
      $Unison$Term.encodeTerm,
      $Unison$Metadata.encodeMetadata),
      $Unison$Reference.decode);
   };
   var admissibleTypeOf = function (host) {
      return A4($Elmz$Json$Request.post,
      host,
      "admissible-type-of",
      A2($Elmz$Json$Encoder.tuple2,
      $Unison$Term.encodeTerm,
      $Unison$Path.encodePath),
      $Unison$Type.decodeType);
   };
   _elm.Unison.Node.values = {_op: _op
                             ,admissibleTypeOf: admissibleTypeOf
                             ,createTerm: createTerm
                             ,createType: createType
                             ,dependencies: dependencies
                             ,dependents: dependents
                             ,Replacement: Replacement
                             ,editTerm: editTerm
                             ,editType: editType
                             ,evaluateTerms: evaluateTerms
                             ,LocalInfo: LocalInfo
                             ,localInfo: localInfo
                             ,metadatas: metadatas
                             ,SearchResults: SearchResults
                             ,areResultsComplete: areResultsComplete
                             ,search: search
                             ,terms: terms
                             ,transitiveDependencies: transitiveDependencies
                             ,transitiveDependents: transitiveDependents
                             ,types: types
                             ,updateMetadata: updateMetadata};
   return _elm.Unison.Node.values;
};
Elm.Unison = Elm.Unison || {};
Elm.Unison.Path = Elm.Unison.Path || {};
Elm.Unison.Path.make = function (_elm) {
   "use strict";
   _elm.Unison = _elm.Unison || {};
   _elm.Unison.Path = _elm.Unison.Path || {};
   if (_elm.Unison.Path.values)
   return _elm.Unison.Path.values;
   var _op = {},
   _N = Elm.Native,
   _U = _N.Utils.make(_elm),
   _L = _N.List.make(_elm),
   $moduleName = "Unison.Path",
   $Basics = Elm.Basics.make(_elm),
   $Elmz$Json$Decoder = Elm.Elmz.Json.Decoder.make(_elm),
   $Elmz$Json$Encoder = Elm.Elmz.Json.Encoder.make(_elm),
   $Json$Decode = Elm.Json.Decode.make(_elm),
   $List = Elm.List.make(_elm),
   $String = Elm.String.make(_elm);
   var encodeE = function (e) {
      return function () {
         switch (e.ctor)
         {case "Arg":
            return A3($Elmz$Json$Encoder.tag$,
              "Arg",
              $Elmz$Json$Encoder.emptyArray,
              {ctor: "_Tuple0"});
            case "Body":
            return A3($Elmz$Json$Encoder.tag$,
              "Body",
              $Elmz$Json$Encoder.emptyArray,
              {ctor: "_Tuple0"});
            case "Fn":
            return A3($Elmz$Json$Encoder.tag$,
              "Fn",
              $Elmz$Json$Encoder.emptyArray,
              {ctor: "_Tuple0"});
            case "Index":
            return A3($Elmz$Json$Encoder.tag$,
              "Index",
              $Elmz$Json$Encoder.$int,
              e._0);}
         _U.badCase($moduleName,
         "between lines 109 and 113");
      }();
   };
   var encodePath = $Elmz$Json$Encoder.list(encodeE);
   var startsWith = F2(function (prefix,
   overall) {
      return _U.eq($List.length(prefix),
      0) || _U.cmp($List.length(prefix),
      $List.length(overall)) < 1 && $List.all(function (_v2) {
         return function () {
            switch (_v2.ctor)
            {case "_Tuple2":
               return _U.eq(_v2._0,_v2._1);}
            _U.badCase($moduleName,
            "on line 98, column 57 to 64");
         }();
      })(A3($List.map2,
      F2(function (v0,v1) {
         return {ctor: "_Tuple2"
                ,_0: v0
                ,_1: v1};
      }),
      prefix,
      overall));
   });
   var trimThroughScope = function (p) {
      return function () {
         var go = function (p) {
            return function () {
               switch (p.ctor)
               {case "::": switch (p._0.ctor)
                    {case "Body":
                       return $List.reverse(p._1);}
                    return go(p._1);
                  case "[]": return p;}
               _U.badCase($moduleName,
               "between lines 88 and 92");
            }();
         };
         return go($List.reverse(p));
      }();
   };
   var trimToScope = function (p) {
      return function () {
         var go = function (p) {
            return function () {
               switch (p.ctor)
               {case "::": switch (p._0.ctor)
                    {case "Body":
                       return $List.reverse(p);}
                    return go(p._1);
                  case "[]": return p;}
               _U.badCase($moduleName,
               "between lines 80 and 84");
            }();
         };
         return go($List.reverse(p));
      }();
   };
   var lambdaDepth = function (p) {
      return function () {
         switch (p.ctor)
         {case "::": switch (p._0.ctor)
              {case "Body":
                 return 1 + lambdaDepth(p._1);}
              return lambdaDepth(p._1);
            case "[]": return 0;}
         _U.badCase($moduleName,
         "between lines 71 and 74");
      }();
   };
   var trimArg = function (p) {
      return function () {
         var _v15 = $List.reverse(p);
         switch (_v15.ctor)
         {case "::":
            switch (_v15._0.ctor)
              {case "Arg":
                 return $List.reverse(_v15._1);}
              break;}
         return p;
      }();
   };
   var isRightmostArg = function (p) {
      return function () {
         var _v18 = $List.reverse(p);
         switch (_v18.ctor)
         {case "::":
            switch (_v18._0.ctor)
              {case "Arg":
                 switch (_v18._1.ctor)
                   {case "::":
                      switch (_v18._1._0.ctor)
                        {case "Fn": return false;}
                        break;}
                   break;
                 case "Fn": return false;}
              break;}
         return true;
      }();
   };
   var append = F2(function (p,
   es) {
      return A2($Basics._op["++"],
      p,
      es);
   });
   var snoc = F2(function (p,e) {
      return A2($Basics._op["++"],
      p,
      _L.fromArray([e]));
   });
   var key = function (path) {
      return function () {
         var f = function (e) {
            return function () {
               switch (e.ctor)
               {case "Arg": return "Arg";
                  case "Body": return "Body";
                  case "Fn": return "Fn";
                  case "Index":
                  return $Basics.toString(e._0);}
               _U.badCase($moduleName,
               "between lines 24 and 29");
            }();
         };
         return A2($String.join,
         ",",
         A2($List.map,f,path));
      }();
   };
   var Index = function (a) {
      return {ctor: "Index",_0: a};
   };
   var Body = {ctor: "Body"};
   var Arg = {ctor: "Arg"};
   var increment = F2(function (valid,
   p) {
      return function () {
         var go = function (p) {
            return function () {
               switch (p.ctor)
               {case "::": switch (p._0.ctor)
                    {case "Fn":
                       return $List.reverse(A2($List._op["::"],
                         Arg,
                         p._1));
                       case "Index":
                       return function () {
                            var p$ = $List.reverse(A2($List._op["::"],
                            Index(p._0._0 + 1),
                            p._1));
                            return valid(p$) ? p$ : go(p._1);
                         }();}
                    return go(p._1);
                  case "[]":
                  return _L.fromArray([]);}
               _U.badCase($moduleName,
               "between lines 39 and 45");
            }();
         };
         return go($List.reverse(p));
      }();
   });
   var Fn = {ctor: "Fn"};
   var decrement = F2(function (valid,
   p) {
      return function () {
         var go = function (p) {
            return function () {
               switch (p.ctor)
               {case "::": switch (p._0.ctor)
                    {case "Arg":
                       return function () {
                            var p2 = $List.reverse(A2($List._op["::"],
                            Fn,
                            p._1));
                            var p1 = $List.reverse(A2($List._op["::"],
                            Arg,
                            A2($List._op["::"],Fn,p._1)));
                            return valid(p1) ? p1 : p2;
                         }();
                       case "Index":
                       return function () {
                            var p$ = $List.reverse(A2($List._op["::"],
                            Index(p._0._0 - 1),
                            p._1));
                            return valid(p$) ? p$ : go(p._1);
                         }();}
                    return go(p._1);
                  case "[]":
                  return _L.fromArray([]);}
               _U.badCase($moduleName,
               "between lines 49 and 57");
            }();
         };
         return go($List.reverse(p));
      }();
   });
   var decodeE = $Elmz$Json$Decoder.union$(function (t) {
      return _U.eq(t,
      "Fn") ? $Json$Decode.succeed(Fn) : _U.eq(t,
      "Arg") ? $Json$Decode.succeed(Arg) : _U.eq(t,
      "Body") ? $Json$Decode.succeed(Body) : _U.eq(t,
      "Index") ? A2($Json$Decode.map,
      Index,
      $Json$Decode.$int) : $Json$Decode.fail(A2($Basics._op["++"],
      "unrecognized element tag: ",
      t));
   });
   var decodePath = $Json$Decode.list(decodeE);
   _elm.Unison.Path.values = {_op: _op
                             ,Fn: Fn
                             ,Arg: Arg
                             ,Body: Body
                             ,Index: Index
                             ,key: key
                             ,snoc: snoc
                             ,append: append
                             ,increment: increment
                             ,decrement: decrement
                             ,isRightmostArg: isRightmostArg
                             ,trimArg: trimArg
                             ,lambdaDepth: lambdaDepth
                             ,trimToScope: trimToScope
                             ,trimThroughScope: trimThroughScope
                             ,startsWith: startsWith
                             ,decodeE: decodeE
                             ,encodeE: encodeE
                             ,decodePath: decodePath
                             ,encodePath: encodePath};
   return _elm.Unison.Path.values;
};
Elm.Unison = Elm.Unison || {};
Elm.Unison.Reference = Elm.Unison.Reference || {};
Elm.Unison.Reference.make = function (_elm) {
   "use strict";
   _elm.Unison = _elm.Unison || {};
   _elm.Unison.Reference = _elm.Unison.Reference || {};
   if (_elm.Unison.Reference.values)
   return _elm.Unison.Reference.values;
   var _op = {},
   _N = Elm.Native,
   _U = _N.Utils.make(_elm),
   _L = _N.List.make(_elm),
   $moduleName = "Unison.Reference",
   $Basics = Elm.Basics.make(_elm),
   $Dict = Elm.Dict.make(_elm),
   $Elmz$Json$Decoder = Elm.Elmz.Json.Decoder.make(_elm),
   $Elmz$Json$Encoder = Elm.Elmz.Json.Encoder.make(_elm),
   $List = Elm.List.make(_elm),
   $Unison$Hash = Elm.Unison.Hash.make(_elm);
   var toKey = function (r) {
      return function () {
         switch (r.ctor)
         {case "Builtin": return r._0;
            case "Derived":
            return A2($Basics._op["++"],
              "#",
              r._0);}
         _U.badCase($moduleName,
         "between lines 41 and 43");
      }();
   };
   var encode = function (r) {
      return function () {
         switch (r.ctor)
         {case "Builtin":
            return A3($Elmz$Json$Encoder.tag$,
              "Builtin",
              $Elmz$Json$Encoder.string,
              r._0);
            case "Derived":
            return A3($Elmz$Json$Encoder.tag$,
              "Derived",
              $Unison$Hash.encode,
              r._0);}
         _U.badCase($moduleName,
         "between lines 27 and 29");
      }();
   };
   var Derived = function (a) {
      return {ctor: "Derived"
             ,_0: a};
   };
   var Builtin = function (a) {
      return {ctor: "Builtin"
             ,_0: a};
   };
   var decode = $Elmz$Json$Decoder.union$(function (t) {
      return _U.eq(t,
      "Builtin") ? A2($Elmz$Json$Decoder.map,
      Builtin,
      $Elmz$Json$Decoder.string) : _U.eq(t,
      "Derived") ? A2($Elmz$Json$Decoder.map,
      Derived,
      $Unison$Hash.decode) : $Elmz$Json$Decoder.fail(A2($Basics._op["++"],
      "unknown tag while decoding a Reference: ",
      t));
   });
   var decodeAssociationList = function (v) {
      return $Elmz$Json$Decoder.map(function (kvs) {
         return A2($List.map,
         function (_v6) {
            return function () {
               switch (_v6.ctor)
               {case "_Tuple2":
                  return {ctor: "_Tuple2"
                         ,_0: toKey(_v6._0)
                         ,_1: _v6._1};}
               _U.badCase($moduleName,
               "on line 34, column 48 to 57");
            }();
         },
         kvs);
      })($Elmz$Json$Decoder.list(A2($Elmz$Json$Decoder.tuple2,
      decode,
      v)));
   };
   var decodeMap = function (v) {
      return $Elmz$Json$Decoder.map($Dict.fromList)(decodeAssociationList(v));
   };
   _elm.Unison.Reference.values = {_op: _op
                                  ,Builtin: Builtin
                                  ,Derived: Derived
                                  ,decode: decode
                                  ,encode: encode
                                  ,decodeAssociationList: decodeAssociationList
                                  ,decodeMap: decodeMap
                                  ,toKey: toKey};
   return _elm.Unison.Reference.values;
};
Elm.Unison = Elm.Unison || {};
Elm.Unison.Scope = Elm.Unison.Scope || {};
Elm.Unison.Scope.make = function (_elm) {
   "use strict";
   _elm.Unison = _elm.Unison || {};
   _elm.Unison.Scope = _elm.Unison.Scope || {};
   if (_elm.Unison.Scope.values)
   return _elm.Unison.Scope.values;
   var _op = {},
   _N = Elm.Native,
   _U = _N.Utils.make(_elm),
   _L = _N.List.make(_elm),
   $moduleName = "Unison.Scope",
   $Basics = Elm.Basics.make(_elm),
   $Elmz$Layout = Elm.Elmz.Layout.make(_elm),
   $Elmz$Movement = Elm.Elmz.Movement.make(_elm),
   $List = Elm.List.make(_elm),
   $Maybe = Elm.Maybe.make(_elm),
   $Unison$Path = Elm.Unison.Path.make(_elm),
   $Unison$Term = Elm.Unison.Term.make(_elm),
   $Unison$View = Elm.Unison.View.make(_elm);
   var view = F2(function (layout,
   scope) {
      return function () {
         var startsWith = F2(function (l1,
         l2) {
            return function () {
               var btoi = function (b) {
                  return b ? 1 : 0;
               };
               return A2($Unison$Path.startsWith,
               l1.path,
               l2.path) && _U.cmp(btoi(l1.selectable),
               btoi(l2.selectable)) < 1;
            }();
         });
         return $Elmz$Layout.selectableLub(function (_) {
            return _.selectable;
         })(A4($Elmz$Layout.region,
         startsWith,
         $Basics.identity,
         layout,
         {_: {}
         ,path: scope.focus
         ,selectable: true}));
      }();
   });
   var Scope = F3(function (a,
   b,
   c) {
      return {_: {}
             ,downs: c
             ,focus: a
             ,ups: b};
   });
   var scope = function (focus) {
      return A3(Scope,
      focus,
      _L.fromArray([]),
      _L.fromArray([]));
   };
   var mouse = F2(function (_v0,
   layout) {
      return function () {
         switch (_v0.ctor)
         {case "_Tuple2":
            return function () {
                 var paths = A3($Elmz$Layout.atRanked,
                 function ($) {
                    return $List.length(function (_) {
                       return _.path;
                    }($));
                 },
                 layout,
                 A3($Elmz$Layout.Region,
                 {_: {},x: _v0._0,y: _v0._1},
                 2,
                 2));
                 return function () {
                    switch (paths.ctor)
                    {case "::":
                       switch (paths._0.ctor)
                         {case "::":
                            return $Basics.always($Maybe.Just(scope(paths._0._0.path)));}
                         break;}
                    return $Basics.always($Maybe.Nothing);
                 }();
              }();}
         _U.badCase($moduleName,
         "between lines 57 and 60");
      }();
   });
   var up = function (m) {
      return function () {
         switch (m.ctor)
         {case "Just":
            return $Maybe.Just(function () {
                 var _v11 = m._0.ups;
                 switch (_v11.ctor)
                 {case "::": return A3(Scope,
                      _v11._0,
                      _v11._1,
                      A2($List._op["::"],
                      m._0.focus,
                      m._0.downs));
                    case "[]": return function () {
                         var f = $Unison$Term.up(m._0.focus);
                         return _U.eq(f,
                         m._0.focus) ? A3(Scope,
                         m._0.focus,
                         m._0.ups,
                         m._0.downs) : A3(Scope,
                         f,
                         _L.fromArray([]),
                         A2($List._op["::"],
                         m._0.focus,
                         m._0.downs));
                      }();}
                 _U.badCase($moduleName,
                 "between lines 65 and 70");
              }());
            case "Nothing":
            return $Maybe.Nothing;}
         _U.badCase($moduleName,
         "between lines 63 and 70");
      }();
   };
   var down = F2(function (e,m) {
      return function () {
         switch (m.ctor)
         {case "Just":
            return $Maybe.Just(function () {
                 var _v16 = m._0.downs;
                 switch (_v16.ctor)
                 {case "::": return A3(Scope,
                      _v16._0,
                      A2($List._op["::"],
                      m._0.focus,
                      m._0.ups),
                      _v16._1);
                    case "[]": return function () {
                         var f = A2($Unison$Term.down,
                         e,
                         m._0.focus);
                         return _U.eq(f,
                         m._0.focus) ? A3(Scope,
                         m._0.focus,
                         m._0.ups,
                         m._0.downs) : A3(Scope,
                         f,
                         A2($List._op["::"],
                         m._0.focus,
                         m._0.ups),
                         _L.fromArray([]));
                      }();}
                 _U.badCase($moduleName,
                 "between lines 75 and 80");
              }());
            case "Nothing":
            return $Maybe.Nothing;}
         _U.badCase($moduleName,
         "between lines 73 and 80");
      }();
   });
   var left = F2(function (e,m) {
      return function () {
         switch (m.ctor)
         {case "Just":
            return $Maybe.Just(function () {
                 var p = A2($Unison$Term.siblingL,
                 e,
                 m._0.focus);
                 return _U.eq(p,
                 m._0.focus) ? A3(Scope,
                 m._0.focus,
                 m._0.ups,
                 m._0.downs) : A3(Scope,
                 p,
                 _L.fromArray([]),
                 _L.fromArray([]));
              }());
            case "Nothing":
            return $Maybe.Nothing;}
         _U.badCase($moduleName,
         "between lines 83 and 89");
      }();
   });
   var right = F2(function (e,m) {
      return function () {
         switch (m.ctor)
         {case "Just":
            return $Maybe.Just(function () {
                 var p = A2($Unison$Term.siblingR,
                 e,
                 m._0.focus);
                 return _U.eq(p,
                 m._0.focus) ? A3(Scope,
                 m._0.focus,
                 m._0.ups,
                 m._0.downs) : A3(Scope,
                 p,
                 _L.fromArray([]),
                 _L.fromArray([]));
              }());
            case "Nothing":
            return $Maybe.Nothing;}
         _U.badCase($moduleName,
         "between lines 92 and 98");
      }();
   });
   var movement = F2(function (e,
   _v23) {
      return function () {
         switch (_v23.ctor)
         {case "D2":
            return function ($) {
                 return (_U.eq(_v23._0,
                 $Elmz$Movement.Negative) ? left(e) : $Basics.identity)((_U.eq(_v23._0,
                 $Elmz$Movement.Positive) ? right(e) : $Basics.identity)((_U.eq(_v23._1,
                 $Elmz$Movement.Negative) ? down(e) : $Basics.identity)((_U.eq(_v23._1,
                 $Elmz$Movement.Positive) ? up : $Basics.identity)($))));
              };}
         _U.badCase($moduleName,
         "between lines 49 and 52");
      }();
   });
   _elm.Unison.Scope.values = {_op: _op
                              ,Scope: Scope
                              ,scope: scope
                              ,view: view
                              ,movement: movement
                              ,mouse: mouse
                              ,up: up
                              ,down: down
                              ,left: left
                              ,right: right};
   return _elm.Unison.Scope.values;
};
Elm.Unison = Elm.Unison || {};
Elm.Unison.SearchboxParser = Elm.Unison.SearchboxParser || {};
Elm.Unison.SearchboxParser.make = function (_elm) {
   "use strict";
   _elm.Unison = _elm.Unison || {};
   _elm.Unison.SearchboxParser = _elm.Unison.SearchboxParser || {};
   if (_elm.Unison.SearchboxParser.values)
   return _elm.Unison.SearchboxParser.values;
   var _op = {},
   _N = Elm.Native,
   _U = _N.Utils.make(_elm),
   _L = _N.List.make(_elm),
   $moduleName = "Unison.SearchboxParser",
   $Basics = Elm.Basics.make(_elm),
   $Elmz$Distance = Elm.Elmz.Distance.make(_elm),
   $Elmz$Parser = Elm.Elmz.Parser.make(_elm),
   $Result = Elm.Result.make(_elm),
   $Set = Elm.Set.make(_elm),
   $String = Elm.String.make(_elm),
   $Unison$Term = Elm.Unison.Term.make(_elm);
   var quote = _U.chr("\"");
   var fraction = $Elmz$Parser.map(function (denominator) {
      return $Elmz$Distance.Fraction(1.0 / $Basics.toFloat(denominator));
   })(A2($Elmz$Parser._op["*>"],
   A2($Elmz$Parser._op["*>"],
   $Elmz$Parser.symbol(_U.chr("1")),
   $Elmz$Parser.symbol(_U.chr("/"))),
   A2($Elmz$Parser._op["<*"],
   $Elmz$Parser.nonnegativeInt,
   $Elmz$Parser.symbol(_U.chr("d")))));
   var pixels = function () {
      var f = function (n) {
         return A2($Elmz$Distance.Scale,
         $Basics.toFloat(n),
         $Elmz$Distance.Pixel);
      };
      return A2($Elmz$Parser._op["<*"],
      A2($Elmz$Parser._op["<$>"],
      f,
      $Elmz$Parser.nonnegativeInt),
      $Elmz$Parser.token("px"));
   }();
   var distance = $Elmz$Parser.map(function ($) {
      return $Unison$Term.Lit($Unison$Term.Distance($));
   })($Elmz$Parser.choice(_L.fromArray([pixels
                                       ,fraction])));
   var openString = A2($Elmz$Parser.andThen,
   $Elmz$Parser.symbol(quote),
   function (_v0) {
      return function () {
         return $Elmz$Parser.map(function ($) {
            return $Unison$Term.Lit($Unison$Term.Text($));
         })($Elmz$Parser.until(quote));
      }();
   });
   var string = $Elmz$Parser.map(function ($) {
      return $Unison$Term.Lit($Unison$Term.Text($));
   })(A2($Elmz$Parser._op["<*"],
   A2($Elmz$Parser._op["*>"],
   $Elmz$Parser.symbol(quote),
   $Elmz$Parser.until(quote)),
   $Elmz$Parser.symbol(quote)));
   var $float = A2($Elmz$Parser.map,
   function ($) {
      return $Unison$Term.Lit($Unison$Term.Number($));
   },
   $Elmz$Parser.attempt($Elmz$Parser.$float));
   var $int = A2($Elmz$Parser.map,
   function ($) {
      return $Unison$Term.Lit($Unison$Term.Number($Basics.toFloat($)));
   },
   $Elmz$Parser.attempt($Elmz$Parser.$int));
   var blank = A2($Elmz$Parser.map,
   $Basics.always($Unison$Term.Blank),
   $Elmz$Parser.symbol(_U.chr("_")));
   var literal = $Elmz$Parser.choice(_L.fromArray([blank
                                                  ,distance
                                                  ,$float
                                                  ,$int
                                                  ,string
                                                  ,openString]));
   var spaces = A2($Elmz$Parser._op["<$"],
   {ctor: "_Tuple0"},
   $Elmz$Parser.some($Elmz$Parser.satisfy(F2(function (x,
   y) {
      return _U.eq(x,y);
   })(_U.chr(" ")))));
   var operator = function () {
      var ops = $Set.fromList($String.toList("!@#$%^&*-+|\\;.></`~"));
      return $Elmz$Parser.satisfy(function (c) {
         return A2($Set.member,c,ops);
      });
   }();
   var parseTerm = $Elmz$Parser.parse(literal);
   var space = $Elmz$Parser.satisfy(F2(function (x,
   y) {
      return _U.eq(x,y);
   })(_U.chr(" ")));
   var parser = function (env) {
      return function () {
         var any = $Elmz$Parser.satisfy($Basics.always(true));
         var q = A2($Elmz$Parser.map,
         env.query,
         $Elmz$Parser.until(_U.chr(" ")));
         var lit = A2($Elmz$Parser.map,
         env.literal,
         literal);
         return $Elmz$Parser.choice(_L.fromArray([A2($Elmz$Parser._op["<*>"],
                                                 A2($Elmz$Parser._op["<$>"],
                                                 env.combine,
                                                 A2($Elmz$Parser._op["<*"],
                                                 lit,
                                                 space)),
                                                 any)
                                                 ,lit
                                                 ,A2($Elmz$Parser._op["<*>"],
                                                 A2($Elmz$Parser._op["<$>"],
                                                 env.combine,
                                                 A2($Elmz$Parser._op["<*"],
                                                 q,
                                                 space)),
                                                 any)
                                                 ,q]));
      }();
   };
   var parse = function (env) {
      return $Elmz$Parser.parse(parser(env));
   };
   _elm.Unison.SearchboxParser.values = {_op: _op
                                        ,parser: parser
                                        ,space: space
                                        ,parse: parse
                                        ,parseTerm: parseTerm
                                        ,operator: operator
                                        ,spaces: spaces
                                        ,literal: literal
                                        ,blank: blank
                                        ,$int: $int
                                        ,$float: $float
                                        ,string: string
                                        ,openString: openString
                                        ,distance: distance
                                        ,pixels: pixels
                                        ,fraction: fraction
                                        ,quote: quote};
   return _elm.Unison.SearchboxParser.values;
};
Elm.Unison = Elm.Unison || {};
Elm.Unison.Styles = Elm.Unison.Styles || {};
Elm.Unison.Styles.make = function (_elm) {
   "use strict";
   _elm.Unison = _elm.Unison || {};
   _elm.Unison.Styles = _elm.Unison.Styles || {};
   if (_elm.Unison.Styles.values)
   return _elm.Unison.Styles.values;
   var _op = {},
   _N = Elm.Native,
   _U = _N.Utils.make(_elm),
   _L = _N.List.make(_elm),
   $moduleName = "Unison.Styles",
   $Basics = Elm.Basics.make(_elm),
   $Color = Elm.Color.make(_elm),
   $Elmz$Layout = Elm.Elmz.Layout.make(_elm),
   $Graphics$Collage = Elm.Graphics.Collage.make(_elm),
   $Graphics$Element = Elm.Graphics.Element.make(_elm),
   $Graphics$Input$Field = Elm.Graphics.Input.Field.make(_elm),
   $List = Elm.List.make(_elm),
   $Maybe = Elm.Maybe.make(_elm),
   $Text = Elm.Text.make(_elm);
   var asbestos = A3($Color.rgb,
   127,
   140,
   141);
   var concrete = A3($Color.rgb,
   149,
   165,
   166);
   var midnightBlueA = function (alpha) {
      return A4($Color.rgba,
      44,
      62,
      80,
      alpha);
   };
   var midnightBlue = A3($Color.rgb,
   44,
   62,
   80);
   var wetAsphalt = A3($Color.rgb,
   52,
   73,
   94);
   var silver = A3($Color.rgb,
   189,
   195,
   199);
   var clouds = A3($Color.rgb,
   236,
   240,
   241);
   var wisteria = A3($Color.rgb,
   142,
   68,
   173);
   var amethyst = A3($Color.rgb,
   155,
   89,
   182);
   var pomegranate = A3($Color.rgb,
   192,
   57,
   43);
   var alizarin = A3($Color.rgb,
   231,
   76,
   60);
   var belizeHole = A3($Color.rgb,
   41,
   128,
   185);
   var peterRiver = A3($Color.rgb,
   52,
   152,
   219);
   var pumpkin = A3($Color.rgb,
   211,
   84,
   0);
   var carrot = A3($Color.rgb,
   230,
   126,
   34);
   var nephritis = A3($Color.rgb,
   39,
   174,
   96);
   var emerald = A3($Color.rgb,
   46,
   204,
   113);
   var orange = A3($Color.rgb,
   243,
   156,
   18);
   var sunFlowers = A3($Color.rgb,
   241,
   196,
   15);
   var greenSea = A3($Color.rgb,
   22,
   160,
   133);
   var turquoise = A3($Color.rgb,
   26,
   188,
   156);
   var bg = $Color.white;
   var contain = function (e) {
      return A4($Graphics$Element.container,
      $Graphics$Element.widthOf(e),
      $Graphics$Element.heightOf(e),
      $Graphics$Element.middle,
      e);
   };
   var outline$ = F4(function (c,
   thickness,
   w,
   h) {
      return function () {
         var s = $Graphics$Collage.solid(c);
         var s$ = _U.replace([["width"
                              ,$Basics.toFloat(thickness)]],
         s);
         return A3($Graphics$Collage.collage,
         w,
         h,
         _L.fromArray([A2($Graphics$Collage.outlined,
         s$,
         A2($Graphics$Collage.rect,
         $Basics.toFloat(w),
         $Basics.toFloat(h)))]));
      }();
   });
   var outlineOf = F3(function (c,
   thickness,
   e) {
      return A4(outline$,
      c,
      thickness,
      $Graphics$Element.widthOf(e),
      $Graphics$Element.heightOf(e));
   });
   var outline = F3(function (c,
   thickness,
   e) {
      return $Graphics$Element.color(c)(A4($Graphics$Element.container,
      $Graphics$Element.widthOf(e) + thickness * 2,
      $Graphics$Element.heightOf(e) + thickness * 2,
      A2($Graphics$Element.topLeftAt,
      $Graphics$Element.absolute(thickness),
      $Graphics$Element.absolute(thickness)),
      e));
   });
   var highlightExplorer = F2(function (width,
   height) {
      return $Graphics$Element.opacity(0.15)($Graphics$Element.color(midnightBlue)(A2($Graphics$Element.spacer,
      width,
      height)));
   });
   var highlight = F2(function (width,
   height) {
      return $Graphics$Element.layers(_L.fromArray([$Graphics$Element.opacity(0.15)($Graphics$Element.color(asbestos)(A2($Graphics$Element.spacer,
                                                   width,
                                                   height)))
                                                   ,$Graphics$Element.opacity(0.8)(A4(outline$,
                                                   asbestos,
                                                   1,
                                                   width,
                                                   height))]));
   });
   var selectionLayer = F2(function (highlight,
   r) {
      return function () {
         var n = 1;
         var hl = A2(highlight,
         r.width,
         r.height);
         return A4($Graphics$Element.container,
         r.topLeft.x + r.width,
         r.topLeft.y + r.height,
         A2($Graphics$Element.topLeftAt,
         $Graphics$Element.absolute(r.topLeft.x),
         $Graphics$Element.absolute(r.topLeft.y)),
         hl);
      }();
   });
   var explorerSelection = selectionLayer(highlightExplorer);
   var selectionBorderWidth = 8;
   var explorerOutline = F2(function (color,
   e) {
      return $Elmz$Layout.transform(function (e) {
         return $Graphics$Element.layers(_L.fromArray([$Graphics$Element.color(bg)(A2($Graphics$Element.spacer,
                                                      $Graphics$Element.widthOf(e),
                                                      $Graphics$Element.heightOf(e)))
                                                      ,e
                                                      ,A3(outlineOf,
                                                      color,
                                                      selectionBorderWidth,
                                                      e)]));
      })(e);
   });
   var explorerCells = F2(function (k,
   ls) {
      return function () {
         var fmt = function (l) {
            return A2($Elmz$Layout.fill,
            bg,
            A2($Elmz$Layout.pad$,
            {_: {}
            ,bottom: 6
            ,left: 10
            ,right: 10
            ,top: 6},
            l));
         };
         var col = $Elmz$Layout.leftAlignedColumn(ls);
         var last = function (l) {
            return A2($Elmz$Layout.fill,
            bg,
            A2($Elmz$Layout.pad$,
            {_: {}
            ,bottom: 8
            ,left: 10
            ,right: 10
            ,top: 6},
            l));
         };
         var cs = A2($Basics._op["++"],
         A2($List.map,
         fmt,
         A2($List.take,
         $List.length(col) - 1,
         col)),
         A2($List.map,
         last,
         A2($List.drop,
         $List.length(col) - 1,
         col)));
         return function () {
            switch (cs.ctor)
            {case "::": return function () {
                    var hsep = A2($Elmz$Layout.embed,
                    k,
                    A2($Graphics$Element.spacer,
                    1,
                    5));
                    return A2($Elmz$Layout.intersperseVertical,
                    hsep,
                    cs);
                 }();
               case "[]":
               return $Elmz$Layout.empty(k);}
            _U.badCase($moduleName,
            "between lines 135 and 138");
         }();
      }();
   });
   var verticalCells = F3(function (k,
   ifEmpty,
   ls) {
      return function () {
         var cs = A2($List.map,
         function (l) {
            return A2($Elmz$Layout.fill,
            bg,
            A3($Elmz$Layout.pad,5,0,l));
         },
         $Elmz$Layout.column(ls));
         return function () {
            switch (cs.ctor)
            {case "::": return function () {
                    var hline = A2($Elmz$Layout.embed,
                    k,
                    $Graphics$Element.color(clouds)(A2($Graphics$Element.spacer,
                    $Elmz$Layout.widthOf(cs._0),
                    1)));
                    return A3($Elmz$Layout.outline,
                    clouds,
                    1,
                    A2($Elmz$Layout.intersperseVertical,
                    hline,
                    cs));
                 }();
               case "[]":
               return A3($Elmz$Layout.outline,
                 clouds,
                 1,
                 A2($Elmz$Layout.embed,
                 k,
                 ifEmpty));}
            _U.badCase($moduleName,
            "between lines 123 and 126");
         }();
      }();
   });
   var cells = F3(function (k,
   ifEmpty,
   ls) {
      return function () {
         var cs = A2($List.map,
         function (l) {
            return A2($Elmz$Layout.fill,
            bg,
            A3($Elmz$Layout.pad,5,0,l));
         },
         $Elmz$Layout.row(ls));
         return function () {
            switch (cs.ctor)
            {case "::": return function () {
                    var vline = A2($Elmz$Layout.embed,
                    k,
                    $Graphics$Element.color(clouds)(A2($Graphics$Element.spacer,
                    1,
                    $Elmz$Layout.heightOf(cs._0))));
                    return A3($Elmz$Layout.outline,
                    clouds,
                    1,
                    A2($Elmz$Layout.intersperseHorizontal,
                    vline,
                    cs));
                 }();
               case "[]":
               return A2($Elmz$Layout.fill,
                 bg,
                 A2($Elmz$Layout.embed,
                 k,
                 ifEmpty));}
            _U.badCase($moduleName,
            "between lines 117 and 120");
         }();
      }();
   });
   var carotUp = F2(function (x,
   c) {
      return function () {
         var r = $Basics.ceiling($Basics.toFloat(x) * $Basics.sqrt(2.0));
         return $Graphics$Element.above(A2($Graphics$Element.spacer,
         1,
         13))($Graphics$Element.height($Basics.ceiling($Basics.toFloat(x) * $Basics.sqrt(2.0) / 2.0))(A3($Graphics$Collage.collage,
         r,
         r,
         _L.fromArray([A2($Graphics$Collage.rotate,
         $Basics.degrees(45),
         A2($Graphics$Collage.filled,
         c,
         $Graphics$Collage.square($Basics.toFloat(x))))]))));
      }();
   });
   var chain1 = F2(function (x,c) {
      return function () {
         var sep = A2($Graphics$Element.spacer,
         1,
         1);
         var block = $Graphics$Element.color(c)(A2($Graphics$Element.spacer,
         x,
         x));
         return A2($Graphics$Element.flow,
         $Graphics$Element.down,
         _L.fromArray([sep,block,sep]));
      }();
   });
   var notOkColor = alizarin;
   var okColor = midnightBlueA(0.4);
   var statusColor = function (ok) {
      return ok ? okColor : notOkColor;
   };
   var currentSymbol = A4(outline$,
   okColor,
   6,
   16,
   16);
   var selection = function (r) {
      return A4($Graphics$Element.container,
      r.topLeft.x + r.width + selectionBorderWidth * 2,
      r.topLeft.y + r.height + selectionBorderWidth * 2,
      A2($Graphics$Element.topLeftAt,
      $Graphics$Element.absolute(r.topLeft.x - selectionBorderWidth),
      $Graphics$Element.absolute(r.topLeft.y - selectionBorderWidth - 1)),
      A4(outline$,
      okColor,
      selectionBorderWidth,
      r.width + selectionBorderWidth * 2,
      r.height + selectionBorderWidth * 2));
   };
   var menuSeparator = function (width) {
      return function () {
         var line = $Graphics$Element.color(clouds)(A2($Graphics$Element.spacer,
         width - 20,
         1));
         return A2($Graphics$Element.flow,
         $Graphics$Element.right,
         _L.fromArray([A2($Graphics$Element.spacer,
                      10,
                      1)
                      ,line
                      ,A2($Graphics$Element.spacer,
                      10,
                      1)]));
      }();
   };
   var menuHeader = {_: {}
                    ,bold: true
                    ,color: $Color.black
                    ,height: $Maybe.Just(16)
                    ,italic: false
                    ,line: $Maybe.Nothing
                    ,typeface: _L.fromArray(["Lato"
                                            ,"Futura"
                                            ,"Calibri"
                                            ,"latin"])};
   var menuHeaderText = function (s) {
      return $Graphics$Element.leftAligned(A2($Text.style,
      menuHeader,
      $Text.fromString(s)));
   };
   var code = {_: {}
              ,bold: false
              ,color: $Color.black
              ,height: $Maybe.Just(16)
              ,italic: false
              ,line: $Maybe.Nothing
              ,typeface: _L.fromArray(["Inconsolata"
                                      ,"monospace"
                                      ,"latin"])};
   var codeText = function (s) {
      return $Graphics$Element.leftAligned(A2($Text.style,
      code,
      $Text.fromString(s)));
   };
   var swatch = function (c) {
      return function () {
         var e = A2($Graphics$Element.color,
         c,
         contain(codeText("  ")));
         var e2 = A4(outline$,
         $Color.black,
         1,
         $Graphics$Element.widthOf(e),
         $Graphics$Element.heightOf(e));
         return $Graphics$Element.layers(_L.fromArray([e
                                                      ,e2]));
      }();
   };
   var blank = codeText("_");
   var boldCodeText = function (s) {
      return $Graphics$Element.leftAligned(A2($Text.style,
      _U.replace([["bold",true]],
      code),
      $Text.fromString(s)));
   };
   var centeredCodeText = function (s) {
      return $Graphics$Element.centered(A2($Text.style,
      code,
      $Text.fromString(s)));
   };
   var autocomplete = function (ok) {
      return {_: {}
             ,highlight: $Graphics$Input$Field.noHighlight
             ,outline: {_: {}
                       ,color: statusColor(ok)
                       ,radius: 0
                       ,width: $Graphics$Input$Field.uniformly(4)}
             ,padding: function () {
                var s = $Graphics$Input$Field.defaultStyle;
                return s.padding;
             }()
             ,style: code};
   };
   var numericLiteral = function (s) {
      return $Graphics$Element.leftAligned(A2($Text.style,
      _U.replace([["color"
                  ,belizeHole]],
      code),
      $Text.fromString(s)));
   };
   var stringLiteral = function (s) {
      return $Graphics$Element.leftAligned(A2($Text.style,
      _U.replace([["color",wisteria]],
      code),
      $Text.fromString(s)));
   };
   var h1 = {_: {}
            ,bold: false
            ,color: $Color.black
            ,height: $Maybe.Just(60)
            ,italic: false
            ,line: $Maybe.Nothing
            ,typeface: _L.fromArray(["Lato"
                                    ,"latin"])};
   var body = {_: {}
              ,bold: false
              ,color: $Color.black
              ,height: $Maybe.Just(16)
              ,italic: false
              ,line: $Maybe.Nothing
              ,typeface: _L.fromArray(["Lato"
                                      ,"latin"])};
   var padNW = F3(function (padLeft,
   padAbove,
   e) {
      return A4($Graphics$Element.container,
      $Graphics$Element.widthOf(e) + padLeft,
      $Graphics$Element.heightOf(e) + padAbove,
      A2($Graphics$Element.topLeftAt,
      $Graphics$Element.absolute(padLeft),
      $Graphics$Element.absolute(padAbove)),
      e);
   });
   _elm.Unison.Styles.values = {_op: _op
                               ,padNW: padNW
                               ,body: body
                               ,h1: h1
                               ,code: code
                               ,menuHeader: menuHeader
                               ,codeText: codeText
                               ,boldCodeText: boldCodeText
                               ,centeredCodeText: centeredCodeText
                               ,menuHeaderText: menuHeaderText
                               ,menuSeparator: menuSeparator
                               ,okColor: okColor
                               ,notOkColor: notOkColor
                               ,statusColor: statusColor
                               ,autocomplete: autocomplete
                               ,chain1: chain1
                               ,carotUp: carotUp
                               ,currentSymbol: currentSymbol
                               ,numericLiteral: numericLiteral
                               ,stringLiteral: stringLiteral
                               ,cells: cells
                               ,verticalCells: verticalCells
                               ,explorerCells: explorerCells
                               ,explorerOutline: explorerOutline
                               ,selectionBorderWidth: selectionBorderWidth
                               ,selection: selection
                               ,explorerSelection: explorerSelection
                               ,selectionLayer: selectionLayer
                               ,highlight: highlight
                               ,highlightExplorer: highlightExplorer
                               ,outline: outline
                               ,swatch: swatch
                               ,outline$: outline$
                               ,outlineOf: outlineOf
                               ,contain: contain
                               ,blank: blank
                               ,bg: bg
                               ,turquoise: turquoise
                               ,greenSea: greenSea
                               ,sunFlowers: sunFlowers
                               ,orange: orange
                               ,emerald: emerald
                               ,nephritis: nephritis
                               ,carrot: carrot
                               ,pumpkin: pumpkin
                               ,peterRiver: peterRiver
                               ,belizeHole: belizeHole
                               ,alizarin: alizarin
                               ,pomegranate: pomegranate
                               ,amethyst: amethyst
                               ,wisteria: wisteria
                               ,clouds: clouds
                               ,silver: silver
                               ,wetAsphalt: wetAsphalt
                               ,midnightBlue: midnightBlue
                               ,midnightBlueA: midnightBlueA
                               ,concrete: concrete
                               ,asbestos: asbestos};
   return _elm.Unison.Styles.values;
};
Elm.Unison = Elm.Unison || {};
Elm.Unison.Symbol = Elm.Unison.Symbol || {};
Elm.Unison.Symbol.make = function (_elm) {
   "use strict";
   _elm.Unison = _elm.Unison || {};
   _elm.Unison.Symbol = _elm.Unison.Symbol || {};
   if (_elm.Unison.Symbol.values)
   return _elm.Unison.Symbol.values;
   var _op = {},
   _N = Elm.Native,
   _U = _N.Utils.make(_elm),
   _L = _N.List.make(_elm),
   $moduleName = "Unison.Symbol",
   $Basics = Elm.Basics.make(_elm),
   $Elmz$Json$Decoder = Elm.Elmz.Json.Decoder.make(_elm),
   $Elmz$Json$Encoder = Elm.Elmz.Json.Encoder.make(_elm);
   var encodeFixity = function (f) {
      return function () {
         switch (f.ctor)
         {case "Infix":
            return $Elmz$Json$Encoder.string("Infix");
            case "InfixL":
            return $Elmz$Json$Encoder.string("InfixL");
            case "InfixR":
            return $Elmz$Json$Encoder.string("InfixR");
            case "Prefix":
            return $Elmz$Json$Encoder.string("Prefix");}
         _U.badCase($moduleName,
         "between lines 33 and 37");
      }();
   };
   var encodeSymbol = function (s) {
      return A5($Elmz$Json$Encoder.object4,
      {ctor: "_Tuple2"
      ,_0: "freshId"
      ,_1: $Elmz$Json$Encoder.$int},
      {ctor: "_Tuple2"
      ,_0: "name"
      ,_1: $Elmz$Json$Encoder.string},
      {ctor: "_Tuple2"
      ,_0: "fixity"
      ,_1: encodeFixity},
      {ctor: "_Tuple2"
      ,_0: "precedence"
      ,_1: $Elmz$Json$Encoder.$int},
      {ctor: "_Tuple4"
      ,_0: s.freshId
      ,_1: s.name
      ,_2: s.fixity
      ,_3: s.precedence});
   };
   var toKey = function (s) {
      return _U.eq(s.freshId,
      0) ? s.name : A2($Basics._op["++"],
      s.name,
      $Basics.toString(s.freshId));
   };
   var Symbol = F4(function (a,
   b,
   c,
   d) {
      return {_: {}
             ,fixity: c
             ,freshId: a
             ,name: b
             ,precedence: d};
   });
   var Prefix = {ctor: "Prefix"};
   var anonymous = A4(Symbol,
   0,
   "anonymous",
   Prefix,
   9);
   var prefix = function (name) {
      return A4(Symbol,
      0,
      name,
      Prefix,
      9);
   };
   var Infix = {ctor: "Infix"};
   var InfixR = {ctor: "InfixR"};
   var InfixL = {ctor: "InfixL"};
   var decodeFixity = $Elmz$Json$Decoder.andThen($Elmz$Json$Decoder.string)(function (t) {
      return _U.eq(t,
      "InfixL") ? $Elmz$Json$Decoder.unit(InfixL) : _U.eq(t,
      "InfixR") ? $Elmz$Json$Decoder.unit(InfixR) : _U.eq(t,
      "Infix") ? $Elmz$Json$Decoder.unit(Infix) : _U.eq(t,
      "Prefix") ? $Elmz$Json$Decoder.unit(Prefix) : $Elmz$Json$Decoder.fail(A2($Basics._op["++"],
      "expected {InfixL, InfixR, Infix, Prefix}, got : ",
      t));
   });
   var decodeSymbol = function () {
      var symbol = F3(function (n,
      f,
      p) {
         return {_: {}
                ,fixity: f
                ,name: n
                ,precedence: p};
      });
      return A5($Elmz$Json$Decoder.map4,
      Symbol,
      A2($Elmz$Json$Decoder.at,
      _L.fromArray(["freshId"]),
      $Elmz$Json$Decoder.$int),
      A2($Elmz$Json$Decoder.at,
      _L.fromArray(["name"]),
      $Elmz$Json$Decoder.string),
      A2($Elmz$Json$Decoder.at,
      _L.fromArray(["fixity"]),
      decodeFixity),
      A2($Elmz$Json$Decoder.at,
      _L.fromArray(["precedence"]),
      $Elmz$Json$Decoder.$int));
   }();
   _elm.Unison.Symbol.values = {_op: _op
                               ,InfixL: InfixL
                               ,InfixR: InfixR
                               ,Infix: Infix
                               ,Prefix: Prefix
                               ,Symbol: Symbol
                               ,toKey: toKey
                               ,anonymous: anonymous
                               ,prefix: prefix
                               ,decodeFixity: decodeFixity
                               ,encodeFixity: encodeFixity
                               ,decodeSymbol: decodeSymbol
                               ,encodeSymbol: encodeSymbol};
   return _elm.Unison.Symbol.values;
};
Elm.Unison = Elm.Unison || {};
Elm.Unison.Term = Elm.Unison.Term || {};
Elm.Unison.Term.make = function (_elm) {
   "use strict";
   _elm.Unison = _elm.Unison || {};
   _elm.Unison.Term = _elm.Unison.Term || {};
   if (_elm.Unison.Term.values)
   return _elm.Unison.Term.values;
   var _op = {},
   _N = Elm.Native,
   _U = _N.Utils.make(_elm),
   _L = _N.List.make(_elm),
   $moduleName = "Unison.Term",
   $Array = Elm.Array.make(_elm),
   $Basics = Elm.Basics.make(_elm),
   $Elmz$Distance = Elm.Elmz.Distance.make(_elm),
   $Elmz$Json$Decoder = Elm.Elmz.Json.Decoder.make(_elm),
   $Elmz$Json$Encoder = Elm.Elmz.Json.Encoder.make(_elm),
   $Elmz$Layout = Elm.Elmz.Layout.make(_elm),
   $Elmz$Maybe = Elm.Elmz.Maybe.make(_elm),
   $Elmz$Trie = Elm.Elmz.Trie.make(_elm),
   $List = Elm.List.make(_elm),
   $Maybe = Elm.Maybe.make(_elm),
   $Set = Elm.Set.make(_elm),
   $Unison$Path = Elm.Unison.Path.make(_elm),
   $Unison$Reference = Elm.Unison.Reference.make(_elm),
   $Unison$Symbol = Elm.Unison.Symbol.make(_elm),
   $Unison$Type = Elm.Unison.Type.make(_elm);
   var encodeDistance = function (e) {
      return function () {
         switch (e.ctor)
         {case "Ceiling":
            return A3($Elmz$Json$Encoder.tag$,
              "Ceiling",
              encodeDistance,
              e._0);
            case "Floor":
            return A3($Elmz$Json$Encoder.tag$,
              "Floor",
              encodeDistance,
              e._0);
            case "Max":
            return A3($Elmz$Json$Encoder.tag$,
              "Max",
              A2($Elmz$Json$Encoder.tuple2,
              encodeDistance,
              encodeDistance),
              {ctor: "_Tuple2"
              ,_0: e._0
              ,_1: e._1});
            case "Min":
            return A3($Elmz$Json$Encoder.tag$,
              "Min",
              A2($Elmz$Json$Encoder.tuple2,
              encodeDistance,
              encodeDistance),
              {ctor: "_Tuple2"
              ,_0: e._0
              ,_1: e._1});
            case "Pixel":
            return A3($Elmz$Json$Encoder.tag$,
              "Pixel",
              $Elmz$Json$Encoder.product0,
              {ctor: "_Tuple0"});
            case "Scale":
            return A3($Elmz$Json$Encoder.tag$,
              "Scale",
              A2($Elmz$Json$Encoder.tuple2,
              $Elmz$Json$Encoder.$float,
              encodeDistance),
              {ctor: "_Tuple2"
              ,_0: e._0
              ,_1: e._1});}
         _U.badCase($moduleName,
         "between lines 279 and 285");
      }();
   };
   var encodeLiteral = function (l) {
      return function () {
         switch (l.ctor)
         {case "Distance":
            return A3($Elmz$Json$Encoder.tag$,
              "Distance",
              encodeDistance,
              l._0);
            case "Number":
            return A3($Elmz$Json$Encoder.tag$,
              "Number",
              $Elmz$Json$Encoder.$float,
              l._0);
            case "Text":
            return A3($Elmz$Json$Encoder.tag$,
              "Text",
              $Elmz$Json$Encoder.string,
              l._0);}
         _U.badCase($moduleName,
         "between lines 293 and 296");
      }();
   };
   var encodeTerm = function (e) {
      return function () {
         switch (e.ctor)
         {case "Lam":
            return A3($Elmz$Json$Encoder.tagProduct,
              "Tm",
              A2($Elmz$Json$Encoder.tag$,
              "Lam",
              A2($Elmz$Json$Encoder.tagProduct,
              "Abs",
              A2($Elmz$Json$Encoder.tuple2,
              $Unison$Symbol.encodeSymbol,
              encodeTerm))),
              {ctor: "_Tuple2"
              ,_0: e._0
              ,_1: e._1});
            case "Var":
            return A3($Elmz$Json$Encoder.tagProduct,
              "Var",
              $Unison$Symbol.encodeSymbol,
              e._0);}
         return A3($Elmz$Json$Encoder.tagProduct,
         "Tm",
         function (e) {
            return function () {
               switch (e.ctor)
               {case "Ann":
                  return A3($Elmz$Json$Encoder.tag$,
                    "Ann",
                    A2($Elmz$Json$Encoder.tuple2,
                    encodeTerm,
                    $Unison$Type.encodeType),
                    {ctor: "_Tuple2"
                    ,_0: e._0
                    ,_1: e._1});
                  case "App":
                  return A3($Elmz$Json$Encoder.tag$,
                    "App",
                    $Elmz$Json$Encoder.list(encodeTerm),
                    _L.fromArray([e._0,e._1]));
                  case "Blank":
                  return A3($Elmz$Json$Encoder.tag$,
                    "Blank",
                    $Elmz$Json$Encoder.product0,
                    {ctor: "_Tuple0"});
                  case "Embed":
                  return A3($Elmz$Json$Encoder.tag$,
                    "Embed",
                    $Elmz$Json$Encoder.product0,
                    {ctor: "_Tuple0"});
                  case "Lit":
                  return A3($Elmz$Json$Encoder.tag$,
                    "Lit",
                    encodeLiteral,
                    e._0);
                  case "Ref":
                  return A3($Elmz$Json$Encoder.tag$,
                    "Ref",
                    $Unison$Reference.encode,
                    e._0);
                  case "Vector":
                  return A3($Elmz$Json$Encoder.tag$,
                    "Vector",
                    $Elmz$Json$Encoder.list(encodeTerm),
                    $Array.toList(e._0));}
               _U.badCase($moduleName,
               "between lines 321 and 329");
            }();
         },
         e);
      }();
   };
   var decodeDistance = $Elmz$Json$Decoder.union$(function (t) {
      return _U.eq(t,
      "Pixel") ? $Elmz$Json$Decoder.unit($Elmz$Distance.Pixel) : _U.eq(t,
      "Scale") ? A3($Elmz$Json$Decoder.product2,
      $Elmz$Distance.Scale,
      $Elmz$Json$Decoder.$float,
      decodeDistance) : _U.eq(t,
      "Ceiling") ? A2($Elmz$Json$Decoder.map,
      $Elmz$Distance.Ceiling,
      decodeDistance) : _U.eq(t,
      "Floor") ? A2($Elmz$Json$Decoder.map,
      $Elmz$Distance.Floor,
      decodeDistance) : _U.eq(t,
      "Min") ? A3($Elmz$Json$Decoder.product2,
      $Elmz$Distance.Min,
      decodeDistance,
      decodeDistance) : _U.eq(t,
      "Max") ? A3($Elmz$Json$Decoder.product2,
      $Elmz$Distance.Max,
      decodeDistance,
      decodeDistance) : _U.badIf($moduleName,
      "between lines 271 and 276");
   });
   var collectPaths = F2(function (ok,
   e) {
      return function () {
         var add = function () {
            var _v26 = ok(e);
            switch (_v26.ctor)
            {case "Just":
               return $Elmz$Trie.set(_v26._0);
               case "Nothing":
               return $Basics.identity;}
            _U.badCase($moduleName,
            "between lines 256 and 259");
         }();
         return add(function () {
            switch (e.ctor)
            {case "Ann":
               return A2(collectPaths,ok,e._0);
               case "App":
               return A2($Elmz$Trie.mergeDisjoint,
                 A2($Elmz$Trie.cons,
                 $Unison$Path.Fn,
                 A2(collectPaths,ok,e._0)),
                 A2($Elmz$Trie.cons,
                 $Unison$Path.Arg,
                 A2(collectPaths,ok,e._1)));
               case "Lam":
               return A2($Elmz$Trie.cons,
                 $Unison$Path.Body,
                 A2(collectPaths,ok,e._1));
               case "Vector":
               return A2($List.foldr,
                 $Elmz$Trie.mergeDisjoint,
                 $Elmz$Trie.empty)($List.indexedMap(F2(function (i,
                 e) {
                    return A2($Elmz$Trie.cons,
                    $Unison$Path.Index(i),
                    A2(collectPaths,ok,e));
                 }))($Array.toList(e._0)));}
            return $Elmz$Trie.empty;
         }());
      }();
   });
   var matchingPaths = function (ok) {
      return function () {
         var ok$ = function (e) {
            return ok(e) ? $Maybe.Just({ctor: "_Tuple0"}) : $Maybe.Nothing;
         };
         return collectPaths(ok$);
      }();
   };
   var up = function (p) {
      return function () {
         var go = function (p) {
            return function () {
               switch (p.ctor)
               {case "::": switch (p._1.ctor)
                    {case "::":
                       switch (p._1._0.ctor)
                         {case "Arg":
                            return $List.reverse(A2($List._op["::"],
                              $Unison$Path.Arg,
                              p._1._1));
                            case "Body":
                            return $List.reverse(A2($List._op["::"],
                              $Unison$Path.Body,
                              p._1._1));
                            case "Index":
                            return $List.reverse(A2($List._op["::"],
                              $Unison$Path.Index(p._1._0._0),
                              p._1._1));}
                         break;}
                    switch (p._0.ctor)
                    {case "Arg": return go(p._1);
                       case "Fn": return go(p._1);}
                    return $List.reverse(p._1);
                  case "[]":
                  return _L.fromArray([]);}
               _U.badCase($moduleName,
               "between lines 215 and 223");
            }();
         };
         return go($List.reverse(p));
      }();
   };
   var narrow = F2(function (e,
   loc) {
      return {ctor: "_Tuple3"
             ,_0: _L.fromArray([])
             ,_1: e
             ,_2: loc};
   });
   var at = F2(function (p,e) {
      return function () {
         var _v42 = {ctor: "_Tuple2"
                    ,_0: p
                    ,_1: e};
         switch (_v42.ctor)
         {case "_Tuple2":
            switch (_v42._0.ctor)
              {case "::":
                 switch (_v42._0._0.ctor)
                   {case "Arg":
                      switch (_v42._1.ctor)
                        {case "App": return A2(at,
                             _v42._0._1,
                             _v42._1._1);}
                        break;
                      case "Body":
                      switch (_v42._1.ctor)
                        {case "Lam": return A2(at,
                             _v42._0._1,
                             _v42._1._1);}
                        break;
                      case "Fn": switch (_v42._1.ctor)
                        {case "App": return A2(at,
                             _v42._0._1,
                             _v42._1._0);}
                        break;
                      case "Index":
                      switch (_v42._1.ctor)
                        {case "Vector":
                           return function () {
                                var _v55 = A2($Array.get,
                                _v42._0._0._0,
                                _v42._1._0);
                                switch (_v55.ctor)
                                {case "Just": return A2(at,
                                     _v42._0._1,
                                     _v55._0);}
                                return $Maybe.Nothing;
                             }();}
                        break;}
                   break;
                 case "[]":
                 return $Maybe.Just(_v42._1);}
              break;}
         return $Maybe.Nothing;
      }();
   });
   var valid = F2(function (e,p) {
      return function () {
         var _v57 = A2(at,p,e);
         switch (_v57.ctor)
         {case "Just": return true;
            case "Nothing": return false;}
         _U.badCase($moduleName,
         "between lines 194 and 199");
      }();
   });
   var siblingR = F2(function (e,
   p) {
      return function () {
         var p2 = A2($Unison$Path.increment,
         valid(e),
         p);
         return _U.eq(A2($Unison$Path.decrement,
         valid(e),
         p2),
         p) ? p2 : p;
      }();
   });
   var siblingL = F2(function (e,
   p) {
      return function () {
         var p2 = A2($Unison$Path.decrement,
         valid(e),
         p);
         return _U.eq(A2($Unison$Path.increment,
         valid(e),
         p2),
         p) ? p2 : p;
      }();
   });
   var down = F2(function (e,p) {
      return function () {
         var apps = function (e) {
            return function () {
               switch (e.ctor)
               {case "App":
                  return apps(e._0) + 1;}
               return 1;
            }();
         };
         var go = function (e) {
            return function () {
               switch (e.ctor)
               {case "App":
                  return A2($Unison$Path.append,
                    p,
                    A2($List.repeat,
                    apps(e._0),
                    $Unison$Path.Fn));
                  case "Lam":
                  return A2($Unison$Path.snoc,
                    p,
                    $Unison$Path.Body);
                  case "Vector":
                  return _U.eq($Array.length(e._0),
                    0) ? p : A2($Unison$Path.snoc,
                    p,
                    $Unison$Path.Index(0));}
               return p;
            }();
         };
         return A2($Maybe.withDefault,
         p,
         A2($Maybe.map,go,A2(at,p,e)));
      }();
   });
   var trimTo = F3(function (goal,
   e,
   path) {
      return A2($Maybe.withDefault,
      false,
      A2($Maybe.map,
      goal,
      A2(at,
      path,
      e))) ? $Maybe.Just(path) : _U.eq(path,
      _L.fromArray([])) ? $Maybe.Nothing : A3(trimTo,
      goal,
      e,
      up(path));
   });
   var checkLiteral = F2(function (lit,
   admissible) {
      return function () {
         var _v68 = {ctor: "_Tuple2"
                    ,_0: lit
                    ,_1: admissible};
         switch (_v68.ctor)
         {case "_Tuple2":
            switch (_v68._0.ctor)
              {case "Blank": return true;
                 case "Lit":
                 switch (_v68._0._0.ctor)
                   {case "Distance":
                      switch (_v68._1.ctor)
                        {case "Lit":
                           return _U.eq(_v68._1._0,
                             $Unison$Type.Distance);}
                        break;
                      case "Number":
                      switch (_v68._1.ctor)
                        {case "Lit":
                           return _U.eq(_v68._1._0,
                             $Unison$Type.Number);}
                        break;
                      case "Text":
                      switch (_v68._1.ctor)
                        {case "Lit":
                           return _U.eq(_v68._1._0,
                             $Unison$Type.Text);}
                        break;}
                   break;}
              switch (_v68._1.ctor)
              {case "Forall":
                 switch (_v68._1._1.ctor)
                   {case "Universal":
                      return _U.eq(_v68._1._0,
                        _v68._1._1._0) ? true : false;}
                   break;}
              break;}
         return false;
      }();
   });
   var unclose = function (_v81) {
      return function () {
         switch (_v81.ctor)
         {case "ClosedTerm":
            return _v81._0;}
         _U.badCase($moduleName,
         "on line 83, column 26 to 27");
      }();
   };
   var freeVars = function (e) {
      return function () {
         var op = F2(function (v,
         _v84) {
            return function () {
               switch (_v84.ctor)
               {case "_Tuple2":
                  return function () {
                       var k = $Unison$Symbol.toKey(v);
                       return A2($Set.member,
                       k,
                       _v84._0) ? {ctor: "_Tuple2"
                                  ,_0: _v84._0
                                  ,_1: _v84._1} : {ctor: "_Tuple2"
                                                  ,_0: A2($Set.insert,k,_v84._0)
                                                  ,_1: A2($List._op["::"],
                                                  v,
                                                  _v84._1)};
                    }();}
               _U.badCase($moduleName,
               "between lines 76 and 78");
            }();
         });
         var dedup = A2($List.foldl,
         op,
         {ctor: "_Tuple2"
         ,_0: $Set.empty
         ,_1: _L.fromArray([])});
         var go = F2(function (env,e) {
            return function () {
               switch (e.ctor)
               {case "Ann": return A2(go,
                    env,
                    e._0);
                  case "App":
                  return A2($Basics._op["++"],
                    A2(go,env,e._0),
                    A2(go,env,e._1));
                  case "Lam": return A2(go,
                    A2($Set.insert,
                    $Unison$Symbol.toKey(e._0),
                    env),
                    e._1);
                  case "Var":
                  return A2($Set.member,
                    $Unison$Symbol.toKey(e._0),
                    env) ? _L.fromArray([]) : _L.fromArray([e._0]);
                  case "Vector":
                  return A2($List.concatMap,
                    go(env),
                    $Array.toList(e._0));}
               return _L.fromArray([]);
            }();
         });
         return $Basics.snd(dedup(A2(go,
         $Set.empty,
         e)));
      }();
   };
   var isClosed = function (e) {
      return function () {
         var go = F2(function (env,
         e) {
            return function () {
               switch (e.ctor)
               {case "Ann": return A2(go,
                    env,
                    e._0);
                  case "App": return A2(go,
                    env,
                    e._0) && A2(go,env,e._1);
                  case "Lam": return A2(go,
                    A2($Set.insert,
                    $Unison$Symbol.toKey(e._0),
                    env),
                    e._1);
                  case "Var":
                  return A2($Set.member,
                    $Unison$Symbol.toKey(e._0),
                    env);
                  case "Vector":
                  return A2($List.all,
                    go(env),
                    $Array.toList(e._0));}
               return true;
            }();
         });
         return A2(go,$Set.empty,e);
      }();
   };
   var ClosedTerm = function (a) {
      return {ctor: "ClosedTerm"
             ,_0: a};
   };
   var close = function (e) {
      return isClosed(e) ? $Maybe.Just(ClosedTerm(e)) : $Maybe.Nothing;
   };
   var Embed = function (a) {
      return {ctor: "Embed",_0: a};
   };
   var Vector = function (a) {
      return {ctor: "Vector"
             ,_0: a};
   };
   var Lam = F2(function (a,b) {
      return {ctor: "Lam"
             ,_0: a
             ,_1: b};
   });
   var Ann = F2(function (a,b) {
      return {ctor: "Ann"
             ,_0: a
             ,_1: b};
   });
   var App = F2(function (a,b) {
      return {ctor: "App"
             ,_0: a
             ,_1: b};
   });
   var set = F3(function (p,e,e$) {
      return function () {
         var ap = $Elmz$Maybe.ap;
         return function () {
            var _v106 = {ctor: "_Tuple2"
                        ,_0: p
                        ,_1: e};
            switch (_v106.ctor)
            {case "_Tuple2":
               switch (_v106._0.ctor)
                 {case "::":
                    switch (_v106._0._0.ctor)
                      {case "Arg":
                         switch (_v106._1.ctor)
                           {case "App": return A2(ap,
                                $Maybe.Just(App(_v106._1._0)),
                                A3(set,
                                _v106._0._1,
                                _v106._1._1,
                                e$));}
                           break;
                         case "Body":
                         switch (_v106._1.ctor)
                           {case "Lam": return A2(ap,
                                $Maybe.Just(Lam(_v106._1._0)),
                                A3(set,
                                _v106._0._1,
                                _v106._1._1,
                                e$));}
                           break;
                         case "Fn":
                         switch (_v106._1.ctor)
                           {case "App": return A2(ap,
                                A2(ap,
                                $Maybe.Just(App),
                                A3(set,
                                _v106._0._1,
                                _v106._1._0,
                                e$)),
                                $Maybe.Just(_v106._1._1));}
                           break;
                         case "Index":
                         switch (_v106._1.ctor)
                           {case "Vector":
                              return function () {
                                   var _v119 = A2($Array.get,
                                   _v106._0._0._0,
                                   _v106._1._0);
                                   switch (_v119.ctor)
                                   {case "Just":
                                      return A2($Maybe.map,
                                        function (e) {
                                           return Vector(A3($Array.set,
                                           _v106._0._0._0,
                                           e,
                                           _v106._1._0));
                                        },
                                        A3(set,
                                        _v106._0._1,
                                        _v119._0,
                                        e$));}
                                   return $Maybe.Nothing;
                                }();}
                           break;}
                      break;
                    case "[]":
                    return $Maybe.Just(e$);}
                 break;}
            return $Maybe.Nothing;
         }();
      }();
   });
   var modify = F3(function (path,
   f,
   e) {
      return A2($Maybe.andThen,
      A2(at,path,e),
      function (focus) {
         return A3(set,
         path,
         e,
         f(focus));
      });
   });
   var trySet = F3(function (p,
   e,
   ctx) {
      return A2($Maybe.withDefault,
      ctx,
      A3(set,p,e,ctx));
   });
   var $delete = F2(function (p,
   e) {
      return function () {
         var orElse = F2(function (m1,
         m2) {
            return $Maybe.oneOf(_L.fromArray([m1
                                             ,m2]));
         });
         var ap = $Elmz$Maybe.ap;
         var go = F2(function (p,e) {
            return function () {
               var _v121 = {ctor: "_Tuple2"
                           ,_0: p
                           ,_1: e};
               switch (_v121.ctor)
               {case "_Tuple2":
                  switch (_v121._0.ctor)
                    {case "::":
                       switch (_v121._0._0.ctor)
                         {case "Arg":
                            switch (_v121._1.ctor)
                              {case "App": return A2(orElse,
                                   A2(ap,
                                   $Maybe.Just(App(_v121._1._0)),
                                   A2(go,_v121._0._1,_v121._1._1)),
                                   $Maybe.Just(_v121._1._0));}
                              break;
                            case "Body":
                            switch (_v121._1.ctor)
                              {case "Lam": return A2(ap,
                                   $Maybe.Just(Lam(_v121._1._0)),
                                   A2(go,
                                   _v121._0._1,
                                   _v121._1._1));}
                              break;
                            case "Fn":
                            switch (_v121._1.ctor)
                              {case "App": return A2(orElse,
                                   A2(ap,
                                   A2(ap,
                                   $Maybe.Just(App),
                                   A2(go,_v121._0._1,_v121._1._0)),
                                   $Maybe.Just(_v121._1._1)),
                                   $Maybe.Just(_v121._1._1));}
                              break;
                            case "Index":
                            switch (_v121._1.ctor)
                              {case "Vector":
                                 return function () {
                                      var _v134 = A2($Array.get,
                                      _v121._0._0._0,
                                      _v121._1._0);
                                      switch (_v134.ctor)
                                      {case "Just": return A2(orElse,
                                           A2($Maybe.map,
                                           function (e) {
                                              return Vector(A3($Array.set,
                                              _v121._0._0._0,
                                              e,
                                              _v121._1._0));
                                           },
                                           A2(go,_v121._0._1,_v134._0)),
                                           $Maybe.Just(Vector(A2($Array.append,
                                           A3($Array.slice,
                                           0,
                                           _v121._0._0._0,
                                           _v121._1._0),
                                           A3($Array.slice,
                                           _v121._0._0._0 + 1,
                                           $Array.length(_v121._1._0),
                                           _v121._1._0)))));}
                                      return $Maybe.Nothing;
                                   }();}
                              break;}
                         break;
                       case "[]":
                       return $Maybe.Nothing;}
                    break;}
               return $Maybe.Nothing;
            }();
         });
         return A2(valid,e,p) ? A2(go,
         p,
         e) : $Maybe.Nothing;
      }();
   });
   var Ref = function (a) {
      return {ctor: "Ref",_0: a};
   };
   var Lit = function (a) {
      return {ctor: "Lit",_0: a};
   };
   var Blank = {ctor: "Blank"};
   var Var = function (a) {
      return {ctor: "Var",_0: a};
   };
   var rename = F3(function (old,
   $new,
   t) {
      return function () {
         switch (t.ctor)
         {case "Ann": return A2(Ann,
              A3(rename,old,$new,t._0),
              t._1);
            case "App": return A2(App,
              A3(rename,old,$new,t._0),
              A3(rename,old,$new,t._1));
            case "Lam": return _U.eq(t._0,
              old) ? t : A2(Lam,
              t._0,
              A3(rename,old,$new,t._1));
            case "Var": return _U.eq(t._0,
              old) ? Var($new) : t;
            case "Vector":
            return Vector(A2($Array.map,
              A2(rename,old,$new),
              t._0));}
         return t;
      }();
   });
   var subst = F3(function (t,
   v,
   body) {
      return function () {
         var closed = isClosed(t);
         var maxIdIn = function (t) {
            return A3($List.foldl,
            $Basics.max,
            0,
            A2($List.map,
            function (_) {
               return _.freshId;
            },
            freeVars(t)));
         };
         var tmaxId = maxIdIn(t);
         var go = F3(function (t,
         v,
         body) {
            return function () {
               switch (body.ctor)
               {case "Ann": return A2(Ann,
                    A3(go,t,v,body._0),
                    body._1);
                  case "App": return A2(App,
                    A3(go,t,v,body._0),
                    A3(go,t,v,body._1));
                  case "Lam":
                  return closed ? A2(Lam,
                    body._0,
                    A3(go,
                    t,
                    v,
                    body._1)) : function () {
                       var n$ = _U.replace([["freshId"
                                            ,1 + A2($Basics.max,
                                            tmaxId,
                                            maxIdIn(body))]],
                       body._0);
                       return A2(Lam,
                       n$,
                       A3(go,
                       t,
                       v,
                       A3(rename,body._0,n$,body._1)));
                    }();
                  case "Var":
                  return _U.eq(body._0,
                    v) ? t : body;
                  case "Vector":
                  return Vector(A2($Array.map,
                    A2(go,t,v),
                    body._0));}
               return body;
            }();
         });
         return A3(go,t,v,body);
      }();
   });
   var betaReduce = function (e) {
      return function () {
         switch (e.ctor)
         {case "App": switch (e._0.ctor)
              {case "Lam": return A3(subst,
                   e._1,
                   e._0._0,
                   e._0._1);}
              break;}
         return e;
      }();
   };
   var Distance = function (a) {
      return {ctor: "Distance"
             ,_0: a};
   };
   var Text = function (a) {
      return {ctor: "Text",_0: a};
   };
   var Number = function (a) {
      return {ctor: "Number"
             ,_0: a};
   };
   var decodeLiteral = $Elmz$Json$Decoder.union$(function (t) {
      return _U.eq(t,
      "Number") ? A2($Elmz$Json$Decoder.map,
      Number,
      $Elmz$Json$Decoder.$float) : _U.eq(t,
      "Text") ? A2($Elmz$Json$Decoder.map,
      Text,
      $Elmz$Json$Decoder.string) : _U.eq(t,
      "Distance") ? A2($Elmz$Json$Decoder.map,
      Distance,
      decodeDistance) : _U.badIf($moduleName,
      "between lines 289 and 291");
   });
   var decodeTerm = $Elmz$Json$Decoder.arrayUnion(function (t) {
      return _U.eq(t,
      "Var") ? A2($Elmz$Json$Decoder.map,
      Var,
      $Unison$Symbol.decodeSymbol) : _U.eq(t,
      "Tm") ? $Elmz$Json$Decoder.union$(function (t) {
         return _U.eq(t,
         "Lit") ? A2($Elmz$Json$Decoder.map,
         Lit,
         decodeLiteral) : _U.eq(t,
         "Vector") ? A2($Elmz$Json$Decoder.map,
         Vector,
         $Elmz$Json$Decoder.array(decodeTerm)) : _U.eq(t,
         "Ref") ? A2($Elmz$Json$Decoder.map,
         Ref,
         $Unison$Reference.decode) : _U.eq(t,
         "App") ? A3($Elmz$Json$Decoder.product2,
         App,
         decodeTerm,
         decodeTerm) : _U.eq(t,
         "Ann") ? A3($Elmz$Json$Decoder.product2,
         Ann,
         decodeTerm,
         $Unison$Type.decodeType) : _U.eq(t,
         "Lam") ? A2($Elmz$Json$Decoder.arrayNewtyped,
         "Abs",
         A3($Elmz$Json$Decoder.product2,
         Lam,
         $Unison$Symbol.decodeSymbol,
         decodeTerm)) : _U.eq(t,
         "Blank") ? $Elmz$Json$Decoder.unit(Blank) : $Basics.otherwise ? $Elmz$Json$Decoder.fail(A2($Basics._op["++"],
         "decodeTerm.F unknown tag: ",
         t)) : $Elmz$Json$Decoder.fail(A2($Basics._op["++"],
         "decodeTerm.ABT unknown tag: ",
         t));
      }) : _U.badIf($moduleName,
      "between lines 301 and 311");
   });
   _elm.Unison.Term.values = {_op: _op
                             ,Number: Number
                             ,Text: Text
                             ,Distance: Distance
                             ,Var: Var
                             ,Blank: Blank
                             ,Lit: Lit
                             ,Ref: Ref
                             ,App: App
                             ,Ann: Ann
                             ,Lam: Lam
                             ,Vector: Vector
                             ,Embed: Embed
                             ,ClosedTerm: ClosedTerm
                             ,close: close
                             ,isClosed: isClosed
                             ,freeVars: freeVars
                             ,unclose: unclose
                             ,checkLiteral: checkLiteral
                             ,at: at
                             ,set: set
                             ,rename: rename
                             ,subst: subst
                             ,betaReduce: betaReduce
                             ,narrow: narrow
                             ,modify: modify
                             ,trySet: trySet
                             ,$delete: $delete
                             ,valid: valid
                             ,down: down
                             ,up: up
                             ,siblingR: siblingR
                             ,siblingL: siblingL
                             ,trimTo: trimTo
                             ,matchingPaths: matchingPaths
                             ,collectPaths: collectPaths
                             ,decodeDistance: decodeDistance
                             ,encodeDistance: encodeDistance
                             ,decodeLiteral: decodeLiteral
                             ,encodeLiteral: encodeLiteral
                             ,decodeTerm: decodeTerm
                             ,encodeTerm: encodeTerm};
   return _elm.Unison.Term.values;
};
Elm.Unison = Elm.Unison || {};
Elm.Unison.TermExplorer = Elm.Unison.TermExplorer || {};
Elm.Unison.TermExplorer.make = function (_elm) {
   "use strict";
   _elm.Unison = _elm.Unison || {};
   _elm.Unison.TermExplorer = _elm.Unison.TermExplorer || {};
   if (_elm.Unison.TermExplorer.values)
   return _elm.Unison.TermExplorer.values;
   var _op = {},
   _N = Elm.Native,
   _U = _N.Utils.make(_elm),
   _L = _N.List.make(_elm),
   $moduleName = "Unison.TermExplorer",
   $Basics = Elm.Basics.make(_elm),
   $Debug = Elm.Debug.make(_elm),
   $Dict = Elm.Dict.make(_elm),
   $Elmz$Layout = Elm.Elmz.Layout.make(_elm),
   $Elmz$Matcher = Elm.Elmz.Matcher.make(_elm),
   $Elmz$Moore = Elm.Elmz.Moore.make(_elm),
   $Elmz$Selection1D = Elm.Elmz.Selection1D.make(_elm),
   $Graphics$Element = Elm.Graphics.Element.make(_elm),
   $Graphics$Input$Field = Elm.Graphics.Input.Field.make(_elm),
   $List = Elm.List.make(_elm),
   $Maybe = Elm.Maybe.make(_elm),
   $Result = Elm.Result.make(_elm),
   $Signal = Elm.Signal.make(_elm),
   $String = Elm.String.make(_elm),
   $Unison$Metadata = Elm.Unison.Metadata.make(_elm),
   $Unison$Node = Elm.Unison.Node.make(_elm),
   $Unison$Path = Elm.Unison.Path.make(_elm),
   $Unison$Reference = Elm.Unison.Reference.make(_elm),
   $Unison$SearchboxParser = Elm.Unison.SearchboxParser.make(_elm),
   $Unison$Styles = Elm.Unison.Styles.make(_elm),
   $Unison$Term = Elm.Unison.Term.make(_elm),
   $Unison$Type = Elm.Unison.Type.make(_elm),
   $Unison$View = Elm.Unison.View.make(_elm);
   var renderTerm = F3(function (viewEnv,
   path,
   expr) {
      return $Elmz$Layout.element(A2($Unison$View.layout$,
      viewEnv,
      {_: {},path: path,term: expr}));
   });
   var pad = function (e) {
      return function () {
         var s = A2($Graphics$Element.spacer,
         10,
         1);
         return A2($Graphics$Element.flow,
         $Graphics$Element.right,
         _L.fromArray([s,e,s]));
      }();
   };
   var localCompletions = F2(function (viewEnv,
   info) {
      return $Debug.crash("todo");
   });
   var renderExplorerEntry = F3(function (viewEnv,
   path,
   e) {
      return $Elmz$Layout.element(A2($Unison$View.layout$,
      viewEnv,
      {_: {},path: path,term: e}));
   });
   var searchKey = F3(function (viewEnv,
   path,
   e) {
      return A2($Unison$View.key,
      viewEnv,
      {_: {},path: path,term: e});
   });
   var searchEntry = F4(function (valid,
   viewEnv,
   path,
   e) {
      return {ctor: "_Tuple3"
             ,_0: A3(searchKey,
             viewEnv,
             path,
             e)
             ,_1: A3(renderExplorerEntry,
             viewEnv,
             path,
             e)
             ,_2: valid ? $Maybe.Just(e) : $Maybe.Nothing};
   });
   var appBlanks = F2(function (n,
   e) {
      return A3($List.foldl,
      F2(function (_v0,cur) {
         return function () {
            return A2($Unison$Term.App,
            cur,
            $Unison$Term.Blank);
         }();
      }),
      e,
      _L.range(1,n));
   });
   var box = $Unison$Term.Embed(A2($Elmz$Layout.embed,
   {_: {}
   ,path: _L.fromArray([])
   ,selectable: false},
   $Unison$Styles.currentSymbol));
   var showAppBlanks = F3(function (viewEnv,
   path,
   n) {
      return A3(renderTerm,
      viewEnv,
      path,
      A2(appBlanks,n,box));
   });
   var invalidCompletions = function (entries) {
      return function () {
         var f = function (_v2) {
            return function () {
               switch (_v2.ctor)
               {case "_Tuple3":
                  return function () {
                       switch (_v2._2.ctor)
                       {case "Just":
                          return $Maybe.Nothing;
                          case "Nothing":
                          return $Maybe.Just({ctor: "_Tuple2"
                                             ,_0: _v2._0
                                             ,_1: _v2._1});}
                       _U.badCase($moduleName,
                       "between lines 284 and 287");
                    }();}
               _U.badCase($moduleName,
               "between lines 284 and 287");
            }();
         };
         return A2($List.filterMap,
         f,
         entries);
      }();
   };
   var validCompletions = function (entries) {
      return A2($List.filterMap,
      function (_v9) {
         return function () {
            switch (_v9.ctor)
            {case "_Tuple3":
               return A2($Maybe.map,
                 function (z) {
                    return {ctor: "_Tuple2"
                           ,_0: {ctor: "_Tuple2"
                                ,_0: _v9._0
                                ,_1: _v9._1}
                           ,_1: z};
                 },
                 _v9._2);}
            _U.badCase($moduleName,
            "on line 280, column 31 to 60");
         }();
      },
      entries);
   };
   var viewField = F4(function (searchbox,
   ok,
   content,
   w) {
      return A2($Graphics$Element.flow,
      $Graphics$Element.down,
      _L.fromArray([A2($Graphics$Element.spacer,
                   1,
                   15)
                   ,A2($Graphics$Element.beside,
                   A2($Graphics$Element.spacer,
                   9,
                   1),
                   A2($Unison$Styles.carotUp,
                   6,
                   $Unison$Styles.statusColor(ok)))
                   ,A2($Maybe.withDefault,
                   $Basics.identity,
                   A2($Maybe.map,
                   $Graphics$Element.width,
                   w))(A4($Graphics$Input$Field.field,
                   $Unison$Styles.autocomplete(ok),
                   searchbox,
                   "",
                   content))
                   ,A2($Graphics$Element.spacer,
                   1,
                   5)]));
   });
   var layout = F7(function (md,
   path,
   searchbox,
   keyedCompletions,
   sel,
   content,
   infoLayout) {
      return function () {
         var invalids = invalidCompletions(keyedCompletions);
         var valids = validCompletions(keyedCompletions);
         var ok = $Basics.not($List.isEmpty(valids));
         var above = infoLayout;
         var fit = function (e) {
            return A2($Graphics$Element.width,
            A2($Basics.max,
            $Graphics$Element.widthOf(above) - 12,
            $Graphics$Element.widthOf(e)),
            e);
         };
         var renderedValids = A2($List.indexedMap,
         F2(function (i,_v14) {
            return function () {
               switch (_v14.ctor)
               {case "_Tuple2":
                  switch (_v14._0.ctor)
                    {case "_Tuple2":
                       return A2($Elmz$Layout.embed,
                         $Maybe.Just(i),
                         fit(_v14._0._1));}
                    break;}
               _U.badCase($moduleName,
               "on line 241, column 55 to 83");
            }();
         }),
         valids);
         var renderedInvalids = A2($List.map,
         function (_v20) {
            return function () {
               switch (_v20.ctor)
               {case "_Tuple2":
                  return A2($Elmz$Layout.embed,
                    $Maybe.Nothing,
                    fit(_v20._1));}
               _U.badCase($moduleName,
               "on line 242, column 44 to 71");
            }();
         },
         invalids);
         var cells = $List.isEmpty(valids) && $Basics.not($List.isEmpty(invalids)) ? A2($Unison$Styles.explorerCells,
         $Maybe.Nothing,
         renderedInvalids) : A2($Unison$Styles.explorerCells,
         $Maybe.Nothing,
         renderedValids);
         var sep = A2($Elmz$Layout.embed,
         $Maybe.Nothing,
         $Unison$Styles.menuSeparator(A2($Basics.max,
         $Graphics$Element.widthOf(above),
         $Elmz$Layout.widthOf(cells))));
         var below = $List.isEmpty(valids) && $List.isEmpty(invalids) ? $Elmz$Layout.empty($Maybe.Nothing) : A2($Elmz$Layout.vertical,
         $Maybe.Nothing,
         _L.fromArray([sep
                      ,A2($Elmz$Layout.embed,
                      $Maybe.Nothing,
                      A2($Graphics$Element.spacer,
                      1,
                      5))
                      ,cells]));
         var resultsBox = $Unison$Styles.explorerOutline($Unison$Styles.statusColor(ok))(A3($Elmz$Layout.above,
         $Maybe.Nothing,
         A2($Elmz$Layout.embed,
         $Maybe.Nothing,
         above),
         below));
         var inputBox = A2($Elmz$Layout.embed,
         $Maybe.Nothing,
         A4(viewField,
         searchbox,
         ok,
         content,
         $Maybe.Just($Elmz$Layout.widthOf(resultsBox))));
         var sel$ = $Elmz$Moore.feed({_: {}
                                     ,event: $Maybe.Just($Elmz$Selection1D.Values(A2($List.map,
                                     $Basics.snd,
                                     valids)))
                                     ,layout: resultsBox})(sel);
         var hl = function (e) {
            return function () {
               var _v24 = function (_) {
                  return _.region;
               }($Elmz$Moore.extract(sel$));
               switch (_v24.ctor)
               {case "Just":
                  return $Graphics$Element.layers(_L.fromArray([e
                                                               ,$Unison$Styles.explorerSelection(_v24._0)]));
                  case "Nothing": return e;}
               _U.badCase($moduleName,
               "between lines 259 and 262");
            }();
         };
         var result = A3($Elmz$Layout.above,
         $Maybe.Nothing,
         inputBox,
         A2($Elmz$Layout.transform,
         hl,
         resultsBox));
         return {ctor: "_Tuple2"
                ,_0: sel$
                ,_1: result};
      }();
   });
   var infoLayout = F3(function (viewEnv,
   path,
   info) {
      return $Graphics$Element.flow($Graphics$Element.down)(A2($Basics._op["++"],
      _L.fromArray([A2($Graphics$Element.spacer,
                   1,
                   10)
                   ,pad($Unison$Styles.boldCodeText(A2($Unison$Type.key,
                   {_: {}
                   ,metadata: viewEnv.metadata},
                   info.admissible)))
                   ,A2($Graphics$Element.spacer,
                   1,
                   12)
                   ,pad(A2($Graphics$Element.beside,
                   $Unison$Styles.currentSymbol,
                   $Unison$Styles.codeText(A2($Basics._op["++"],
                   " : ",
                   A2($Unison$Type.key,
                   {_: {}
                   ,metadata: viewEnv.metadata},
                   info.current)))))]),
      A2($Basics._op["++"],
      A2($List.map,
      function ($) {
         return pad(A2(renderTerm,
         viewEnv,
         path)($));
      },
      info.locals),
      _L.fromArray([A2($Graphics$Element.spacer,
      1,
      10)]))));
   });
   var parseSearchbox = F2(function (admissible,
   s) {
      return function () {
         var _v26 = $Unison$SearchboxParser.parseTerm(s);
         switch (_v26.ctor)
         {case "Err":
            return _L.fromArray([{ctor: "_Tuple3"
                                 ,_0: s
                                 ,_1: $Unison$Styles.codeText(s)
                                 ,_2: $Maybe.Nothing}]);
            case "Ok": return function () {
                 var _v29 = $Unison$View.literalKey(_v26._0);
                 switch (_v29.ctor)
                 {case "Just":
                    return function () {
                         var edit = A2($Unison$Term.checkLiteral,
                         _v26._0,
                         admissible) ? $Maybe.Just(_v26._0) : $Maybe.Nothing;
                         return _L.fromArray([{ctor: "_Tuple3"
                                              ,_0: s
                                              ,_1: $Unison$Styles.codeText(_v29._0)
                                              ,_2: edit}]);
                      }();
                    case "Nothing":
                    return $Debug.crash("unpossible");}
                 _U.badCase($moduleName,
                 "between lines 209 and 213");
              }();}
         _U.badCase($moduleName,
         "between lines 207 and 213");
      }();
   });
   var processSearchResults = F4(function (env,
   results,
   cs,
   query) {
      return function () {
         var msg2 = $Elmz$Matcher.Query({_: {}
                                        ,string: query
                                        ,values: A2($Basics._op["++"],
                                        cs.literals,
                                        cs.locals)});
         var invalids = A2($List.map,
         A3(searchEntry,
         false,
         env,
         _L.fromArray([])),
         $Basics.fst(results.illTypedMatches));
         var valids = A2($List.map,
         A3(searchEntry,
         true,
         env,
         _L.fromArray([])),
         $Basics.fst(results.matches));
         var msg = $Elmz$Matcher.Results({_: {}
                                         ,additionalResults: $Basics.snd(results.matches) + $Basics.snd(results.illTypedMatches)
                                         ,positionsExamined: results.positionsExamined
                                         ,query: results.query
                                         ,values: A2($Basics._op["++"],
                                         valids,
                                         invalids)});
         return _U.replace([["results"
                            ,A2($Elmz$Moore.feeds,
                            _L.fromArray([msg,msg2]),
                            cs.results)]],
         cs);
      }();
   });
   var allCompletions = F2(function (q,
   c) {
      return function (_) {
         return _.matches;
      }($Elmz$Moore.extract($Elmz$Moore.feed($Elmz$Matcher.Query({_: {}
                                                                 ,string: q
                                                                 ,values: A2($Basics._op["++"],
                                                                 c.literals,
                                                                 c.locals)}))(c.results)));
   });
   var Completions = F3(function (a,
   b,
   c) {
      return {_: {}
             ,literals: a
             ,locals: b
             ,results: c};
   });
   var Search = function (a) {
      return {ctor: "Search"
             ,_0: a};
   };
   var LocalInfo = function (a) {
      return {ctor: "LocalInfo"
             ,_0: a};
   };
   var FieldContent = function (a) {
      return {ctor: "FieldContent"
             ,_0: a};
   };
   var LocalInfoResults = function (a) {
      return {ctor: "LocalInfoResults"
             ,_0: a};
   };
   var SearchResults = function (a) {
      return {ctor: "SearchResults"
             ,_0: a};
   };
   var Click = function (a) {
      return {ctor: "Click",_0: a};
   };
   var Enter = {ctor: "Enter"};
   var Navigate = function (a) {
      return {ctor: "Navigate"
             ,_0: a};
   };
   var Open = F3(function (a,b,c) {
      return {ctor: "Open"
             ,_0: a
             ,_1: b
             ,_2: c};
   });
   var path = function (focus) {
      return A2($Basics._op["++"],
      focus.pathToClosedSubterm,
      focus.pathFromClosedSubterm);
   };
   var model = function (searchbox) {
      return function () {
         var match = F2(function (s,
         _v31) {
            return function () {
               switch (_v31.ctor)
               {case "_Tuple3":
                  return A2($String.startsWith,
                    $String.toLower(s),
                    $String.toLower(_v31._0));}
               _U.badCase($moduleName,
               "on line 190, column 7 to 61");
            }();
         });
         var loadingField = function (content) {
            return function () {
               var x = $Unison$Styles.codeText(content.string);
               var w = $Graphics$Element.widthOf(x) + 20;
               return A4(viewField,
               searchbox,
               false,
               content,
               $Maybe.Just(A2($Basics.max,
               30,
               w)));
            }();
         };
         var initialize = F4(function (env,
         focus,
         content,
         e) {
            return function () {
               switch (e.ctor)
               {case "FieldContent":
                  return $Maybe.Just(A2($Elmz$Moore.Moore,
                    {_: {}
                    ,request: $Maybe.Nothing
                    ,selection: $Maybe.Nothing
                    ,view: loadingField(e._0)},
                    A3(initialize,env,focus,e._0)));
                  case "LocalInfoResults":
                  return !_U.eq($Maybe.Just(e._0.subterm),
                    A2($Unison$Term.at,
                    focus.pathFromClosedSubterm,
                    focus.closedSubterm)) ? $Maybe.Nothing : $Maybe.Just(function () {
                       var infoLayout$ = A3(infoLayout,
                       env,
                       path(focus),
                       e._0);
                       var la = F2(function (cur,n) {
                          return {ctor: "_Tuple3"
                                 ,_0: A3($String.padLeft,
                                 n + 1,
                                 _U.chr("."),
                                 "")
                                 ,_1: A3(showAppBlanks,
                                 env,
                                 path(focus),
                                 n)
                                 ,_2: $Maybe.Just(A2(appBlanks,
                                 n,
                                 cur))};
                       });
                       var currentApps = function () {
                          var _v39 = A2($Unison$Term.at,
                          focus.pathFromClosedSubterm,
                          focus.closedSubterm);
                          switch (_v39.ctor)
                          {case "Just":
                             return A2($List.map,
                               la(_v39._0),
                               e._0.localApplications);
                             case "Nothing":
                             return _L.fromArray([]);}
                          _U.badCase($moduleName,
                          "between lines 108 and 111");
                       }();
                       var completions = {_: {}
                                         ,literals: A2(parseSearchbox,
                                         e._0.admissible,
                                         content.string)
                                         ,locals: A2($Basics._op["++"],
                                         currentApps,
                                         A2($List.map,
                                         A3(searchEntry,
                                         true,
                                         env,
                                         path(focus)),
                                         e._0.wellTypedLocals))
                                         ,results: $Elmz$Matcher.model(match)};
                       var $ = A7(layout,
                       env.metadata,
                       path(focus),
                       searchbox,
                       A2(allCompletions,
                       content.string,
                       completions),
                       $Elmz$Selection1D.model,
                       content,
                       infoLayout$),
                       sel = $._0,
                       layout$ = $._1;
                       var vw = $Elmz$Layout.element(layout$);
                       var req = Search({ctor: "_Tuple5"
                                        ,_0: focus.closedSubterm
                                        ,_1: focus.pathFromClosedSubterm
                                        ,_2: 7
                                        ,_3: content.string
                                        ,_4: $Maybe.Just(e._0.admissible)});
                       return A3($Elmz$Moore.spike,
                       {_: {}
                       ,request: $Maybe.Just(req)
                       ,selection: $Maybe.Nothing
                       ,view: vw},
                       {_: {}
                       ,request: $Maybe.Nothing
                       ,selection: $Maybe.Nothing
                       ,view: vw},
                       A8(search,
                       e._0.admissible,
                       env,
                       focus,
                       completions,
                       sel,
                       content,
                       infoLayout$,
                       layout$));
                    }());}
               return $Maybe.Nothing;
            }();
         });
         var search = F9(function (admissible,
         env,
         focus,
         completions,
         sel,
         content,
         infoLayout,
         layout$,
         e) {
            return function () {
               switch (e.ctor)
               {case "Click":
                  return function () {
                       var _v46 = A2($Elmz$Moore.feed,
                       {_: {}
                       ,event: $Maybe.Just($Elmz$Selection1D.Mouse(e._0))
                       ,layout: layout$},
                       sel);
                       return function () {
                          var _v47 = function (_) {
                             return _.index;
                          }($Elmz$Moore.extract(_v46));
                          switch (_v47.ctor)
                          {case "Just":
                             return A2($Maybe.andThen,
                               A2($Elmz$Layout.leafAtPoint,
                               layout$,
                               $Elmz$Layout.ptFromPair(e._0)),
                               function (i) {
                                  return A2($Maybe.andThen,
                                  i,
                                  function (_v49) {
                                     return function () {
                                        return A9(search,
                                        admissible,
                                        env,
                                        focus,
                                        completions,
                                        _v46,
                                        content,
                                        infoLayout,
                                        layout$,
                                        Enter);
                                     }();
                                  });
                               });
                             case "Nothing":
                             return $Maybe.Just(A2($Elmz$Moore.Moore,
                               {_: {}
                               ,request: $Maybe.Nothing
                               ,selection: $Maybe.Nothing
                               ,view: $Elmz$Layout.element(layout$)},
                               A8(search,
                               admissible,
                               env,
                               focus,
                               completions,
                               _v46,
                               content,
                               infoLayout,
                               layout$)));}
                          _U.badCase($moduleName,
                          "between lines 161 and 169");
                       }();
                    }();
                  case "Enter":
                  return function () {
                       var valids = validCompletions(function (_) {
                          return _.matches;
                       }($Elmz$Moore.extract(completions.results)));
                       return A2($Maybe.withDefault,
                       $Maybe.Just(state0),
                       A2($Maybe.andThen,
                       function (_) {
                          return _.index;
                       }($Elmz$Moore.extract(sel)),
                       function (i) {
                          return A2($Maybe.andThen,
                          A2($Elmz$Selection1D.index,
                          i,
                          valids),
                          function (_v51) {
                             return function () {
                                switch (_v51.ctor)
                                {case "_Tuple2":
                                   return function ($) {
                                        return $Maybe.Just($Maybe.Just($));
                                     }(A3($Elmz$Moore.spike,
                                     {_: {}
                                     ,request: $Maybe.Nothing
                                     ,selection: $Maybe.Just({ctor: "_Tuple2"
                                                             ,_0: focus
                                                             ,_1: _v51._1})
                                     ,view: $Graphics$Element.empty},
                                     {_: {}
                                     ,request: $Maybe.Nothing
                                     ,selection: $Maybe.Nothing
                                     ,view: $Graphics$Element.empty},
                                     closed));}
                                _U.badCase($moduleName,
                                "between lines 155 and 158");
                             }();
                          });
                       }));
                    }();
                  case "FieldContent":
                  return $Maybe.Just(function () {
                       var _v55 = _U.replace([["literals"
                                              ,A2(parseSearchbox,
                                              admissible,
                                              e._0.string)]],
                       completions);
                       return function () {
                          var mkquery = function (q) {
                             return Search({ctor: "_Tuple5"
                                           ,_0: focus.closedSubterm
                                           ,_1: focus.pathFromClosedSubterm
                                           ,_2: 7
                                           ,_3: q
                                           ,_4: $Maybe.Just(admissible)});
                          };
                          var q = $Elmz$Matcher.Query({_: {}
                                                      ,string: e._0.string
                                                      ,values: A2($Basics._op["++"],
                                                      _v55.literals,
                                                      _v55.locals)});
                          var results = A2($Elmz$Moore.feed,
                          q,
                          _v55.results);
                          var matches = function (_) {
                             return _.matches;
                          }($Elmz$Moore.extract(results));
                          var $ = A7(layout,
                          env.metadata,
                          path(focus),
                          searchbox,
                          matches,
                          sel,
                          e._0,
                          infoLayout),
                          sel$ = $._0,
                          layout$$ = $._1;
                          var completions$ = _U.replace([["results"
                                                         ,results]],
                          _v55);
                          var req = A2($Maybe.map,
                          mkquery,
                          function (_) {
                             return _.query;
                          }($Elmz$Moore.extract(results)));
                          return A3($Elmz$Moore.spike,
                          {_: {}
                          ,request: req
                          ,selection: $Maybe.Nothing
                          ,view: $Elmz$Layout.element(layout$$)},
                          {_: {}
                          ,request: $Maybe.Nothing
                          ,selection: $Maybe.Nothing
                          ,view: $Elmz$Layout.element(layout$$)},
                          A8(search,
                          admissible,
                          env,
                          focus,
                          completions$,
                          sel$,
                          e._0,
                          infoLayout,
                          layout$$));
                       }();
                    }());
                  case "Navigate":
                  return A2($Maybe.andThen,
                    A2($Elmz$Moore.step,
                    {_: {}
                    ,event: $Maybe.Just(e._0)
                    ,layout: layout$},
                    sel),
                    function (sel) {
                       return $Maybe.Just(function () {
                          var $ = A7(layout,
                          env.metadata,
                          path(focus),
                          searchbox,
                          A2(allCompletions,
                          content.string,
                          completions),
                          sel,
                          content,
                          infoLayout),
                          sel$$ = $._0,
                          layout$$ = $._1;
                          return $Elmz$Moore.Moore({_: {}
                                                   ,request: $Maybe.Nothing
                                                   ,selection: $Maybe.Nothing
                                                   ,view: $Elmz$Layout.element(layout$$)})(A8(search,
                          admissible,
                          env,
                          focus,
                          completions,
                          sel$$,
                          content,
                          infoLayout,
                          layout$$));
                       }());
                    });
                  case "SearchResults":
                  return $Maybe.Just(function () {
                       var dict = $Dict.fromList(e._0.references);
                       var metadata$ = function (r) {
                          return function () {
                             var _v56 = A2($Dict.get,
                             $Unison$Reference.toKey(r),
                             dict);
                             switch (_v56.ctor)
                             {case "Just": return _v56._0;
                                case "Nothing":
                                return env.metadata(r);}
                             _U.badCase($moduleName,
                             "between lines 135 and 138");
                          }();
                       };
                       var env$ = _U.replace([["metadata"
                                              ,metadata$]],
                       env);
                       var completions$ = A4(processSearchResults,
                       env$,
                       e._0,
                       completions,
                       content.string);
                       var matches = function (_) {
                          return _.matches;
                       }($Elmz$Moore.extract(completions$.results));
                       var $ = A7(layout,
                       metadata$,
                       path(focus),
                       searchbox,
                       matches,
                       sel,
                       content,
                       infoLayout),
                       sel$ = $._0,
                       layout$$ = $._1;
                       return $Elmz$Moore.Moore({_: {}
                                                ,request: $Maybe.Nothing
                                                ,selection: $Maybe.Nothing
                                                ,view: $Elmz$Layout.element(layout$$)})(A8(search,
                       admissible,
                       env$,
                       focus,
                       completions$,
                       sel$,
                       content,
                       infoLayout,
                       layout$$));
                    }());}
               return $Maybe.Nothing;
            }();
         });
         var closed = function (e) {
            return function () {
               switch (e.ctor)
               {case "Open":
                  return $Maybe.Just(function () {
                       var v = loadingField(e._2);
                       return A3($Elmz$Moore.spike,
                       {_: {}
                       ,request: $Maybe.Just(LocalInfo(e._1))
                       ,selection: $Maybe.Nothing
                       ,view: v},
                       {_: {}
                       ,request: $Maybe.Nothing
                       ,selection: $Maybe.Nothing
                       ,view: v},
                       A3(initialize,e._0,e._1,e._2));
                    }());}
               return $Maybe.Nothing;
            }();
         };
         var state0 = A2($Elmz$Moore.Moore,
         {_: {}
         ,request: $Maybe.Nothing
         ,selection: $Maybe.Nothing
         ,view: $Graphics$Element.empty},
         closed);
         return state0;
      }();
   };
   var localFocus = F2(function (path,
   rootTerm) {
      return {_: {}
             ,closedSubterm: rootTerm
             ,pathFromClosedSubterm: path
             ,pathToClosedSubterm: _L.fromArray([])
             ,rootTerm: rootTerm};
   });
   var LocalFocus = F4(function (a,
   b,
   c,
   d) {
      return {_: {}
             ,closedSubterm: c
             ,pathFromClosedSubterm: d
             ,pathToClosedSubterm: b
             ,rootTerm: a};
   });
   _elm.Unison.TermExplorer.values = {_op: _op
                                     ,LocalFocus: LocalFocus
                                     ,localFocus: localFocus
                                     ,path: path
                                     ,Open: Open
                                     ,Navigate: Navigate
                                     ,Enter: Enter
                                     ,Click: Click
                                     ,SearchResults: SearchResults
                                     ,LocalInfoResults: LocalInfoResults
                                     ,FieldContent: FieldContent
                                     ,LocalInfo: LocalInfo
                                     ,Search: Search
                                     ,Completions: Completions
                                     ,allCompletions: allCompletions
                                     ,model: model
                                     ,processSearchResults: processSearchResults
                                     ,parseSearchbox: parseSearchbox
                                     ,infoLayout: infoLayout
                                     ,layout: layout
                                     ,viewField: viewField
                                     ,validCompletions: validCompletions
                                     ,invalidCompletions: invalidCompletions
                                     ,box: box
                                     ,appBlanks: appBlanks
                                     ,showAppBlanks: showAppBlanks
                                     ,searchKey: searchKey
                                     ,renderExplorerEntry: renderExplorerEntry
                                     ,searchEntry: searchEntry
                                     ,localCompletions: localCompletions
                                     ,pad: pad
                                     ,renderTerm: renderTerm};
   return _elm.Unison.TermExplorer.values;
};
Elm.Unison = Elm.Unison || {};
Elm.Unison.Terms = Elm.Unison.Terms || {};
Elm.Unison.Terms.make = function (_elm) {
   "use strict";
   _elm.Unison = _elm.Unison || {};
   _elm.Unison.Terms = _elm.Unison.Terms || {};
   if (_elm.Unison.Terms.values)
   return _elm.Unison.Terms.values;
   var _op = {},
   _N = Elm.Native,
   _U = _N.Utils.make(_elm),
   _L = _N.List.make(_elm),
   $moduleName = "Unison.Terms",
   $Array = Elm.Array.make(_elm),
   $Basics = Elm.Basics.make(_elm),
   $Elmz$Distance = Elm.Elmz.Distance.make(_elm),
   $List = Elm.List.make(_elm),
   $Unison$Reference = Elm.Unison.Reference.make(_elm),
   $Unison$Term = Elm.Unison.Term.make(_elm);
   var full = $Unison$Term.Lit($Unison$Term.Distance($Elmz$Distance.Fraction(1.0)));
   var string = function (s) {
      return $Unison$Term.Lit($Unison$Term.Text(s));
   };
   var vec = function (es) {
      return $Unison$Term.Vector($Array.fromList(es));
   };
   var $int = function (n) {
      return $Unison$Term.Lit($Unison$Term.Number($Basics.toFloat(n)));
   };
   var nums = vec(A2($List.map,
   $int,
   _L.range(0,20)));
   var str = function (s) {
      return $Unison$Term.Lit($Unison$Term.Text(s));
   };
   var names = vec(A2($List.map,
   str,
   _L.fromArray(["Alice"
                ,"Bob"
                ,"Burt"
                ,"Dave"
                ,"Carol"])));
   var derived = function (s) {
      return $Unison$Term.Ref($Unison$Reference.Derived(s));
   };
   var builtin = function (s) {
      return $Unison$Term.Ref($Unison$Reference.Builtin(s));
   };
   var ap = $Unison$Term.App;
   var rgbTerm = F3(function (r,
   g,
   b) {
      return A2(ap,
      A2(ap,
      A2(ap,
      A2(ap,
      builtin("Color.rgba"),
      $int(r)),
      $int(g)),
      $int(b)),
      $int(1));
   });
   var swatch = A2(ap,
   A2(ap,
   builtin("View.cell"),
   builtin("View.swatch")),
   A3(rgbTerm,230,126,34));
   var expr0 = A2(ap,
   A2(ap,derived("foo"),names),
   A2(ap,
   A2(ap,derived("baz"),$int(230)),
   $int(126)));
   var expr = A2(ap,
   A2(ap,derived("foo"),nums),
   A2(ap,
   derived("baz"),
   A2(ap,
   A2(ap,
   builtin("View.cell"),
   builtin("View.swatch")),
   A3(rgbTerm,230,126,34))));
   var cell = F2(function (f,x) {
      return A2(ap,
      A2(ap,builtin("View.cell"),f),
      x);
   });
   var panel = F2(function (v,e) {
      return A2(ap,
      A2(ap,builtin("View.panel"),v),
      e);
   });
   var verticalPanel = function (es) {
      return A2(panel,
      builtin("View.vertical"),
      vec(es));
   };
   var function1 = function (f) {
      return A2(ap,
      builtin("View.function1"),
      f);
   };
   var source = function (e) {
      return A2(ap,
      builtin("View.source"),
      e);
   };
   var text = function (s) {
      return A2(ap,
      builtin("View.text"),
      s);
   };
   var h1 = function (s) {
      return A2(cell,
      text($Unison$Term.Blank),
      $Unison$Term.Lit($Unison$Term.Text(s)));
   };
   var body = function (s) {
      return A2(cell,
      text($Unison$Term.Blank),
      $Unison$Term.Lit($Unison$Term.Text(s)));
   };
   var centered = function (s) {
      return A2(ap,
      A2(ap,
      A2(ap,
      builtin("View.textbox"),
      builtin("Text.center")),
      full),
      s);
   };
   _elm.Unison.Terms.values = {_op: _op
                              ,ap: ap
                              ,builtin: builtin
                              ,derived: derived
                              ,str: str
                              ,$int: $int
                              ,vec: vec
                              ,nums: nums
                              ,names: names
                              ,rgbTerm: rgbTerm
                              ,swatch: swatch
                              ,expr0: expr0
                              ,expr: expr
                              ,cell: cell
                              ,panel: panel
                              ,function1: function1
                              ,source: source
                              ,verticalPanel: verticalPanel
                              ,string: string
                              ,text: text
                              ,centered: centered
                              ,h1: h1
                              ,body: body
                              ,full: full};
   return _elm.Unison.Terms.values;
};
Elm.Unison = Elm.Unison || {};
Elm.Unison.Type = Elm.Unison.Type || {};
Elm.Unison.Type.make = function (_elm) {
   "use strict";
   _elm.Unison = _elm.Unison || {};
   _elm.Unison.Type = _elm.Unison.Type || {};
   if (_elm.Unison.Type.values)
   return _elm.Unison.Type.values;
   var _op = {},
   _N = Elm.Native,
   _U = _N.Utils.make(_elm),
   _L = _N.List.make(_elm),
   $moduleName = "Unison.Type",
   $Basics = Elm.Basics.make(_elm),
   $Elmz$Json$Decoder = Elm.Elmz.Json.Decoder.make(_elm),
   $Elmz$Json$Encoder = Elm.Elmz.Json.Encoder.make(_elm),
   $List = Elm.List.make(_elm),
   $String = Elm.String.make(_elm),
   $Unison$Metadata = Elm.Unison.Metadata.make(_elm),
   $Unison$Reference = Elm.Unison.Reference.make(_elm),
   $Unison$Symbol = Elm.Unison.Symbol.make(_elm);
   var encodeLiteral = function (l) {
      return function () {
         switch (l.ctor)
         {case "Distance":
            return A3($Elmz$Json$Encoder.tag$,
              "Distance",
              $Elmz$Json$Encoder.product0,
              {ctor: "_Tuple0"});
            case "Number":
            return A3($Elmz$Json$Encoder.tag$,
              "Number",
              $Elmz$Json$Encoder.product0,
              {ctor: "_Tuple0"});
            case "Ref":
            return A3($Elmz$Json$Encoder.tag$,
              "Ref",
              $Unison$Reference.encode,
              l._0);
            case "Text":
            return A3($Elmz$Json$Encoder.tag$,
              "Text",
              $Elmz$Json$Encoder.product0,
              {ctor: "_Tuple0"});
            case "Vector":
            return A3($Elmz$Json$Encoder.tag$,
              "Vector",
              $Elmz$Json$Encoder.product0,
              {ctor: "_Tuple0"});}
         _U.badCase($moduleName,
         "between lines 92 and 97");
      }();
   };
   var encodeKind = function (k) {
      return function () {
         switch (k.ctor)
         {case "KArrow":
            return A3($Elmz$Json$Encoder.tag$,
              "Arrow",
              $Elmz$Json$Encoder.list(encodeKind),
              _L.fromArray([k._0,k._1]));
            case "Star":
            return A3($Elmz$Json$Encoder.tag$,
              "Star",
              $Elmz$Json$Encoder.product0,
              {ctor: "_Tuple0"});}
         _U.badCase($moduleName,
         "between lines 79 and 81");
      }();
   };
   var encodeType = function (t) {
      return function () {
         switch (t.ctor)
         {case "Forall":
            return A3($Elmz$Json$Encoder.tagProduct,
              "Tm",
              A2($Elmz$Json$Encoder.tag$,
              "Forall",
              A2($Elmz$Json$Encoder.tagProduct,
              "Abs",
              A2($Elmz$Json$Encoder.tuple2,
              $Unison$Symbol.encodeSymbol,
              encodeType))),
              {ctor: "_Tuple2"
              ,_0: t._0
              ,_1: t._1});}
         return A3($Elmz$Json$Encoder.tagProduct,
         "Tm",
         function (t) {
            return function () {
               switch (t.ctor)
               {case "Ann":
                  return A3($Elmz$Json$Encoder.tag$,
                    "Ann",
                    A2($Elmz$Json$Encoder.tuple2,
                    encodeType,
                    encodeKind),
                    {ctor: "_Tuple2"
                    ,_0: t._0
                    ,_1: t._1});
                  case "App":
                  return A3($Elmz$Json$Encoder.tag$,
                    "App",
                    $Elmz$Json$Encoder.list(encodeType),
                    _L.fromArray([t._0,t._1]));
                  case "Arrow":
                  return A3($Elmz$Json$Encoder.tag$,
                    "Arrow",
                    $Elmz$Json$Encoder.list(encodeType),
                    _L.fromArray([t._0,t._1]));
                  case "Constrain":
                  return A3($Elmz$Json$Encoder.tag$,
                    "Constrain",
                    A2($Elmz$Json$Encoder.tuple2,
                    encodeType,
                    $Elmz$Json$Encoder.product0),
                    {ctor: "_Tuple2"
                    ,_0: t._0
                    ,_1: {ctor: "_Tuple0"}});
                  case "Existential":
                  return A3($Elmz$Json$Encoder.tag$,
                    "Existential",
                    A2($Elmz$Json$Encoder.tagProduct,
                    "Var",
                    $Unison$Symbol.encodeSymbol),
                    t._0);
                  case "Lit":
                  return A3($Elmz$Json$Encoder.tag$,
                    "Lit",
                    encodeLiteral,
                    t._0);
                  case "Universal":
                  return A3($Elmz$Json$Encoder.tag$,
                    "Universal",
                    A2($Elmz$Json$Encoder.tagProduct,
                    "Var",
                    $Unison$Symbol.encodeSymbol),
                    t._0);}
               _U.badCase($moduleName,
               "between lines 121 and 129");
            }();
         },
         t);
      }();
   };
   var isFunction = function (t) {
      return function () {
         switch (t.ctor)
         {case "Ann":
            return isFunction(t._0);
            case "Arrow": return true;
            case "Constrain":
            return isFunction(t._0);
            case "Forall":
            return isFunction(t._1);}
         return false;
      }();
   };
   var KArrow = F2(function (a,b) {
      return {ctor: "KArrow"
             ,_0: a
             ,_1: b};
   });
   var Star = {ctor: "Star"};
   var decodeKind = $Elmz$Json$Decoder.union$(function (t) {
      return _U.eq(t,
      "Star") ? $Elmz$Json$Decoder.unit(Star) : _U.eq(t,
      "Arrow") ? A3($Elmz$Json$Decoder.product2,
      KArrow,
      decodeKind,
      decodeKind) : _U.badIf($moduleName,
      "between lines 75 and 76");
   });
   var Forall = F2(function (a,b) {
      return {ctor: "Forall"
             ,_0: a
             ,_1: b};
   });
   var Constrain = F2(function (a,
   b) {
      return {ctor: "Constrain"
             ,_0: a
             ,_1: b};
   });
   var Ann = F2(function (a,b) {
      return {ctor: "Ann"
             ,_0: a
             ,_1: b};
   });
   var Existential = function (a) {
      return {ctor: "Existential"
             ,_0: a};
   };
   var Universal = function (a) {
      return {ctor: "Universal"
             ,_0: a};
   };
   var all = A2(Forall,
   $Unison$Symbol.anonymous,
   Universal($Unison$Symbol.anonymous));
   var key = F2(function (env,
   cur) {
      return function () {
         var paren = F3(function (cur,
         ambient,
         s) {
            return _U.cmp(cur,
            ambient) < 0 ? A2($Basics._op["++"],
            "(",
            A2($Basics._op["++"],
            s,
            ")")) : s;
         });
         var go = F3(function (top,
         prec,
         cur) {
            return function () {
               switch (cur.ctor)
               {case "App": return A3(paren,
                    9,
                    prec,
                    A2($Basics._op["++"],
                    A3(go,top,9,cur._0),
                    A2($Basics._op["++"],
                    " ",
                    A3(go,top,10,cur._1))));
                  case "Arrow": return A3(paren,
                    0,
                    prec,
                    A2($Basics._op["++"],
                    A3(go,false,prec + 1,cur._0),
                    A2($Basics._op["++"],
                    " → ",
                    A3(go,top,prec,cur._1))));
                  case "Existential":
                  return A2($Basics._op["++"],
                    "\'",
                    $Unison$Symbol.toKey(cur._0));
                  case "Forall":
                  return top ? A3(go,
                    true,
                    prec,
                    cur._1) : function () {
                       var extract = function (v) {
                          return function () {
                             switch (v.ctor)
                             {case "Forall":
                                return function () {
                                     var $ = extract(v._1),
                                     vs = $._0,
                                     inner = $._1;
                                     return {ctor: "_Tuple2"
                                            ,_0: A2($List._op["::"],v._0,vs)
                                            ,_1: inner};
                                  }();}
                             return {ctor: "_Tuple2"
                                    ,_0: _L.fromArray([])
                                    ,_1: v};
                          }();
                       };
                       return function () {
                          var _v42 = extract(cur);
                          switch (_v42.ctor)
                          {case "_Tuple2":
                             return A2(paren,
                               9,
                               prec)(A2($Basics._op["++"],
                               "∀ ",
                               A2($Basics._op["++"],
                               A2($String.join,
                               " ",
                               A2($List.map,
                               function ($) {
                                  return A2(go,
                                  false,
                                  0)(Universal($));
                               },
                               _v42._0)),
                               A2($Basics._op["++"],
                               ". ",
                               A3(go,false,prec,_v42._1)))));}
                          _U.badCase($moduleName,
                          "between lines 59 and 63");
                       }();
                    }();
                  case "Lit": return function () {
                       switch (cur._0.ctor)
                       {case "Ref":
                          return A2($Unison$Metadata.firstName,
                            $Unison$Reference.toKey(cur._0._0),
                            env.metadata(cur._0._0));}
                       return $Basics.toString(cur._0);
                    }();
                  case "Universal":
                  return $Unison$Symbol.toKey(cur._0);}
               _U.badCase($moduleName,
               "between lines 46 and 63");
            }();
         });
         return A3(go,true,0,cur);
      }();
   });
   var App = F2(function (a,b) {
      return {ctor: "App"
             ,_0: a
             ,_1: b};
   });
   var Arrow = F2(function (a,b) {
      return {ctor: "Arrow"
             ,_0: a
             ,_1: b};
   });
   var Lit = function (a) {
      return {ctor: "Lit",_0: a};
   };
   var Ref = function (a) {
      return {ctor: "Ref",_0: a};
   };
   var Distance = {ctor: "Distance"};
   var Vector = {ctor: "Vector"};
   var Text = {ctor: "Text"};
   var Number = {ctor: "Number"};
   var decodeLiteral = $Elmz$Json$Decoder.union$(function (t) {
      return _U.eq(t,
      "Number") ? $Elmz$Json$Decoder.unit(Number) : _U.eq(t,
      "Text") ? $Elmz$Json$Decoder.unit(Text) : _U.eq(t,
      "Vector") ? $Elmz$Json$Decoder.unit(Vector) : _U.eq(t,
      "Distance") ? $Elmz$Json$Decoder.unit(Distance) : _U.eq(t,
      "Ref") ? A2($Elmz$Json$Decoder.map,
      Ref,
      $Unison$Reference.decode) : _U.badIf($moduleName,
      "between lines 85 and 89");
   });
   var decodeType = $Elmz$Json$Decoder.arrayUnion(function (t) {
      return !_U.eq(t,
      "Tm") ? $Elmz$Json$Decoder.fail(A2($Basics._op["++"],
      "decodeType.ABT unknown tag: ",
      t)) : $Elmz$Json$Decoder.union$(function (t) {
         return _U.eq(t,
         "Lit") ? A2($Elmz$Json$Decoder.map,
         Lit,
         decodeLiteral) : _U.eq(t,
         "Arrow") ? A3($Elmz$Json$Decoder.product2,
         Arrow,
         decodeType,
         decodeType) : _U.eq(t,
         "App") ? A3($Elmz$Json$Decoder.product2,
         App,
         decodeType,
         decodeType) : _U.eq(t,
         "Universal") ? A2($Elmz$Json$Decoder.arrayNewtyped,
         "Var",
         A2($Elmz$Json$Decoder.map,
         Universal,
         $Unison$Symbol.decodeSymbol)) : _U.eq(t,
         "Existential") ? A2($Elmz$Json$Decoder.arrayNewtyped,
         "Var",
         A2($Elmz$Json$Decoder.map,
         Existential,
         $Unison$Symbol.decodeSymbol)) : _U.eq(t,
         "Kind") ? A3($Elmz$Json$Decoder.product2,
         Ann,
         decodeType,
         decodeKind) : _U.eq(t,
         "Constrain") ? A3($Elmz$Json$Decoder.product2,
         Constrain,
         decodeType,
         $Elmz$Json$Decoder.unit({ctor: "_Tuple0"})) : _U.eq(t,
         "Forall") ? A2($Elmz$Json$Decoder.arrayNewtyped,
         "Abs",
         A3($Elmz$Json$Decoder.product2,
         Forall,
         $Unison$Symbol.decodeSymbol,
         decodeType)) : $Elmz$Json$Decoder.fail(A2($Basics._op["++"],
         "decodeType.F unknown tag: ",
         t));
      });
   });
   _elm.Unison.Type.values = {_op: _op
                             ,Number: Number
                             ,Text: Text
                             ,Vector: Vector
                             ,Distance: Distance
                             ,Ref: Ref
                             ,Lit: Lit
                             ,Arrow: Arrow
                             ,App: App
                             ,Universal: Universal
                             ,Existential: Existential
                             ,Ann: Ann
                             ,Constrain: Constrain
                             ,Forall: Forall
                             ,all: all
                             ,Star: Star
                             ,KArrow: KArrow
                             ,key: key
                             ,isFunction: isFunction
                             ,decodeKind: decodeKind
                             ,encodeKind: encodeKind
                             ,decodeLiteral: decodeLiteral
                             ,encodeLiteral: encodeLiteral
                             ,decodeType: decodeType
                             ,encodeType: encodeType};
   return _elm.Unison.Type.values;
};
Elm.Unison = Elm.Unison || {};
Elm.Unison.View = Elm.Unison.View || {};
Elm.Unison.View.make = function (_elm) {
   "use strict";
   _elm.Unison = _elm.Unison || {};
   _elm.Unison.View = _elm.Unison.View || {};
   if (_elm.Unison.View.values)
   return _elm.Unison.View.values;
   var _op = {},
   _N = Elm.Native,
   _U = _N.Utils.make(_elm),
   _L = _N.List.make(_elm),
   $moduleName = "Unison.View",
   $Array = Elm.Array.make(_elm),
   $Basics = Elm.Basics.make(_elm),
   $Color = Elm.Color.make(_elm),
   $Elmz$Distance = Elm.Elmz.Distance.make(_elm),
   $Elmz$Layout = Elm.Elmz.Layout.make(_elm),
   $Elmz$Trie = Elm.Elmz.Trie.make(_elm),
   $Graphics$Element = Elm.Graphics.Element.make(_elm),
   $List = Elm.List.make(_elm),
   $Maybe = Elm.Maybe.make(_elm),
   $String = Elm.String.make(_elm),
   $Text = Elm.Text.make(_elm),
   $Unison$Metadata = Elm.Unison.Metadata.make(_elm),
   $Unison$Path = Elm.Unison.Path.make(_elm),
   $Unison$Reference = Elm.Unison.Reference.make(_elm),
   $Unison$Styles = Elm.Unison.Styles.make(_elm),
   $Unison$Symbol = Elm.Unison.Symbol.make(_elm),
   $Unison$Term = Elm.Unison.Term.make(_elm),
   $Unison$Type = Elm.Unison.Type.make(_elm);
   var declaredPaths = function (e) {
      return function () {
         var ok = function (e) {
            return function () {
               switch (e.ctor)
               {case "App": switch (e._0.ctor)
                    {case "App":
                       switch (e._0._0.ctor)
                         {case "Ref":
                            switch (e._0._0._0.ctor)
                              {case "Builtin":
                                 switch (e._0._0._0._0)
                                   {case "View.declare":
                                      switch (e._0._1.ctor)
                                        {case "Lit":
                                           switch (e._0._1._0.ctor)
                                             {case "Text":
                                                return $Maybe.Just(e._0._1._0._0);}
                                             break;}
                                        break;}
                                   break;}
                              break;}
                         break;}
                    break;}
               return $Maybe.Nothing;
            }();
         };
         return A2($Unison$Term.collectPaths,
         ok,
         e);
      }();
   };
   var reactivePaths = function (e) {
      return function () {
         var ok = function (e) {
            return function () {
               switch (e.ctor)
               {case "App": switch (e._0.ctor)
                    {case "App":
                       switch (e._0._0.ctor)
                         {case "Ref":
                            switch (e._0._0._0.ctor)
                              {case "Builtin":
                                 switch (e._0._0._0._0)
                                   {case "View.cell":
                                      switch (e._0._1.ctor)
                                        {case "Ref":
                                           switch (e._0._1._0.ctor)
                                             {case "Builtin":
                                                switch (e._0._1._0._0)
                                                  {case "View.reactive":
                                                     return true;}
                                                  break;}
                                             break;}
                                        break;
                                      case "View.view":
                                      switch (e._0._1.ctor)
                                        {case "Ref":
                                           switch (e._0._1._0.ctor)
                                             {case "Builtin":
                                                switch (e._0._1._0._0)
                                                  {case "View.reactive":
                                                     return true;}
                                                  break;}
                                             break;}
                                        break;}
                                   break;}
                              break;}
                         break;}
                    break;}
               return false;
            }();
         };
         return A2($Unison$Term.matchingPaths,
         ok,
         e);
      }();
   };
   var Lambda = F2(function (a,b) {
      return {ctor: "Lambda"
             ,_0: a
             ,_1: b};
   });
   var Bracketed = function (a) {
      return {ctor: "Bracketed"
             ,_0: a};
   };
   var Operators = F4(function (a,
   b,
   c,
   d) {
      return {ctor: "Operators"
             ,_0: a
             ,_1: b
             ,_2: c
             ,_3: d};
   });
   var Prefix = F2(function (a,b) {
      return {ctor: "Prefix"
             ,_0: a
             ,_1: b};
   });
   var $break = F2(function (env,
   cur) {
      return function () {
         var opsR = F4(function (o,
         prec,
         e,
         path) {
            return function () {
               switch (e.ctor)
               {case "App": switch (e._0.ctor)
                    {case "App":
                       return _U.eq(e._0._0,
                         o) ? function () {
                            var _v25 = A4(opsR,
                            o,
                            prec,
                            e._1,
                            A2($Unison$Path.snoc,
                            path,
                            $Unison$Path.Arg));
                            switch (_v25.ctor)
                            {case "Operators":
                               return function () {
                                    var tl$ = A2($List._op["::"],
                                    {ctor: "_Tuple2"
                                    ,_0: _U.replace([["path"
                                                     ,A2($Unison$Path.append,
                                                     path,
                                                     _L.fromArray([$Unison$Path.Fn
                                                                  ,$Unison$Path.Fn]))]
                                                    ,["term",e._0._0]],
                                    cur)
                                    ,_1: _v25._2},
                                    _v25._3);
                                    return A4(Operators,
                                    true,
                                    _v25._1,
                                    _U.replace([["path"
                                                ,A2($Unison$Path.append,
                                                path,
                                                _L.fromArray([$Unison$Path.Fn
                                                             ,$Unison$Path.Arg]))]
                                               ,["term",e._0._1]],
                                    cur),
                                    tl$);
                                 }();}
                            _U.badCase($moduleName,
                            "between lines 230 and 234");
                         }() : A4(Operators,
                         true,
                         prec,
                         _U.replace([["path",path]
                                    ,["term",e]],
                         cur),
                         _L.fromArray([]));}
                    break;}
               return A4(Operators,
               true,
               prec,
               _U.replace([["path",path]
                          ,["term",e]],
               cur),
               _L.fromArray([]));
            }();
         });
         var opsL = F5(function (o,
         prec,
         e,
         acc,
         path) {
            return function () {
               switch (e.ctor)
               {case "App": switch (e._0.ctor)
                    {case "App":
                       return _U.eq(e._0._0,
                         o) ? function () {
                            var hd = {ctor: "_Tuple2"
                                     ,_0: _U.replace([["path"
                                                      ,A2($Unison$Path.append,
                                                      path,
                                                      _L.fromArray([$Unison$Path.Fn
                                                                   ,$Unison$Path.Fn]))]
                                                     ,["term",e._0._0]],
                                     cur)
                                     ,_1: _U.replace([["path"
                                                      ,A2($Unison$Path.snoc,
                                                      path,
                                                      $Unison$Path.Arg)]
                                                     ,["term",e._1]],
                                     cur)};
                            return A5(opsL,
                            o,
                            prec,
                            e._0._1,
                            A2($List._op["::"],hd,acc),
                            A2($Unison$Path.append,
                            path,
                            _L.fromArray([$Unison$Path.Fn
                                         ,$Unison$Path.Arg])));
                         }() : A4(Operators,
                         false,
                         prec,
                         _U.replace([["path",path]
                                    ,["term",e]],
                         cur),
                         acc);}
                    break;}
               return A4(Operators,
               false,
               prec,
               _U.replace([["path",path]
                          ,["term",e]],
               cur),
               acc);
            }();
         });
         var prefix = F3(function (f,
         acc,
         path) {
            return function () {
               switch (f.ctor)
               {case "App": return A3(prefix,
                    f._0,
                    A2($List._op["::"],
                    _U.replace([["path"
                                ,A2($Unison$Path.snoc,
                                path,
                                $Unison$Path.Arg)]
                               ,["term",f._1]],
                    cur),
                    acc),
                    A2($Unison$Path.snoc,
                    path,
                    $Unison$Path.Fn));}
               return A2(Prefix,
               _U.replace([["path",path]
                          ,["term",f]],
               cur),
               acc);
            }();
         });
         return function () {
            var _v38 = cur.term;
            switch (_v38.ctor)
            {case "App":
               switch (_v38._0.ctor)
                 {case "App":
                    return function () {
                         var sym = function () {
                            switch (_v38._0._0.ctor)
                            {case "Ref":
                               return A2($Unison$Metadata.firstSymbol,
                                 $Unison$Reference.toKey(_v38._0._0._0),
                                 env.metadata(_v38._0._0._0));
                               case "Var":
                               return $Unison$Symbol.prefix(A2($Basics._op["++"],
                                 "v",
                                 $Basics.toString(_v38._0._0._0)));}
                            return $Unison$Symbol.anonymous;
                         }();
                         return function () {
                            var _v47 = sym.fixity;
                            switch (_v47.ctor)
                            {case "InfixL": return A5(opsL,
                                 _v38._0._0,
                                 sym.precedence,
                                 A2($Unison$Term.App,
                                 A2($Unison$Term.App,
                                 _v38._0._0,
                                 _v38._0._1),
                                 _v38._1),
                                 _L.fromArray([]),
                                 cur.path);
                               case "InfixR": return A4(opsR,
                                 _v38._0._0,
                                 sym.precedence,
                                 A2($Unison$Term.App,
                                 A2($Unison$Term.App,
                                 _v38._0._0,
                                 _v38._0._1),
                                 _v38._1),
                                 cur.path);
                               case "Prefix": return A3(prefix,
                                 A2($Unison$Term.App,
                                 A2($Unison$Term.App,
                                 _v38._0._0,
                                 _v38._0._1),
                                 _v38._1),
                                 _L.fromArray([]),
                                 cur.path);}
                            _U.badCase($moduleName,
                            "between lines 245 and 249");
                         }();
                      }();}
                 break;
               case "Vector":
               return Bracketed($List.indexedMap(F2(function (i,
                 a) {
                    return _U.replace([["path"
                                       ,A2($Unison$Path.snoc,
                                       cur.path,
                                       $Unison$Path.Index(i))]
                                      ,["term",a]],
                    cur);
                 }))($Array.toList(_v38._0)));}
            return A3(prefix,
            cur.term,
            _L.fromArray([]),
            cur.path);
         }();
      }();
   });
   var space2 = $Unison$Styles.codeText("  ");
   var indentWidth = $Graphics$Element.widthOf(space2);
   var spaces = function (n) {
      return _U.cmp(n,
      0) < 1 ? $Graphics$Element.empty : $Unison$Styles.codeText(A3($String.padLeft,
      n * 2,
      _U.chr(" "),
      ""));
   };
   var space = $Unison$Styles.codeText(" ");
   var utag = function (path) {
      return {_: {}
             ,path: path
             ,selectable: false};
   };
   var tag = function (path) {
      return {_: {}
             ,path: path
             ,selectable: true};
   };
   var paren = F3(function (parenthesize,
   cur,
   e) {
      return parenthesize ? function () {
         var t = tag(cur.path);
         var opening = A2($Elmz$Layout.embed,
         t,
         $Unison$Styles.codeText("("));
         var closing = A2($Elmz$Layout.embed,
         t,
         $Unison$Styles.codeText(")"));
         var botY = $Elmz$Layout.heightOf(e) - $Elmz$Layout.heightOf(closing);
         var topOpen = A5($Elmz$Layout.container,
         t,
         $Elmz$Layout.widthOf(opening),
         $Elmz$Layout.heightOf(e),
         A2($Elmz$Layout.Pt,0,0),
         opening);
         var bottomClose = A5($Elmz$Layout.container,
         t,
         $Elmz$Layout.widthOf(opening),
         $Elmz$Layout.heightOf(e),
         A2($Elmz$Layout.Pt,0,botY),
         closing);
         return A2($Elmz$Layout.horizontal,
         t,
         _L.fromArray([topOpen
                      ,e
                      ,bottomClose]));
      }() : e;
   });
   var builtins = F5(function (env,
   allowBreak,
   availableWidth,
   ambientPrec,
   cur) {
      return function () {
         var t = tag(A2($Unison$Path.snoc,
         cur.path,
         $Unison$Path.Arg));
         var go = F2(function (v,e) {
            return function () {
               switch (v.ctor)
               {case "App": switch (v._0.ctor)
                    {case "App":
                       switch (v._0._0.ctor)
                         {case "App":
                            switch (v._0._0._0.ctor)
                              {case "Ref":
                                 switch (v._0._0._0._0.ctor)
                                   {case "Builtin":
                                      switch (v._0._0._0._0._0)
                                        {case "View.textbox":
                                           switch (v._0._0._1.ctor)
                                             {case "Ref":
                                                switch (v._0._0._1._0.ctor)
                                                  {case "Builtin":
                                                     switch (v._0._1.ctor)
                                                       {case "Lit":
                                                          switch (v._0._1._0.ctor)
                                                            {case "Distance":
                                                               return function () {
                                                                    switch (e.ctor)
                                                                    {case "Lit":
                                                                       switch (e._0.ctor)
                                                                         {case "Text":
                                                                            return function () {
                                                                                 var rem = A2($Basics.max,
                                                                                 availableWidth,
                                                                                 $Basics.floor(A2($Elmz$Distance.pixels,
                                                                                 v._0._1._0._0,
                                                                                 $Basics.toFloat(availableWidth))));
                                                                                 var f = function () {
                                                                                    switch (v._0._0._1._0._0)
                                                                                    {case "Text.center":
                                                                                       return $Graphics$Element.centered;
                                                                                       case "Text.justify":
                                                                                       return $Graphics$Element.justified;
                                                                                       case "Text.left":
                                                                                       return $Graphics$Element.leftAligned;
                                                                                       case "Text.right":
                                                                                       return $Graphics$Element.rightAligned;}
                                                                                    _U.badCase($moduleName,
                                                                                    "between lines 290 and 295");
                                                                                 }();
                                                                                 var e = f(A2($Text.style,
                                                                                 $Text.defaultStyle,
                                                                                 $Text.fromString(e._0._0)));
                                                                                 var e$ = _U.cmp($Graphics$Element.widthOf(e),
                                                                                 rem) > 0 ? A2($Graphics$Element.width,
                                                                                 rem,
                                                                                 e) : e;
                                                                                 return $Maybe.Just(A2($Elmz$Layout.embed,
                                                                                 t,
                                                                                 e$));
                                                                              }();}
                                                                         break;}
                                                                    return $Maybe.Nothing;
                                                                 }();}
                                                            break;}
                                                       break;}
                                                  break;}
                                             break;}
                                        break;}
                                   break;}
                              break;
                            case "Ref":
                            switch (v._0._0._0.ctor)
                              {case "Builtin":
                                 switch (v._0._0._0._0)
                                   {case "View.spacer":
                                      switch (v._0._1.ctor)
                                        {case "Lit":
                                           switch (v._0._1._0.ctor)
                                             {case "Distance":
                                                switch (v._1.ctor)
                                                  {case "Lit":
                                                     switch (v._1._0.ctor)
                                                       {case "Number":
                                                          return function () {
                                                               var h$ = $Basics.ceiling(v._1._0._0);
                                                               var w$ = A2($Basics.min,
                                                               availableWidth,
                                                               $Basics.floor(A2($Elmz$Distance.pixels,
                                                               v._0._1._0._0,
                                                               $Basics.toFloat(availableWidth))));
                                                               return $Maybe.Just(A2($Elmz$Layout.embed,
                                                               t,
                                                               A2($Graphics$Element.spacer,
                                                               w$,
                                                               h$)));
                                                            }();}
                                                       break;}
                                                  break;}
                                             break;}
                                        break;}
                                   break;}
                              break;}
                         break;
                       case "Ref":
                       switch (v._0._0.ctor)
                         {case "Builtin":
                            switch (v._0._0._0)
                              {case "View.color":
                                 return function () {
                                      switch (v._1.ctor)
                                      {case "App":
                                         switch (v._1._0.ctor)
                                           {case "App":
                                              switch (v._1._0._0.ctor)
                                                {case "App":
                                                   switch (v._1._0._0._0.ctor)
                                                     {case "App":
                                                        switch (v._1._0._0._0._0.ctor)
                                                          {case "Ref":
                                                             switch (v._1._0._0._0._0._0.ctor)
                                                               {case "Builtin":
                                                                  switch (v._1._0._0._0._0._0._0)
                                                                    {case "Color.rgba":
                                                                       switch (v._1._0._0._0._1.ctor)
                                                                         {case "Lit":
                                                                            switch (v._1._0._0._0._1._0.ctor)
                                                                              {case "Number":
                                                                                 switch (v._1._0._0._1.ctor)
                                                                                   {case "Lit":
                                                                                      switch (v._1._0._0._1._0.ctor)
                                                                                        {case "Number":
                                                                                           switch (v._1._0._1.ctor)
                                                                                             {case "Lit":
                                                                                                switch (v._1._0._1._0.ctor)
                                                                                                  {case "Number":
                                                                                                     switch (v._1._1.ctor)
                                                                                                       {case "Lit":
                                                                                                          switch (v._1._1._0.ctor)
                                                                                                            {case "Number":
                                                                                                               return function () {
                                                                                                                    var c$ = A4($Color.rgba,
                                                                                                                    $Basics.floor(v._1._0._0._0._1._0._0),
                                                                                                                    $Basics.floor(v._1._0._0._1._0._0),
                                                                                                                    $Basics.floor(v._1._0._1._0._0),
                                                                                                                    v._1._1._0._0);
                                                                                                                    return function ($) {
                                                                                                                       return $Maybe.Just($Elmz$Layout.fill(c$)($));
                                                                                                                    }(A5(impl,
                                                                                                                    env,
                                                                                                                    allowBreak,
                                                                                                                    ambientPrec,
                                                                                                                    availableWidth,
                                                                                                                    _U.replace([["path"
                                                                                                                                ,A2($Unison$Path.snoc,
                                                                                                                                cur.path,
                                                                                                                                $Unison$Path.Arg)]
                                                                                                                               ,["term"
                                                                                                                                ,e]],
                                                                                                                    cur)));
                                                                                                                 }();}
                                                                                                            break;}
                                                                                                       break;}
                                                                                                  break;}
                                                                                             break;}
                                                                                        break;}
                                                                                   break;}
                                                                              break;}
                                                                         break;}
                                                                    break;}
                                                               break;}
                                                          break;}
                                                     break;}
                                                break;}
                                           break;}
                                      return $Maybe.Nothing;
                                   }();
                                 case "View.fit-width":
                                 switch (v._1.ctor)
                                   {case "Lit":
                                      switch (v._1._0.ctor)
                                        {case "Distance":
                                           return function () {
                                                var rem = A2($Basics.min,
                                                availableWidth,
                                                $Basics.floor(A2($Elmz$Distance.pixels,
                                                v._1._0._0,
                                                $Basics.toFloat(availableWidth))));
                                                return $Maybe.Just(A5(impl,
                                                env,
                                                allowBreak,
                                                ambientPrec,
                                                rem,
                                                _U.replace([["path"
                                                            ,A2($Unison$Path.snoc,
                                                            cur.path,
                                                            $Unison$Path.Arg)]
                                                           ,["term",e]],
                                                cur)));
                                             }();}
                                        break;}
                                   break;
                                 case "View.text":
                                 return function () {
                                      switch (e.ctor)
                                      {case "Lit": switch (e._0.ctor)
                                           {case "Text":
                                              return $Maybe.Just(A2($Elmz$Layout.embed,
                                                t,
                                                $Graphics$Element.leftAligned(A2($Text.style,
                                                $Text.defaultStyle,
                                                $Text.fromString(e._0._0)))));}
                                           break;}
                                      _U.badCase($moduleName,
                                      "between lines 283 and 286");
                                   }();}
                              break;}
                         break;}
                    break;
                  case "Ref": switch (v._0.ctor)
                    {case "Builtin":
                       switch (v._0._0)
                         {case "View.embed":
                            return A5(builtins,
                              env,
                              allowBreak,
                              availableWidth,
                              ambientPrec,
                              _U.replace([["path"
                                          ,A2($Unison$Path.snoc,
                                          cur.path,
                                          $Unison$Path.Arg)]
                                         ,["term",e]],
                              cur));
                            case "View.hide":
                            return $Maybe.Just($Elmz$Layout.empty(t));
                            case "View.horizontal":
                            return function () {
                                 switch (e.ctor)
                                 {case "Vector":
                                    return $Maybe.Nothing;}
                                 return $Maybe.Nothing;
                              }();
                            case "View.source":
                            return $Maybe.Just(A5(impl,
                              env,
                              allowBreak,
                              ambientPrec,
                              availableWidth,
                              _U.replace([["path"
                                          ,A2($Unison$Path.snoc,
                                          cur.path,
                                          $Unison$Path.Arg)]
                                         ,["term",e]],
                              cur)));
                            case "View.swatch":
                            return function () {
                                 switch (e.ctor)
                                 {case "App": switch (e._0.ctor)
                                      {case "App":
                                         switch (e._0._0.ctor)
                                           {case "App":
                                              switch (e._0._0._0.ctor)
                                                {case "App":
                                                   switch (e._0._0._0._0.ctor)
                                                     {case "Ref":
                                                        switch (e._0._0._0._0._0.ctor)
                                                          {case "Builtin":
                                                             switch (e._0._0._0._0._0._0)
                                                               {case "Color.rgba":
                                                                  switch (e._0._0._0._1.ctor)
                                                                    {case "Lit":
                                                                       switch (e._0._0._0._1._0.ctor)
                                                                         {case "Number":
                                                                            switch (e._0._0._1.ctor)
                                                                              {case "Lit":
                                                                                 switch (e._0._0._1._0.ctor)
                                                                                   {case "Number":
                                                                                      switch (e._0._1.ctor)
                                                                                        {case "Lit":
                                                                                           switch (e._0._1._0.ctor)
                                                                                             {case "Number":
                                                                                                switch (e._1.ctor)
                                                                                                  {case "Lit":
                                                                                                     switch (e._1._0.ctor)
                                                                                                       {case "Number":
                                                                                                          return function () {
                                                                                                               var c = A4($Color.rgba,
                                                                                                               $Basics.floor(e._0._0._0._1._0._0),
                                                                                                               $Basics.floor(e._0._0._1._0._0),
                                                                                                               $Basics.floor(e._0._1._0._0),
                                                                                                               e._1._0._0);
                                                                                                               return $Maybe.Just(A2($Elmz$Layout.embed,
                                                                                                               t,
                                                                                                               $Unison$Styles.swatch(c)));
                                                                                                            }();}
                                                                                                       break;}
                                                                                                  break;}
                                                                                             break;}
                                                                                        break;}
                                                                                   break;}
                                                                              break;}
                                                                         break;}
                                                                    break;}
                                                               break;}
                                                          break;}
                                                     break;}
                                                break;}
                                           break;}
                                      break;}
                                 return $Maybe.Nothing;
                              }();
                            case "View.vertical":
                            return function () {
                                 switch (e.ctor)
                                 {case "Vector":
                                    return function () {
                                         var f = F2(function (i,e) {
                                            return A5(impl,
                                            env,
                                            allowBreak,
                                            ambientPrec,
                                            availableWidth,
                                            _U.replace([["path"
                                                        ,A2($Unison$Path.append,
                                                        cur.path,
                                                        _L.fromArray([$Unison$Path.Arg
                                                                     ,$Unison$Path.Index(i)]))]
                                                       ,["term",e]],
                                            cur));
                                         });
                                         return $Maybe.Just(A2($Elmz$Layout.vertical,
                                         tag(A2($Unison$Path.snoc,
                                         cur.path,
                                         $Unison$Path.Arg)),
                                         A2($List.indexedMap,
                                         f,
                                         $Array.toList(e._0))));
                                      }();}
                                 return $Maybe.Nothing;
                              }();
                            case "View.wrap":
                            return function () {
                                 switch (e.ctor)
                                 {case "Vector":
                                    return $Maybe.Nothing;}
                                 return $Maybe.Nothing;
                              }();}
                         break;}
                    break;}
               return $Maybe.Nothing;
            }();
         });
         return function () {
            var _v124 = cur.term;
            switch (_v124.ctor)
            {case "App":
               switch (_v124._0.ctor)
                 {case "App":
                    switch (_v124._0._0.ctor)
                      {case "App":
                         switch (_v124._0._0._0.ctor)
                           {case "Ref":
                              switch (_v124._0._0._0._0.ctor)
                                {case "Builtin":
                                   switch (_v124._0._0._0._0._0)
                                     {case "View.view":
                                        switch (_v124._0._0._1.ctor)
                                          {case "App":
                                             switch (_v124._0._0._1._0.ctor)
                                               {case "Ref":
                                                  switch (_v124._0._0._1._0._0.ctor)
                                                    {case "Builtin":
                                                       switch (_v124._0._0._1._0._0._0)
                                                         {case "View.function1":
                                                            switch (_v124._0._0._1._1.ctor)
                                                              {case "Lam":
                                                                 return function () {
                                                                      var fpath = A2($Unison$Path.append,
                                                                      cur.path,
                                                                      _L.fromArray([$Unison$Path.Fn
                                                                                   ,$Unison$Path.Arg]));
                                                                      var trim = function (l) {
                                                                         return A2($Unison$Path.startsWith,
                                                                         fpath,
                                                                         l.path) ? _U.replace([["path"
                                                                                               ,cur.path]],
                                                                         l) : l;
                                                                      };
                                                                      var g = function (view) {
                                                                         return $Elmz$Layout.map(trim)(A5(impl,
                                                                         env,
                                                                         allowBreak,
                                                                         ambientPrec,
                                                                         availableWidth,
                                                                         _U.replace([["path"
                                                                                     ,fpath]
                                                                                    ,["term"
                                                                                     ,$Unison$Term.betaReduce(A2($Unison$Term.App,
                                                                                     A2($Unison$Term.Lam,
                                                                                     _v124._0._0._1._1._0,
                                                                                     _v124._0._0._1._1._1),
                                                                                     $Unison$Term.unclose(view)))]],
                                                                         cur)));
                                                                      };
                                                                      var eview = function ($) {
                                                                         return $Unison$Term.close($Unison$Term.Embed($));
                                                                      }(A5(impl,
                                                                      env,
                                                                      allowBreak,
                                                                      0,
                                                                      availableWidth,
                                                                      _U.replace([["path"
                                                                                  ,A2($Unison$Path.snoc,
                                                                                  cur.path,
                                                                                  $Unison$Path.Arg)]
                                                                                 ,["term"
                                                                                  ,_v124._1]],
                                                                      cur)));
                                                                      return A2($Maybe.map,
                                                                      g,
                                                                      eview);
                                                                   }();}
                                                              break;}
                                                         break;}
                                                    break;}
                                               break;}
                                          break;}
                                     break;}
                                break;}
                           break;
                         case "Ref":
                         switch (_v124._0._0._0.ctor)
                           {case "Builtin":
                              switch (_v124._0._0._0._0)
                                {case "View.cell": return A2(go,
                                     _v124._0._1,
                                     _v124._1);
                                   case "View.view": return A2(go,
                                     _v124._0._1,
                                     _v124._1);}
                                break;}
                           break;}
                      break;}
                 break;}
            return $Maybe.Nothing;
         }();
      }();
   });
   var impl = F5(function (env,
   allowBreak,
   ambientPrec,
   availableWidth,
   cur) {
      return function () {
         var _v141 = env.overrides(cur.path);
         switch (_v141.ctor)
         {case "Just":
            return function () {
                 var o = function (p) {
                    return _U.eq(p,
                    cur.path) ? $Maybe.Nothing : env.overrides(p);
                 };
                 return A5(impl,
                 _U.replace([["overrides",o]],
                 env),
                 allowBreak,
                 ambientPrec,
                 availableWidth,
                 _U.replace([["term",_v141._0]],
                 cur));
              }();
            case "Nothing":
            return function () {
                 var _v143 = cur.term;
                 switch (_v143.ctor)
                 {case "Ann":
                    return function () {
                         var ann = $Unison$Styles.codeText(A2($Basics._op["++"],
                         " : ",
                         A2($Unison$Type.key,
                         env,
                         _v143._1)));
                         return A3($Elmz$Layout.beside,
                         tag(cur.path),
                         A5(impl,
                         env,
                         allowBreak,
                         9,
                         availableWidth - $Graphics$Element.widthOf(ann),
                         _U.replace([["term",_v143._0]],
                         cur)),
                         A2($Elmz$Layout.embed,
                         tag(cur.path),
                         ann));
                      }();
                    case "Blank":
                    return $Elmz$Layout.embed(tag(cur.path))($Unison$Styles.blank);
                    case "Embed": return _v143._0;
                    case "Lam": return function () {
                         var cur$ = _U.replace([["term"
                                                ,_v143._1]
                                               ,["path"
                                                ,A2($Unison$Path.snoc,
                                                cur.path,
                                                $Unison$Path.Body)]],
                         cur);
                         var nested = function () {
                            switch (_v143._1.ctor)
                            {case "Lam": return true;}
                            return false;
                         }();
                         var arg = $Elmz$Layout.embed(tag(cur.path))($Unison$Styles.codeText(_v143._0.name));
                         var space$ = A2($Elmz$Layout.embed,
                         tag(cur.path),
                         space);
                         var argLayout = $Elmz$Layout.intersperseHorizontal(space$)(A2($Basics._op["++"],
                         _L.fromArray([arg]),
                         nested ? _L.fromArray([]) : _L.fromArray([A2($Elmz$Layout.embed,
                         tag(cur.path),
                         $Unison$Styles.codeText("→"))])));
                         var unbroken = A2(paren,
                         _U.cmp(ambientPrec,0) > 0,
                         cur)($Elmz$Layout.intersperseHorizontal(space$)(_L.fromArray([argLayout
                                                                                      ,A5(impl,
                                                                                      env,
                                                                                      false,
                                                                                      0,
                                                                                      0,
                                                                                      cur$)])));
                         return $Basics.not(allowBreak) || _U.cmp($Elmz$Layout.widthOf(unbroken),
                         availableWidth) < 0 ? unbroken : A2(paren,
                         _U.cmp(ambientPrec,0) > 0,
                         cur)(A3($Elmz$Layout.above,
                         tag(cur.path),
                         argLayout,
                         A2($Elmz$Layout.horizontal,
                         tag(cur.path),
                         _L.fromArray([space$
                                      ,space$
                                      ,A5(impl,
                                      env,
                                      true,
                                      0,
                                      availableWidth - indentWidth,
                                      cur$)]))));
                      }();
                    case "Lit":
                    switch (_v143._0.ctor)
                      {case "Number":
                         return $Elmz$Layout.embed(tag(cur.path))($Unison$Styles.numericLiteral($Basics.toString(_v143._0._0)));
                         case "Text":
                         return $Elmz$Layout.embed(tag(cur.path))($Unison$Styles.stringLiteral(A2($Basics._op["++"],
                           "\"",
                           A2($Basics._op["++"],
                           _v143._0._0,
                           "\""))));}
                      break;
                    case "Ref":
                    return $Elmz$Layout.embed(tag(cur.path))($Unison$Styles.codeText(A2($Unison$Metadata.firstName,
                      $Unison$Reference.toKey(_v143._0),
                      env.metadata(_v143._0))));
                    case "Var":
                    return $Elmz$Layout.embed(tag(cur.path))($Unison$Styles.codeText(_v143._0.name));}
                 return function () {
                    var _v157 = {ctor: "_Tuple2"
                                ,_0: $Maybe.withDefault(true)(A2($Maybe.map,
                                function (p) {
                                   return $Basics.not(A2($Unison$Path.startsWith,
                                   cur.path,
                                   p));
                                },
                                env.raw))
                                ,_1: A5(builtins,
                                env,
                                allowBreak,
                                ambientPrec,
                                availableWidth,
                                cur)};
                    switch (_v157.ctor)
                    {case "_Tuple2":
                       switch (_v157._0)
                         {case true:
                            switch (_v157._1.ctor)
                              {case "Just":
                                 return _v157._1._0;}
                              break;}
                         break;}
                    return function () {
                       var space$ = A2($Elmz$Layout.embed,
                       tag(cur.path),
                       space);
                       return function () {
                          var _v161 = A2($break,
                          env,
                          cur);
                          switch (_v161.ctor)
                          {case "Bracketed":
                             return function () {
                                  var unbroken = A3($Unison$Styles.cells,
                                  tag(cur.path),
                                  $Unison$Styles.codeText("[]"),
                                  A2($List.map,
                                  A4(impl,env,false,0,0),
                                  _v161._0));
                                  return $Basics.not(allowBreak) || (_U.cmp($Elmz$Layout.widthOf(unbroken),
                                  availableWidth) < 0 || _U.cmp($List.length(_v161._0),
                                  2) < 0) ? unbroken : A3($Unison$Styles.verticalCells,
                                  tag(cur.path),
                                  $Unison$Styles.codeText("[]"),
                                  A2($List.map,
                                  A4(impl,
                                  env,
                                  true,
                                  0,
                                  availableWidth - 4),
                                  _v161._0));
                               }();
                             case "Operators":
                             return function () {
                                  var rprec = _v161._0 ? 1 + _v161._1 : _v161._1;
                                  var bf = F2(function (_v169,l) {
                                     return function () {
                                        switch (_v169.ctor)
                                        {case "_Tuple2":
                                           return function () {
                                                var op$ = A5(impl,
                                                env,
                                                false,
                                                10,
                                                0,
                                                _v169._0);
                                                var remWidth = availableWidth - $Elmz$Layout.widthOf(op$) - $Elmz$Layout.widthOf(space$);
                                                return A2($Elmz$Layout.above,
                                                tag(cur.path),
                                                l)(A2($Elmz$Layout.intersperseHorizontal,
                                                space$,
                                                _L.fromArray([op$
                                                             ,A5(impl,
                                                             env,
                                                             true,
                                                             rprec,
                                                             remWidth,
                                                             _v169._1)])));
                                             }();}
                                        _U.badCase($moduleName,
                                        "between lines 186 and 189");
                                     }();
                                  });
                                  var lprec = _v161._0 ? _v161._1 : 1 + _v161._1;
                                  var f = F2(function (_v173,l) {
                                     return function () {
                                        switch (_v173.ctor)
                                        {case "_Tuple2":
                                           return A2($Elmz$Layout.intersperseHorizontal,
                                             space$,
                                             _L.fromArray([l
                                                          ,A5(impl,
                                                          env,
                                                          false,
                                                          10,
                                                          0,
                                                          _v173._0)
                                                          ,A5(impl,
                                                          env,
                                                          false,
                                                          rprec,
                                                          0,
                                                          _v173._1)]));}
                                        _U.badCase($moduleName,
                                        "on line 180, column 32 to 118");
                                     }();
                                  });
                                  var unbroken = A2(paren,
                                  _U.cmp(ambientPrec,9) > 0,
                                  cur)(A3($List.foldl,
                                  f,
                                  A5(impl,
                                  env,
                                  false,
                                  lprec,
                                  0,
                                  _v161._2),
                                  _v161._3));
                                  return $Basics.not(allowBreak) || _U.cmp($Elmz$Layout.widthOf(unbroken),
                                  availableWidth) < 0 ? unbroken : A2(paren,
                                  _U.cmp(ambientPrec,9) > 0,
                                  cur)(A3($List.foldl,
                                  bf,
                                  A5(impl,
                                  env,
                                  true,
                                  lprec,
                                  availableWidth - indentWidth,
                                  _v161._2),
                                  _v161._3));
                               }();
                             case "Prefix":
                             return function () {
                                  var f$ = A5(impl,
                                  env,
                                  false,
                                  9,
                                  availableWidth,
                                  _v161._0);
                                  var lines = A2($List._op["::"],
                                  f$,
                                  A2($List.map,
                                  A4(impl,env,false,10,0),
                                  _v161._1));
                                  var unbroken = A2(paren,
                                  _U.cmp(ambientPrec,9) > 0,
                                  cur)(A2($Elmz$Layout.intersperseHorizontal,
                                  space$,
                                  lines));
                                  return $Basics.not(allowBreak) || _U.cmp($Elmz$Layout.widthOf(unbroken),
                                  availableWidth) < 0 ? unbroken : function () {
                                     var args$ = $Elmz$Layout.vertical(tag(cur.path))(A2($List.map,
                                     A4(impl,
                                     env,
                                     true,
                                     10,
                                     availableWidth - $Elmz$Layout.widthOf(f$) - $Elmz$Layout.widthOf(space$)),
                                     _v161._1));
                                     return A2(paren,
                                     _U.cmp(ambientPrec,9) > 0,
                                     cur)(A2($Elmz$Layout.intersperseHorizontal,
                                     space$,
                                     _L.fromArray([f$,args$])));
                                  }();
                               }();}
                          _U.badCase($moduleName,
                          "between lines 167 and 202");
                       }();
                    }();
                 }();
              }();}
         _U.badCase($moduleName,
         "between lines 122 and 202");
      }();
   });
   var layout = F2(function (expr,
   env) {
      return A5(impl,
      env,
      true,
      0,
      env.availableWidth,
      {_: {}
      ,path: _L.fromArray([])
      ,term: expr});
   });
   var layout$ = F2(function (env,
   cur) {
      return A5(impl,
      env,
      true,
      0,
      env.availableWidth,
      cur);
   });
   var todo = todo;
   var key = F2(function (env,
   cur) {
      return function () {
         var _v177 = cur.term;
         switch (_v177.ctor)
         {case "Ann": return A2(key,
              env,
              _U.replace([["term",_v177._0]],
              cur));
            case "App":
            return A2($Basics._op["++"],
              A2(key,
              env,
              _U.replace([["path"
                          ,A2($Unison$Path.snoc,
                          cur.path,
                          $Unison$Path.Fn)]
                         ,["term",_v177._0]],
              cur)),
              A2(key,
              env,
              _U.replace([["path"
                          ,A2($Unison$Path.snoc,
                          cur.path,
                          $Unison$Path.Arg)]
                         ,["term",_v177._1]],
              cur)));
            case "Blank": return "_";
            case "Lam":
            return A2($Basics._op["++"],
              _v177._0.name,
              A2($Basics._op["++"],
              " -> ",
              A2(key,
              env,
              {_: {}
              ,path: A2($Unison$Path.snoc,
              cur.path,
              $Unison$Path.Body)
              ,term: _v177._1})));
            case "Lit":
            switch (_v177._0.ctor)
              {case "Distance":
                 return $Basics.toString(_v177._0._0);
                 case "Number":
                 return $Basics.toString(_v177._0._0);
                 case "Text":
                 return $Basics.toString(_v177._0._0);}
              break;
            case "Ref":
            return A2($Unison$Metadata.firstName,
              "anonymous",
              env.metadata(_v177._0));
            case "Var":
            return _v177._0.name;
            case "Vector":
            return function () {
                 var ki = F2(function (i,
                 term) {
                    return A2(key,
                    env,
                    _U.replace([["path"
                                ,A2($Unison$Path.snoc,
                                cur.path,
                                $Unison$Path.Index(i))]
                               ,["term",term]],
                    cur));
                 });
                 return A2($Basics._op["++"],
                 "[",
                 A2($Basics._op["++"],
                 A2($String.join,
                 ",",
                 $Array.toList(A2($Array.indexedMap,
                 ki,
                 _v177._0))),
                 "]"));
              }();}
         _U.badCase($moduleName,
         "between lines 65 and 80");
      }();
   });
   var literalKey = function (e) {
      return function () {
         switch (e.ctor)
         {case "Blank":
            return $Maybe.Just("_");
            case "Lit": switch (e._0.ctor)
              {case "Distance":
                 return $Maybe.Just($Basics.toString(e._0._0));
                 case "Number":
                 return $Maybe.Just($Basics.toString(e._0._0));
                 case "Text":
                 return $Maybe.Just($Basics.toString(e._0._0));}
              break;}
         return $Maybe.Nothing;
      }();
   };
   var Cur = F2(function (a,b) {
      return {_: {}
             ,path: a
             ,term: b};
   });
   var env0 = {_: {}
              ,availableWidth: 1024
              ,metadata: $Unison$Metadata.defaultMetadata
              ,overrides: $Basics.always($Maybe.Nothing)
              ,raw: $Maybe.Nothing};
   var Env = F4(function (a,
   b,
   c,
   d) {
      return {_: {}
             ,availableWidth: a
             ,metadata: b
             ,overrides: c
             ,raw: d};
   });
   var l0 = {_: {}
            ,path: _L.fromArray([])
            ,selectable: false};
   var L = F2(function (a,b) {
      return {_: {}
             ,path: a
             ,selectable: b};
   });
   _elm.Unison.View.values = {_op: _op
                             ,env0: env0
                             ,key: key
                             ,l0: l0
                             ,layout: layout
                             ,layout$: layout$
                             ,literalKey: literalKey
                             ,reactivePaths: reactivePaths
                             ,Env: Env
                             ,L: L};
   return _elm.Unison.View.values;
};
Elm.Window = Elm.Window || {};
Elm.Window.make = function (_elm) {
   "use strict";
   _elm.Window = _elm.Window || {};
   if (_elm.Window.values)
   return _elm.Window.values;
   var _op = {},
   _N = Elm.Native,
   _U = _N.Utils.make(_elm),
   _L = _N.List.make(_elm),
   $moduleName = "Window",
   $Basics = Elm.Basics.make(_elm),
   $Native$Window = Elm.Native.Window.make(_elm),
   $Signal = Elm.Signal.make(_elm);
   var dimensions = $Native$Window.dimensions;
   var width = A2($Signal.map,
   $Basics.fst,
   dimensions);
   var height = A2($Signal.map,
   $Basics.snd,
   dimensions);
   _elm.Window.values = {_op: _op
                        ,dimensions: dimensions
                        ,width: width
                        ,height: height};
   return _elm.Window.values;
};
