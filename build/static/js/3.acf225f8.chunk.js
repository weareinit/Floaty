(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{112:function(e,t){},132:function(e,t,a){"use strict";a.r(t);var n=a(36),r=a.n(n),c=a(37),s=a(61),i=a(0),o=a.n(i),l=a(38),m=a(3),u=a(4),d=a(6),p=a(5),h=a(7),f=(a(65),function(e){function t(){return Object(m.a)(this,t),Object(d.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"wave-background-objects",id:"wave-background-objects",name:this.props.name||"animated-waves"},o.a.createElement("div",{id:"shore"},o.a.createElement("div",{id:"wetsand"},o.a.createElement("img",{id:"wetsand3",className:"decor",alt:"placeholder",src:a(66)}),o.a.createElement("img",{id:"wetsand2",className:"decor",alt:"placeholder",src:a(67)}),o.a.createElement("div",{id:"surfboard",class:"decor"}),o.a.createElement("img",{id:"wetsand1",className:"decor",alt:"placeholder",src:a(68)})),o.a.createElement("div",{id:"surf"},o.a.createElement("img",{id:"surf3",className:"decor",alt:"placeholder",src:a(69)}),o.a.createElement("img",{id:"surf2",className:"decor",alt:"placeholder",src:a(70)}))),o.a.createElement("div",{className:"wave-child"}," ",this.props.children))}}]),t}(i.Component)),E=a(71),g=a.n(E),_=a(72),v=a.n(_),b=function(e){var t=e.children;return o.a.createElement(v.a,{verticalScrollbarStyle:{backgroundColor:"transparent"}},o.a.createElement("div",{className:g.a.listContainer},t))},w=a(73),N=a.n(w),k=function(e){var t=e.children;return o.a.createElement("div",{className:N.a.container},o.a.createElement("div",{className:N.a.children},t))},C=a(74),x=a.n(C),O=function(){return o.a.createElement("a",{id:"mlh-trust-badge",className:x.a.container,href:"https://mlh.io/seasons/na-2020/events?utm_source=na-hackathon&utm_medium=TrustBadge&utm_campaign=2020-season&utm_content=white",target:"_blank",rel:"noopener noreferrer"},o.a.createElement("img",{src:"https://s3.amazonaws.com/logged-assets/trust-badge/2020/mlh-trust-badge-2020-blue.svg",alt:"Major League Hacking 2020 Hackathon Season",style:{width:"100%"}}))},y=a(75),j=a(76),S=a.n(j),P=function(e){return Object(y.a)(e),o.a.createElement("div",{className:S.a.container},o.a.createElement("div",{className:S.a.organizer},o.a.createElement("img",{className:"main-section-details-logo",alt:"ShellHacks",src:a(77)})),o.a.createElement("div",{className:S.a.cohost},o.a.createElement("h3",null,"Co hosted by"),"\xa0\xa0",o.a.createElement("img",{className:"main-section-details-logo",alt:"JP Morgan Chase & Co.",src:a(78)})))},L=a(39),z=a(40),M=a(82),A=a.n(M),D=function(e){var t=e.to,a=e.children,n=e.id;return o.a.createElement("a",{className:A.a.container,id:n,href:t},a)},F=a(83),H=a.n(F),T=function(){return o.a.createElement("div",{className:H.a.container},o.a.createElement("h3",null,"Resources"),o.a.createElement("div",{className:H.a.linkContainer},o.a.createElement(D,{to:"http://go.fiu.edu/SH19DevPost",id:"demo-link"},o.a.createElement("img",{id:H.a.devpostImage,style:{width:"100%"},src:"https://devpost-challengepost.netdna-ssl.com/assets/reimagine2/devpost-logo-646bdf6ac6663230947a952f8d354cad.svg",alt:"Devpost"})),o.a.createElement(D,{to:"https://devpost.com/",id:"demo-link"},o.a.createElement("div",{className:H.a.button},o.a.createElement("h2",null,"Table Assignment")))))},I=a(30),J=a.n(I),B=(a(85),a(86)),R=a.n(B),W=function(){var e=Object(i.useState)(""),t=Object(s.a)(e,2),a=t[0],n=t[1],r=Object(i.useState)(""),c=Object(s.a)(r,2),l=c[0],m=c[1];return setInterval(function(){var e=J()().format("lll");m(e),function(){J()("2019-09-20T22:30:00");var e=J()("2019-09-22T09:30:00"),t=J()(),a=J.a.duration(e.diff(t)).format("DD:hh:mm:ss");n(a)}()},1e3),o.a.createElement("div",{className:R.a.container},o.a.createElement("div",null,o.a.createElement("h4",null,"Countdown"),o.a.createElement("h1",null,a)),o.a.createElement("div",null,o.a.createElement("h2",null,l)))},q=a(87),K=a.n(q),Q=function(){return o.a.createElement("div",{className:K.a.container},o.a.createElement("h3",null,"Follow us!"),o.a.createElement("div",{className:K.a.linksConatiner},o.a.createElement(D,{to:"https://discordapp.com/invite/upefiu"},o.a.createElement(z.a,{icon:L.a,size:"3x"})),o.a.createElement(D,{className:K.a.icon,to:"https://www.instagram.com/upefiu/"},o.a.createElement(z.a,{icon:L.c,size:"3x"})),o.a.createElement(D,{className:K.a.icon,to:"https://www.facebook.com/upefiu"},o.a.createElement(z.a,{icon:L.b,size:"3x"})),o.a.createElement(D,{className:K.a.icon,to:"https://twitter.com/upefiu"},o.a.createElement(z.a,{icon:L.e,size:"3x"})),o.a.createElement(D,{className:K.a.icon,to:"https://www.linkedin.com/company/upe-fiu/"},o.a.createElement(z.a,{icon:L.d,size:"3x"}))))},X=a(88),Y=a.n(X),U=a(89).connect("https://api.shellhacks.net"),V=a(115),Z=a.n(V),G={getAnnoucements:function(){var e=Object(c.a)(r.a.mark(function e(){var t,a;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Z.a.get("https://api.shellhacks.net/announcement").then(function(e){return e});case 2:return t=e.sent,a=t.data,e.abrupt("return",a.data);case 5:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),getEvents:function(){var e=Object(c.a)(r.a.mark(function e(){var t,a;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Z.a.get("https://api.shellhacks.net/schedule");case 2:return t=e.sent,a=t.data,e.abrupt("return",a.data);case 5:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}()};t.default=function(){var e=Object(i.useState)([]),t=Object(s.a)(e,2),a=t[0],n=t[1],m=Object(i.useState)([]),u=Object(s.a)(m,2),d=u[0],p=u[1],h=function(){var e=Object(c.a)(r.a.mark(function e(){var t;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,G.getEvents();case 2:t=e.sent,n(t);case 4:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),E=function(){var e=Object(c.a)(r.a.mark(function e(){var t;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,G.getAnnoucements();case 2:t=e.sent,p(t);case 4:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}();return Object(i.useEffect)(function(){E(),h()},[]),U.on("announcement",function(e){console.log(e),E(),l.store.addNotification({title:"New Announcement!",message:"Check the annoucements list...",type:"success",insert:"bottom",container:"bottom-center",animationIn:["animated","fadeIn"],animationOut:["animated","fadeOut"],dismiss:{duration:5e3,onScreen:!0}})}),U.on("schedule_updated",function(){console.log("refresh page"),h(),l.store.addNotification({title:"New Event Added!",message:"check the events list...",type:"success",insert:"bottom",container:"bottom-center",animationIn:["animated","fadeIn"],animationOut:["animated","fadeOut"],dismiss:{duration:5e3,onScreen:!0}})}),console.log(d),o.a.createElement("div",null,o.a.createElement(O,null),o.a.createElement(f,null,o.a.createElement("div",{className:Y.a.message},o.a.createElement("h1",null,"Sorry buddy, We don't do mobile...")),o.a.createElement("div",{className:Y.a.pageContainer},o.a.createElement("div",{className:Y.a.leftContainer},o.a.createElement(P,null),o.a.createElement(T,null),o.a.createElement(Q,null),o.a.createElement("div",{style:{display:"block",width:"100%",textAlign:"center"}},o.a.createElement("div",{className:Y.a.floorPlans},o.a.createElement(D,{to:"https://drive.google.com/file/d/1wT0cib7JF-HwSbBZj9XIt6f6u0WAziz8/view?usp=sharing"},o.a.createElement("h3",null,"Floor Plan: First Floor")),o.a.createElement(D,{to:"https://drive.google.com/file/d/1au-NUFuqrd3FnhSfnp-8kDOcqwyygvM8/view?usp=sharing"},o.a.createElement("h3",null,"Floor Plan: Second Floor"))),o.a.createElement("div",{className:Y.a.floorPlans},o.a.createElement("h3",null,"Wifi Name: ShellHacks2019"),o.a.createElement("h3",null,"Wifi Password: Shell1000")))),o.a.createElement("div",{className:Y.a.rightContainer},o.a.createElement("div",{className:Y.a.timerContainer},o.a.createElement(W,null)),o.a.createElement("div",{className:Y.a.scheduleAndAnnouncements},o.a.createElement(b,{classname:Y.a.announcements},d.map(function(e,t){return o.a.createElement(k,{key:t},o.a.createElement("h2",null,e.title),o.a.createElement("h3",null,e.body),o.a.createElement("h3",null,e.category),o.a.createElement("h3",null,e.sendTime),o.a.createElement("h3",null,"- ShellHacks Team"))})),o.a.createElement(b,null,a.map(function(e,t){return o.a.createElement(k,{key:t},o.a.createElement("ul",null,o.a.createElement("h2",null,e.title),o.a.createElement("br",null),o.a.createElement("li",null,"\u23f1\ufe0f Start: ",J()(e.startTime).format("LLLL")),o.a.createElement("li",null,"\u23f1\ufe0f End: ",J()(e.endTime).format("LLLL"))))})))))))}},65:function(e,t,a){},66:function(e,t,a){e.exports=a.p+"static/media/wetsand3.3ea87745.svg"},67:function(e,t,a){e.exports=a.p+"static/media/wetsand2.13b2a952.svg"},68:function(e,t,a){e.exports=a.p+"static/media/wetsand1.cc618905.svg"},69:function(e,t,a){e.exports=a.p+"static/media/surf3.a41fa025.svg"},70:function(e,t,a){e.exports=a.p+"static/media/surf2.c8141404.svg"},71:function(e,t,a){e.exports={scrollarea:"List_scrollarea__1MCu7",listContainer:"List_listContainer__1oJ3e"}},73:function(e,t,a){e.exports={container:"Card_container__3MyK-",children:"Card_children__2InYv"}},74:function(e,t,a){e.exports={container:"MLHBadge_container__3L8TF"}},76:function(e,t,a){e.exports={container:"Organizers_container__3fizC",organizer:"Organizers_organizer__2DXO4",cohost:"Organizers_cohost__3byRd"}},77:function(e,t,a){e.exports=a.p+"static/media/shellhacks.301cf75e.svg"},78:function(e,t,a){e.exports=a.p+"static/media/JPMC.277b43d1.svg"},82:function(e,t,a){e.exports={container:"Link_container__3-8lQ"}},83:function(e,t,a){e.exports={container:"Demo_container__2oKYs",linkContainer:"Demo_linkContainer__HFdws",devpostImage:"Demo_devpostImage__2yRg5",button:"Demo_button__2VdaN","demo-links":"Demo_demo-links__3wHnO"}},86:function(e,t,a){e.exports={container:"Timer_container__37BtD"}},87:function(e,t,a){e.exports={container:"SocialMedia_container__388rd",linksContainer:"SocialMedia_linksContainer__2QrlD"}},88:function(e,t,a){e.exports={message:"Page_message__QxEOq",pageContainer:"Page_pageContainer__178mj",leftContainer:"Page_leftContainer__1jCRL",socialMediaContainer:"Page_socialMediaContainer__3HKM8",floorPlans:"Page_floorPlans__1n2iM",musicPlayerSection:"Page_musicPlayerSection__24BNp",rightContainer:"Page_rightContainer__3-L4w",timerContainer:"Page_timerContainer__36sph",scheduleAndAnnouncements:"Page_scheduleAndAnnouncements__34myM",sponsors:"Page_sponsors__1cg8k"}}}]);
//# sourceMappingURL=3.acf225f8.chunk.js.map