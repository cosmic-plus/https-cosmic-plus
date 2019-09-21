(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{124:function(e){e.exports=JSON.parse('{"content":[{"name":"Equilibre.io","short_desc":"Portfolio Balancer","description":"Equilibre.io is a portfolio balancer that runs on the Stellar Decentralized Exchange. It is a convenient trading tool to manage long-term positions. Regularly balancing an investment portfolio is known to boost its performances, providing you choose wisely the assets to bet on.","background":"https://equilibre.io/icons/512x512.png","type":"webapp","links":[["Source code","https://git.cosmic.plus/webapp-equilibre-io"],["Bug Report","https://git.cosmic.plus/webapp-equilibre-io/issues"],["Open","https://equilibre.io"]]},{"name":"Stellar Authenticator","short_desc":"Wallet","description":"Stellar Authenticator is a security-oriented wallet for the Stellar blockchain. It has been designed after the functionalities of an hardware wallet. It means that it packs only what is required to make your funds as safe as possible. Strictly limiting the scope of the software makes it easier to review & to keep secure.","background":"https://stellar-authenticator.org/icons/512x512.png","type":"webapp","links":[["Source code","https://git.cosmic.plus/webapp-stellar-authenticator"],["Bug Report","https://git.cosmic.plus/webapp-stellar-authenticator/issues"],["Open","https://stellar-authenticator.org"]]},{"name":"Cosmic Link Website","short_desc":"Transaction Request","description":"The Cosmic Link website provides a convenient way to share Stellar transaction requests as URL. It is a front-end for the Cosmic Link protocol, which implement a way to sign transactions from wallet-independent applications without disclosing your private key.","background":"https://cosmic.link/icons/512x512.png","type":"webapp","links":[["Source Code","https://git.cosmic.plus/webapp-cosmic-link"],["Bug Report","https://git.cosmic.plus/webapp-cosmic-link/issues"],["Open","https://cosmic.link"]]},{"name":"Cosmic Lib","short_desc":"Transaction Request","description":"Implements both ends of the CosmicLink protocol. Applications can use this library to generate Stellar transactions requests that the user can sign using its own wallet. Wallets can use this library to decode, display & sign those transaction requests.","type":"libjs","links":[["Source Code","https://git.cosmic.plus/js-cosmic-lib"],["Documentation","#view:js-cosmic-lib/web/doc/"],["NPM","https://npmjs.com/cosmic-lib"]]},{"name":"Ledger Wallet","short_desc":"Hardware Wallet","description":"A wrapper around official Ledger libraries that makes it incredibly simple to implement Ledger Wallet support for Stellar. Works in both web & Node.js environments.","type":"libjs","links":[["Source Code","https://git.cosmic.plus/js-ledger-wallet"],["Documentation","#view:js-ledger-wallet/"],["NPM","https://npmjs.com/@cosmic-plus/ledger-wallet"]]},{"name":"OC Multisig","short_desc":"Multisignature Coordination","description":"On-Chain Multisig is a signature sharing solution that is built on top of the Stellar ledger. It allows to coordinate multi-signature accounts in a distributed & trustless manner, when strong security is required. It can pass data through Stellar public, test or custom network: it is not required that signatures are transmitted on the same network that the multi-signature account.","type":"libjs","links":[["Source Code","https://git.cosmic.plus/js-oc-multisig"],["Documentation","#view:js-oc-multisig/"],["NPM","https://npmjs.com/@cosmic-plus/oc-multisig"]]},{"name":"Loopcall","short_desc":"Data Fetching","description":"Loopcall enables unlimited queries to Horizon. You can for example fetch the complete transaction history of an account in two lines of code.","type":"libjs","links":[["Source Code","https://git.cosmic.plus/js-loopcall"],["Documentation","#view:js-loopcall/"],["NPM","https://npmjs.com/@cosmic-plus/loopcall"]]}]}')},125:function(e,t,o){var n=o(126),i=e.exports,s=o(10),a=s.create("iframe",".urlView");s.append(document.body,a);var c=window.location.href.split("/",3).join("/")+"/",r=new RegExp("^".concat(c,"(.*)")),l=new RegExp("^".concat(c,"#view:"));i.open=function(e){a.src=c+e.replace("%23","#"),function(e,t){var o=e.contentWindow,n=o.document,i=setInterval((function(){var e=o.document;if(n!==e){var s=e.readyState;"interactive"!==s&&"complete"!==s||(t(),clearInterval(i))}}),40)}(a,(function(){return function(e){var t=e.contentWindow.document;for(var o in t.links){var i=t.links[o];if(i&&i.href){i.href.match(l)&&(i.href=i.href.replace("#view:",""));var s=i.href.match(r);s?function(){var t=s[1],o=t.split("#",1),a=n(o,1)[0],r=e.contentWindow.location.pathname.substr(1)===a,l=t.replace("#","%23");i.href="".concat(c,"#view:").concat(l),i.onclick=function(e){r&&e.preventDefault(),location.hash="#view:".concat(l)}}():"#"!==i.href.substr(0,1)&&(i.target="_blank",i.rel="noopener")}}}(a)})),s.show(a)},i.close=function(){s.hide(a),a.src="about:blank"}},140:function(e,t){e.exports="<section><h2>Mission</h2>\n\n  <ul>\n\n    <li>Release client-side-only applications that demonstrate the unique\n      potential of Stellar.</li>\n\n    <li>Provide a high-level open-source development kit to build Stellar\n      applications.</li>\n\n    <li>Implement and promote a way to secure users funds by decoupling wallets\n      from other services (CosmicLink, SEP-0007).</li>\n\n    <li>Defend the interests of the community by promoting balanced &\n      vendor-neutral solutions at the protocol level (CAP, SEP).</li>\n\n    <li>Promote free software as a way to globally raise the quality of the\n      Stellar ecosystem.</li>\n\n  </ul>\n\n</section>\n\n\n<section><h2>Philosophy</h2>\n\n  <p>Cosmic.plus embraces the cooperative mindset of the free software\n  community. Each Cosmic.plus product gets released in the public domain, under\n  the MIT license.</p>\n\n  <p>In a competitive space such as the Stellar ecosystem, most actors\n  strive to create an edge against competitors. The drawback is that features\n  that could benefit the whole space are generally jailed in private code\n  repositories.</p>\n\n  <p>By releasing software, libraries & innovative protocols in the public\n  domain, Cosmic.plus aims at globally improving Stellar's ecosystem quality.\n  Instead of coding the same functionalities, again and again, developers are\n  offered an opportunity to focus on what makes their software unique.</p>\n\n</section>\n\n<section><h2>Economic Model</h2>\n\n  <p>It is always a bit tricky to profitably develop open-source software over\n  the long-term. So far, Cosmic.plus financed itself thanks to programs such as\n  the Stellar Build Contest or the Stellar Community Fund</p>\n\n  <p>While the research & development budget is not secured yet, a fund\n  exclusively dedicated to long-term maintenance has been put aside. This\n  guarantees that, in any scenario, Cosmic.plus existing products will remain\n  up-to-date for years.</p>\n\n  <p>There are ongoing plans to make Cosmic.plus financially independent without\n  sacrificing its ethic. Realistically, this could take a couple of years to\n  achieve.</p>\n\n</section>\n\n<section><h2>Privacy</h2>\n\n  <p>Privacy is a right. Cosmic.plus applications and libraries don't use\n  ads nor trackers and don't collect or publish data about users activity.\n  However, Cosmic.plus web applications are distributed through GitHub,\n  Cloudflare and to a lesser extent Azure. Those services may keep logs about\n  user activity.</p>\n\n</section>\n"},141:function(e,t,o){var n=o(49),i=o(10),s=o(142),a=o(148);i.append(n.footer,new a(o(149),"Follow on Twitter","https://twitter.com/cosmic_plus"),new a(o(150),"Follow on Reddit","https://reddit.com/r/cosmic_plus"),new a(o(151),"Follow on Medium","https://medium.com/cosmic-plus"),new a(o(152),"Follow on Codepen","https://codepen.io/cosmic-plus"),new a(o(153),"Chat on Telegram","https://t.me/cosmic_plus"),new a(o(154),"Chat on Keybase","https://keybase.io/team/cosmic_plus"),new a(o(155),"Source-code on GitHub","https://git.cosmic.plus"),new a(o(156),"Contact by Email","mailto:mister.ticot@cosmic.plus"),new a(o(157),"Donate Lumens",s))},142:function(e,t,o){var n=o(143);e.exports=function(){var e=prompt("Cosmic.plus welcome donations. Each contribution matters. :)\n\nAmount in Lumens:");isNaN(Number(e))?confirm("Not a valid amount: ".concat(e)):e&&function(e){var t="".concat("https://cosmic.link/?payment&network=public","&memo=").concat("Donation%20to%20Cosmic.plus","&amount=").concat(e,"&destination=").concat("GAWO2C52D57XBT7SQL6YB3XPHFLFD2J4Z5RN7HPFZSHXJMXH72HRXNV3");new n(t)}(e)}},143:function(e,t,o){var n=o(144),i=o(34),s=o(54),a=o(10),c=function(){"use strict";function e(t){i(this,e),e.current&&e.current.close(),e.current=this,this.domNode=a.create("iframe",{title:"Signing Frame",src:t,sandbox:"allow-same-origin allow-scripts allow-forms allow-popups",hidden:!0}),n(this.domNode.style,e.style),a.append(document.body,this.domNode),this.show()}return s(e,[{key:"show",value:function(){var t=this;this.domNode.hidden&&(this.htmlOverflow=document.documentElement.style.overflow,this.bodyOverflow=document.body.style.overflow,document.documentElement.style.overflow="hidden",document.body.style.overflow="hidden",e.shadow.onclick=function(){return t.close()},a.show(e.shadow,this.domNode))}},{key:"hide",value:function(){this.domNode.hidden||(document.documentElement.style.overflow=this.htmlOverflow,document.body.style.overflow=this.bodyOverflow,e.shadow.onclick=null,a.hide(e.shadow,this.domNode))}},{key:"close",value:function(){e.current=null,this.hide(),a.destroy(this.domNode)}}]),e}();window.addEventListener("message",(function(e){var t=c.current&&c.current.domNode.contentWindow;if(e.source===t)switch(e.data){case"show":c.current.show();break;case"hide":c.current.hide();break;case"close":c.current.close()}})),c.style={position:"fixed",zIndex:999,right:0,top:0,width:"30em",maxWidth:"100%",height:"100vh",border:"0.1em solid hsl(240, 10%, 75%)",background:"hsl(240, 40%, 98%)",backgroundImage:'url(\'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="12em" height="12em" viewBox="0 0 18055.55 18055.55" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd"><path d="M6184.01 6244.26l-5076.93 5077.09c-1542.18 1542.18-1542.18 4042.74 0 5584.91 1542.18 1542.18 4042.74 1542.18 5584.91 0l5050.06-5050.22c-946.39 926.55-2243.37 1281.63-3458.3 1065.06l-2788.46 2788.46c-881.29 881.29-2310.22 881.29-3191.52 0-881.29-881.29-881.29-2310.22 0-3191.51l2788.62-2788.62 2311.35-2311.19c883.05-858.58 2294.87-850.9 3168.48 22.71 880.17 880.17 881.29 2306.54 3.52 3188.31l2288.31-2288.47c-136.75-767.89-501.74-1503.15-1095.13-2096.54-593.23-593.23-1328.33-958.22-2096.22-1095.13-1271.39-226.64-2574.93 181.38-3488.69 1095.13z" fill="#c1c1c1"/><path d="M11772.44 11825.98l5076.93-5077.09c1542.18-1542.18 1542.18-4042.74 0-5584.91-1542.18-1542.18-4042.74-1542.18-5584.91 0L6214.4 6214.2c946.39-926.56 2243.37-1281.63 3458.3-1065.07l2788.46-2788.46c881.29-881.29 2310.22-881.29 3191.52 0 881.29 881.29 881.29 2310.22 0 3191.52l-2788.62 2788.62L10552.71 10652c-883.05 858.57-2294.87 850.9-3168.48-22.71-880.17-880.17-881.29-2306.55-3.52-3188.31L5092.4 9729.45c136.75 767.89 501.74 1503.15 1095.13 2096.54 593.23 593.23 1328.33 958.22 2096.22 1095.13 1271.39 226.64 2574.93-181.37 3488.69-1095.13z" fill="#9f9f9f"/><path d="M12651.33 7587.95l-1418.38 1418.38c7.84 577.72-204.89 1157.83-638.02 1603.44l2269.12-2268.96c-45.58-255.91-116.44-508.14-212.72-752.85zm-909.28 4268.09c-810.76 793.48-1919.32 1194.94-3038.77 1116.89-139.79-9.76-279.9-26.87-419.53-51.82l-509.1 509.1c365.47 95.48 749.17 146.35 1144.56 146.35 448 0 880.65-65.26 1289.15-186.81l1533.7-1533.7z" fill="#a6a6a6"/><path d="M6214.4 6214.2c810.76-793.48 1919.32-1194.94 3038.77-1116.89 139.79 9.76 279.9 26.87 419.53 51.82l439.2-439.2c-379.87-103.8-779.89-159.3-1192.7-159.3-416.81 0-820.35 56.46-1203.57 162.34L6214.4 6214.2zm509.1 2788.78c7.36-557.41 220.08-1112.57 638.02-1542.5L5092.4 9729.44c42.87 240.56 108.12 478.07 195.77 708.87L6723.5 9002.98z" fill="#888888"/></svg>\')',backgroundRepeat:"no-repeat",backgroundPosition:"center",padding:0},c.shadow=a.create("div",{hidden:!0}),n(c.shadow.style,{position:"fixed",zIndex:998,top:0,width:"100%",height:"100%",background:"rgba(0,0,0,0.2)"}),document.body.insertBefore(c.shadow,document.body.firstChild),e.exports=c},148:function(e,t,o){var n=o(34),i=o(58),s=o(67),a=o(69),c=o(25),r=function(e){"use strict";function t(e,o,a){var r;return n(this,t),(r=i(this,s(t).call(this,'<a -ref=%link class="Icon">%image</a>'))).image="string"==typeof e?new c(e):e,r.link.title=o,"function"==typeof a?r.link.onclick=a:"string"==typeof a&&(r.link.href=a,a.match(/^http/)&&(r.link.target="_blank",r.link.rel="noopener")),r}return a(t,e),t}(c);e.exports=r},4:function(e,t,o){o(71);var n=o(49),i=o(10),s=o(72),a=o(25),c=o(85),r=o(125),l=new a(o(140));o(141);var u=new s({nav:n.header,selector:n.header,view:n.main});function p(){n.main.scrollTop=0,"#view:"===location.hash.substr(0,6)?(u.select(null),r.open(location.hash.substr(6)),i.hide(n.main)):u.selected?(r.close(),i.show(n.main)):u.select("#applications")}u.add("#applications","Applications",new c("webapp")),u.add("#libraries","Libraries",new c("libjs")),u.add("#about","About",l),u.add("#blog","Blog",(function(){return location.replace("https://medium.com/cosmic-plus")})),u.select(null),u.select(location.hash),u.listen("select",(function(e){e&&(location.hash=e)})),window.onhashchange=p,p()},85:function(e,t,o){var n=o(34),i=o(54),s=o(58),a=o(67),c=o(69),r=o(25),l=o(124).content,u=function(e){"use strict";function t(e){var o;return n(this,t),(o=s(this,a(t).call(this,"%formatItem:items..."))).items=l.filter((function(t){return t.type===e}))||[],o}return c(t,e),i(t,[{key:"formatItem",value:function(e){return new t.Section(e)}}]),t}(r);u.Section=function(e){"use strict";function t(e){return n(this,t),s(this,a(t).call(this,'\n<section class="ContentSection" %style>\n  %toBackground:background\n  <aside>%short_desc</aside>\n  <h2>%name</h2>\n  <p>%description</p>\n  <nav>%toLink:links...</nav>\n</section>\n    ',e))}return c(t,e),i(t,[{key:"toLink",value:function(e){return e[1].startsWith("#")?new r("<a href=%1 >%0</a>",e):new r('<a href=%1 target="_blank" rel="noopener">%0</a>',e)}},{key:"toBackground",value:function(e){if(e)return new r('<img class="background" src=%background>',{background:e})}}]),t}(r),e.exports=u}}]);
//# sourceMappingURL=app.js.map