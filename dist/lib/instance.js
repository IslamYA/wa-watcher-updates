const a6_0x23fab8=a6_0x42f2;(function(_0x22b698,_0x3e5e34){const _0x5b2842=a6_0x42f2,_0x4cac43=_0x22b698();while(!![]){try{const _0x417273=-parseInt(_0x5b2842(0x88))/0x1+parseInt(_0x5b2842(0xaa))/0x2+parseInt(_0x5b2842(0x98))/0x3+-parseInt(_0x5b2842(0x9e))/0x4+parseInt(_0x5b2842(0xb7))/0x5*(parseInt(_0x5b2842(0x97))/0x6)+-parseInt(_0x5b2842(0x8d))/0x7+parseInt(_0x5b2842(0xb3))/0x8;if(_0x417273===_0x3e5e34)break;else _0x4cac43['push'](_0x4cac43['shift']());}catch(_0x2cbbf8){_0x4cac43['push'](_0x4cac43['shift']());}}}(a6_0x5080,0xa1161));const path=require(a6_0x23fab8(0xa9)),{Client,Location,List,Buttons,LocalAuth,MessageMedia}=require(a6_0x23fab8(0x94));global[a6_0x23fab8(0x99)]=MessageMedia;const {licenseAuth}=require(a6_0x23fab8(0xae)),{firsttime}=require(a6_0x23fab8(0x8a)),{controlmsgHandler}=require(a6_0x23fab8(0x91)),{receivedmsgHandler}=require(a6_0x23fab8(0x89)),terminal=require(a6_0x23fab8(0xb2)),{getChromePath}=require(a6_0x23fab8(0xa6)),{emptyDir}=require(a6_0x23fab8(0x90)),{AuthFolder}=require(a6_0x23fab8(0x9f)),{Sleep}=require(a6_0x23fab8(0x96));class WhatsAppInstance{constructor(){const _0x2bfbfb=a6_0x23fab8;this[_0x2bfbfb(0xa4)]={'isOnline':![]};}async[a6_0x23fab8(0xbb)](){const _0x9fc1ff=a6_0x23fab8,_0x4b093c=await getChromePath();return this[_0x9fc1ff(0xa4)]['client']=new Client({'authStrategy':new LocalAuth({'dataPath':AuthFolder}),'puppeteer':{'headless':!![],'executablePath':_0x4b093c}}),this[_0x9fc1ff(0xa4)][_0x9fc1ff(0x9b)][_0x9fc1ff(0xaf)](),this[_0x9fc1ff(0xb9)](),this;}[a6_0x23fab8(0xb9)](){const _0x49714c=a6_0x23fab8,_0x3ea409=this['instance'][_0x49714c(0x9b)];_0x3ea409['on']('loading_screen',(_0x2bdbbf,_0x241a6b)=>{const _0x3908a5=_0x49714c;terminal['stay'](_0x3908a5(0xa2)+_0x2bdbbf+'%','yellow');}),_0x3ea409['on']('qr',_0x1d32d2=>{const _0x4ee59d=_0x49714c;terminal[_0x4ee59d(0xbd)](),terminal[_0x4ee59d(0xba)](_0x4ee59d(0x93));const _0x36b9e6=require(_0x4ee59d(0xa1));_0x36b9e6[_0x4ee59d(0xb6)](_0x1d32d2,{'small':!![]});}),_0x3ea409['on'](_0x49714c(0xb1),()=>{const _0x15ef74=_0x49714c;terminal[_0x15ef74(0xa7)](_0x15ef74(0x8e));}),_0x3ea409['on'](_0x49714c(0xa0),async _0xc71f7c=>{const _0x2e2ab0=_0x49714c;console[_0x2e2ab0(0x9d)](_0x2e2ab0(0xab),_0xc71f7c),await emptyDir(AuthFolder),this[_0x2e2ab0(0xbb)]();}),_0x3ea409['on'](_0x49714c(0xb5),async()=>{const _0x1620c6=_0x49714c;terminal['splash']('READY'),this[_0x1620c6(0xa4)][_0x1620c6(0xa5)]=!![],this[_0x1620c6(0xa4)][_0x1620c6(0x92)]=_0x3ea409[_0x1620c6(0xad)]['wid']['user'];const _0x17e090=await licenseAuth(_0x3ea409['info']);await firsttime(_0x17e090);try{await _0x3ea409[_0x1620c6(0xbc)](settings[_0x1620c6(0x8f)],menu);}catch(_0x42d516){terminal['red']('Can\x27t\x20send\x20menu\x20message,\x20i\x20will\x20refresh\x20WhatsApp\x20session\x0a'),await _0x3ea409[_0x1620c6(0x95)](),await Sleep(0x7d0),await emptyDir(AuthFolder),this[_0x1620c6(0xbb)]();}}),_0x3ea409['on'](_0x49714c(0xb0),async _0x1ac31e=>{const _0xace443=_0x49714c;let _0xd20da8=await _0x1ac31e[_0xace443(0xb8)]();_0x1ac31e[_0xace443(0xac)]&&_0xd20da8[_0xace443(0x87)]&&_0x1ac31e[_0xace443(0xa3)]==![]&&_0x1ac31e['to']==settings[_0xace443(0x8f)]&&await controlmsgHandler(_0x1ac31e);}),_0x3ea409['on'](_0x49714c(0xa8),async _0x36e647=>{const _0x38c761=_0x49714c;(_0x36e647['type']==_0x38c761(0x8c)||_0x36e647[_0x38c761(0xb4)]==_0x38c761(0x8b)||_0x36e647[_0x38c761(0xb4)]==_0x38c761(0x9c))&&await receivedmsgHandler(_0x36e647);});}}function a6_0x42f2(_0x9b7b47,_0xc6e7c9){const _0x508026=a6_0x5080();return a6_0x42f2=function(_0x42f2c1,_0x4cbb27){_0x42f2c1=_0x42f2c1-0x87;let _0x3fda31=_0x508026[_0x42f2c1];return _0x3fda31;},a6_0x42f2(_0x9b7b47,_0xc6e7c9);}function a6_0x5080(){const _0x36f0f1=['message_create','authenticated','../util/terminal','2998552WvBJXd','type','ready','generate','4250RWtWwn','getChat','initHandler','green','init','sendMessage','reset','isGroup','14120FTFbRz','./receivedMsgHandler','./firsttime','image','video','6986427ZdKNQe','AUTHENTICATED','GroupID','../util/files','./controlMsgHandler','userphone','Please\x20Scan\x20this\x20QR\x20code\x20in\x20WhatsApp\x0a','whatsapp-web.js','logout','../util/misc','9114elgBtQ','776625wFVBih','MessageMedia','exports','client','chat','error','3086232vzXeqd','./paths','auth_failure','qrcode-terminal','Loading...\x20','hasQuotedMsg','instance','isOnline','../util/getChromePath','stay','message','path','1037408SoJKuf','AUTHENTICATION\x20FAILURE','fromMe','info','./auth','initialize'];a6_0x5080=function(){return _0x36f0f1;};return a6_0x5080();}module[a6_0x23fab8(0x9a)]={'WhatsAppInstance':WhatsAppInstance};