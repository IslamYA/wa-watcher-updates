const a16_0x2d377b=a16_0x1949;(function(_0x29494e,_0x32e603){const _0x3b3077=a16_0x1949,_0x3c0857=_0x29494e();while(!![]){try{const _0x243162=-parseInt(_0x3b3077(0x1d0))/0x1+-parseInt(_0x3b3077(0x1cf))/0x2+-parseInt(_0x3b3077(0x1bf))/0x3+-parseInt(_0x3b3077(0x1cd))/0x4+parseInt(_0x3b3077(0x1ca))/0x5+-parseInt(_0x3b3077(0x1c5))/0x6+parseInt(_0x3b3077(0x1bd))/0x7;if(_0x243162===_0x32e603)break;else _0x3c0857['push'](_0x3c0857['shift']());}catch(_0x21f325){_0x3c0857['push'](_0x3c0857['shift']());}}}(a16_0x736e,0x87df2));const {ReadFile}=require(a16_0x2d377b(0x1c2)),{_filteredwords,_filteredphones}=require(a16_0x2d377b(0x1c3)),os=require('os');let newlinemarker=os[a16_0x2d377b(0x1be)]()===a16_0x2d377b(0x1c6)?'\x0d\x0a':'\x0a';function a16_0x1949(_0x59f9a3,_0x4ad9a0){const _0x736e81=a16_0x736e();return a16_0x1949=function(_0x1949c1,_0x3b0822){_0x1949c1=_0x1949c1-0x1ba;let _0x48ade8=_0x736e81[_0x1949c1];return _0x48ade8;},a16_0x1949(_0x59f9a3,_0x4ad9a0);}function Sleep(_0x2c3e5b){return new Promise(_0x4d5fd9=>setTimeout(_0x4d5fd9,_0x2c3e5b));}const EngishNumbers=(_0x28f886,_0x53b8f7=![])=>{const _0x1f8588=a16_0x2d377b;let _0xad44fb='٠'[_0x1f8588(0x1c8)](0x0),_0xaa0a29=_0x28f886[_0x1f8588(0x1ba)]()[_0x1f8588(0x1bb)](/[٠-٩]/g,function(_0x37ff40){const _0x23705e=_0x1f8588;return _0x37ff40[_0x23705e(0x1c8)](0x0)-_0xad44fb;});if(_0x53b8f7)return _0xaa0a29;else{let _0x54b685=_0xaa0a29[_0x1f8588(0x1c1)](/\d/g);return _0x54b685!==null?(_0x54b685=_0x54b685[_0x1f8588(0x1c0)](''),_0x54b685):0x0;}},normalizeArabic=_0x18742c=>{const _0x588c29=a16_0x2d377b;let _0x2ada77={'ك':'ک','ﻷ':'لا','ؤ':'ء','ى':'ی','ي':'ی','ئ':'ء','أ':'ا','إ':'ا','آ':'ا','ٱ':'ا','ٳ':'ا','ة':'ه','ِ':'','ْ':'','ُ':'','َ':'','ّ':'','ٍ':'','ً':'','ٌ':'','ٓ':'','ٰ':'','ٔ':'','�':'','ـ':''};return _0x18742c=_0x18742c[_0x588c29(0x1bb)](/[^\u0000-\u007E]/g,function(_0x468877){var _0xedfffe=_0x2ada77[_0x468877];return _0xedfffe==undefined&&(_0xedfffe=_0x468877),_0xedfffe;}),_0x18742c=EngishNumbers(_0x18742c,!![]),_0x18742c;},isFiltered=async _0x3ad01d=>{const _0x232db1=a16_0x2d377b;let _0x1ea303=await ReadFile(_filteredwords,_0x232db1(0x1c4));_0x1ea303=await normalizeArabic(_0x1ea303);const _0x58aff8=_0x1ea303[_0x232db1(0x1ba)]()[_0x232db1(0x1c9)](newlinemarker)[_0x232db1(0x1cc)](_0x4cdfd6=>_0x4cdfd6!=='');let _0x4bf321=_0x58aff8['some'](_0x2fbebe=>_0x3ad01d[_0x232db1(0x1cb)](_0x2fbebe));return _0x4bf321;},isFilteredPhone=async _0x167205=>{const _0x33b8cc=a16_0x2d377b,_0x4ed637=await ReadFile(_filteredphones,_0x33b8cc(0x1c4)),_0x303cdc=_0x4ed637['toString']()[_0x33b8cc(0x1c9)](newlinemarker)[_0x33b8cc(0x1cc)](_0x4a5d96=>_0x4a5d96!=='');let _0x45c581=_0x303cdc[_0x33b8cc(0x1bc)](_0x5329ee=>_0x167205==_0x5329ee);return _0x45c581;},getLongestText=_0x1f409a=>_0x1f409a[a16_0x2d377b(0x1c7)]((_0x1c916d,_0x2e6a60)=>_0x2e6a60['length']>_0x1c916d[a16_0x2d377b(0x1ce)]?_0x2e6a60:_0x1c916d,'');function a16_0x736e(){const _0x279653=['includes','filter','2974532aDtzzy','length','31420kLMbRq','740765TIOhUo','toString','replace','some','17924753nxmzkh','platform','1085136FRBGUv','join','match','./files','../lib/paths','utf8','5994510roGpYa','win32','reduce','charCodeAt','split','4283780XbIKPY'];a16_0x736e=function(){return _0x279653;};return a16_0x736e();}module['exports']={'Sleep':Sleep,'EngishNumbers':EngishNumbers,'normalizeArabic':normalizeArabic,'isFiltered':isFiltered,'isFilteredPhone':isFilteredPhone,'getLongestText':getLongestText};