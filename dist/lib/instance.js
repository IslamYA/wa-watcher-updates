const a6_0x463ded=a6_0x701f;function a6_0x701f(_0xa8519b,_0x597694){const _0x433c86=a6_0x433c();return a6_0x701f=function(_0x701f74,_0x5eb004){_0x701f74=_0x701f74-0xed;let _0x625c7c=_0x433c86[_0x701f74];return _0x625c7c;},a6_0x701f(_0xa8519b,_0x597694);}(function(_0x20bcd0,_0x399a01){const _0x199928=a6_0x701f,_0x245298=_0x20bcd0();while(!![]){try{const _0x10091f=parseInt(_0x199928(0x11e))/0x1*(parseInt(_0x199928(0x101))/0x2)+-parseInt(_0x199928(0xf0))/0x3+-parseInt(_0x199928(0x102))/0x4*(-parseInt(_0x199928(0x113))/0x5)+-parseInt(_0x199928(0x10f))/0x6+-parseInt(_0x199928(0x110))/0x7+parseInt(_0x199928(0xfc))/0x8*(-parseInt(_0x199928(0x112))/0x9)+parseInt(_0x199928(0x107))/0xa*(parseInt(_0x199928(0x114))/0xb);if(_0x10091f===_0x399a01)break;else _0x245298['push'](_0x245298['shift']());}catch(_0x523103){_0x245298['push'](_0x245298['shift']());}}}(a6_0x433c,0x98bdb));const path=require(a6_0x463ded(0xfb)),{Client,Location,List,Buttons,LocalAuth,MessageMedia}=require('whatsapp-web.js');function a6_0x433c(){const _0x34cd04=['instance','image','../util/terminal','Please\x20Scan\x20this\x20QR\x20code\x20in\x20WhatsApp\x0a','6546516JnAJMk','2890916cvoEoC','yellow','173781Urwijw','6690YDcucK','25619esbAkZ','AUTHENTICATION\x20FAILURE','splash','READY','message_create','reset','error','stay','fromMe','Loading...\x20','1fFUbZB','chat','exports','./controlMsgHandler','Can\x27t\x20send\x20menu\x20message,\x20i\x20will\x20refresh\x20WhatsApp\x20session\x0a','241869UDSSVT','../util/misc','generate','init','GroupID','auth_failure','AUTHENTICATED','./firsttime','type','logout','initHandler','path','392LMbLbl','info','ready','./paths','./receivedMsgHandler','2375584CEecrd','1492hqBAJV','client','loading_screen','userphone','MessageMedia','6310BDBSgq','getChat','../util/getChromePath','../util/files'];a6_0x433c=function(){return _0x34cd04;};return a6_0x433c();}global[a6_0x463ded(0x106)]=MessageMedia;const {licenseAuth}=require('./auth'),{firsttime}=require(a6_0x463ded(0xf7)),{controlmsgHandler}=require(a6_0x463ded(0xee)),{receivedmsgHandler}=require(a6_0x463ded(0x100)),terminal=require(a6_0x463ded(0x10d)),{getChromePath}=require(a6_0x463ded(0x109)),{emptyDir}=require(a6_0x463ded(0x10a)),{AuthFolder}=require(a6_0x463ded(0xff)),{Sleep}=require(a6_0x463ded(0xf1));class WhatsAppInstance{constructor(){const _0x5a7b2b=a6_0x463ded;this[_0x5a7b2b(0x10b)]={'isOnline':![]};}async[a6_0x463ded(0xf3)](){const _0x4a7bf7=a6_0x463ded,_0x1cbd0b=await getChromePath();return this[_0x4a7bf7(0x10b)][_0x4a7bf7(0x103)]=new Client({'authStrategy':new LocalAuth({'dataPath':AuthFolder}),'puppeteer':{'headless':!![],'executablePath':_0x1cbd0b}}),this['instance']['client']['initialize'](),this['initHandler'](),this;}[a6_0x463ded(0xfa)](){const _0x4b4010=a6_0x463ded,_0x3e2f2f=this['instance'][_0x4b4010(0x103)];_0x3e2f2f['on'](_0x4b4010(0x104),(_0xde0596,_0x52b4f1)=>{const _0x38c660=_0x4b4010;terminal[_0x38c660(0x11b)](_0x38c660(0x11d)+_0xde0596+'%',_0x38c660(0x111));}),_0x3e2f2f['on']('qr',_0x59a547=>{const _0x177067=_0x4b4010;terminal[_0x177067(0x119)](),terminal['green'](_0x177067(0x10e));const _0x49c957=require('qrcode-terminal');_0x49c957[_0x177067(0xf2)](_0x59a547,{'small':!![]});}),_0x3e2f2f['on']('authenticated',()=>{const _0x42afea=_0x4b4010;terminal['stay'](_0x42afea(0xf6));}),_0x3e2f2f['on'](_0x4b4010(0xf5),async _0x1bf1ea=>{const _0x406fe8=_0x4b4010;console[_0x406fe8(0x11a)](_0x406fe8(0x115),_0x1bf1ea),await emptyDir(AuthFolder),this[_0x406fe8(0xf3)]();}),_0x3e2f2f['on'](_0x4b4010(0xfe),async()=>{const _0x3af1d0=_0x4b4010;terminal[_0x3af1d0(0x116)](_0x3af1d0(0x117)),this[_0x3af1d0(0x10b)]['isOnline']=!![],this['instance'][_0x3af1d0(0x105)]=_0x3e2f2f[_0x3af1d0(0xfd)]['wid']['user'];const _0x41716f=await licenseAuth(_0x3e2f2f[_0x3af1d0(0xfd)]);await firsttime(_0x41716f);try{await _0x3e2f2f['sendMessage'](settings[_0x3af1d0(0xf4)],menu);}catch(_0xda6199){terminal['red'](_0x3af1d0(0xef)),await _0x3e2f2f[_0x3af1d0(0xf9)](),await Sleep(0x7d0),await emptyDir(AuthFolder),this[_0x3af1d0(0xf3)]();}}),_0x3e2f2f['on'](_0x4b4010(0x118),async _0xebc9cb=>{const _0x30f623=_0x4b4010;let _0x1508d5=await _0xebc9cb[_0x30f623(0x108)]();_0xebc9cb[_0x30f623(0x11c)]&&_0x1508d5['isGroup']&&_0xebc9cb['hasQuotedMsg']==![]&&_0xebc9cb['to']==settings[_0x30f623(0xf4)]&&await controlmsgHandler(_0xebc9cb);}),_0x3e2f2f['on']('message',async _0x5e7186=>{const _0x2d2e32=_0x4b4010;(_0x5e7186[_0x2d2e32(0xf8)]=='video'||_0x5e7186[_0x2d2e32(0xf8)]==_0x2d2e32(0x10c)||_0x5e7186[_0x2d2e32(0xf8)]==_0x2d2e32(0x11f))&&await receivedmsgHandler(_0x5e7186);});}}module[a6_0x463ded(0xed)]={'WhatsAppInstance':WhatsAppInstance};