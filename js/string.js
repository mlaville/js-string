/**
 * string.js
 */


var textContentById = function(strId, val) {
  var elmt = document.getElementById(strId);
  
  return (val || val == '') ? elmt.textContent = val : elmt.textContent;
}

var calc = {
  charAt: function() {
    var rt =  textContentById('charAt').charAt( +textContentById('charat-index') );

    return textContentById('char', rt );
  },
  charCodeAt: function() {
    var rt = textContentById('charCodeAt').charCodeAt( +textContentById('charcode-index') );
    
    return textContentById('charcode', rt || 'NaN');
  },
  concat : function() {
    return textContentById('concated', textContentById('concat').concat(textContentById('concat-arg')) );
  },
  endsWith : function() {
    return textContentById('ends', textContentById('endsWith').endsWith(textContentById('endswith-arg')) ? 'true' : 'false' );
  },
  includes : function() {
    return textContentById('inclus', textContentById('includes').includes(textContentById('includes-arg')) ? 'true' : 'false' );
  },
  match : function() {
    return textContentById('matched', textContentById('match').match( textContentById('regex-match') ) );
  },
  repeat : function() {
    return textContentById('repeated', textContentById('repeat').repeat( +textContentById('occurence-repeat') ) );
  },
  indexOf : function() {
    return textContentById('index', textContentById('indexOf').indexOf(textContentById('indexof-arg')) );
  },
  lastIndexOf : function() {
    return textContentById('lastindex', textContentById('lastIndexOf').lastIndexOf(textContentById('lastindexof-arg')) );
  },
  localeCompare : function() {
    return textContentById('localecomparaison', textContentById('localeCompare').localeCompare( textContentById('localecompare-arg'), textContentById('localecompare-option') ) );
  },
  normalize : function() {
    return textContentById('normalized', textContentById('normalize').localeCompare( textContentById('normalize-form') ) );
  },
  padEnd : function() {
    var origine = new String( textContentById('padEnd') );
    
    return textContentById('padend-result', origine.padEnd( +textContentById('padend-length'), textContentById('padend-motif') ) );
  },
  padStart : function() {
    return textContentById('padstart-result', textContentById('padStart').padStart( +textContentById('padstart-length'), textContentById('padstart-motif') ) );
  },
  replace : function() {
    var motif = new RegExp( textContentById('regex-replace'), textContentById('replace-commut') );

    textContentById('replaced', textContentById('replace').replace( motif, textContentById('remplacement') ) );
  },
  search : function() {
    var motif = new RegExp( textContentById('regex-search'), textContentById('search-commut') );

    textContentById('finded', textContentById('search').search(motif) );
  },
  slice : function() {
    textContentById('sliced', textContentById('slice').slice( +textContentById('slice-start'), +textContentById('slice-end') ) );
  },
  split : function() {
    var motif = new RegExp( textContentById('regex-split'), textContentById('split-commut') );
    
    textContentById('splited', textContentById('split').split( motif ).map(function(str) { return '"' + str + '"' }) );
  },
  startsWith : function() {
    return textContentById('started', textContentById('startsWith').startsWith(textContentById('startswith-arg')) ? 'true' : 'false' );
  },
  substr : function() {
    return textContentById('substred', textContentById('substr').substr( +textContentById('substr-index'), +textContentById('substr-len') ) );
  },
  toUpperCase : function() {
    return textContentById('upperCase', textContentById('toUpperCase').toUpperCase() );
  },
  toLowerCase : function() {
    return textContentById('lowerCase', textContentById('toLowerCase').toLowerCase() );
  },
  trim : function() {
    return textContentById('trimed', textContentById('trim').trim() );
  }
  
}

//['charAt', 'charat-index']
//  .forEach( function(str) { return document.getElementById(str).addEventListener( 'keyup', calc.charAt ) });
document.getElementById('charAt').addEventListener( 'keyup', calc.charAt );
document.getElementById('charat-index').addEventListener( 'keyup', calc.charAt );
calc.charAt();

document.getElementById('charCodeAt').addEventListener( 'keyup', calc.charCodeAt );
document.getElementById('charcode-index').addEventListener( 'keyup', calc.charCodeAt );
calc.charCodeAt();

document.getElementById('match').addEventListener( 'keyup', calc.match );
document.getElementById('regex-match').addEventListener( 'keyup', calc.match );
document.getElementById('replace-commut').addEventListener( 'keyup', calc.match );
calc.match();


document.getElementById('repeat').addEventListener( 'keyup', calc.repeat);
document.getElementById('occurence-repeat').addEventListener( 'keyup', calc.repeat);
calc.repeat();

document.getElementById('concat').addEventListener( 'keyup', calc.concat);
document.getElementById('concat-arg').addEventListener( 'keyup', calc.concat);
calc.concat();

document.getElementById('endsWith').addEventListener( 'keyup', calc.endsWith);
document.getElementById('endswith-arg').addEventListener( 'keyup', calc.endsWith);
calc.endsWith();

document.getElementById('includes').addEventListener( 'keyup', calc.includes);
document.getElementById('includes-arg').addEventListener( 'keyup', calc.includes);
calc.includes();

document.getElementById('indexOf').addEventListener( 'keyup', calc.indexOf);
document.getElementById('indexof-arg').addEventListener( 'keyup', calc.indexOf);
calc.indexOf();

document.getElementById('lastIndexOf').addEventListener( 'keyup', calc.lastIndexOf);
document.getElementById('lastindexof-arg').addEventListener( 'keyup', calc.lastIndexOf);
calc.lastIndexOf();

document.getElementById('localeCompare').addEventListener( 'keyup', calc.localeCompare);
document.getElementById('localecompare-arg').addEventListener( 'keyup', calc.localeCompare);
document.getElementById('localecompare-option').addEventListener( 'keyup', calc.localeCompare);
calc.localeCompare();

document.getElementById('normalize').addEventListener( 'keyup', calc.localeCompare);
document.getElementById('normalize-form').addEventListener( 'keyup', calc.localeCompare);
calc.normalize();

document.getElementById('padEnd').addEventListener( 'keyup', calc.padEnd);
document.getElementById('padend-length').addEventListener( 'keyup', calc.padEnd);
document.getElementById('padend-motif').addEventListener( 'keyup', calc.padEnd);
calc.padEnd();

document.getElementById('padStart').addEventListener( 'keyup', calc.padEnd);
document.getElementById('padstart-length').addEventListener( 'keyup', calc.padStart);
document.getElementById('padstart-motif').addEventListener( 'keyup', calc.padStart);
calc.padStart();

document.getElementById('replace').addEventListener( 'keyup', calc.replace);
document.getElementById('regex-replace').addEventListener( 'keyup', calc.replace);
document.getElementById('replace-commut').addEventListener( 'keyup', calc.replace);
document.getElementById('remplacement').addEventListener( 'keyup', calc.replace);
calc.replace();

document.getElementById('search').addEventListener( 'keyup', calc.search);
document.getElementById('regex-search').addEventListener( 'keyup', calc.search);
document.getElementById('search-commut').addEventListener( 'keyup', calc.search);
document.getElementById('remplacement').addEventListener( 'keyup', calc.search);
calc.search();

document.getElementById('slice').addEventListener( 'keyup', calc.slice);
document.getElementById('slice-start').addEventListener( 'keyup', calc.slice);
document.getElementById('slice-end').addEventListener( 'keyup', calc.slice);
calc.slice();

document.getElementById('split').addEventListener( 'keyup', calc.split);
document.getElementById('regex-split').addEventListener( 'keyup', calc.split);
document.getElementById('split-commut').addEventListener( 'keyup', calc.split);
calc.split();

document.getElementById('startsWith').addEventListener( 'keyup', calc.startsWith);
document.getElementById('startswith-arg').addEventListener( 'keyup', calc.startsWith);
calc.startsWith();

//document.getElementById('substr').addEventListener( 'keyup', calc.substr);
//document.getElementById('substr-index').addEventListener( 'keyup', calc.substr);
//document.getElementById('substr-len').addEventListener( 'keyup', calc.substr);
['substr', 'substr-index', 'substr-len'].forEach(function(idStr) { return document.getElementById(idStr).addEventListener( 'keyup', calc.substr)})
calc.substr();

//toUpperCase
document.getElementById('toUpperCase').addEventListener( 'keyup', calc.toUpperCase );
calc.toUpperCase();

//toLowerCase
document.getElementById('toLowerCase').addEventListener( 'keyup', calc.toLowerCase );
calc.toLowerCase();

//trim
document.getElementById('trim').addEventListener( 'keyup', calc.trim );
calc.trim();


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
