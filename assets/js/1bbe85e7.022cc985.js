(self.webpackChunkdocs_site=self.webpackChunkdocs_site||[]).push([[892],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=c(n),d=o,f=m["".concat(l,".").concat(d)]||m[d]||u[d]||a;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8317:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},metadata:function(){return s},toc:function(){return l},default:function(){return p}});var r=n(2122),o=n(9756),a=(n(7294),n(3905)),i={id:"limitations",title:"Limitations",sidebar_label:"Limitations"},s={unversionedId:"misc/limitations",id:"misc/limitations",isDocsHomePage:!1,title:"Limitations",description:"Date Time",source:"@site/docs/misc/limitations.md",sourceDirName:"misc",slug:"/misc/limitations",permalink:"/docs/misc/limitations",editUrl:"https://github.com/nartc/mapper/tree/main/docs-site/docs/misc/limitations.md",version:"current",sidebar_label:"Limitations",frontMatter:{id:"limitations",title:"Limitations",sidebar_label:"Limitations"},sidebar:"docs",previous:{title:"ErrorHandler",permalink:"/docs/misc/error-handler"},next:{title:"Introduce to Plugins",permalink:"/docs/plugins-system/introduce-to-plugins"}},l=[{value:"Date Time",id:"date-time",children:[]},{value:"Odd-property name",id:"odd-property-name",children:[{value:"Property name with number or special characters",id:"property-name-with-number-or-special-characters",children:[]}]},{value:"Circular Dependencies",id:"circular-dependencies",children:[]}],c={toc:l};function p(e){var t=e.components,n=(0,o.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"date-time"},"Date Time"),(0,a.kt)("p",null,"When dealing with Date Time, we should utilize Custom Configuration instead of relying on Auto Configuration. Date Time is hard to get right."),(0,a.kt)("h2",{id:"odd-property-name"},"Odd-property name"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"@automapper/core")," uses the ",(0,a.kt)("strong",{parentName:"p"},"Selector")," approach throughout the library which then needs to be parsed to get the property path. For example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"const selector = (destination) => destination.foo.bar;\n// or even\nconst selector = (d: IFoo) => d['foo'].bar;\n\n// ES5 version works as well\nfunction selector(destination) {\n  return destination.foo.bar;\n}\n// with computed property names also works\nfunction selector(destination) {\n  return destination['foo'].bar;\n}\n")),(0,a.kt)("p",null,"This ",(0,a.kt)("inlineCode",{parentName:"p"},"selector")," will be parsed at some point to extract ",(0,a.kt)("inlineCode",{parentName:"p"},"foo.bar")," as property path."),(0,a.kt)("p",null,"But, for the following cases, the parser won't be able to parse to get the right property path:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"const selector = (d) => d[' a ']; // You could use getters to circumvent this one\n\n// Real computed names\nconst selector = (d) => d['fo' + 'o'];\nconst selector = (d) => d[`foo`]; // you cannot use template strings!\nconst selector = (d) => d[`${'foo'}`];\n// and so on...\n")),(0,a.kt)("h3",{id:"property-name-with-number-or-special-characters"},"Property name with number or special characters"),(0,a.kt)("p",null,"When you rely on ",(0,a.kt)("strong",{parentName:"p"},"Naming Convention"),", and your property has number or special characters as part of the property name then the parse won't be able to parse the correct path either. For example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"class SnakeCaseFoo {\n  foo_1: string;\n  foo_bar: number;\n}\n\nclass CamelCaseFooDto {\n  foo1: string;\n  fooBar: number;\n}\n")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"@automapper/core")," will be able to parse ",(0,a.kt)("inlineCode",{parentName:"p"},"foo_bar")," into ",(0,a.kt)("inlineCode",{parentName:"p"},"fooBar")," but it won't be able to do the same for ",(0,a.kt)("inlineCode",{parentName:"p"},"foo_1"),". Please consider manually map these properties."),(0,a.kt)("p",null,"PR is most definitely welcomed to fix this limitation."),(0,a.kt)("h2",{id:"circular-dependencies"},"Circular Dependencies"),(0,a.kt)("p",null,"See ",(0,a.kt)("a",{parentName:"p",href:"/docs/plugins-system/classes-limitations"},(0,a.kt)("inlineCode",{parentName:"a"},"@automapper/classes")," Limitations")))}p.isMDXComponent=!0}}]);