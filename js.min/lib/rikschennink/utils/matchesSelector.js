define([],function(){var t=null,e=document?document.body:null;return!e||e.matches?t="matches":e.webkitMatchesSelector?t="webkitMatchesSelector":e.mozMatchesSelector?t="mozMatchesSelector":e.msMatchesSelector?t="msMatchesSelector":e.oMatchesSelector&&(t="oMatchesSelector"),t?function(e,n){return e[t](n)}:function(t,e){for(var n=(t.parentNode||document).querySelectorAll(e)||[],i=n.length;i--;)if(n[i]==t)return!0;return!1}});