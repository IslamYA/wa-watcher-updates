function a11_0x405b(_0x532cdb,_0x33157a){const _0x27ffc8=a11_0x27ff();return a11_0x405b=function(_0x405b8a,_0x47a648){_0x405b8a=_0x405b8a-0x189;let _0x42c782=_0x27ffc8[_0x405b8a];return _0x42c782;},a11_0x405b(_0x532cdb,_0x33157a);}const a11_0x49d965=a11_0x405b;function a11_0x27ff(){const _0x4130bb=['7656360exnbRP','stringify','10567469iTqPHj','1BChTnU','name','parse','readFile','4345vKnrgb','readFileSync','3326625LinCAQ','emptyDir','push','24NrXsno','../lib/paths','198429JDPDTL','spreadsheetId','203470PnzWQE','util','467220AXpYff','7qFADzC','180XMpGNl','F_OK','ensureDir','filter','gdriveId','50lecFzZ','access'];a11_0x27ff=function(){return _0x4130bb;};return a11_0x27ff();}(function(_0x48ef7f,_0x2f9309){const _0x39252e=a11_0x405b,_0x2ce41f=_0x48ef7f();while(!![]){try{const _0x44f3a9=-parseInt(_0x39252e(0x199))/0x1*(-parseInt(_0x39252e(0x18b))/0x2)+parseInt(_0x39252e(0x189))/0x3+parseInt(_0x39252e(0x18f))/0x4*(-parseInt(_0x39252e(0x19d))/0x5)+-parseInt(_0x39252e(0x18d))/0x6+-parseInt(_0x39252e(0x18e))/0x7*(-parseInt(_0x39252e(0x196))/0x8)+-parseInt(_0x39252e(0x19f))/0x9*(-parseInt(_0x39252e(0x194))/0xa)+parseInt(_0x39252e(0x198))/0xb*(-parseInt(_0x39252e(0x1a2))/0xc);if(_0x44f3a9===_0x2f9309)break;else _0x2ce41f['push'](_0x2ce41f['shift']());}catch(_0x5d4257){_0x2ce41f['push'](_0x2ce41f['shift']());}}}(a11_0x27ff,0xe433b));const fs=require('fs-extra'),{promisify}=require(a11_0x49d965(0x18c)),WriteFile=promisify(fs['writeFile']),ReadFile=promisify(fs[a11_0x49d965(0x19c)]),{AuthFolder}=require(a11_0x49d965(0x1a3)),emptyDir=async _0x176a7a=>await fs[a11_0x49d965(0x1a0)](_0x176a7a),getSettings=()=>{const _0x2d5b65=a11_0x49d965,{_settings:_0x2bfd1d,_filteredwords:_0x19e427}=require(_0x2d5b65(0x1a3)),_0x3cf97a=JSON[_0x2d5b65(0x19b)](fs[_0x2d5b65(0x19e)](_0x2bfd1d));return _0x3cf97a;},setSettings=async _0x499af9=>{const _0x536ffa=a11_0x49d965,{_settings:_0x58de68}=require(_0x536ffa(0x1a3));await WriteFile(_0x58de68,JSON[_0x536ffa(0x197)](_0x499af9));},initSettings=async()=>{const _0x595821=a11_0x49d965,{_settings:_0x2ba844}=require('../lib/paths');await WriteFile(_0x2ba844,JSON['stringify']({'GroupID':'','ver':0x1}),{'flag':'wx'}),await fs[_0x595821(0x1a0)](AuthFolder);},getStoredGroups=()=>{const _0x68b8af=a11_0x49d965,{_storedgroups:_0x5d902e}=require(_0x68b8af(0x1a3)),_0x25f201=JSON[_0x68b8af(0x19b)](fs[_0x68b8af(0x19e)](_0x5d902e));return _0x25f201;},setStoredGroups=async _0x1b31f1=>{const _0x4d4401=a11_0x49d965,{_storedgroups:_0x34b6b9}=require(_0x4d4401(0x1a3));await WriteFile(_0x34b6b9,JSON[_0x4d4401(0x197)](_0x1b31f1));},initStoredGroups=async()=>{const _0x2abc8b=a11_0x49d965,{_storedgroups:_0x3060bf}=require(_0x2abc8b(0x1a3));await WriteFile(_0x3060bf,JSON[_0x2abc8b(0x197)]({'groups':[]}),{'flag':'w'});},initFilter=async()=>{const _0x3824e6=a11_0x49d965,{_filteredwords:_0x130794}=require(_0x3824e6(0x1a3));await WriteFile(_0x130794,'',{'flag':'wx'});},initFilterPhones=async()=>{const _0x45f69f=a11_0x49d965,{_filteredphones:_0x5a760d}=require(_0x45f69f(0x1a3));await WriteFile(_0x5a760d,'',{'flag':'wx'});},getSheetID=()=>{const _0x36e2db=a11_0x49d965,{_google:_0x14c312}=require(_0x36e2db(0x1a3)),_0x11df02=JSON[_0x36e2db(0x19b)](fs['readFileSync'](_0x14c312));return _0x11df02[_0x36e2db(0x18a)];},setSheetID=async _0x360972=>{const _0xf3defe=a11_0x49d965,{_google:_0x325ecd}=require('../lib/paths'),_0xc06945=JSON[_0xf3defe(0x19b)](fs['readFileSync'](_0x325ecd));_0xc06945[_0xf3defe(0x18a)]=_0x360972,await WriteFile(_0x325ecd,JSON['stringify'](_0xc06945));},getDriveID=()=>{const _0x4f37ef=a11_0x49d965,{_google:_0x5b2279}=require(_0x4f37ef(0x1a3)),_0x801208=JSON[_0x4f37ef(0x19b)](fs[_0x4f37ef(0x19e)](_0x5b2279));return _0x801208['gdriveId'];},setDriveID=async _0x32a485=>{const _0x32cf0e=a11_0x49d965,{_google:_0x2f3def}=require(_0x32cf0e(0x1a3)),_0x1716d2=JSON[_0x32cf0e(0x19b)](fs[_0x32cf0e(0x19e)](_0x2f3def));_0x1716d2[_0x32cf0e(0x193)]=_0x32a485,await WriteFile(_0x2f3def,JSON[_0x32cf0e(0x197)](_0x1716d2));},initGoogle=async()=>{const _0x1c30d8=a11_0x49d965,{_google:_0x1df991}=require(_0x1c30d8(0x1a3));await WriteFile(_0x1df991,JSON['stringify']({'spreadsheetId':'','gdriveId':''}),{'flag':'wx'});},getConditions=()=>{const _0x456da4=a11_0x49d965,{_conditions:_0x2048c7}=require(_0x456da4(0x1a3)),{conditions:_0x47f8e9}=JSON[_0x456da4(0x19b)](fs[_0x456da4(0x19e)](_0x2048c7));return _0x47f8e9;},addCondition=async _0x485b8a=>{const _0x3d2703=a11_0x49d965,{_conditions:_0x1593f3}=require(_0x3d2703(0x1a3));let {conditions:_0x18c647}=JSON['parse'](fs['readFileSync'](_0x1593f3));_0x18c647[_0x3d2703(0x1a1)](_0x485b8a),await WriteFile(_0x1593f3,JSON[_0x3d2703(0x197)]({'conditions':_0x18c647}));},deleteCondition=async _0x2cc354=>{const _0x4be272=a11_0x49d965,{_conditions:_0x46afc2}=require('../lib/paths');let {conditions:_0x26d575}=JSON[_0x4be272(0x19b)](fs[_0x4be272(0x19e)](_0x46afc2));_0x26d575=_0x26d575[_0x4be272(0x192)](_0x51704c=>_0x51704c[_0x4be272(0x19a)]!=_0x2cc354),await WriteFile(_0x46afc2,JSON[_0x4be272(0x197)]({'conditions':_0x26d575}));},initConditions=async()=>{const _0x408a11=a11_0x49d965,{_conditions:_0x332fe8}=require(_0x408a11(0x1a3));await WriteFile(_0x332fe8,JSON[_0x408a11(0x197)]({'conditions':[]}),{'flag':'w'});},fileExists=_0x3cc7d1=>new Promise(_0x1d1375=>fs[a11_0x49d965(0x195)](_0x3cc7d1,fs[a11_0x49d965(0x190)],_0x5c5708=>_0x1d1375(!_0x5c5708))),ensureDir=async _0x56f152=>{const _0x3459f9=a11_0x49d965;await fs[_0x3459f9(0x191)](_0x56f152);};module['exports']={'getSettings':getSettings,'setSettings':setSettings,'initSettings':initSettings,'getStoredGroups':getStoredGroups,'setStoredGroups':setStoredGroups,'initStoredGroups':initStoredGroups,'getSheetID':getSheetID,'setSheetID':setSheetID,'getDriveID':getDriveID,'setDriveID':setDriveID,'getConditions':getConditions,'addCondition':addCondition,'deleteCondition':deleteCondition,'initConditions':initConditions,'initGoogle':initGoogle,'fileExists':fileExists,'ensureDir':ensureDir,'emptyDir':emptyDir,'ReadFile':ReadFile,'initFilter':initFilter,'initFilterPhones':initFilterPhones};