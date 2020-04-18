(this.webpackJsonpgoal_tracker=this.webpackJsonpgoal_tracker||[]).push([[0],{32:function(e,t,a){e.exports=a(66)},37:function(e,t,a){},38:function(e,t,a){},63:function(e,t,a){},64:function(e,t,a){},65:function(e,t,a){},66:function(e,t,a){"use strict";a.r(t);var l=a(0),n=a.n(l),r=a(28),c=a.n(r),o=(a(37),a(38),a(13)),s=a(2),i=a(11),m=a(9);var u=function(e){var t=n.a.useState("Home"),a=Object(s.a)(t,2),l=a[0],r=a[1],c=(Object(i.f)(),n.a.useRef(null)),u=n.a.useRef(null);return n.a.createElement(n.a.Fragment,null,n.a.createElement("nav",{id:"sidebar"},n.a.createElement("div",{class:"sidebar-header"},n.a.createElement("h3",null,"Goal Tracker")),n.a.createElement("ul",{class:"list-unstyled components"},n.a.createElement("div",{class:"text-center"},n.a.createElement("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}},n.a.createElement("input",{type:"file",accept:"image/*",onChange:function(e){var t=Object(s.a)(e.target.files,1)[0];if(t){var a=new FileReader,l=c.current;l.file=t,a.onload=function(e){l.src=e.target.result},a.readAsDataURL(t)}},ref:u,style:{display:"none"}}),n.a.createElement("div",{style:{height:"180px",width:"180px"},onClick:function(){return u.current.click()}},n.a.createElement("img",{src:"https://pickaface.net/gallery/avatar/20151109_144853_2380_sample.png",class:"avatar rounded-circle img-thumbnail",ref:c,alt:"avatar",style:{width:"100%",height:"100%",position:"acsolute"}})),"Click to upload Image"),n.a.createElement("li",{className:"Home"===l?"active":""},n.a.createElement(m.b,{to:"/home",onClick:function(){return r("Home")}},"Home")),n.a.createElement("li",{className:"Search"===l?"active":""},n.a.createElement(m.b,{to:"/search",onClick:function(){return r("Search")}},"Search")),n.a.createElement("li",{className:"Dashboard"===l?"active":""},n.a.createElement(m.b,{to:"/dashboard",onClick:function(){return r("Dashboard")}},"Dashboard")),n.a.createElement("li",{className:"Settings"===l?"active":""},n.a.createElement(m.b,{to:"/settings",onClick:function(){return r("Settings")}},"Settings")),n.a.createElement("li",{className:"Login"===l?"active":""},n.a.createElement(m.b,{to:"/login",onClick:function(){return r("Login")}},"Login")),n.a.createElement("li",{className:"Logout"===l?"active":""},n.a.createElement(m.b,Object(o.a)({to:"/login",onClick:function(){return r("Login")}},"onClick",(function(){localStorage.removeItem("userEmail"),alert("you have logged out!")})),"Logout"))))))},d=a(1),p=a.n(d),f=a(3);a(45);var g=function(e){var t={marginBottom:"5px"};return n.a.createElement("div",{class:"card",style:{width:"18rem",boxShadow:"3px 3px 3px 3px #888888",fontFamily:"Antic"}},n.a.createElement("div",{class:"card-body d-flex flex-column"},n.a.createElement("div",null,n.a.createElement("img",{style:{margin:"0px",padding:"10px"},src:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.flt4Xq9M4mMny9LVm2SwWgHaHa%26pid%3DApi&f=1",class:"rounded-circle mr-3",height:"170px",width:"170px",alt:"avatar"})),n.a.createElement("div",null,n.a.createElement("h4",{style:t,class:"card-title font-weight-bold mb-2"},e.result),n.a.createElement("button",{style:t,type:"button",ref:e.btn,onClick:e.addFollower,class:"btn btn-primary "},"Follow"))))},E=a(6),h=a.n(E);var b=function(e){var t=Object(l.useState)(""),a=Object(s.a)(t,2),r=a[0],c=a[1],o=Object(l.useState)(!1),i=Object(s.a)(o,2),m=i[0],u=i[1],d=Object(l.useState)(""),E=Object(s.a)(d,2),b=E[0],v=E[1],y=Object(l.useState)(""),x=Object(s.a)(y,2),w=(x[0],x[1],Object(l.useRef)()),O={width:"20%",padding:"0px"},j={width:"70%"},S={width:"70%"},k={display:"flex",flexDirection:"row",marginTop:"10px"},N=Object(l.useState)(""),C=Object(s.a)(N,2),F=C[0],D=C[1],L=Object(l.useState)([]),R=Object(s.a)(L,2),G=R[0],T=R[1];function A(e){return I.apply(this,arguments)}function I(){return(I=Object(f.a)(p.a.mark((function e(t){var a,l,n,r;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.target.value,console.log(a),e.next=4,h.a.get("/api/allusers");case 4:l=e.sent,n=l.data,console.log(n),a.length>=1&&a.length<=2&&n.forEach((function(e){console.log("[name received]",e.firstName),G.push(e.firstName)})),console.log(G),a.length>1?(console.log("entering this loop"),r=G.filter((function(e){return 0==e.indexOf(a)})),console.log("[new list received ]",r),D(a),v(a),T(r)):(D(a),T([]));case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function U(){return B.apply(this,arguments)}function B(){return(B=Object(f.a)(p.a.mark((function e(){var t;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("[input Received]",F),e.next=3,h.a.get("/api/user/".concat(F));case 3:t=e.sent,console.log("[user received ]",t),u(!0),c(t.data[0].firstName),v(t.data[0]._id),T([]),D("");case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function J(){return(J=Object(f.a)(p.a.mark((function e(){var t,a,l;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=JSON.parse(localStorage.getItem("userEmail")),console.log("[input Received]",b),a={id:b,userid:t.id},console.log("[object to be posted]",a),l=h.a.post("/api/addFollowing",a),console.log("[Added to following]",l);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return m?n.a.createElement(n.a.Fragment,null,n.a.createElement("div",null,n.a.createElement("form",{style:k},n.a.createElement("input",{type:"text",style:j,onChange:A,placeholder:"Search",value:F,"aria-label":"Search"}),n.a.createElement("button",{class:"btn btn-primary",style:O,onClick:U,type:"button"},"Search")),n.a.createElement("ul",null,G.map((function(e){return n.a.createElement("li",{class:"list-group-item",style:S,onClick:function(){return D(e)}},e)}))),n.a.createElement("div",null,n.a.createElement(g,{result:r,btn:w,addFollower:function(){return J.apply(this,arguments)}})))):n.a.createElement(n.a.Fragment,null,n.a.createElement("div",null,n.a.createElement("form",{style:k},n.a.createElement("input",{class:"form-control",style:j,type:"text",onChange:A,placeholder:"Search",value:F,"aria-label":"Search"}),n.a.createElement("button",{class:"btn btn-primary",onClick:U,style:O,type:"button"},"Search")),n.a.createElement("ul",{style:{padding:"0px",margin:"0px"}},G.map((function(e){return n.a.createElement("li",{class:"list-group-item",style:S,onClick:function(){return D(e)}},e)})))))},v=(a(63),a(6));var y=function(e){var t=Object(l.useState)(""),a=Object(s.a)(t,2),r=a[0],c=a[1],o=Object(l.useState)(""),m=Object(s.a)(o,2),u=m[0],d=m[1],g=Object(i.e)();function E(){return(E=Object(f.a)(p.a.mark((function e(t){var a,l,n;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),a={email:r,password:u},e.next=4,v.post("http://localhost:5000/api/checkUser",a);case 4:l=e.sent,console.log("response",l.data.status),"success"===l.data.status?(alert("login successful"),n={email:r,id:l.data.id},localStorage.setItem("userEmail",JSON.stringify(n)),g.push("/home")):alert("wrong email/password");case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return n.a.createElement("header",{className:"header"},n.a.createElement("div",{className:"row",id:"headerRow"},n.a.createElement("h1",{className:"col-4",id:"title"},"Goal Tracker"),n.a.createElement("div",{className:"col-4"}),n.a.createElement("form",{className:"col-4"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-md-4"},n.a.createElement("input",{type:"text",value:r,onChange:function(e){return c(e.target.value)},className:"form-control",id:"email",placeholder:"email"})),n.a.createElement("div",{className:"col-md-4"},n.a.createElement("input",{type:"text",value:u,onChange:function(e){return d(e.target.value)},className:"form-control",id:"password",placeholder:"password"})),n.a.createElement("div",{className:"col-4"},n.a.createElement("button",{value:"Submit",onClick:function(e){return E.apply(this,arguments)},className:"btn btn-primary",id:"login-Btn"},"Login"))))))},x=Object(l.createContext)(),w=function(e){var t=Object(l.useState)("none"),a=Object(s.a)(t,2),r=a[0],c=a[1];return n.a.createElement(x.Provider,{value:[r,c]},e.children)},O=a(6);var j=function(){var e=Object(l.useState)(""),t=Object(s.a)(e,2),a=t[0],r=t[1],c=Object(l.useState)(""),o=Object(s.a)(c,2),i=o[0],m=o[1],u=Object(l.useState)(""),d=Object(s.a)(u,2),g=d[0],E=d[1],h=Object(l.useState)(""),b=Object(s.a)(h,2),v=b[0],y=b[1],x=Object(l.useState)(""),w=Object(s.a)(x,2),j=w[0],S=w[1];function k(){return(k=Object(f.a)(p.a.mark((function e(t){var l,n;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),console.log("sending data to server..."),l={firstName:a,lastName:i,email:g,password:v},console.log("new user:",l),j===l.password){e.next=8;break}alert(" passwords do not match "),e.next=13;break;case 8:if(j!=l.password){e.next=13;break}return e.next=11,O.post("/api/createUser",l);case 11:n=e.sent,alert("created user",n);case 13:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return n.a.createElement("div",{className:"container",id:"signUpForm"},n.a.createElement("h2",null," Sign Up"),n.a.createElement("hr",null),n.a.createElement("form",null,n.a.createElement("div",{className:"form-row"},n.a.createElement("div",{className:"form-group col-md-6"},n.a.createElement("label",{for:"inputFirstName"},"First Name"),n.a.createElement("input",{type:"text",value:a,onChange:function(e){return r(e.target.value)},className:"form-control",id:"inputFirstName",placeholder:"Chris"})),n.a.createElement("div",{className:"form-group col-md-6"},n.a.createElement("label",{for:"inputLastName"},"Last Name"),n.a.createElement("input",{type:"text",value:i,onChange:function(e){return m(e.target.value)},className:"form-control",id:"inputLastName",placeholder:"Smith"}))),n.a.createElement("div",{className:"form-group"},n.a.createElement("label",{for:"inputEmail"},"Email"),n.a.createElement("input",{type:"email",value:g,onChange:function(e){return E(e.target.value)},className:"form-control",id:"inputEmail",placeholder:"chrissmith@gmail.com"})),n.a.createElement("div",{className:"form-row"},n.a.createElement("div",{className:"form-group col-md-6"},n.a.createElement("label",{for:"inputPassword"},"Password"),n.a.createElement("input",{type:"password",value:v,onChange:function(e){return y(e.target.value)},className:"form-control",id:"inputPassword",placeholder:""})),n.a.createElement("div",{className:"form-group col-md-6"},n.a.createElement("label",{for:"inputPassword2"},"Confirm Password"),n.a.createElement("input",{type:"password",value:j,onChange:function(e){return S(e.target.value)},className:"form-control",id:"inputPassword2",placeholder:""}))),n.a.createElement("button",{onClick:function(e){return k.apply(this,arguments)},className:"btn btn-primary",id:"signUp-Btn"},"Sign Up")))};var S=function(e){return n.a.createElement(n.a.Fragment,null,n.a.createElement(y,null),n.a.createElement(j,null))};a(64);var k=function(){var e={width:"100%",margin:"10px"},t={fontFamily:"Pacifico",fontSize:"x-large",textAlign:"left",padding:"10px",margin:"0px"},a={padding:"5px"},r={border:"solid  thin grey ",width:"80%",display:"block",margin:"auto",marginBottom:"5px",padding:"5px"},c={fontWeight:"bold",margin:"0px"},o={textAlign:"left",margin:"0px",fontSize:"small"},i={marginBottom:"0px",bottom:"-20px",width:"100%",borderTop:"1px solid #BDBDBD",padding:"10px",button:{fontFamily:"Pacifico",backgroundColor:"Transparent",backgroundRepeat:"no-repeat",border:"none",cursor:"pointer",overflow:"hidden",outline:"none"},input:{borderRadius:"5px",fontSize:"15px"}},m={borderStyle:" groove",borderRadius:"5px",textAlign:"left",display:"block",margin:"auto",marginLeft:"10%",marginBottom:"10px",fontSize:"smaller",width:"fit-content",padding:"5px"},u={margin:"0px"},d={margin:"0px",float:"right",fontSize:"small",paddingLeft:"5px"},g=Object(l.useState)(""),E=Object(s.a)(g,2),b=E[0],v=(E[1],Object(l.useState)([])),y=Object(s.a)(v,2),x=y[0],w=y[1];function O(){return(O=Object(f.a)(p.a.mark((function e(t){var a,l;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={email:t},e.next=3,h.a.post("/api/getPosts",a);case 3:l=e.sent,console.log("front end receiving posts: ",l),w(l.data);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(l.useEffect)((function(){!function(e){O.apply(this,arguments)}(JSON.parse(localStorage.getItem("userEmail")).email)}),[]),n.a.createElement("div",null,x.map((function(l){return n.a.createElement("div",{class:"card",style:e},n.a.createElement("div",{style:l},n.a.createElement("h5",{style:t},l.firstName)),n.a.createElement("div",{style:a},n.a.createElement("div",null,l.goals.map((function(e){return n.a.createElement("div",{style:r},n.a.createElement("h6",{style:c},e.title),n.a.createElement("p",{style:o},e.description))}))),n.a.createElement("div",{class:"input-group mb-3",style:i},n.a.createElement("input",{style:i.input,value:b,type:"text",id:"input",class:"form-control no-border",placeholder:"Add a comment...","aria-label":"comment","aria-describedby":"basic-addon2"}),n.a.createElement("button",{style:i.button,clickFocus:!1,class:"btn",type:"button"},"post"))),n.a.createElement("div",{style:a},l.comments.map((function(e){return n.a.createElement("div",{style:m},n.a.createElement("h5",{style:u},e.name,n.a.createElement("p",{style:d},e.body)))}))))})))},N=a(6);var C=function(){var e={borderStyle:"groove",marginBotton:"5px",padding:"3px"},t={float:"left",cursor:"pointer"},a={float:"right",fontSize:"small",cursor:"pointer"},r=Object(l.useState)([]),c=Object(s.a)(r,2),o=c[0],i=c[1],m=Object(l.useState)([]),u=Object(s.a)(m,2),d=u[0],g=u[1];function E(e){return h.apply(this,arguments)}function h(){return(h=Object(f.a)(p.a.mark((function e(t){var a,l,n,r,c;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={email:t},e.next=3,N.post("/api/getUserGoals",a);case 3:l=e.sent,n=l.data.goals,r=n.filter((function(e){return!1===e.completed})),console.log("incompleted goals",r),i(r),c=n.filter((function(e){return!0===e.completed})),console.log("completed goals",c),g(c);case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function b(){return(b=Object(f.a)(p.a.mark((function e(t){var a,l;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={id:t},e.next=3,N.post("/api/completeGoal",a);case 3:l=e.sent,console.log("Update goal complete",l),E(JSON.parse(localStorage.getItem("userEmail")).email);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function v(){return(v=Object(f.a)(p.a.mark((function e(t){var a,l;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={id:t},e.next=3,N.post("http://localhost:5000/api/undoGoal",a);case 3:l=e.sent,console.log("Undo goal complete",l),E(JSON.parse(localStorage.getItem("userEmail")).email);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(l.useEffect)((function(){var e=JSON.parse(localStorage.getItem("userEmail"));e.email?(console.log("logged in!",e.email),E(e.email)):console.log("logged out!")}),[]),n.a.createElement("div",null,n.a.createElement("div",{class:"card",style:{width:"100%",margin:"10px"}},n.a.createElement("div",{class:"card-body"},n.a.createElement("h5",{class:"card-title text-center"},"Today's Goals"),o.map((function(a){return n.a.createElement("h6",{style:e,key:a.id},n.a.createElement("input",{type:"checkbox",checked:!1,onClick:function(e){!function(e){b.apply(this,arguments)}(a._id)},style:t}),a.title)})),d.map((function(l){return n.a.createElement("h6",{style:e,key:l.id},n.a.createElement("i",{class:"fa fa-check","aria-hidden":"true",style:t}),n.a.createElement("p",{onClick:function(e){!function(e){v.apply(this,arguments)}(l._id)},style:a},"undo"),l.title)})))))};var F=function(){var e={borderStyle:"groove",borderRadius:"5px",marginBotton:"5px",padding:"3px"};return n.a.createElement("div",{class:"card",style:{width:"100%",margin:"10px"}},n.a.createElement("h5",{class:"card-title",style:{paddingLeft:"20px",paddingTop:"10px",paddingBottom:"0px",textAlign:"left"}},n.a.createElement("i",{class:"fas fa-comment-alt"}),"   Notifications"),n.a.createElement("div",{class:"card-body"},n.a.createElement("p",{style:e},"Commented By Chris on your goal Good Job On Your Goals john"),n.a.createElement("p",{style:e},"Commented By Chris on your goal Good Job On Your Goals john")))},D=a(31),L=a(6);var R=function(e){var t=Object(l.useState)(!0),a=Object(s.a)(t,2),r=a[0],c=a[1],i=Object(l.useState)({title:"",description:"",StartDate:"",EndDate:""}),m=Object(s.a)(i,2),u=m[0],d=m[1],g=Object(l.useState)(""),E=Object(s.a)(g,2),h=E[0],b=E[1];Object(l.useEffect)((function(){var e,t=JSON.parse(localStorage.getItem("userEmail"));t.email?(console.log("logged in!",t.email),e=t.email,b(e)):console.log("logged out!")}),[]);var v={margin:"3px"},y={display:"flex",flexDirection:"column",width:"100%",margin:"15px auto",justifyContent:"center",alignItems:"center",button:{width:"30%"},fontFamily:"Comic Neue"};function x(e){var t=e.target,a=t.id,l=t.value;d(Object(D.a)({},u,Object(o.a)({},a,l)))}function w(){return(w=Object(f.a)(p.a.mark((function e(){var t,a;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("[Goal set by User]",u),t={email:h,goal:u},console.log("new User Goal",t),e.next=5,L.post("/api/createGoal",t);case 5:a=e.sent,console.log("new goal",a),c(!1);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return r===e.show?n.a.createElement("div",{className:"modal-wrapper",style:{position:"fixed",top:0,left:0,bottom:0,right:0}},n.a.createElement("div",{className:"modal-backdrop",style:{position:"fixed",top:0,left:0,bottom:0,right:0,zIndex:100,backgroundColor:"rgba(0,0,0,0.4)"}}),n.a.createElement("div",{className:"modal-box",style:{position:"relative",top:"50%",left:"50%",transform:"translate(-50%,-50%)",height:"70%",width:"70%",overflowY:"auto",backgroundColor:"white",boxShadow:"0 0 10px rgba(0,0,0,0.25)",zIndex:101,padding:"40px",marginTop:"10px",marginBottom:"10px"}},n.a.createElement("div",{class:"close",onClick:e.closeGoal,style:{position:"absolute",top:0,right:"14px",fontSize:"23px",transform:"rotate(45deg)",cursor:"pointer",color:"black"}},"+"),n.a.createElement("div",{class:"row",style:{height:"100%",flex:1,flexDirection:"columns"}},n.a.createElement("div",{class:"col-12 col-sm-5",style:{fontFamily:"Comic Neue",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}},n.a.createElement("h2",null,'"If you want to be happy, set a goal that commands your thoughts, liberates your energy and inspires your hopes."'),n.a.createElement("h3",null,"\u2014Andrew Carnegie")),n.a.createElement("hr",null),n.a.createElement("div",{class:"col-12 col-sm-5",style:{borderColor:"#424242",borderStyle:"solid",borderRadius:"5px",marginTop:"4px",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",boxShadow:"3px 3px 3px #888888"}},n.a.createElement("h3",{style:{fontFamily:"Comic Neue"}},"Set your Goal Today"),n.a.createElement("form",null,n.a.createElement("div",{class:"form-row",style:y},n.a.createElement("div",{class:"col"},n.a.createElement("input",{style:v,onChange:x,type:"text",id:"title",class:"form-control",placeholder:"Enter Your Goal Title"})),n.a.createElement("div",{class:"col"},n.a.createElement("textarea",{style:v,type:"text",onChange:x,class:"form-control",id:"description",placeholder:"Description"})),n.a.createElement("div",{class:"col"},n.a.createElement("label",null,"Start Date"),n.a.createElement("input",{style:v,onChange:x,type:"date",id:"StartDate",name:"Start Date"})),n.a.createElement("div",{class:"col"},n.a.createElement("label",null,"End Date"),n.a.createElement("input",{style:v,onChange:x,type:"date",id:"EndDate",name:"End Date"}))),n.a.createElement("button",{type:"button",onClick:function(){return w.apply(this,arguments)},style:y.button,class:"btn btn-outline-dark"},"Add")))))):null};var G=function(){var e=Object(l.useState)(!1),t=Object(s.a)(e,2),a=t[0],r=t[1];function c(){return(c=Object(f.a)(p.a.mark((function e(){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.log("[Add New GOAL button pressed]",a),r(!0);case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function o(){return(o=Object(f.a)(p.a.mark((function e(){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r(!1);case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return n.a.createElement("div",null,n.a.createElement("div",null,n.a.createElement("h3",{style:{width:"100%",height:"50px",textAlign:"center",backgroundColor:"rgb(230, 126, 34)",color:"white",fontFamily:"'Noto Sans', sans-serif",borderStyle:"groove"}},"Home Page")),n.a.createElement("div",{class:"row",style:{flex:1,flexDirection:"row",padding:"10px",margin:"0px"}},n.a.createElement("div",{class:"col-12 col-sm-12 col-md-7",style:{padding:"0",margin:"4px"}},n.a.createElement(k,null)),n.a.createElement("div",{class:"col-12 col-sm-12 col-md-4",style:{padding:"0",margin:"4px"}},n.a.createElement(C,null),n.a.createElement("button",{class:"btn btn-light",onClick:function(){return c.apply(this,arguments)},style:{display:"block",marginLeft:"auto",marginRight:"auto"}},n.a.createElement("i",{class:"fas fa-plus"}),"   Add New Goal"),n.a.createElement(F,null),n.a.createElement(R,{show:a,closeGoal:function(){return o.apply(this,arguments)}}))))},T=a(6);var A=function(e){var t=JSON.parse(localStorage.getItem("userEmail"));t?console.log("logged in!",t):console.log("logged out!");var a=Object(l.useState)([]),r=Object(s.a)(a,2),c=(r[0],r[1]),o=Object(l.useState)([]),i=Object(s.a)(o,2),m=i[0],u=i[1],d=Object(l.useState)([]),g=Object(s.a)(d,2),E=g[0],h=g[1],b=Object(l.useState)([]),v=Object(s.a)(b,2),y=v[0],x=v[1];function w(){return(w=Object(f.a)(p.a.mark((function e(){var a,l,n,r;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("calling axios.get for email: ",t),e.next=3,T.get("/api/userData/".concat(t));case 3:if(!(a=e.sent).error){e.next=7;break}return console.log("error getting from db",a.error),e.abrupt("return");case 7:c(a),console.log("Retrieved user data:",a),l=(l=a.data.firstName).charAt(0).toUpperCase()+l.slice(1),u(l),n=(n=a.data.lastName).charAt(0).toUpperCase()+n.slice(1),h(n),console.log("User first:",l,"user last",n),r=a.data.password,x(r);case 18:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(l.useRef)(null),Object(l.useRef)(null),Object(l.useEffect)((function(){!function(){w.apply(this,arguments)}()}),[]),n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{class:"d-flex flex-column h-100"},n.a.createElement("div",{class:"row"},n.a.createElement("div",{class:"col-md-8 col-sm-6 col-xs-12 personal-info"},n.a.createElement("div",{class:"alert alert-info alert-dismissable",style:{display:"none"}},n.a.createElement("a",{class:"panel-close close","data-dismiss":"alert"},"\xd7"),"This is an ",n.a.createElement("strong",null,"alert")," to show important messages to the user."),n.a.createElement("h3",null,"Personal info"),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("div",{class:"form-group"},n.a.createElement("div",{class:"row"},n.a.createElement("label",{class:"col-lg-3 control-label"},"First name:"),n.a.createElement("div",{class:"col-lg-8"},n.a.createElement("input",{class:"form-control",value:m,type:"text"})))),n.a.createElement("div",{class:"form-group"},n.a.createElement("div",{class:"row"},n.a.createElement("label",{class:"col-lg-3 control-label"},"Last name:"),n.a.createElement("div",{class:"col-lg-8"},n.a.createElement("input",{class:"form-control",value:E,type:"text"})))),n.a.createElement("div",{class:"form-group"},n.a.createElement("div",{class:"row"},n.a.createElement("label",{class:"col-lg-3 control-label"},"Email:"),n.a.createElement("div",{class:"col-lg-8"},n.a.createElement("input",{class:"form-control",value:t,type:"text"})))),n.a.createElement("div",{class:"form-group"},n.a.createElement("div",{class:"row"},n.a.createElement("label",{class:"col-lg-3 control-label"},"Username:"),n.a.createElement("div",{class:"col-lg-8"},n.a.createElement("input",{class:"form-control",value:"janeuser",type:"text"})))),n.a.createElement("div",{class:"form-group"},n.a.createElement("div",{class:"row"},n.a.createElement("label",{class:"col-lg-3 control-label"},"Password:"),n.a.createElement("div",{class:"col-lg-8"},n.a.createElement("input",{class:"form-control",value:y,type:"password"})))),n.a.createElement("div",{class:"form-group"},n.a.createElement("div",{class:"row"},n.a.createElement("label",{class:"col-lg-3 control-label"},"Confirm password:"),n.a.createElement("div",{class:"col-lg-8"},n.a.createElement("input",{class:"form-control",value:y,type:"password"})))),n.a.createElement("div",{class:"form-group"},n.a.createElement("div",{class:"row"},n.a.createElement("label",{class:"col-lg-3 control-label"}),n.a.createElement("div",{class:"col-lg-8"},n.a.createElement("input",{class:"btn btn-primary",value:"Save Changes",type:"button"}),n.a.createElement("span",null),n.a.createElement("input",{class:"btn btn-default",value:"Cancel",type:"reset"}))))))))};var I=function(){return n.a.createElement("div",{class:"jumbotron jumbotron-fluid fill",style:{backgroundImage:"url(https://peakvisor.com/img/news/mount_fuji.jpg)",backgroundSize:"cover",backgroundPosition:"center",position:"relative",height:"30vh"}},n.a.createElement("div",{class:"container"},n.a.createElement("div",{class:"d-flex justify-content-between",style:{maxHeight:"20vh",position:"absolute",left:"0px",bottom:"0px"}},n.a.createElement("div",{class:"avatar"},n.a.createElement("img",{src:"https://www.pavilionweb.com/wp-content/uploads/2017/03/man-300x300.png",alt:"Circle Image",style:{maxWidth:"20vh",height:"auto",borderRadius:"50%",verticalAlign:"left",boxShadow:"0 5px 15px -8px rgba(0,0,0,.24), 0 8px 10px -5px rgba(0,0,0,.2)",border:"3px solid white"}})))))};var U=function(e){var t={display:"block",marginLeft:"auto",marginRight:"auto"};return n.a.createElement("div",{class:"card",style:{width:"100%",margin:"10px",marginTop:"30px"}},n.a.createElement("div",{class:"card-body"},n.a.createElement("br",null),n.a.createElement("button",{class:"btn btn-light",style:t,onClick:e.executeScrollToFollowers},n.a.createElement("i",{class:"fas fa-users"}),"   Followers"),n.a.createElement("br",null),n.a.createElement("button",{class:"btn btn-light",style:t,onClick:e.executeScrollToFollowing},n.a.createElement("i",{class:"fas fa-users"}),"   Following")))},B=a(6);var J=function(){var e={width:"100%",margin:"10px",marginLeft:"25px",marginRight:"25px"},t={borderStyle:"groove",marginBottom:"5px",padding:"3px"},a={float:"left"},r={float:"right",fontSize:"small",cursor:"pointer",margin:"0px"},c=Object(l.useState)([]),o=Object(s.a)(c,2),i=o[0],m=o[1],u=Object(l.useState)([]),d=Object(s.a)(u,2),g=d[0],E=d[1];function h(e){return b.apply(this,arguments)}function b(){return(b=Object(f.a)(p.a.mark((function e(t){var a,l,n,r,c;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={email:t},e.next=3,B.post("http://localhost:5000/api/getUserGoals",a);case 3:l=e.sent,n=l.data.goals,r=n.filter((function(e){return!1===e.completed})),console.log("incompleted goals",r),m(r),c=n.filter((function(e){return!0===e.completed})),console.log("completed goals",c),E(c);case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function v(){return(v=Object(f.a)(p.a.mark((function e(t){var a,l;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={id:t},e.next=3,B.post("/api/completeGoal",a);case 3:l=e.sent,console.log("Update goal complete",l),h(JSON.parse(localStorage.getItem("userEmail")).email);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function y(){return(y=Object(f.a)(p.a.mark((function e(t){var a,l;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={id:t},e.next=3,B.post("/api/undoGoal",a);case 3:l=e.sent,console.log("Undo goal complete",l),h(JSON.parse(localStorage.getItem("userEmail")).email);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(l.useEffect)((function(){var e=JSON.parse(localStorage.getItem("userEmail"));e.email?(console.log("logged in!",e.email),h(e.email)):console.log("logged out!")}),[]),n.a.createElement("div",{class:"row",style:{flex:1,flexDirection:"row",padding:"10px",margin:"0px",marginTop:"45px",marginLeft:"0px"}},n.a.createElement("div",{class:"card col-12 col-lg-3 col-md-6",style:e},n.a.createElement("div",{class:"card-body"},n.a.createElement("h5",{class:"card-title text-center"},"Today's Goals"),i.map((function(e){return n.a.createElement("h6",{style:t,key:e._id},n.a.createElement("input",{onClick:function(t){!function(e){v.apply(this,arguments)}(e._id)},type:"checkbox",checked:!1,style:a}),e.title)})))),n.a.createElement("div",{class:"card col-12 col-lg-3 col-md-6",style:e},n.a.createElement("div",{class:"card-body"},n.a.createElement("h5",{class:"card-title text-center"},"Completed Goals"),g.map((function(e){return n.a.createElement("h6",{style:t,key:e._id},n.a.createElement("i",{class:"fa fa-check","aria-hidden":"true",style:a}),e.title,n.a.createElement("p",{onClick:function(t){!function(e){y.apply(this,arguments)}(e._id)},style:r},"undo"))})))),n.a.createElement("div",{class:"card col-12 col-lg-3 col-md-6",style:e},n.a.createElement("div",{class:"card-body"},n.a.createElement("h5",{class:"card-title text-center"},"Habits Goals"),n.a.createElement("h6",{style:t},"  ",n.a.createElement("i",{class:"far fa-square"}),"   Eat"),n.a.createElement("h6",{style:t},"  ",n.a.createElement("i",{class:"far fa-square"}),"   Sleep"),n.a.createElement("h6",{style:t},"  ",n.a.createElement("i",{class:"far fa-square"}),"   Study"),n.a.createElement("h6",{style:t},"  ",n.a.createElement("i",{class:"far fa-square"}),"   Excercise"),n.a.createElement("h6",{style:t},"  ",n.a.createElement("i",{class:"far fa-square"}),"   Repeat"),n.a.createElement("h6",{style:t},"  ",n.a.createElement("i",{class:"far fa-square"}),"   Eat"),n.a.createElement("h6",{style:t},"  ",n.a.createElement("i",{class:"far fa-square"}),"   Sleep"),n.a.createElement("h6",{style:t},"  ",n.a.createElement("i",{class:"far fa-square"}),"   Study"),n.a.createElement("h6",{style:t},"  ",n.a.createElement("i",{class:"far fa-square"}),"   Excercise"),n.a.createElement("h6",{style:t}," ",n.a.createElement("i",{class:"fas fa-check-square"}),"   Repeat"))))};var P=function(){return n.a.createElement("div",{class:"row",style:{flex:1,flexDirection:"row",padding:"10px",margin:"20px",marginTop:"45px",marginLeft:"0px"}},n.a.createElement("div",{class:"card col-12",style:{width:"100%",margin:"10px"}},n.a.createElement("div",{class:"card-body"},"Followers",n.a.createElement("div",{class:"row d-flex justify-content-center mt-2"},n.a.createElement("div",{class:"col-6 col-md-4"},n.a.createElement("div",{class:"card"},n.a.createElement("div",{class:"card-header"},n.a.createElement("img",{class:"rounded-circle",alt:"70x70",src:"https://placehold.it/70x70","data-holder-rendered":"true"})),n.a.createElement("div",{class:"card-body"},n.a.createElement("h5",{class:"card-title"},"First Last"),n.a.createElement("a",{href:"#",class:"btn btn-primary"},"Follow")))),n.a.createElement("div",{class:"col-6 col-md-4"},n.a.createElement("div",{class:"card"},n.a.createElement("div",{class:"card-header"},n.a.createElement("img",{class:"rounded-circle",alt:"70x70",src:"https://placehold.it/70x70","data-holder-rendered":"true"})),n.a.createElement("div",{class:"card-body"},n.a.createElement("h5",{class:"card-title"},"First Last"),n.a.createElement("a",{href:"#",class:"btn btn-primary"},"Follow")))),n.a.createElement("div",{class:"col-6 col-md-4"},n.a.createElement("div",{class:"card"},n.a.createElement("div",{class:"card-header"},n.a.createElement("img",{class:"rounded-circle",alt:"70x70",src:"https://placehold.it/70x70","data-holder-rendered":"true"})),n.a.createElement("div",{class:"card-body"},n.a.createElement("h5",{class:"card-title"},"First Last"),n.a.createElement("a",{href:"#",class:"btn btn-primary"},"Follow"))))))))};var _=function(){return n.a.createElement("div",{class:"row",style:{flex:1,flexDirection:"row",padding:"10px",margin:"20px",marginTop:"45px",marginLeft:"0px"}},n.a.createElement("div",{class:"card col-12",style:{width:"100%",margin:"10px"}},n.a.createElement("div",{class:"card-body"},"Following",n.a.createElement("div",{class:"row d-flex justify-content-center mt-2"},n.a.createElement("div",{class:"col-6 col-md-4"},n.a.createElement("div",{class:"card"},n.a.createElement("div",{class:"card-header"},n.a.createElement("img",{class:"rounded-circle",alt:"70x70",src:"https://placehold.it/70x70","data-holder-rendered":"true"})),n.a.createElement("div",{class:"card-body"},n.a.createElement("h5",{class:"card-title"},"First Last")))),n.a.createElement("div",{class:"col-6 col-md-4"},n.a.createElement("div",{class:"card"},n.a.createElement("div",{class:"card-header"},n.a.createElement("img",{class:"rounded-circle",alt:"70x70",src:"https://placehold.it/70x70","data-holder-rendered":"true"})),n.a.createElement("div",{class:"card-body"},n.a.createElement("h5",{class:"card-title"},"First Last")))),n.a.createElement("div",{class:"col-6 col-md-4"},n.a.createElement("div",{class:"card"},n.a.createElement("div",{class:"card-header"},n.a.createElement("img",{class:"rounded-circle",alt:"70x70",src:"https://placehold.it/70x70","data-holder-rendered":"true"})),n.a.createElement("div",{class:"card-body"},n.a.createElement("h5",{class:"card-title"},"First Last"))))))))},q=(a(65),a(6));var z=function(){var e={flex:1,flexDirection:"row",padding:"10px",margin:"0px"},t={padding:"0",margin:"4px"},a=JSON.parse(localStorage.getItem("userEmail"));a?console.log("logged in!",a):console.log("logged out!");var r=Object(l.useState)([]),c=Object(s.a)(r,2),o=(c[0],c[1]),i=Object(l.useState)([]),m=Object(s.a)(i,2),u=m[0],d=m[1],g=Object(l.useState)([]),E=Object(s.a)(g,2),h=E[0],b=E[1],v=Object(l.useRef)(null),y=Object(l.useRef)(null);function x(){return(x=Object(f.a)(p.a.mark((function e(){var t,l,n;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("calling axios.get for email: ",a),e.next=3,q.get("/api/userData/".concat(a));case 3:if(!(t=e.sent).error){e.next=7;break}return console.log("error getting from db",t.error),e.abrupt("return");case 7:o(t),console.log("Retrieved user data:",t),l=(l=t.data.firstName).charAt(0).toUpperCase()+l.slice(1),d(l),n=(n=t.data.lastName).charAt(0).toUpperCase()+n.slice(1),b(n),console.log("User first:",l,"user last",n);case 16:case"end":return e.stop()}}),e)})))).apply(this,arguments)}Object(l.useEffect)((function(){!function(){x.apply(this,arguments)}(),console.log("use effect is called")}),[]);var w=Object(l.useState)(!1),O=Object(s.a)(w,2),j=O[0],S=O[1];function k(){return(k=Object(f.a)(p.a.mark((function e(){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.log("[Add New GOAL button pressed]",j),S(!0);case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function N(){return(N=Object(f.a)(p.a.mark((function e(){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:S(!1);case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return n.a.createElement("div",{style:{scrollBehavior:"smooth"}},n.a.createElement("div",{id:"header"},n.a.createElement("h3",{style:{width:"100%",height:"50px",textAlign:"center",backgroundColor:"rgb(230, 126, 34)",color:"white",fontFamily:"'Noto Sans', sans-serif",borderStyle:"groove",paddingTop:"5px"}},u," ",h)),n.a.createElement("div",{class:"row",style:e},n.a.createElement("div",{class:"col-12 col-md-8",style:t},n.a.createElement(I,null),"     ",n.a.createElement("button",{class:"btn btn-light",onClick:function(){return k.apply(this,arguments)},style:{display:"block",marginLeft:"auto",marginRight:"auto"}},n.a.createElement("i",{class:"fas fa-plus"}),"   Add New Goal")),n.a.createElement("div",{class:"col-12 col-md-3",style:t},n.a.createElement(U,{executeScrollToFollowers:function(){console.log("Calling scroll function",v),window.scrollTo(0,v.current.offsetTop)},executeScrollToFollowing:function(){console.log("Calling scroll function",y),window.scrollTo(0,y.current.offsetTop)}}))),n.a.createElement("div",{class:"row",style:e},n.a.createElement(J,null)),n.a.createElement("div",{class:"row",ref:v,style:e},n.a.createElement(P,null)),n.a.createElement("div",{class:"row",ref:y,style:e},n.a.createElement(_,null)),n.a.createElement(R,{show:j,closeGoal:function(){return N.apply(this,arguments)}}))};var H=function(){var e={ToggleSection:{border:"0px solid lightgreen"},RightSection:{border:"0px solid Purple"}};return n.a.createElement(m.a,null,console.log("App.js Rendering...."),n.a.createElement("div",{className:"App"},n.a.createElement("div",{class:"wrapper"},n.a.createElement("div",{class:"sidebar"}," ",n.a.createElement(u,null)," "),n.a.createElement("div",{class:"container-fluid",style:e.RightSection},n.a.createElement("div",{id:"content",class:"row pt-2"},n.a.createElement("div",{class:"col-1 d-flex justify-content-start pl-0 align-self-baseline",style:e.ToggleSection},n.a.createElement("button",{type:"button",id:"sidebarCollapse",class:"btn btn-info"}," ",n.a.createElement("i",{class:"fas fa-align-left"}))),n.a.createElement("div",{class:"col-11 "},n.a.createElement(w,null,n.a.createElement(i.a,{exact:!0,path:["/","/search"],component:b}),n.a.createElement(i.a,{path:["/login"],component:S}),n.a.createElement(i.a,{path:["/dashboard"],component:z}),n.a.createElement(i.a,{path:["/home"],component:G}),n.a.createElement(i.a,{path:["/settings"],component:A}))))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(H,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[32,1,2]]]);
//# sourceMappingURL=main.faeaf220.chunk.js.map