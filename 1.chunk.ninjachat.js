webpackJsonp_NinjaChat([1],{273:function(e,r,t){"use strict";function n(e){this.message=e}function o(e){var r=e.replace(/-/g,"+").replace(/_/g,"/");switch(r.length%4){case 0:break;case 2:r+="==";break;case 3:r+="=";break;default:throw"Illegal base64url string!"}try{return function(e){return decodeURIComponent(c(e).replace(/(.)/g,function(e,r){var t=r.charCodeAt(0).toString(16).toUpperCase();return t.length<2&&(t="0"+t),"%"+t}))}(r)}catch(e){return c(r)}}function a(e){this.message=e}function i(e,r){if("string"!=typeof e)throw new a("Invalid token specified");var t=!0===(r=r||{}).header?0:1;try{return JSON.parse(o(e.split(".")[t]))}catch(e){throw new a("Invalid token specified: "+e.message)}}Object.defineProperty(r,"__esModule",{value:!0}),t.d(r,"InvalidTokenError",function(){return a}),n.prototype=new Error,n.prototype.name="InvalidCharacterError";var c="undefined"!=typeof window&&window.atob&&window.atob.bind(window)||function(e){var r=String(e).replace(/=+$/,"");if(r.length%4==1)throw new n("'atob' failed: The string to be decoded is not correctly encoded.");for(var t,o,a=0,i=0,c="";o=r.charAt(i++);~o&&(t=a%4?64*t+o:o,a++%4)?c+=String.fromCharCode(255&t>>(-2*a&6)):0)o="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(o);return c};a.prototype=new Error,a.prototype.name="InvalidTokenError",r.default=i}});