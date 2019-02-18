//Output:
//
//Input:
//
//Constrains/Conditions:
/*

*/
//Examples/Edge Cases:
/*

*/
//  Start of Code-                                                 ===

parseQueryString = (url) => {
  if (!url.split('').includes('?')) {
    return 'undefined';
  }
  let urlArr = url.split('?');
  urlArr = urlArr[1].split('&');
  let output = urlArr.map(el => {
    el = el.split('=');
    el[1] = decodeURIComponent(el[1]);
    return el;
  });
  return output;
};

// -End of Code                                                    ===

// given tests:

// const url = 'http://example.com?a=hello&b=99'; // -> [ [ "a", "hello" ], [ "b", "99" ] ]
// const url = 'http://example.com?msg=hello%20world'; // -> [ [ "msg", "hello world" ] ]
// const url = 'http://example.com'; // -> undefined
const url = 'http://example.com/books/search?title=Etiquette%20%26%20Espionage'; // -> undefined
var testInputs = [
  ['http://example.com'], //-> undefined
  ['http://example.com/books/search?title=Etiquette%20%26%20Espionage'],
  ['http://example.com?a=hello\u0026b=99'],
  ['http://example.com?msg=hello%20world'],
  ['http://www.amazon.com/dp/1118907442?s=books\u0026ie=UTF8\u0026sr=1-1']
];

// console.log(testInputs[0][0].split('').includes('?'));
// console.log(testInputs[1]);

console.log(parseQueryString(url));