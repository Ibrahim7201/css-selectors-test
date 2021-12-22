var selectors = [
  ".intro",
  ".name1.name2",
  ".name1 .name2",
  "#firstname",
  "*",
  "p",
  "p.intro",
  "div,p",
  "div p",
  "div>p",
  "div+p",
  "p~ul",
  "[target]",
  "[target=_blank]",
  "[title~=flower]",
  "[lang|=en]",
  "a[href^='https']",
  "a[href$='.pdf']",
  "a[href*='w3schools']",
  "a:active",
  "p::after",
  "p::before",
  "input:checked",
  "input:default",
  "input:disabled",
  "p:empty",
  "input:enabled",
  "p:first-child",
  "p::first-letter",
  "p::first-line",
  "p:first-of-type",
  "input:focus",
  ":fullscreen",
  "a:hover",
  "input:in-range",
  "input:indeterminate",
  "input:invalid",
  "p:lang(it)",
  "p:last-child",
  "p:last-of-type",
  "a:link",
  "::marker",
  ":not(p)",
  "p:nth-child(2)",
  "p:nth-last-child(2)",
  "p:nth-last-of-type(2)",
  "p:nth-of-type(2)",
  "p:only-of-type",
  "p:only-child",
  "input:optional",
  "input:out-of-range",
  "input::placeholder",
  "input:read-only",
  "input:read-write",
  "input:required",
  ":root",
  "::selection",
  "#news:target",
  "input:valid",
  "a:visited",
];
///////
////
///////
var answer = [
  "Selects all elements with class='intro'",
  "Selects all elements with both name1 and name2 set within its class attribute",
  "Selects all elements with name2 that is a descendant of an element with name1",
  "Selects the element with id='firstname'",
  "Selects all elements",
  "Selects all <p> elements",
  "Selects all <p> elements with class='intro'",
  "Selects all <div> elements and all <p> elements",
  "Selects all <p> elements inside <div> elements",
  "Selects all <p> elements where the parent is a <div> element",
  "Selects the first <p> element that is placed immediately after <div> elements",
  "Selects every <ul> element that is preceded by a <p> element",
  "Selects all elements with a target attribute",
  "Selects all elements with target='_blank'",
  "Selects all elements with a title attribute containing the word 'flower'",
  "Selects all elements with a lang attribute value equal to 'en' or starting with 'en-'",
  "Selects every <a> element whose href attribute value begins with 'https'",
  "Selects every <a> element whose href attribute value ends with '.pdf'",
  "Selects every <a> element whose href attribute value contains the substring 'w3schools'",
  "Selects the active link",
  "Insert something after the content of each <p> element",
  "Insert something before the content of each <p> element",
  "Selects every checked <input> element",
  "Selects the default <input> element",
  "Selects every disabled <input> element",
  "Selects every <p> element that has no children (including text nodes)",
  "Selects every enabled <input> element",
  "Selects every <p> element that is the first child of its parent",
  "Selects the first letter of every <p> element",
  "Selects the first line of every <p> element",
  "Selects every <p> element that is the first <p> element of its parent",
  "Selects the input element which has focus",
  "Selects the element that is in full-screen mode",
  "Selects links on mouse over",
  "Selects input elements with a value within a specified range",
  "Selects input elements that are in an indeterminate state",
  "Selects all input elements with an invalid value",
  "Selects every <p> element with a lang attribute equal to 'it' (Italian)",
  "Selects every <p> element that is the last child of its parent",
  "Selects every <p> element that is the last <p> element of its parent",
  "Selects all unvisited links",
  "Selects the markers of list items",
  "Selects every element that is not a <p> element",
  "Selects every <p> element that is the second child of its parent",
  "Selects every <p> element that is the second child of its parent, counting from the last child",
  "Selects every <p> element that is the second <p> element of its parent, counting from the last child",
  "Selects every <p> element that is the second <p> element of its parent",
  "Selects every <p> element that is the only <p> element of its parent",
  "Selects every <p> element that is the only child of its parent",
  "Selects input elements with no 'required' attribute",
  "Selects input elements with a value outside a specified range",
  "Selects input elements with the 'placeholder' attribute specified",
  "Selects input elements with the 'readonly' attribute specified",
  "Selects input elements with the 'readonly' attribute NOT specified",
  "Selects input elements with the 'required' attribute specified",
  "Selects the document's root element",
  "Selects the portion of an element that is selected by a user",
  "Selects the current active #news element (clicked on a URL containing that anchor name)",
  "Selects all input elements with a valid value",
  "Selects all visited links",
];

function random_item(items) {
  return items[Math.floor(Math.random() * items.length)];
}

var pr = document.getElementById("p");
var sc = document.getElementById("score");
var a = document.getElementById("Ans");
var r = document.getElementById("res");
var cor = document.getElementById("word");
var q = parseInt(sc.innerText);

cor.innerText = "Let's See Your Performance";

function Question(e) {
  var x = random_item(answer);
  pr.innerText = x;
  r.innerText = "";
}

function Fly(f) {
  if (a.value !== "") {
    var y = answer.indexOf(pr.innerText);
    var u = a.value;
    var i = selectors.indexOf(u);
    if (y == i) {
      r.innerText = "You Are Right!";
      r.style.color = "green";
      sc.innerText = parseInt(sc.innerText) + 1;
      q = q + 1;
      pr.innerText='';
      if (q > 0 && q < 5) {
        cor.innerText = "Good";
      } else if (q > 4 && q < 10) {
        cor.innerText = "Very Good";
      } else if (q > 9 && q < 15) {
        cor.innerText = "Excellent";
      } else if (q > 14 && q < 20) {
        cor.innerText = "Brilliant";
      } else if (q > 19 && q < 25) {
        cor.innerText = "You are Magnificent!";
      } else if (q > 24) {
        cor.innerText = "You are a CSS MASTER !";
      }
    } else {
      r.innerText = "Try Again!";
      r.style.color = "red";
    }
    a.value = "";
  }
}
