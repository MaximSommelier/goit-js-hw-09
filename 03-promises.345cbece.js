!function(){function e(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},t={},i=n.parcelRequired7c6;null==i&&((i=function(e){if(e in o)return o[e].exports;if(e in t){var n=t[e];delete t[e];var i={id:e,exports:{}};return o[e]=i,n.call(i.exports,i,i.exports),i.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,n){t[e]=n},n.parcelRequired7c6=i);var r=i("6JpON"),l=document.querySelector('input[name="delay"]'),u=document.querySelector('input[name="step"]'),s=document.querySelector('input[name="amount"]');document.querySelector(".form").addEventListener("submit",(function(n){n.preventDefault(),setTimeout((function(){new Promise((function(n,o){Math.random()>.3?e(r).Notify.success("✅ Fulfilled promise ${position} in ${delay}ms"):e(r).Notify.warning("❌ Rejected promise ${position} in ${delay}ms")})).then((function(n){n.position,n.delay,e(r).Notify.success("✅ Fulfilled promise ${position} in ${delay}ms")})).catch((function(n){n.position,n.delay,e(r).Notify.warning("❌ Rejected promise ${position} in ${delay}ms")})),timerId=setInterval((function(){s!==d&&(console.log("Interval"),d+=1)}),u),console.log("Timeout")}),l)}));var d=0}();
//# sourceMappingURL=03-promises.345cbece.js.map
