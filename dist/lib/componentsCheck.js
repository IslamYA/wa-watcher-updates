function a3_0x4850(_0x1e00c3,_0x530eb0){const _0x4b2334=a3_0x4b23();return a3_0x4850=function(_0x485025,_0x41bbcb){_0x485025=_0x485025-0x7a;let _0x55f378=_0x4b2334[_0x485025];return _0x55f378;},a3_0x4850(_0x1e00c3,_0x530eb0);}const a3_0x261754=a3_0x4850;(function(_0x33a407,_0xe0a2dc){const _0x3990dd=a3_0x4850,_0x3910c5=_0x33a407();while(!![]){try{const _0xf0b46b=-parseInt(_0x3990dd(0x8b))/0x1+-parseInt(_0x3990dd(0x85))/0x2*(-parseInt(_0x3990dd(0x80))/0x3)+-parseInt(_0x3990dd(0x88))/0x4+-parseInt(_0x3990dd(0x7a))/0x5+parseInt(_0x3990dd(0x7d))/0x6*(parseInt(_0x3990dd(0x89))/0x7)+parseInt(_0x3990dd(0x8c))/0x8+-parseInt(_0x3990dd(0x83))/0x9;if(_0xf0b46b===_0xe0a2dc)break;else _0x3910c5['push'](_0x3910c5['shift']());}catch(_0x35d949){_0x3910c5['push'](_0x3910c5['shift']());}}}(a3_0x4b23,0x29a49));const terminal=require(a3_0x261754(0x7c)),path=require('path'),{fileExists,ensureDir,initConditions,initGoogle,initSettings,initFilter,initFilterPhones}=require('../util/files'),{Sleep}=require(a3_0x261754(0x8d)),{getChromePath}=require(a3_0x261754(0x7e)),{ADVANCEDDIR,_settings,_creds,_conditions,_google,_filteredwords,_filteredphones}=require('./paths'),componentsCheck=async()=>{const _0x579e62=a3_0x261754;await ensureDir(path['join'](ADVANCEDDIR,_0x579e62(0x84))),await ensureDir(path[_0x579e62(0x7b)](ADVANCEDDIR,_0x579e62(0x7f)));const _0x56c40e=await fileExists(_settings),_0x273dfa=await fileExists(_creds),_0x48769b=await fileExists(_conditions),_0x2b34f7=await fileExists(_google),_0x15ded6=await fileExists(_filteredwords),_0x480cac=await fileExists(_filteredphones),_0x668482=await getChromePath();_0x668482==![]&&(terminal[_0x579e62(0x82)](_0x579e62(0x8a)),process[_0x579e62(0x81)](0x1));if(!_0x56c40e)try{await initSettings(),await Sleep(0x3e8);}catch(_0x6274ea){terminal[_0x579e62(0x82)](_0x579e62(0x86)),process[_0x579e62(0x81)](0x1);}!_0x273dfa&&(terminal[_0x579e62(0x82)](_0x579e62(0x87)),process[_0x579e62(0x81)](0x1));if(!_0x48769b)try{await initConditions(),await Sleep(0x3e8);}catch(_0x53398d){terminal[_0x579e62(0x82)](_0x579e62(0x86));throw _0x53398d;process['exit'](0x1);}if(!_0x2b34f7)try{await initGoogle(),await Sleep(0x3e8);}catch(_0x1f1361){terminal[_0x579e62(0x82)]('MISSING\x20FILES,\x20Please\x20reinstall\x20from\x20source');throw _0x1f1361;process[_0x579e62(0x81)](0x1);}if(!_0x15ded6)try{await initFilter(),await Sleep(0x3e8);}catch(_0x395340){terminal[_0x579e62(0x82)]('MISSING\x20FILES,\x20Please\x20reinstall\x20from\x20source');throw _0x395340;process[_0x579e62(0x81)](0x1);}if(!_0x480cac)try{await initFilterPhones(),await Sleep(0x3e8);}catch(_0x3bcbb5){terminal[_0x579e62(0x82)](_0x579e62(0x86));throw _0x3bcbb5;process['exit'](0x1);}};module['exports']={'componentsCheck':componentsCheck};function a3_0x4b23(){const _0x4b66f2=['2290190orZteI','Please\x20Install\x20Chrome','60502fEjhHd','2049192lqkZrw','../util/misc','1353375anRaSH','join','../util/terminal','6Ixobmr','../util/getChromePath','../settings','703155mcmhMM','exit','red','1290114edZTrh','../tokens','2jaVUfU','MISSING\x20FILES,\x20Please\x20reinstall\x20from\x20source','MISSING\x20creds.json\x20file,\x20Please\x20add\x20creds.json\x20in\x20settings\x20folder\x20and\x20try\x20again','690448toZJZp'];a3_0x4b23=function(){return _0x4b66f2;};return a3_0x4b23();}