const a8_0x4181bd=a8_0x1839;(function(_0xb82ded,_0x3a1524){const _0x8c27a6=a8_0x1839,_0x22ff42=_0xb82ded();while(!![]){try{const _0x575b3c=-parseInt(_0x8c27a6(0x1d6))/0x1*(-parseInt(_0x8c27a6(0x1ff))/0x2)+-parseInt(_0x8c27a6(0x1fe))/0x3*(parseInt(_0x8c27a6(0x1d4))/0x4)+-parseInt(_0x8c27a6(0x1db))/0x5*(parseInt(_0x8c27a6(0x1c8))/0x6)+-parseInt(_0x8c27a6(0x1d9))/0x7+-parseInt(_0x8c27a6(0x1c5))/0x8+-parseInt(_0x8c27a6(0x1d5))/0x9+parseInt(_0x8c27a6(0x1ed))/0xa*(parseInt(_0x8c27a6(0x1c9))/0xb);if(_0x575b3c===_0x3a1524)break;else _0x22ff42['push'](_0x22ff42['shift']());}catch(_0x3a6536){_0x22ff42['push'](_0x22ff42['shift']());}}}(a8_0x3d06,0xb7c83));function a8_0x3d06(){const _0x2e8d3b=['8452736scOHRZ','message','every','455802amwtlz','4114154ulckTt','sendSeen','logger','trim','sendMessage','filter','../util/dataOps','type','map','messageBuffer','name','2859772WayNqL','1862064UVKzZi','630436XXYBMZ','[ERROR!]\x20Sending\x20to\x20Google\x20Sheets:','allgroups','3089555RVeYkO','hasMedia','5dWOpOZ','data','reply','some','[FILTERED\x20PHONE!]\x20','en-EG','phone','isGroup','en-GB','./controlMsgHandler','push','applicable','createFile','exports','author','conditions','[ERROR!]\x20Uploading\x20File\x20to\x20Gdrive:','chatid','70QmHLMS','toLocaleDateString','split','getChats','webViewLink','from','downloadMedia','splice','except','../util/terminal','red','[FILTERED\x20WORD!]\x20','[WARN!]\x20Google\x20Drive\x20Is\x20Not\x20Configured\x20Yet','Private','isArray','../config','[MATCH!]\x20','3FXlgWz','2ICsZQm','Gdrive','keywords','length','_serialized','body','forEach','includes','replyprivate','sheetId','private','addMatch','toLocaleTimeString','gsheet','@c.us'];a8_0x3d06=function(){return _0x2e8d3b;};return a8_0x3d06();}function a8_0x1839(_0x1bfaca,_0x44e31f){const _0x3d06b5=a8_0x3d06();return a8_0x1839=function(_0x1839a5,_0x22a42d){_0x1839a5=_0x1839a5-0x1c1;let _0x9a668e=_0x3d06b5[_0x1839a5];return _0x9a668e;},a8_0x1839(_0x1bfaca,_0x44e31f);}const {messageBufferMAXLENGTH}=require(a8_0x4181bd(0x1fc)),{getSheetID,getDriveID}=require('../util/files'),{data2Stream}=require(a8_0x4181bd(0x1cf)),{isFiltered,isFilteredPhone,normalizeArabic}=require('../util/misc'),{renderKeywords}=require(a8_0x4181bd(0x1e4)),terminal=require(a8_0x4181bd(0x1f6)),getGroups=async()=>{const _0x319d5a=a8_0x4181bd;let _0x3155e2=await client[_0x319d5a(0x1f0)](),_0x1a27c5=await _0x3155e2[_0x319d5a(0x1ce)](_0x54d567=>_0x54d567[_0x319d5a(0x1e2)]==!![]&&_0x54d567['name']!=undefined&&_0x54d567['id'][_0x319d5a(0x203)]!=settings['GroupID']);return _0x1a27c5=_0x1a27c5[_0x319d5a(0x1d1)](_0x58c1b6=>({'name':_0x58c1b6[_0x319d5a(0x1d3)],'chatid':_0x58c1b6['id']['_serialized']})),_0x1a27c5;},storeMedia=async(_0x4b22a1,_0x2be993)=>{const _0x5408f6=a8_0x4181bd,_0x698eef=getDriveID();if(_0x698eef=='')return terminal[_0x5408f6(0x1cb)](_0x5408f6(0x1f9),0x1),'';const _0xaa4cb3=await _0x4b22a1[_0x5408f6(0x1f3)](),_0x3d36e3=await data2Stream(_0xaa4cb3,_0x2be993);try{const _0x33f3d4=await global[_0x5408f6(0x200)][_0x5408f6(0x1e7)](_0x698eef,_0x3d36e3);return _0x33f3d4[_0x5408f6(0x1dc)][_0x5408f6(0x1f1)];}catch(_0x14365e){terminal[_0x5408f6(0x1f7)](_0x5408f6(0x1eb)+_0x14365e);}},isRepeated=async({message:_0x564620,phone:_0x3fe889})=>{const _0x39c4ce=a8_0x4181bd,_0x231110=messageBuffer['some'](_0x36c0f0=>_0x36c0f0[_0x39c4ce(0x1c6)]==_0x564620&&_0x36c0f0[_0x39c4ce(0x1e1)]==_0x3fe889);return _0x231110;},isMatchText=(_0xd891d3,_0x66ce4a)=>{const _0x5bc793=a8_0x4181bd;_0x66ce4a=normalizeArabic(_0x66ce4a);if(_0x66ce4a['includes']('++')){let _0x48ece2=_0x66ce4a[_0x5bc793(0x1ef)]('++')[_0x5bc793(0x1d1)](_0x3d091a=>_0x3d091a[_0x5bc793(0x1cc)]())[_0x5bc793(0x1ce)](_0x303df6=>_0x303df6!=='');return _0x48ece2['every'](_0x1cf7e2=>_0xd891d3[_0x5bc793(0x206)](_0x1cf7e2));}else return _0xd891d3[_0x5bc793(0x206)](_0x66ce4a);},receivedmsgHandler=async _0x1c8720=>{const _0x36d337=a8_0x4181bd,_0x2bc9e3=new Date(),_0x32b67b=_0x2bc9e3[_0x36d337(0x1ee)](_0x36d337(0x1e3))+'\x20'+_0x2bc9e3[_0x36d337(0x1c2)](_0x36d337(0x1e0));let _0x2e39a7=await _0x1c8720['getChat']();const _0x53f98a=_0x2e39a7[_0x36d337(0x1e2)],_0x4d5647=_0x53f98a?_0x1c8720[_0x36d337(0x1f2)]:_0x36d337(0x209),_0x279143=_0x53f98a?_0x1c8720[_0x36d337(0x1e9)]['split']('@')[0x0]:_0x1c8720['from']['split']('@')[0x0],_0x31a566=normalizeArabic(_0x1c8720[_0x36d337(0x204)]);if(await isFiltered(_0x31a566)){terminal[_0x36d337(0x1cb)](_0x36d337(0x1f8)+_0x279143,0x1);return;}if(await isFilteredPhone(_0x279143)){terminal[_0x36d337(0x1cb)](_0x36d337(0x1df)+_0x279143,0x1);return;}if(await isRepeated({'message':_0x31a566,'phone':_0x279143})){terminal['logger']('[REPEATED\x20MESSAGE!]\x20'+_0x279143,0x1);return;}for(const _0x4699f7 of global[_0x36d337(0x1ea)]){let _0x37ee59=_0x4699f7[_0x36d337(0x1e6)][_0x36d337(0x1de)](_0x2bb1d9=>_0x2bb1d9[_0x36d337(0x1ec)]==_0x4d5647||_0x53f98a&&_0x2bb1d9[_0x36d337(0x1ec)]==_0x36d337(0x1d8)||_0x53f98a&&_0x2bb1d9[_0x36d337(0x1ec)]==_0x36d337(0x1f5)&&_0x2bb1d9['except'][_0x36d337(0x1c7)](_0x47a045=>_0x47a045[_0x36d337(0x1ec)]!=_0x4d5647)),_0x21aee1=_0x4699f7['keywords']['some'](_0x773a41=>{const _0xf53885=_0x36d337;if(Array[_0xf53885(0x1fb)](_0x773a41)){let _0x39dce5=!![];return _0x773a41[_0xf53885(0x205)](_0x420b2f=>{const _0x490934=_0xf53885;Array[_0x490934(0x1fb)](_0x420b2f)?_0x39dce5=_0x39dce5&&_0x420b2f['some'](_0x184f59=>{const _0x58a5da=_0x490934;return _0x184f59=normalizeArabic(_0x184f59),_0x31a566[_0x58a5da(0x206)](_0x184f59);}):_0x39dce5=_0x39dce5&&isMatchText(_0x31a566,_0x420b2f);}),_0x39dce5;}else return isMatchText(_0x31a566,_0x773a41);}),_0x4de6e1=_0x4699f7['blockedkeywords'][_0x36d337(0x1de)](_0x399b8f=>{const _0x3eed7c=_0x36d337;if(Array[_0x3eed7c(0x1fb)](_0x399b8f)){let _0x3e9786=!![];return _0x399b8f[_0x3eed7c(0x205)](_0x44b3ca=>{const _0x17cb83=_0x3eed7c;Array[_0x17cb83(0x1fb)](_0x44b3ca)?_0x3e9786=_0x3e9786&&_0x44b3ca[_0x17cb83(0x1de)](_0x59fb3f=>{const _0x4464a7=_0x17cb83;return _0x59fb3f=normalizeArabic(_0x59fb3f),_0x31a566[_0x4464a7(0x206)](_0x59fb3f);}):_0x3e9786=_0x3e9786&&isMatchText(_0x31a566,_0x44b3ca);}),_0x3e9786;}else return isMatchText(_0x31a566,_0x399b8f);});if(_0x37ee59)_0x2e39a7[_0x36d337(0x1ca)]();if(_0x37ee59&&_0x21aee1&&!_0x4de6e1){const _0x3d07c3=getSheetID();if(_0x3d07c3=='')return;let _0x288ff5=_0x53f98a?(await getGroups())[_0x36d337(0x1ce)](_0x3abb13=>_0x3abb13['chatid']==_0x4d5647)[0x0][_0x36d337(0x1d3)]:_0x36d337(0x1fa),_0x4a59fb=renderKeywords(_0x4699f7[_0x36d337(0x201)]),_0x44ce23=_0x1c8720[_0x36d337(0x1da)]?await storeMedia(_0x1c8720,_0x279143):'';const _0x2d4736=[_0x32b67b,_0x279143,_0x288ff5,_0x31a566,_0x44ce23,_0x4699f7['name'],_0x4a59fb];terminal[_0x36d337(0x1cb)](_0x36d337(0x1fd)+_0x288ff5+'-'+_0x279143+'=>'+_0x1c8720[_0x36d337(0x1d0)]);const _0x3e15f5=_0x4699f7[_0x36d337(0x1c3)][_0x36d337(0x208)];try{Gsheet[_0x36d337(0x1c1)](_0x3e15f5,_0x2d4736);}catch(_0x441da5){terminal[_0x36d337(0x1f7)](_0x36d337(0x1d7)+_0x441da5);}if(_0x4699f7[_0x36d337(0x1dd)]&&_0x53f98a)_0x1c8720['reply'](_0x4699f7[_0x36d337(0x1dd)]);if(_0x4699f7[_0x36d337(0x207)])client[_0x36d337(0x1cd)](_0x279143+_0x36d337(0x1c4),_0x4699f7[_0x36d337(0x207)]);let _0x1fc9bd=messageBuffer[_0x36d337(0x202)];_0x1fc9bd>messageBufferMAXLENGTH&&messageBuffer[_0x36d337(0x1f4)](0x0,_0x1fc9bd-messageBufferMAXLENGTH),global[_0x36d337(0x1d2)][_0x36d337(0x1e5)]({'message':_0x31a566,'phone':_0x279143});}}};module[a8_0x4181bd(0x1e8)]={'receivedmsgHandler':receivedmsgHandler};