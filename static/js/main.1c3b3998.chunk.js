(this["webpackJsonpreact_list-of-goods"]=this["webpackJsonpreact_list-of-goods"]||[]).push([[0],{12:function(t,e,s){},13:function(t,e,s){},15:function(t,e,s){"use strict";s.r(e);var n=s(3),i=s.n(n),o=s(4),r=s(5),c=s(7),a=s(6),l=s(1),u=s.n(l),b=(s(12),s(13),s(0)),h=function(t){var e=t.goods;return Object(b.jsx)("div",{className:"GoodsList__wrapper",children:Object(b.jsx)("ul",{className:"GoodsList",children:e.map((function(t){return Object(b.jsx)("li",{className:"GoodsList__link",children:t},t)}))})})},p=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"],d=function(t){Object(c.a)(s,t);var e=Object(a.a)(s);function s(){var t;Object(o.a)(this,s);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(t=e.call.apply(e,[this].concat(i))).state={goods:p,visibleList:!1,isReversed:!1,sortByAlphabet:!1,sortByLength:!1,limit:1},t.adderList=function(){t.setState((function(t){return{visibleList:!t.visibleList}}))},t.reverseList=function(){t.setState((function(t){return{isReversed:!t.isReversed}}))},t.sortList=function(){t.setState({sortByAlphabet:!0,sortByLength:!1})},t.sortByLength=function(){t.setState({sortByLength:!0,sortByAlphabet:!1})},t.reset=function(){t.setState({isReversed:!1,sortByAlphabet:!1,sortByLength:!1})},t.changeLimit=function(e){t.setState({limit:+e.target.value})},t.selectReset=function(){t.setState({limit:1})},t}return Object(r.a)(s,[{key:"render",value:function(){var t=this.state,e=t.goods,s=t.visibleList,n=t.isReversed,i=t.sortByAlphabet,o=t.sortByLength,r=t.limit,c=e.filter((function(t){return t.length>=r}));return i&&c.sort((function(t,e){return t.localeCompare(e)})),o&&c.sort((function(t,e){return t.length-e.length})),n&&c.reverse(),Object(b.jsxs)("div",{className:"App",children:[Object(b.jsx)("h1",{className:"App__title",children:"Goods list"}),!s&&Object(b.jsx)("button",{type:"button",onClick:this.adderList,className:"App__button Button__start",children:"Start"}),s&&Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(h,{goods:c}),Object(b.jsxs)("div",{className:"App__buttons",children:[Object(b.jsx)("button",{type:"button",onClick:this.reverseList,className:"App__button",children:"Reverse"}),Object(b.jsx)("button",{type:"button",onClick:this.sortList,className:"App__button",children:"Sort alphabetically"}),Object(b.jsx)("button",{type:"button",onClick:this.sortByLength,className:"App__button",children:"Sort by length"}),Object(b.jsx)("button",{type:"button",onClick:this.reset,className:"App__button Button__reset",children:"Reset"})]}),Object(b.jsxs)("form",{className:"App__form",children:[Object(b.jsx)("select",{value:r,onChange:this.changeLimit,className:"App__select",children:[1,2,3,4,5,6,7,8,9,10].map((function(t){return Object(b.jsx)("option",{value:t,children:t})}))}),Object(b.jsx)("button",{type:"button",onClick:this.selectReset,className:"App__button Button__reset",children:"Reset select"})]})]})]})}}]),s}(u.a.Component);i.a.render(Object(b.jsx)(d,{}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.1c3b3998.chunk.js.map