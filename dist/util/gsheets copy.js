const a14_0x25aba7=a14_0x3159;(function(_0x48265d,_0x44b5a2){const _0x2a1e91=a14_0x3159,_0x2f864b=_0x48265d();while(!![]){try{const _0x3b1ccc=parseInt(_0x2a1e91(0xc3))/0x1+parseInt(_0x2a1e91(0xee))/0x2+parseInt(_0x2a1e91(0xf5))/0x3+parseInt(_0x2a1e91(0xeb))/0x4+parseInt(_0x2a1e91(0xd8))/0x5*(-parseInt(_0x2a1e91(0xc8))/0x6)+-parseInt(_0x2a1e91(0xef))/0x7*(-parseInt(_0x2a1e91(0xcf))/0x8)+-parseInt(_0x2a1e91(0xf0))/0x9;if(_0x3b1ccc===_0x44b5a2)break;else _0x2f864b['push'](_0x2f864b['shift']());}catch(_0x21f95f){_0x2f864b['push'](_0x2f864b['shift']());}}}(a14_0x3175,0x20b42));function a14_0x3159(_0x18fc74,_0x466a52){const _0x317502=a14_0x3175();return a14_0x3159=function(_0x3159fa,_0x34ce99){_0x3159fa=_0x3159fa-0xc0;let _0x275fd1=_0x317502[_0x3159fa];return _0x275fd1;},a14_0x3159(_0x18fc74,_0x466a52);}const {google}=require(a14_0x25aba7(0xe6)),{_creds}=require(a14_0x25aba7(0xc1)),{groupName:defaultSheetName}=require(a14_0x25aba7(0xec));class Gsheets{constructor(){const _0x4c362c=a14_0x25aba7;this[_0x4c362c(0xe4)]=new google['auth']['GoogleAuth']({'keyFile':_creds,'scopes':[_0x4c362c(0xc2),_0x4c362c(0xe8),_0x4c362c(0xe1)]}),this[_0x4c362c(0xe5)]=this[_0x4c362c(0xe4)]['getClient'](),this[_0x4c362c(0xca)]=google[_0x4c362c(0xca)]({'version':'v4','auth':this[_0x4c362c(0xe5)]});}async[a14_0x25aba7(0xc4)](_0x164b8e){const _0x8d6a9e=a14_0x25aba7,_0x3da9bf=await this[_0x8d6a9e(0xca)][_0x8d6a9e(0xcd)][_0x8d6a9e(0xf6)]({'auth':this[_0x8d6a9e(0xe4)],'spreadsheetId':_0x164b8e});let _0x379423=_0x3da9bf['data'][_0x8d6a9e(0xca)][_0x8d6a9e(0xe7)](_0x5d2473=>({'sheetId':_0x5d2473[_0x8d6a9e(0xc7)][_0x8d6a9e(0xdb)],'sheetName':_0x5d2473[_0x8d6a9e(0xc7)]['title']}));return _0x379423=_0x379423[_0x8d6a9e(0xe0)](_0x28f906=>_0x28f906[_0x8d6a9e(0xc5)]!=_0x8d6a9e(0xf4)),{'res':_0x3da9bf,'shortsheets':_0x379423};}async[a14_0x25aba7(0xd7)](_0x52b8b2,_0x151166){const _0x5ec830=a14_0x25aba7,_0x4223e1=await this['sheets']['spreadsheets'][_0x5ec830(0xf1)][_0x5ec830(0xf6)]({'auth':this[_0x5ec830(0xe4)],'spreadsheetId':_0x52b8b2,'range':_0x151166});return _0x4223e1;}async[a14_0x25aba7(0xd0)](_0x5838d8){const _0x319c00=a14_0x25aba7,_0x25cebd=await this[_0x319c00(0xca)][_0x319c00(0xcd)][_0x319c00(0xf8)]({'auth':this[_0x319c00(0xe4)],'resource':{'properties':{'title':_0x5838d8}}});return _0x25cebd;}async[a14_0x25aba7(0xc9)](_0x45a79a){const _0x103cb4=a14_0x25aba7,_0x5073c0=await this['sheets'][_0x103cb4(0xcd)][_0x103cb4(0xf2)]({'auth':this[_0x103cb4(0xe4)],'spreadsheetId':_0x45a79a,'requestBody':{'requests':[{'updateSpreadsheetProperties':{'fields':'*','properties':{'title':defaultSheetName,'locale':_0x103cb4(0xe9),'autoRecalc':'ON_CHANGE','timeZone':_0x103cb4(0xd2),'defaultFormat':{'backgroundColor':{'red':0x1,'green':0x1,'blue':0x1},'padding':{'top':0x2,'right':0x3,'bottom':0x2,'left':0x3},'verticalAlignment':_0x103cb4(0xed),'wrapStrategy':_0x103cb4(0xcb),'textFormat':{'foregroundColor':{},'fontFamily':'arial,sans,sans-serif','fontSize':0xe,'bold':![],'italic':![],'strikethrough':![],'underline':![],'foregroundColorStyle':{'rgbColor':{}}},'backgroundColorStyle':{'rgbColor':{'red':0x1,'green':0x1,'blue':0x1}}},'spreadsheetTheme':{'primaryFontFamily':'Arial','themeColors':[{'colorType':'TEXT','color':{'rgbColor':{}}},{'colorType':'BACKGROUND','color':{'rgbColor':{'red':0x1,'green':0x1,'blue':0x1}}},{'colorType':_0x103cb4(0xce),'color':{'rgbColor':{'red':0.25882354,'green':0.52156866,'blue':0.95686275}}},{'colorType':_0x103cb4(0xea),'color':{'rgbColor':{'red':0.91764706,'green':0.2627451,'blue':0.20784314}}},{'colorType':_0x103cb4(0xd4),'color':{'rgbColor':{'red':0.9843137,'green':0.7372549,'blue':0.015686275}}},{'colorType':_0x103cb4(0xe2),'color':{'rgbColor':{'red':0.20392157,'green':0.65882355,'blue':0.3254902}}},{'colorType':'ACCENT5','color':{'rgbColor':{'red':0x1,'green':0.42745098,'blue':0.003921569}}},{'colorType':_0x103cb4(0xf3),'color':{'rgbColor':{'red':0.27450982,'green':0.7411765,'blue':0.7764706}}},{'colorType':_0x103cb4(0xd6),'color':{'rgbColor':{'red':0.06666667,'green':0.33333334,'blue':0.8}}}]}}}}]}});return _0x5073c0;}async[a14_0x25aba7(0xdf)](_0x2825ba,_0x110cf0){const _0x3a724e=a14_0x25aba7,_0x3ab071=await this['sheets']['spreadsheets'][_0x3a724e(0xf2)]({'auth':this[_0x3a724e(0xe4)],'spreadsheetId':_0x2825ba,'requestBody':{'requests':[{'addSheet':{'properties':{'title':_0x110cf0,'sheetType':_0x3a724e(0xdd),'gridProperties':{'rowCount':0x3e8,'columnCount':0x1a},'tabColorStyle':{'rgbColor':{'red':0x1,'green':0.3,'blue':0.4}}}}}]}});return{'res':_0x3ab071,'sheetId':_0x3ab071[_0x3a724e(0xd3)][_0x3a724e(0xd5)][0x0][_0x3a724e(0xde)][_0x3a724e(0xc7)]['sheetId'],'sheetName':_0x3ab071[_0x3a724e(0xd3)][_0x3a724e(0xd5)][0x0]['addSheet'][_0x3a724e(0xc7)][_0x3a724e(0xda)]};}async[a14_0x25aba7(0xe3)](_0x2d5ff1,_0x246065){const _0x3c2f4f=a14_0x25aba7,_0x4771b1=await this[_0x3c2f4f(0xca)]['spreadsheets'][_0x3c2f4f(0xf2)]({'auth':this['auth'],'spreadsheetId':_0x2d5ff1,'requestBody':{'requests':[{'duplicateSheet':{'newSheetName':_0x246065,'sourceSheetId':0x0}}]}});return{'res':_0x4771b1,'sheetId':_0x4771b1['data'][_0x3c2f4f(0xd5)][0x0]['duplicateSheet'][_0x3c2f4f(0xc7)][_0x3c2f4f(0xdb)],'sheetName':_0x4771b1[_0x3c2f4f(0xd3)]['replies'][0x0]['duplicateSheet'][_0x3c2f4f(0xc7)][_0x3c2f4f(0xda)]};}async['addDropList'](_0x358ef2,_0x359bd0){const _0x5572ff=a14_0x25aba7,_0x3b0ea3=await this[_0x5572ff(0xca)][_0x5572ff(0xcd)]['batchUpdate']({'auth':this[_0x5572ff(0xe4)],'spreadsheetId':_0x358ef2,'requestBody':{'requests':[{'setDataValidation':{'range':{'sheetId':_0x359bd0,'startRowIndex':0x1,'endRowIndex':0x2,'startColumnIndex':0x1,'endColumnIndex':0x2},'rule':{'condition':{'type':_0x5572ff(0xdc),'values':[{'userEnteredValue':'=$Y$2:$Y'}]},'inputMessage':'','strict':!![],'showCustomUi':!![]}}}]}});return _0x3b0ea3;}async[a14_0x25aba7(0xc0)](_0x255231,_0x276cc5,_0xb2cf00){const _0x4e9b54=a14_0x25aba7,_0x557ece=await this[_0x4e9b54(0xca)][_0x4e9b54(0xcd)]['values'][_0x4e9b54(0xc6)]({'auth':this[_0x4e9b54(0xe4)],'spreadsheetId':_0x255231,'range':_0x276cc5,'valueInputOption':_0x4e9b54(0xd9),'resource':{'values':_0xb2cf00}});return{'data':_0x557ece,'range':_0x557ece[_0x4e9b54(0xd3)][_0x4e9b54(0xcc)]['updatedRange']};}async[a14_0x25aba7(0xf9)](_0x3f44ca,_0x114c5d,_0x465285){const _0xddbe9f=a14_0x25aba7,_0x2d1d53=await this[_0xddbe9f(0xca)][_0xddbe9f(0xcd)]['values'][_0xddbe9f(0xd1)]({'auth':this[_0xddbe9f(0xe4)],'spreadsheetId':_0x3f44ca,'range':_0x114c5d,'valueInputOption':_0xddbe9f(0xd9),'resource':{'values':_0x465285}});return _0x2d1d53;}}module[a14_0x25aba7(0xf7)]={'Gsheets':Gsheets};function a14_0x3175(){const _0x20956c=['create','Update','addRow','../lib/paths','https://www.googleapis.com/auth/spreadsheets','186561hOrkit','getSpreadSheet','sheetName','append','properties','2274OVjfIt','defaultFormatSpreadSheet','sheets','OVERFLOW_CELL','updates','spreadsheets','ACCENT1','8uQtiQJ','createSpreadSheet','update','Africa/Cairo','data','ACCENT3','replies','LINK','getSpreadSheetValues','535wBcnzk','USER_ENTERED','title','sheetId','ONE_OF_RANGE','GRID','addSheet','createSheet','filter','https://www.googleapis.com/auth/drive.file','ACCENT4','duplicateSheet','auth','authClient','googleapis','map','https://www.googleapis.com/auth/drive','en_US','ACCENT2','3476MDKOmj','../config','BOTTOM','345618HBGVrv','512120NrPJlJ','3253293GqECFL','values','batchUpdate','ACCENT6','template','307755odjPCR','get','exports'];a14_0x3175=function(){return _0x20956c;};return a14_0x3175();}