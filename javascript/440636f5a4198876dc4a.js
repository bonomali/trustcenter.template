webpackJsonp([5],{33:function(e,t,n){var r;(function(o){r=function(){"use strict";var t={"comment-init":o.Deferred(),"sidenote-init":o.Deferred()};e.exports.attach=function(e,n,r){var o=t[e];o&&o.promise().then(n,r)},e.exports.getPromise=function(e){var n=t[e];return n?n.promise():null},e.exports.resolve=function(e,n){var r=t[e];r&&r.resolve(n)},e.exports.reject=function(e,n){var r=t[e];r&&r.reject(n)}}.call(t,n,t,e),!(void 0!==r&&(e.exports=r))}).call(t,n(1))},34:function(e,t,n){(function(e){window.Experiment=new function(){var t=function(){return this}.call(null),n=this,r=function(){var r=t.NinjaMode?e.Deferred().resolve({}):e.ajax({url:"/_chrome/experiment.json"});return r.then(function(e){n.m_objConfiguration=e},function(){n.m_objConfiguration=null}),r}();n.GenerateGuid=function(){var e=(new Date).getTime(),t="xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(t){var n=(e+16*Math.random())%16|0;return e=Math.floor(e/16),("x"==t?n:3&n|8).toString(16)});return t.toUpperCase()},n.GetCookie=function(e){for(var n=t.document.cookie?t.document.cookie.split("; "):[],r=0;r<n.length;r++){var o=n[r].indexOf("=");if(e===t.decodeURIComponent(n[r].slice(0,o))){var i=n[r].slice(o+1).replace(/\+/g," ");return i=t.decodeURIComponent(i)}}},n.GetHashCode=function(e){var t=0;if(e)for(var n=0;n<e.length;n++){var r=e.charCodeAt(n);t=(t<<5)-t+r,t&=t}return t},n.GetConfigurationAsync=function(){return n.m_objConfiguration?e.Deferred().resolve(n.m_objConfiguration):r},n.GetCustomSettings=function(){var e=n.GetCookie("EXP");return e=e&&n.JsonDeserialize(e)},n.IsEnabled=function(e,r){try{var o=n.GetCustomSettings();if(o&&o.hasOwnProperty(e))return Boolean(o[e]);if(!r)return!1;var i=r[e];if(i){if(i.hasOwnProperty("enabled")&&!i.enabled)return!1;var s=i.ratio;if(0>=s)return!1;if(s>=100)return!0;var c=n.GetCookie("SID");if(!c)return!1;var a=n.GetHashCode(c+":"+e);return-2147483648===a&&(a=0),0>a&&(a=-a),a<t.Math.floor(21474836.47)*s}}catch(l){}return!1},n.IsEnabledAsync=function(t){return n.GetConfigurationAsync().then(function(r){return e.Deferred().resolve(n.IsEnabled(t,r))},function(){return e.Deferred().resolve(n.IsEnabled(t))})},n.JsonDeserialize=function(e){return t.JSON&&t.JSON.parse?t.JSON.parse(e):new Function("return ("+e+")")()},n.SetCookie=function(e,n,r){var o=t.encodeURIComponent(e)+"="+t.encodeURIComponent(n);if(r=r||{},"number"==typeof r.expires||r.expires instanceof Number){var i=3600*r.expires*1e3;r.expires=new Date,r.expires.setTime(Number(r.expires)+i)}return r.expires&&(o+="; expires="+r.expires.toUTCString()),r.path&&(o+="; path="+r.path),r.domain&&(o+="; domain="+r.domain),r.secure&&(o+="; secure"),t.document.cookie=o},n.GetCookie("SID")||n.SetCookie("SID",n.GenerateGuid(),{expires:24,path:"/"});try{t.AmbientContext=n.GetCookie("AmbientContext"),t.AmbientContext=t.AmbientContext&&n.JsonDeserialize(t.AmbientContext)}catch(o){}finally{t.AmbientContext=t.AmbientContext||{},t.AmbientContext.EXP=n.GetCustomSettings(),t.AmbientContext.SID=n.GetCookie("SID")}}}).call(t,n(1))},35:function(e,t,n){(function(e){!function(){"use strict";var t=n(3),r=n(28);if(window.insight)return void t.traceError("insight.js is loaded more than once.");var o={};o.debugConsoleLogEnabled=!1,o.debugLogMsgs=[],o.debugLog=function(e){o.debugLogMsgs.push(e),o.debugConsoleLogEnabled&&console.log(e)},o.getMetaTagContent=function(n){try{var r=e("meta[name='"+n+"']");return r=r&&r.length>0?r[r.length-1].content:null}catch(o){return t.traceError("getMetaTagContent failed.",o),null}},o.setMetaTagContent=function(n,r){if(!r)return void t.traceError("FALSE inMTContent found.");if(null===o.getMetaTagContent(n)){var i=document.createElement("meta");i.name=n,i.content=r,document.getElementsByTagName("head")[0].appendChild(i)}else e("meta[name='"+n+"']").attr("content",r)},o.processWEDCSCustomEventFromArray=function(e){return"function"==typeof window.MscomCustomEvent?e&&0!==e.length?void window.MscomCustomEvent.apply(this,e):void window.MscomCustomEvent():void 0};var i=function(e){var t=[];return e?(e.error&&(e.isBubbled?e.error.data&&t.push("ms.error",JSON.stringify(e.error.data).substring(0,100)):t.push("ms.error",e.error.toString().substring(0,100))),e.message&&t.push("ms.errormsg",e.message.substring(0,30)),e.source&&t.push("ms.errorsrc",e.source),e.lineno&&t.push("ms.errorlineno",e.lineno),e.colno&&t.push("ms.errorcolno",e.colno),t):t},s=function(e){try{var t=i(e);t.length>0&&o.processWEDCSCustomEventFromArray(t)}catch(n){window.console&&console.error(n.toString())}};o.subscribeErrors=function(){var e=n(4);e.subscribe(s)};var c=function(e){e.on("commentPosted",function(e){if(e&&e.id){var t=[];t.push("ms.commentid",JSON.stringify(e.id)),t.push("ms.commentdt",(new Date).getTime()),t.push("ms.commentet","commentPosted"),o.processWEDCSCustomEventFromArray(t)}})},a=function(e){t.traceError("comment loading failure",e);var n=[];n.push("ms.commenter",JSON.stringify(e)),n.push("ms.commentet","commentLoad"),o.processWEDCSCustomEventFromArray(n)},l=function(e){e.on("sidenotes.commentPosted",function(e){if(e&&e.id){var t=[];t.push("ms.commentid",JSON.stringify(e.id)),t.push("ms.commentdt",(new Date).getTime()),t.push("ms.commentet","sidenotePosted"),o.processWEDCSCustomEventFromArray(t)}})},u=function(e){t.traceError("sidenote loading failure",e);var n=[];n.push("ms.commenter",JSON.stringify(e)),n.push("ms.commentet","sidenoteLoad"),o.processWEDCSCustomEventFromArray(n)};o.setupLiveFyreTracking=function(){var e=n(33),r=e.getPromise("comment-init");r?r.then(c,a):t.traceError("Failed to get comment promise from commenting-callback");var o=e.getPromise("sidenote-init");o?o.then(l,u):t.traceError("Failed to get sidenote promise from commenting-callback")},o.firePageFocusEvent=function(e){o.debugLog("stepped inside firePageFocusEvent function");var t=[];t.push("ms.focuseventtime",(new Date).getTime()),t.push("ms.focusorblue",e),o.processWEDCSCustomEventFromArray(t)},o.setupPageFocusTracking=function(){e(window).on("blur focus",function(t){var n=e(this).data("prevType");if(n!==t.type)switch(t.type){case"blur":o.debugLog("Blured"),o.firePageFocusEvent("Blured");break;case"focus":o.debugLog("Focused"),o.firePageFocusEvent("Focused")}e(this).data("prevType",t.type)})},o.fireCopyEvent=function(e,t){o.debugLog("stepped inside fireCopyEvent function");var n=[];n.push("ms.copyeventtime",(new Date).getTime()),n.push("ms.copycontent",e),n.push("ms.copycontentlength",t),o.processWEDCSCustomEventFromArray(n)},o.setupCopyTracking=function(){e(window).bind("copy",function(e){var t=window.getSelection().toString(),n=t.length;t=t.substring(0,20),o.fireCopyEvent(t,n)})},o.fireSwitcherEvent=function(e,t){o.debugLog("stepped inside fireSwitcherEvent function");var n=[];n.push("ms.switcheventtime",(new Date).getTime()),n.push("ms.switcher",e),n.push("ms.switchervalue",t),o.processWEDCSCustomEventFromArray(n)},o.setupSwitcherTracking=function(){e(".menu-theme select").change(function(){var t=e(".menu-theme select").val();o.fireSwitcherEvent("theme",t)}),e(".menu-platform select").change(function(){var t=e(".menu-platform select").val();o.fireSwitcherEvent("platform",t)}),e(".menu-lang select").change(function(){var t=e(".menu-lang select").val();o.fireSwitcherEvent("lang",t)})},o.scrollArea=function(e){this.name=e,this.scrollNA=!1,this.scrollQuarter=!1,this.scrollHalf=!1,this.scrollThreeQuarter=!1,this.scrollBot=!1},o.currScrollArea=null,o.scrollAreaList=[],o.setCurrScrollArea=function(e){"number"==typeof e&&(o.scrollAreaList.length<=e||(o.currScrollArea=o.scrollAreaList[e]))},o.scrollBottomElement=null,o.scrollPageHeight=-1,o.viewportBottom=-1,o.refreshScrollPageDimVars=function(){var e=0;o.scrollBottomElement&&(e=o.scrollBottomElement.getBoundingClientRect().top+window.pageYOffset),0>=e&&(e=document.body.getBoundingClientRect().height),o.scrollPageHeight=e,o.viewportBottom=window.pageYOffset+window.innerHeight},o.suppressMobileEvents=!1,o.fireScrollEvent=function(e){o.fireScrollEvent(e,"scroll")},o.fireScrollStopEvent=function(e){o.fireScrollEvent(e,"scroll-stop")},o.fireScrollEvent=function(e,t){o.debugLog("stepped inside fireScrollEvent function");var n=[];n.push("ms.pgarea","body"),n.push("ms.scnum","scroll-"+e),n.push("ms.interactiontype","4"),n.push("ms.scn",t),o.processWEDCSCustomEventFromArray(n)},o.processScroll=function(e){if(window.clearTimeout(o.scrollResizeTimer),null!==o.currScrollArea&&(o.refreshScrollPageDimVars(),!(o.scrollPageHeight<=0||o.suppressMobileEvents&&window.innerWidth<=510))){var t=o.viewportBottom/o.scrollPageHeight;if(e===!0)return void o.fireScrollStopEvent(Math.round(100*t)+"%");if(window.innerHeight>.9*o.scrollPageHeight)return void(o.currScrollArea.scrollNA||(o.currScrollArea.scrollNA=!0,o.fireScrollEvent("na")));t>.25&&!o.currScrollArea.scrollQuarter&&(o.currScrollArea.scrollQuarter=!0,o.fireScrollEvent("25%")),t>.5&&!o.currScrollArea.scrollHalf&&(o.currScrollArea.scrollHalf=!0,o.fireScrollEvent("50%")),t>.75&&!o.currScrollArea.scrollThreeQuarter&&(o.currScrollArea.scrollThreeQuarter=!0,o.fireScrollEvent("75%")),t>.99&&!o.currScrollArea.scrollBot&&(o.currScrollArea.scrollBot=!0,o.fireScrollEvent("100%"))}},o.scrollTimer=null,o.scrollResizeTimer=0,o.setupScrollTracking=function(){o.scrollBottomElement=e("#footer")[0],o.scrollAreaList.push(new o.scrollArea("body")),o.setCurrScrollArea(0),window.addEventListener("scroll",function(){o.processScroll(!1)}),null!==o.scrollTimer&&window.clearTimeout(o.scrollTimer),o.scrollTimer=window.setTimeout(function(){o.processScroll(!0)},1e4),e(window).resize(function(){window.clearTimeout(o.scrollResizeTimer),o.scrollResizeTimer=window.setTimeout(function(){o.processScroll(!1)},500)})},o.extractMetaFromAmbientContext=function(){if(window.AmbientContext)for(var t in window.AmbientContext)if(window.AmbientContext.hasOwnProperty(t)){var n=window.AmbientContext[t];n&&("string"==typeof n||n instanceof String||(n=JSON.stringify(n))),e("head").append("<meta name='ms."+encodeURI(t.replace(".","_"))+"' content='"+encodeURI(n)+"' />")}},o.setupPerfTiming=function(){if(window.performance&&window.performance.timing){var t=window.performance.timing.navigationStart;if("number"==typeof t){for(var n=["redirectStart","redirectEnd","fetchStart","connectStart","connectEnd","requestStart","responseStart","responseEnd","domLoading","domInteractive","domContentLoadedEventStart","domContentLoadedEventEnd","domComplete","loadEventStart","loadEventEnd"],r=[],o=0;o<n.length;o++){var i=n[o];if("number"!=typeof window.performance.timing[i])r.push("");else{var s=0!==window.performance.timing[i]?window.performance.timing[i]-t:"";r.push(s)}}e("head").append("<meta name='ms.perf.timing' content='"+r.join()+"' />")}}};var m={author:"ms.author",contentlang:"ms.contentlang",depot_name:"ms.depotname",document_id:"ms.documentid",experiment_id:"ms.experimentid",gitcommit:"ms.gitcommit",original_content_git_url:"ms.giturl",pagetype:"ms.opspagetype",site_name:"ms.sitename",updated_at:"ms.publishtime"};o.setupBiTags=function(){for(var e in m){var t=o.getMetaTagContent(e);null!==t&&null===o.getMetaTagContent(m[e])&&o.setMetaTagContent(m[e],t)}var r=n(7),i=r.getLanguageFromUrl();if(o.setMetaTagContent("ms.locale",encodeURI(i)),i){var s=i.split("-");null===o.getMetaTagContent("ms.lang")&&o.setMetaTagContent("ms.lang",encodeURI(s[0])),null===o.getMetaTagContent("ms.loc")&&o.setMetaTagContent("ms.loc",s.length>1?encodeURI(s[1]):"")}null!==o.getMetaTagContent("gitcommit")&&null===o.getMetaTagContent("ms.contentsource")&&o.setMetaTagContent("ms.contentsource","OP")},o.isGlobalMetadataEnabled=function(e){return null!==o.getMetaTagContent(e)},o.listMSMetadata=function(){for(var t=[],n=e("meta[name^='ms.']"),r=0;r<n.length;r++)t.push(n[r].name);return t.join(", ")},o.enableWEDCS=function(){window.varClickTracking=1,window.varCustomerTracking=0,window.varAutoFirePV=1,window.route="",window.ctrl="",!function(){var e=[n(14)];(function(e){r.loadLibrary(e.paths.wedcs)}).apply(null,e)}()},e(document).ready(function(){try{o.subscribeErrors(),o.extractMetaFromAmbientContext(),o.setupPerfTiming(),o.setupBiTags(),o.enableWEDCS(),o.setupPageFocusTracking(),o.setupScrollTracking(),o.setupCopyTracking(),o.setupSwitcherTracking(),o.setupLiveFyreTracking()}catch(e){t.traceError(e.toString())}}),window.insight=o}()}).call(t,n(1))},36:function(e,t,n){var r;r=function(){"use strict";var e="devint";"docs.microsoft.com"===location.hostname&&(e="prod"),window.openFeedbackOptions={environment:e,containerElementId:"openFeedbackContainer",siteNameMetaName:"ms.sitename",documentMetaName:"ms.assetid",localeMetaName:"ms.locale"}}.call(t,n,t,e),!(void 0!==r&&(e.exports=r))},38:function(e,t,n){e.exports=function(){return new Worker(n.p+"79a3189c84d26b9327a8.worker.js")}}});
//# sourceMappingURL=440636f5a4198876dc4a.js.map