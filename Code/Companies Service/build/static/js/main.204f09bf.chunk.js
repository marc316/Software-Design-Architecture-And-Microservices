(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{125:function(e,t,a){e.exports=a(286)},130:function(e,t,a){},131:function(e,t,a){},177:function(e,t,a){},184:function(e,t){},186:function(e,t){},224:function(e,t){},225:function(e,t){},286:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),r=a(30),l=a.n(r),i=(a(130),a(17)),o=a(18),c=a(21),m=a(19),u=a(20),d=a(288),h=a(290),p=a(289),g=(a(131),a(14)),v=a(31),E=a(6),y=a(119),f=a(120),w=(a(150),a(151),a(152),a(24)),b=a.n(w),S=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(c.a)(this,Object(m.a)(t).call(this,e))).dropdownItems=[],a.state={service:"",query:"",skiResortCountry:"",skiResortMinPrice:"",skiResortMaxPrice:"",companiesState:"",companiesFounded:"",museumState:"",museumAddress:"",museumCity:"",restaurantState:"",restaurantAddress:"",restaurantCity:"",restaurantType:""},a.handleSearchClick=a.handleSearchClick.bind(Object(g.a)(Object(g.a)(a))),a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this;console.log("Fetching dropdown items..."),this.growl.show({severity:"info",summary:"Info",detail:"Fetching live microservices..."}),fetch("http://western01-gateway-pipeline.mybluemix.net/service/list",{mode:"cors",headers:{"Access-Control-Allow-Origin":"*"},crossDomain:!0,method:"GET"}).then(function(e){return e.json()}).then(function(t){var a=[];console.log("Received dropdown items: ",t.responseBody),e.growl.show({severity:"success",summary:"Success",detail:"Received live microservices"}),t.responseBody&&(1===t.responseBody.YP_SKIRESORT&&a.push({label:"Ski Resorts",value:"skiResort"}),1===t.responseBody.YP_RESTAURANT&&a.push({label:"Restaurants",value:"restaurants"}),1===t.responseBody.YP_MUSEUM&&a.push({label:"Museums",value:"museums"}),1===t.responseBody.YP_COMPANY&&a.push({label:"Fortune Companies",value:"companies"})),a.forEach(function(t){e.dropdownItems.push(t)}),e.forceUpdate()}).catch(function(t){e.growl.show({severity:"error",summary:"Error",detail:"Error fetching microservices"}),console.log("error fetching dropdown: ",t)}),b()({url:"https://wesetern01-auth.mybluemix.net/user/signin",data:{email:"vatsalshah2210@gmail.com",password:"123456"},method:"post"}).then(function(e){console.log("res = ",e)}).catch(function(e){return console.log("Error calling auth API: ",e)})}},{key:"handleSearchClick",value:function(){var e="";"skiResort"===this.state.service?e=e.concat("country="+this.state.skiResortCountry,"&price="+this.state.skiResortMinPrice+"-"+this.state.skiResortMaxPrice+"&resortname="+this.state.query):"restaurants"===this.state.service?e=e.concat("restaurantName="+this.state.query+"&state="+this.state.restaurantState+"&city="+this.state.restaurantCity+"&address="+this.state.restaurantAddress+"&type="+this.state.restaurantType):"museums"===this.state.service?e=e.concat("museumName="+this.state.query+"&state="+this.state.museumState+"&city="+this.state.museumCity+"&address="+this.state.museumCity):"companies"===this.state.service&&(e=e.concat("companiesState="+this.state.companiesState+"&companiesFounded="+this.state.companiesFounded+"&company="+this.state.query)),console.log("searchParam = ",e),window.location="/microservice?serviceName="+this.state.service+"&"+e}},{key:"render",value:function(){var e=this;return s.a.createElement("div",null,s.a.createElement(f.Growl,{ref:function(t){return e.growl=t}}),s.a.createElement("div",{style:{width:"50%",height:"85vh"}},s.a.createElement("div",{style:{position:"relative",top:"40%",left:"50%",width:"100%"}},s.a.createElement("div",{className:"p-grid p-fluid"},s.a.createElement("div",{className:"p-col-12 p-md-8"},s.a.createElement("div",{className:"p-inputgroup"},s.a.createElement("div",{className:"p-col-4 p-md-3",style:{width:"50%"}},s.a.createElement(y.Dropdown,{options:this.dropdownItems,value:this.state.service,onChange:function(t){e.setState({service:t.value}),console.log("service set to ",t.value)},placeholder:"Select service...",style:{maxWidth:"35%"}})),s.a.createElement("div",{className:"p-col-8 p-md-3",style:{width:"100%"}},s.a.createElement(E.InputText,{placeholder:""===this.state.service?"Keywords...":"Name...",value:this.state.query,onChange:function(t){return e.setState({query:t.target.value})}})),s.a.createElement("div",{className:"p-col-2 p-md-2"},s.a.createElement(v.Button,{label:"Search",disabled:""===this.state.service,onClick:this.handleSearchClick}))),"skiResort"===this.state.service?s.a.createElement("span",null,s.a.createElement(E.InputText,{placeholder:"Country...",value:this.state.skiResortCountry,onChange:function(t){return e.setState({skiResortCountry:t.target.value})},style:{width:"30%",marginLeft:"25px"}}),s.a.createElement(E.InputText,{placeholder:"Min. Price $",value:this.state.skiResortMinPrice,onChange:function(t){return e.setState({skiResortMinPrice:t.target.value})},style:{width:"18%"},keyfilter:"int"}),s.a.createElement(E.InputText,{placeholder:"Max. Price $",value:this.state.skiResortMaxPrice,onChange:function(t){return e.setState({skiResortMaxPrice:t.target.value})},style:{width:"18%"},keyfilter:"int"})):null,"companies"===this.state.service?s.a.createElement("span",null,s.a.createElement(E.InputText,{placeholder:"State",value:this.state.companiesState,onChange:function(t){return e.setState({companiesState:t.target.value})},style:{width:"30%",marginLeft:"50px"}}),s.a.createElement(E.InputText,{placeholder:"Founded (year)",value:this.state.companiesFounded,onChange:function(t){return e.setState({companiesFounded:t.target.value})},style:{width:"30%",marginLeft:"0px"}})):null,"museums"===this.state.service?s.a.createElement("span",null,s.a.createElement(E.InputText,{placeholder:"State",value:this.state.museumState,onChange:function(t){return e.setState({museumState:t.target.value})},style:{width:"25%",marginLeft:"50px"}}),s.a.createElement(E.InputText,{placeholder:"Address",value:this.state.museumAddress,onChange:function(t){return e.setState({museumAddress:t.target.value})},style:{width:"25%",marginLeft:"0px"}}),s.a.createElement(E.InputText,{placeholder:"City",value:this.state.museumCity,onChange:function(t){return e.setState({museumCity:t.target.value})},style:{width:"25%",marginLeft:"0px"}})):null,"restaurants"===this.state.service?s.a.createElement("span",null,s.a.createElement(E.InputText,{placeholder:"State",value:this.state.restaurantState,onChange:function(t){return e.setState({restaurantState:t.target.value})},style:{width:"25%",marginLeft:"50px"}}),s.a.createElement(E.InputText,{placeholder:"Address",value:this.state.restaurantAddress,onChange:function(t){return e.setState({restaurantAddress:t.target.value})},style:{width:"22%",marginLeft:"0px"}}),s.a.createElement(E.InputText,{placeholder:"City",value:this.state.restaurantCity,onChange:function(t){return e.setState({restaurantCity:t.target.value})},style:{width:"22%",marginLeft:"0px"}}),s.a.createElement(E.InputText,{placeholder:"Type",value:this.state.restaurantType,onChange:function(t){return e.setState({restaurantType:t.target.value})},style:{width:"25%",marginLeft:"0px"}})):null)))),s.a.createElement("div",null,s.a.createElement("p",null,"Western University")))}}]),t}(s.a.Component),k=a(121),N=a.n(k),C=(a(177),a(122)),x=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(c.a)(this,Object(m.a)(t).call(this,e))).serviceMap=["Ski Resorts","Restaurants","Museums","Fortune Companies"],a.state={params:{},results:[],loading:!0},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=N.a.parse(this.props.location.search);console.log("params = ",t),this.setState({params:t});var a="";"skiResort"===t.serviceName?a="country="+t.country+"&resortname="+t.resortname+"&pricerange="+t.price:"museums"===t.serviceName?a="state="+t.state+"&city="+t.city+"&type="+t.type+"&museumName="+t.museumName:"restaurants"===t.serviceName?a="state="+t.state+"&city="+t.city+"&type="+t.type+"&address="+t.address+"&name="+t.restaurantName:"companies"===t.serviceName&&(a="company="+t.company+"&state="+t.state+"&founded="+t.founded),console.log("searchQuery = ",a);var n={serviceName:t.serviceName,searchParam:a};console.log("body = ",n),b.a.post("http://western01-gateway-pipeline.mybluemix.net/service/search",n).then(function(t){console.log("res = ",t),t.data&&Array.isArray(t.data)&&e.setState({results:t.data.slice(0,500),loading:!1})}).catch(function(t){console.log("Error retrieving results: ",t),e.setState({loading:!1})})}},{key:"render",value:function(){var e=this,t="";return this.state.params&&this.state.params.pricerange&&(t=this.state.params.pricerange.split("-")),s.a.createElement("div",{className:"App"},s.a.createElement("div",{style:{height:"10vh",width:"100%"}},s.a.createElement("button",{className:"button",style:{display:"inline-block",left:"5px"},onClick:function(){return window.location="/"}},"Back"),s.a.createElement("p",{style:{visibility:"hidden",width:"50%",display:"inline-block"}},' Results for "',this.state.params.searchParam,'" in\xa0',this.state.params.country," from $",t[0]," to $",t[1])),this.state.results&&0!==this.state.results.length?s.a.createElement("table",{style:{marginTop:"20px"}},s.a.createElement("thead",null,this.state.params&&"skiResort"===this.state.params.serviceName?s.a.createElement("tr",null,s.a.createElement("th",null,"Resort Name"),s.a.createElement("th",null,"Continent"),s.a.createElement("th",null,"Country"),s.a.createElement("th",null,"Province"),s.a.createElement("th",null,"Altitude (m)"),s.a.createElement("th",null,"Slope Rating (/5)"),s.a.createElement("th",null,"Adult Ticket Price ($)"),s.a.createElement("th",null,"Youth Ticket Price ($)"),s.a.createElement("th",null,"Child Ticket Price ($)")):this.state.params&&"restaurants"===this.state.params.serviceName?s.a.createElement("tr",null,s.a.createElement("th",null,"Restaurant Name"),s.a.createElement("th",null,"City"),s.a.createElement("th",null,"State"),s.a.createElement("th",null,"Address"),s.a.createElement("th",null,"Type"),s.a.createElement("th",null,"Postal Code")):this.state.params&&"museums"===this.state.params.serviceName?s.a.createElement("tr",null,s.a.createElement("th",null,"Museum Name"),s.a.createElement("th",null,"City"),s.a.createElement("th",null,"State"),s.a.createElement("th",null,"Address"),s.a.createElement("th",null,"Website"),s.a.createElement("th",null,"Type")):this.state.params&&"companies"===this.state.params.serviceName?s.a.createElement("tr",null,s.a.createElement("th",null,"Company Name"),s.a.createElement("th",null,"City"),s.a.createElement("th",null,"State"),s.a.createElement("th",null,"Industry"),s.a.createElement("th",null,"Founded"),s.a.createElement("th",null,"Website")):null),s.a.createElement("tbody",null,this.state.results.map(function(t){return e.state.params&&"skiResort"===e.state.params.serviceName?s.a.createElement("tr",{key:t.resortName+t.country,style:{}},s.a.createElement("td",null,t.resortName),s.a.createElement("td",null,t.continent),s.a.createElement("td",null,t.country),s.a.createElement("td",null,t.province),s.a.createElement("td",null,t.altitude),s.a.createElement("td",null,t.slopeRating),s.a.createElement("td",null,t.adultTicketPrice),s.a.createElement("td",null,t.youthTicketPrice),s.a.createElement("td",null,t.childTicketPrice)):e.state.params&&"restaurants"===e.state.params.serviceName?s.a.createElement("tr",{key:Math.random().toString(36).substring(7)},s.a.createElement("td",null,t.name),s.a.createElement("td",null,t.city),s.a.createElement("td",null,t.state),s.a.createElement("td",null,t.address),s.a.createElement("td",null,t.type),s.a.createElement("td",null,t.postalCode)):e.state.params&&"museums"===e.state.params.serviceName?s.a.createElement("tr",{key:Math.random().toString(36).substring(7)},s.a.createElement("td",null,t.museumName),s.a.createElement("td",null,t.city),s.a.createElement("td",null,t.state),s.a.createElement("td",null,t.address),s.a.createElement("td",null,t.museumURL),s.a.createElement("td",null,t.museumType)):e.state.params&&"companies"===e.state.params.serviceName?s.a.createElement("tr",{key:Math.random().toString(36).substring(7)},s.a.createElement("td",null,t.company),s.a.createElement("td",null,t.city),s.a.createElement("td",null,t.state),s.a.createElement("td",null,t.industry),s.a.createElement("td",null,t.founded),s.a.createElement("td",null,t.website)):null}))):this.state.loading||this.state.results===[]?s.a.createElement("div",null,s.a.createElement("p",null,"Searching..."),s.a.createElement(C.ProgressBar,{mode:"indeterminate",width:"50%"})):s.a.createElement("p",null,"No results found."))}}]),t}(n.Component),P=a(39),T=(a(75),function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(c.a)(this,Object(m.a)(t).call(this,e))).state={email:"",password:"",invalidemail:!1,invalidpassword:!1,loggingin:!1},a.handleLogin=a.handleLogin.bind(Object(g.a)(Object(g.a)(a))),a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"handleLogin",value:function(){var e=this;this.setState({invalidemail:0===this.state.email.length||-1===this.state.email.indexOf("@"),invalidpassword:this.state.password.length<6},function(){e.state.invalidemail||e.state.invalidpassword||(console.log("submitting..."),e.setState({loggingin:!0}),b.a.post("https://wesetern01-auth.mybluemix.net/user/signin",{email:e.state.email,password:e.state.password}).then(function(t){console.log("login res = ",t),200===t.data.code?(localStorage.setItem("auth_token",t.data.token),e.setState({loggingin:!1}),e.props.history.push("/home")):500===t.data.code&&e.setState({invalidpassword:!0,loggingin:!1})}).catch(function(t){console.log("Login Error: ",t),e.setState({loggingin:!1})}))})}},{key:"render",value:function(){var e=this;return s.a.createElement("div",{style:{margin:"0 auto",display:"block"}},s.a.createElement("h1",null,"Login"),s.a.createElement("div",{style:{top:0,bottom:0,left:0,right:0,margin:"auto"}},s.a.createElement("div",null,this.state.loggingin?s.a.createElement("p",null,"Logging in..."):null,!this.state.invalidemail||0!==this.state.email.length&&-1!==this.state.email.indexOf("@")?null:s.a.createElement("p",{className:"register-invalid"},"Please enter a valid email"),s.a.createElement("div",{className:"register-row"},s.a.createElement("label",{className:"register-label"},"Email: "),s.a.createElement(E.InputText,{placeholder:"Email",value:this.state.email,onChange:function(t){return e.setState({email:t.target.value})},className:"register-input"})),this.state.invalidpassword&&0===this.state.password.length?s.a.createElement("p",{className:"register-invalid"},"Please enter a password"):null,s.a.createElement("div",{className:"register-row"},s.a.createElement("label",{className:"register-label"},"Password: "),s.a.createElement(P.Password,{placeholder:"Password",value:this.state.password,onChange:function(t){return e.setState({password:t.target.value})},className:"register-input"})),s.a.createElement("br",null),s.a.createElement(v.Button,{label:"Submit",onClick:this.handleLogin}))))}}]),t}(s.a.Component)),R=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(c.a)(this,Object(m.a)(t).call(this,e))).state={email:"",password:"",firstname:"",lastname:"",confirmpassword:"",invalidemail:!1,invalidfirstname:!1,invalidlastname:!1,invalidpassword:!1,invalidconfirmpassword:!1,registering:!1,registered:!1},a.handleRegister=a.handleRegister.bind(Object(g.a)(Object(g.a)(a))),a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"handleRegister",value:function(){var e=this;this.setState({invalidemail:0===this.state.email.length||-1===this.state.email.indexOf("@"),invalidfirstname:0===this.state.firstname.length,invalidlastname:0===this.state.lastname.length,invalidpassword:this.state.password.length<=6,invalidconfirmpassword:this.state.invalidpassword||0===this.state.confirmpassword.length||this.state.password!==this.state.confirmpassword},function(){e.state.invalidemail||e.state.invalidfirstname||e.state.invalidlastname||e.state.invalidpassword||e.state.invalidconfirmpassword||(console.log("submitting..."),e.setState({registering:!0},function(){b.a.post("https://wesetern01-auth.mybluemix.net/user/signup",{email:e.state.email,password:e.state.password,firstName:e.state.firstname,lastName:e.state.lastname}).then(function(t){console.log("register res = ",t),200===t.data.code&&(e.setState({registering:!1,registered:!0}),setTimeout(function(){return e.props.history.push("/login")},3e3))}).catch(function(t){console.log("Login Error: ",t),e.setState({registering:!1})})}))})}},{key:"render",value:function(){var e=this;return s.a.createElement("div",{style:{margin:"0 auto",display:"block"}},s.a.createElement("h1",null,"Register"),s.a.createElement("div",{style:{top:0,bottom:0,left:0,right:0,margin:"auto"}},s.a.createElement("div",null,this.state.registered?s.a.createElement("p",null,"Success! Redirecting to login page..."):this.state.registering?s.a.createElement("p",null,"Registering...please wait..."):null,!this.state.invalidemail||0!==this.state.email.length&&-1!==this.state.email.indexOf("@")?null:s.a.createElement("p",{className:"register-invalid"},"Please enter a valid email"),s.a.createElement("div",{className:"register-row"},s.a.createElement("label",{className:"register-label"},"Email: "),s.a.createElement(E.InputText,{placeholder:"Email",value:this.state.email,onChange:function(t){return e.setState({email:t.target.value})},className:"register-input"})),this.state.invalidfirstname&&0===this.state.firstname.length?s.a.createElement("p",{className:"register-invalid"},"Please enter your first name"):null,s.a.createElement("div",{className:"register-row"},s.a.createElement("label",{className:"register-label"},"First Name: "),s.a.createElement(E.InputText,{placeholder:"First Name",value:this.state.firstname,onChange:function(t){return e.setState({firstname:t.target.value})},className:"register-input"})),this.state.invalidlastname&&0===this.state.lastname.length?s.a.createElement("p",{className:"register-invalid"},"Please enter your last name"):null,s.a.createElement("div",{className:"register-row"},s.a.createElement("label",{className:"register-label"},"Last Name: "),s.a.createElement(E.InputText,{placeholder:"Last Name",value:this.state.lastname,onChange:function(t){return e.setState({lastname:t.target.value})},className:"register-input"})),this.state.invalidpassword&&this.state.password.length<=6?s.a.createElement("p",{className:"register-invalid-password"},"Please enter a valid password (> than 6 characters)"):null,s.a.createElement("div",{className:"register-row"},s.a.createElement("label",{className:"register-label"},"Password: "),s.a.createElement(P.Password,{placeholder:"Password",value:this.state.password,onChange:function(t){return e.setState({password:t.target.value})},className:"register-input"})),!this.state.invalidconfirmpassword||0!==this.state.confirmpassword.length&&this.state.password===this.state.confirmpassword?null:s.a.createElement("p",{className:"register-invalid-confirm"},"Please make sure the passwords match"),s.a.createElement("div",{className:"register-row"},s.a.createElement("label",{className:"register-label"},"Confirm Password: "),s.a.createElement(P.Password,{placeholder:"Confirm password",value:this.state.confirmpassword,onChange:function(t){return e.setState({confirmpassword:t.target.value})},className:"register-input"})),s.a.createElement("br",null),s.a.createElement(v.Button,{label:"Submit",onClick:this.handleRegister}))))}}]),t}(s.a.Component),O=a(123),j=a(287),I=(a(180),{getToken:function(){return null!==localStorage.getItem("auth_token")||null},removeToken:function(){localStorage.removeItem("auth_token")}}),A=function(e){var t=e.component,a=Object(O.a)(e,["component"]);return s.a.createElement(p.a,Object.assign({},a,{render:function(e){return null!==I.getToken()?s.a.createElement(t,e):s.a.createElement(j.a,{to:{pathname:"login",state:{from:e.location}}})}}))},L=function(e){function t(){return Object(i.a)(this,t),Object(c.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"logout",value:function(){I.removeToken()}},{key:"render",value:function(){var e=this;return s.a.createElement("div",{className:"App"},s.a.createElement("header",{style:{minHeight:"7vh",backgroundColor:"#0f6ab4",display:"flex"}},s.a.createElement("p",{style:{margin:"auto 20px",color:"white",width:"12%",cursor:"pointer"},onClick:function(){return window.location="/home"}},"The PurplePages"),s.a.createElement("div",{style:{margin:"auto 0px",width:"72%",color:"white"}},"Software Architecture - Team 01"),s.a.createElement("div",{style:{margin:"auto 0px"}},I.getToken()?s.a.createElement("span",{onClick:function(){e.logout(),window.location="/"},style:{color:"white",cursor:"pointer"}},"Logout"):s.a.createElement("div",null,s.a.createElement("span",{onClick:function(){return window.location="/login"},style:{color:"white",cursor:"pointer"}},"Login"),"\xa0\xa0\xa0\xa0",s.a.createElement("span",{onClick:function(){return window.location="/register"},style:{color:"white",cursor:"pointer"}},"Register")))),s.a.createElement(d.a,null,s.a.createElement(h.a,null,s.a.createElement(A,{path:"/home",component:S}),s.a.createElement(A,{path:"/microservice",component:x}),s.a.createElement(p.a,{path:"/register",component:R}),s.a.createElement(p.a,{path:"/login",component:T}),s.a.createElement(A,{path:"/",component:S}))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(s.a.createElement(L,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},75:function(e,t,a){}},[[125,1,2]]]);
//# sourceMappingURL=main.204f09bf.chunk.js.map