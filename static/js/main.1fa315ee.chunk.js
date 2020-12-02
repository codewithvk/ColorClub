(this["webpackJsonpcolors-app"]=this["webpackJsonpcolors-app"]||[]).push([[0],{283:function(e,a,t){},383:function(e,a,t){},556:function(e,a,t){"use strict";t.r(a);var o=t(0),n=t.n(o),r=t(7),l=t.n(r),i=t(622),c=(t(283),t(103)),s=t(21),m=t(22),d=t(8),u=t(24),h=t(23),p=t(624),g=t(625),f=t(88),b=t(250),v=t(598),C=t(26),y=t.n(C),E=t(599),w=t.n(E),k=t(42),x=t.n(k),S={up(){},down:e=>"@media (max-width: ".concat({xs:"575.98px",sm:"767.98px",md:"991.98px",lg:"1199.98px",xl:"1600px"}[e],")")},j={ColorBox:{width:"20%",height:function(e){return e.showingFullPalette?"25%":"50%"},margin:"0 auto",display:"inline-block",position:"relative",cursor:"pointer",marginBottom:"-3.5px","&:hover button":{opacity:1},[S.down("lg")]:{width:"25%",height:function(e){return e.showingFullPalette?"20%":"33.3333%"}},[S.down("md")]:{width:"50%",height:function(e){return e.showingFullPalette?"10%":"20%"}},[S.down("xs")]:{width:"100%",height:function(e){return e.showingFullPalette?"5%":"10%"}}},copyText:{color:function(e){return x()(e.background).luminance()>=.7?"black":"white"}},colorName:{color:function(e){return x()(e.background).luminance()<=.08?"white":"black"}},seeMore:{color:function(e){return x()(e.background).luminance()>=.7?"rgba(0,0,0,0.6)":"white"},background:"rgba(255, 255, 255, 0.3)",position:"absolute",border:"none",right:"0px",bottom:"0px",width:"60px",height:"30px",textAlign:"center",lineHeight:"30px",textTransform:"uppercase"},copyButton:{color:function(e){return x()(e.background).luminance()>=.7?"rgba(0,0,0,0.6)":"white"},width:"100px",height:"30px",position:"absolute",display:"inline-block",top:"50%",left:"50%",marginLeft:"-50px",marginTop:"-15px",textAlign:"center",outline:"none",background:"rgba(255, 255, 255, 0.3)",fontSize:"1rem",lineHeight:"30px",textTransform:"uppercase",border:"none",textDecoration:"none",opacity:0},boxContent:{position:"absolute",width:"100%",left:"0px",bottom:"0px",padding:"10px",color:"black",letterSpacing:"1px",textTransform:"uppercase",fontSize:"12px"},copyOverlay:{opacity:"0",zIndex:"0",width:"100%",height:"100%",transition:"transform 0.6s ease-in-out",transform:"scale(0.1)"},showOverlay:{opacity:"1",transform:"scale(50)",zIndex:"10",position:"absolute"},copyMessage:{position:"fixed",left:"0",right:"0",top:"0",bottom:"0",display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column",fontSize:"4rem",transform:"scale(0.1)",opacity:"0",color:"white","& h1":{fontWeight:"400",textShadow:"1px 2px black",background:"rgba(255, 255, 255, 0.2)",width:"100%",textAlign:"center",marginBottom:"0",padding:"1rem",textTransform:"uppercase",[S.down("xs")]:{fontSize:"6rem"}},"& p":{fontSize:"2rem",fontWeight:"100"}},showMessage:{opacity:"1",transform:"scale(1)",zIndex:"25",transition:"all 0.4s ease-in-out",transitionDelay:"0.3s"}},N=function(e){Object(u.a)(t,e);var a=Object(h.a)(t);function t(e){var o;return Object(s.a)(this,t),(o=a.call(this,e)).state={copied:!1},o.changeCopyState=o.changeCopyState.bind(Object(d.a)(o)),o}return Object(m.a)(t,[{key:"changeCopyState",value:function(){var e=this;this.setState({copied:!0},(function(){setTimeout((function(){return e.setState({copied:!1})}),1500)}))}},{key:"render",value:function(){var e=this.props,a=e.name,t=e.background,o=e.moreUrl,r=e.showingFullPalette,l=e.classes,i=this.state.copied;return n.a.createElement(b.CopyToClipboard,{text:t,onCopy:this.changeCopyState},n.a.createElement("div",{style:{background:t},className:l.ColorBox},n.a.createElement("div",{style:{background:t},className:y()(l.copyOverlay,{[l.showOverlay]:i})}),n.a.createElement("div",{className:y()(l.copyMessage,{[l.showMessage]:i})},n.a.createElement("h1",null,"copied!"),n.a.createElement("p",{className:l.copyText},t)),n.a.createElement("div",null,n.a.createElement("div",{className:l.boxContent},n.a.createElement("span",{className:l.colorName},a)),n.a.createElement("button",{className:l.copyButton},"Copy")),r&&n.a.createElement(v.a,{to:o,onClick:function(e){return e.stopPropagation()}},n.a.createElement("span",{className:l.seeMore},"MORE"))))}}]),t}(o.Component),O=w()(j)(N),P=t(621),F=t(607),B=t(623),D=t(608),A=t(130),I=t.n(A),T=t(261),R=(t(370),{Navbar:{display:"flex",alignItems:"center",justifyContent:"flex-start",height:"6vh"},logo:{marginRight:"15px",padding:"0 13px",fontSize:"22px",backgroundColor:"#eceff1",fontFamily:"Roboto",height:"100%",display:"flex",alignItems:"center","& a":{textDecoration:"none",color:"black"},[S.down("xs")]:{display:"none"}},slider:{width:"340px",margin:"0 10px",display:"inline-block","& .rc-slider-track":{backgroundColor:"transparent"},"& .rc-slider-rail":{height:"8px"},"& .rc-slider-handle, .rc-slider-handle:active, .rc-slider-handle:focus,.rc-slider-handle:hover":{backgroundColor:"green",outline:"none",border:"2px solid green",boxShadow:"none",width:"13px",height:"13px",marginLeft:"-7px",marginTop:"-3px"},[S.down("sm")]:{width:"150px"}},selectContainer:{marginLeft:"auto",marginRight:"1rem"}}),L=function(e){Object(u.a)(t,e);var a=Object(h.a)(t);function t(e){var o;return Object(s.a)(this,t),(o=a.call(this,e)).state={format:"hex",open:!1},o.handleFormatChange=o.handleFormatChange.bind(Object(d.a)(o)),o.closeSnackbar=o.closeSnackbar.bind(Object(d.a)(o)),o}return Object(m.a)(t,[{key:"handleFormatChange",value:function(e){this.setState({format:e.target.value,open:!0}),this.props.handleChange(e.target.value)}},{key:"closeSnackbar",value:function(){this.setState({open:!1})}},{key:"render",value:function(){var e=this.props,a=e.level,t=e.changeLevel,o=e.showingAllColors,r=e.classes,l=this.state.format;return n.a.createElement("header",{className:r.Navbar},n.a.createElement("div",{className:r.logo},n.a.createElement(v.a,{to:"/"},"Color Club")),o&&n.a.createElement("div",null,n.a.createElement("span",null,"Level: ",a),n.a.createElement("div",{className:r.slider},n.a.createElement(T.a,{defaultValue:a,min:100,max:900,step:100,onAfterChange:t}))),n.a.createElement("div",{className:r.selectContainer},n.a.createElement(P.a,{value:l,onChange:this.handleFormatChange},n.a.createElement(F.a,{value:"hex"},"HEX - #ffffff"),n.a.createElement(F.a,{value:"rgb"},"RGB - rgb(255,255,255)"),n.a.createElement(F.a,{value:"rgba"},"RGBA - rgba(255,255,255, 1.0)"))),n.a.createElement(B.a,{anchorOrigin:{vertical:"bottom",horizontal:"left"},open:this.state.open,autoHideDuration:3e3,message:n.a.createElement("span",{id:"message-id"},"Format Changed To ",l.toUpperCase()),ContentProps:{"aria-describedby":"message-id"},onClose:this.closeSnackbar,action:[n.a.createElement(D.a,{onClick:this.closeSnackbar,color:"inherit",key:"close","aria-label":"close"},n.a.createElement(I.a,null))]}))}}]),t}(o.Component),G=w()(R)(L);var M=w()({PaletteFooter:{backgroundColor:"white",height:"5vh",display:"flex",justifyContent:"center",alignItems:"center",fontWeight:"bold"},emoji:{fontSize:"1.5rem"}})((function(e){var a=e.classes;return n.a.createElement("footer",{className:a.PaletteFooter},"Made With ",n.a.createElement("span",null," \u2764\ufe0f ")," By Vivek")})),z={Palette:{height:"100vh",display:"flex",flexDirection:"column"},colors:{height:"90%"},goBack:{width:"20%",height:"50%",margin:"0 auto",display:"inline-block",position:"relative",cursor:"pointer",marginBottom:"-3.5px",opacity:1,backgroundColor:"black","& a":{color:"white",width:"100px",height:"30px",position:"absolute",display:"inline-block",top:"50%",left:"50%",marginLeft:"-50px",marginTop:"-15px",textAlign:"center",outline:"none",background:"rgba(255, 255, 255, 0.3)",fontSize:"1rem",lineHeight:"30px",textTransform:"uppercase",border:"none",textDecoration:"none"},[S.down("lg")]:{width:"25%",height:"33.3333%"},[S.down("md")]:{width:"50%",height:"20%"},[S.down("xs")]:{width:"100%",height:"10%"}}},H=function(e){Object(u.a)(t,e);var a=Object(h.a)(t);function t(e){var o;return Object(s.a)(this,t),(o=a.call(this,e)).state={level:500,format:"hex"},o.changeLevel=o.changeLevel.bind(Object(d.a)(o)),o.changeFormat=o.changeFormat.bind(Object(d.a)(o)),o}return Object(m.a)(t,[{key:"changeLevel",value:function(e){this.setState({level:e})}},{key:"changeFormat",value:function(e){this.setState({format:e})}},{key:"render",value:function(){var e=this.props.palette,a=e.colors,t=e.paletteName,o=e.emoji,r=e.id,l=this.props.classes,i=this.state,c=i.level,s=i.format,m=a[c].map((function(e){return n.a.createElement(O,{background:e[s],name:e.name,key:e.id,moreUrl:"/palette/".concat(r,"/").concat(e.id),showingFullPalette:!0})}));return n.a.createElement("div",{className:l.Palette},n.a.createElement(G,{level:c,changeLevel:this.changeLevel,handleChange:this.changeFormat,showingAllColors:!0}),n.a.createElement("div",{className:l.colors},m),n.a.createElement(M,{paletteName:t,emoji:o}))}}]),t}(o.Component),V=w()(z)(H),W=t(609),q=t(606),U=t(558),J=t(611),Y=t(626),K=t(612),_=t(255),Q=t.n(_),X=t(610),$=t(131),Z=t.n($),ee=function(e){Object(u.a)(t,e);var a=Object(h.a)(t);function t(e){var o;return Object(s.a)(this,t),(o=a.call(this,e)).deletePalette=o.deletePalette.bind(Object(d.a)(o)),o.handleClick=o.handleClick.bind(Object(d.a)(o)),o}return Object(m.a)(t,[{key:"deletePalette",value:function(e){e.stopPropagation(),this.props.openDialog(this.props.id)}},{key:"handleClick",value:function(){this.props.goToPalette(this.props.id)}},{key:"render",value:function(){var e=this.props,a=e.classes,t=e.paletteName,o=e.emoji,r=e.colors.map((function(e){return n.a.createElement("div",{className:a.miniColor,style:{backgroundColor:e.color},key:e.name})}));return n.a.createElement("div",{className:a.root,onClick:this.handleClick},n.a.createElement(Z.a,{className:a.deleteIcon,style:{transition:"all 0.3s ease-in-out"},onClick:this.deletePalette}),n.a.createElement("div",{className:a.colors},r),n.a.createElement("h5",{className:a.title},t," ",n.a.createElement("span",{className:a.emoji},o)))}}]),t}(o.PureComponent),ae=w()({root:{backgroundColor:"white",border:"1px solid black",borderRadius:"5px",padding:"0.5rem",position:"relative",overflow:"hidden",cursor:"pointer","&:hover svg":{opacity:1}},colors:{backgroundColor:"#dae1e4",height:"150px",width:"100%",borderRadius:"5px",overflow:"hidden"},title:{display:"flex",justifyContent:"space-between",alignItems:"center",margin:"0",color:"black",paddingTop:"0.5rem",fontSize:"1rem",position:"relative"},emoji:{marginLeft:"0.5rem",fontSize:"1.5rem"},miniColor:{height:"25%",width:"20%",display:"inline-block",margin:"0 auto",position:"relative",marginBottom:"-3.5px"},deleteIcon:{color:"white",backgroundColor:"#eb3d30",width:"20px",height:"20px",position:"absolute",right:"0px",top:"0px",padding:"10px",zIndex:10,opacity:0}})(ee),te=t(177),oe=t.n(te),ne=t(178),re=t.n(ne),le=t.p+"static/media/bg.f75ab03b.svg",ie={"@global":{".fade-exit":{opacity:1},".fade-exit-active":{opacity:0,transition:"opacity 500ms ease-out"}},root:{height:"100vh",display:"flex",alignItems:"flex-start",justifyContent:"center",backgroundColor:"#394bad",backgroundImage:"url(".concat(le,")"),overflow:"scroll"},heading:{fontSize:"2.5rem",fontFamily:'"Architects Daughter", cursive',letterSpacing:"3px",fontWeight:"bold"},container:{width:"50%",display:"flex",alignItems:"flex-start",flexDirection:"column",flexWrap:"wrap",[S.down("xl")]:{width:"80%"},[S.down("xs")]:{width:"75%"}},a1:{color:"black"},a2:{color:"green"},a3:{color:"blue"},a4:{color:"#9423a8"},a5:{color:"red"},a6:{color:""},a7:{color:"black"},a8:{color:"green"},a9:{color:"blue"},a10:{color:"red"},nav:{display:"flex",width:"100%",justifyContent:"space-between",alignItems:"center",color:"black","& a":{color:"black",fontSize:"1.2rem"}},cplink:{textAlign:"center",paddingRight:"45px"},contributton:{paddingRight:"80px"},palettes:{boxSizing:"border-box",width:"100%",display:"grid",gridTemplateColumns:"repeat(3, 30%)",gridGap:"2.5rem",[S.down("md")]:{gridTemplateColumns:"repeat(2, 50%)"},[S.down("xs")]:{gridTemplateColumns:"repeat(1, 100%)",gridGap:"1.4rem"}}},ce=function(e){Object(u.a)(t,e);var a=Object(h.a)(t);function t(e){var o;return Object(s.a)(this,t),(o=a.call(this,e)).state={openDeleteDialog:!1,deletingId:""},o.openDialog=o.openDialog.bind(Object(d.a)(o)),o.closeDialog=o.closeDialog.bind(Object(d.a)(o)),o.handleDelete=o.handleDelete.bind(Object(d.a)(o)),o.goToPalette=o.goToPalette.bind(Object(d.a)(o)),o}return Object(m.a)(t,[{key:"openDialog",value:function(e){this.setState({openDeleteDialog:!0,deletingId:e})}},{key:"closeDialog",value:function(){this.setState({openDeleteDialog:!1,deletingId:""})}},{key:"goToPalette",value:function(e){this.props.history.push("/palette/".concat(e))}},{key:"handleDelete",value:function(){this.props.deletePalette(this.state.deletingId),this.closeDialog()}},{key:"render",value:function(){var e=this,a=this.props,t=a.palettes,o=a.classes,r=this.state.openDeleteDialog;return n.a.createElement("div",{className:o.root},n.a.createElement("div",{className:o.container},n.a.createElement("nav",{className:o.nav},n.a.createElement("h1",{className:o.heading},n.a.createElement("span",{className:o.a1},"C"),n.a.createElement("span",{className:o.a2},"o"),n.a.createElement("span",{className:o.a3},"l"),n.a.createElement("span",{className:o.a4},"o"),n.a.createElement("span",{className:o.a5},"r"),n.a.createElement("span",{className:o.a6}," "),n.a.createElement("span",{className:o.a7},"C"),n.a.createElement("span",{className:o.a8},"l"),n.a.createElement("span",{className:o.a9},"u"),n.a.createElement("span",{className:o.a10},"b")),n.a.createElement(v.a,{className:o.cplink,to:"/palette/new"},"Create Palette"),n.a.createElement("a",{className:o.contributton,href:"https://github.com/codewithvk/ColorClub"},"Contribute")),n.a.createElement(f.TransitionGroup,{className:o.palettes},t.map((function(a){return n.a.createElement(f.CSSTransition,{key:a.id,classNames:"fade",timeout:500},n.a.createElement(ae,Object.assign({},a,{goToPalette:e.goToPalette,openDialog:e.openDialog,key:a.id,id:a.id})))})))),n.a.createElement(W.a,{open:r,"aria-labelledby":"delete-dialog-title",onClose:this.closeDialog},n.a.createElement(X.a,{id:"delete-dialog-title"},"Delete This Palette?"),n.a.createElement(q.a,null,n.a.createElement(U.a,{button:!0,onClick:this.handleDelete},n.a.createElement(J.a,null,n.a.createElement(Y.a,{style:{backgroundColor:oe.a[100],color:oe.a[600]}},n.a.createElement(Q.a,null))),n.a.createElement(K.a,{primary:"Delete"})),n.a.createElement(U.a,{button:!0,onClick:this.closeDialog},n.a.createElement(J.a,null,n.a.createElement(Y.a,{style:{backgroundColor:re.a[100],color:re.a[600]}},n.a.createElement(I.a,null))),n.a.createElement(K.a,{primary:"Cancel"})))))}}]),t}(o.Component),se=w()(ie)(ce),me=function(e){Object(u.a)(t,e);var a=Object(h.a)(t);function t(e){var o;return Object(s.a)(this,t),(o=a.call(this,e))._shades=o.gatherShades(o.props.palette,o.props.colorId),o.state={format:"hex"},o.changeFormat=o.changeFormat.bind(Object(d.a)(o)),o}return Object(m.a)(t,[{key:"gatherShades",value:function(e,a){var t=[],o=e.colors;for(var n in o)t=t.concat(o[n].filter((function(e){return e.id===a})));return t.slice(1)}},{key:"changeFormat",value:function(e){this.setState({format:e})}},{key:"render",value:function(){var e=this.state.format,a=this.props.palette,t=a.paletteName,o=a.emoji,r=a.id,l=this.props.classes,i=this._shades.map((function(a){return n.a.createElement(O,{key:a.name,name:a.name,background:a[e],showingFullPalette:!1})}));return n.a.createElement("div",{className:l.Palette},n.a.createElement(G,{handleChange:this.changeFormat,showingAllColors:!1}),n.a.createElement("div",{className:l.colors},i,n.a.createElement("div",{className:l.goBack},n.a.createElement(v.a,{to:"/palette/".concat(r)},"GO BACK"))),n.a.createElement(M,{paletteName:t,emoji:o}))}}]),t}(o.Component),de=w()(z)(me);t(383);var ue=function(e){var a=e.children;return n.a.createElement("section",{className:"page"},a)},he=t(5),pe=t(616),ge=t(615),fe=t(613),be=t(614),ve=t(53),Ce=t(262),ye=(t(392),function(e){Object(u.a)(t,e);var a=Object(h.a)(t);function t(e){var o;return Object(s.a)(this,t),(o=a.call(this,e)).handleClickOpen=function(){o.setState({open:!0})},o.handleClose=function(){o.setState({open:!1})},o.state={stage:"form",newPaletteName:""},o.handleChange=o.handleChange.bind(Object(d.a)(o)),o.showEmojiPicker=o.showEmojiPicker.bind(Object(d.a)(o)),o.savePalette=o.savePalette.bind(Object(d.a)(o)),o}return Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=this;ve.ValidatorForm.addValidationRule("isPaletteNameUnique",(function(a){return e.props.palettes.every((function(e){return e.paletteName.toLowerCase()!==a.toLowerCase()}))}))}},{key:"handleChange",value:function(e){this.setState({[e.target.name]:e.target.value})}},{key:"showEmojiPicker",value:function(){this.setState({stage:"emoji"})}},{key:"savePalette",value:function(e){var a={paletteName:this.state.newPaletteName,emoji:e.native};this.props.handleSubmit(a),this.setState({stage:""})}},{key:"render",value:function(){var e=this.state,a=e.newPaletteName,t=e.stage,o=this.props.hideForm;return n.a.createElement("div",null,n.a.createElement(W.a,{open:"emoji"===t,onClose:o},n.a.createElement(X.a,{id:"form-dialog-title"},"Choose a Palette Emoji"),n.a.createElement(Ce.a,{title:"Pick a Palette Emoji",onSelect:this.savePalette})),n.a.createElement(W.a,{open:"form"===t,"aria-labelledby":"form-dialog-title",onClose:o},n.a.createElement(X.a,{id:"form-dialog-title"},"Choose a Palette Name"),n.a.createElement(ve.ValidatorForm,{onSubmit:this.showEmojiPicker},n.a.createElement(fe.a,null,n.a.createElement(be.a,null,"Please enter a name for your new beautiful palette. Make sure it's unique!"),n.a.createElement(ve.TextValidator,{label:"Palette Name",value:a,name:"newPaletteName",onChange:this.handleChange,fullWidth:!0,margin:"normal",validators:["required","isPaletteNameUnique"],errorMessages:["Enter Palette Name","Name already used"]})),n.a.createElement(ge.a,null,n.a.createElement(pe.a,{onClick:o,color:"primary"},"Cancel"),n.a.createElement(pe.a,{variant:"contained",color:"primary",type:"submit"},"Save Palette")))))}}]),t}(o.Component)),Ee=t(617),we=t(618),ke=t(619),xe=t(89),Se=t(257),je=t.n(Se),Ne=function(e){return{root:{display:"flex"},hide:{display:"none"},appBar:{transition:e.transitions.create(["margin","width"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),flexDirection:"row",justifyContent:"space-between",alignItems:"center",height:"64px"},appBarShift:{width:"calc(100% - ".concat(400,"px)"),marginLeft:400,transition:e.transitions.create(["margin","width"],{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.enteringScreen})},menuButton:{marginLeft:12,marginRight:20},navBtns:{marginRight:"1rem","& a":{textDecoration:"none"},[S.down("xs")]:{marginRight:"0.5rem"}},button:{margin:"0 0.5rem",[S.down("xs")]:{margin:"0 0.2rem",padding:"0.3rem"}}}},Oe=function(e){Object(u.a)(t,e);var a=Object(h.a)(t);function t(e){var o;return Object(s.a)(this,t),(o=a.call(this,e)).state={newPaletteName:"",formShowing:!1},o.handleChange=o.handleChange.bind(Object(d.a)(o)),o.showForm=o.showForm.bind(Object(d.a)(o)),o.hideForm=o.hideForm.bind(Object(d.a)(o)),o}return Object(m.a)(t,[{key:"handleChange",value:function(e){this.setState({[e.target.name]:e.target.value})}},{key:"showForm",value:function(){this.setState({formShowing:!0})}},{key:"hideForm",value:function(){this.setState({formShowing:!1})}},{key:"render",value:function(){var e=this.props,a=e.classes,t=e.open,o=e.palettes,r=e.handleSubmit,l=e.handleDrawerOpen,i=this.state.formShowing;return n.a.createElement("div",{className:a.root},n.a.createElement(Ee.a,null),n.a.createElement(we.a,{position:"fixed",color:"default",className:y()(a.appBar,{[a.appBarShift]:t})},n.a.createElement(ke.a,{disableGutters:!t},n.a.createElement(D.a,{color:"inherit","aria-label":"Open drawer",onClick:l,className:y()(a.menuButton,{[a.hide]:t})},n.a.createElement(je.a,null)),n.a.createElement(xe.a,{variant:"h6",color:"inherit",noWrap:!0},"Create A Palette")),n.a.createElement("div",{className:a.navBtns},n.a.createElement(v.a,{to:"/"},n.a.createElement(pe.a,{variant:"contained",color:"secondary",className:a.button},"Go Back")),n.a.createElement(pe.a,{variant:"contained",color:"primary",onClick:this.showForm,className:a.button},"Save"))),i&&n.a.createElement(ye,{palettes:o,handleSubmit:r,hideForm:this.hideForm}))}}]),t}(o.Component),Pe=Object(he.a)(Ne,{withTheme:!0})(Oe),Fe=t(258),Be={picker:{width:"100% !important",marginTop:"2rem"},addColor:{width:"100%",padding:"1rem",marginTop:"1rem",fontSize:"2rem"},colorNameInput:{width:"100%",height:"70px"}},De=function(e){Object(u.a)(t,e);var a=Object(h.a)(t);function t(e){var o;return Object(s.a)(this,t),(o=a.call(this,e)).state={currentColor:"teal",newColorName:""},o.updateCurrentColor=o.updateCurrentColor.bind(Object(d.a)(o)),o.handleChange=o.handleChange.bind(Object(d.a)(o)),o.handleSubmit=o.handleSubmit.bind(Object(d.a)(o)),o}return Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=this;ve.ValidatorForm.addValidationRule("isColorNameUnique",(function(a){return e.props.colors.every((function(e){return e.name.toLowerCase()!==a.toLowerCase()}))})),ve.ValidatorForm.addValidationRule("isColorUnique",(function(a){return e.props.colors.every((function(a){return a.color!==e.state.currentColor}))}))}},{key:"updateCurrentColor",value:function(e){this.setState({currentColor:e.hex})}},{key:"handleChange",value:function(e){this.setState({[e.target.name]:e.target.value})}},{key:"handleSubmit",value:function(){var e={color:this.state.currentColor,name:this.state.newColorName};this.props.addNewColor(e),this.setState({newColorName:""})}},{key:"render",value:function(){var e=this.props,a=e.paletteIsFull,t=e.classes,o=this.state,r=o.currentColor,l=o.newColorName;return n.a.createElement("div",null,n.a.createElement(Fe.ChromePicker,{color:r,onChangeComplete:this.updateCurrentColor,className:t.picker}),n.a.createElement(ve.ValidatorForm,{onSubmit:this.handleSubmit,ref:"form",instantValidate:!1},n.a.createElement(ve.TextValidator,{value:l,className:t.colorNameInput,placeholder:"Color Name",name:"newColorName",variant:"filled",margin:"normal",onChange:this.handleChange,validators:["required","isColorNameUnique","isColorUnique"],errorMessages:["Enter a color name","Color name must be unique","Color already used!"]}),n.a.createElement(pe.a,{variant:"contained",type:"submit",color:"primary",disabled:a,className:t.addColor,style:{backgroundColor:a?"grey":r}},a?"Palette Full":"Add Color")))}}]),t}(o.Component),Ae=Object(he.a)(Be)(De),Ie=t(627),Te=t(620),Re=t(259),Le=t.n(Re),Ge=t(80),Me={root:{width:"20%",height:"25%",margin:"0 auto",display:"inline-block",position:"relative",cursor:"pointer",marginBottom:"-3.5px","&:hover svg":{color:"white",transform:"scale(1.5)"},[S.down("lg")]:{width:"25%",height:"20%"},[S.down("md")]:{width:"50%",height:"10%"},[S.down("sm")]:{width:"100%",height:"5%"}},boxContent:{position:"absolute",width:"100%",left:"0px",bottom:"0px",padding:"10px",color:function(e){return x()(e.color).luminance()<=.08?"rgba(255,255,255,0.8)":"rgba(0,0,0,0.6)"},letterSpacing:"1px",textTransform:"uppercase",fontSize:"12px",display:"flex",justifyContent:"space-between"},deleteIcon:{transition:"all 0.3s ease-in-out"}},ze=Object(Ge.SortableElement)((function(e){var a=e.classes,t=e.handleClick,o=e.name,r=e.color;return n.a.createElement("div",{className:a.root,style:{backgroundColor:r}},n.a.createElement("div",{className:a.boxContent},n.a.createElement("span",null," ",o),n.a.createElement(Z.a,{className:a.deleteIcon,onClick:t})))})),He=w()(Me)(ze),Ve=Object(Ge.SortableContainer)((function(e){var a=e.colors,t=e.removeColor;return n.a.createElement("div",{style:{height:"100%"}},a.map((function(e,a){return n.a.createElement(He,{index:a,key:e.name,color:e.color,name:e.name,handleClick:function(){return t(e.name)}})})))})),We=t(180),qe=function(e){return{root:{display:"flex"},drawer:{width:400,flexShrink:0,height:"100vh"},drawerPaper:{width:400,display:"flex",alignItems:"center"},drawerHeader:Object(We.a)(Object(We.a)({display:"flex",alignItems:"center",width:"100%",padding:"0 8px"},e.mixins.toolbar),{},{justifyContent:"flex-end"}),content:{flexGrow:1,height:"calc(100vh - 64px)",padding:0,transition:e.transitions.create("margin",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),marginLeft:-400},contentShift:{transition:e.transitions.create("margin",{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.enteringScreen}),marginLeft:0},container:{width:"90%",height:"100%",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"},buttons:{width:"100%"},button:{width:"50%"}}},Ue=[{paletteName:"Material UI",id:"ColorClub",emoji:"\ud83c\udfa8",colors:[{name:"red",color:"#F44336"},{name:"pink",color:"#E91E63"},{name:"purple",color:"#9C27B0"},{name:"deeppurple",color:"#673AB7"},{name:"indigo",color:"#3F51B5"},{name:"blue",color:"#2196F3"},{name:"lightblue",color:"#03A9F4"},{name:"cyan",color:"#00BCD4"},{name:"teal",color:"#009688"},{name:"green",color:"#4CAF50"},{name:"lightgreen",color:"#8BC34A"},{name:"lime",color:"#CDDC39"},{name:"yellow",color:"#FFEB3B"},{name:"amber",color:"#FFC107"},{name:"orange",color:"#FF9800"},{name:"deeporange",color:"#FF5722"},{name:"brown",color:"#795548"},{name:"grey",color:"#9E9E9E"},{name:"bluegrey",color:"#607D8B"}]},{paletteName:"Flat UI Colors",id:"Flat-Ui-Clone",emoji:"\ud83e\udd19",colors:[{name:"Turquoise",color:"#1abc9c"},{name:"Emerald",color:"#2ecc71"},{name:"PeterRiver",color:"#3498db"},{name:"Amethyst",color:"#9b59b6"},{name:"WetAsphalt",color:"#34495e"},{name:"GreenSea",color:"#16a085"},{name:"Nephritis",color:"#27ae60"},{name:"BelizeHole",color:"#2980b9"},{name:"Wisteria",color:"#8e44ad"},{name:"MidnightBlue",color:"#2c3e50"},{name:"SunFlower",color:"#f1c40f"},{name:"Carrot",color:"#e67e22"},{name:"Alizarin",color:"#e74c3c"},{name:"Clouds",color:"#ecf0f1"},{name:"Concrete",color:"#95a5a6"},{name:"Orange",color:"#f39c12"},{name:"Pumpkin",color:"#d35400"},{name:"Pomegranate",color:"#c0392b"},{name:"Silver",color:"#bdc3c7"},{name:"Asbestos",color:"#7f8c8d"}]},{paletteName:"Happiness",id:"Happiness",emoji:"\ud83d\ude00",colors:[{name:"Sunflower",color:"#FFC312"},{name:"Energos",color:"#C4E538"},{name:"BlueMartina",color:"#12CBC4"},{name:"LavenderRose",color:"#FDA7DF"},{name:"BaraRose",color:"#ED4C67"},{name:"RadiantYellow",color:"#F79F1F"},{name:"AndroidGreen",color:"#A3CB38"},{name:"MediterraneanSea",color:"#1289A7"},{name:"LavenderTea",color:"#D980FA"},{name:"VerryBerry",color:"#B53471"},{name:"PuffinsBill",color:"#EE5A24"},{name:"PixelatedGrass",color:"#009432"},{name:"MerchantMarineBlue",color:"#0652DD"},{name:"ForgottenPurple",color:"#9980FA"},{name:"HollyHock",color:"#833471"},{name:"RedPigment",color:"#EA2027"},{name:"TurkishAqua",color:"#006266"},{name:"20000LeaguesUnderTheSea",color:"#1B1464"},{name:"CircumorbitalRing",color:"#5758BB"},{name:"MagentaPurple",color:"#6F1E51"}]},{paletteName:"Sadness",id:"Sadness",emoji:"\ud83d\ude14",colors:[{name:"LightGreenishBlue",color:"#55efc4"},{name:"FadedPoster",color:"#81ecec"},{name:"GreenDarnerTail",color:"#74b9ff"},{name:"ShyMoment",color:"#a29bfe"},{name:"CityLights",color:"#dfe6e9"},{name:"MintLeaf",color:"#00b894"},{name:"RobinsEggBlue",color:"#00cec9"},{name:"ElectronBlue",color:"#0984e3"},{name:"ExodusFruit",color:"#6c5ce7"},{name:"SoothingBreeze",color:"#b2bec3"},{name:"SourLemon",color:"#ffeaa7"},{name:"FirstDate",color:"#fab1a0"},{name:"PinkGlamour",color:"#ff7675"},{name:"Pico8Pink",color:"#fd79a8"},{name:"AmericanRiver",color:"#636e72"},{name:"BrightYarrow",color:"#fdcb6e"},{name:"OrangeVille",color:"#e17055"},{name:"Chi-Gong",color:"#d63031"},{name:"PrunusAvium",color:"#e84393"},{name:"DraculaOrchid",color:"#2d3436"}]},{paletteName:"Playful",id:"Playful",emoji:"\ud83d\ude0a",colors:[{name:"Beekeeper",color:"#f6e58d"},{name:"SpicedNectarine",color:"#ffbe76"},{name:"PinkGlamour",color:"#ff7979"},{name:"JuneBud",color:"#badc58"},{name:"CoastalBreeze",color:"#dff9fb"},{name:"Turbo",color:"#f9ca24"},{name:"QuinceJelly",color:"#f0932b"},{name:"CarminePink",color:"#eb4d4b"},{name:"PureApple",color:"#6ab04c"},{name:"HintOfIcePack",color:"#c7ecee"},{name:"MiddleBlue",color:"#7ed6df"},{name:"Heliotrope",color:"#e056fd"},{name:"ExodusFruit",color:"#686de0"},{name:"DeepKoamaru",color:"#30336b"},{name:"SoaringEagle",color:"#95afc0"},{name:"GreenlandGreen",color:"#22a6b3"},{name:"SteelPink",color:"#be2edd"},{name:"Blurple",color:"#4834d4"},{name:"DeepCove",color:"#130f40"},{name:"WizardGrey",color:"#535c68"}]},{paletteName:"Romantic",id:"Romantic",emoji:"\ud83d\ude4c",colors:[{name:"ProtossPylon",color:"#00a8ff"},{name:"Periwinkle",color:"#9c88ff"},{name:"Rise-N-Shine",color:"#fbc531"},{name:"DownloadProgress",color:"#4cd137"},{name:"Seabrook",color:"#487eb0"},{name:"VanaDylBlue",color:"#0097e6"},{name:"MattPurple",color:"#8c7ae6"},{name:"NanohanachaGold",color:"#e1b12c"},{name:"SkirretGreen",color:"#44bd32"},{name:"Naval",color:"#40739e"},{name:"NasturcianFlower",color:"#e84118"},{name:"LynxWhite",color:"#f5f6fa"},{name:"BlueberrySoda",color:"#7f8fa6"},{name:"MazarineBlue",color:"#273c75"},{name:"BlueNights",color:"#353b48"},{name:"HarleyOrange",color:"#c23616"},{name:"HintOfPensive",color:"#dcdde1"},{name:"ChainGangGrey",color:"#718093"},{name:"PicoVoid",color:"#192a56"},{name:"ElectroMagnetic",color:"#2f3640"}]},{paletteName:"Sentimental",id:"Sentimental",emoji:"\ud83d\udc71\u200d\u2642\ufe0f",colors:[{name:"JacksonsPurple",color:"#40407a"},{name:"C64Purple",color:"#706fd3"},{name:"SwanWhite",color:"#f7f1e3"},{name:"SummerSky",color:"#34ace0"},{name:"CelestialGreen",color:"#33d9b2"},{name:"LuckyPoint",color:"#2c2c54"},{name:"Liberty",color:"#474787"},{name:"HotStone",color:"#aaa69d"},{name:"DevilBlue",color:"#227093"},{name:"PalmSpringsSplash",color:"#218c74"},{name:"FlourescentRed",color:"#ff5252"},{name:"SyntheticPumpkin",color:"#ff793f"},{name:"CrocodileTooth",color:"#d1ccc0"},{name:"MandarinSorbet",color:"#ffb142"},{name:"SpicedButterNut",color:"#ffda79"},{name:"EyeOfNewt",color:"#b33939"},{name:"ChileanFire",color:"#cd6133"},{name:"GreyPorcelain",color:"#84817a"},{name:"AlamedaOchre",color:"#cc8e35"},{name:"Desert",color:"#ccae62"}]},{paletteName:"Calmness",id:"Calmness",emoji:"\ud83c\udf1d",colors:[{name:"OrchidOrange",color:"#FEA47F"},{name:"SpiroDiscoBall",color:"#25CCF7"},{name:"HoneyGlow",color:"#EAB543"},{name:"SweetGarden",color:"#55E6C1"},{name:"FallingStar",color:"#CAD3C8"},{name:"RichGardenia",color:"#F97F51"},{name:"ClearChill",color:"#1B9CFC"},{name:"WhitePepper",color:"#F8EFBA"},{name:"Keppel",color:"#58B19F"},{name:"ShipsOfficer",color:"#2C3A47"},{name:"FieryFuchsia",color:"#B33771"},{name:"BlueBell",color:"#3B3B98"},{name:"GeorgiaPeach",color:"#FD7272"},{name:"OasisStream",color:"#9AECDB"},{name:"BrightUbe",color:"#D6A2E8"},{name:"MagentaPurple",color:"#6D214F"},{name:"EndingNavyBlue",color:"#182C61"},{name:"SasquatchSocks",color:"#FC427B"},{name:"PineGlade",color:"#BDC581"},{name:"HighlighterLavender",color:"#82589F"}]},{paletteName:"Cheeriness",id:"Cheeriness",emoji:"\ud83e\udd16",colors:[{name:"FlatFlesh",color:"#fad390"},{name:"MelonMelody",color:"#f8c291"},{name:"Livid",color:"#6a89cc"},{name:"Spray",color:"#82ccdd"},{name:"ParadiseGreen",color:"#b8e994"},{name:"SquashBlossom",color:"#f6b93b"},{name:"MandarinRed",color:"#e55039"},{name:"AzraqBlue",color:"#4a69bd"},{name:"Dupain",color:"#60a3bc"},{name:"AuroraGreen",color:"#78e08f"},{name:"IcelandPoppy",color:"#fa983a"},{name:"TomatoRed",color:"#eb2f06"},{name:"YueGuangBlue",color:"#1e3799"},{name:"GoodSamaritan",color:"#3c6382"},{name:"Waterfall",color:"#38ada9"},{name:"CarrotOrange",color:"#e58e26"},{name:"JalapenoRed",color:"#b71540"},{name:"DarkSapphire",color:"#0c2461"},{name:"ForestBlues",color:"#0a3d62"},{name:"ReefEncounter",color:"#079992"}]}],Je=function(e){Object(u.a)(t,e);var a=Object(h.a)(t);function t(e){var o;return Object(s.a)(this,t),(o=a.call(this,e)).handleDrawerOpen=function(){o.setState({open:!0})},o.handleDrawerClose=function(){o.setState({open:!1})},o.onSortEnd=function(e){var a=e.oldIndex,t=e.newIndex;o.setState((function(e){var o=e.colors;return{colors:Object(Ge.arrayMove)(o,a,t)}}))},o.state={open:!0,colors:Ue[0].colors},o.addNewColor=o.addNewColor.bind(Object(d.a)(o)),o.handleChange=o.handleChange.bind(Object(d.a)(o)),o.handleSubmit=o.handleSubmit.bind(Object(d.a)(o)),o.removeColor=o.removeColor.bind(Object(d.a)(o)),o.clearColors=o.clearColors.bind(Object(d.a)(o)),o.addRandomColor=o.addRandomColor.bind(Object(d.a)(o)),o}return Object(m.a)(t,[{key:"addNewColor",value:function(e){this.setState({colors:[].concat(Object(c.a)(this.state.colors),[e]),newColorName:""})}},{key:"handleChange",value:function(e){this.setState({[e.target.name]:e.target.value})}},{key:"clearColors",value:function(){this.setState({colors:[]})}},{key:"addRandomColor",value:function(){for(var e,a,t=this.props.palettes.map((function(e){return e.colors})).flat(),o=!0;o;)e=Math.floor(Math.random()*t.length),a=t[e],o=this.state.colors.some((function(e){return e.name===a.name}));this.setState({colors:[].concat(Object(c.a)(this.state.colors),[a])})}},{key:"handleSubmit",value:function(e){e.id=e.paletteName.toLowerCase().replace(/ /g,"-"),e.colors=this.state.colors,this.props.savePalette(e),this.props.history.push("/")}},{key:"removeColor",value:function(e){this.setState({colors:this.state.colors.filter((function(a){return a.name!==e}))})}},{key:"render",value:function(){var e=this.props,a=e.classes,t=e.maxColors,o=e.palettes,r=this.state,l=r.open,i=r.colors,c=i.length>=t;return n.a.createElement("div",{className:a.root},n.a.createElement(Pe,{open:l,palettes:o,handleSubmit:this.handleSubmit,handleDrawerOpen:this.handleDrawerOpen}),n.a.createElement(Ie.a,{className:a.drawer,variant:"persistent",anchor:"left",open:l,classes:{paper:a.drawerPaper}},n.a.createElement("div",{className:a.drawerHeader},n.a.createElement(D.a,{onClick:this.handleDrawerClose},n.a.createElement(Le.a,null))),n.a.createElement(Te.a,null),n.a.createElement("div",{className:a.container},n.a.createElement(xe.a,{variant:"h4",gutterBottom:!0},"Design Your Palette"),n.a.createElement("div",{className:a.buttons},n.a.createElement(pe.a,{variant:"contained",color:"secondary",onClick:this.clearColors,className:a.button},"Clear Palette"),n.a.createElement(pe.a,{variant:"contained",className:a.button,color:"primary",onClick:this.addRandomColor,disabled:c},"Random Color")),n.a.createElement(Ae,{paletteIsFull:c,addNewColor:this.addNewColor,colors:i}))),n.a.createElement("main",{className:y()(a.content,{[a.contentShift]:l})},n.a.createElement("div",{className:a.drawerHeader}),n.a.createElement(Ve,{colors:i,removeColor:this.removeColor,axis:"xy",onSortEnd:this.onSortEnd,distance:20})))}}]),t}(o.Component);Je.defaultProps={maxColors:20};var Ye=Object(he.a)(qe,{withTheme:!0})(Je),Ke=t(179),_e=[50,100,200,300,400,500,600,700,800,900];function Qe(e){var a,t={paletteName:e.paletteName,id:e.id,emoji:e.emoji,colors:{}},o=Object(Ke.a)(_e);try{for(o.s();!(a=o.n()).done;){var n=a.value;t.colors[n]=[]}}catch(u){o.e(u)}finally{o.f()}var r,l,i,c=Object(Ke.a)(e.colors);try{for(c.s();!(r=c.n()).done;){var s=r.value,m=(l=s.color,i=10,x.a.scale(function(e){var a="#fff";return[x()(e).darken(1.4).hex(),e,a]}(l)).mode("lab").colors(i)).reverse();for(var d in m)t.colors[_e[d]].push({name:"".concat(s.name," ").concat(_e[d]),id:s.name.toLowerCase().replace(/ /g,"-"),hex:m[d],rgb:x()(m[d]).css(),rgba:x()(m[d]).css().replace("rgb","rgba").replace(")",",1.0)")})}}catch(u){c.e(u)}finally{c.f()}return t}var Xe=function(e){Object(u.a)(t,e);var a=Object(h.a)(t);function t(e){var o;Object(s.a)(this,t),o=a.call(this,e);var n=JSON.parse(window.localStorage.getItem("palettes"));return o.state={palettes:n||Ue},o.savePalette=o.savePalette.bind(Object(d.a)(o)),o.findPalette=o.findPalette.bind(Object(d.a)(o)),o.deletePalette=o.deletePalette.bind(Object(d.a)(o)),o}return Object(m.a)(t,[{key:"findPalette",value:function(e){return this.state.palettes.find((function(a){return a.id===e}))}},{key:"deletePalette",value:function(e){this.setState((function(a){return{palettes:a.palettes.filter((function(a){return a.id!==e}))}}),this.syncLocalStorage)}},{key:"savePalette",value:function(e){this.setState({palettes:[].concat(Object(c.a)(this.state.palettes),[e])},this.syncLocalStorage)}},{key:"syncLocalStorage",value:function(){window.localStorage.setItem("palettes",JSON.stringify(this.state.palettes))}},{key:"render",value:function(){var e=this;return n.a.createElement(p.a,{render:function(a){var t=a.location;return n.a.createElement(f.TransitionGroup,null,n.a.createElement(f.CSSTransition,{key:t.key,classNames:"page",timeout:500},n.a.createElement(g.a,{location:t},n.a.createElement(p.a,{exact:!0,path:"/palette/new",render:function(a){return n.a.createElement(ue,null,n.a.createElement(Ye,Object.assign({savePalette:e.savePalette,palettes:e.state.palettes},a)))}}),n.a.createElement(p.a,{exact:!0,path:"/palette/:paletteId/:colorId",render:function(a){return n.a.createElement(ue,null,n.a.createElement(de,{colorId:a.match.params.colorId,palette:Qe(e.findPalette(a.match.params.paletteId))}))}}),n.a.createElement(p.a,{exact:!0,path:"/",render:function(a){return n.a.createElement(ue,null,n.a.createElement(se,Object.assign({palettes:e.state.palettes,deletePalette:e.deletePalette},a)))}}),n.a.createElement(p.a,{exact:!0,path:"/palette/:id",render:function(a){return n.a.createElement(ue,null,n.a.createElement(V,{palette:Qe(e.findPalette(a.match.params.id))}))}}),n.a.createElement(p.a,{render:function(a){return n.a.createElement(ue,null,n.a.createElement(se,Object.assign({palettes:e.state.palettes,deletePalette:e.deletePalette},a)))}}))))}})}}]),t}(o.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(n.a.createElement(i.a,null,n.a.createElement(Xe,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[556,1,2]]]);
//# sourceMappingURL=main.1fa315ee.chunk.js.map