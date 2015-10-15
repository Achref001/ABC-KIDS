var widgetAPI = new Common.API.Widget();
var tvKey = new Common.API.TVKeyValue();
var i=0;
var max=6;
var Main =
{

};

Main.onLoad = function()
{
	// Enable key event processing
	this.enableKeys();
	widgetAPI.sendReadyEvent();
	if(sessionStorage.getItem("indice")==null)
		navigation("RIGHT");
	else
		{i=sessionStorage.getItem("indice")-1;
	
	navigation("RIGHT");}
};

Main.onUnload = function()
{

};

Main.enableKeys = function()
{
	document.getElementById("anchor").focus();
};

Main.keyDown = function()
{
	var keyCode = event.keyCode;
	alert("Key pressed: " + keyCode);

	switch(keyCode)
	{
		case tvKey.KEY_RETURN:
		case tvKey.KEY_PANEL_RETURN:
			alert("RETURN");
			widgetAPI.sendReturnEvent();
			break;
		case tvKey.KEY_LEFT:
			alert("LEFT");
			navigation("LEFT");
			break;
		case tvKey.KEY_RIGHT:
			alert("RIGHT");
			navigation("RIGHT");
			break;
		case tvKey.KEY_UP:
			alert("UP");
			break;
		case tvKey.KEY_DOWN:
			alert("DOWN");
			break;
		case tvKey.KEY_ENTER:
		case tvKey.KEY_PANEL_ENTER:
			alert("ENTER");
			if(i==1){
				sessionStorage.setItem("indice",i);
				parent.location="Alphabet.html";
			}
			if(i==2){
				sessionStorage.setItem("indice",i);
				parent.location="Numero.html";
			}
			if(i==3){
				sessionStorage.setItem("indice",i);
				parent.location="Animeaux.html";
			}if(i==4){
				sessionStorage.setItem("indice",i);
				parent.location="Drapeaux.html";
			}
			if(i==5){
				sessionStorage.setItem("indice",i);
				parent.location="Chansons.html";
			}
			if(i==6){
				sessionStorage.setItem("indice",i);
				parent.location="AboutUs.html";
			}
			break;
		default:
			alert("Unhandled key");
			break;
	}
};
function navigation(dir){
   $("#fig"+i).removeClass("selected");
	if(dir=="RIGHT"){
		if(i==max) i=1;
	else i++;
	}
	if(dir=="LEFT"){
		if(i==1) i=max;
		else i--;
	}
	 $("#fig"+i).addClass("selected");
}
