dnsDomainIs=function(h,d){return h.indexOf(d,h.length-d.length)!==-1&&(d.length===h.length||h.indexOf("."+d,h.length-("."+d).length)!==-1)}
function FindProxyForURL(u,h){h=h.toLowerCase();if(h==="appdownload.itunes.apple.com"||dnsDomainIs(h,"battlenet.com.cn")||dnsDomainIs(h,"dist.blizzard.com.edgesuite.net")||/us-ore-\d+\.s3\.amazonaws\.com/.test(h)||/\w{2}-\w{3}-\d{5}\.s3\.amazonaws\.com/.test(h)){return "DIRECT"}a=["itunes.apple.com","spotify.com"];for(i=0;i<a.length;i++){if(dnsDomainIs(h,a[i])){return "PROXY 166.111.80.96:18096"}}if(/\.?blogspot\.\w{2}$/.test(h)||/\.google\.com\.\w{2}$/.test(h)||/(google\.\w{2}$|google\.co\.\w{2}$)/.test(h)||/rdio[^\.]*\.akamaihd\.net/.test(h)||/.*rdio.com/.test(h))return "PROXY 166.111.80.96:18096";a=["tudou.com","weibo.com","xunlei.com","pptv.com","sohu.com","taobao.com","qq.com","163.com","sina.cn","alipay.com","youku.com"];for(i=0;i<a.length;i++){if(dnsDomainIs(h,a[i])){return "DIRECT"}}a=["tumblr.com","google.de","googlecommerce.com","googleartproject.com","googlehosted.com","googlepages.com","google.co.jp","googleplus.com","googledrive.com","googlegroups.com","google.com.au","googlelabs.com","googleusercontent.com","google.cn","googleapis.com","google.com","googlevideo.com","google.com.hk","googledomains.com","google.com.hk","googledomains.com","googlemail.com","googlecode.com","googlesource.com","googleearth.com","google.co.jp","dropbox.com","dropboxusercontent.com"];for(i=0;i<a.length;i++){if(dnsDomainIs(h,a[i])){return "PROXY 166.111.80.96:18096"}}return "DIRECT"}
