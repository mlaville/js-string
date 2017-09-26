/**
 * string.js
 */


var textContentById = function(strId, val) {
  var elmt = document.getElementById(strId);
  
  return (val || val == '') ? elmt.textContent = val : elmt.textContent;
}

var calc = {
  capitalize: function() {
    return textContentById('capitalized', textContentById('capitalize').capitalize( ) );
  },
  latinize: function() {
    return textContentById('latinized', textContentById('latinize').latinize( ) );
  },
  camelcase: function() {
    return textContentById('camelcased', textContentById('camelcase').camelcase( ) );
  },
  decamelcase: function() {
    return textContentById('decamelcased', textContentById('decamelcase').decamelcase( textContentById('decamelcase-sep') ) );
  },
  parseSearch: function() {
    return textContentById('parsesearched', JSON.stringify( textContentById('parseSearch').parseSearch( textContentById('decamelcase-sep') ) ) );
  }
}

//['capitalize'].forEach( function(str) { return document.getElementById(str).addEventListener( 'keyup', calc.capitalize ) });
document.getElementById('capitalize').addEventListener( 'keyup', calc.capitalize );
calc.capitalize();

document.getElementById('latinize').addEventListener( 'keyup', calc.latinize );
calc.latinize();

document.getElementById('camelcase').addEventListener( 'keyup', calc.camelcase );
calc.camelcase();

document.getElementById('decamelcase').addEventListener( 'keyup', calc.decamelcase );
document.getElementById('decamelcase-sep').addEventListener( 'keyup', calc.decamelcase );
calc.decamelcase();

document.getElementById('parseSearch').addEventListener( 'keyup', calc.parseSearch );
calc.parseSearch();


Array.from( document.querySelectorAll('[contenteditable]') ).forEach( function(elmt) {
  elmt.addEventListener('keydown', function (event) {
    nextEditElement = function(elt) {
      var shift = event.shiftKey,
        editables = elt.parentNode.parentNode.querySelectorAll();
      
    }
  
    if(event.key == 'Enter') {
      event.preventDefault();
      elmt.blur();
    }
  
    if(event.key == 'Tab') {
      event.preventDefault();
      elmt.blur();
    }
  });
  elmt.addEventListener('blur', function (event) {
      elmt.textContent = elmt.textContent;
  });
});
