function a16_0x5c8a(_0x1c67dd,_0x42ea25){const _0x5df209=a16_0x5df2();return a16_0x5c8a=function(_0x5c8a3c,_0x35bbeb){_0x5c8a3c=_0x5c8a3c-0x111;let _0x21f2f1=_0x5df209[_0x5c8a3c];return _0x21f2f1;},a16_0x5c8a(_0x1c67dd,_0x42ea25);}const a16_0x5893d4=a16_0x5c8a;(function(_0x598519,_0x27f39e){const _0x4d8f6f=a16_0x5c8a,_0x26b83d=_0x598519();while(!![]){try{const _0xad40fd=parseInt(_0x4d8f6f(0x113))/0x1+-parseInt(_0x4d8f6f(0x12f))/0x2*(-parseInt(_0x4d8f6f(0x11a))/0x3)+parseInt(_0x4d8f6f(0x12a))/0x4*(-parseInt(_0x4d8f6f(0x124))/0x5)+-parseInt(_0x4d8f6f(0x114))/0x6*(parseInt(_0x4d8f6f(0x119))/0x7)+parseInt(_0x4d8f6f(0x127))/0x8*(-parseInt(_0x4d8f6f(0x12d))/0x9)+-parseInt(_0x4d8f6f(0x115))/0xa+-parseInt(_0x4d8f6f(0x11b))/0xb*(-parseInt(_0x4d8f6f(0x131))/0xc);if(_0xad40fd===_0x27f39e)break;else _0x26b83d['push'](_0x26b83d['shift']());}catch(_0x1736cf){_0x26b83d['push'](_0x26b83d['shift']());}}}(a16_0x5df2,0x55d76));function a16_0x5df2(){const _0xe76241=['width','progressBar','9659EzcYYm','2307786kgpDNf','34340Pvhuym','moveTo','yellow','brightYellow','7YIbKSe','504312pIxyse','33caZBHp','green','exports','terminal-kit','bgYellow','./misc','height','./files','bgGreen','1857465pShNtB','brightRed','bold','380872tWkEoH','brightMagenta','blue','4ylkHgr','brightGreen','reset','99mOHUrM','log','8kbDcrJ','terminal','3811152QTsIkr'];a16_0x5df2=function(){return _0xe76241;};return a16_0x5df2();}const term=require(a16_0x5893d4(0x11e))[a16_0x5893d4(0x130)],{_logo}=require('../lib/paths'),{Sleep}=require(a16_0x5893d4(0x120)),{log2file}=require(a16_0x5893d4(0x122)),log=_0x441f05=>{const _0x1d6a0a=a16_0x5893d4;console[_0x1d6a0a(0x12e)](_0x441f05);},reset=()=>{const _0x402c43=a16_0x5893d4;term[_0x402c43(0x12c)]();},green=_0x8c18e2=>{term['clear'](),term['bold']['bgGreen'](_0x8c18e2+'\x0a');},red=async _0x4ca63d=>{const _0x80693a=a16_0x5893d4;await log2file(_0x4ca63d),term['bgRed'][_0x80693a(0x126)](_0x4ca63d+'\x0a');},logger=(_0x4f519b,_0x4e0626=0x0)=>{const _0xb155=a16_0x5893d4;log2file(_0x4f519b);switch(_0x4e0626){case 0x1:term[_0xb155(0x126)][_0xb155(0x118)](_0x4f519b+'\x0a');break;case 0x2:term['bold'][_0xb155(0x125)](_0x4f519b+'\x0a');break;case 0x3:term[_0xb155(0x126)][_0xb155(0x128)](_0x4f519b+'\x0a');break;default:term[_0xb155(0x126)][_0xb155(0x12b)](_0x4f519b+'\x0a');break;}},splash=async _0x18c7a5=>{const _0x52f13a=a16_0x5893d4;term[_0x52f13a(0x12c)](),term[_0x52f13a(0x116)][_0x52f13a(0x126)][_0x52f13a(0x123)](term[_0x52f13a(0x111)]/0x2,term[_0x52f13a(0x121)]/0x2,''+_0x18c7a5),await Sleep(0xfa0),term[_0x52f13a(0x12c)]();},stay=(_0x394381,_0x26819b=a16_0x5893d4(0x11c))=>{const _0x1fae1e=a16_0x5893d4;term['clear']();if(_0x26819b==_0x1fae1e(0x117)){term[_0x1fae1e(0x116)]['bold'][_0x1fae1e(0x11f)](term['width']/0x2,term[_0x1fae1e(0x121)]/0x2,''+_0x394381);return;}else{if(_0x26819b==_0x1fae1e(0x129)){term[_0x1fae1e(0x116)][_0x1fae1e(0x126)]['bgBlue'](term[_0x1fae1e(0x111)]/0x2,term[_0x1fae1e(0x121)]/0x2,''+_0x394381);return;}}term['moveTo'][_0x1fae1e(0x126)][_0x1fae1e(0x123)](term[_0x1fae1e(0x111)]/0x2,term['height']/0x2,''+_0x394381);},progressBarStart=(_0x300f2d,_0x3b7755)=>{const _0x434b78=a16_0x5893d4;green(_0x300f2d);const _0x505d07=term[_0x434b78(0x112)]({'width':0x50,'title':_0x3b7755,'eta':!![],'percent':!![]});return _0x505d07;},drawImage=_0x4a6c13=>{const _0x4a86d7=a16_0x5893d4;term['drawImage'](_0x4a6c13,{'shrink':{'width':term[_0x4a86d7(0x111)]*0.7,'height':(term[_0x4a86d7(0x121)]-0x1)*0x2*0.7}});};module[a16_0x5893d4(0x11d)]={'log':log,'reset':reset,'green':green,'red':red,'logger':logger,'splash':splash,'stay':stay,'progressBarStart':progressBarStart,'drawImage':drawImage,'term':term};