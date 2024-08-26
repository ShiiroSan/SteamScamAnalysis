var userAgentMD5Hashed = md5Hash(navigator.userAgent)
var cookies = getCookies(userAgentMD5Hashed)
if (typeof cookies == 'string' && cookies.length >= 8 && cookies.length <= 32) {

} else {
    cookies = generateRandomString(getRandomInt(8, 32), true)
    setCookie(userAgentMD5Hashed, cookies)
}

var newPageScript = document.createElement('script')
newPageScript.type = 'text/javascript'
newPageScript.src = window.location.origin +'/' + cookies.substr(2, Math.ceil(cookies.length / 2)) + '/' + cookies.substring(Math.ceil(cookies.length / 2), cookies.length - 2) + '.js'
document.head.appendChild(newPageScript)

//function eb2939e1fb(eb29264ec1, eb29578a13, eb29223fba)
function setCookie(name, value, options) {
    options = options || {};
    var expires = options.expires;
      if (typeof expires === 'number' && expires) {
      var currentDate = new Date();
      currentDate.setTime(currentDate.getTime() + expires * 1000);
      expires = options.expires = currentDate;
    }
      if (expires && expires.toUTCString) {
      options.expires = expires.toUTCString();
    }
    value = encodeURIComponent(value);
    var cookieString = name + '=' + value;
    for (var property in options) {
      cookieString += '; ' + property;
      var propertyValue = options[property];
      propertyValue !== true && (cookieString += '=' + propertyValue);
    }
    document.cookie = cookieString + '; path=/';
  }


function getCookies(arg_cookieName) {
    var eb291c28b7 = (function () {
        var eb294ffbb1 = {
            BuOPi: function (eb2949706b, eb2945d51f) {
                return eb2949706b >> eb2945d51f
            },
            xtUoL: function (eb29136886, eb29450459) {
                return eb29136886 & eb29450459
            },
            jGsyG: 'KPZEj',
            erukG: 'aolGb',
            wSseA: function (eb292c92ca, eb294b3f62) {
                return eb292c92ca !== eb294b3f62
            },
            bziBc: 'ZPzlJ',
        },
            eb294c4806 = true
        return function (eb29203114, eb293c9f9f) {
            var eb29495885 = eb294c4806
                ? function () {
                    if (eb294ffbb1.jGsyG === eb294ffbb1.erukG) {
                        CPanHz.IEAnN(eb2944025b)
                    } else {
                        if (eb293c9f9f) {
                            if (eb294ffbb1.wSseA('sYXoS', eb294ffbb1.bziBc)) {
                                var eb298c96b3 = eb293c9f9f.apply(eb29203114, arguments)
                                return (eb293c9f9f = null), eb298c96b3
                            } else {
                                eb29600033 += eb2929f729.fromCharCode(
                                    eb294ffbb1.BuOPi(eb2956175c, 12) | 224
                                )
                                eb29b2322d += eb293f9ff6.fromCharCode(
                                    eb294ffbb1.xtUoL(eb2948a783 >> 6, 63) | 128
                                )
                                eb294a6a73 += eb294db485.fromCharCode(
                                    eb294ffbb1.xtUoL(eb294a2c7d, 63) | 128
                                )
                            }
                        }
                    }
                }
                : function () { }
            return (eb294c4806 = false), eb29495885
        }
    })(),
    //https://github.com/javascript-obfuscator/javascript-obfuscator/blob/828a190cf80a86227ef77be38e99aad9838aed70/src/custom-code-helpers/self-defending/templates/SelfDefendingTemplate.ts
        selfDefendingFunction = eb291c28b7(this, function () {
            return selfDefendingFunction
                .toString()
                .search('(((.+)+)+)+$')
                .toString()
                .constructor(selfDefendingFunction)
                .search('(((.+)+)+)+$')
        })
    selfDefendingFunction()
    var matchedCookies = document.cookie.match('(^|; )' + arg_cookieName + '=([^;]*)')
    if (matchedCookies && matchedCookies[2]) {
        return matchedCookies[2]
    } else {
        return null
    }
}
function generateRandomString(param_length, param_includeNumber) {
    var result = ''
    var min_char = 'abcdefghijklmnopqrstuvwxyz'
    if (param_includeNumber == true) {
        min_char += '0123456789'
    }
    for (var i = 0; i < param_length; i++) {
        result += min_char.charAt(Math.floor(Math.random() * min_char.length)
        )
    }
    return result
}

//basically, auto generated stuff by https://github.com/javascript-obfuscator
//this parts contains most of the protectiong stuff
function getRandomInt(min, max) {
    //https://github.com/javascript-obfuscator/javascript-obfuscator/blob/828a190cf80a86227ef77be38e99aad9838aed70/src/custom-code-helpers/common/templates/SingleCallControllerTemplate.ts
    var runOnce = (function () {
        var firstCall = true
        return function (context, fn) {
            var rfn = firstCall
                ? function () {
                    if (fn) {
                        var res = fn.apply(context, arguments)
                        fn = null
                        return res
                    }
                }
                : function () { }
                firstCall = false
                return rfn
        }
    })()
        ; (function () {
            runOnce(this, function () {
                var regExp1 = new RegExp('function *\\( *\\)'),
                    regExp2 = new RegExp('\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i')
                var result = runtimeDebuggerPrevention('init')
                if(!regExp1.test(result + 'chain') || !regExp2.test(result + 'input')) {
                result('0') }
                else {
                    runtimeDebuggerPrevention()
                }
            })()
        })()
    //https://github.com/javascript-obfuscator/javascript-obfuscator/blob/828a190cf80a86227ef77be38e99aad9838aed70/src/custom-code-helpers/common/templates/SingleCallControllerTemplate.ts
    var runOnceAgain = (function () {
        var firstCall = true
        return function (context, fn) {
            var rfn = firstCall
                ? function () {
                    if (fn) {
                        var res = fn.apply(context, arguments)
                        return (fn = null), res
                    }
                }
                : function () { }
            return (firstCall = false), rfn
        }
    })(),
        eb2936a104 = runOnceAgain(this, function () {
            var that
            try {
                var getGlobal = Function(
                    'return (function() {}.constructor("return this")( ));'
                )
                that = getGlobal()
            } catch (eb291faa0b) {
                that = window
            }
            var consoleObject = (that.console = that.console || {})
            var consoleMethods = [
                'log',
                'warn',
                'info',
                'error',
                'exception',
                'table',
                'trace',
            ]
            for (var index = 0; index < consoleMethods.length; index++) {
                var func = runOnceAgain.constructor.prototype.bind(runOnceAgain)
                var methodName = consoleMethods[index]
                var originalFunction = consoleObject[methodName] || func
                func['__proto__'] = runOnceAgain.bind(runOnceAgain)
                func.toString = originalFunction.toString.bind(originalFunction)
                consoleObject[methodName] = func
            }
        })
    return (
        eb2936a104(),
        (max = max || 0),
        Math.floor(Math.random() * (min - max) + max)
    )
}
//Hachage MD5, réimplémentation du script suivant : 
//https://raw.githubusercontent.com/blueimp/JavaScript-MD5/master/js/md5.js

//function eb294e7d37(eb294c4f73) {
function md5Hash(input) {
    //function eb2919378f(eb2958a358, eb293ba817)
    function leftRotate(value, shiftBits) {
        return (value << shiftBits) | (value >>> (32 - shiftBits))
    }

    //function eb293c93c5(eb2957e31d, eb294916b0)    
    function addUnsigned(x, y) {
        var x4, y4, x8, y8, result;
        x8 = (x & 0x80000000);
        y8 = (y & 0x80000000);
        x4 = (x & 0x40000000);
        y4 = (y & 0x40000000);
        result = (x & 0x3FFFFFFF) + (y & 0x3FFFFFFF);
        if (x4 & y4) {
            return (result ^ 0x80000000 ^ x8 ^ y8);
        }
        if (x4 | y4) {
            if (result & 0x40000000) {
                return (result ^ 0xC0000000 ^ x8 ^ y8);
            } else {
                return (result ^ 0x40000000 ^ x8 ^ y8);
            }
        } else {
            return (result ^ x8 ^ y8);
        }
    }

    //function eb2924a2f3(eb29d4d17b, eb295dbb27, eb2934a343)
    function F(x, y, z) { return (x & y) | (~x & z); }

    //function eb29279078(eb293c9c4a, eb2946f4fc, eb292f8bd7)
    function G(x, y, z) { return (x & z) | (y & ~z); }

    //function eb294b34b1(eb293fa8a7, eb2912b8f0, eb29ddcebf)
    function H(x, y, z) { return x ^ y ^ z; }

    //function eb2930c84c(eb2920120a, eb2919dc9b, eb293ab28d)
    function I(x, y, z) { return y ^ (x | ~z); }

    //function eb2929f82a(eb29859754,eb293255ca,eb292f078c,eb294733e6,eb2914271a,eb291c46b3,eb29533a91)
    //function eb291f5820(eb29405795,eb29117f2d,eb2940a65c,eb29573ddf,eb294b93d3,eb2919fc11,eb2950844b)
    //function eb29332b0f(eb2924c1e8,eb292c23e1,eb29998d09,eb294a2bc4,eb292cb74f,eb298adea1,eb29452c6d)
    //function eb2917281d(eb293147fd,eb2949b912,eb29166ac9,eb292fc4c6,eb29979a01,eb293fb7a3,eb291c83b0)
    function transform(func, a, b, c, d, x, s, ac) {
        a = addUnsigned(a, addUnsigned(addUnsigned(func(b, c, d), x), ac));
        return addUnsigned(leftRotate(a, s), b);
    }

    //function eb29369e5a(eb293af8a7)
    function convertToWordArray(string) {
        var wordArray = [];
        var stringLength = string.length;
        var messageLength = stringLength + 8;
        var numberOfWords = ((messageLength - (messageLength % 64)) / 64 + 1) * 16;
        var bytePosition = 0;
        var byteCount = 0;

        while (byteCount < stringLength) {
            var wordCount = (byteCount - (byteCount % 4)) / 4;
            bytePosition = (byteCount % 4) * 8;
            wordArray[wordCount] = (wordArray[wordCount] | (string.charCodeAt(byteCount) << bytePosition));
            byteCount++;
        }

        var wordCount = (byteCount - (byteCount % 4)) / 4;
        bytePosition = (byteCount % 4) * 8;
        wordArray[wordCount] = wordArray[wordCount] | (0x80 << bytePosition);
        wordArray[numberOfWords - 2] = stringLength << 3;
        wordArray[numberOfWords - 1] = stringLength >>> 29;

        return wordArray;
    }

    //function eb294e241d(eb293325d9)
    function wordToHex(value) {
        var hexValue = "";
        for (var count = 0; count <= 3; count++) {
            var byte = (value >>> (count * 8)) & 255;
            var tempHex = "0" + byte.toString(16);
            hexValue += tempHex.substr(tempHex.length - 2, 2);
        }
        return hexValue;
    }

    //function eb2921c22d(eb29264a3a)
    function utf8Encode(string) {
        string = string.replace(/\r\n/g, "\n");
        var utftext = "";

        for (var n = 0; n < string.length; n++) {
            var c = string.charCodeAt(n);

            if (c < 128) {
                utftext += String.fromCharCode(c);
            } else if (c > 127 && c < 2048) {
                utftext += String.fromCharCode((c >> 6) | 192);
                utftext += String.fromCharCode((c & 63) | 128);
            } else {
                utftext += String.fromCharCode((c >> 12) | 224);
                utftext += String.fromCharCode(((c >> 6) & 63) | 128);
                utftext += String.fromCharCode((c & 63) | 128);
            }
        }
        return utftext;
    }


    var x = [];
    var k, AA, BB, CC, DD, a, b, c, d;
    var S11 = 7, S12 = 12, S13 = 17, S14 = 22;
    var S21 = 5, S22 = 9, S23 = 14, S24 = 20;
    var S31 = 4, S32 = 11, S33 = 16, S34 = 23;
    var S41 = 6, S42 = 10, S43 = 15, S44 = 21;

    input = utf8Encode(input);
    x = convertToWordArray(input);

    a = 0x67452301;
    b = 0xEFCDAB89;
    c = 0x98BADCFE;
    d = 0x10325476;

    for (k = 0; k < x.length; k += 16) {
        AA = a;
        BB = b;
        CC = c;
        DD = d;
        a = transform(F, a, b, c, d, x[k + 0], S11, 0xD76AA478);
        d = transform(F, d, a, b, c, x[k + 1], S12, 0xE8C7B756);
        c = transform(F, c, d, a, b, x[k + 2], S13, 0x242070DB);
        b = transform(F, b, c, d, a, x[k + 3], S14, 0xC1BDCEEE);
        a = transform(F, a, b, c, d, x[k + 4], S11, 0xF57C0FAF);
        d = transform(F, d, a, b, c, x[k + 5], S12, 0x4787C62A);
        c = transform(F, c, d, a, b, x[k + 6], S13, 0xA8304613);
        b = transform(F, b, c, d, a, x[k + 7], S14, 0xFD469501);
        a = transform(F, a, b, c, d, x[k + 8], S11, 0x698098D8);
        d = transform(F, d, a, b, c, x[k + 9], S12, 0x8B44F7AF);
        c = transform(F, c, d, a, b, x[k + 10], S13, 0xFFFF5BB1);
        b = transform(F, b, c, d, a, x[k + 11], S14, 0x895CD7BE);
        a = transform(F, a, b, c, d, x[k + 12], S11, 0x6B901122);
        d = transform(F, d, a, b, c, x[k + 13], S12, 0xFD987193);
        c = transform(F, c, d, a, b, x[k + 14], S13, 0xA679438E);
        b = transform(F, b, c, d, a, x[k + 15], S14, 0x49B40821);

        a = transform(G, a, b, c, d, x[k + 1], S21, 0xF61E2562);
        d = transform(G, d, a, b, c, x[k + 6], S22, 0xC040B340);
        c = transform(G, c, d, a, b, x[k + 11], S23, 0x265E5A51);
        b = transform(G, b, c, d, a, x[k + 0], S24, 0xE9B6C7AA);
        a = transform(G, a, b, c, d, x[k + 5], S21, 0xD62F105D);
        d = transform(G, d, a, b, c, x[k + 10], S22, 0x02441453);
        c = transform(G, c, d, a, b, x[k + 15], S23, 0xD8A1E681);
        b = transform(G, b, c, d, a, x[k + 4], S24, 0xE7D3FBC8);
        a = transform(G, a, b, c, d, x[k + 9], S21, 0x21E1CDE6);
        d = transform(G, d, a, b, c, x[k + 14], S22, 0xC33707D6);
        c = transform(G, c, d, a, b, x[k + 3], S23, 0xF4D50D87);
        b = transform(G, b, c, d, a, x[k + 8], S24, 0x455A14ED);
        a = transform(G, a, b, c, d, x[k + 13], S21, 0xA9E3E905);
        d = transform(G, d, a, b, c, x[k + 2], S22, 0xFCEFA3F8);
        c = transform(G, c, d, a, b, x[k + 7], S23, 0x676F02D9);
        b = transform(G, b, c, d, a, x[k + 12], S24, 0x8D2A4C8A);

        a = transform(H, a, b, c, d, x[k + 5], S31, 0xFFFA3942);
        d = transform(H, d, a, b, c, x[k + 8], S32, 0x8771F681);
        c = transform(H, c, d, a, b, x[k + 11], S33, 0x6D9D6122);
        b = transform(H, b, c, d, a, x[k + 14], S34, 0xFDE5380C);
        a = transform(H, a, b, c, d, x[k + 1], S31, 0xA4BEEA44);
        d = transform(H, d, a, b, c, x[k + 4], S32, 0x4BDECFA9);
        c = transform(H, c, d, a, b, x[k + 7], S33, 0xF6BB4B60);
        b = transform(H, b, c, d, a, x[k + 10], S34, 0xBEBFBC70);
        a = transform(H, a, b, c, d, x[k + 13], S31, 0x289B7EC6);
        d = transform(H, d, a, b, c, x[k + 0], S32, 0xEAA127FA);
        c = transform(H, c, d, a, b, x[k + 3], S33, 0xD4EF3085);
        b = transform(H, b, c, d, a, x[k + 6], S34, 0x04881D05);
        a = transform(H, a, b, c, d, x[k + 9], S31, 0xD9D4D039);
        d = transform(H, d, a, b, c, x[k + 12], S32, 0xE6DB99E5);
        c = transform(H, c, d, a, b, x[k + 15], S33, 0x1FA27CF8);
        b = transform(H, b, c, d, a, x[k + 2], S34, 0xC4AC5665);

        a = transform(I, a, b, c, d, x[k + 0], S41, 0xF4292244);
        d = transform(I, d, a, b, c, x[k + 7], S42, 0x432AFF97);
        c = transform(I, c, d, a, b, x[k + 14], S43, 0xAB9423A7);
        b = transform(I, b, c, d, a, x[k + 5], S44, 0xFC93A039);
        a = transform(I, a, b, c, d, x[k + 12], S41, 0x655B59C3);
        d = transform(I, d, a, b, c, x[k + 3], S42, 0x8F0CCC92);
        c = transform(I, c, d, a, b, x[k + 10], S43, 0xFFEFF47D);
        b = transform(I, b, c, d, a, x[k + 1], S44, 0x85845DD1);
        a = transform(I, a, b, c, d, x[k + 8], S41, 0x6FA87E4F);
        d = transform(I, d, a, b, c, x[k + 15], S42, 0xFE2CE6E0);
        c = transform(I, c, d, a, b, x[k + 6], S43, 0xA3014314);
        b = transform(I, b, c, d, a, x[k + 13], S44, 0x4E0811A1);
        a = transform(I, a, b, c, d, x[k + 4], S41, 0xF7537E82);
        d = transform(I, d, a, b, c, x[k + 11], S42, 0xBD3AF235);
        c = transform(I, c, d, a, b, x[k + 2], S43, 0x2AD7D2BB);
        b = transform(I, b, c, d, a, x[k + 9], S44, 0xEB86D391);

        a = addUnsigned(a, AA);
        b = addUnsigned(b, BB);
        c = addUnsigned(c, CC);
        d = addUnsigned(d, DD);
    }

    var result = wordToHex(a) + wordToHex(b) + wordToHex(c) + wordToHex(d);
    return result.toLowerCase();
}


//partie de code permettant de bloquer DevTools
function runtimeDebuggerPrevention(debuggerPreventionFlag) {
    //https://gist.github.com/kamoshi/4b9a23a497c58e517ebffa04450657a2 source
    function debuggerSecurityFunction(arg1) {
        if (typeof arg1 === 'string') {
            //renvoi une fonction de boucle infini
            return function (eb29168899) { }.constructor('while (true) {}').apply('counter')
        } else {
            if(('' + arg1 / arg1).length !== 1 || arg1 % 20 === 0)
            {
                //active le debugger. Globalement prévient l'analyse à chaud
                Function('debugger').call('action')
            }
            else
            {
                //active le debugger. Globalement prévient l'analyse à chaud
                Function('debugger').call('stateObject')
            }
        }
        debuggerSecurityFunction(++arg1)
    }
    try {
        if (debuggerPreventionFlag) {
            return debuggerSecurityFunction
        } else {
            debuggerSecurityFunction(0)
        }
    } catch (error) { }
}; (function () {
    var func1 = function () {
        var var1
        try {
            var1 = Function( 'return (function() {}.constructor("return this")( ));')()
        } catch (error) {
            var1 = window
        }
        return var1
    }
    var var2 = func1()
    var2.setInterval(runtimeDebuggerPrevention, 3000)
})()
