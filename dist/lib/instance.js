const a6_0x72ef58=a6_0x39fc;(function(_0x16451a,_0x2779bc){const _0x124898=a6_0x39fc,_0x2fbb9f=_0x16451a();while(!![]){try{const _0x446193=parseInt(_0x124898(0x1cb))/0x1+-parseInt(_0x124898(0x1c2))/0x2*(-parseInt(_0x124898(0x1bb))/0x3)+parseInt(_0x124898(0x1d3))/0x4*(parseInt(_0x124898(0x1c7))/0x5)+-parseInt(_0x124898(0x1b7))/0x6*(-parseInt(_0x124898(0x1a0))/0x7)+-parseInt(_0x124898(0x1b1))/0x8*(-parseInt(_0x124898(0x1af))/0x9)+parseInt(_0x124898(0x1c9))/0xa+-parseInt(_0x124898(0x1bd))/0xb;if(_0x446193===_0x2779bc)break;else _0x2fbb9f['push'](_0x2fbb9f['shift']());}catch(_0x5ae227){_0x2fbb9f['push'](_0x2fbb9f['shift']());}}}(a6_0x2d2d,0x1b66e));const path=require(a6_0x72ef58(0x1d6)),{Client,Location,List,Buttons,LocalAuth,MessageMedia}=require(a6_0x72ef58(0x1aa));global[a6_0x72ef58(0x1ac)]=MessageMedia;function a6_0x2d2d(){const _0x3841d8=['../util/getChromePath','../util/terminal','../util/misc','ready','message','95256nvOtDU','./auth','READY','splash','1293lPvFSm','yellow','7128847hAVWVA','userphone','client','generate','Loading...\x20','430DXnwDM','image','video','./paths','user','10kMtpnD','chat','561460cSzOeS','instance','212731RFrHyh','fromMe','logout','./firsttime','type','isOnline','GroupID','../util/files','258836jzOcQM','reset','authenticated','path','initialize','21EIUVFb','red','stay','./controlMsgHandler','message_create','sendMessage','AUTHENTICATION\x20FAILURE','hasQuotedMsg','initHandler','./receivedMsgHandler','whatsapp-web.js','init','MessageMedia','auth_failure','info','60471UsUgUB','qrcode-terminal','264xUFMYT'];a6_0x2d2d=function(){return _0x3841d8;};return a6_0x2d2d();}const {licenseAuth}=require(a6_0x72ef58(0x1b8)),{firsttime}=require(a6_0x72ef58(0x1ce)),{controlmsgHandler}=require(a6_0x72ef58(0x1a3)),{receivedmsgHandler}=require(a6_0x72ef58(0x1a9)),terminal=require(a6_0x72ef58(0x1b3)),{getChromePath}=require(a6_0x72ef58(0x1b2)),{emptyDir}=require(a6_0x72ef58(0x1d2)),{AuthFolder}=require(a6_0x72ef58(0x1c5)),{Sleep}=require(a6_0x72ef58(0x1b4));class WhatsAppInstance{constructor(){const _0x52c18d=a6_0x72ef58;this[_0x52c18d(0x1ca)]={'isOnline':![]};}async[a6_0x72ef58(0x1ab)](){const _0x18a0e8=a6_0x72ef58,_0x41de93=await getChromePath();return this['instance'][_0x18a0e8(0x1bf)]=new Client({'authStrategy':new LocalAuth({'dataPath':AuthFolder}),'puppeteer':{'headless':!![],'executablePath':_0x41de93}}),this[_0x18a0e8(0x1ca)][_0x18a0e8(0x1bf)][_0x18a0e8(0x19f)](),this[_0x18a0e8(0x1a8)](),this;}[a6_0x72ef58(0x1a8)](){const _0x46d9f4=a6_0x72ef58,_0x598257=this[_0x46d9f4(0x1ca)][_0x46d9f4(0x1bf)];_0x598257['on']('loading_screen',(_0x5675b7,_0x3848d6)=>{const _0x183b12=_0x46d9f4;terminal[_0x183b12(0x1a2)](_0x183b12(0x1c1)+_0x5675b7+'%',_0x183b12(0x1bc));}),_0x598257['on']('qr',_0xeebcae=>{const _0x28bfb5=_0x46d9f4;terminal[_0x28bfb5(0x1d4)](),terminal['green']('Please\x20Scan\x20this\x20QR\x20code\x20in\x20WhatsApp\x0a');const _0x54f96d=require(_0x28bfb5(0x1b0));_0x54f96d[_0x28bfb5(0x1c0)](_0xeebcae,{'small':!![]});}),_0x598257['on'](_0x46d9f4(0x1d5),()=>{const _0x2044ee=_0x46d9f4;terminal[_0x2044ee(0x1a2)]('AUTHENTICATED');}),_0x598257['on'](_0x46d9f4(0x1ad),async _0x4250db=>{const _0x1d0217=_0x46d9f4;console['error'](_0x1d0217(0x1a6),_0x4250db),await emptyDir(AuthFolder),this[_0x1d0217(0x1ab)]();}),_0x598257['on'](_0x46d9f4(0x1b5),async()=>{const _0xd7372f=_0x46d9f4;terminal[_0xd7372f(0x1ba)](_0xd7372f(0x1b9)),this[_0xd7372f(0x1ca)][_0xd7372f(0x1d0)]=!![],this[_0xd7372f(0x1ca)][_0xd7372f(0x1be)]=_0x598257[_0xd7372f(0x1ae)]['wid'][_0xd7372f(0x1c6)];const _0x1b842e=await licenseAuth(_0x598257[_0xd7372f(0x1ae)]);await firsttime(_0x1b842e);try{await _0x598257[_0xd7372f(0x1a5)](settings[_0xd7372f(0x1d1)],menu);}catch(_0x2b2b2d){terminal[_0xd7372f(0x1a1)]('Can\x27t\x20send\x20menu\x20message,\x20i\x20will\x20refresh\x20WhatsApp\x20session\x0a'),await _0x598257[_0xd7372f(0x1cd)](),await Sleep(0x7d0),await emptyDir(AuthFolder),this[_0xd7372f(0x1ab)]();}}),_0x598257['on'](_0x46d9f4(0x1a4),async _0x10bc6c=>{const _0x107b7d=_0x46d9f4;let _0x4a234c=await _0x10bc6c['getChat']();_0x10bc6c[_0x107b7d(0x1cc)]&&_0x4a234c['isGroup']&&_0x10bc6c[_0x107b7d(0x1a7)]==![]&&_0x10bc6c['to']==settings[_0x107b7d(0x1d1)]&&await controlmsgHandler(_0x10bc6c);}),_0x598257['on'](_0x46d9f4(0x1b6),async _0x374a5f=>{const _0x22eb3c=_0x46d9f4;(_0x374a5f[_0x22eb3c(0x1cf)]==_0x22eb3c(0x1c4)||_0x374a5f[_0x22eb3c(0x1cf)]==_0x22eb3c(0x1c3)||_0x374a5f['type']==_0x22eb3c(0x1c8))&&await receivedmsgHandler(_0x374a5f);});}}function a6_0x39fc(_0x4a2db3,_0x2c2ea9){const _0x2d2de6=a6_0x2d2d();return a6_0x39fc=function(_0x39fc64,_0x1ded5c){_0x39fc64=_0x39fc64-0x19f;let _0x4cfd3d=_0x2d2de6[_0x39fc64];return _0x4cfd3d;},a6_0x39fc(_0x4a2db3,_0x2c2ea9);}module['exports']={'WhatsAppInstance':WhatsAppInstance};