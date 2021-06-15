(self.webpackChunkdocs_site=self.webpackChunkdocs_site||[]).push([[341],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return d},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=s(n),m=o,f=u["".concat(p,".").concat(m)]||u[m]||c[m]||i;return n?r.createElement(f,a(a({ref:t},d),{},{components:n})):r.createElement(f,a({ref:t},d))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var s=2;s<i;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},2689:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return a},metadata:function(){return l},toc:function(){return p},default:function(){return d}});var r=n(2122),o=n(9756),i=(n(7294),n(3905)),a={id:"introduce-to-profile",title:"Introduce to Profile",sidebar_label:"Introduce to Profile"},l={unversionedId:"getting-started/introduce-to-profile",id:"getting-started/introduce-to-profile",isDocsHomePage:!1,title:"Introduce to Profile",description:"In the previous section, we've created our first mapping and some mapping configurations.",source:"@site/docs/getting-started/introduce-to-profile.md",sourceDirName:"getting-started",slug:"/getting-started/introduce-to-profile",permalink:"/docs/getting-started/introduce-to-profile",editUrl:"https://github.com/nartc/mapper/tree/main/docs-site/docs/getting-started/introduce-to-profile.md",version:"current",sidebar_label:"Introduce to Profile",frontMatter:{id:"introduce-to-profile",title:"Introduce to Profile",sidebar_label:"Introduce to Profile"},sidebar:"docs",previous:{title:"Introduce to AutoMapper",permalink:"/docs/getting-started/introduce-to-automapper"},next:{title:"Fundamentals",permalink:"/docs/fundamentals"}},p=[{value:"What is <code>Profile</code>?",id:"what-is-profile",children:[]},{value:"Create our first <code>Profile</code>",id:"create-our-first-profile",children:[]},{value:"Using <code>Profile</code>",id:"using-profile",children:[]},{value:"Summary",id:"summary",children:[]}],s={toc:p};function d(e){var t=e.components,n=(0,o.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"In the previous section, we've created our first mapping and some mapping configurations."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"mapper\n  .createMap(Bio, BioDto, {\n    namingConventions: {\n      source: new CamelCaseNamingConvention(),\n      destination: new CamelCaseNamingConvention(),\n    },\n  })\n  .forMember(\n    (destination) => destination.birthday,\n    mapFrom((source) => source.birthday.toDateString())\n  );\n\nmapper.createMap(User, UserDto).forMember(\n  (destination) => destination.fullName,\n  mapFrom((source) => source.firstName + ' ' + source.lastName)\n);\n")),(0,i.kt)("p",null,"This approach works completely fine but when our application starts growing with more models, these configurations will also start growing. A ",(0,i.kt)("inlineCode",{parentName:"p"},"Profile")," is to help with this."),(0,i.kt)("h2",{id:"what-is-profile"},"What is ",(0,i.kt)("inlineCode",{parentName:"h2"},"Profile"),"?"),(0,i.kt)("p",null,"In the context of AutoMapper, ",(0,i.kt)("inlineCode",{parentName:"p"},"Profile")," is a container of a collection of mappings between models that are highly related to each other (eg: a pair of ",(0,i.kt)("inlineCode",{parentName:"p"},"User")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"UserDto")," is highly related)."),(0,i.kt)("p",null,"The purpose is to ",(0,i.kt)("em",{parentName:"p"},"separate the concern")," more. In terms of Folder Structure, we tend to group our models together in one place, or we separate them out into different modules (aka Feature). For the latter, ",(0,i.kt)("inlineCode",{parentName:"p"},"Profile")," is a great solution to keep Mappings of related models of a single Feature in one place and close to the models of that Feature."),(0,i.kt)("h2",{id:"create-our-first-profile"},"Create our first ",(0,i.kt)("inlineCode",{parentName:"h2"},"Profile")),(0,i.kt)("p",null,"In ",(0,i.kt)("inlineCode",{parentName:"p"},"@automapper/*"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"Profile")," is a ",(0,i.kt)("inlineCode",{parentName:"p"},"MappingProfile")," function that has the ",(0,i.kt)("inlineCode",{parentName:"p"},"Mapper")," as the argument and returns nothing (aka ",(0,i.kt)("inlineCode",{parentName:"p"},"void"),"). With this in mind, we will start with our ",(0,i.kt)("inlineCode",{parentName:"p"},"bioProfile")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"import type { MappingProfile } from '@automapper/types';\n\nexport const bioProfile: MappingProfile = (mapper) => {\n  mapper\n    .createMap(Bio, BioDto, {\n      namingConventions: {\n        source: new CamelCaseNamingConvention(),\n        destination: new CamelCaseNamingConvention(),\n      },\n    })\n    .forMember(\n      (destination) => destination.birthday,\n      mapFrom((source) => source.birthday.toDateString())\n    );\n};\n")),(0,i.kt)("p",null,"When we have more models related to ",(0,i.kt)("inlineCode",{parentName:"p"},"Bio")," entity, we can place them all in this profile without polluting other business logic in some other area."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"We repeat the same process for ",(0,i.kt)("inlineCode",{parentName:"p"},"userProfile"))),(0,i.kt)("h2",{id:"using-profile"},"Using ",(0,i.kt)("inlineCode",{parentName:"h2"},"Profile")),(0,i.kt)("p",null,"In the area where we call ",(0,i.kt)("inlineCode",{parentName:"p"},"createMap()")," before creating our ",(0,i.kt)("inlineCode",{parentName:"p"},"Profile"),", we can now call ",(0,i.kt)("inlineCode",{parentName:"p"},"addProfile()")," instead"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"mapper.addProfile(bioProfile).addProfile(userProfile);\n")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"mapper.addProfile()")," returns the ",(0,i.kt)("inlineCode",{parentName:"p"},"Mapper")," object, so we can chain ",(0,i.kt)("inlineCode",{parentName:"p"},"addProfile()")," to add multiple ",(0,i.kt)("inlineCode",{parentName:"p"},"Profile")," in one place."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Note: We add ",(0,i.kt)("inlineCode",{parentName:"p"},"bioProfile")," first because order still matters here")),(0,i.kt)("h2",{id:"summary"},"Summary"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Profile")," helps with ",(0,i.kt)("strong",{parentName:"li"},"Separation of Concern")," more by keeping our models, and their mappings close together."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Profile")," is a ",(0,i.kt)("inlineCode",{parentName:"li"},"MappingProfile")," function that has ",(0,i.kt)("inlineCode",{parentName:"li"},"Mapper")," object as the first argument and returns ",(0,i.kt)("inlineCode",{parentName:"li"},"void"),"."),(0,i.kt)("li",{parentName:"ul"},"Call ",(0,i.kt)("inlineCode",{parentName:"li"},"mapper.addProfile()")," to use the ",(0,i.kt)("inlineCode",{parentName:"li"},"MappingProfile")," function. ",(0,i.kt)("inlineCode",{parentName:"li"},"addProfile()")," can be chained to add multiple ",(0,i.kt)("inlineCode",{parentName:"li"},"Profile"),"."),(0,i.kt)("li",{parentName:"ul"},"Order of ",(0,i.kt)("inlineCode",{parentName:"li"},"Profile")," still matters.")))}d.isMDXComponent=!0}}]);