var t,e,n,r,o,i,_={},l=[],u=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function a(t,e){for(var n in e)t[n]=e[n];return t}function c(t){var e=t.parentNode;e&&e.removeChild(t)}function p(e,n,r){var o,i,_,l={};for(_ in n)"key"==_?o=n[_]:"ref"==_?i=n[_]:l[_]=n[_];if(arguments.length>2&&(l.children=arguments.length>3?t.call(arguments,2):r),"function"==typeof e&&null!=e.defaultProps)for(_ in e.defaultProps)void 0===l[_]&&(l[_]=e.defaultProps[_]);return s(e,l,o,i,null)}function s(t,r,o,i,_){var l={type:t,props:r,key:o,ref:i,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:null==_?++n:_};return null!=e.vnode&&e.vnode(l),l}function f(t){return t.children}function h(t,e){this.props=t,this.context=e}function d(t,e){if(null==e)return t.__?d(t.__,t.__.__k.indexOf(t)+1):null;for(var n;e<t.__k.length;e++)if(null!=(n=t.__k[e])&&null!=n.__e)return n.__e;return"function"==typeof t.type?d(t):null}function v(t){var e,n;if(null!=(t=t.__)&&null!=t.__c){for(t.__e=t.__c.base=null,e=0;e<t.__k.length;e++)if(null!=(n=t.__k[e])&&null!=n.__e){t.__e=t.__c.base=n.__e;break}return v(t)}}function m(t){(!t.__d&&(t.__d=!0)&&r.push(t)&&!y.__r++||i!==e.debounceRendering)&&((i=e.debounceRendering)||o)(y)}function y(){for(var t;y.__r=r.length;)t=r.sort((function(t,e){return t.__v.__b-e.__v.__b})),r=[],t.some((function(t){var e,n,r,o,i,_;t.__d&&(i=(o=(e=t).__v).__e,(_=e.__P)&&(n=[],(r=a({},o)).__v=o.__v+1,U(_,o,r,e.__n,void 0!==_.ownerSVGElement,null!=o.__h?[i]:null,n,null==i?d(o):i,o.__h),P(n,o),o.__e!=i&&v(o)))}))}function g(t,e,n,r,o,i,u,a,c,p){var h,v,m,y,g,b,w,x=r&&r.__k||l,E=x.length;for(n.__k=[],h=0;h<e.length;h++)if(null!=(y=n.__k[h]=null==(y=e[h])||"boolean"==typeof y?null:"string"==typeof y||"number"==typeof y||"bigint"==typeof y?s(null,y,null,null,y):Array.isArray(y)?s(f,{children:y},null,null,null):y.__b>0?s(y.type,y.props,y.key,null,y.__v):y)){if(y.__=n,y.__b=n.__b+1,null===(m=x[h])||m&&y.key==m.key&&y.type===m.type)x[h]=void 0;else for(v=0;v<E;v++){if((m=x[v])&&y.key==m.key&&y.type===m.type){x[v]=void 0;break}m=null}U(t,y,m=m||_,o,i,u,a,c,p),g=y.__e,(v=y.ref)&&m.ref!=v&&(w||(w=[]),m.ref&&w.push(m.ref,null,y),w.push(v,y.__c||g,y)),null!=g?(null==b&&(b=g),"function"==typeof y.type&&null!=y.__k&&y.__k===m.__k?y.__d=c=k(y,c,t):c=C(t,y,m,x,g,c),p||"option"!==n.type?"function"==typeof n.type&&(n.__d=c):t.value=""):c&&m.__e==c&&c.parentNode!=t&&(c=d(m))}for(n.__e=b,h=E;h--;)null!=x[h]&&("function"==typeof n.type&&null!=x[h].__e&&x[h].__e==n.__d&&(n.__d=d(r,h+1)),T(x[h],x[h]));if(w)for(h=0;h<w.length;h++)S(w[h],w[++h],w[++h])}function k(t,e,n){var r,o;for(r=0;r<t.__k.length;r++)(o=t.__k[r])&&(o.__=t,e="function"==typeof o.type?k(o,e,n):C(n,o,o,t.__k,o.__e,e));return e}function b(t,e){return e=e||[],null==t||"boolean"==typeof t||(Array.isArray(t)?t.some((function(t){b(t,e)})):e.push(t)),e}function C(t,e,n,r,o,i){var _,l,u;if(void 0!==e.__d)_=e.__d,e.__d=void 0;else if(null==n||o!=i||null==o.parentNode)t:if(null==i||i.parentNode!==t)t.appendChild(o),_=null;else{for(l=i,u=0;(l=l.nextSibling)&&u<r.length;u+=2)if(l==o)break t;t.insertBefore(o,i),_=i}return void 0!==_?_:o.nextSibling}function w(t,e,n){"-"===e[0]?t.setProperty(e,n):t[e]=null==n?"":"number"!=typeof n||u.test(e)?n:n+"px"}function x(t,e,n,r,o){var i;t:if("style"===e)if("string"==typeof n)t.style.cssText=n;else{if("string"==typeof r&&(t.style.cssText=r=""),r)for(e in r)n&&e in n||w(t.style,e,"");if(n)for(e in n)r&&n[e]===r[e]||w(t.style,e,n[e])}else if("o"===e[0]&&"n"===e[1])i=e!==(e=e.replace(/Capture$/,"")),e=e.toLowerCase()in t?e.toLowerCase().slice(2):e.slice(2),t.l||(t.l={}),t.l[e+i]=n,n?r||t.addEventListener(e,i?A:E,i):t.removeEventListener(e,i?A:E,i);else if("dangerouslySetInnerHTML"!==e){if(o)e=e.replace(/xlink[H:h]/,"h").replace(/sName$/,"s");else if("href"!==e&&"list"!==e&&"form"!==e&&"tabIndex"!==e&&"download"!==e&&e in t)try{t[e]=null==n?"":n;break t}catch(_){}"function"==typeof n||(null!=n&&(!1!==n||"a"===e[0]&&"r"===e[1])?t.setAttribute(e,n):t.removeAttribute(e))}}function E(t){this.l[t.type+!1](e.event?e.event(t):t)}function A(t){this.l[t.type+!0](e.event?e.event(t):t)}function U(n,r,o,i,l,u,p,s,v){var m,y,k,b,C,w,E,A,U,P,S,T=r.type;if(void 0!==r.constructor)return null;null!=o.__h&&(v=o.__h,s=r.__e=o.__e,r.__h=null,u=[s]),(m=e.__b)&&m(r);try{t:if("function"==typeof T){if(A=r.props,U=(m=T.contextType)&&i[m.__c],P=m?U?U.props.value:m.__:i,o.__c?E=(y=r.__c=o.__c).__=y.__E:("prototype"in T&&T.prototype.render?r.__c=y=new T(A,P):(r.__c=y=new h(A,P),y.constructor=T,y.render=H),U&&U.sub(y),y.props=A,y.state||(y.state={}),y.context=P,y.__n=i,k=y.__d=!0,y.__h=[]),null==y.__s&&(y.__s=y.state),null!=T.getDerivedStateFromProps&&(y.__s==y.state&&(y.__s=a({},y.__s)),a(y.__s,T.getDerivedStateFromProps(A,y.__s))),b=y.props,C=y.state,k)null==T.getDerivedStateFromProps&&null!=y.componentWillMount&&y.componentWillMount(),null!=y.componentDidMount&&y.__h.push(y.componentDidMount);else{if(null==T.getDerivedStateFromProps&&A!==b&&null!=y.componentWillReceiveProps&&y.componentWillReceiveProps(A,P),!y.__e&&null!=y.shouldComponentUpdate&&!1===y.shouldComponentUpdate(A,y.__s,P)||r.__v===o.__v){y.props=A,y.state=y.__s,r.__v!==o.__v&&(y.__d=!1),y.__v=r,r.__e=o.__e,r.__k=o.__k,r.__k.forEach((function(t){t&&(t.__=r)})),y.__h.length&&p.push(y);break t}null!=y.componentWillUpdate&&y.componentWillUpdate(A,y.__s,P),null!=y.componentDidUpdate&&y.__h.push((function(){y.componentDidUpdate(b,C,w)}))}y.context=P,y.props=A,y.state=y.__s,(m=e.__r)&&m(r),y.__d=!1,y.__v=r,y.__P=n,m=y.render(y.props,y.state,y.context),y.state=y.__s,null!=y.getChildContext&&(i=a(a({},i),y.getChildContext())),k||null==y.getSnapshotBeforeUpdate||(w=y.getSnapshotBeforeUpdate(b,C)),S=null!=m&&m.type===f&&null==m.key?m.props.children:m,g(n,Array.isArray(S)?S:[S],r,o,i,l,u,p,s,v),y.base=r.__e,r.__h=null,y.__h.length&&p.push(y),E&&(y.__E=y.__=null),y.__e=!1}else null==u&&r.__v===o.__v?(r.__k=o.__k,r.__e=o.__e):r.__e=function(e,n,r,o,i,l,u,a){var p,s,f,h=r.props,v=n.props,m=n.type,y=0;if("svg"===m&&(i=!0),null!=l)for(;y<l.length;y++)if((p=l[y])&&(p===e||(m?p.localName==m:3==p.nodeType))){e=p,l[y]=null;break}if(null==e){if(null===m)return document.createTextNode(v);e=i?document.createElementNS("http://www.w3.org/2000/svg",m):document.createElement(m,v.is&&v),l=null,a=!1}if(null===m)h===v||a&&e.data===v||(e.data=v);else{if(l=l&&t.call(e.childNodes),s=(h=r.props||_).dangerouslySetInnerHTML,f=v.dangerouslySetInnerHTML,!a){if(null!=l)for(h={},y=0;y<e.attributes.length;y++)h[e.attributes[y].name]=e.attributes[y].value;(f||s)&&(f&&(s&&f.__html==s.__html||f.__html===e.innerHTML)||(e.innerHTML=f&&f.__html||""))}if(function(t,e,n,r,o){var i;for(i in n)"children"===i||"key"===i||i in e||x(t,i,null,n[i],r);for(i in e)o&&"function"!=typeof e[i]||"children"===i||"key"===i||"value"===i||"checked"===i||n[i]===e[i]||x(t,i,e[i],n[i],r)}(e,v,h,i,a),f)n.__k=[];else if(y=n.props.children,g(e,Array.isArray(y)?y:[y],n,r,o,i&&"foreignObject"!==m,l,u,l?l[0]:r.__k&&d(r,0),a),null!=l)for(y=l.length;y--;)null!=l[y]&&c(l[y]);a||("value"in v&&void 0!==(y=v.value)&&(y!==e.value||"progress"===m&&!y)&&x(e,"value",y,h.value,!1),"checked"in v&&void 0!==(y=v.checked)&&y!==e.checked&&x(e,"checked",y,h.checked,!1))}return e}(o.__e,r,o,i,l,u,p,v);(m=e.diffed)&&m(r)}catch(L){r.__v=null,(v||null!=u)&&(r.__e=s,r.__h=!!v,u[u.indexOf(s)]=null),e.__e(L,r,o)}}function P(t,n){e.__c&&e.__c(n,t),t.some((function(n){try{t=n.__h,n.__h=[],t.some((function(t){t.call(n)}))}catch(r){e.__e(r,n.__v)}}))}function S(t,n,r){try{"function"==typeof t?t(n):t.current=n}catch(o){e.__e(o,r)}}function T(t,n,r){var o,i;if(e.unmount&&e.unmount(t),(o=t.ref)&&(o.current&&o.current!==t.__e||S(o,null,n)),null!=(o=t.__c)){if(o.componentWillUnmount)try{o.componentWillUnmount()}catch(_){e.__e(_,n)}o.base=o.__P=null}if(o=t.__k)for(i=0;i<o.length;i++)o[i]&&T(o[i],n,"function"!=typeof t.type);r||null==t.__e||c(t.__e),t.__e=t.__d=void 0}function H(t,e,n){return this.constructor(t,n)}function L(n,r,o){var i,l,u;e.__&&e.__(n,r),l=(i="function"==typeof o)?null:o&&o.__k||r.__k,u=[],U(r,n=(!i&&o||r).__k=p(f,null,[n]),l||_,_,void 0!==r.ownerSVGElement,!i&&o?[o]:l?null:r.firstChild?t.call(r.childNodes):null,u,!i&&o?o:l?l.__e:r.firstChild,i),P(u,n)}t=l.slice,e={__e:function(t,e){for(var n,r,o;e=e.__;)if((n=e.__c)&&!n.__)try{if((r=n.constructor)&&null!=r.getDerivedStateFromError&&(n.setState(r.getDerivedStateFromError(t)),o=n.__d),null!=n.componentDidCatch&&(n.componentDidCatch(t),o=n.__d),o)return n.__E=n}catch(i){t=i}throw t}},n=0,h.prototype.setState=function(t,e){var n;n=null!=this.__s&&this.__s!==this.state?this.__s:this.__s=a({},this.state),"function"==typeof t&&(t=t(a({},n),this.props)),t&&a(n,t),null!=t&&this.__v&&(e&&this.__h.push(e),m(this))},h.prototype.forceUpdate=function(t){this.__v&&(this.__e=!0,t&&this.__h.push(t),m(this))},h.prototype.render=f,r=[],o="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,y.__r=0;var D,M,O,N=0,R=[],F=e.__b,$=e.__r,W=e.diffed,I=e.__c,j=e.unmount;function K(t,n){var r,o,i=function(t,n){e.__h&&e.__h(M,t,N||n),N=0;var r=M.__H||(M.__H={__:[],__h:[]});return t>=r.__.length&&r.__.push({}),r.__[t]}(D++,3);!e.__s&&(r=i.__H,o=n,!r||r.length!==o.length||o.some((function(t,e){return t!==r[e]})))&&(i.__=t,i.__H=n,M.__H.__h.push(i))}function B(){R.forEach((function(t){if(t.__P)try{t.__H.__h.forEach(z),t.__H.__h.forEach(V),t.__H.__h=[]}catch(n){t.__H.__h=[],e.__e(n,t.__v)}})),R=[]}e.__b=function(t){M=null,F&&F(t)},e.__r=function(t){$&&$(t),D=0;var e=(M=t.__c).__H;e&&(e.__h.forEach(z),e.__h.forEach(V),e.__h=[])},e.diffed=function(t){W&&W(t);var n=t.__c;n&&n.__H&&n.__H.__h.length&&(1!==R.push(n)&&O===e.requestAnimationFrame||((O=e.requestAnimationFrame)||function(t){var e,n=function(){clearTimeout(r),q&&cancelAnimationFrame(e),setTimeout(t)},r=setTimeout(n,100);q&&(e=requestAnimationFrame(n))})(B)),M=void 0},e.__c=function(t,n){n.some((function(t){try{t.__h.forEach(z),t.__h=t.__h.filter((function(t){return!t.__||V(t)}))}catch(r){n.some((function(t){t.__h&&(t.__h=[])})),n=[],e.__e(r,t.__v)}})),I&&I(t,n)},e.unmount=function(t){j&&j(t);var n=t.__c;if(n&&n.__H)try{n.__H.__.forEach(z)}catch(r){e.__e(r,n.__v)}};var q="function"==typeof requestAnimationFrame;function z(t){var e=M;"function"==typeof t.__c&&t.__c(),M=e}function V(t){var e=M;t.__c=t.__(),M=e}var Z={};function G(t,e){for(var n in e)t[n]=e[n];return t}function Y(t,e,n){var r,o=/(?:\?([^#]*))?(#.*)?$/,i=t.match(o),_={};if(i&&i[1])for(var l=i[1].split("&"),u=0;u<l.length;u++){var a=l[u].split("=");_[decodeURIComponent(a[0])]=decodeURIComponent(a.slice(1).join("="))}t=X(t.replace(o,"")),e=X(e||"");for(var c=Math.max(t.length,e.length),p=0;p<c;p++)if(e[p]&&":"===e[p].charAt(0)){var s=e[p].replace(/(^:|[+*?]+$)/g,""),f=(e[p].match(/[+*?]+$/)||Z)[0]||"",h=~f.indexOf("+"),d=~f.indexOf("*"),v=t[p]||"";if(!v&&!d&&(f.indexOf("?")<0||h)){r=!1;break}if(_[s]=decodeURIComponent(v),h||d){_[s]=t.slice(p).map(decodeURIComponent).join("/");break}}else if(e[p]!==t[p]){r=!1;break}return(!0===n.default||!1!==r)&&_}function J(t,e){return t.rank<e.rank?1:t.rank>e.rank?-1:t.index-e.index}function Q(t,e){return t.index=e,t.rank=function(t){return t.props.default?0:(e=t.props.path,X(e).map(tt).join(""));var e}(t),t.props}function X(t){return t.replace(/(^\/+|\/+$)/g,"").split("/")}function tt(t){return":"==t.charAt(0)?1+"*+?".indexOf(t.charAt(t.length-1))||4:5}var et=null,nt=[],rt=[],ot={};function it(){var t;return""+((t=et&&et.location?et.location:et&&et.getCurrentLocation?et.getCurrentLocation():"undefined"!=typeof location?location:ot).pathname||"")+(t.search||"")}function _t(t,e){return void 0===e&&(e=!1),"string"!=typeof t&&t.url&&(e=t.replace,t=t.url),function(t){for(var e=nt.length;e--;)if(nt[e].canRoute(t))return!0;return!1}(t)&&function(t,e){void 0===e&&(e="push"),et&&et[e]?et[e](t):"undefined"!=typeof history&&history[e+"State"]&&history[e+"State"](null,null,t)}(t,e?"replace":"push"),lt(t)}function lt(t){for(var e=!1,n=0;n<nt.length;n++)!0===nt[n].routeTo(t)&&(e=!0);for(var r=rt.length;r--;)rt[r](t);return e}function ut(t){if(t&&t.getAttribute){var e=t.getAttribute("href"),n=t.getAttribute("target");if(e&&e.match(/^\//g)&&(!n||n.match(/^_?self$/i)))return _t(e)}}function at(t){if(!(t.ctrlKey||t.metaKey||t.altKey||t.shiftKey||0!==t.button))return ut(t.currentTarget||t.target||this),ct(t)}function ct(t){return t&&(t.stopImmediatePropagation&&t.stopImmediatePropagation(),t.stopPropagation&&t.stopPropagation(),t.preventDefault()),!1}function pt(t){if(!(t.ctrlKey||t.metaKey||t.altKey||t.shiftKey||0!==t.button)){var e=t.target;do{if("A"===String(e.nodeName).toUpperCase()&&e.getAttribute("href")){if(e.hasAttribute("native"))return;if(ut(e))return ct(t)}}while(e=e.parentNode)}}var st=!1;var ft=function(e){function n(t){e.call(this,t),t.history&&(et=t.history),this.state={url:t.url||it()},st||("function"==typeof addEventListener&&(et||addEventListener("popstate",(function(){lt(it())})),addEventListener("click",pt)),st=!0)}return e&&(n.__proto__=e),n.prototype=Object.create(e&&e.prototype),n.prototype.constructor=n,n.prototype.shouldComponentUpdate=function(t){return!0!==t.static||(t.url!==this.props.url||t.onChange!==this.props.onChange)},n.prototype.canRoute=function(t){var e=b(this.props.children);return this.getMatchingChildren(e,t,!1).length>0},n.prototype.routeTo=function(t){this.setState({url:t});var e=this.canRoute(t);return this.updating||this.forceUpdate(),e},n.prototype.componentWillMount=function(){nt.push(this),this.updating=!0},n.prototype.componentDidMount=function(){var t=this;et&&(this.unlisten=et.listen((function(e){t.routeTo(""+(e.pathname||"")+(e.search||""))}))),this.updating=!1},n.prototype.componentWillUnmount=function(){"function"==typeof this.unlisten&&this.unlisten(),nt.splice(nt.indexOf(this),1)},n.prototype.componentWillUpdate=function(){this.updating=!0},n.prototype.componentDidUpdate=function(){this.updating=!1},n.prototype.getMatchingChildren=function(e,n,r){return e.filter(Q).sort(J).map((function(e){var o=Y(n,e.props.path,e.props);if(o){if(!1!==r){var i={url:n,matches:o};return G(i,o),delete i.ref,delete i.key,function(e,n,r){var o,i,_,l=a({},e.props);for(_ in n)"key"==_?o=n[_]:"ref"==_?i=n[_]:l[_]=n[_];return arguments.length>2&&(l.children=arguments.length>3?t.call(arguments,2):r),s(e.type,l,o||e.key,i||e.ref,null)}(e,i)}return e}})).filter(Boolean)},n.prototype.render=function(t,e){var n=t.children,r=t.onChange,o=e.url,i=this.getMatchingChildren(b(n),o,!0),_=i[0]||null,l=this.previousUrl;return o!==l&&(this.previousUrl=o,"function"==typeof r&&r({router:this,url:o,previous:l,active:i,current:_})),_},n}(h);ft.subscribers=rt,ft.getCurrentUrl=it,ft.route=_t,ft.Router=ft,ft.Route=function(t){return p(t.component,t)},ft.Link=function(t){return p("a",G({onClick:at},t))},ft.exec=Y;var ht,dt={};function vt(t,e,n){if(3===t.nodeType){var r="textContent"in t?t.textContent:t.nodeValue||"";if(!1!==vt.options.trim){var o=0===e||e===n.length-1;if((!(r=r.match(/^[\s\n]+$/g)&&"all"!==vt.options.trim?" ":r.replace(/(^[\s\n]+|[\s\n]+$)/g,"all"===vt.options.trim||o?"":" "))||" "===r)&&n.length>1&&o)return null}return r}if(1!==t.nodeType)return null;var i=String(t.nodeName).toLowerCase();if("script"===i&&!vt.options.allowScripts)return null;var _,l,u=vt.h(i,function(t){var e=t&&t.length;if(!e)return null;for(var n={},r=0;r<e;r++){var o=t[r],i=o.name,_=o.value;"on"===i.substring(0,2)&&vt.options.allowEvents&&(_=new Function(_)),n[i]=_}return n}(t.attributes),(l=(_=t.childNodes)&&Array.prototype.map.call(_,vt).filter(yt))&&l.length?l:null);return vt.visitor&&vt.visitor(u),u}var mt,yt=function(t){return t},gt={};function kt(t){var e=(t.type||"").toLowerCase(),n=kt.map;n&&n.hasOwnProperty(e)?(t.type=n[e],t.props=Object.keys(t.props||{}).reduce((function(e,n){var r;return e[(r=n,r.replace(/-(.)/g,(function(t,e){return e.toUpperCase()})))]=t.props[n],e}),{})):t.type=e.replace(/[^a-z0-9-]/i,"")}var bt=function(t){function e(){t.apply(this,arguments)}return t&&(e.__proto__=t),(e.prototype=Object.create(t&&t.prototype)).constructor=e,e.setReviver=function(t){mt=t},e.prototype.shouldComponentUpdate=function(t){var e=this.props;return t.wrap!==e.wrap||t.type!==e.type||t.markup!==e.markup},e.prototype.setComponents=function(t){if(this.map={},t)for(var e in t)if(t.hasOwnProperty(e)){var n=e.replace(/([A-Z]+)([A-Z][a-z0-9])|([a-z0-9]+)([A-Z])/g,"$1$3-$2$4").toLowerCase();this.map[n]=t[e]}},e.prototype.render=function(t){var e=t.wrap;void 0===e&&(e=!0);var n,r=t.type,o=t.markup,i=t.components,_=t.reviver,l=t.onError,u=t["allow-scripts"],a=t["allow-events"],c=t.trim,s=function(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&-1===e.indexOf(r)&&(n[r]=t[r]);return n}(t,["wrap","type","markup","components","reviver","onError","allow-scripts","allow-events","trim"]),f=_||this.reviver||this.constructor.prototype.reviver||mt||p;this.setComponents(i);var h={allowScripts:u,allowEvents:a,trim:c};try{n=function(t,e,n,r,o){var i=function(t,e){var n,r,o,i,_="html"===e?"text/html":"application/xml";"html"===e?(i="body",o="<!DOCTYPE html>\n<html><body>"+t+"</body></html>"):(i="xml",o='<?xml version="1.0" encoding="UTF-8"?>\n<xml>'+t+"</xml>");try{n=(new DOMParser).parseFromString(o,_)}catch(a){r=a}if(n||"html"!==e||((n=ht||(ht=function(){if(document.implementation&&document.implementation.createHTMLDocument)return document.implementation.createHTMLDocument("");var t=document.createElement("iframe");return t.style.cssText="position:absolute; left:0; top:-999em; width:1px; height:1px; overflow:hidden;",t.setAttribute("sandbox","allow-forms"),document.body.appendChild(t),t.contentWindow.document}())).open(),n.write(o),n.close()),n){var l=n.getElementsByTagName(i)[0],u=l.firstChild;return t&&!u&&(l.error="Document parse failed."),u&&"parsererror"===String(u.nodeName).toLowerCase()&&(u.removeChild(u.firstChild),u.removeChild(u.lastChild),l.error=u.textContent||u.nodeValue||r||"Unknown error",l.removeChild(u)),l}}(t,e);if(i&&i.error)throw new Error(i.error);var _=i&&i.body||i;kt.map=r||gt;var l,u,a,c,p=_&&(l=_,u=kt,a=n,c=o,vt.visitor=u,vt.h=a,vt.options=c||dt,vt(l));return kt.map=null,p&&p.props&&p.props.children||null}(o,r,f,this.map,h)}catch(m){l?l({error:m}):"undefined"!=typeof console&&console.error&&console.error("preact-markup: "+m)}if(!1===e)return n||null;var d=s.hasOwnProperty("className")?"className":"class",v=s[d];return v?v.splice?v.splice(0,0,"markup"):"string"==typeof v?s[d]+=" markup":"object"==typeof v&&(v.markup=!0):s[d]="markup",f("div",s,n||null)},e}(h);export{bt as M,ft as R,L as S,f as d,p as v,K as y};