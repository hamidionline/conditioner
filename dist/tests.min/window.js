define(["Conditioner"],function(t){"use strict";var e=t.Test.inherit(),n=e.prototype;return n.handleEvent=function(){this.assert()},n.arrange=function(){window.addEventListener("resize",this,!1)},n._test=function(t){var e=window.innerWidth||document.documentElement.clientWidth,n=t.split(":"),i=n[0],s=parseInt(n[1],10);switch(i){case"min-width":return e>=s;case"max-width":return s>=e}return!0},e});