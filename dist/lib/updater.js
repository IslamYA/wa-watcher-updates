const a9_0x259353=a9_0xff02;(function(_0x1525bd,_0x40e65e){const _0x15187e=a9_0xff02,_0x2920d5=_0x1525bd();while(!![]){try{const _0x23ce36=-parseInt(_0x15187e(0x124))/0x1*(parseInt(_0x15187e(0x104))/0x2)+parseInt(_0x15187e(0x10a))/0x3+-parseInt(_0x15187e(0x120))/0x4+parseInt(_0x15187e(0x11e))/0x5+parseInt(_0x15187e(0x117))/0x6*(parseInt(_0x15187e(0x111))/0x7)+parseInt(_0x15187e(0x11c))/0x8*(parseInt(_0x15187e(0x108))/0x9)+parseInt(_0x15187e(0x11f))/0xa;if(_0x23ce36===_0x40e65e)break;else _0x2920d5['push'](_0x2920d5['shift']());}catch(_0x3f9a13){_0x2920d5['push'](_0x2920d5['shift']());}}}(a9_0xfd5d,0x87545));const AutoGitUpdate=require('auto-git-update'),terminal=require('../util/terminal'),fs=require(a9_0x259353(0x116)),path=require(a9_0x259353(0x106)),ADVANCEDDIR=path[a9_0x259353(0x110)]('./'),_tempfolder=path[a9_0x259353(0x114)](ADVANCEDDIR,a9_0x259353(0x109)),_dist_package=path[a9_0x259353(0x114)](ADVANCEDDIR,'dist',a9_0x259353(0x121)),_dist_package2=path[a9_0x259353(0x114)](ADVANCEDDIR,a9_0x259353(0x121)),updater=async()=>{const _0x4333e2=a9_0x259353,_0xd2a256={'repository':_0x4333e2(0x10f),'tempLocation':_tempfolder,'exitOnComplete':![],'installDependencies':![]},_0x278feb=new AutoGitUpdate(_0xd2a256),_0x239cc2=await _0x278feb[_0x4333e2(0x123)]();if(_0x239cc2[_0x4333e2(0x10b)])return;await fs['ensureDir'](_tempfolder);try{terminal[_0x4333e2(0x119)](),terminal[_0x4333e2(0x107)](_0x4333e2(0x105)+_0x239cc2[_0x4333e2(0x10e)]+_0x4333e2(0x118)+_0x239cc2[_0x4333e2(0x10c)],0x3);let _0x1f7d3b=await _0x278feb[_0x4333e2(0x10d)]();if(_0x1f7d3b)terminal[_0x4333e2(0x107)]('Updated\x20Successfully');await fs[_0x4333e2(0x11d)](_tempfolder),process[_0x4333e2(0x112)](0x1);}catch(_0x5b4dde){terminal[_0x4333e2(0x103)](_0x4333e2(0x125)+_0x5b4dde);}},changePackageVersion=(_0x3ab6cd,_0x33b053=![])=>{const _0x58d89a=a9_0x259353;let _0x394e36=_0x33b053?_dist_package2:_dist_package,_0x1b824e=JSON[_0x58d89a(0x11a)](fs[_0x58d89a(0x113)](_0x394e36));_0x1b824e['version']=_0x3ab6cd,fs[_0x58d89a(0x11b)](_0x394e36,JSON[_0x58d89a(0x122)](_0x1b824e));};function a9_0xff02(_0x46d073,_0x3dee5e){const _0xfd5d74=a9_0xfd5d();return a9_0xff02=function(_0xff02a5,_0x3b2580){_0xff02a5=_0xff02a5-0x103;let _0xfad89d=_0xfd5d74[_0xff02a5];return _0xfad89d;},a9_0xff02(_0x46d073,_0x3dee5e);}function a9_0xfd5d(){const _0x41aebe=['252dJDkIE','\x0aRemote\x20Version:','reset','parse','writeFileSync','2555080EsqZQj','remove','2592220kriRMW','7872560sGOqnQ','4360400NDfAAB','package.json','stringify','compareVersions','813635yYqzSk','[ERROR!]\x20Fetching\x20Update\x0a','red','2RdUyIQ','Fetching\x20Update...\x0aCurrent\x20Version:','path','logger','18IJRVUh','../update-temp','1243740vvtyiG','upToDate','remoteVersion','autoUpdate','currentVersion','https://github.com/Islam-Mohammed-Younes/wa-watcher-updates','resolve','16499xaWAGl','exit','readFileSync','join','exports','fs-extra'];a9_0xfd5d=function(){return _0x41aebe;};return a9_0xfd5d();}module[a9_0x259353(0x115)]={'updater':updater,'changePackageVersion':changePackageVersion};