"use strict";(("undefined"!=typeof self?self:global).webpackChunkopen=("undefined"!=typeof self?self:global).webpackChunkopen||[]).push([[499],{28231:(e,t,a)=>{a.d(t,{S:()=>d});var r=a(67294),i=a.n(r),o=a(38124),l=a(28760);const n="artist-artistVerifiedBadge-wrapper",s="artist-artistVerifiedBadge-badge",u="artist-artistVerifiedBadge-fillColor",d=({text:e})=>i().createElement("span",{className:n},i().createElement("div",{className:`${s} ${u}`}),i().createElement(o.T,{semanticColor:"textAnnouncement",className:s,iconSize:24}),e?i().createElement(l.Dy,{variant:"mesto"},e):null)},98896:(e,t,a)=>{a.r(t),a.d(t,{UserPage:()=>pt,default:()=>vt});var r=a(67294),i=a.n(r),o=a(52883),l=a(69518),n=a.n(l),s=a(73305),u=a(46886),d=a(94184),m=a.n(d),c=a(20657),g=a(30523),p=a(1663),v=a(19480),f=a(48327),h=a(19719);const b={xs:"(min-width: 0px)",xsOnly:"(min-width: 0px) and (max-width: 767px)",sm:"(min-width: 768px)",smOnly:"(min-width: 768px) and (max-width: 1023px)",md:"(min-width: 1024px)",mdOnly:"(min-width: 1024px) and (max-width: 1279px)",lg:"(min-width: 1280px)",lgOnly:"(min-width: 1280px) and (max-width: 1919px)",xl:"(min-width: 1920px)",buddyFeedMinWidth:"72px",buddyFeedEmptyMinWidth:"270px",buddyFeedInitialWidth:"270px",buddyFeedMaxWidth:"384px",container:"yOe_xPT64Wi01yatD5IV",background:"IG4oVuJI3tVI46Ozz0Tj",overlay:"TyrshqzSwgfwihKjwE_3",loggedOut:"USCN36iKqya8vtyqSrFc",historyButtons:"wgbE5y7apYq2FJMFJ39J",icon:"OkR029QvBP9w1NE3QARd",button:"OdrPFSqGXrkpks3vlCm_",forward:"eT0XuDy1tU1TOwGZyIwn",topbarContentWrapper:"wtnquVBZWBNNGbtaOeZG",topbarContent:"afxsJGFbodKGelOf2HIC",UpgradeButton:"yFo6K6vG4LJrhED3CTLM",indicators:"TMejcdPXVjrwMkwBmfEI",contentArea:"KkxTOy6M3_iAI8UADD4S",back:"r4c4tLr5JCs4Y3Zz5zpR",user:"umiKMm5NVr5UeBJCHS6U",section:"jzhwZKbfx4vrC_MYd_7c",subPage:"MWWPQQjbjRfoGdPD8D68",imageContainer:"rMpf7sfaPDcj387_52fA",topTrackSubPage:"kWCnF32FrVtGHmTy8QeV",header:"uJxNEI2k7x8UCDdMKELt",title:"wDIZ2yYKjfGI68I4cZ98"},y=e=>{var t;const{uri:a}=e,{data:r,loading:o,error:l}=(0,f.J)(h.n5.getFollowers,[a]),n=null==r||null===(t=r.body)||void 0===t?void 0:t.profiles;return o?i().createElement(p.h,{hasError:null!==l,errorMessage:c.ag.get("error.not_found.title.page")}):i().createElement(v.P,{className:m()("contentSpacing",b.subPage),title:c.ag.get("followers"),total:null==n?void 0:n.length,showAll:!0},null==n?void 0:n.map(((e,t)=>i().createElement(g.P,{key:e.uri,index:t,uri:e.uri,name:e.name,images:[{url:e.image_url}]}))))},E=e=>{var t;const{uri:a}=e,{data:r,loading:o,error:l}=(0,f.J)(h.n5.getFollowing,[a]),n=null==r||null===(t=r.body)||void 0===t?void 0:t.profiles;return o?i().createElement(p.h,{hasError:null!==l,errorMessage:c.ag.get("error.not_found.title.page")}):i().createElement(v.P,{className:m()("contentSpacing",b.subPage),title:c.ag.get("following"),total:null==n?void 0:n.length,showAll:!0},null==n?void 0:n.map(((e,t)=>i().createElement(g.P,{key:e.uri,index:t,uri:e.uri,name:e.name,images:[{url:e.image_url}]}))))};var k=a(65858),P=a(95661),O=a(89477),I=a(46309),w=a(43480),N=a(70369),_=a(37338),x=a(42273),S=a(98778),D=a(59482),R=a(72907),C=a(28760),A=a(10149),T=a(6060),U=a(99450),M=a(85105),j=a(50119),L=a(95184),W=a(45133),H=a(25678),J=a(33732);const F="F8_EX1AeKxXNSeh1qiHq",B="valcBm4lLe9qFBcg0sFY",G="tAIzXn8C9KriGwGuBfWg",K="PsrXxenHUFXYM1ub1xWw",z="U_VWfeeLWnDPhUTxCmrQ",Q=function({onClickEdit:e,onClickRemove:t,name:a,images:r}){const[o,l]=(0,J.RH)(r),n=(0,H.VO)(o,l)===H.KO.loaded;return i().createElement("div",{className:F},i().createElement(x.Oe,{loading:"eager",name:a,images:r,placeholderType:"user",shape:x.Kc.CIRCLE}),i().createElement("div",{className:m()(B,{[K]:n})},i().createElement("button",{className:G,"aria-haspopup":"true",onClick:e,type:"button"},i().createElement(C.Dy,{variant:"ballad"},c.ag.get("user.edit-details.choose-photo"))),i().createElement("div",{className:m()(z,"icon")},i().createElement(W.y,{iconSize:48,"aria-hidden":!0})),i().createElement("button",{className:G,onClick:t,type:"button"},i().createElement(C.Dy,{variant:"ballad"},c.ag.get("user.edit-details.remove-photo")))))};var Z=a(26529),V=a(16516),X=a(15429),Y=a(59713),q=a.n(Y),$=a(62100);function ee(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function te(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?ee(Object(a),!0).forEach((function(t){q()(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):ee(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}const ae={paths:""},re={encode(e,t=$.Writer.create()){for(const a of e.paths)t.uint32(10).string(a);return t},decode(e,t){const a=e instanceof Uint8Array?new $.Reader(e):e;let r=void 0===t?a.len:a.pos+t;const i=te({},ae);for(i.paths=[];a.pos<r;){const e=a.uint32();if(e>>>3==1)i.paths.push(a.string());else a.skipType(7&e)}return i},fromJSON(e){const t=te({},ae);if(t.paths=[],void 0!==e.paths&&null!==e.paths)for(const a of e.paths)t.paths.push(String(a));return t},fromPartial(e){const t=te({},ae);if(t.paths=[],void 0!==e.paths&&null!==e.paths)for(const a of e.paths)t.paths.push(a);return t},toJSON(e){const t={};return e.paths?t.paths=e.paths.map((e=>e)):t.paths=[],t}};var ie=a(43720),oe=a(48764).Buffer;function le(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function ne(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?le(Object(a),!0).forEach((function(t){q()(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):le(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}const se={value:0},ue={value:!1},de={value:""};const me={encode:(e,t=$.Writer.create())=>(t.uint32(8).int32(e.value),t),decode(e,t){const a=e instanceof Uint8Array?new $.Reader(e):e;let r=void 0===t?a.len:a.pos+t;const i=ne({},se);for(;a.pos<r;){const e=a.uint32();if(e>>>3==1)i.value=a.int32();else a.skipType(7&e)}return i},fromJSON(e){const t=ne({},se);return void 0!==e.value&&null!==e.value?t.value=Number(e.value):t.value=0,t},fromPartial(e){const t=ne({},se);return void 0!==e.value&&null!==e.value?t.value=e.value:t.value=0,t},toJSON(e){const t={};return void 0!==e.value&&(t.value=e.value),t}},ce={encode:(e,t=$.Writer.create())=>(t.uint32(8).bool(e.value),t),decode(e,t){const a=e instanceof Uint8Array?new $.Reader(e):e;let r=void 0===t?a.len:a.pos+t;const i=ne({},ue);for(;a.pos<r;){const e=a.uint32();if(e>>>3==1)i.value=a.bool();else a.skipType(7&e)}return i},fromJSON(e){const t=ne({},ue);return void 0!==e.value&&null!==e.value?t.value=Boolean(e.value):t.value=!1,t},fromPartial(e){const t=ne({},ue);return void 0!==e.value&&null!==e.value?t.value=e.value:t.value=!1,t},toJSON(e){const t={};return void 0!==e.value&&(t.value=e.value),t}},ge={encode:(e,t=$.Writer.create())=>(t.uint32(10).string(e.value),t),decode(e,t){const a=e instanceof Uint8Array?new $.Reader(e):e;let r=void 0===t?a.len:a.pos+t;const i=ne({},de);for(;a.pos<r;){const e=a.uint32();if(e>>>3==1)i.value=a.string();else a.skipType(7&e)}return i},fromJSON(e){const t=ne({},de);return void 0!==e.value&&null!==e.value?t.value=String(e.value):t.value="",t},fromPartial(e){const t=ne({},de);return void 0!==e.value&&null!==e.value?t.value=e.value:t.value="",t},toJSON(e){const t={};return void 0!==e.value&&(t.value=e.value),t}};$.util.Long!==ie&&($.util.Long=ie,(0,$.configure)());const pe=globalThis;pe.atob,pe.btoa;function ve(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function fe(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?ve(Object(a),!0).forEach((function(t){q()(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):ve(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}const he={maxWidth:0,maxHeight:0,url:""},be={},ye={},Ee={encode:(e,t=$.Writer.create())=>(t.uint32(8).int32(e.maxWidth),t.uint32(16).int32(e.maxHeight),t.uint32(26).string(e.url),t),decode(e,t){const a=e instanceof Uint8Array?new $.Reader(e):e;let r=void 0===t?a.len:a.pos+t;const i=fe({},he);for(;a.pos<r;){const e=a.uint32();switch(e>>>3){case 1:i.maxWidth=a.int32();break;case 2:i.maxHeight=a.int32();break;case 3:i.url=a.string();break;default:a.skipType(7&e)}}return i},fromJSON(e){const t=fe({},he);return void 0!==e.maxWidth&&null!==e.maxWidth?t.maxWidth=Number(e.maxWidth):t.maxWidth=0,void 0!==e.maxHeight&&null!==e.maxHeight?t.maxHeight=Number(e.maxHeight):t.maxHeight=0,void 0!==e.url&&null!==e.url?t.url=String(e.url):t.url="",t},fromPartial(e){const t=fe({},he);return void 0!==e.maxWidth&&null!==e.maxWidth?t.maxWidth=e.maxWidth:t.maxWidth=0,void 0!==e.maxHeight&&null!==e.maxHeight?t.maxHeight=e.maxHeight:t.maxHeight=0,void 0!==e.url&&null!==e.url?t.url=e.url:t.url="",t},toJSON(e){const t={};return void 0!==e.maxWidth&&(t.maxWidth=e.maxWidth),void 0!==e.maxHeight&&(t.maxHeight=e.maxHeight),void 0!==e.url&&(t.url=e.url),t}},ke={encode(e,t=$.Writer.create()){void 0!==e.username&&void 0!==e.username&&ge.encode({value:e.username},t.uint32(10).fork()).ldelim(),void 0!==e.name&&void 0!==e.name&&ge.encode({value:e.name},t.uint32(18).fork()).ldelim();for(const a of e.images)Ee.encode(a,t.uint32(26).fork()).ldelim();return void 0!==e.verified&&void 0!==e.verified&&ce.encode({value:e.verified},t.uint32(34).fork()).ldelim(),void 0!==e.editProfileDisabled&&void 0!==e.editProfileDisabled&&ce.encode({value:e.editProfileDisabled},t.uint32(42).fork()).ldelim(),void 0!==e.reportAbuseDisabled&&void 0!==e.reportAbuseDisabled&&ce.encode({value:e.reportAbuseDisabled},t.uint32(50).fork()).ldelim(),void 0!==e.abuseReportedName&&void 0!==e.abuseReportedName&&ce.encode({value:e.abuseReportedName},t.uint32(58).fork()).ldelim(),void 0!==e.abuseReportedImage&&void 0!==e.abuseReportedImage&&ce.encode({value:e.abuseReportedImage},t.uint32(66).fork()).ldelim(),void 0!==e.hasSpotifyName&&void 0!==e.hasSpotifyName&&ce.encode({value:e.hasSpotifyName},t.uint32(74).fork()).ldelim(),void 0!==e.hasSpotifyImage&&void 0!==e.hasSpotifyImage&&ce.encode({value:e.hasSpotifyImage},t.uint32(82).fork()).ldelim(),void 0!==e.color&&void 0!==e.color&&me.encode({value:e.color},t.uint32(90).fork()).ldelim(),t},decode(e,t){const a=e instanceof Uint8Array?new $.Reader(e):e;let r=void 0===t?a.len:a.pos+t;const i=fe({},be);for(i.images=[];a.pos<r;){const e=a.uint32();switch(e>>>3){case 1:i.username=ge.decode(a,a.uint32()).value;break;case 2:i.name=ge.decode(a,a.uint32()).value;break;case 3:i.images.push(Ee.decode(a,a.uint32()));break;case 4:i.verified=ce.decode(a,a.uint32()).value;break;case 5:i.editProfileDisabled=ce.decode(a,a.uint32()).value;break;case 6:i.reportAbuseDisabled=ce.decode(a,a.uint32()).value;break;case 7:i.abuseReportedName=ce.decode(a,a.uint32()).value;break;case 8:i.abuseReportedImage=ce.decode(a,a.uint32()).value;break;case 9:i.hasSpotifyName=ce.decode(a,a.uint32()).value;break;case 10:i.hasSpotifyImage=ce.decode(a,a.uint32()).value;break;case 11:i.color=me.decode(a,a.uint32()).value;break;default:a.skipType(7&e)}}return i},fromJSON(e){const t=fe({},be);if(t.images=[],void 0!==e.username&&null!==e.username?t.username=String(e.username):t.username=void 0,void 0!==e.name&&null!==e.name?t.name=String(e.name):t.name=void 0,void 0!==e.images&&null!==e.images)for(const a of e.images)t.images.push(Ee.fromJSON(a));return void 0!==e.verified&&null!==e.verified?t.verified=Boolean(e.verified):t.verified=void 0,void 0!==e.editProfileDisabled&&null!==e.editProfileDisabled?t.editProfileDisabled=Boolean(e.editProfileDisabled):t.editProfileDisabled=void 0,void 0!==e.reportAbuseDisabled&&null!==e.reportAbuseDisabled?t.reportAbuseDisabled=Boolean(e.reportAbuseDisabled):t.reportAbuseDisabled=void 0,void 0!==e.abuseReportedName&&null!==e.abuseReportedName?t.abuseReportedName=Boolean(e.abuseReportedName):t.abuseReportedName=void 0,void 0!==e.abuseReportedImage&&null!==e.abuseReportedImage?t.abuseReportedImage=Boolean(e.abuseReportedImage):t.abuseReportedImage=void 0,void 0!==e.hasSpotifyName&&null!==e.hasSpotifyName?t.hasSpotifyName=Boolean(e.hasSpotifyName):t.hasSpotifyName=void 0,void 0!==e.hasSpotifyImage&&null!==e.hasSpotifyImage?t.hasSpotifyImage=Boolean(e.hasSpotifyImage):t.hasSpotifyImage=void 0,void 0!==e.color&&null!==e.color?t.color=Number(e.color):t.color=void 0,t},fromPartial(e){const t=fe({},be);if(t.images=[],void 0!==e.username&&null!==e.username?t.username=e.username:t.username=void 0,void 0!==e.name&&null!==e.name?t.name=e.name:t.name=void 0,void 0!==e.images&&null!==e.images)for(const a of e.images)t.images.push(Ee.fromPartial(a));return void 0!==e.verified&&null!==e.verified?t.verified=e.verified:t.verified=void 0,void 0!==e.editProfileDisabled&&null!==e.editProfileDisabled?t.editProfileDisabled=e.editProfileDisabled:t.editProfileDisabled=void 0,void 0!==e.reportAbuseDisabled&&null!==e.reportAbuseDisabled?t.reportAbuseDisabled=e.reportAbuseDisabled:t.reportAbuseDisabled=void 0,void 0!==e.abuseReportedName&&null!==e.abuseReportedName?t.abuseReportedName=e.abuseReportedName:t.abuseReportedName=void 0,void 0!==e.abuseReportedImage&&null!==e.abuseReportedImage?t.abuseReportedImage=e.abuseReportedImage:t.abuseReportedImage=void 0,void 0!==e.hasSpotifyName&&null!==e.hasSpotifyName?t.hasSpotifyName=e.hasSpotifyName:t.hasSpotifyName=void 0,void 0!==e.hasSpotifyImage&&null!==e.hasSpotifyImage?t.hasSpotifyImage=e.hasSpotifyImage:t.hasSpotifyImage=void 0,void 0!==e.color&&null!==e.color?t.color=e.color:t.color=void 0,t},toJSON(e){const t={};return void 0!==e.username&&(t.username=e.username),void 0!==e.name&&(t.name=e.name),e.images?t.images=e.images.map((e=>e?Ee.toJSON(e):void 0)):t.images=[],void 0!==e.verified&&(t.verified=e.verified),void 0!==e.editProfileDisabled&&(t.editProfileDisabled=e.editProfileDisabled),void 0!==e.reportAbuseDisabled&&(t.reportAbuseDisabled=e.reportAbuseDisabled),void 0!==e.abuseReportedName&&(t.abuseReportedName=e.abuseReportedName),void 0!==e.abuseReportedImage&&(t.abuseReportedImage=e.abuseReportedImage),void 0!==e.hasSpotifyName&&(t.hasSpotifyName=e.hasSpotifyName),void 0!==e.hasSpotifyImage&&(t.hasSpotifyImage=e.hasSpotifyImage),void 0!==e.color&&(t.color=e.color),t}},Pe={encode:(e,t=$.Writer.create())=>(void 0!==e.mask&&void 0!==e.mask&&re.encode(e.mask,t.uint32(10).fork()).ldelim(),void 0!==e.userProfile&&void 0!==e.userProfile&&ke.encode(e.userProfile,t.uint32(18).fork()).ldelim(),t),decode(e,t){const a=e instanceof Uint8Array?new $.Reader(e):e;let r=void 0===t?a.len:a.pos+t;const i=fe({},ye);for(;a.pos<r;){const e=a.uint32();switch(e>>>3){case 1:i.mask=re.decode(a,a.uint32());break;case 2:i.userProfile=ke.decode(a,a.uint32());break;default:a.skipType(7&e)}}return i},fromJSON(e){const t=fe({},ye);return void 0!==e.mask&&null!==e.mask?t.mask=re.fromJSON(e.mask):t.mask=void 0,void 0!==e.userProfile&&null!==e.userProfile?t.userProfile=ke.fromJSON(e.userProfile):t.userProfile=void 0,t},fromPartial(e){const t=fe({},ye);return void 0!==e.mask&&null!==e.mask?t.mask=re.fromPartial(e.mask):t.mask=void 0,void 0!==e.userProfile&&null!==e.userProfile?t.userProfile=ke.fromPartial(e.userProfile):t.userProfile=void 0,t},toJSON(e){const t={};return void 0!==e.mask&&(t.mask=e.mask?re.toJSON(e.mask):void 0),void 0!==e.userProfile&&(t.userProfile=e.userProfile?ke.toJSON(e.userProfile):void 0),t}},Oe=`${V.XA}/identity`;async function Ie(e,t,{name:a,imageUploadToken:r}){void 0!==a&&await async function(e,t,a){const r=Pe.encode(Pe.fromPartial({mask:{paths:["name"]},userProfile:null!==a?{name:a}:{}}));await e.build().withHost(Oe).withMethod("POST").withPath(`/v3/user/username/${encodeURIComponent((0,X.C)(t))}`).withEndpointIdentifier("/v3/user/username/{username}").withBody(r.finish()).withoutMarket().send()}(e,t,a),void 0!==r&&(null!==r?await async function(e,t,a){await e.build().withHost(Oe).withMethod("POST").withPath(`/v3/profile-image/${encodeURIComponent((0,X.C)(t))}/${a}`).withEndpointIdentifier("/v3/profile-image/{username}/{uploadToken}").withoutMarket().send()}(e,t,r):await async function(e,t){await e.build().withHost(Oe).withMethod("DELETE").withPath(`/v3/profile-image/${encodeURIComponent((0,X.C)(t))}`).withEndpointIdentifier("/v3/profile-image/{username}").withoutMarket().send()}(e,t))}const we={type:"error",get message(){return c.ag.get("user.edit-details.error.file-size-exceeded",4)}},Ne={type:"error",get message(){return c.ag.get("user.edit-details.error.too-small",300,300)}},_e={type:"error",get message(){return c.ag.get("user.edit-details.error.missing-name")}},xe={type:"error",get message(){return c.ag.get("user.edit-details.error.failed-to-save")}},Se={type:"error",get message(){return c.ag.get("user.edit-details.error.file-upload-failed")}};function De(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function Re(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?De(Object(a),!0).forEach((function(t){q()(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):De(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function Ce(e){return{type:"setLoading",loading:e}}function Ae(e){return{type:"setMessage",message:e}}function Te(e,t){switch(t.type){case"setName":return Re(Re({},e),{},{name:t.name});case"setMessage":return Re(Re({},e),{},{message:t.message,loading:!1});case"setLoading":return Re(Re({},e),{},{loading:t.loading,message:null});case"setImageData":return Re(Re({},e),{},{imageData:t.data,removeImage:!1});case"setImageToken":return Re(Re({},e),{},{imageToken:t.token,removeImage:!1});case"removeImage":return Re(Re({},e),{},{imageToken:void 0,imageData:void 0,image:void 0,removeImage:!0});default:return e}}const Ue={container:"XwNfIrI6_hCa_9_T2cQB",content:"so0bdX3oZH6YW5_nGxIR",header:"aM3plU4zzDqjWlvUHGYb",closeBtn:"zHeo4VUxytwm6Ptr0QyA",image:"vAeyAmeLkDEDKdL9Hou0",imageLoadingContainer:"dnmzO6yYKkxUV8jl7O1Z",textElement:"oN9QVvJKEtdTH3HGfCu1",name:"uj7hczcCH1dZpse8Kfmi",textElementLabel:"wvLAEV5wF5C5ej6rvimT",labelText:"gAQfzAUp1FuSXODeZJfP",nameInput:"dMhJaxli87_22jb_3d9x",save:"MDb7QhAtHeyM4gKj8j8t",disclaimer:"zGbjZMZ1DTx4futEbN9l"},Me=i().memo((({uri:e,name:t,image:a,onClose:o,shouldOpenImagePicker:l})=>{const[n,s]=(0,j.Hs)(),[u,d]=function({name:e,image:t}){return(0,r.useReducer)(Te,{loading:!1,message:null,name:e,image:t})}({name:t,image:a}),g=(0,r.useMemo)((()=>{const e=u.imageData||u.image;return e?[{url:e,width:300,height:300}]:[]}),[u.image,u.imageData]);(0,r.useEffect)((()=>{l&&s()}),[s,l]);const p=(0,r.useCallback)((e=>{e===j.Hy.FILE_TOO_BIG?d(Ae(we)):e===j.Hy.IMAGE_TOO_SMALL&&d(Ae(Ne))}),[d]),v=(0,r.useCallback)((()=>{d({type:"removeImage"})}),[d]),f=(0,r.useCallback)((async t=>{t.preventDefault();if(0!==u.name.trim().length){d(Ce(!0));try{const t=u.removeImage?null:u.imageToken;await async function(e,{name:t,imageUploadToken:a}){await Ie(Z.b.getInstance(),e,{name:t,imageUploadToken:a})}(e,{name:u.name,imageUploadToken:t}),o({name:u.name,image:u.imageData||u.image})}catch(e){d(Ae(xe))}}else d(Ae(_e))}),[d,o,u.image,u.imageData,u.imageToken,u.name,u.removeImage,e]);return i().createElement(M.Z,{isOpen:!0,contentLabel:c.ag.get("user.edit-details.title"),onRequestClose:()=>o()},i().createElement("div",{className:Ue.container},i().createElement("div",{className:Ue.header},i().createElement(C.Dy,{as:"h1",className:Ue.heading,variant:"canon"},c.ag.get("user.edit-details.title")),i().createElement("button",{className:Ue.closeBtn,onClick:()=>o(),"aria-label":c.ag.get("close")},i().createElement(A.k,{iconSize:16}))),u.message&&i().createElement(L.X,{isErrorMessage:"error"===u.message.type,message:u.message.message}),i().createElement("form",{className:Ue.content,onSubmit:f},i().createElement(j.uL,{isOpen:n,minImageWidth:300,minImageHeight:300,maxFileSizeMB:4,onChange:async function(e){if(!e)return;const{imageFile:t,imageDataUrl:a}=e;if(d(Ae(null)),d({type:"setImageData",data:a}),t)try{d(Ce(!0));const e=await async function(e){const t=await Z.b.getInstance().build().withEndpointIdentifier("image-upload/v4/user-profile").withHost("https://image-upload.spotify.com/v4").withMethod("POST").withPath("/user-profile").withBody(e).withoutGlobalHeaders().withHeaders([{key:"Content-Type",value:"image/jpeg"}]).withoutMarket().send();if(!t.body)throw new Error("No upload token recieved");return t.body.uploadToken}(t);d({type:"setImageToken",token:e}),d(Ce(!1))}catch{d(Ae(Se))}},onError:p}),i().createElement("div",{className:Ue.image},i().createElement(Q,{name:t,images:g,onClickEdit:s,onClickRemove:v}),u.loading&&i().createElement("div",{className:Ue.imageLoadingContainer},i().createElement(T.T,null))),i().createElement("div",{className:Ue.name},i().createElement("label",{htmlFor:"user-edit-name",className:Ue.textElementLabel},i().createElement(C.Dy,{variant:"finaleBold",className:Ue.labelText},c.ag.get("user.edit-details.name-label"))),i().createElement("input",{"data-testid":"user-edit-name-input",id:"user-edit-name",type:"text",dir:"auto",className:m()(Ue.textElement,Ue.nameInput),onChange:e=>{d(function(e){return{type:"setName",name:e}}(e.target.value))},placeholder:c.ag.get("user.edit-details.name-placeholder"),maxLength:32,value:u.name})),i().createElement("div",{className:Ue.save},i().createElement(U.D,{colorSet:"invertedLight",onClick:f,disabled:u.loading},c.ag.get("save"))),i().createElement(C.Dy,{as:"p",variant:"finaleBold",className:Ue.disclaimer},c.ag.get("image-upload.legal-disclaimer")))))}));var je=a(56802),Le=a(4236),We=a(94321),He=a(29255),Je=a(52983),Fe=a(30947),Be=a(20246),Ge=a(18261),Ke=a(14535),ze=a(43620),Qe=a(46146),Ze=a(49961),Ve=a(74563),Xe=a(28231),Ye=a(13218),qe=a(28248),$e=a(95880),et=a(47991),tt=a(42922),at=a(84242),rt=a(42781);const it=i().memo((({tracks:e,hasHeaderRow:t=!1,nrTracksVisible:a,uri:o})=>{const l=(0,X.C)(o),s=n().userToplistURI(l,"tracks").toURI(),u=(0,r.useMemo)((()=>a?e.slice(0,a):e),[a,e]),{usePlayContextItem:d}=(0,at.n)({uri:s,pages:[{items:e.map((e=>({type:rt.p.TRACK,uri:e.uri,uid:null,provider:null})))}]},{featureIdentifier:"profile",referrerIdentifier:"user_profile"}),m=(0,r.useCallback)(((e,t)=>{var a;const r=(0,Ze.X)(null==e||null===(a=e.album)||void 0===a?void 0:a.images,{desiredSize:40});return i().createElement($e.SS,{key:t+e.uri,index:t,uri:(0,et.$V)(e),duration_ms:e.duration_ms,name:e.name,artists:e.artists,album:e.album,isPlayable:!0,isExplicit:!!e.explicit,isMOGEFRestricted:!!e.mogef19,imgUrl:(null==r?void 0:r.url)||"",contextUri:s,usePlayContextItem:d})}),[s,d]),g=(0,r.useMemo)((()=>[qe.QD.INDEX,qe.QD.TITLE,qe.QD.ALBUM,qe.QD.DURATION]),[]),p=(0,r.useCallback)((e=>e.uri),[]);return i().createElement(tt.ZP,{value:"user-top-tracks-tracklist"},i().createElement(qe.Pv,{ariaLabel:c.ag.get("top_tracks_this_month"),renderRow:m,nrTracks:u.length,tracks:u,resolveUri:p,hasHeaderRow:t,columns:g}))}),((e,t)=>e.tracks===t.tracks)),ot=i().memo((({tracks:e,title:t,tagline:a,seeAllUri:r,className:o,uri:l})=>{if(!e||0===e.length)return null;const n=e.length>4;return i().createElement("section",{className:o},i().createElement(Ye.r,{title:t,tagline:a,seeAllUri:r,hasMoreElements:n}),i().createElement(it,{tracks:e,uri:l,nrTracksVisible:4}))}),((e,t)=>e.tracks===t.tracks));function lt(e,t){switch(t.type){case"OPEN_MODAL":return{isModalOpen:!0,shouldOpenImagePicker:!1};case"OPEN_MODAL_WITH_IMAGEPICKER":return{isModalOpen:!0,shouldOpenImagePicker:!0};case"CLOSE_MODAL":return{isModalOpen:!1,shouldOpenImagePicker:!1};default:return e}}const nt=({uri:e})=>{var t,a;const o=(0,k.v9)(He.Gf),l=(0,k.v9)(He.A$),s=(0,k.I0)(),[u,d]=(0,Qe.H)(e),y=(0,r.useMemo)((()=>(0,Ze.X)(l)),[l]),[{isModalOpen:E,shouldOpenImagePicker:C},A]=function(){const[e,t]=(0,r.useReducer)(lt,{isModalOpen:!1,shouldOpenImagePicker:!1});return[e,t]}(),T=(0,je.o)(),U=!(0,Le.k)(),{data:M,loading:j}=(0,f.J)(h.n5.getProfile,[{uri:e,playlists:10,artists:10}]),L=null==M?void 0:M.body,W=null==L?void 0:L.public_playlists,H=null==L?void 0:L.is_verified,J=(null==L?void 0:L.is_current_user)||!1,F=null==L?void 0:L.recently_played_artists,B=J?(null==y?void 0:y.url)||"":(null==L?void 0:L.image_url)||"",G=(0,X.C)(e),K=(0,k.v9)(We.C7),z=(J?o:null==L?void 0:L.name)||"",Q=(0,ze.Z)((null==L?void 0:L.image_url)||null),{data:Z,loading:V}=(0,f.J)(h.n5.getFollowing,[e]),Y=null==Z||null===(t=Z.body)||void 0===t?void 0:t.profiles,{data:q,loading:$}=(0,f.J)(h.n5.getFollowers,[e]),ee=null==q||null===(a=q.body)||void 0===a?void 0:a.profiles,te=(0,r.useMemo)((()=>(e=>e?h.n5.getUserTopArtists:()=>Promise.resolve({status:200,body:{items:[],offset:0,limit:0,total:0,href:"",next:null,previous:null}}))(J)),[J]),ae=(0,r.useMemo)((()=>(e=>e?h.n5.getUserTopTracks:()=>Promise.resolve({status:200,body:{items:[],offset:0,limit:0,total:0,href:"",next:null,previous:null}}))(J&&!K)),[J,K]),{data:re,loading:ie}=(0,f.J)(te,[]),{data:oe,loading:le}=(0,f.J)(ae,[]),ne=null==re?void 0:re.body,se=null==oe?void 0:oe.body,ue=(0,r.useCallback)((()=>{T({targetUri:e,intent:u?"unfollow":"follow",type:"click"}),d(!u)}),[u,T,d,e]),de=(0,r.useCallback)((e=>{A({type:"CLOSE_MODAL"}),e&&(s((0,Je.dL)(e.name)),s((0,Je.GR)(e.image?[{url:e.image,height:null,width:null}]:[])))}),[s,A]),me=(0,r.useCallback)((()=>A({type:"OPEN_MODAL"})),[A]),ce=(0,r.useCallback)((()=>{A({type:"OPEN_MODAL_WITH_IMAGEPICKER"})}),[A]),ge=(0,r.useMemo)((()=>[{url:B}]),[B]);if(!L||j||V||$||le||ie)return i().createElement(p.h,{hasError:!1,errorMessage:c.ag.get("error.not_found.title.page")});const pe={total:L.followers_count},ve=m()("contentSpacing",b.section,b.shelf);return i().createElement("div",{className:b.user},i().createElement(N.$,null,z),i().createElement(x.gF,{backgroundColor:Q},i().createElement(D.W,null,i().createElement(R.i,{text:z})),i().createElement(Ge._,{menu:i().createElement(w.I,{uri:L.uri})},i().createElement("div",{className:b.imageContainer},i().createElement(_.T,{canEdit:J,name:z,images:ge,onClick:ce,placeholderType:"user",shape:x.Kc.CIRCLE}))),i().createElement(x.sP,null,i().createElement(x.dy,{small:!0,uppercase:!0},H?i().createElement(Xe.S,{text:c.ag.get("card.tag.profile")}):c.ag.get("card.tag.profile")),i().createElement(Ge._,{menu:i().createElement(w.I,{uri:L.uri})},i().createElement(x.xd,{canEdit:J,editTitle:c.ag.get("playlist.edit-details.title"),onClick:me},z)),i().createElement(x.QS,{totalFollowers:pe.total,totalFollowing:null==Y?void 0:Y.length,publicPlaylists:L.total_public_playlists_count,userUri:e}))),i().createElement(Fe.o,{backgroundColor:Q},i().createElement(Fe.F,null,!J&&i().createElement(S.r,null,i().createElement(Ke.e,{isFollowing:Boolean(u),onClick:ue,disabled:U})),i().createElement(Be.y,{menu:i().createElement(w.I,{uri:L.uri,onEditProfileCallback:me})},i().createElement(P.z,{label:c.ag.get("more.label.context",z)})))),i().createElement(v.P,{className:ve,total:(null==ne?void 0:ne.total)||0,title:c.ag.get("top_artists_this_month"),tagline:c.ag.get("only_visible_to_you"),seeAllUri:n().profileURI(G,["top","artists"]).toURI()},null==ne?void 0:ne.items.map(((e,t)=>i().createElement(O.I,{index:t,key:e.uri,uri:e.uri,name:e.name,images:e.images})))),i().createElement(ot,{className:ve,title:c.ag.get("top_tracks_this_month"),tagline:c.ag.get("only_visible_to_you"),seeAllUri:n().profileURI(G,["top","tracks"]).toURI(),uri:e,tracks:null==se?void 0:se.items}),i().createElement(v.P,{className:ve,total:L.total_public_playlists_count,title:c.ag.get("public_playlists"),seeAllUri:n().profileURI(G,["playlists"]).toURI()},null==W?void 0:W.map(((e,t)=>i().createElement(I.Z,{index:t,key:e.uri,uri:e.uri,name:e.name,images:[{url:(0,Ve.p)({imageUriOrUrl:e.image_url}),width:300,height:300}],authorName:e.owner_name,description:e.followers_count?c.ag.get("user.followers",e.followers_count):""})))),null!=F&&F.length?i().createElement(v.P,{className:ve,total:null==F?void 0:F.length,title:c.ag.get("recently_played_artists"),seeAllUri:n().profileURI(G,["recently-played-artists"]).toURI()},null==F?void 0:F.map(((e,t)=>i().createElement(O.I,{index:t,key:e.uri,uri:e.uri,name:e.name,images:[{url:e.image_url}]})))):null,null!=ee&&ee.length?i().createElement(v.P,{className:ve,title:c.ag.get("followers"),total:null==ee?void 0:ee.length,seeAllUri:n().profileURI(G,["followers"]).toURI()},null==ee?void 0:ee.map(((e,t)=>i().createElement(g.P,{key:e.uri,index:t,uri:e.uri,name:e.name,images:[{url:e.image_url}]})))):null,null!=Y&&Y.length?i().createElement(v.P,{className:ve,title:c.ag.get("following"),total:null==Y?void 0:Y.length,seeAllUri:n().profileURI(G,["following"]).toURI()},null==Y?void 0:Y.map(((e,t)=>i().createElement(g.P,{key:e.uri,index:t,uri:e.uri,name:e.name,images:[{url:e.image_url}]})))):null,J&&E?i().createElement(Me,{uri:e,name:z,image:B,onClose:de,shouldOpenImagePicker:C}):null)},st=e=>{const{uri:t}=e,{data:a,loading:r,error:o}=(0,f.J)(h.n5.getPlaylists,[{uri:t}]),l=null==a?void 0:a.body,{public_playlists:n,total_public_playlists_count:s=0}=l||{};return r?i().createElement(p.h,{hasError:null!==o,errorMessage:c.ag.get("error.not_found.title.page")}):i().createElement(v.P,{className:m()("contentSpacing",b.subPage),total:s,title:c.ag.get("public_playlists"),showAll:!0},null==n?void 0:n.map(((e,t)=>i().createElement(I.Z,{index:t,key:e.uri,uri:e.uri,name:e.name,authorName:e.owner_name,description:e.followers_count?c.ag.get("user.followers",e.followers_count):"",images:[{url:(0,Ve.p)({imageUriOrUrl:e.image_url}),width:300,height:300}]}))))},ut=e=>{var t;const{uri:a}=e,{data:r,loading:o,error:l}=(0,f.J)(h.n5.getRecentlyPlayedArtists,[{uri:a,limit:50}]),n=null==r||null===(t=r.body)||void 0===t?void 0:t.artists;return o?i().createElement(p.h,{hasError:null!==l,errorMessage:c.ag.get("error.not_found.title.page")}):i().createElement(v.P,{className:m()("contentSpacing",b.subPage),total:null==n?void 0:n.length,title:c.ag.get("recently_played_artists"),showAll:!0},null==n?void 0:n.map(((e,t)=>i().createElement(O.I,{index:t,key:e.uri,name:e.name,uri:e.uri,images:[{url:e.image_url}]}))))},dt=()=>{const{data:e,loading:t,error:a}=(0,f.J)(h.n5.getUserTopArtists),r=null==e?void 0:e.body;return t?i().createElement(p.h,{hasError:null!==a,errorMessage:c.ag.get("error.not_found.title.page")}):r?i().createElement(v.P,{className:m()("contentSpacing",b.subPage),total:r.items.length,title:c.ag.get("top_artists_this_month"),tagline:c.ag.get("only_visible_to_you"),showAll:!0},r.items.map(((e,t)=>i().createElement(O.I,{key:e.uri,index:t,uri:e.uri,name:e.name,images:e.images})))):null},mt=({uri:e})=>{const{data:t,loading:a,error:r}=(0,f.J)(h.n5.getProfile,[{uri:e}]),o=null==t?void 0:t.body,l=(null==o?void 0:o.is_current_user)||!1;return o&&!a&&l?i().createElement(dt,null):i().createElement(p.h,{hasError:null!==r,errorMessage:c.ag.get("error.not_found.title.page")})},ct=({uri:e})=>{const{data:t,loading:a,error:r}=(0,f.J)(h.n5.getUserTopTracks,[{offset:0,limit:50}]),o=null==t?void 0:t.body;return a?i().createElement(p.h,{hasError:null!==r,errorMessage:c.ag.get("error.not_found.title.page")}):o?i().createElement("div",{className:m()("contentSpacing",b.subPage,b.topTrackSubPage)},i().createElement("div",{className:b.header},i().createElement(C.Dy,{as:"h1",variant:"canon",className:b.title},c.ag.get("top_tracks_this_month")),i().createElement(C.Dy,{as:"p",variant:"mesto"},c.ag.get("only_visible_to_you"))),i().createElement(it,{tracks:o.items,uri:e,hasHeaderRow:!0})):null},gt=({uri:e})=>{const{data:t,loading:a,error:r}=(0,f.J)(h.n5.getProfile,[{uri:e}]),o=null==t?void 0:t.body,l=(null==o?void 0:o.is_current_user)||!1;return o&&!a&&l?i().createElement(ct,{uri:e}):i().createElement(p.h,{hasError:null!==r,errorMessage:c.ag.get("error.not_found.title.page")})},pt=i().memo((()=>{const{userId:e}=(0,o.UO)(),t=decodeURIComponent(e),a=n().profileURI(t).toURI();return i().createElement("section",null,i().createElement(u.No,{exact:!0,path:"/user/:userId/playlists",pageId:s.W.PROFILE_PLAYLISTS},i().createElement(st,{uri:a})),i().createElement(u.No,{exact:!0,path:"/user/:userId/top/tracks",pageId:s.W.PROFILE_TOP_TRACKS},i().createElement(gt,{uri:a})),i().createElement(u.No,{exact:!0,path:"/user/:userId/top/artists",pageId:s.W.PROFILE_TOP_ARTISTS},i().createElement(mt,{uri:a})),i().createElement(u.No,{exact:!0,path:"/user/:userId/recently-played-artists",pageId:s.W.PROFILE_RECENTLY_PLAYED_ARTISTS},i().createElement(ut,{uri:a})),i().createElement(u.No,{exact:!0,path:"/user/:userId/following",pageId:s.W.PROFILE_FOLLOWING},i().createElement(E,{uri:a})),i().createElement(u.No,{exact:!0,path:"/user/:userId/followers",pageId:s.W.PROFILE_FOLLOWERS},i().createElement(y,{uri:a})),i().createElement(u.No,{exact:!0,path:"/user/:userId",pageId:s.W.PROFILE},i().createElement(nt,{uri:a})))})),vt=pt}}]);
//# sourceMappingURL=xpui-routes-profile.js.map