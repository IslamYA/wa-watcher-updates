const a11_0x438991=a11_0xd89c;function a11_0xd89c(_0x4c1ff2,_0x3bb442){const _0x263ea1=a11_0x263e();return a11_0xd89c=function(_0xd89cb8,_0x4e23d7){_0xd89cb8=_0xd89cb8-0x1ba;let _0x117b68=_0x263ea1[_0xd89cb8];return _0x117b68;},a11_0xd89c(_0x4c1ff2,_0x3bb442);}(function(_0x535988,_0x4a3697){const _0xbc13f1=a11_0xd89c,_0x42a51c=_0x535988();while(!![]){try{const _0x1ed160=-parseInt(_0xbc13f1(0x1c7))/0x1*(-parseInt(_0xbc13f1(0x1bb))/0x2)+parseInt(_0xbc13f1(0x1cb))/0x3*(-parseInt(_0xbc13f1(0x1c3))/0x4)+parseInt(_0xbc13f1(0x1ce))/0x5+-parseInt(_0xbc13f1(0x1c2))/0x6+-parseInt(_0xbc13f1(0x1cc))/0x7+parseInt(_0xbc13f1(0x1c1))/0x8+parseInt(_0xbc13f1(0x1cf))/0x9*(parseInt(_0xbc13f1(0x1cd))/0xa);if(_0x1ed160===_0x4a3697)break;else _0x42a51c['push'](_0x42a51c['shift']());}catch(_0x5d886f){_0x42a51c['push'](_0x42a51c['shift']());}}}(a11_0x263e,0x9eabf));function a11_0x263e(){const _0x2f7adb=['217863pMCbmM','7968639TeNeNs','7470osoSox','2310225ALvnFS','7893BdNDIR','gdriveId','40sUYuNP','parse','ensureDir','exports','fs-extra','name','4412960gDdbps','2688282mMHIjS','4SKfApe','emptyDir','stringify','../lib/paths','32009EsznKw','readFileSync','F_OK','access'];a11_0x263e=function(){return _0x2f7adb;};return a11_0x263e();}const fs=require(a11_0x438991(0x1bf)),{promisify}=require('util'),WriteFile=promisify(fs['writeFile']),ReadFile=promisify(fs['readFile']),{AuthFolder}=require('../lib/paths'),emptyDir=async _0x787f51=>await fs[a11_0x438991(0x1c4)](_0x787f51),getSettings=()=>{const _0x2e025f=a11_0x438991,{_settings:_0x51fc8d,_filteredwords:_0xe7c521}=require('../lib/paths'),_0x448e7c=JSON[_0x2e025f(0x1bc)](fs[_0x2e025f(0x1c8)](_0x51fc8d));return _0x448e7c;},setSettings=async _0x5c4f8d=>{const _0x1f3b83=a11_0x438991,{_settings:_0x2dc4f1}=require(_0x1f3b83(0x1c6));await WriteFile(_0x2dc4f1,JSON[_0x1f3b83(0x1c5)](_0x5c4f8d));},initSettings=async()=>{const _0x478f73=a11_0x438991,{_settings:_0xcb56d0}=require(_0x478f73(0x1c6));await WriteFile(_0xcb56d0,JSON[_0x478f73(0x1c5)]({'GroupID':'','ver':0x1}),{'flag':'wx'}),await fs[_0x478f73(0x1c4)](AuthFolder);},initFilter=async()=>{const _0x522d31=a11_0x438991,{_filteredwords:_0xdc6aa3}=require(_0x522d31(0x1c6));await WriteFile(_0xdc6aa3,'',{'flag':'wx'});},initFilterPhones=async()=>{const _0x5130c1=a11_0x438991,{_filteredphones:_0x5e13aa}=require(_0x5130c1(0x1c6));await WriteFile(_0x5e13aa,'',{'flag':'wx'});},getSheetID=()=>{const _0x22039e=a11_0x438991,{_google:_0x4dcaf8}=require(_0x22039e(0x1c6)),_0x5361e0=JSON[_0x22039e(0x1bc)](fs['readFileSync'](_0x4dcaf8));return _0x5361e0['spreadsheetId'];},setSheetID=async _0x4a1763=>{const _0x277e8f=a11_0x438991,{_google:_0x292ac9}=require(_0x277e8f(0x1c6)),_0x2a261e=JSON[_0x277e8f(0x1bc)](fs[_0x277e8f(0x1c8)](_0x292ac9));_0x2a261e['spreadsheetId']=_0x4a1763,await WriteFile(_0x292ac9,JSON[_0x277e8f(0x1c5)](_0x2a261e));},getDriveID=()=>{const _0x294291=a11_0x438991,{_google:_0x1161aa}=require('../lib/paths'),_0x1831d1=JSON[_0x294291(0x1bc)](fs['readFileSync'](_0x1161aa));return _0x1831d1[_0x294291(0x1ba)];},setDriveID=async _0x796814=>{const _0xfe3a88=a11_0x438991,{_google:_0x4527fe}=require(_0xfe3a88(0x1c6)),_0xca90b3=JSON['parse'](fs[_0xfe3a88(0x1c8)](_0x4527fe));_0xca90b3[_0xfe3a88(0x1ba)]=_0x796814,await WriteFile(_0x4527fe,JSON[_0xfe3a88(0x1c5)](_0xca90b3));},initGoogle=async()=>{const _0x365245=a11_0x438991,{_google:_0x54e7d0}=require(_0x365245(0x1c6));await WriteFile(_0x54e7d0,JSON['stringify']({'spreadsheetId':'','gdriveId':''}),{'flag':'wx'});},getConditions=()=>{const _0x5e51c6=a11_0x438991,{_conditions:_0x2dfdff}=require(_0x5e51c6(0x1c6)),{conditions:_0xd6a6ec}=JSON[_0x5e51c6(0x1bc)](fs['readFileSync'](_0x2dfdff));return _0xd6a6ec;},addCondition=async _0x35822c=>{const _0x2b0b82=a11_0x438991,{_conditions:_0x555364}=require('../lib/paths');let {conditions:_0x3310ff}=JSON[_0x2b0b82(0x1bc)](fs['readFileSync'](_0x555364));_0x3310ff['push'](_0x35822c),await WriteFile(_0x555364,JSON[_0x2b0b82(0x1c5)]({'conditions':_0x3310ff}));},deleteCondition=async _0x5aaa83=>{const _0x23a817=a11_0x438991,{_conditions:_0xe1a323}=require(_0x23a817(0x1c6));let {conditions:_0x3cfaf2}=JSON['parse'](fs[_0x23a817(0x1c8)](_0xe1a323));_0x3cfaf2=_0x3cfaf2['filter'](_0x4a5196=>_0x4a5196[_0x23a817(0x1c0)]!=_0x5aaa83),await WriteFile(_0xe1a323,JSON[_0x23a817(0x1c5)]({'conditions':_0x3cfaf2}));},initConditions=async()=>{const _0xf0d1a=a11_0x438991,{_conditions:_0x241925}=require(_0xf0d1a(0x1c6));await WriteFile(_0x241925,JSON[_0xf0d1a(0x1c5)]({'conditions':[]}),{'flag':'w'});},fileExists=_0x2e9754=>new Promise(_0x42fd17=>fs[a11_0x438991(0x1ca)](_0x2e9754,fs[a11_0x438991(0x1c9)],_0x3163c8=>_0x42fd17(!_0x3163c8))),ensureDir=async _0x3db091=>{const _0x5bafa6=a11_0x438991;await fs[_0x5bafa6(0x1bd)](_0x3db091);};module[a11_0x438991(0x1be)]={'getSettings':getSettings,'setSettings':setSettings,'initSettings':initSettings,'getSheetID':getSheetID,'setSheetID':setSheetID,'getDriveID':getDriveID,'setDriveID':setDriveID,'getConditions':getConditions,'addCondition':addCondition,'deleteCondition':deleteCondition,'initConditions':initConditions,'initGoogle':initGoogle,'fileExists':fileExists,'ensureDir':ensureDir,'emptyDir':emptyDir,'ReadFile':ReadFile,'initFilter':initFilter,'initFilterPhones':initFilterPhones};