const a8_0x537fbe=a8_0xb212;function a8_0xb212(_0x34a43d,_0x2559d3){const _0x3fb5d7=a8_0x3fb5();return a8_0xb212=function(_0xb2122f,_0x1cd06b){_0xb2122f=_0xb2122f-0xf4;let _0x5e83d1=_0x3fb5d7[_0xb2122f];return _0x5e83d1;},a8_0xb212(_0x34a43d,_0x2559d3);}(function(_0x1ca8b3,_0x575c0c){const _0x192a80=a8_0xb212,_0x7f0732=_0x1ca8b3();while(!![]){try{const _0x47eda5=parseInt(_0x192a80(0x102))/0x1+parseInt(_0x192a80(0x103))/0x2+-parseInt(_0x192a80(0xfa))/0x3*(parseInt(_0x192a80(0x11f))/0x4)+parseInt(_0x192a80(0x12e))/0x5+-parseInt(_0x192a80(0x132))/0x6*(parseInt(_0x192a80(0x108))/0x7)+parseInt(_0x192a80(0x13a))/0x8+-parseInt(_0x192a80(0x105))/0x9;if(_0x47eda5===_0x575c0c)break;else _0x7f0732['push'](_0x7f0732['shift']());}catch(_0x56cb1c){_0x7f0732['push'](_0x7f0732['shift']());}}}(a8_0x3fb5,0xb5fbc));function a8_0x3fb5(){const _0x3c6714=['matchAll','keywords','isGroup','includes','loadCells','every','toLocaleTimeString','getChat','author','GSpreadsheet','[ERROR!]\x20Uploading\x20File\x20to\x20Gdrive:','isArray','3654940OFxLSE','replace','sheetsByTitle','[WARN!]\x20Cannot\x20get\x20variables\x0amake\x20sure\x20the\x20variables\x20worksheet\x20exists','432bpwkKd','some',']\x20[FILTERED\x20PHONE!]\x20','createFile','../util/files','exports','push','forEach','1923320sdfIwn','split','type','../config','[WARN!]\x20Google\x20Drive\x20Is\x20Not\x20Configured\x20Yet','body','private','phone','hasMedia','GroupID','sendMessage','sendSeen','2485761ScJxtp','except','filter','replyprivate','allgroups','Gdrive','addMatch','en-EG','1347020wgURTk','607506sDUeVL','webViewLink','1137321jtkwun','from','./controlMsgHandler','89621KZZHED','en-GB','log','splice',']\x20[ERROR!]\x20Sending\x20to\x20Google\x20Sheets:','map','getCellByA1','reply','Private','_serialized',']\x20[FILTERED\x20WORD!]\x20','messageBuffer','../util/misc','name','red','getChats','length','toLocaleDateString','formattedValue','trim',']\x20[MATCH!]\x20','blockedkeywords','chatid','4oZsNyh','logger','sheetId'];a8_0x3fb5=function(){return _0x3c6714;};return a8_0x3fb5();}const {messageBufferMAXLENGTH}=require(a8_0x537fbe(0x13d)),{getSheetID,getDriveID}=require(a8_0x537fbe(0x136)),{data2Stream}=require('../util/dataOps'),{isFiltered,isFilteredPhone,normalizeArabic,Sleep}=require(a8_0x537fbe(0x114)),{renderKeywords}=require(a8_0x537fbe(0x107)),terminal=require('../util/terminal'),getGroups=async()=>{const _0x4e799a=a8_0x537fbe;let _0xd10c7c=await client[_0x4e799a(0x117)](),_0x2c60b7=await _0xd10c7c[_0x4e799a(0xfc)](_0x3d3eca=>_0x3d3eca[_0x4e799a(0x124)]==!![]&&_0x3d3eca[_0x4e799a(0x115)]!=undefined&&_0x3d3eca['id'][_0x4e799a(0x111)]!=global[_0x4e799a(0xf7)]);return _0x2c60b7=_0x2c60b7[_0x4e799a(0x10d)](_0x3e7a31=>({'name':_0x3e7a31[_0x4e799a(0x115)],'chatid':_0x3e7a31['id'][_0x4e799a(0x111)]})),_0x2c60b7;},storeMedia=async(_0x42f735,_0x81699)=>{const _0x47736f=a8_0x537fbe,_0x2d1271=getDriveID();if(_0x2d1271=='')return terminal[_0x47736f(0x120)](_0x47736f(0x13e),0x1),'';const _0x4d3b02=await _0x42f735['downloadMedia'](),_0x364380=await data2Stream(_0x4d3b02,_0x81699);try{const _0x58fbbd=await global[_0x47736f(0xff)][_0x47736f(0x135)](_0x2d1271,_0x364380);return _0x58fbbd['data'][_0x47736f(0x104)];}catch(_0x4c3681){terminal[_0x47736f(0x116)](_0x47736f(0x12c)+_0x4c3681);}},isRepeated=async({message:_0x51a43e,phone:_0x27a064})=>{const _0x33fa25=a8_0x537fbe,_0x10b1bb=messageBuffer['some'](_0x12100b=>_0x12100b['message']==_0x51a43e&&_0x12100b[_0x33fa25(0xf5)]==_0x27a064);return _0x10b1bb;},isMatchText=(_0x28a80c,_0x155185)=>{const _0x2c65eb=a8_0x537fbe;_0x155185=normalizeArabic(_0x155185);if(_0x155185[_0x2c65eb(0x125)]('++')){let _0x271f00=_0x155185[_0x2c65eb(0x13b)]('++')[_0x2c65eb(0x10d)](_0x48fc12=>_0x48fc12[_0x2c65eb(0x11b)]())['filter'](_0x5220af=>_0x5220af!=='');return _0x271f00[_0x2c65eb(0x127)](_0x11c89f=>_0x28a80c[_0x2c65eb(0x125)](_0x11c89f));}else return _0x28a80c[_0x2c65eb(0x125)](_0x155185);},replaceVariables=async _0x1a753e=>{const _0x437f03=a8_0x537fbe;try{const _0x123465=/\[([a-zA-Z]+)!([A-Z]{1,2}\d+)\]/g;let _0x34942c=[..._0x1a753e[_0x437f03(0x122)](_0x123465)];if(_0x34942c[_0x437f03(0x118)]>0x0)for await(const _0x112de0 of _0x34942c){let _0x434b9d=_0x112de0[0x0],_0x13b275=_0x112de0[0x1],_0x3ce9d3=_0x112de0[0x2];console[_0x437f03(0x10a)](_0x434b9d,_0x13b275,_0x3ce9d3);let _0x4bf9c9=await global[_0x437f03(0x12b)][_0x437f03(0x130)][_0x13b275];await _0x4bf9c9[_0x437f03(0x126)](_0x3ce9d3),await Sleep(0xc8);let _0x40ad42=String((await _0x4bf9c9[_0x437f03(0x10e)](_0x3ce9d3))[_0x437f03(0x11a)]);_0x1a753e=await _0x1a753e[_0x437f03(0x12f)](_0x434b9d,_0x40ad42);}}catch(_0x84b393){terminal['logger'](_0x437f03(0x131),0x1);}return _0x1a753e;},receivedmsgHandler=async _0x2fce92=>{const _0x3d1e87=a8_0x537fbe,_0x363df6=new Date(),_0x596169=_0x363df6[_0x3d1e87(0x119)](_0x3d1e87(0x109))+'\x20'+_0x363df6[_0x3d1e87(0x128)](_0x3d1e87(0x101));let _0x3addca=await _0x2fce92[_0x3d1e87(0x129)]();const _0x1312ae=_0x3addca[_0x3d1e87(0x124)],_0x550418=_0x1312ae?_0x2fce92['from']:_0x3d1e87(0xf4),_0x50e75f=_0x1312ae?_0x2fce92[_0x3d1e87(0x12a)][_0x3d1e87(0x13b)]('@')[0x0]:_0x2fce92[_0x3d1e87(0x106)][_0x3d1e87(0x13b)]('@')[0x0];let _0x524fb2=_0x1312ae?(await getGroups())[_0x3d1e87(0xfc)](_0x10e84b=>_0x10e84b['chatid']==_0x550418)[0x0]['name']:_0x3d1e87(0x110);const _0x17ab4a=normalizeArabic(_0x2fce92[_0x3d1e87(0x13f)]);if(await isFiltered(_0x17ab4a)){terminal[_0x3d1e87(0x120)]('['+_0x596169+_0x3d1e87(0x112)+_0x524fb2+'-'+_0x50e75f,0x1);return;}if(await isFilteredPhone(_0x50e75f)){terminal['logger']('['+_0x596169+_0x3d1e87(0x134)+_0x524fb2+'-'+_0x50e75f,0x1);return;}if(await isRepeated({'message':_0x17ab4a,'phone':_0x50e75f})){terminal[_0x3d1e87(0x120)]('['+_0x596169+']\x20[REPEATED\x20MESSAGE!]\x20'+_0x524fb2+'-'+_0x50e75f,0x1);return;}for(const _0x32c5b5 of global['conditions']){let _0x50822a=_0x32c5b5['applicable']['some'](_0x501a77=>_0x501a77[_0x3d1e87(0x11e)]==_0x550418||_0x1312ae&&_0x501a77[_0x3d1e87(0x11e)]==_0x3d1e87(0xfe)||_0x1312ae&&_0x501a77[_0x3d1e87(0x11e)]==_0x3d1e87(0xfb)&&_0x501a77[_0x3d1e87(0xfb)][_0x3d1e87(0x127)](_0x5afd34=>_0x5afd34[_0x3d1e87(0x11e)]!=_0x550418)),_0x5830fc=_0x32c5b5['keywords'][_0x3d1e87(0x133)](_0x22f632=>{const _0x556a79=_0x3d1e87;if(Array[_0x556a79(0x12d)](_0x22f632)){let _0x44e62a=!![];return _0x22f632[_0x556a79(0x139)](_0x4a7731=>{const _0xef8505=_0x556a79;Array[_0xef8505(0x12d)](_0x4a7731)?_0x44e62a=_0x44e62a&&_0x4a7731[_0xef8505(0x133)](_0x5c46b5=>{const _0x2cec4a=_0xef8505;return _0x5c46b5=normalizeArabic(_0x5c46b5),_0x17ab4a[_0x2cec4a(0x125)](_0x5c46b5);}):_0x44e62a=_0x44e62a&&isMatchText(_0x17ab4a,_0x4a7731);}),_0x44e62a;}else return isMatchText(_0x17ab4a,_0x22f632);}),_0x3e972b=_0x32c5b5[_0x3d1e87(0x11d)]['some'](_0x24c6b0=>{const _0x488992=_0x3d1e87;if(Array[_0x488992(0x12d)](_0x24c6b0)){let _0x3f6703=!![];return _0x24c6b0['forEach'](_0x22d753=>{const _0x29ad37=_0x488992;Array[_0x29ad37(0x12d)](_0x22d753)?_0x3f6703=_0x3f6703&&_0x22d753['some'](_0x3cc58b=>{const _0x5141ce=_0x29ad37;return _0x3cc58b=normalizeArabic(_0x3cc58b),_0x17ab4a[_0x5141ce(0x125)](_0x3cc58b);}):_0x3f6703=_0x3f6703&&isMatchText(_0x17ab4a,_0x22d753);}),_0x3f6703;}else return isMatchText(_0x17ab4a,_0x24c6b0);});if(_0x50822a)_0x3addca[_0x3d1e87(0xf9)]();if(_0x50822a&&_0x5830fc&&!_0x3e972b){const _0x4784d9=getSheetID();if(_0x4784d9=='')return;let _0x5ae231=renderKeywords(_0x32c5b5[_0x3d1e87(0x123)]),_0x386176=_0x2fce92[_0x3d1e87(0xf6)]?await storeMedia(_0x2fce92,_0x50e75f):'';const _0x410239=[_0x596169,_0x50e75f,_0x524fb2,_0x17ab4a,_0x386176,_0x32c5b5[_0x3d1e87(0x115)],_0x5ae231];terminal[_0x3d1e87(0x120)]('['+_0x596169+_0x3d1e87(0x11c)+_0x524fb2+'-'+_0x50e75f+'=>'+_0x2fce92[_0x3d1e87(0x13c)]+'\x20'+_0x5ae231);const _0xa5d771=_0x32c5b5['gsheet'][_0x3d1e87(0x121)];try{Gsheet[_0x3d1e87(0x100)](_0xa5d771,_0x410239);}catch(_0x24d11d){terminal[_0x3d1e87(0x116)]('['+_0x596169+_0x3d1e87(0x10c)+_0x24d11d);}_0x32c5b5['reply']&&_0x1312ae&&_0x2fce92[_0x3d1e87(0x10f)](await replaceVariables(_0x32c5b5[_0x3d1e87(0x10f)]));_0x32c5b5[_0x3d1e87(0xfd)]&&client[_0x3d1e87(0xf8)](_0x50e75f+'@c.us',await replaceVariables(_0x32c5b5[_0x3d1e87(0xfd)]));let _0x56fec1=messageBuffer[_0x3d1e87(0x118)];_0x56fec1>messageBufferMAXLENGTH&&messageBuffer[_0x3d1e87(0x10b)](0x0,_0x56fec1-messageBufferMAXLENGTH),global[_0x3d1e87(0x113)][_0x3d1e87(0x138)]({'message':_0x17ab4a,'phone':_0x50e75f});}}};module[a8_0x537fbe(0x137)]={'receivedmsgHandler':receivedmsgHandler};