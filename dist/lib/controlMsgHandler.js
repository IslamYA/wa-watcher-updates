const a4_0x53e28c=a4_0x4550;(function(_0x3d72a9,_0x3d44c3){const _0x2723a5=a4_0x4550,_0x3bbf08=_0x3d72a9();while(!![]){try{const _0x1a3c7a=-parseInt(_0x2723a5(0x174))/0x1*(parseInt(_0x2723a5(0x179))/0x2)+-parseInt(_0x2723a5(0x1a7))/0x3+parseInt(_0x2723a5(0x187))/0x4*(-parseInt(_0x2723a5(0x1a3))/0x5)+parseInt(_0x2723a5(0x1d3))/0x6*(-parseInt(_0x2723a5(0x1af))/0x7)+-parseInt(_0x2723a5(0x1d7))/0x8+parseInt(_0x2723a5(0x183))/0x9+parseInt(_0x2723a5(0x1aa))/0xa;if(_0x1a3c7a===_0x3d44c3)break;else _0x3bbf08['push'](_0x3bbf08['shift']());}catch(_0x2a740b){_0x3bbf08['push'](_0x3bbf08['shift']());}}}(a4_0xd26f,0x87a4a));const {getSheetID,setSheetID,getDriveID,setDriveID,getConditions,addCondition,deleteCondition,initConditions}=require(a4_0x53e28c(0x1d2)),{getAllSheets,duplicateSheet,createControlSheet}=require(a4_0x53e28c(0x1e2)),{EngishNumbers,Sleep,getLongestText,getGroups}=require(a4_0x53e28c(0x1bf)),terminal=require('../util/terminal'),spliter=(_0x244b70,_0x5cbdce)=>{const _0x2b0895=a4_0x53e28c;return _0x244b70[_0x2b0895(0x1d9)](_0x5cbdce)[_0x2b0895(0x19f)](_0x58b3dc=>_0x58b3dc[_0x2b0895(0x1ab)]())['filter'](_0x2fc3ef=>_0x2fc3ef!=='');};let getGroupIndex=(_0x29ec7d,_0xd65a34)=>{const _0x6a4c8=a4_0x53e28c;let _0x44f24c=_0xd65a34[_0x6a4c8(0x175)](_0x240f1d=>_0x240f1d['chatid']===_0x29ec7d);return _0x44f24c+0x1;},renderKeywords=_0x3d5621=>{const _0x3d36ec=a4_0x53e28c;let _0x3b8d8d='';return _0x3d5621[_0x3d36ec(0x172)]((_0x4563f5,_0xd701c)=>{const _0x505b1a=_0x3d36ec;if(_0xd701c!==0x0)_0x3b8d8d+='|';Array['isArray'](_0x4563f5)?_0x4563f5[_0x505b1a(0x172)](_0x30d882=>{_0x3b8d8d+='('+_0x30d882+')';}):_0x3b8d8d+=_0x4563f5;}),_0x3b8d8d['replace'](/,/g,'-')['trim']();},renderApplicable=(_0xebadf8,_0x15263b)=>{const _0x36f303=a4_0x53e28c;let _0x107f75='';return _0xebadf8[_0x36f303(0x172)]((_0x4c3956,_0x1aa6fd)=>{const _0x3e20e2=_0x36f303;if(_0x1aa6fd!==0x0)_0x107f75+='|';if(_0x4c3956[_0x3e20e2(0x1d4)]===_0x3e20e2(0x1ca)){_0x107f75+=0x1;return;}else{if(_0x4c3956[_0x3e20e2(0x1d4)]===_0x3e20e2(0x1b5)){_0x107f75+=0x2;return;}else{if(_0x4c3956[_0x3e20e2(0x1d4)]==='except'){_0x107f75+='(',_0x4c3956[_0x3e20e2(0x1e0)][_0x3e20e2(0x172)]((_0x3f047e,_0x4368c6)=>{const _0x4a09fd=_0x3e20e2;_0x107f75+=getGroupIndex(_0x3f047e[_0x4a09fd(0x1d4)],_0x15263b);if(_0x4368c6!==_0x4c3956[_0x4a09fd(0x1e0)][_0x4a09fd(0x1e1)]-0x1)_0x107f75+='-';}),_0x107f75+=')';return;}else{let _0x574789=getGroupIndex(_0x4c3956['chatid'],_0x15263b);_0x574789==0x0?_0x107f75+=0x2:_0x107f75+=_0x574789;}}}}),_0x107f75[_0x36f303(0x1ab)]();},getKeywords=_0x5915a8=>{const _0x1a084d=a4_0x53e28c,_0x589bd2=/\(([^)]+)\)/g;let _0x37d501=spliter(_0x5915a8,'|');return _0x37d501=_0x37d501[_0x1a084d(0x19f)](_0x44cebe=>{const _0x5afe0b=_0x1a084d;return _0x589bd2[_0x5afe0b(0x18d)](_0x44cebe)?_0x44cebe[_0x5afe0b(0x1ba)](_0x589bd2)[_0x5afe0b(0x19f)](_0x405efc=>spliter(_0x405efc[_0x5afe0b(0x1a4)](/[()]/g,''),'-')):_0x44cebe;}),_0x37d501;},getApplicable=async _0x408ea5=>{const _0x1f98b2=a4_0x53e28c;let _0x1f9a31=await getGroups(),_0x286cb0=[],_0x4d51d4=spliter(_0x408ea5,'|');const _0x19c0eb=/\(([^)]+)\)/g;for await(let _0x2645d4 of _0x4d51d4){if(_0x19c0eb[_0x1f98b2(0x18d)](_0x2645d4)){let _0x511c05=spliter(_0x2645d4[_0x1f98b2(0x1a4)](/[()]/g,''),'-');_0x511c05=_0x511c05[_0x1f98b2(0x1c0)](_0x331d93=>_0x331d93!=0x1||_0x331d93!=0x2)[_0x1f98b2(0x19f)](_0x1020e6=>({'name':_0x1f9a31[parseInt(_0x1020e6)-0x3][_0x1f98b2(0x17e)],'chatid':_0x1f9a31[parseInt(_0x1020e6)-0x3][_0x1f98b2(0x1d4)]})),_0x286cb0[_0x1f98b2(0x188)]({'name':_0x1f98b2(0x189)+_0x511c05['length']+'\x20قروب','chatid':_0x1f98b2(0x1e0),'except':_0x511c05});}else{_0x2645d4=parseInt(_0x2645d4);if(!Number[_0x1f98b2(0x16c)](_0x2645d4))continue;if(_0x2645d4==0x1)_0x286cb0[_0x1f98b2(0x188)]({'name':'الرسائل\x20الخاصة','chatid':_0x1f98b2(0x1ca)});else{if(_0x2645d4==0x2)_0x286cb0['push']({'name':'جميع\x20القروبات','chatid':'allgroups'});else{let _0x5d6df5=_0x2645d4-0x3;_0x286cb0[_0x1f98b2(0x188)](_0x1f9a31[_0x5d6df5]);}}}}let _0xe41ec3=_0x286cb0[_0x1f98b2(0x1b2)](_0x5c74bf=>_0x5c74bf['chatid']==_0x1f98b2(0x1b5));return _0xe41ec3&&(_0x286cb0=_0x286cb0[_0x1f98b2(0x1c0)](_0x58447e=>!_0x58447e[_0x1f98b2(0x1d4)][_0x1f98b2(0x178)](_0x1f98b2(0x1a8)))),_0x286cb0;},getGsheet=async _0x3cfca1=>{const _0x32e2ab=a4_0x53e28c,_0x2caec5=await getAllSheets();let _0x41a9a3=_0x2caec5[_0x32e2ab(0x1b2)](_0x2d750a=>_0x2d750a[_0x32e2ab(0x1b0)]==_0x3cfca1);if(!_0x41a9a3){let _0x2babf3=await duplicateSheet(_0x3cfca1);return _0x2babf3;}let _0x5be11c=_0x2caec5[_0x32e2ab(0x1c0)](_0x1b6fc6=>_0x1b6fc6[_0x32e2ab(0x1b0)]==_0x3cfca1);return _0x5be11c[0x0];};function a4_0x4550(_0x4fc6d9,_0x127bec){const _0xd26fc2=a4_0xd26f();return a4_0x4550=function(_0x455018,_0x14b9e0){_0x455018=_0x455018-0x165;let _0xecfb84=_0xd26fc2[_0x455018];return _0xecfb84;},a4_0x4550(_0x4fc6d9,_0x127bec);}function a4_0xd26f(){const _0xdb8c0e=['findIndex','GSpreadsheet','conditions','includes','44214ctZiEb','\x0aادخل\x200\x20لابقائه\x20بدون\x20تغيير','هل\x20تريد\x20اضافة\x20هذا\x20الشرط\x20الى\x20جوجل\x20شيت\x20كونترول\x20؟\x20🤓\x0a1-\x20نعم\x0a2-\x20لا','\x0aالرد\x20في\x20القروبات:\x0a','مرحباً\x20بك\x20في\x20خدمة\x20انشاء\x20شرط\x20جديد\x20لسحب\x20الرسائل\x0aفضلا\x20ادخل\x20اسم\x20الشرط\x20الجديد\x20🖋️\x0a\x0aللإلغاء\x20❌\x20ادخل\x20كلمة\x20الغاء','name','reply','لا\x20يوجد\x20شروط\x20لحذفها\x20📭','تمت\x20المزامنة\x20بنجاح\x20✅','newCondition-name','3739806qrJUTZ','[ERROR!]\x20Can\x27t\x20Post\x20new\x20Condition\x20to\x20Google\x20Sheets:','فضلا\x20ادخل\x20*الكلمات\x20المعطِلة*\x20مع\x20الفصل\x20بينهم\x20بعلامة\x20*|*\x20😃\x0aاذا\x20كنت\x20لا\x20تريد\x20كلمات\x20معطِلة\x20ادخل\x20رقم\x200\x20😎\x0aهذه\x20الكلمات\x20اذا\x20توافرت\x20سيتم\x20تجاهل\x20الرسالة\x20حتى\x20وان\x20توفرت\x20بها\x20الكلمات\x20المفتاحية\x0aيمكنك\x20ايضا\x20اشتراط\x20جمع\x20اكثر\x20من\x20كلمة\x20معطلة\x20بإضافة\x20++\x0aامثلة\x20:\x0aمطلوب|محتاج|نحتاج|احتاج\x0aمطلوب\x20++\x20كتب|محتاج\x0aيمكن\x20استخدام\x20الكلمات\x20المفتاحية\x20المتقدمة\x20:\x0a(احتاج-ارید)(كتاب-كتب)','saveUpdatedCells','384JoNHOq','push','جميع\x20القروبات\x20باستثناء\x20','إلغاء','تفضل\x20بكتابة\x20كود\x20Google\x20Sheets\x20او\x20رابط\x20الملف\x0aالكود\x20الحالي\x20:\x0a','blockedkeywords','test','تم\x20ارسال\x20هذا\x20الشرط\x20الى\x20كونترول\x20جوجل\x20شيت\x20بنجاح👍','*\x0aالكلمات\x20المعطِلةُ:\x20*','[ERROR!]\x20Syncing\x20with\x20G\x20Sheets:','بدون','join','1-الرسائل\x20الخاصة\x0a2-جميع\x20القروبات\x0a','exports','رقم\x20غير\x20صحيح\x20حاول\x20مرة\x20اخرى\x20😐','newCondition-post2control','فضلا\x20ادخل\x20الرد\x20الذي\x20سيرسلة\x20البرنامج\x20على\x20الرسائل\x20التي\x20تطبق\x20هذا\x20الشرط\x20🧐\x0a*في\x20القروبات*\x0aاذا\x20كنت\x20لا\x20تريد\x20رد\x20ادخل\x20رقم\x200\x20🤐','applicable','فضلا\x20قم\x20باختيار\x20جهة\x20السحب\x20🕵\x0aيمكنك\x20اختيار\x20اكثر\x20من\x20جهة\x20مع\x20الفصل\x20بين\x20ارقامها\x20بعلامة\x20*|*\x0aمثال\x201|2\x0a\x0aلاستثناء\x20قروبات\x20من\x20جميع\x20القروبات\x0aادخل\x20ارقام\x20الجروبات\x20المستثناه\x20بين\x20قوسين\x20وبينهم\x20علامة\x20*-*\x0aمثال:\x20(5-6-9)\x0aيمكن\x20ايضا\x20جمعها\x20مع\x20الرسائل\x20الخاصة\x0a1|(9-6-5)\x0a\x0a','Googlecodes-sheets','[ERROR!]\x20Can\x27t\x20Create\x20Control\x20Sheet:','keywords','blue','Y1:Z','map','loadCells','تم\x20الالغاء\x20بنجاح\x20✅','لم\x20يتم\x20ارسال\x20هذا\x20الشرط\x20الى\x20كونترول\x20جوجل\x20شيت\x20👍','49035FSFgPz','replace','newCondition-keyword','فشل\x20ارسال\x20الشرط\x20الى\x20جوجل\x20شيت\x20كونترول','2787264gySrFz','@g.us','GroupID','32392810ghoJNs','trim','gsheet','newCondition-applicable','*\x0aالكلمات\x20المفتاحية:\x20*','1314887LMcijK','sheetName','فضلا\x20قم\x20باختيار\x20الشرط\x20المطلوب\x20حذفه\x20📋\x0a\x0a','some','الغاء','newCondition-blockedkeyword','allgroups','deleteCondition-name','تم\x20اضافة\x20الكود\x20بنجاح\x20🥳\x0a','newCondition-reply-group','[ERROR!]\x20Google\x20Sheets:','match','*بدون\x20رد*','red','getCellByA1','load','../util/misc','filter','تم\x20اضافة\x20شيت\x20الكنترول\x20لاول\x20مرة\x20يمكنك\x20الان\x20المزامنة','replyprivate','reset','newCondition-gsheet','قائمة','جارٍ\x20المزامنة\x20🔄','\x0a\x0aاسم\x20الشرط:\x20*','toLocaleTimeString','تم\x20انشاء\x20الشرط\x20بنجاح\x20🥳\x0a\x0aالاسم:\x20*','private','A1:G100','sheet','Googlecodes-drive','en-GB','toLocaleDateString','تفضل\x20بكتابة\x20كود\x20Google\x20Drive\x20او\x20رابط\x20المجلد\x0aالكود\x20الحالي\x20:\x0a','لا\x20يوجد','../util/files','24WXtkBc','chatid','*\x0aالرد\x20في\x20الخاص:\x0a','خطأ\x20اثناء\x20المزامنة\x20😢','988680QTWPVO','body','split','value','فضلا\x20ادخل\x20*الكلمات\x20المفتاحية*\x20مع\x20الفصل\x20بينهم\x20بعلامة\x20*|*\x20✉️🔑\x0aيمكنك\x20ايضا\x20اشتراط\x20توافر\x20اكثر\x20من\x20كلمة\x20مفتاحية\x20بإضافة\x20++\x0aامثلة\x20:\x0aعرض\x20خاص|توفير\x0aعرض\x20خاص\x20++\x20كتب|توفير\x0aيمكن\x20استخدام\x20الكلمات\x20المفتاحية\x20المتقدمة\x20:\x0a(احتاج-ارید)(دکتور-طبیب)(عیون-نظر)|😎','CONTROL','stay','فضلا\x20ادخل\x20الرد\x20الذي\x20سيرسلة\x20البرنامج\x20على\x20الرسائل\x20التي\x20تطبق\x20هذا\x20الشرط\x20🧐\x0a*في\x20الخاص*\x0aاذا\x20كنت\x20لا\x20تريد\x20رد\x20ادخل\x20رقم\x200\x20🤐','خدمة','except','length','../util/gsheets','SYNC...','*\x0aجهة\x20السحب:\x20*','*\x0aجوجل\x20شيت:\x20*','حدث\x20خطأ\x20في\x20الوصول\x20لجوجل\x20شيتس\x20😣\x0aتاكد\x20ان\x20اسم\x20الشرط\x20الجديد\x20لا\x20يطابق\x20شيت\x20موجود\x20بالفعل','sheetsByTitle','null','📚\x20*كل\x20الشروط*\x20📚','isInteger','1-شيت\x20جديد\x0a','/folders/','en-EG','newCondition-reply-private','sendMessage','forEach','خطأ\x20😢\x0aلا\x20يمكنني\x20اضافة\x20شيت\x20الكنترول\x0aتأكد\x20من\x20ادخال\x20كافة\x20البيانات\x20و\x20اعد\x20المحاولة','16wriBLu'];a4_0xd26f=function(){return _0xdb8c0e;};return a4_0xd26f();}const processSync=async _0x8b065d=>{const _0x499031=a4_0x53e28c;if(_0x8b065d[_0x499031(0x1e1)]<0x1)return;await initConditions();for await(let _0x3ccc68 of _0x8b065d){_0x3ccc68[_0x499031(0x19c)]=getKeywords(_0x3ccc68['keywords']),_0x3ccc68['blockedkeywords']=getKeywords(_0x3ccc68['blockedkeywords']),_0x3ccc68[_0x499031(0x198)]=await getApplicable(_0x3ccc68[_0x499031(0x198)]),_0x3ccc68[_0x499031(0x1ac)]=await getGsheet(_0x3ccc68['gsheet']),await addCondition(_0x3ccc68);}},controlmsgHandler=async _0x3ed6b8=>{const _0x2b736c=a4_0x53e28c,_0x497e55=async _0x3cdf0a=>{const _0x4c8db8=a4_0x4550;service=0x0,await _0x3ed6b8[_0x4c8db8(0x17f)](''+(_0x3cdf0a?_0x3cdf0a:'تم\x20الالغاء\x20بنجاح\x20✅')),newCondition={},await client[_0x4c8db8(0x171)](settings[_0x4c8db8(0x1a9)],menu);};await Sleep(0x1f4);_0x3ed6b8['type']=='chat'&&(_0x3ed6b8['body']=EngishNumbers(_0x3ed6b8[_0x2b736c(0x1d8)],!![]));if(_0x3ed6b8['body']==_0x2b736c(0x1a1)||_0x3ed6b8[_0x2b736c(0x1d8)]=='يمكنك\x20ارسال\x20رسائل\x20نصية\x20فقط')return;if(_0x3ed6b8[_0x2b736c(0x1d8)]==_0x2b736c(0x18a)||_0x3ed6b8[_0x2b736c(0x1d8)]==_0x2b736c(0x1b3)){await _0x497e55();return;}if(service==_0x2b736c(0x182)){const _0x2b286d=conditions[_0x2b736c(0x1b2)](_0x25dea7=>_0x25dea7['name']==_0x3ed6b8[_0x2b736c(0x1d8)]);if(_0x2b286d){await _0x497e55('هذا\x20الشرط\x20موجود\x20مسبقا\x20حاول\x20مرة\x20اخرى\x20باسم\x20مختلف😐');return;}newCondition[_0x2b736c(0x17e)]=_0x3ed6b8['body'],await _0x3ed6b8[_0x2b736c(0x17f)](_0x2b736c(0x1db)),service='newCondition-keyword';return;}if(service==_0x2b736c(0x1a5)){newCondition[_0x2b736c(0x19c)]=getKeywords(_0x3ed6b8[_0x2b736c(0x1d8)]),await _0x3ed6b8['reply'](_0x2b736c(0x185)),service=_0x2b736c(0x1b4);return;}if(service==_0x2b736c(0x1b4)){_0x3ed6b8[_0x2b736c(0x1d8)]=='0'?newCondition[_0x2b736c(0x18c)]=[]:newCondition[_0x2b736c(0x18c)]=getKeywords(_0x3ed6b8['body']);let _0x183795=await getGroups(),_0x8d0358=_0x2b736c(0x199);_0x8d0358+=_0x2b736c(0x193);var _0xdac707=0x2;for await(const _0x4ed395 of _0x183795){_0xdac707+=0x1,_0x8d0358+=_0xdac707+'-'+_0x4ed395[_0x2b736c(0x17e)]+'\x0a';}await _0x3ed6b8[_0x2b736c(0x17f)](_0x8d0358),service=_0x2b736c(0x1ad);return;}if(service==_0x2b736c(0x1ad)){newCondition[_0x2b736c(0x198)]=await getApplicable(_0x3ed6b8['body']);const _0x3cd735=await getAllSheets();let _0x4297e5='فضلا\x20قم\x20باختيار\x20شيت\x20حفظ\x20الرسائل\x20💾\x0a\x0a';_0x4297e5+=_0x2b736c(0x16d);var _0xdac707=0x1;for await(const _0x52d051 of _0x3cd735){_0xdac707+=0x1,_0x4297e5+=_0xdac707+'-'+_0x52d051[_0x2b736c(0x1b0)]+'\x0a';}await _0x3ed6b8[_0x2b736c(0x17f)](_0x4297e5),service=_0x2b736c(0x1c4);return;}if(service==_0x2b736c(0x1c4)){const _0x44cd83=await getAllSheets();let _0xc1dd5b={};_0xdac707=parseInt(_0x3ed6b8[_0x2b736c(0x1d8)]);if(!Number['isInteger'](_0xdac707))return;if(_0xdac707==0x1)try{_0xc1dd5b=await duplicateSheet(newCondition[_0x2b736c(0x17e)]);}catch(_0x911e8d){await _0x497e55(_0x2b736c(0x168)),terminal[_0x2b736c(0x1bc)](_0x2b736c(0x1b9)+_0x911e8d);return;}else{let _0x26374d=_0xdac707-0x2;_0xc1dd5b=_0x44cd83[_0x26374d];}newCondition[_0x2b736c(0x1ac)]=_0xc1dd5b,await _0x3ed6b8[_0x2b736c(0x17f)](_0x2b736c(0x1de)),service=_0x2b736c(0x170);return;}if(service==_0x2b736c(0x170)){_0x3ed6b8[_0x2b736c(0x1d8)]=='0'?newCondition['replyprivate']=![]:newCondition[_0x2b736c(0x1c2)]=_0x3ed6b8[_0x2b736c(0x1d8)];await _0x3ed6b8[_0x2b736c(0x17f)](_0x2b736c(0x197)),service=_0x2b736c(0x1b8);return;}if(service==_0x2b736c(0x1b8)){_0x3ed6b8[_0x2b736c(0x1d8)]=='0'?newCondition[_0x2b736c(0x17f)]=![]:newCondition['reply']=_0x3ed6b8[_0x2b736c(0x1d8)];await addCondition(newCondition);const _0x47c732=newCondition[_0x2b736c(0x198)][_0x2b736c(0x19f)](_0x62ffd1=>_0x62ffd1[_0x2b736c(0x17e)])[_0x2b736c(0x192)]();await _0x3ed6b8['reply'](_0x2b736c(0x1c9)+newCondition[_0x2b736c(0x17e)]+_0x2b736c(0x1ae)+renderKeywords(newCondition[_0x2b736c(0x19c)])+_0x2b736c(0x18f)+(newCondition[_0x2b736c(0x18c)][_0x2b736c(0x1e1)]>0x0?renderKeywords(newCondition[_0x2b736c(0x18c)]):_0x2b736c(0x191))+_0x2b736c(0x166)+_0x47c732+_0x2b736c(0x167)+newCondition['gsheet'][_0x2b736c(0x1b0)]+_0x2b736c(0x1d5)+(newCondition[_0x2b736c(0x1c2)]?newCondition['replyprivate']:'*بدون\x20رد*')+'\x0aالرد\x20في\x20القروبات:\x0a'+(newCondition[_0x2b736c(0x17f)]?newCondition[_0x2b736c(0x17f)]:_0x2b736c(0x1bb))),global[_0x2b736c(0x177)]=getConditions();const _0x556670=await getAllSheets(!![]);let _0x59e95a=_0x556670[_0x2b736c(0x1b2)](_0x403c5d=>_0x403c5d[_0x2b736c(0x1b0)]=='CONTROL');if(_0x59e95a){await _0x3ed6b8[_0x2b736c(0x17f)](_0x2b736c(0x17b)),service=_0x2b736c(0x196);return;}else newCondition={},service=0x0,await client[_0x2b736c(0x171)](settings['GroupID'],menu);}if(service=='newCondition-post2control'){if(_0x3ed6b8[_0x2b736c(0x1d8)]=='1')try{const _0x279b5b=new Date(),_0x14489b=_0x279b5b['toLocaleDateString'](_0x2b736c(0x1ce))+'\x20'+_0x279b5b['toLocaleTimeString'](_0x2b736c(0x16f));let _0x35fc39=await getGroups(!![]),_0x38fd4d=global['GSpreadsheet'][_0x2b736c(0x169)]['CONTROL'];await _0x38fd4d['loadCells'](_0x2b736c(0x1cb)),await _0x38fd4d[_0x2b736c(0x1a0)]('Y1:Z');let _0x1e0826=parseInt(_0x38fd4d[_0x2b736c(0x1bd)]('D1')[_0x2b736c(0x1da)])+0x4,_0x30eae8=[['A'+(_0x1e0826+0x1),newCondition[_0x2b736c(0x17e)]],['B'+(_0x1e0826+0x1),renderKeywords(newCondition[_0x2b736c(0x19c)])],['C'+(_0x1e0826+0x1),renderKeywords(newCondition[_0x2b736c(0x18c)])],['D'+(_0x1e0826+0x1),renderApplicable(newCondition['applicable'],_0x35fc39)],['E'+(_0x1e0826+0x1),newCondition[_0x2b736c(0x1ac)][_0x2b736c(0x1b0)]],['F'+(_0x1e0826+0x1),''+(newCondition['replyprivate']?newCondition[_0x2b736c(0x1c2)]:'')],['G'+(_0x1e0826+0x1),''+(newCondition['reply']?newCondition[_0x2b736c(0x17f)]:'')]];_0x30eae8[_0x2b736c(0x172)](_0x5991ca=>{const _0x3bfff6=_0x2b736c;_0x38fd4d['getCellByA1'](_0x5991ca[0x0])[_0x3bfff6(0x1da)]=_0x5991ca[0x1];});let _0xdcc047=0x0;for await(const _0x439ca3 of _0x35fc39){_0xdcc047+=0x1,_0x38fd4d[_0x2b736c(0x1bd)]('Y'+(_0xdcc047+0x1))[_0x2b736c(0x1da)]=_0x439ca3[_0x2b736c(0x17e)],_0x38fd4d['getCellByA1']('Z'+(_0xdcc047+0x1))['value']=_0xdcc047;}_0x38fd4d['getCellByA1']('B1')[_0x2b736c(0x1da)]=_0x14489b,await _0x38fd4d[_0x2b736c(0x186)](),await _0x3ed6b8[_0x2b736c(0x17f)](_0x2b736c(0x18e));}catch(_0x5c5b46){await _0x3ed6b8[_0x2b736c(0x17f)](_0x2b736c(0x1a6)),terminal[_0x2b736c(0x1bc)](_0x2b736c(0x184)+_0x5c5b46);}else await _0x3ed6b8['reply'](_0x2b736c(0x1a2));await client[_0x2b736c(0x171)](settings[_0x2b736c(0x1a9)],menu),newCondition={},service=0x0;return;}if(service==_0x2b736c(0x1b6)){let _0x47895f=parseInt(_0x3ed6b8[_0x2b736c(0x1d8)]);if(!Number[_0x2b736c(0x16c)](_0x47895f))return;if(_0x47895f>=conditions[_0x2b736c(0x1e1)]+0x1){await _0x497e55(_0x2b736c(0x195));return;}_0x47895f=_0x47895f-0x1;const _0x4080b7=conditions[_0x47895f];await deleteCondition(_0x4080b7['name']),global['conditions']=getConditions(),await _0x3ed6b8[_0x2b736c(0x17f)]('تم\x20حذف\x20الشرط\x20بنجاح\x20🥳'),await client[_0x2b736c(0x171)](settings[_0x2b736c(0x1a9)],menu),service=0x0;return;}if(service==_0x2b736c(0x19a)){const _0x4295e8=getDriveID();let _0x45cc6b='';if(_0x3ed6b8[_0x2b736c(0x1d8)]!='0'){_0x3ed6b8['body'][_0x2b736c(0x178)]('/d/')?_0x45cc6b=getLongestText(_0x3ed6b8[_0x2b736c(0x1d8)][_0x2b736c(0x1d9)]('/')):_0x45cc6b=_0x3ed6b8[_0x2b736c(0x1d8)];try{await setSheetID(_0x45cc6b),await Gsheet[_0x2b736c(0x1be)](),await _0x3ed6b8[_0x2b736c(0x17f)]('تم\x20اضافة\x20الكود\x20بنجاح\x20🥳\x0a'+_0x45cc6b);}catch(_0x8f62c6){terminal[_0x2b736c(0x1bc)]('[ERROR!]\x20Can\x27t\x20Access\x20This\x20Google\x20Sheet'),await _0x3ed6b8[_0x2b736c(0x17f)]('لا\x20يمكنني\x20الوصول\x20لهذا\x20الشيت\x20الان\x20ولكني\x20حفظت\x20الكود\x20😑\x0a'+_0x45cc6b);}}await _0x3ed6b8[_0x2b736c(0x17f)](_0x2b736c(0x1d0)+(_0x4295e8!=''?_0x4295e8:_0x2b736c(0x1d1))+_0x2b736c(0x17a)),service=_0x2b736c(0x1cd);return;}if(service==_0x2b736c(0x1cd)){let _0xdf40f='';_0x3ed6b8[_0x2b736c(0x1d8)]!='0'&&(_0x3ed6b8['body'][_0x2b736c(0x178)](_0x2b736c(0x16e))?_0xdf40f=getLongestText(_0x3ed6b8[_0x2b736c(0x1d8)][_0x2b736c(0x1d9)]('/')):_0xdf40f=_0x3ed6b8['body'],await setDriveID(_0xdf40f),await _0x3ed6b8[_0x2b736c(0x17f)](_0x2b736c(0x1b7)+_0xdf40f));await client['sendMessage'](settings[_0x2b736c(0x1a9)],menu),service=0x0;return;}switch(_0x3ed6b8[_0x2b736c(0x1d8)]){case _0x2b736c(0x1df):case _0x2b736c(0x1c5):await _0x3ed6b8[_0x2b736c(0x17f)](menu),service=0x0;return;case'1':service=_0x2b736c(0x182),await _0x3ed6b8['reply'](_0x2b736c(0x17d));return;break;case'2':service=_0x2b736c(0x1b6);if(conditions['length']===0x0)await _0x497e55(_0x2b736c(0x180));else{let _0xeb8ffa=_0x2b736c(0x1b1);var _0xdac707=0x0;for await(const _0x59da2b of conditions){_0xdac707+=0x1,_0xeb8ffa+=_0xdac707+'-'+_0x59da2b[_0x2b736c(0x17e)]+'\x0a';}await _0x3ed6b8['reply'](_0xeb8ffa);}return;break;case'3':service=0x0;if(conditions[_0x2b736c(0x1e1)]===0x0)await _0x497e55('لا\x20يوجد\x20شروط\x20لعرضها\x20📭');else{let _0x435ce3=_0x2b736c(0x16b);for await(const _0x5c751f of conditions){let _0x3ec5f=_0x5c751f[_0x2b736c(0x198)]['map'](_0x410b6e=>_0x410b6e[_0x2b736c(0x17e)])['join']();_0x435ce3+=_0x2b736c(0x1c7)+_0x5c751f[_0x2b736c(0x17e)]+_0x2b736c(0x1ae)+renderKeywords(_0x5c751f[_0x2b736c(0x19c)])+_0x2b736c(0x18f)+(_0x5c751f[_0x2b736c(0x18c)]['length']>0x0?renderKeywords(_0x5c751f[_0x2b736c(0x18c)]):'بدون')+_0x2b736c(0x166)+_0x3ec5f+'*\x0aجوجل\x20شيت:\x20*'+_0x5c751f['gsheet'][_0x2b736c(0x1b0)]+_0x2b736c(0x1d5)+(_0x5c751f[_0x2b736c(0x1c2)]?_0x5c751f[_0x2b736c(0x1c2)]:_0x2b736c(0x1bb))+_0x2b736c(0x17c)+(_0x5c751f[_0x2b736c(0x17f)]?_0x5c751f[_0x2b736c(0x17f)]:'*بدون\x20رد*');}await _0x3ed6b8[_0x2b736c(0x17f)](_0x435ce3),await _0x3ed6b8[_0x2b736c(0x17f)](menu);}return;case'4':const _0x59ac3d=getSheetID();await _0x3ed6b8[_0x2b736c(0x17f)](_0x2b736c(0x18b)+(_0x59ac3d!=''?_0x59ac3d:'لا\x20يوجد')+'\x0aادخل\x200\x20لابقائه\x20بدون\x20تغيير'),service=_0x2b736c(0x19a);return;case'5':service=0x0;const _0x496a72=await getAllSheets(!![]);let _0x41d62a=_0x496a72['some'](_0x586185=>_0x586185[_0x2b736c(0x1b0)]==_0x2b736c(0x1dc));if(_0x41d62a){const _0x341fc3=new Date(),_0x30d14c=_0x341fc3[_0x2b736c(0x1cf)](_0x2b736c(0x1ce))+'\x20'+_0x341fc3[_0x2b736c(0x1c8)]('en-EG');await _0x3ed6b8[_0x2b736c(0x17f)](_0x2b736c(0x1c6)),terminal['stay']('SYNC...',_0x2b736c(0x19d));let _0x195428=global[_0x2b736c(0x176)][_0x2b736c(0x169)]['CONTROL'];await _0x195428[_0x2b736c(0x1a0)](_0x2b736c(0x1cb)),await _0x195428[_0x2b736c(0x1a0)](_0x2b736c(0x19e));let _0x279b9a=[];for(let _0x16ce6d=0x5;_0x16ce6d<0x64;_0x16ce6d++){let _0x5a0496={'name':String(_0x195428[_0x2b736c(0x1bd)]('A'+_0x16ce6d)[_0x2b736c(0x1da)]),'keywords':String(_0x195428[_0x2b736c(0x1bd)]('B'+_0x16ce6d)[_0x2b736c(0x1da)]),'blockedkeywords':String(_0x195428['getCellByA1']('C'+_0x16ce6d)['value'])=='null'?'':String(_0x195428[_0x2b736c(0x1bd)]('C'+_0x16ce6d)[_0x2b736c(0x1da)]),'applicable':String(_0x195428[_0x2b736c(0x1bd)]('D'+_0x16ce6d)['value']),'gsheet':String(_0x195428[_0x2b736c(0x1bd)]('E'+_0x16ce6d)[_0x2b736c(0x1da)]),'replyprivate':_0x195428[_0x2b736c(0x1bd)]('F'+_0x16ce6d)[_0x2b736c(0x1da)]===null?![]:String(_0x195428[_0x2b736c(0x1bd)]('F'+_0x16ce6d)[_0x2b736c(0x1da)]),'reply':_0x195428[_0x2b736c(0x1bd)]('G'+_0x16ce6d)['value']===null?![]:String(_0x195428['getCellByA1']('G'+_0x16ce6d)['value'])};if(_0x5a0496['name']==_0x2b736c(0x16a)||_0x5a0496[_0x2b736c(0x19c)]==_0x2b736c(0x16a)||_0x5a0496[_0x2b736c(0x198)]==_0x2b736c(0x16a)||_0x5a0496[_0x2b736c(0x1ac)]==_0x2b736c(0x16a))continue;_0x279b9a[_0x2b736c(0x188)](_0x5a0496);}let _0x192793=await getGroups(!![]),_0x41998f=0x0;for await(const _0x5f2e47 of _0x192793){_0x41998f+=0x1,_0x195428['getCellByA1']('Y'+(_0x41998f+0x1))[_0x2b736c(0x1da)]=_0x5f2e47[_0x2b736c(0x17e)],_0x195428['getCellByA1']('Z'+(_0x41998f+0x1))['value']=_0x41998f;}_0x195428[_0x2b736c(0x1bd)]('B1')['value']=_0x30d14c,await _0x195428[_0x2b736c(0x186)]();try{await processSync(_0x279b9a),global['conditions']=getConditions(),await _0x3ed6b8[_0x2b736c(0x17f)](_0x2b736c(0x181)),terminal[_0x2b736c(0x1c3)]();}catch(_0xcb8f6e){await _0x3ed6b8['reply'](_0x2b736c(0x1d6)),terminal[_0x2b736c(0x1bc)](_0x2b736c(0x190)+_0xcb8f6e);}}else{terminal[_0x2b736c(0x1dd)](_0x2b736c(0x165),_0x2b736c(0x19d));try{let _0x4d487f=await getGroups(!![]),_0x42ff8d=await createControlSheet(_0x4d487f);for await(const _0x6f642f of global[_0x2b736c(0x177)]){values=[_0x6f642f[_0x2b736c(0x17e)],renderKeywords(_0x6f642f[_0x2b736c(0x19c)]),renderKeywords(_0x6f642f[_0x2b736c(0x18c)]),renderApplicable(_0x6f642f['applicable'],_0x4d487f),_0x6f642f['gsheet'][_0x2b736c(0x1b0)],''+(_0x6f642f['replyprivate']?_0x6f642f[_0x2b736c(0x1c2)]:''),''+(_0x6f642f[_0x2b736c(0x17f)]?_0x6f642f[_0x2b736c(0x17f)]:'')],await _0x42ff8d[_0x2b736c(0x1cc)]['addRow'](values);}await _0x3ed6b8['reply'](_0x2b736c(0x1c1));}catch(_0x556a83){terminal[_0x2b736c(0x1bc)](_0x2b736c(0x19b)+_0x556a83),await _0x3ed6b8['reply'](_0x2b736c(0x173));}terminal[_0x2b736c(0x1c3)]();}await _0x3ed6b8[_0x2b736c(0x17f)](menu);return;}};module[a4_0x53e28c(0x194)]={'controlmsgHandler':controlmsgHandler,'renderKeywords':renderKeywords};