(this["webpackJsonpreact_list-of-goods"]=this["webpackJsonpreact_list-of-goods"]||[]).push([[0],{12:function(t,e,s){},13:function(t,e,s){},15:function(t,e,s){"use strict";s.r(e);var n=s(3),i=s.n(n),o=s(4),c=s(5),r=s(7),l=s(6),a=s(1),u=s.n(a),b=(s(12),s(13),s(0)),h=function(t){var e=t.goods;return Object(b.jsx)("div",{className:"GoodsList__wrapper",children:Object(b.jsx)("ul",{className:"GoodsList",children:e.map((function(t){return Object(b.jsx)("li",{className:"GoodsList__link",children:t},t)}))})})},p=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"],j=function(t){Object(r.a)(s,t);var e=Object(l.a)(s);function s(){var t;Object(o.a)(this,s);for(var n=arguments.length,i=new Array(n),c=0;c<n;c++)i[c]=arguments[c];return(t=e.call.apply(e,[this].concat(i))).state={goods:p,visibleList:!1,isReversed:!1,sortByAlphabet:!1,sortByLength:!1,limit:1},t.adderList=function(){t.setState((function(t){return{visibleList:!t.visibleList}}))},t.reverseList=function(){t.setState((function(t){return{isReversed:!t.isReversed}}))},t.sortList=function(){t.setState({sortByAlphabet:!0,sortByLength:!1})},t.sortByLength=function(){t.setState({sortByLength:!0,sortByAlphabet:!1})},t.reset=function(){t.setState({isReversed:!1,sortByAlphabet:!1,sortByLength:!1})},t.changeLimit=function(e){t.setState({limit:+e.target.value})},t.selectReset=function(){t.setState({limit:1})},t}return Object(c.a)(s,[{key:"render",value:function(){var t=this.state,e=t.goods,s=t.visibleList,n=t.isReversed,i=t.sortByAlphabet,o=t.sortByLength,c=t.limit,r=e.filter((function(t){return t.length>=c}));return i&&r.sort((function(t,e){return t.localeCompare(e)})),o&&r.sort((function(t,e){return t.length-e.length})),n&&r.reverse(),Object(b.jsxs)("div",{className:"App",children:[Object(b.jsx)("h1",{className:"App__title",children:"Goods list"}),!s&&Object(b.jsx)("button",{type:"button",onClick:this.adderList,className:"App__button Button__start",children:"Start"}),s&&Object(b.jsx)(h,{goods:r}),Object(b.jsxs)("div",{className:"App__buttons",children:[Object(b.jsx)("button",{type:"button",onClick:this.reverseList,className:"App__button",children:"Reverse"}),Object(b.jsx)("button",{type:"button",onClick:this.sortList,className:"App__button",children:"Sort alphabetically"}),Object(b.jsx)("button",{type:"button",onClick:this.sortByLength,className:"App__button",children:"Sort by length"}),Object(b.jsx)("button",{type:"button",onClick:this.reset,className:"App__button Button__reset",children:"Reset"})]}),Object(b.jsxs)("form",{className:"App__form",children:[Object(b.jsxs)("select",{value:c,onChange:this.changeLimit,className:"App__select",children:[Object(b.jsx)("option",{value:"1",children:"1"}),Object(b.jsx)("option",{value:"2",children:"2"}),Object(b.jsx)("option",{value:"3",children:"3"}),Object(b.jsx)("option",{value:"4",children:"4"}),Object(b.jsx)("option",{value:"5",children:"5"}),Object(b.jsx)("option",{value:"6",children:"6"}),Object(b.jsx)("option",{value:"7",children:"7"}),Object(b.jsx)("option",{value:"8",children:"8"}),Object(b.jsx)("option",{value:"9",children:"9"}),Object(b.jsx)("option",{value:"10",children:"10"})]}),Object(b.jsx)("button",{type:"button",onClick:this.selectReset,className:"App__button Button__reset",children:"Reset select"})]})]})}}]),s}(u.a.Component);i.a.render(Object(b.jsx)(j,{}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.5fcb33e5.chunk.js.map