/**
 * polyfill.js
 *
 * String functions polyfill
 */

var polyfill = {
  repeat: String.prototype.repeat
}

/**
 * String.prototype.repeat()
 *
 * origine : https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/String/repeat
 */
if (!String.prototype.repeat) {
  String.prototype.repeat = function (count) {
    "use strict";
    if (this == null)
      throw new TypeError("ne peut convertir " + this + " en objet");
    var str = "" + this;
    count = +count;
    if (count != count)
      count = 0;
    if (count < 0)
      throw new RangeError("le nombre de répétitions doit être positif");
    if (count == Infinity)
      throw new RangeError("le nombre de répétitions doit être inférieur à l'infini");
    count = Math.floor(count);
    if (str.length == 0 || count == 0)
      return "";
    // En vérifiant que la longueur résultant est un entier sur 31-bit
    // cela permet d'optimiser l'opération.
    // La plupart des navigateurs (août 2014) ne peuvent gérer des
    // chaînes de 1 << 28 caractères ou plus. Ainsi :
    if (str.length * count >= 1 << 28)
      throw new RangeError("le nombre de répétitions ne doit pas dépasser la taille de chaîne maximale");
    var rpt = "";
    for (var i = 0; i < count; i++) {
      rpt += str;
    }
    return rpt;
  }
}

/**
 * String.prototype.padEnd()
 *
 * origine :
 * https://github.com/uxitten/polyfill/blob/master/string.polyfill.js
 * https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/String/repeat
 */
  String.prototype.padEnd = String.prototype.padEnd || function (count, str) {
    return this + (str || ' ').repeat(count).substr(0,count);
  };

/**
 * String.prototype.padStart()
 *
 * origine :
 * https://github.com/uxitten/polyfill/blob/master/string.polyfill.js
 * https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/String/repeat
 */
if (!String.prototype.padStart) {
  String.prototype.padStart = function (count, str) {
    return (str || ' ').repeat(count - this.length).substr(0,count) + this;
  };
}

/**
 * String.prototype.endsWith()
 *
 * origine : 
 * https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/String/endsWith
 */
if (!String.prototype.endsWith) {
  String.prototype.endsWith = function(searchString, position) {
    var subjectString = this.toString();
    if (typeof position !== 'number' || !isFinite(position) || Math.floor(position) !== position || position > subjectString.length) {
      position = subjectString.length;
    }
    position -= searchString.length;
    var lastIndex = subjectString.lastIndexOf(searchString, position);
    return lastIndex !== -1 && lastIndex === position;
  };
}

/**
 * String.prototype.startsWith()
 *
 * origine : 
 * https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/String/startsWith
 */
if (!String.prototype.startsWith) {
  String.prototype.startsWith = function (searchString, position) {
      position = position || 0;
      return this.substr(position, searchString.length) === searchString;
  };
}
/**
 * String.prototype.includes()
 *
 * origine : 
 * https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/String/includes
 */
if ( !String.prototype.includes ) {
  String.prototype.includes = function(search, start) {
    'use strict';
    if (typeof start !== 'number') {
      start = 0;
    } 

    if (start + search.length > this.length) {
      return false;
    } else {
      return this.indexOf(search,start) !== -1;
    }
  };
}



// Production steps of ECMA-262, Edition 6, 22.1.2.1
// Référence : https://people.mozilla.org/~jorendorff/es6-draft.html#sec-array.from
if (!Array.from) {
  Array.from = (function () {
    var toStr = Object.prototype.toString;
    var isCallable = function (fn) { 
      return typeof fn === 'function' || toStr.call(fn) === '[object Function]';
    };
    var toInteger = function (value) { 
      var number = Number(value); 
      if (isNaN(number)) { return 0; }
      if (number === 0 || !isFinite(number)) { return number; }
      return (number > 0 ? 1 : -1) * Math.floor(Math.abs(number)); 
    };
    var maxSafeInteger = Math.pow(2, 53) - 1;
    var toLength = function (value) { 
      var len = toInteger(value);
      return Math.min(Math.max(len, 0), maxSafeInteger);
    }; 
  
    // La propriété length de la méthode vaut 1.
    return function from(arrayLike/*, mapFn, thisArg */) { 
      // 1. Soit C, la valeur this
      var C = this;
      
      // 2. Soit items le ToObject(arrayLike).
      var items = Object(arrayLike); 
      
      // 3. ReturnIfAbrupt(items).
      if (arrayLike == null) { 
        throw new TypeError("Array.from doit utiliser un objet semblable à un tableau - null ou undefined ne peuvent pas être utilisés");
      }
    
      // 4. Si mapfn est undefined, le mapping sera false.
      var mapFn = arguments.length > 1 ? arguments[1] : void undefined;
      var T;
      if (typeof mapFn !== 'undefined') {  
        // 5. sinon      
        // 5. a. si IsCallable(mapfn) est false, on lève une TypeError.
        if (!isCallable(mapFn)) { 
          throw new TypeError('Array.from: lorsqu il est utilisé le deuxième argument doit être une fonction'); 
        }
     
        // 5. b. si thisArg a été fourni, T sera thisArg ; sinon T sera undefined.
        if (arguments.length > 2) { 
          T = arguments[2];
        }
      }
    
      // 10. Soit lenValue pour Get(items, "length").
      // 11. Soit len pour ToLength(lenValue).
      var len = toLength(items.length);  
     
      // 13. Si IsConstructor(C) vaut true, alors
      // 13. a. Soit A le résultat de l'appel à la méthode interne [[Construct]] avec une liste en argument qui contient l'élément len.
      // 14. a. Sinon, soit A le résultat de ArrayCreate(len).
      var A = isCallable(C) ? Object(new C(len)) : new Array(len);
   
      // 16. Soit k égal à 0.
      var k = 0;  // 17. On répète tant que k < len… 
      var kValue;
      while (k < len) {
        kValue = items[k]; 
        if (mapFn) {
          A[k] = typeof T === 'undefined' ? mapFn(kValue, k) : mapFn.call(T, kValue, k); 
        } else {
          A[k] = kValue;
        }
        k += 1;
      }
      // 18. Soit putStatus égal à Put(A, "length", len, true).
      A.length = len;  // 20. On renvoie A.
      return A;
    };
  }());
}