/*! jQuery UI - v1.9.2 - 2012-11-23
* http://jqueryui.com
* Includes: jquery.ui.effect.js
* Copyright 2012 jQuery Foundation and other contributors; Licensed MIT */jQuery.effects||function(e,t){var n=e.uiBackCompat!==!1,r="ui-effects-";e.effects={effect:{}},function(t,n){function r(e,t,n){var r=c[t.type]||{};return e==null?n||!t.def?null:t.def:(e=r.floor?~~e:parseFloat(e),isNaN(e)?t.def:r.mod?(e+r.mod)%r.mod:0>e?0:r.max<e?r.max:e)}function i(e){var n=f(),r=n._rgba=[];return e=e.toLowerCase(),v(a,function(t,i){var s,o=i.re.exec(e),u=o&&i.parse(o),a=i.space||"rgba";if(u)return s=n[a](u),n[l[a].cache]=s[l[a].cache],r=n._rgba=s._rgba,!1}),r.length?(r.join()==="0,0,0,0"&&t.extend(r,d.transparent),n):d[e]}function s(e,t,n){return n=(n+1)%1,n*6<1?e+(t-e)*n*6:n*2<1?t:n*3<2?e+(t-e)*(2/3-n)*6:e}var o="backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor".split(" "),u=/^([\-+])=\s*(\d+\.?\d*)/,a=[{re:/rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d+(?:\.\d+)?)\s*)?\)/,parse:function(e){return[e[1],e[2],e[3],e[4]]}},{re:/rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d+(?:\.\d+)?)\s*)?\)/,parse:function(e){return[e[1]*2.55,e[2]*2.55,e[3]*2.55,e[4]]}},{re:/#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/,parse:function(e){return[parseInt(e[1],16),parseInt(e[2],16),parseInt(e[3],16)]}},{re:/#([a-f0-9])([a-f0-9])([a-f0-9])/,parse:function(e){return[parseInt(e[1]+e[1],16),parseInt(e[2]+e[2],16),parseInt(e[3]+e[3],16)]}},{re:/hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d+(?:\.\d+)?)\s*)?\)/,space:"hsla",parse:function(e){return[e[1],e[2]/100,e[3]/100,e[4]]}}],f=t.Color=function(e,n,r,i){return new t.Color.fn.parse(e,n,r,i)},l={rgba:{props:{red:{idx:0,type:"byte"},green:{idx:1,type:"byte"},blue:{idx:2,type:"byte"}}},hsla:{props:{hue:{idx:0,type:"degrees"},saturation:{idx:1,type:"percent"},lightness:{idx:2,type:"percent"}}}},c={"byte":{floor:!0,max:255},percent:{max:1},degrees:{mod:360,floor:!0}},h=f.support={},p=t("<p>")[0],d,v=t.each;p.style.cssText="background-color:rgba(1,1,1,.5)",h.rgba=p.style.backgroundColor.indexOf("rgba")>-1,v(l,function(e,t){t.cache="_"+e,t.props.alpha={idx:3,type:"percent",def:1}}),f.fn=t.extend(f.prototype,{parse:function(s,o,u,a){if(s===n)return this._rgba=[null,null,null,null],this;if(s.jquery||s.nodeType)s=t(s).css(o),o=n;var c=this,h=t.type(s),p=this._rgba=[];o!==n&&(s=[s,o,u,a],h="array");if(h==="string")return this.parse(i(s)||d._default);if(h==="array")return v(l.rgba.props,function(e,t){p[t.idx]=r(s[t.idx],t)}),this;if(h==="object")return s instanceof f?v(l,function(e,t){s[t.cache]&&(c[t.cache]=s[t.cache].slice())}):v(l,function(t,n){var i=n.cache;v(n.props,function(e,t){if(!c[i]&&n.to){if(e==="alpha"||s[e]==null)return;c[i]=n.to(c._rgba)}c[i][t.idx]=r(s[e],t,!0)}),c[i]&&e.inArray(null,c[i].slice(0,3))<0&&(c[i][3]=1,n.from&&(c._rgba=n.from(c[i])))}),this},is:function(e){var t=f(e),n=!0,r=this;return v(l,function(e,i){var s,o=t[i.cache];return o&&(s=r[i.cache]||i.to&&i.to(r._rgba)||[],v(i.props,function(e,t){if(o[t.idx]!=null)return n=o[t.idx]===s[t.idx],n})),n}),n},_space:function(){var e=[],t=this;return v(l,function(n,r){t[r.cache]&&e.push(n)}),e.pop()},transition:function(e,t){var n=f(e),i=n._space(),s=l[i],o=this.alpha()===0?f("transparent"):this,u=o[s.cache]||s.to(o._rgba),a=u.slice();return n=n[s.cache],v(s.props,function(e,i){var s=i.idx,o=u[s],f=n[s],l=c[i.type]||{};if(f===null)return;o===null?a[s]=f:(l.mod&&(f-o>l.mod/2?o+=l.mod:o-f>l.mod/2&&(o-=l.mod)),a[s]=r((f-o)*t+o,i))}),this[i](a)},blend:function(e){if(this._rgba[3]===1)return this;var n=this._rgba.slice(),r=n.pop(),i=f(e)._rgba;return f(t.map(n,function(e,t){return(1-r)*i[t]+r*e}))},toRgbaString:function(){var e="rgba(",n=t.map(this._rgba,function(e,t){return e==null?t>2?1:0:e});return n[3]===1&&(n.pop(),e="rgb("),e+n.join()+")"},toHslaString:function(){var e="hsla(",n=t.map(this.hsla(),function(e,t){return e==null&&(e=t>2?1:0),t&&t<3&&(e=Math.round(e*100)+"%"),e});return n[3]===1&&(n.pop(),e="hsl("),e+n.join()+")"},toHexString:function(e){var n=this._rgba.slice(),r=n.pop();return e&&n.push(~~(r*255)),"#"+t.map(n,function(e){return e=(e||0).toString(16),e.length===1?"0"+e:e}).join("")},toString:function(){return this._rgba[3]===0?"transparent":this.toRgbaString()}}),f.fn.parse.prototype=f.fn,l.hsla.to=function(e){if(e[0]==null||e[1]==null||e[2]==null)return[null,null,null,e[3]];var t=e[0]/255,n=e[1]/255,r=e[2]/255,i=e[3],s=Math.max(t,n,r),o=Math.min(t,n,r),u=s-o,a=s+o,f=a*.5,l,c;return o===s?l=0:t===s?l=60*(n-r)/u+360:n===s?l=60*(r-t)/u+120:l=60*(t-n)/u+240,f===0||f===1?c=f:f<=.5?c=u/a:c=u/(2-a),[Math.round(l)%360,c,f,i==null?1:i]},l.hsla.from=function(e){if(e[0]==null||e[1]==null||e[2]==null)return[null,null,null,e[3]];var t=e[0]/360,n=e[1],r=e[2],i=e[3],o=r<=.5?r*(1+n):r+n-r*n,u=2*r-o;return[Math.round(s(u,o,t+1/3)*255),Math.round(s(u,o,t)*255),Math.round(s(u,o,t-1/3)*255),i]},v(l,function(e,i){var s=i.props,o=i.cache,a=i.to,l=i.from;f.fn[e]=function(e){a&&!this[o]&&(this[o]=a(this._rgba));if(e===n)return this[o].slice();var i,u=t.type(e),c=u==="array"||u==="object"?e:arguments,h=this[o].slice();return v(s,function(e,t){var n=c[u==="object"?e:t.idx];n==null&&(n=h[t.idx]),h[t.idx]=r(n,t)}),l?(i=f(l(h)),i[o]=h,i):f(h)},v(s,function(n,r){if(f.fn[n])return;f.fn[n]=function(i){var s=t.type(i),o=n==="alpha"?this._hsla?"hsla":"rgba":e,a=this[o](),f=a[r.idx],l;return s==="undefined"?f:(s==="function"&&(i=i.call(this,f),s=t.type(i)),i==null&&r.empty?this:(s==="string"&&(l=u.exec(i),l&&(i=f+parseFloat(l[2])*(l[1]==="+"?1:-1))),a[r.idx]=i,this[o](a)))}})}),v(o,function(e,n){t.cssHooks[n]={set:function(e,r){var s,o,u="";if(t.type(r)!=="string"||(s=i(r))){r=f(s||r);if(!h.rgba&&r._rgba[3]!==1){o=n==="backgroundColor"?e.parentNode:e;while((u===""||u==="transparent")&&o&&o.style)try{u=t.css(o,"backgroundColor"),o=o.parentNode}catch(a){}r=r.blend(u&&u!=="transparent"?u:"_default")}r=r.toRgbaString()}try{e.style[n]=r}catch(l){}}},t.fx.step[n]=function(e){e.colorInit||(e.start=f(e.elem,n),e.end=f(e.end),e.colorInit=!0),t.cssHooks[n].set(e.elem,e.start.transition(e.end,e.pos))}}),t.cssHooks.borderColor={expand:function(e){var t={};return v(["Top","Right","Bottom","Left"],function(n,r){t["border"+r+"Color"]=e}),t}},d=t.Color.names={aqua:"#00ffff",black:"#000000",blue:"#0000ff",fuchsia:"#ff00ff",gray:"#808080",green:"#008000",lime:"#00ff00",maroon:"#800000",navy:"#000080",olive:"#808000",purple:"#800080",red:"#ff0000",silver:"#c0c0c0",teal:"#008080",white:"#ffffff",yellow:"#ffff00",transparent:[null,null,null,0],_default:"#ffffff"}}(jQuery),function(){function n(){var t=this.ownerDocument.defaultView?this.ownerDocument.defaultView.getComputedStyle(this,null):this.currentStyle,n={},r,i;if(t&&t.length&&t[0]&&t[t[0]]){i=t.length;while(i--)r=t[i],typeof t[r]=="string"&&(n[e.camelCase(r)]=t[r])}else for(r in t)typeof t[r]=="string"&&(n[r]=t[r]);return n}function r(t,n){var r={},i,o;for(i in n)o=n[i],t[i]!==o&&!s[i]&&(e.fx.step[i]||!isNaN(parseFloat(o)))&&(r[i]=o);return r}var i=["add","remove","toggle"],s={border:1,borderBottom:1,borderColor:1,borderLeft:1,borderRight:1,borderTop:1,borderWidth:1,margin:1,padding:1};e.each(["borderLeftStyle","borderRightStyle","borderBottomStyle","borderTopStyle"],function(t,n){e.fx.step[n]=function(e){if(e.end!=="none"&&!e.setAttr||e.pos===1&&!e.setAttr)jQuery.style(e.elem,n,e.end),e.setAttr=!0}}),e.effects.animateClass=function(t,s,o,u){var a=e.speed(s,o,u);return this.queue(function(){var s=e(this),o=s.attr("class")||"",u,f=a.children?s.find("*").andSelf():s;f=f.map(function(){var t=e(this);return{el:t,start:n.call(this)}}),u=function(){e.each(i,function(e,n){t[n]&&s[n+"Class"](t[n])})},u(),f=f.map(function(){return this.end=n.call(this.el[0]),this.diff=r(this.start,this.end),this}),s.attr("class",o),f=f.map(function(){var t=this,n=e.Deferred(),r=jQuery.extend({},a,{queue:!1,complete:function(){n.resolve(t)}});return this.el.animate(this.diff,r),n.promise()}),e.when.apply(e,f.get()).done(function(){u(),e.each(arguments,function(){var t=this.el;e.each(this.diff,function(e){t.css(e,"")})}),a.complete.call(s[0])})})},e.fn.extend({_addClass:e.fn.addClass,addClass:function(t,n,r,i){return n?e.effects.animateClass.call(this,{add:t},n,r,i):this._addClass(t)},_removeClass:e.fn.removeClass,removeClass:function(t,n,r,i){return n?e.effects.animateClass.call(this,{remove:t},n,r,i):this._removeClass(t)},_toggleClass:e.fn.toggleClass,toggleClass:function(n,r,i,s,o){return typeof r=="boolean"||r===t?i?e.effects.animateClass.call(this,r?{add:n}:{remove:n},i,s,o):this._toggleClass(n,r):e.effects.animateClass.call(this,{toggle:n},r,i,s)},switchClass:function(t,n,r,i,s){return e.effects.animateClass.call(this,{add:n,remove:t},r,i,s)}})}(),function(){function i(t,n,r,i){e.isPlainObject(t)&&(n=t,t=t.effect),t={effect:t},n==null&&(n={}),e.isFunction(n)&&(i=n,r=null,n={});if(typeof n=="number"||e.fx.speeds[n])i=r,r=n,n={};return e.isFunction(r)&&(i=r,r=null),n&&e.extend(t,n),r=r||n.duration,t.duration=e.fx.off?0:typeof r=="number"?r:r in e.fx.speeds?e.fx.speeds[r]:e.fx.speeds._default,t.complete=i||n.complete,t}function s(t){return!t||typeof t=="number"||e.fx.speeds[t]?!0:typeof t=="string"&&!e.effects.effect[t]?n&&e.effects[t]?!1:!0:!1}e.extend(e.effects,{version:"1.9.2",save:function(e,t){for(var n=0;n<t.length;n++)t[n]!==null&&e.data(r+t[n],e[0].style[t[n]])},restore:function(e,n){var i,s;for(s=0;s<n.length;s++)n[s]!==null&&(i=e.data(r+n[s]),i===t&&(i=""),e.css(n[s],i))},setMode:function(e,t){return t==="toggle"&&(t=e.is(":hidden")?"show":"hide"),t},getBaseline:function(e,t){var n,r;switch(e[0]){case"top":n=0;break;case"middle":n=.5;break;case"bottom":n=1;break;default:n=e[0]/t.height}switch(e[1]){case"left":r=0;break;case"center":r=.5;break;case"right":r=1;break;default:r=e[1]/t.width}return{x:r,y:n}},createWrapper:function(t){if(t.parent().is(".ui-effects-wrapper"))return t.parent();var n={width:t.outerWidth(!0),height:t.outerHeight(!0),"float":t.css("float")},r=e("<div></div>").addClass("ui-effects-wrapper").css({fontSize:"100%",background:"transparent",border:"none",margin:0,padding:0}),i={width:t.width(),height:t.height()},s=document.activeElement;try{s.id}catch(o){s=document.body}return t.wrap(r),(t[0]===s||e.contains(t[0],s))&&e(s).focus(),r=t.parent(),t.css("position")==="static"?(r.css({position:"relative"}),t.css({position:"relative"})):(e.extend(n,{position:t.css("position"),zIndex:t.css("z-index")}),e.each(["top","left","bottom","right"],function(e,r){n[r]=t.css(r),isNaN(parseInt(n[r],10))&&(n[r]="auto")}),t.css({position:"relative",top:0,left:0,right:"auto",bottom:"auto"})),t.css(i),r.css(n).show()},removeWrapper:function(t){var n=document.activeElement;return t.parent().is(".ui-effects-wrapper")&&(t.parent().replaceWith(t),(t[0]===n||e.contains(t[0],n))&&e(n).focus()),t},setTransition:function(t,n,r,i){return i=i||{},e.each(n,function(e,n){var s=t.cssUnit(n);s[0]>0&&(i[n]=s[0]*r+s[1])}),i}}),e.fn.extend({effect:function(){function t(t){function n(){e.isFunction(s)&&s.call(i[0]),e.isFunction(t)&&t()}var i=e(this),s=r.complete,o=r.mode;(i.is(":hidden")?o==="hide":o==="show")?n():u.call(i[0],r,n)}var r=i.apply(this,arguments),s=r.mode,o=r.queue,u=e.effects.effect[r.effect],a=!u&&n&&e.effects[r.effect];return e.fx.off||!u&&!a?s?this[s](r.duration,r.complete):this.each(function(){r.complete&&r.complete.call(this)}):u?o===!1?this.each(t):this.queue(o||"fx",t):a.call(this,{options:r,duration:r.duration,callback:r.complete,mode:r.mode})},_show:e.fn.show,show:function(e){if(s(e))return this._show.apply(this,arguments);var t=i.apply(this,arguments);return t.mode="show",this.effect.call(this,t)},_hide:e.fn.hide,hide:function(e){if(s(e))return this._hide.apply(this,arguments);var t=i.apply(this,arguments);return t.mode="hide",this.effect.call(this,t)},__toggle:e.fn.toggle,toggle:function(t){if(s(t)||typeof t=="boolean"||e.isFunction(t))return this.__toggle.apply(this,arguments);var n=i.apply(this,arguments);return n.mode="toggle",this.effect.call(this,n)},cssUnit:function(t){var n=this.css(t),r=[];return e.each(["em","px","%","pt"],function(e,t){n.indexOf(t)>0&&(r=[parseFloat(n),t])}),r}})}(),function(){var t={};e.each(["Quad","Cubic","Quart","Quint","Expo"],function(e,n){t[n]=function(t){return Math.pow(t,e+2)}}),e.extend(t,{Sine:function(e){return 1-Math.cos(e*Math.PI/2)},Circ:function(e){return 1-Math.sqrt(1-e*e)},Elastic:function(e){return e===0||e===1?e:-Math.pow(2,8*(e-1))*Math.sin(((e-1)*80-7.5)*Math.PI/15)},Back:function(e){return e*e*(3*e-2)},Bounce:function(e){var t,n=4;while(e<((t=Math.pow(2,--n))-1)/11);return 1/Math.pow(4,3-n)-7.5625*Math.pow((t*3-2)/22-e,2)}}),e.each(t,function(t,n){e.easing["easeIn"+t]=n,e.easing["easeOut"+t]=function(e){return 1-n(1-e)},e.easing["easeInOut"+t]=function(e){return e<.5?n(e*2)/2:1-n(e*-2+2)/2}})}()}(jQuery);