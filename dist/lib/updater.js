function a9_0x239d(_0x229307,_0x4a75ee){const _0x5d2c34=a9_0x5d2c();return a9_0x239d=function(_0x239d30,_0x4e1c1c){_0x239d30=_0x239d30-0x11a;let _0xcb8167=_0x5d2c34[_0x239d30];return _0xcb8167;},a9_0x239d(_0x229307,_0x4a75ee);}const a9_0x4c9b4a=a9_0x239d;function a9_0x5d2c(){const _0x3ae101=['auto-git-update','15419208MdpGWQ','4EwbPRa','version','dist','../util/terminal','Fetching\x20Update...\x0aCurrent\x20Version:','autoUpdate','stringify','41432NhgGgB','upToDate','readFileSync','297456FpuLRM','exit','626790zSNtpO','\x0aRemote\x20Version:','https://github.com/Islam-Mohammed-Younes/wa-watcher-updates','../update-temp','25qVGeJD','3132417VYutyQ','remove','fs-extra','resolve','reset','88IVrsiF','Updated\x20Successfully','exports','package.json','logger','666330jKGZmk','currentVersion','red','[ERROR!]\x20Fetching\x20Update\x0a','join','6283711wcPpXt','1278ZIQRYP','remoteVersion','3ppvCxg','parse','path'];a9_0x5d2c=function(){return _0x3ae101;};return a9_0x5d2c();}(function(_0x365837,_0x243452){const _0x3da6d7=a9_0x239d,_0x54d09d=_0x365837();while(!![]){try{const _0x212f74=-parseInt(_0x3da6d7(0x13f))/0x1*(-parseInt(_0x3da6d7(0x126))/0x2)+parseInt(_0x3da6d7(0x12d))/0x3*(parseInt(_0x3da6d7(0x11c))/0x4)+-parseInt(_0x3da6d7(0x12c))/0x5*(parseInt(_0x3da6d7(0x137))/0x6)+parseInt(_0x3da6d7(0x13c))/0x7+-parseInt(_0x3da6d7(0x123))/0x8*(-parseInt(_0x3da6d7(0x13d))/0x9)+-parseInt(_0x3da6d7(0x128))/0xa*(parseInt(_0x3da6d7(0x132))/0xb)+-parseInt(_0x3da6d7(0x11b))/0xc;if(_0x212f74===_0x243452)break;else _0x54d09d['push'](_0x54d09d['shift']());}catch(_0x53720c){_0x54d09d['push'](_0x54d09d['shift']());}}}(a9_0x5d2c,0xbedcd));const AutoGitUpdate=require(a9_0x4c9b4a(0x11a)),terminal=require(a9_0x4c9b4a(0x11f)),fs=require(a9_0x4c9b4a(0x12f)),path=require(a9_0x4c9b4a(0x141)),ADVANCEDDIR=path[a9_0x4c9b4a(0x130)]('./'),_tempfolder=path[a9_0x4c9b4a(0x13b)](ADVANCEDDIR,a9_0x4c9b4a(0x12b)),_dist_package=path[a9_0x4c9b4a(0x13b)](ADVANCEDDIR,a9_0x4c9b4a(0x11e),a9_0x4c9b4a(0x135)),_dist_package2=path['join'](ADVANCEDDIR,a9_0x4c9b4a(0x135)),updater=async()=>{const _0x39269e=a9_0x4c9b4a,_0x3c00e3={'repository':_0x39269e(0x12a),'tempLocation':_tempfolder,'exitOnComplete':![],'installDependencies':![]},_0x152774=new AutoGitUpdate(_0x3c00e3),_0x23d763=await _0x152774['compareVersions']();if(_0x23d763[_0x39269e(0x124)])return;await fs['ensureDir'](_tempfolder);try{terminal[_0x39269e(0x131)](),terminal[_0x39269e(0x136)](_0x39269e(0x120)+_0x23d763[_0x39269e(0x138)]+_0x39269e(0x129)+_0x23d763[_0x39269e(0x13e)],0x3);let _0x4c0f15=await _0x152774[_0x39269e(0x121)]();if(_0x4c0f15)terminal['logger'](_0x39269e(0x133));await fs[_0x39269e(0x12e)](_tempfolder),process[_0x39269e(0x127)](0x1);}catch(_0xec0de4){terminal[_0x39269e(0x139)](_0x39269e(0x13a)+_0xec0de4);}},changePackageVersion=(_0x50877e,_0x47f84e=![])=>{const _0x16a7fa=a9_0x4c9b4a;let _0x45f91e=_0x47f84e?_dist_package2:_dist_package,_0x20cded=JSON[_0x16a7fa(0x140)](fs[_0x16a7fa(0x125)](_0x45f91e));_0x20cded[_0x16a7fa(0x11d)]=_0x50877e,fs['writeFileSync'](_0x45f91e,JSON[_0x16a7fa(0x122)](_0x20cded));};module[a9_0x4c9b4a(0x134)]={'updater':updater,'changePackageVersion':changePackageVersion};