const a6_0x14e7bb=a6_0x147d;(function(_0x1396f4,_0x4c9cb9){const _0x491fa4=a6_0x147d,_0x357df1=_0x1396f4();while(!![]){try{const _0x3d12c1=-parseInt(_0x491fa4(0x135))/0x1+parseInt(_0x491fa4(0x148))/0x2+-parseInt(_0x491fa4(0x126))/0x3+parseInt(_0x491fa4(0x149))/0x4*(parseInt(_0x491fa4(0x12f))/0x5)+parseInt(_0x491fa4(0x14b))/0x6*(-parseInt(_0x491fa4(0x134))/0x7)+-parseInt(_0x491fa4(0x136))/0x8+-parseInt(_0x491fa4(0x11a))/0x9*(-parseInt(_0x491fa4(0x123))/0xa);if(_0x3d12c1===_0x4c9cb9)break;else _0x357df1['push'](_0x357df1['shift']());}catch(_0x495202){_0x357df1['push'](_0x357df1['shift']());}}}(a6_0x4a20,0xec6dc));const path=require(a6_0x14e7bb(0x13c)),{Client,Location,List,Buttons,LocalAuth,MessageMedia}=require(a6_0x14e7bb(0x127));global[a6_0x14e7bb(0x144)]=MessageMedia;const {licenseAuth}=require('./auth'),{firsttime}=require(a6_0x14e7bb(0x12e)),{controlmsgHandler}=require(a6_0x14e7bb(0x13e)),{receivedmsgHandler}=require(a6_0x14e7bb(0x11b)),terminal=require('../util/terminal'),{getChromePath}=require(a6_0x14e7bb(0x130)),{emptyDir}=require(a6_0x14e7bb(0x129)),{AuthFolder}=require(a6_0x14e7bb(0x14d)),{Sleep}=require('../util/misc');class WhatsAppInstance{constructor(){const _0x333e43=a6_0x14e7bb;this[_0x333e43(0x133)]={'isOnline':![]};}async[a6_0x14e7bb(0x12c)](){const _0x4f1268=a6_0x14e7bb,_0x543461=await getChromePath();return this[_0x4f1268(0x133)][_0x4f1268(0x146)]=new Client({'authStrategy':new LocalAuth({'dataPath':AuthFolder}),'puppeteer':{'headless':!![],'executablePath':_0x543461}}),this[_0x4f1268(0x133)][_0x4f1268(0x146)]['initialize'](),this[_0x4f1268(0x14a)](),this;}['initHandler'](){const _0x185a9a=a6_0x14e7bb,_0x5887f8=this[_0x185a9a(0x133)][_0x185a9a(0x146)];_0x5887f8['on'](_0x185a9a(0x147),(_0x325e66,_0x45149d)=>{const _0x39d8e3=_0x185a9a;terminal[_0x39d8e3(0x11d)](_0x39d8e3(0x11f)+_0x325e66+'%',_0x39d8e3(0x11c));}),_0x5887f8['on']('qr',_0x525489=>{const _0x50bf7b=_0x185a9a;terminal['reset'](),terminal[_0x50bf7b(0x12b)](_0x50bf7b(0x12a));const _0x504661=require('qrcode-terminal');_0x504661[_0x50bf7b(0x143)](_0x525489,{'small':!![]});}),_0x5887f8['on'](_0x185a9a(0x124),()=>{terminal['stay']('AUTHENTICATED');}),_0x5887f8['on'](_0x185a9a(0x13f),async _0x448302=>{const _0x1280ef=_0x185a9a;console['error'](_0x1280ef(0x13a),_0x448302),await emptyDir(AuthFolder),this[_0x1280ef(0x12c)]();}),_0x5887f8['on']('ready',async()=>{const _0x1b4008=_0x185a9a;terminal[_0x1b4008(0x13b)](_0x1b4008(0x138)),this[_0x1b4008(0x133)][_0x1b4008(0x121)]=!![],this[_0x1b4008(0x133)][_0x1b4008(0x122)]=_0x5887f8[_0x1b4008(0x12d)][_0x1b4008(0x120)][_0x1b4008(0x141)];const _0x373646=await licenseAuth(_0x5887f8[_0x1b4008(0x12d)]);await firsttime(_0x373646);try{let _0x2e5bb6=await _0x5887f8[_0x1b4008(0x137)](settings[_0x1b4008(0x140)],menu);console[_0x1b4008(0x139)](_0x2e5bb6);}catch(_0x1b1213){terminal['red'](_0x1b4008(0x131)),await _0x5887f8[_0x1b4008(0x11e)](),await Sleep(0x7d0),await emptyDir(AuthFolder),this[_0x1b4008(0x12c)]();}}),_0x5887f8['on'](_0x185a9a(0x14c),async _0x4c89da=>{const _0x145664=_0x185a9a;let _0x129548=await _0x4c89da[_0x145664(0x128)]();_0x4c89da['fromMe']&&_0x129548[_0x145664(0x145)]&&_0x4c89da[_0x145664(0x142)]==![]&&_0x4c89da['to']==settings['GroupID']&&await controlmsgHandler(_0x4c89da);}),_0x5887f8['on']('message',async _0x58e274=>{const _0x467fea=_0x185a9a;(_0x58e274[_0x467fea(0x13d)]==_0x467fea(0x125)||_0x58e274['type']=='image'||_0x58e274[_0x467fea(0x13d)]=='chat')&&await receivedmsgHandler(_0x58e274);});}}function a6_0x147d(_0x19679f,_0x39c7e5){const _0x4a202d=a6_0x4a20();return a6_0x147d=function(_0x147d8b,_0x5f37ed){_0x147d8b=_0x147d8b-0x11a;let _0x4b8f6c=_0x4a202d[_0x147d8b];return _0x4b8f6c;},a6_0x147d(_0x19679f,_0x39c7e5);}module[a6_0x14e7bb(0x132)]={'WhatsAppInstance':WhatsAppInstance};function a6_0x4a20(){const _0x1a87bc=['type','./controlMsgHandler','auth_failure','GroupID','user','hasQuotedMsg','generate','MessageMedia','isGroup','client','loading_screen','2874264nBWSit','8vpmHvV','initHandler','2044734MCFSyV','message_create','./paths','23564196OMWWxs','./receivedMsgHandler','yellow','stay','logout','Loading...\x20','wid','isOnline','userphone','10fWQQrF','authenticated','video','5519859PTLHeC','whatsapp-web.js','getChat','../util/files','Please\x20Scan\x20this\x20QR\x20code\x20in\x20WhatsApp\x0a','green','init','info','./firsttime','1746430Ersfsn','../util/getChromePath','Can\x27t\x20send\x20menu\x20message,\x20i\x20will\x20refresh\x20WhatsApp\x20session\x0a','exports','instance','28ATbMrg','483860xoLyOV','788536ydFlql','sendMessage','READY','log','AUTHENTICATION\x20FAILURE','splash','path'];a6_0x4a20=function(){return _0x1a87bc;};return a6_0x4a20();}