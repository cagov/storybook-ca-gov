(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{1046:function(module,exports,__webpack_require__){"use strict";__webpack_require__(4),__webpack_require__(53),__webpack_require__(43),__webpack_require__(29),__webpack_require__(40),__webpack_require__(1047),__webpack_require__(1048),__webpack_require__(9),__webpack_require__(44);var _clientApi=__webpack_require__(51),_clientLogger=__webpack_require__(35),_configFilename=__webpack_require__(1049);function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}(_configFilename.args||_configFilename.argTypes)&&_clientLogger.logger.warn("Invalid args/argTypes in config, ignoring.",JSON.stringify({args:_configFilename.args,argTypes:_configFilename.argTypes})),_configFilename.decorators&&_configFilename.decorators.forEach((function(decorator){return(0,_clientApi.addDecorator)(decorator,!1)})),_configFilename.loaders&&_configFilename.loaders.forEach((function(loader){return(0,_clientApi.addLoader)(loader,!1)})),(_configFilename.parameters||_configFilename.globals||_configFilename.globalTypes)&&(0,_clientApi.addParameters)(_objectSpread(_objectSpread({},_configFilename.parameters),{},{globals:_configFilename.globals,globalTypes:_configFilename.globalTypes}),!1),_configFilename.argTypesEnhancers&&_configFilename.argTypesEnhancers.forEach((function(enhancer){return(0,_clientApi.addArgTypesEnhancer)(enhancer)}))},1049:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"parameters",(function(){return parameters}));var parameters={actions:{argTypesRegex:"^on[A-Z].*"}}},1050:function(module,exports,__webpack_require__){"use strict";(function(module){(0,__webpack_require__(239).configure)([__webpack_require__(1051),__webpack_require__(1054)],module,!1)}).call(this,__webpack_require__(107)(module))},1051:function(module,exports,__webpack_require__){var map={"./Storybook-CA.GOV.stories.mdx":1052,"./web-components/cagov-reopening/intro.stories.mdx":1053};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=1051},1052:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"__page",(function(){return __page}));__webpack_require__(14),__webpack_require__(3),__webpack_require__(9),__webpack_require__(0);var _mdx_js_react__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(5),_storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(104);function _extends(){return(_extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target}).apply(this,arguments)}function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}var layoutProps={};function MDXContent(_ref){var components=_ref.components,props=_objectWithoutProperties(_ref,["components"]);return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__.mdx)("wrapper",_extends({},layoutProps,props,{components:components,mdxType:"MDXLayout"}),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__.mdx)(_storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_5__.Meta,{title:"intro",mdxType:"Meta"}),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__.mdx)("style",null,"\n  .content {\n    margin: 50px;\n  }\n"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__.mdx)("h1",{id:"cagov-storybook"},"ca.gov Storybook"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__.mdx)("div",{className:"content"},"Lorem Ipsum"))}MDXContent.isMDXComponent=!0;var __page=function __page(){throw new Error("Docs-only story")};__page.parameters={docsOnly:!0};var componentMeta={title:"intro",includeStories:["__page"]},mdxStoryNameToKey={};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs=Object.assign({},componentMeta.parameters.docs||{},{page:function page(){return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__.mdx)(_storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_5__.AddContext,{mdxStoryNameToKey:mdxStoryNameToKey,mdxComponentMeta:componentMeta},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__.mdx)(MDXContent,null))}}),__webpack_exports__.default=componentMeta},1053:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"__page",(function(){return __page}));__webpack_require__(14),__webpack_require__(3),__webpack_require__(9),__webpack_require__(0);var _mdx_js_react__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(5),_storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(104);function _extends(){return(_extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target}).apply(this,arguments)}function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}var layoutProps={};function MDXContent(_ref){var components=_ref.components,props=_objectWithoutProperties(_ref,["components"]);return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__.mdx)("wrapper",_extends({},layoutProps,props,{components:components,mdxType:"MDXLayout"}),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__.mdx)(_storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_5__.Meta,{title:"covid19/cagov-reopening/intro",mdxType:"Meta"}),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__.mdx)("style",null,"\n  .content {\n    margin: 50px;\n  }\n"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__.mdx)("h1",{id:"cagovreopening-web-component-redesign"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__.mdx)("inlineCode",{parentName:"h1"},"CAGovReopening")," Web Component Redesign"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__.mdx)("p",null,"---DRAFT--- Still organizing these notes & figuring out the audience / level of detail."),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__.mdx)("div",{className:"content"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__.mdx)("ul",null,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__.mdx)("li",{parentName:"ul"},"Version: 2.0.0"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__.mdx)("li",{parentName:"ul"},"Status: Prototype / Draft")),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__.mdx)("h2",{id:"goal"},"Goal"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__.mdx)("p",null,"Make it easier to find current guidance about how Californians can stay safe in their activities and businesses."),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__.mdx)("h2",{id:"parts"},"Parts"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__.mdx)("ol",null,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__.mdx)("li",{parentName:"ol"},"Create a data & communication system to power an improved API to help publish & track State guidance about how Californians can stay safe in their activities and businesses."),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__.mdx)("li",{parentName:"ol"},"Update the interface to the search tool we provide to help Californians find their guidance. In our user research, we learned that many businesses were struggling to find the guidance they needed, and we have prepared some new designs for improving how the search interface works.")),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__.mdx)("h3",{id:"1-county-status"},"1. County Status"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__.mdx)("p",null,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__.mdx)("inlineCode",{parentName:"p"},"/src/js/roadmap/countystatus.json"),"\n",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__.mdx)("inlineCode",{parentName:"p"},"/docs/countystatus.json")),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__.mdx)("h3",{id:"2-new-reopening-roadmap-activity-data-v200"},"2. NEW: Reopening Roadmap Activity Data, v2.0.0"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__.mdx)("h3",{id:"3-new-activity--business-data-keys"},"3. NEW: Activity & Business data keys"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__.mdx)("h3",{id:"4-new-county-public-health-department-covid-19-webpages"},"4 NEW: County Public Health Department Covid-19 Webpages"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__.mdx)("p",null,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__.mdx)("inlineCode",{parentName:"p"},"county-covid19-webpages.json")),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__.mdx)("h3",{id:"5-safer-economy-language-labels"},"5. Safer Economy Language Labels"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__.mdx)("p",null,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__.mdx)("inlineCode",{parentName:"p"},"pubData[language.id].saferEconomyLang.Table1[0] | dump | escape")," "),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__.mdx)("p",null,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__.mdx)("inlineCode",{parentName:"p"},"/pages/wordpress-posts/reopening-roadmap-activity-data.json"),"\n",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__.mdx)("inlineCode",{parentName:"p"},"safer-economy-lang.json")),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__.mdx)("h3",{id:"6-countyregions"},"6. countyregions"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__.mdx)("p",null,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__.mdx)("inlineCode",{parentName:"p"},"pages/_data/countyRegion.json"),"\n",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__.mdx)("inlineCode",{parentName:"p"},"/docs/countyregions.json")),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__.mdx)("h3",{id:"7-regionsclosed"},"7. regionsclosed"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__.mdx)("p",null,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__.mdx)("inlineCode",{parentName:"p"},"pages/wordpress-posts/rsho.json"),"\n",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__.mdx)("inlineCode",{parentName:"p"},"/docs/regionsclosed.json")),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__.mdx)("h3",{id:"8-statusdescriptors"},"8. statusdescriptors"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__.mdx)("p",null,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__.mdx)("inlineCode",{parentName:"p"},"/pages/wordpress-posts/reopening-matrix-data.json"),"\n",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__.mdx)("inlineCode",{parentName:"p"},"/docs/statusdescriptors.json")),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__.mdx)("h3",{id:"9-schools-may-reopen"},"9. schools-may-reopen"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__.mdx)("p",null,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__.mdx)("inlineCode",{parentName:"p"},"/pages/wordpress-posts/schools-may-reopen-in-these-counties.json"),"\n",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__.mdx)("inlineCode",{parentName:"p"},"/docs/schools-may-reopen.json"),"\n'schoolsList.Table1'"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__.mdx)("h3",{id:"10-reopening-activities"},"10. reopening activities"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__.mdx)("p",null,"Streamlined version of reopening activities\n",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__.mdx)("inlineCode",{parentName:"p"},"/pages/wordpress-posts/reopening-roadmap-activity-data.json"),"\n",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__.mdx)("inlineCode",{parentName:"p"},"/docs/reopening-activities.json")),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__.mdx)("h3",{id:"11-tableau-maps"},"11. Tableau maps"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__.mdx)("p",null,"@TODO disable for development"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__.mdx)("h3",{id:"12-markup-page-httpscovid19cagovsafer-economy"},"12. Markup page: ",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__.mdx)("inlineCode",{parentName:"h3"},"https://covid19.ca.gov/safer-economy")),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__.mdx)("p",null,': "What\'s open" page. Other colloquial names: "Safer Economy", "Roadmap", "Dimmer switch", "Blueprint"'),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__.mdx)("h3",{id:"page-history"},"Page history"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__.mdx)("p",null,'Started initially as a "What\'s Open" page, with statuses of business being "Open" or "Closed" by the Covid-19 web response team, part of the State of California\'s Office of Digital Innovation.'),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__.mdx)("p",null,"Over the course of the pandemic, the page has evolved to include search for businesses and activities, tier modifications, maps, supplementary industry guidance, and information about the Regional Stay at Home order."),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__.mdx)("p",null,"Location in covid19 git repository\n: /pages/wordpress-posts/safer-economy.html")))}MDXContent.isMDXComponent=!0;var __page=function __page(){throw new Error("Docs-only story")};__page.parameters={docsOnly:!0};var componentMeta={title:"covid19/cagov-reopening/intro",includeStories:["__page"]},mdxStoryNameToKey={};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs=Object.assign({},componentMeta.parameters.docs||{},{page:function page(){return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__.mdx)(_storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_5__.AddContext,{mdxStoryNameToKey:mdxStoryNameToKey,mdxComponentMeta:componentMeta},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__.mdx)(MDXContent,null))}}),__webpack_exports__.default=componentMeta},1054:function(module,exports,__webpack_require__){var map={"./default/Button.stories.js":1055,"./default/Header.stories.js":204,"./default/Page.stories.js":1070,"./web-components/cagov-reopening/cagov-reopening.stories.js":1071,"./web-components/hello-world/hello-world.stories.js":1072};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=1054},1055:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Primary",(function(){return Primary})),__webpack_require__.d(__webpack_exports__,"Secondary",(function(){return Secondary})),__webpack_require__.d(__webpack_exports__,"Large",(function(){return Large})),__webpack_require__.d(__webpack_exports__,"Small",(function(){return Small}));__webpack_require__(112),__webpack_require__(3);var _Button__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(127);__webpack_exports__.default={title:"Example/Button",argTypes:{backgroundColor:{control:"color"},onClick:{action:"onClick"}}};var Template=function Template(args){return Object(_Button__WEBPACK_IMPORTED_MODULE_2__.a)(args)},Primary=Template.bind({});Primary.args={primary:!0,label:"Button"};var Secondary=Template.bind({});Secondary.args={label:"Button"};var Large=Template.bind({});Large.args={size:"large",label:"Button"};var Small=Template.bind({});Small.args={size:"small",label:"Button"},Primary.parameters=Object.assign({storySource:{source:"(args) => Button(args)"}},Primary.parameters),Secondary.parameters=Object.assign({storySource:{source:"(args) => Button(args)"}},Secondary.parameters),Large.parameters=Object.assign({storySource:{source:"(args) => Button(args)"}},Large.parameters),Small.parameters=Object.assign({storySource:{source:"(args) => Button(args)"}},Small.parameters)},1056:function(module,exports,__webpack_require__){var api=__webpack_require__(153),content=__webpack_require__(1057);"string"==typeof(content=content.__esModule?content.default:content)&&(content=[[module.i,content,""]]);var options={insert:"head",singleton:!1};api(content,options);module.exports=content.locals||{}},1057:function(module,exports,__webpack_require__){(exports=__webpack_require__(154)(!1)).push([module.i,".storybook-button {\n  font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;\n  font-weight: 700;\n  border: 0;\n  border-radius: 3em;\n  cursor: pointer;\n  display: inline-block;\n  line-height: 1;\n}\n.storybook-button--primary {\n  color: white;\n  background-color: #1ea7fd;\n}\n.storybook-button--secondary {\n  color: #333;\n  background-color: transparent;\n  box-shadow: rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset;\n}\n.storybook-button--small {\n  font-size: 12px;\n  padding: 10px 16px;\n}\n.storybook-button--medium {\n  font-size: 14px;\n  padding: 11px 20px;\n}\n.storybook-button--large {\n  font-size: 16px;\n  padding: 12px 24px;\n}\n",""]),module.exports=exports},1058:function(module,exports,__webpack_require__){var api=__webpack_require__(153),content=__webpack_require__(1059);"string"==typeof(content=content.__esModule?content.default:content)&&(content=[[module.i,content,""]]);var options={insert:"head",singleton:!1};api(content,options);module.exports=content.locals||{}},1059:function(module,exports,__webpack_require__){(exports=__webpack_require__(154)(!1)).push([module.i,".wrapper {\n  font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.1);\n  padding: 15px 20px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n\nsvg {\n  display: inline-block;\n  vertical-align: top;\n}\n\nh1 {\n  font-weight: 900;\n  font-size: 20px;\n  line-height: 1;\n  margin: 6px 0 6px 10px;\n  display: inline-block;\n  vertical-align: top;\n}\n\nbutton + button {\n  margin-left: 10px;\n}\n",""]),module.exports=exports},1060:function(module,exports,__webpack_require__){var api=__webpack_require__(153),content=__webpack_require__(1061);"string"==typeof(content=content.__esModule?content.default:content)&&(content=[[module.i,content,""]]);var options={insert:"head",singleton:!1};api(content,options);module.exports=content.locals||{}},1061:function(module,exports,__webpack_require__){(exports=__webpack_require__(154)(!1)).push([module.i,"section {\n  font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;\n  font-size: 14px;\n  line-height: 24px;\n  padding: 48px 20px;\n  margin: 0 auto;\n  max-width: 600px;\n  color: #333;\n}\n\nh2 {\n  font-weight: 900;\n  font-size: 32px;\n  line-height: 1;\n  margin: 0 0 4px;\n  display: inline-block;\n  vertical-align: top;\n}\n\np {\n  margin: 1em 0;\n}\n\na {\n  text-decoration: none;\n  color: #1ea7fd;\n}\n\nul {\n  padding-left: 30px;\n  margin: 1em 0;\n}\n\nli {\n  margin-bottom: 8px;\n}\n\n.tip {\n  display: inline-block;\n  border-radius: 1em;\n  font-size: 11px;\n  line-height: 12px;\n  font-weight: 700;\n  background: #e7fdd8;\n  color: #66bf3c;\n  padding: 4px 12px;\n  margin-right: 10px;\n  vertical-align: top;\n}\n\n.tip-wrapper {\n  font-size: 13px;\n  line-height: 20px;\n  margin-top: 40px;\n  margin-bottom: 40px;\n}\n\n.tip-wrapper svg {\n  display: inline-block;\n  height: 12px;\n  width: 12px;\n  margin-right: 4px;\n  vertical-align: top;\n  margin-top: 3px;\n}\n\n.tip-wrapper svg path {\n  fill: #1ea7fd;\n}\n",""]),module.exports=exports},1062:function(module,exports,__webpack_require__){var api=__webpack_require__(153),content=__webpack_require__(1063);"string"==typeof(content=content.__esModule?content.default:content)&&(content=[[module.i,content,""]]);var options={insert:"head",singleton:!1};api(content,options);module.exports=content.locals||{}},1063:function(module,exports,__webpack_require__){(exports=__webpack_require__(154)(!1)).push([module.i,".storybook-button {\n    font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;\n    font-weight: 700;\n    border: 0;\n    border-radius: 3em;\n    cursor: pointer;\n    display: inline-block;\n    line-height: 1;\n  }\n  .storybook-button--primary {\n    color: white;\n    background-color: #1ea7fd;\n  }\n  .storybook-button--secondary {\n    color: #333;\n    background-color: transparent;\n    box-shadow: rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset;\n  }\n  .storybook-button--small {\n    font-size: 12px;\n    padding: 10px 16px;\n  }\n  .storybook-button--medium {\n    font-size: 14px;\n    padding: 11px 20px;\n  }\n  .storybook-button--large {\n    font-size: 16px;\n    padding: 12px 24px;\n  }\n  ",""]),module.exports=exports},1064:function(module,exports,__webpack_require__){var api=__webpack_require__(153),content=__webpack_require__(1065);"string"==typeof(content=content.__esModule?content.default:content)&&(content=[[module.i,content,""]]);var options={insert:"head",singleton:!1};api(content,options);module.exports=content.locals||{}},1065:function(module,exports,__webpack_require__){(exports=__webpack_require__(154)(!1)).push([module.i,".storybook-button {\n    font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;\n    font-weight: 700;\n    border: 0;\n    border-radius: 3em;\n    cursor: pointer;\n    display: inline-block;\n    line-height: 1;\n  }\n  .storybook-button--primary {\n    color: white;\n    background-color: #1ea7fd;\n  }\n  .storybook-button--secondary {\n    color: #333;\n    background-color: transparent;\n    box-shadow: rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset;\n  }\n  .storybook-button--small {\n    font-size: 12px;\n    padding: 10px 16px;\n  }\n  .storybook-button--medium {\n    font-size: 14px;\n    padding: 11px 20px;\n  }\n  .storybook-button--large {\n    font-size: 16px;\n    padding: 12px 24px;\n  }\n  ",""]),module.exports=exports},1070:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"LoggedIn",(function(){return LoggedIn})),__webpack_require__.d(__webpack_exports__,"LoggedOut",(function(){return LoggedOut}));__webpack_require__(112),__webpack_require__(3),__webpack_require__(8),__webpack_require__(29),__webpack_require__(30);var lit_html=__webpack_require__(60),Header=__webpack_require__(205);__webpack_require__(1060);function _templateObject(){var data=function _taggedTemplateLiteral(strings,raw){raw||(raw=strings.slice(0));return Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}(["\n  <article>\n    ",'\n\n    <section>\n      <h2>Pages in Storybook</h2>\n      <p>\n        We recommend building UIs with a\n        <a href="https://componentdriven.org" target="_blank" rel="noopener noreferrer">\n          <strong>component-driven</strong> </a\n        >process starting with atomic components and ending with pages.\n      </p>\n      <p>\n        Render pages with mock data. This makes it easy to build and review page states without\n        needing to navigate to them in your app. Here are some handy patterns for managing page data\n        in Storybook:\n      </p>\n      <ul>\n        <li>\n          Use a higher-level connected component. Storybook helps you compose such data from the\n          "args" of child component stories\n        </li>\n        <li>\n          Assemble data in the page component from your services. You can mock these services out\n          using Storybook.\n        </li>\n      </ul>\n      <p>\n        Get a guided tutorial on component-driven development at\n        <a href="https://www.learnstorybook.com" target="_blank" rel="noopener noreferrer">\n          Learn Storybook\n        </a>\n        . Read more in the\n        <a href="https://storybook.js.org/docs" target="_blank" rel="noopener noreferrer">\n          docs\n        </a>\n        .\n      </p>\n      <div className="tip-wrapper">\n        <span className="tip">Tip</span> Adjust the width of the canvas with the\n        <svg width="10" height="10" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">\n          <g fill="none" fillRule="evenodd">\n            <path\n              d="M1.5 5.2h4.8c.3 0 .5.2.5.4v5.1c-.1.2-.3.3-.4.3H1.4a.5.5 0 01-.5-.4V5.7c0-.3.2-.5.5-.5zm0-2.1h6.9c.3 0 .5.2.5.4v7a.5.5 0 01-1 0V4H1.5a.5.5 0 010-1zm0-2.1h9c.3 0 .5.2.5.4v9.1a.5.5 0 01-1 0V2H1.5a.5.5 0 010-1zm4.3 5.2H2V10h3.8V6.2z"\n              id="a"\n              fill="#999"\n            />\n          </g>\n        </svg>\n        Viewports addon in the toolbar\n      </div>\n    </section>\n  </article>\n']);return _templateObject=function _templateObject(){return data},data}var Header_stories=__webpack_require__(204),Page_stories_Template=(__webpack_exports__.default={title:"Example/Page"},function Template(args){return function Page(_ref){var user=_ref.user,onLogin=_ref.onLogin,onLogout=_ref.onLogout,onCreateAccount=_ref.onCreateAccount;return Object(lit_html.html)(_templateObject(),Object(Header.a)({user:user,onLogin:onLogin,onLogout:onLogout,onCreateAccount:onCreateAccount}))}(args)}),LoggedIn=Page_stories_Template.bind({});LoggedIn.args=Object.assign({},Header_stories.LoggedIn.args);var LoggedOut=Page_stories_Template.bind({});LoggedOut.args=Object.assign({},Header_stories.LoggedOut.args),LoggedIn.parameters=Object.assign({storySource:{source:"(args) => Page(args)"}},LoggedIn.parameters),LoggedOut.parameters=Object.assign({storySource:{source:"(args) => Page(args)"}},LoggedOut.parameters)},1071:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Primary",(function(){return Primary})),__webpack_require__.d(__webpack_exports__,"Secondary",(function(){return Secondary})),__webpack_require__.d(__webpack_exports__,"Large",(function(){return Large})),__webpack_require__.d(__webpack_exports__,"Small",(function(){return Small}));__webpack_require__(112),__webpack_require__(3),__webpack_require__(50),__webpack_require__(8),__webpack_require__(29),__webpack_require__(30);var lit_html=__webpack_require__(60);__webpack_require__(1062);function _templateObject(){var data=function _taggedTemplateLiteral(strings,raw){raw||(raw=strings.slice(0));return Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}(['\n    <button\n      type="button"\n      class=',"\n      style=","\n      @click=","\n    >\n      ","\n    </button>\n  "]);return _templateObject=function _templateObject(){return data},data}__webpack_exports__.default={title:"covid19/cagov-reopening/web-component",argTypes:{backgroundColor:{control:"color"},onClick:{action:"onClick"}}};var cagov_reopening_stories_Template=function Template(args){return function Button(_ref){var primary=_ref.primary,backgroundColor=_ref.backgroundColor,size=_ref.size,label=_ref.label,onClick=_ref.onClick,mode=primary?"storybook-button--primary":"storybook-button--secondary";return Object(lit_html.html)(_templateObject(),["storybook-button","storybook-button--".concat(size||"medium"),mode].join(" "),backgroundColor&&{backgroundColor:backgroundColor},onClick,label)}(args)},Primary=cagov_reopening_stories_Template.bind({});Primary.args={primary:!0,label:"Button"};var Secondary=cagov_reopening_stories_Template.bind({});Secondary.args={label:"Button"};var Large=cagov_reopening_stories_Template.bind({});Large.args={size:"large",label:"Button"};var Small=cagov_reopening_stories_Template.bind({});Small.args={size:"small",label:"Button"},Primary.parameters=Object.assign({storySource:{source:"(args) => Button(args)"}},Primary.parameters),Secondary.parameters=Object.assign({storySource:{source:"(args) => Button(args)"}},Secondary.parameters),Large.parameters=Object.assign({storySource:{source:"(args) => Button(args)"}},Large.parameters),Small.parameters=Object.assign({storySource:{source:"(args) => Button(args)"}},Small.parameters)},1072:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Primary",(function(){return Primary})),__webpack_require__.d(__webpack_exports__,"Secondary",(function(){return Secondary})),__webpack_require__.d(__webpack_exports__,"Large",(function(){return Large})),__webpack_require__.d(__webpack_exports__,"Small",(function(){return Small}));__webpack_require__(112),__webpack_require__(3),__webpack_require__(50),__webpack_require__(8),__webpack_require__(29),__webpack_require__(30);var lit_html=__webpack_require__(60);__webpack_require__(1064);function _templateObject(){var data=function _taggedTemplateLiteral(strings,raw){raw||(raw=strings.slice(0));return Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}(['\n    <button\n      type="button"\n      class=',"\n      style=","\n      @click=","\n    >\n      ","\n    </button>\n  "]);return _templateObject=function _templateObject(){return data},data}__webpack_exports__.default={title:"Demo/Hello-World",argTypes:{backgroundColor:{control:"color"},onClick:{action:"onClick"}}};var hello_world_stories_Template=function Template(args){return function Button(_ref){var primary=_ref.primary,backgroundColor=_ref.backgroundColor,size=_ref.size,label=_ref.label,onClick=_ref.onClick,mode=primary?"storybook-button--primary":"storybook-button--secondary";return Object(lit_html.html)(_templateObject(),["storybook-button","storybook-button--".concat(size||"medium"),mode].join(" "),backgroundColor&&{backgroundColor:backgroundColor},onClick,label)}(args)},Primary=hello_world_stories_Template.bind({});Primary.args={primary:!0,label:"Button"};var Secondary=hello_world_stories_Template.bind({});Secondary.args={label:"Button"};var Large=hello_world_stories_Template.bind({});Large.args={size:"large",label:"Button"};var Small=hello_world_stories_Template.bind({});Small.args={size:"small",label:"Button"},Primary.parameters=Object.assign({storySource:{source:"(args) => Button(args)"}},Primary.parameters),Secondary.parameters=Object.assign({storySource:{source:"(args) => Button(args)"}},Secondary.parameters),Large.parameters=Object.assign({storySource:{source:"(args) => Button(args)"}},Large.parameters),Small.parameters=Object.assign({storySource:{source:"(args) => Button(args)"}},Small.parameters)},127:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return Button}));__webpack_require__(50),__webpack_require__(8),__webpack_require__(29),__webpack_require__(30);var lit_html__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(60);__webpack_require__(1056);function _templateObject(){var data=function _taggedTemplateLiteral(strings,raw){raw||(raw=strings.slice(0));return Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}(['\n    <button\n      type="button"\n      class=',"\n      style=","\n      @click=","\n    >\n      ","\n    </button>\n  "]);return _templateObject=function _templateObject(){return data},data}var Button=function Button(_ref){var primary=_ref.primary,backgroundColor=_ref.backgroundColor,size=_ref.size,label=_ref.label,onClick=_ref.onClick,mode=primary?"storybook-button--primary":"storybook-button--secondary";return Object(lit_html__WEBPACK_IMPORTED_MODULE_4__.html)(_templateObject(),["storybook-button","storybook-button--".concat(size||"medium"),mode].join(" "),backgroundColor&&{backgroundColor:backgroundColor},onClick,label)}},204:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"LoggedIn",(function(){return LoggedIn})),__webpack_require__.d(__webpack_exports__,"LoggedOut",(function(){return LoggedOut}));__webpack_require__(112),__webpack_require__(3);var _Header__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(205);__webpack_exports__.default={title:"Example/Header"};var Template=function Template(args){return Object(_Header__WEBPACK_IMPORTED_MODULE_2__.a)(args)},LoggedIn=Template.bind({});LoggedIn.args={user:{}};var LoggedOut=Template.bind({});LoggedOut.args={},LoggedIn.parameters=Object.assign({storySource:{source:"(args) => Header(args)"}},LoggedIn.parameters),LoggedOut.parameters=Object.assign({storySource:{source:"(args) => Header(args)"}},LoggedOut.parameters)},205:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return Header}));__webpack_require__(8),__webpack_require__(29),__webpack_require__(30);var lit_html__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(60),_Button__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(127);__webpack_require__(1058);function _templateObject2(){var data=_taggedTemplateLiteral(["","\n            ",""]);return _templateObject2=function _templateObject2(){return data},data}function _templateObject(){var data=_taggedTemplateLiteral(['\n  <header>\n    <div class="wrapper">\n      <div>\n        <svg width="32" height="32" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">\n          <g fill="none" fillRule="evenodd">\n            <path\n              d="M10 0h12a10 10 0 0110 10v12a10 10 0 01-10 10H10A10 10 0 010 22V10A10 10 0 0110 0z"\n              fill="#FFF"\n            />\n            <path\n              d="M5.3 10.6l10.4 6v11.1l-10.4-6v-11zm11.4-6.2l9.7 5.5-9.7 5.6V4.4z"\n              fill="#555AB9"\n            />\n            <path\n              d="M27.2 10.6v11.2l-10.5 6V16.5l10.5-6zM15.7 4.4v11L6 10l9.7-5.5z"\n              fill="#91BAF8"\n            />\n          </g>\n        </svg>\n        <h1>Acme</h1>\n      </div>\n      <div>\n        ',"\n      </div>\n    </div>\n  </header>\n"]);return _templateObject=function _templateObject(){return data},data}function _taggedTemplateLiteral(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}var Header=function Header(_ref){var user=_ref.user,onLogin=_ref.onLogin,onLogout=_ref.onLogout,onCreateAccount=_ref.onCreateAccount;return Object(lit_html__WEBPACK_IMPORTED_MODULE_3__.html)(_templateObject(),user?Object(_Button__WEBPACK_IMPORTED_MODULE_4__.a)({size:"small",onClick:onLogout,label:"Log out"}):Object(lit_html__WEBPACK_IMPORTED_MODULE_3__.html)(_templateObject2(),Object(_Button__WEBPACK_IMPORTED_MODULE_4__.a)({size:"small",onClick:onLogin,label:"Log in"}),Object(_Button__WEBPACK_IMPORTED_MODULE_4__.a)({primary:!0,size:"small",onClick:onCreateAccount,label:"Sign up"})))}},466:function(module,exports,__webpack_require__){__webpack_require__(467),__webpack_require__(638),__webpack_require__(639),__webpack_require__(798),__webpack_require__(1017),__webpack_require__(1020),__webpack_require__(1025),__webpack_require__(1037),__webpack_require__(1039),__webpack_require__(1044),__webpack_require__(1046),module.exports=__webpack_require__(1050)},541:function(module,exports){},639:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__(239)}},[[466,1,2]]]);
//# sourceMappingURL=main.932edf5edd3fbf769e15.bundle.js.map