function xr_nn() {return(xr_ms<1);};
function xr_rx(){xr_xr.style.marginLeft="0px";var ww=document.documentElement.clientWidth;xr_dx=(ww-parseInt(xr_xr.style.width))/2;if(xr_dx<0){xr_dx=0;};xr_xr.style.left=xr_dx+'px';document.body.style.backgroundPosition=xr_dx+'px 0px';xr_pvx();};
var xr_dx,xr_fl,xr_ft,xr_fr,xr_fb,xr_fo;var xr_pul=0;var xr_xpul=0;var xr_ms=-1;var xr_ps=new Array();var xr_pl=new Array();var xr_pi=0;var xr_rc=0;var xr_rrl=0;var xr_rpp=0;
function xr_v0(o){o.style.visibility='hidden';o.style.display='none';o.style.zIndex=-1;o.innerHTML=o.innerHTML;};
function xr_v1(o){o.innerHTML=o.innerHTML;o.style.display='block';o.style.visibility='visible';o.style.zIndex=100;};
function xr_r0(o){var ll = o.getElementsByTagName('*');for (xr_i=0; xr_i<ll.length; xr_i++){if (ll[xr_i].style) ll[xr_i].style.visibility = 'inherit';};o.style.visibility='hidden';o.style.zIndex= -1;};
function xr_bl(e){xr_rx();xr_rrl=0;xr_ms=0;};
function xr_re(i){xr_rc=0;if(xr_ms>=0){for(;(i!=xr_pl[xr_pi])&&(xr_pi>0);xr_pi--){xr_v0(xr_ps[xr_pi]);};var o = document.getElementById('xr_xo'+xr_rrl);xr_r0(o);o = document.getElementById('xr_xd'+xr_rrl);xr_r0(o);};};
function xr_ix(o){var x=o.offsetLeft;var y=o.offsetTop;var ox=o;while(ox.offsetParent&&ox.offsetParent.id!='xr_xr'){ox=ox.offsetParent;x+=ox.offsetLeft;y+=ox.offsetTop;};var x1=x+o.offsetWidth;var y1=y+o.offsetHeight;return(!((x1<(xr_fl+xr_fr)/2 && xr_fl>(x+x1)/2)||(x>(xr_fl+xr_fr)/2 && xr_fr<(x+x1)/2)||(y1<(xr_ft+xr_fb)/2 && xr_ft>(y+y1)/2)||(y>(xr_ft+xr_fb)/2 && xr_fb<(y+y1)/2)));};
function xr_clp(o){var ll = o.getElementsByTagName('*');for (xr_i=0; xr_i<ll.length; xr_i++){if (xr_ix(ll[xr_i])) ll[xr_i].style.visibility = 'visible';};var oh='';var ot='';var oa = xr_fo.parentNode.href ? xr_fo.parentNode : xr_fo;if (oa.href) oh=oa.href;if (oa.target) ot=oa.target;var aa = o.getElementsByTagName('a');for (xr_i=0; xr_i<aa.length; xr_i++){aa[xr_i].href=oh;aa[xr_i].target=ot;};o.style.zIndex=100;xr_xr.style.visibility='hidden';xr_xr.style.visibility='visible';};
//function xr_gdx(){var dx=(document.documentElement.clientWidth-parseInt(xr_xr.style.width))/2;if(dx>0)return(dx);else return(0);};

function xr_mm(ev)
{
 if(xr_d_old_onmousemove)xr_d_old_onmousemove(ev);
 xr_pul=xr_xpul;
 if(xr_ms>0)
 {
  if(!ev)var e=window.event;
   else var e=ev;
  var x=e.pageX;
  var y=e.pageY;
  if(!(x||y))
  {
   x=e.clientX+document.documentElement.scrollLeft;
   y=e.clientY+document.documentElement.scrollTop;
   x-=2;
   y-=2;
  };
  //x-=xr_gdx();
  x-=xr_dx;
  if (x<xr_fl||x>xr_fr||y<xr_ft||y>xr_fb)
  {
   var o = document.getElementById('xr_xo'+xr_rrl);
   xr_r0(o);
   o = document.getElementById('xr_xd'+xr_rrl);
   xr_r0(o);
   xr_ms=0;
   try {xr_tidyMenu(e)} catch(xr_c){} finally{};
  };
 }else
 {
  if(xr_rc++>2)xr_re(0);
 };	
};


function xr_md(e){if(xr_d_old_onmousedown)xr_d_old_onmousedown(e);if(!e) e=window.event;if (e.button<2){if(xr_ms==1){var o = document.getElementById('xr_xo'+xr_rrl);xr_r0(o);o = document.getElementById('xr_xd'+xr_rrl);xr_clp(o);xr_ms=2;};};};
function xr_mu(e){if(xr_d_old_onmouseup)xr_d_old_onmouseup(e);if(!e) e=window.event;if (e.button<2){if(xr_ms==2){var o = document.getElementById('xr_xo'+xr_rrl);xr_clp(o);o = document.getElementById('xr_xd'+xr_rrl);xr_r0(o);xr_ms=1;var oo = xr_fo.parentNode.href ? xr_fo.parentNode : xr_fo;if ((oo.target=='_self' || oo.target=='') && navigator.userAgent.indexOf('Chrome')!=-1) { document.location=oo.href; } else try{window.open(oo.href, oo.target ? oo.target : '_self')}catch(xr_c){}finally{};xr_re(0);}else xr_xmc();};};
function xr_xmc(){if(xr_pul){xr_v0(xr_pul);xr_pul=0;xr_xpul=0;};};
function xr_mo(o,i,e){if(!e) e=window.event;xr_mmo(o,i);try {xr_tidyMenu(e)} catch(xr_c){} finally{};};
function xr_mpo(o,i,ii,e){if(!e) e=window.event;xr_mmpo(o,i,ii);try {xr_tidyMenu(e)} catch(xr_c){} finally{};};
function xr_mmo(o,i)
{
 if(xr_ms==0 || xr_ms==1)
 {
  xr_re(i);
  xr_fl=o.offsetLeft;
  xr_ft=o.offsetTop;
  var o1=o;
  while(o1.offsetParent&&o1.offsetParent.id!='xr_xr')
  {
   o1=o1.offsetParent;
   xr_fl+=o1.offsetLeft;
   xr_ft+=o1.offsetTop;
  };
  xr_fr=xr_fl+o.offsetWidth;
  xr_fb=xr_ft+o.offsetHeight;
  xr_fo=o;
  xr_rrl=i;
  var o = document.getElementById('xr_xo'+xr_rrl);
  xr_clp(o);
  if(!xr_ms)o.innerHTML=o.innerHTML;
  xr_ms=1;
 };
};

function xr_mp(i,ii){xr_rpp=1;var o=document.getElementById('xr_xp'+i);xr_rc=0;if((xr_ms==0 || xr_ms==1)&&(xr_ps[xr_pi]!=o)){xr_re(ii);xr_ms=0;xr_v1(o);xr_pi++;xr_ps[xr_pi]=o;xr_pl[xr_pi]=i;};};
function xr_mmpo(o,i,ii){xr_rpp=1;xr_mmo(o,ii);var oo=document.getElementById('xr_xp'+i);xr_rc=0;if(xr_ps[xr_pi]!=oo){xr_v1(oo);xr_pi++;xr_ps[xr_pi]=oo;xr_pl[xr_pi]=i;};};
function xr_mpc(i){if(xr_ms==0 && !xr_rpp) xr_re(i);xr_rpp=0;};
function xr_cpu(i){xr_xmc();var o=document.getElementById('xr_xp'+i);xr_v1(o);xr_xpul=o;};
function xr_pv(img,w,h,a){var o1=document.getElementById('xr_sdi1');var o2=document.getElementById('xr_sdi2');var o4=document.getElementById('xr_sdi4');xr_opc=1;if(xr_img0==''){xr_w0=300;xr_h0=200;}if (xr_img0!=img){o4.src='';o1.innerHTML=o1.innerHTML;o4=document.getElementById('xr_sdi4');o4.style.visibility='hidden';xr_img0=img;o4.src=img;xr_cptn=a;o4.style.width=w+'px';o4.style.height=h+'px';o2.innerHTML=a;};xr_w9=w;xr_h9=h;xr_sopc();xr_ani();};
function xr_ani(){if (xr_w0!=xr_w9 || xr_h0!=xr_h9){if(xr_w0==xr_w9){if(xr_h0<xr_h9){xr_h0+=30;if(xr_h0>xr_h9)xr_h0=xr_h9;}else{xr_h0-=30;if(xr_h0<xr_h9)xr_h0=xr_h9;};}else{if(xr_w0<xr_w9){xr_w0+=30;if(xr_w0>xr_w9)xr_w0=xr_w9;}else{xr_w0-=30;if(xr_w0<xr_w9)xr_w0=xr_w9;};}xr_pvx();setTimeout('xr_ani()', 10);}else{xr_pvx();var o4=document.getElementById('xr_sdi4');o4.style.visibility='visible';xr_sopc();};};
function xr_pvx(){if(xr_img0){var o=document.getElementById('xr_sdi');var o1=document.getElementById('xr_sdi1');var o2=document.getElementById('xr_sdi2');var o3=document.getElementById('xr_sdi3');var o4=document.getElementById('xr_sdi4');var w=xr_w0;var h=xr_h0;var cw = document.documentElement.clientWidth;var ch = document.documentElement.clientHeight;var ov = 'hidden';if (w>(cw-80)){w=cw-80;if (w<200) w=200;ov='scroll';};if (h>(ch-100)){h=ch-80;if (h<100) h=100;ov='scroll';}var sx=0;var sy=0;if(typeof(window.pageXOffset)=='number'){sx=window.pageXOffset;sy=window.pageYOffset;} else if(document.body && (document.body.scrollLeft || document.body.scrollTop)){sx=document.body.scrollLeft;sy=document.body.scrollTop;}else{sx=document.documentElement.scrollLeft;sy=document.documentElement.scrollTop;};var x=sx+(cw-w-30)/2;var y=sy+(ch-h-30)/2;o.style.left=(x-15)+'px';o.style.top=(y-15)+'px';o.style.width=(w+30)+'px';if(xr_cptn!=''){o.style.height=(h+55)+'px';o2.style.visibility='visible';}else{o.style.height=(h+30)+'px';o2.style.visibility='hidden';};o1.style.width=w+'px';o1.style.height=h+'px';o1.style.overflow=ov;o2.style.width=w+'px';o2.style.top=(h+27)+'px';o3.style.left=(w-16)+'px';o3.style.top='0px';o.style.zIndex=101;o.style.display='block';};};
function xr_sopc(){var o=document.getElementById('xr_sdi');if (document.body.filters && navigator.appVersion.match(/MSIE ([\d.]+);/)[1]>=5.5){var oAlpha = o.filters['DXImageTransform.Microsoft.alpha'] || o.filters.alpha;if (oAlpha) oAlpha.opacity = xr_opc*100;else o.style.filter += 'progid:DXImageTransform.Microsoft.Alpha(opacity='+(xr_opc*100)+')';}else{o.style.opacity = (xr_opc);o.style.MozOpacity = (xr_opc);o.style.KhtmlOpacity = (xr_opc);};};
function xr_bpc(){var o=document.getElementById('xr_sdi');if(xr_opc>0.2){xr_opc-=0.15;xr_sopc();setTimeout('xr_bpc()', 10);}else{xr_sopc();xr_opc=1;o.style.display='none';xr_img0='';};};
var xr_img0='';var xr_w0;var xr_h0;var xr_w9;var xr_h9;var xr_opc, xr_cptn;
function xr_rx_e(e){if(xr_w_old_onresize)xr_w_old_onresize(e);xr_rx();}
function xr_pvx_e(e){if(xr_w_old_onscroll)xr_w_old_onscroll(e);xr_pvx();}
var xr_d_old_onmousemove=0;var xr_d_old_onmousedown=0;var xr_d_old_onmouseup=0;var xr_w_old_onresize=0;var xr_w_old_onscroll=0;
function xr_aeh(){xr_d_old_onmousemove = document.onmousemove;xr_d_old_onmousedown = document.onmousedown;xr_d_old_onmouseup = document.onmouseup;xr_w_old_onresize = window.onresize;xr_w_old_onscroll = window.onscroll;document.onmousemove=xr_mm;document.onmousedown=xr_md;document.onmouseup=xr_mu;window.onresize=xr_rx_e;window.onscroll=xr_pvx_e;xr_bl();};
