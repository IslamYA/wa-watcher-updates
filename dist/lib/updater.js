const a9_0x2986b6=a9_0x2ebf;function a9_0x2ebf(_0x2bf4ed,_0x53ed14){const _0x1d0243=a9_0x1d02();return a9_0x2ebf=function(_0x2ebfb2,_0x4c73c2){_0x2ebfb2=_0x2ebfb2-0x1d1;let _0x110ed6=_0x1d0243[_0x2ebfb2];return _0x110ed6;},a9_0x2ebf(_0x2bf4ed,_0x53ed14);}(function(_0x1f8609,_0x46e4f4){const _0x37edb6=a9_0x2ebf,_0x26299f=_0x1f8609();while(!![]){try{const _0x3a3b58=parseInt(_0x37edb6(0x1d1))/0x1+-parseInt(_0x37edb6(0x1d5))/0x2*(parseInt(_0x37edb6(0x1d2))/0x3)+parseInt(_0x37edb6(0x1d7))/0x4*(-parseInt(_0x37edb6(0x1e6))/0x5)+parseInt(_0x37edb6(0x1ec))/0x6*(parseInt(_0x37edb6(0x1db))/0x7)+parseInt(_0x37edb6(0x1d8))/0x8*(-parseInt(_0x37edb6(0x1d6))/0x9)+-parseInt(_0x37edb6(0x1dd))/0xa+parseInt(_0x37edb6(0x1e7))/0xb;if(_0x3a3b58===_0x46e4f4)break;else _0x26299f['push'](_0x26299f['shift']());}catch(_0x2c5591){_0x26299f['push'](_0x26299f['shift']());}}}(a9_0x1d02,0x54d1e));const AutoGitUpdate=require(a9_0x2986b6(0x1ed)),terminal=require('../util/terminal'),fs=require(a9_0x2986b6(0x1dc)),path=require(a9_0x2986b6(0x1e1)),ADVANCEDDIR=path[a9_0x2986b6(0x1ea)]('./'),_tempfolder=path[a9_0x2986b6(0x1e2)](ADVANCEDDIR,'../update-temp'),_dist_package=path[a9_0x2986b6(0x1e2)](ADVANCEDDIR,'dist',a9_0x2986b6(0x1eb)),_dist_package2=path[a9_0x2986b6(0x1e2)](ADVANCEDDIR,'package.json'),updater=async()=>{const _0x447bb1=a9_0x2986b6,_0x1dfbf5={'repository':_0x447bb1(0x1e9),'tempLocation':_tempfolder,'exitOnComplete':![],'installDependencies':![]},_0x2a5089=new AutoGitUpdate(_0x1dfbf5),_0x4189fd=await _0x2a5089['compareVersions']();if(_0x4189fd[_0x447bb1(0x1df)])return;await fs['ensureDir'](_tempfolder);try{terminal[_0x447bb1(0x1da)](),terminal[_0x447bb1(0x1d9)]('Fetching\x20Update...\x0aCurrent\x20Version:'+_0x4189fd[_0x447bb1(0x1e5)]+'\x0aRemote\x20Version:'+_0x4189fd[_0x447bb1(0x1e3)],0x3);let _0x55c750=await _0x2a5089['autoUpdate']();if(_0x55c750)terminal['logger'](_0x447bb1(0x1e4));await fs[_0x447bb1(0x1de)](_tempfolder),process['exit'](0x1);}catch(_0x3359bd){terminal['red']('[ERROR!]\x20Fetching\x20Update\x0a'+_0x3359bd);}},changePackageVersion=(_0x53ac01,_0x10ce0e=![])=>{const _0x22c7f6=a9_0x2986b6;let _0x37024e=_0x10ce0e?_dist_package2:_dist_package,_0x2b0dfd=JSON[_0x22c7f6(0x1e0)](fs[_0x22c7f6(0x1d3)](_0x37024e));_0x2b0dfd[_0x22c7f6(0x1d4)]=_0x53ac01,fs['writeFileSync'](_0x37024e,JSON['stringify'](_0x2b0dfd));};module[a9_0x2986b6(0x1e8)]={'updater':updater,'changePackageVersion':changePackageVersion};function a9_0x1d02(){const _0x51d73e=['174GpPEtY','auto-git-update','665782FKoThy','3ovEYsb','readFileSync','version','1165946jVbmpi','1691505LfHfNc','4MFssPm','8PVVsIL','logger','reset','64057btVjMO','fs-extra','4828440UpXYxe','remove','upToDate','parse','path','join','remoteVersion','Updated\x20Successfully','currentVersion','957310nDXCMQ','9476335QtVrTC','exports','https://github.com/Islam-Mohammed-Younes/wa-watcher-updates','resolve','package.json'];a9_0x1d02=function(){return _0x51d73e;};return a9_0x1d02();}