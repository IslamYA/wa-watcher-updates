function a12_0x4a47(_0x509ca2,_0x3d482b){const _0x803ac6=a12_0x803a();return a12_0x4a47=function(_0x4a470f,_0x162c74){_0x4a470f=_0x4a470f-0x1ce;let _0x47a0b6=_0x803ac6[_0x4a470f];return _0x47a0b6;},a12_0x4a47(_0x509ca2,_0x3d482b);}const a12_0x279448=a12_0x4a47;(function(_0x28d02f,_0x5736f1){const _0x37fb88=a12_0x4a47,_0x501d57=_0x28d02f();while(!![]){try{const _0x2c52b7=-parseInt(_0x37fb88(0x1d0))/0x1*(-parseInt(_0x37fb88(0x1ce))/0x2)+-parseInt(_0x37fb88(0x1d3))/0x3+parseInt(_0x37fb88(0x1de))/0x4*(-parseInt(_0x37fb88(0x1db))/0x5)+-parseInt(_0x37fb88(0x1df))/0x6+parseInt(_0x37fb88(0x1e2))/0x7+-parseInt(_0x37fb88(0x1e1))/0x8*(-parseInt(_0x37fb88(0x1cf))/0x9)+parseInt(_0x37fb88(0x1d5))/0xa*(parseInt(_0x37fb88(0x1d2))/0xb);if(_0x2c52b7===_0x5736f1)break;else _0x501d57['push'](_0x501d57['shift']());}catch(_0x2982e7){_0x501d57['push'](_0x501d57['shift']());}}}(a12_0x803a,0x35178));const {google}=require(a12_0x279448(0x1d9)),{_creds}=require(a12_0x279448(0x1da));class Gdrive{constructor(){const _0x5cb6b9=a12_0x279448;this[_0x5cb6b9(0x1e3)]=new google['auth'][(_0x5cb6b9(0x1e0))]({'keyFile':_creds,'scopes':[_0x5cb6b9(0x1d8),_0x5cb6b9(0x1d6)]}),this[_0x5cb6b9(0x1d4)]=this[_0x5cb6b9(0x1e3)][_0x5cb6b9(0x1d1)](),this['drive']=google['drive']({'version':'v3','auth':this['auth']});}async[a12_0x279448(0x1d7)](_0x419ca3,{name:_0x2463cb,mimeType:_0x47c4db,stream:_0x3d560d}){const _0x3eef7c=a12_0x279448;let _0x3003ae={'name':_0x2463cb,'parents':[_0x419ca3]},_0xb87448={'mimeType':_0x47c4db,'body':_0x3d560d},_0x4c408e=await this[_0x3eef7c(0x1dd)][_0x3eef7c(0x1dc)]['create']({'resource':_0x3003ae,'media':_0xb87448,'fields':'*'});return _0x4c408e;}}function a12_0x803a(){const _0x9e02e2=['1091895aADOkm','auth','2cTnAVh','36gxgKwP','243189SzqxhH','getClient','1462241lpeiPm','1106943fqozzk','authClient','20Pnevrg','https://www.googleapis.com/auth/drive.file','createFile','https://www.googleapis.com/auth/drive','googleapis','../lib/paths','15rVhiFN','files','drive','569956FlpxYL','245136zTgXQX','GoogleAuth','779464oMFxfa'];a12_0x803a=function(){return _0x9e02e2;};return a12_0x803a();}module['exports']={'Gdrive':Gdrive};