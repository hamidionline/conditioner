window.addEventListener&&function(){if(!window.matchMedia("(min-width:0)").addListener){var t=window.matchMedia;window.matchMedia=function(e){var n,i=t(e),o=[],r=!1,s=function(){var n=t(e),s=n.matches&&!r,u=!n.matches&&r;if(s||u)for(var l=0,a=o.length;a>l;l++)o[l].call(i,n);r=n.matches};return i.addListener=function(t){o.push(t),n||(n=setInterval(s,1e3))},i.removeListener=function(t){for(var e=0,i=o.length;i>e;e++)o[e]===t&&o.splice(e,1);!o.length&&n&&clearInterval(n)},i}}}();