function a14_0xcf94(){const _0x383d30=['sheetId','sheet','google-spreadsheet','GSpreadsheet','en-EG','useServiceAccountAuth','./misc','value','exports','2391954LCmtlo','addRow','toLocaleDateString','_rawProperties','../util/terminal','394224iUxefy','Keywords','setDataValidation','اكواد\x20جهات\x20السحب','Reply\x20Group','toLocaleTimeString','_makeSingleUpdateRequest','title','189162DhdjPi','charCodeAt','values','duplicate','Condition\x20Name','addSheet','saveUpdatedCells','Blocked\x20Keywords','32451810HuAZFA','sheetsById','آخر\x20مزامنة','1149791aVphKZ','sheetName','loadCells','9594738jmzDev','match','forEach','CONTROL','=VLOOKUP(B2,Y2:Z,2,FALSE)','49qzHOYU','_rawSheets','Y1:Z','logger','getCellByA1','Applicable\x20To','name','en-GB','A1:G','sheetsByTitle','Reply\x20Private','2yDrGYW','2930595OorTgf','template','4bxTqKW'];a14_0xcf94=function(){return _0x383d30;};return a14_0xcf94();}const a14_0xe5551e=a14_0x2b34;(function(_0x4f6389,_0x3bb685){const _0x45b20d=a14_0x2b34,_0x4d16af=_0x4f6389();while(!![]){try{const _0x316d99=parseInt(_0x45b20d(0x136))/0x1+-parseInt(_0x45b20d(0x149))/0x2*(-parseInt(_0x45b20d(0x156))/0x3)+parseInt(_0x45b20d(0x14c))/0x4*(parseInt(_0x45b20d(0x14a))/0x5)+parseInt(_0x45b20d(0x163))/0x6*(parseInt(_0x45b20d(0x13e))/0x7)+parseInt(_0x45b20d(0x15b))/0x8+parseInt(_0x45b20d(0x139))/0x9+-parseInt(_0x45b20d(0x133))/0xa;if(_0x316d99===_0x3bb685)break;else _0x4d16af['push'](_0x4d16af['shift']());}catch(_0x5c865b){_0x4d16af['push'](_0x4d16af['shift']());}}}(a14_0xcf94,0x985e0));const {GoogleSpreadsheet}=require(a14_0xe5551e(0x14f)),terminal=require(a14_0xe5551e(0x15a)),{_creds}=require('../lib/paths'),{getSheetID}=require('../util/files'),{Sleep}=require(a14_0xe5551e(0x153)),load=async _0x2fb9c6=>{const _0x5bd7b2=a14_0xe5551e;try{const _0x5ff825=require(_creds);if(!_0x2fb9c6)_0x2fb9c6=getSheetID();let _0x36bff9=new GoogleSpreadsheet(_0x2fb9c6);return await _0x36bff9[_0x5bd7b2(0x152)](_0x5ff825),await _0x36bff9['loadInfo'](),global[_0x5bd7b2(0x150)]=_0x36bff9,_0x36bff9;}catch(_0x3fe1c4){terminal[_0x5bd7b2(0x141)]('[WARN!]\x20Google\x20Sheets\x20Is\x20Not\x20Configured\x20Yet',0x1),await Sleep(0xbb8);}},getAllSheets=async(_0x1fc217=![])=>{const _0x54561d=a14_0xe5551e;await load();let _0x49937d=Object[_0x54561d(0x165)](global['GSpreadsheet'][_0x54561d(0x13f)]);return _0x49937d=_0x49937d['map'](_0x43e3b0=>({'sheetId':_0x43e3b0['_rawProperties'][_0x54561d(0x14d)],'sheetName':_0x43e3b0['_rawProperties'][_0x54561d(0x162)]})),!_0x1fc217&&(_0x49937d=_0x49937d['filter'](_0x1c05c7=>_0x1c05c7[_0x54561d(0x137)]!=_0x54561d(0x14b)&&_0x1c05c7['sheetName']!=_0x54561d(0x13c))),_0x49937d;},addMatch=async(_0x8b2e6b,_0x349d3d)=>{const _0x55319e=a14_0xe5551e,_0x396552=global[_0x55319e(0x150)][_0x55319e(0x134)][_0x8b2e6b];await _0x396552[_0x55319e(0x157)](_0x349d3d);},createControlSheet=async _0x9a525f=>{const _0x12778b=a14_0xe5551e,_0x52396a=new Date(),_0x2f3162=_0x52396a[_0x12778b(0x158)](_0x12778b(0x145))+'\x20'+_0x52396a[_0x12778b(0x160)](_0x12778b(0x151));let _0x58a839=await global[_0x12778b(0x150)][_0x12778b(0x168)]({'title':_0x12778b(0x13c),'tabColor':{'red':0x1,'green':0.3,'blue':0.4},'headerValues':[_0x12778b(0x167),_0x12778b(0x15c),_0x12778b(0x132),_0x12778b(0x143),'Sheet\x20Name',_0x12778b(0x148),_0x12778b(0x15f)],'headerRowIndex':0x4}),_0x33233c={'sheet':global['GSpreadsheet'][_0x12778b(0x147)][_0x12778b(0x13c)],'sheetId':_0x58a839[_0x12778b(0x159)]['sheetId'],'sheetName':_0x58a839[_0x12778b(0x159)]['title']};await _0x33233c['sheet'][_0x12778b(0x138)](_0x12778b(0x146)),await _0x33233c[_0x12778b(0x14e)][_0x12778b(0x138)](_0x12778b(0x140));let _0x5a360d=[['Y1','جهة\x20السحب'],['Z1','الكود'],['B1',_0x2f3162],['C1',_0x12778b(0x135)],['C2',_0x12778b(0x15e)],['A2',_0x12778b(0x13d)],['E1','عدد\x20الشروط'],['D1','=sum(max(arrayformula(if(A5:A\x20<>\x20\x22\x22,row(A:A),\x22\x22\x20))))']];_0x5a360d[_0x12778b(0x13b)](_0x42622c=>{const _0x2db435=_0x12778b;_0x33233c[_0x2db435(0x14e)]['getCellByA1'](_0x42622c[0x0])[_0x2db435(0x154)]=_0x42622c[0x1];}),await addDropList(_0x33233c[_0x12778b(0x14d)],'B2','=$Y$2:$Y');let _0x3e1e73=0x0;for await(const _0x1c5b82 of _0x9a525f){_0x3e1e73+=0x1,_0x33233c[_0x12778b(0x14e)][_0x12778b(0x142)]('Y'+(_0x3e1e73+0x1))['value']=_0x1c5b82[_0x12778b(0x144)],_0x33233c[_0x12778b(0x14e)][_0x12778b(0x142)]('Z'+(_0x3e1e73+0x1))['value']=_0x3e1e73;}return await _0x33233c[_0x12778b(0x14e)][_0x12778b(0x131)](),_0x33233c;},duplicateSheet=async _0x257f0c=>{const _0x53a8fd=a14_0xe5551e,_0x4f3729=global[_0x53a8fd(0x150)][_0x53a8fd(0x147)][_0x53a8fd(0x14b)];let _0x2042c0=await _0x4f3729[_0x53a8fd(0x166)]({'title':_0x257f0c});return{'sheetId':_0x2042c0[_0x53a8fd(0x159)]['sheetId'],'sheetName':_0x2042c0[_0x53a8fd(0x159)][_0x53a8fd(0x162)]};},addDropList=async(_0x30dadd,_0x3bd69b,_0x35bee5)=>{const _0x2d11f9=a14_0xe5551e,_0x25e019=_0x3bd69b[_0x2d11f9(0x13a)](/([A-Z]+)([0-9]+)/),_0x2252b3=letterToColumn(_0x25e019[0x1])-0x1,_0x1c18ad=parseInt(_0x25e019[0x2])-0x1,_0x5a02ba=global[_0x2d11f9(0x150)][_0x2d11f9(0x134)][_0x30dadd];let _0x2879f2=await _0x5a02ba[_0x2d11f9(0x161)](_0x2d11f9(0x15d),{'range':{'sheetId':_0x30dadd,'startRowIndex':_0x1c18ad,'endRowIndex':_0x1c18ad+0x1,'startColumnIndex':_0x2252b3,'endColumnIndex':_0x2252b3+0x1},'rule':{'condition':{'type':'ONE_OF_RANGE','values':[{'userEnteredValue':_0x35bee5}]},'inputMessage':'','strict':!![],'showCustomUi':!![]}});return _0x2879f2;},letterToColumn=_0x2e5fc9=>{const _0x26678a=a14_0xe5551e;let _0x20a502=0x0;const {length:_0x339655}=_0x2e5fc9;for(let _0x552998=0x0;_0x552998<_0x339655;_0x552998++){_0x20a502+=(_0x2e5fc9[_0x26678a(0x164)](_0x552998)-0x40)*0x1a**(_0x339655-_0x552998-0x1);}return _0x20a502;};function a14_0x2b34(_0x20d827,_0xf57d4f){const _0xcf9457=a14_0xcf94();return a14_0x2b34=function(_0x2b347b,_0x17d294){_0x2b347b=_0x2b347b-0x131;let _0x46cee6=_0xcf9457[_0x2b347b];return _0x46cee6;},a14_0x2b34(_0x20d827,_0xf57d4f);}module[a14_0xe5551e(0x155)]={'load':load,'addMatch':addMatch,'getAllSheets':getAllSheets,'duplicateSheet':duplicateSheet,'createControlSheet':createControlSheet};