const a15_0xfbe412=a15_0x5bbe;function a15_0x5c83(){const _0x616794=['join','stringify','جميع\x20القروبات','1430034gGIBGT','reduce','map','الرسائل\x20الخاصة','split','includes','charCodeAt','platform','replace','some','2GKmHZF','3551348svbQAe','23445qAcMno','7VZRlDf','isArray','match','push','toString','unshift','3OVxTtb','length','31946486GgSoIw','filter','exports','3424GMMmqo','2797930HuCDJv','GroupID','1063103WvsgDF','./files','../lib/paths','win32','7039330RUhuRS','_serialized','isGroup','utf8','private','getChats'];a15_0x5c83=function(){return _0x616794;};return a15_0x5c83();}(function(_0x33eef5,_0x217a66){const _0x57a7ea=a15_0x5bbe,_0x4e55dc=_0x33eef5();while(!![]){try{const _0xc0668d=-parseInt(_0x57a7ea(0x123))/0x1*(parseInt(_0x57a7ea(0x13a))/0x2)+parseInt(_0x57a7ea(0x11b))/0x3*(parseInt(_0x57a7ea(0x13b))/0x4)+-parseInt(_0x57a7ea(0x121))/0x5+parseInt(_0x57a7ea(0x130))/0x6*(parseInt(_0x57a7ea(0x115))/0x7)+parseInt(_0x57a7ea(0x120))/0x8*(-parseInt(_0x57a7ea(0x13c))/0x9)+-parseInt(_0x57a7ea(0x127))/0xa+parseInt(_0x57a7ea(0x11d))/0xb;if(_0xc0668d===_0x217a66)break;else _0x4e55dc['push'](_0x4e55dc['shift']());}catch(_0x41ad45){_0x4e55dc['push'](_0x4e55dc['shift']());}}}(a15_0x5c83,0x8fc28));const {ReadFile,getStoredGroups,setStoredGroups}=require(a15_0xfbe412(0x124)),{_filteredwords,_filteredphones}=require(a15_0xfbe412(0x125)),os=require('os');let newlinemarker=os[a15_0xfbe412(0x137)]()===a15_0xfbe412(0x126)?'\x0d\x0a':'\x0a';function Sleep(_0x4d8d81){return new Promise(_0x1147dd=>setTimeout(_0x1147dd,_0x4d8d81));}function a15_0x5bbe(_0x3cf9fb,_0x4c2265){const _0x5c834b=a15_0x5c83();return a15_0x5bbe=function(_0x5bbeaa,_0x456b48){_0x5bbeaa=_0x5bbeaa-0x115;let _0x6f2f38=_0x5c834b[_0x5bbeaa];return _0x6f2f38;},a15_0x5bbe(_0x3cf9fb,_0x4c2265);}const EngishNumbers=(_0x3e2566,_0x151ad8=![])=>{const _0x6ac4ab=a15_0xfbe412;let _0xf84e4='٠'[_0x6ac4ab(0x136)](0x0),_0x19f900=_0x3e2566[_0x6ac4ab(0x119)]()[_0x6ac4ab(0x138)](/[٠-٩]/g,function(_0xc4a63b){const _0x28c2e1=_0x6ac4ab;return _0xc4a63b[_0x28c2e1(0x136)](0x0)-_0xf84e4;});if(_0x151ad8)return _0x19f900;else{let _0x2dcd66=_0x19f900[_0x6ac4ab(0x117)](/\d/g);return _0x2dcd66!==null?(_0x2dcd66=_0x2dcd66[_0x6ac4ab(0x12d)](''),_0x2dcd66):0x0;}},normalizeArabic=_0x666502=>{let _0x29a675={'ک':'ك','ﻷ':'لا','ؤ':'ء','ى':'ی','ي':'ی','ئ':'ء','أ':'ا','إ':'ا','آ':'ا','ٱ':'ا','ٳ':'ا','ة':'ه','ِ':'','ْ':'','ُ':'','َ':'','ّ':'','ٍ':'','ً':'','ٌ':'','ٓ':'','ٰ':'','ٔ':'','�':'','ـ':''};return _0x666502=_0x666502['replace'](/[^\u0000-\u007E]/g,function(_0x26ea30){var _0x22d7bf=_0x29a675[_0x26ea30];return _0x22d7bf==undefined&&(_0x22d7bf=_0x26ea30),_0x22d7bf;}),_0x666502=EngishNumbers(_0x666502,!![]),_0x666502;},isFiltered=async _0x46bdd4=>{const _0x32842d=a15_0xfbe412;let _0x58c2fe=await ReadFile(_filteredwords,_0x32842d(0x12a));_0x58c2fe=await normalizeArabic(_0x58c2fe);const _0x35f732=_0x58c2fe[_0x32842d(0x119)]()['split'](newlinemarker)['filter'](_0x1962bb=>_0x1962bb!=='');let _0x856888=_0x35f732[_0x32842d(0x139)](_0x59f59f=>_0x46bdd4[_0x32842d(0x135)](_0x59f59f));return _0x856888;},isFilteredPhone=async _0xa4d81d=>{const _0x2a7382=a15_0xfbe412,_0x5ebc9b=await ReadFile(_filteredphones,_0x2a7382(0x12a)),_0x2a0046=_0x5ebc9b[_0x2a7382(0x119)]()[_0x2a7382(0x134)](newlinemarker)[_0x2a7382(0x11e)](_0x2c93cc=>_0x2c93cc!=='');let _0x5f5ace=_0x2a0046[_0x2a7382(0x139)](_0x4a88f5=>_0xa4d81d==_0x4a88f5);return _0x5f5ace;},getLongestText=_0x3978ec=>_0x3978ec[a15_0xfbe412(0x131)]((_0x3d6757,_0x1f2529)=>_0x1f2529[a15_0xfbe412(0x11c)]>_0x3d6757[a15_0xfbe412(0x11c)]?_0x1f2529:_0x3d6757,''),getGroups=async(_0x450c4c=![])=>{const _0x6dd18b=a15_0xfbe412;let {groups:_0x34d977}=await getStoredGroups();if(!Array[_0x6dd18b(0x116)](_0x34d977))_0x34d977=[];let _0x59d09b=await client[_0x6dd18b(0x12c)](),_0x3942a8=await _0x59d09b[_0x6dd18b(0x11e)](_0x2ec3c5=>_0x2ec3c5[_0x6dd18b(0x129)]==!![]&&_0x2ec3c5['name']!=undefined&&_0x2ec3c5['id'][_0x6dd18b(0x128)]!=settings[_0x6dd18b(0x122)]);_0x3942a8=_0x3942a8[_0x6dd18b(0x132)](_0x15c987=>({'name':_0x15c987['name'],'chatid':_0x15c987['id'][_0x6dd18b(0x128)]}));let _0xc1ea55=_0x3942a8[_0x6dd18b(0x11e)](_0x14bb6c=>!_0x34d977['map'](_0xe6d593=>JSON[_0x6dd18b(0x12e)](_0xe6d593))['includes'](JSON['stringify'](_0x14bb6c)));return _0xc1ea55[_0x6dd18b(0x11c)]>0x0&&(await _0x34d977[_0x6dd18b(0x118)](..._0xc1ea55),await setStoredGroups({'groups':_0x34d977})),_0x450c4c&&(await _0x34d977[_0x6dd18b(0x11a)]({'name':_0x6dd18b(0x12f),'chatid':'allgroups'}),await _0x34d977[_0x6dd18b(0x11a)]({'name':_0x6dd18b(0x133),'chatid':_0x6dd18b(0x12b)})),_0x34d977;};module[a15_0xfbe412(0x11f)]={'Sleep':Sleep,'EngishNumbers':EngishNumbers,'normalizeArabic':normalizeArabic,'isFiltered':isFiltered,'isFilteredPhone':isFilteredPhone,'getLongestText':getLongestText,'getGroups':getGroups};