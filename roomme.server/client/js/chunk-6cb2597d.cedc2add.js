(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6cb2597d"],{1736:function(t,e,c){"use strict";c("262b")},"1e53":function(t,e,c){"use strict";c.r(e);var a=c("7a23");const s=Object(a["H"])("data-v-ef5e1490");Object(a["u"])("data-v-ef5e1490");const i={key:0,class:"profile container-fluid background"},l={class:"row text-center my-3"},o={class:"col"},r=Object(a["g"])("Profile Details For: "),b={class:"primary"},n={class:"row"},h={class:"offset- col-5"},O={class:"col water"},j={class:"row my-2"},d={class:"col"},p=Object(a["h"])("span",{class:"primary"},"Age:",-1),f={class:"row my-2"},u={class:"col"},v=Object(a["h"])("span",{class:"primary"},"Gender:",-1),m={class:"row my-2"},y={class:"col"},g=Object(a["h"])("span",{class:"primary"},"Monthly Budget:",-1),w={class:"row my-2"},A={class:"col"},M=Object(a["h"])("span",{class:"primary"},"Anticipated Move-in Date:",-1),P={class:"row my-5"},k={class:"offset-2 col-6"},I=Object(a["h"])("h4",{class:"primary"}," About Me: ",-1),D={class:"row my-5"},R={class:" offset-2 col-6"},C=Object(a["h"])("h3",{class:"primary"}," Interests ",-1),J={class:"row"},L={class:"offset-2 col-6"},U=Object(a["h"])("h4",{class:"primary"}," Lifestyle Choices: ",-1);Object(a["s"])();const $=s((t,e,c,s,$,_)=>s.state.profile.name?(Object(a["r"])(),Object(a["d"])("div",i,[Object(a["h"])("div",l,[Object(a["h"])("div",o,[Object(a["h"])("h1",null,[r,Object(a["h"])("span",b,Object(a["A"])(s.state.profile.name),1)])])]),Object(a["h"])("div",n,[Object(a["h"])("div",h,[Object(a["h"])("img",{src:s.state.profile.imgURL,class:"img-fluid",alt:""},null,8,["src"])]),Object(a["h"])("div",O,[Object(a["h"])("div",j,[Object(a["h"])("div",d,[Object(a["h"])("h3",null,[p,Object(a["g"])(" "+Object(a["A"])(s.state.profile.age),1)])])]),Object(a["h"])("div",f,[Object(a["h"])("div",u,[Object(a["h"])("h3",null,[v,Object(a["g"])(" "+Object(a["A"])(s.state.profile.gender),1)])])]),Object(a["h"])("div",m,[Object(a["h"])("div",y,[Object(a["h"])("h3",null,[g,Object(a["g"])(" $"+Object(a["A"])(s.state.profile.lowPriceRange)+" - $"+Object(a["A"])(s.state.profile.highPriceRange),1)])])]),Object(a["h"])("div",w,[Object(a["h"])("div",A,[Object(a["h"])("h3",null,[M,Object(a["g"])(" "+Object(a["A"])(s.state.profile.anticipatedMoveInDate),1)])])])])]),Object(a["h"])("div",P,[Object(a["h"])("div",k,[I,Object(a["h"])("h5",null,Object(a["A"])(s.state.profile.aboutMe),1)])]),Object(a["h"])("div",D,[Object(a["h"])("div",R,[C,Object(a["h"])("h5",null,Object(a["A"])(s.state.profile.interests),1)])]),Object(a["h"])("div",J,[Object(a["h"])("div",L,[U,Object(a["h"])("h5",null,Object(a["A"])(s.state.profile.lifestyleOptions),1)])])])):Object(a["e"])("",!0));var _=c("83fc"),x=c("8a4e"),B=c("dfac"),F=c("6c02"),G={name:"MatchProfilePage",setup(){const t=Object(F["c"])(),e=Object(a["v"])({profile:Object(a["b"])(()=>_["a"].activeMatch)});return Object(a["p"])(async()=>{try{await B["a"].getMatchProfile(t.params.id)}catch(e){Object(x["a"])(e)}}),{state:e}}};c("1736");G.render=$,G.__scopeId="data-v-ef5e1490";e["default"]=G},"262b":function(t,e,c){},dfac:function(t,e,c){"use strict";c.d(e,"a",(function(){return l}));var a=c("83fc"),s=c("2b20");class i{async like(t){const e=await s["a"].post("api/matches",{toUserId:t});return e.data}async getMatches(){const t=await s["a"].get("api/matches");a["a"].matches=t.data}async getMatchProfile(t){const e=await s["a"].get("api/profiles/"+t);a["a"].activeMatch=e.data}async getCount(){const t=await s["a"].get("api/count");a["a"].count=t.data[0]}}const l=new i}}]);