// JavaScript Document
//Number validation

function numberOnly(e)
{
	var key;
	var keychar;
	
	if (window.event)
	key = window.event.keyCode;
	else if (e)
	key = e.which;
	else
	return true;
	keychar = String.fromCharCode(key);
	keychar = keychar.toLowerCase();
	
	// control keys
	if ((key==null) || (key==0) || (key==8) || (key==9) || (key==13) || (key==27) )
		return true;
	// alphas and numbers
	else if ((("0123456789-").indexOf(keychar) > -1))
		return true;
	else
	{
		alert('Only numbers allowed');
		return false;
	}
}

function letteronly(e,oBj)
{
	var keynum
	var keychar
	var numcheck
	
	if (window.event)
	key = window.event.keyCode;
	else if (e)
	key = e.which;
	else
	return true;
	keychar = String.fromCharCode(key);
	keychar = keychar.toLowerCase();
	

	var splCharCheck = /[a-zA-Z-, ]/;
//var splCharCheck = /[a-zA-Z!@#$%&*()+=|_"'`~:;<>?,.\/\\\^\\{\}\[\]]/;
// var splCharCheck = /[0-9!@#$%&*()+=|_"'`~:;<>?,.\/\\\^\\{\}\[\]]/;

	if ((key==null) || (key==0) || (key==8) || (key==9) || (key==13) || (key==27) )
		return true;
	else if(splCharCheck.test(keychar))
			return true;
	else
	{
		alert('Only alphabets are allowed');
		return false;
	}
	
//	return (!splCharCheck.test(keychar))
}

function numberOnlyold(e,oBj)
{
	var keynum
	var keychar
	var numcheck
	
	if(window.event) // IE
	{
		keynum = e.keyCode
	}
	else if(e.which) // Netscape/Firefox/Opera
	{
		keynum = e.which
	}
	
	var keychar = String.fromCharCode(keynum)
	

	var splCharCheck = /[a-zA-Z0-9 ]/;
//var splCharCheck = /[a-zA-Z!@#$%&*()+=|_"'`~:;<>?,.\/\\\^\\{\}\[\]]/;
// var splCharCheck = /[0-9!@#$%&*()+=|_"'`~:;<>?,.\/\\\^\\{\}\[\]]/;

	if(keynum == 8 )
		return true
	else if(splCharCheck.test(keychar))
			return true;
	else
	{
		alert('Only numbers and alphabets are allowed');
		return false;
	}
	
//	return (!splCharCheck.test(keychar))
}
//onkeypress="return numberOnly(event, this);"

//URL validation
function Validateurl(url) {
     var theurl=url;
     var tomatch= /(www.){1}[A-Za-z0-9]+\.[A-Za-z]{2,3}/
     if (tomatch.test(theurl))
     {
        // window.alert("URL OK.");
         return true;
     }
     else
     {
         //window.alert("URL invalid. Try again.");
         return false; 
     }
}

function checkEmail(emailval) {
	if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailval)){
		return (true)
	}
	alert("Invalid E-mail Address! Please re-enter.")
	return (false)
}


//Date check validation
function trimAll(sString)
{

	while (sString.substring(0,1) == ' ')
	{
		sString = sString.substring(1, sString.length);
	}
	while (sString.substring(sString.length-1, sString.length) == ' ')
	{
		sString = sString.substring(0,sString.length-1);
	}

	return sString;
}

// to validate the file extensions
function File_Extentsion_Validate(value)	
{ //alert('image'); 

	if(trimAll(value) != "")	
	{
		var strarr = value.split(".");
		var len = strarr.length;
		var type = strarr[len-1].toLowerCase();								
		if (type!='jpeg' && type !='gif' && type !='jpg' && type !='png') {							
			alert("Please only upload the following image formats: JPEG, GIF, PNG");
			//ctrl.select();
			return false;
		}	
		else
			return true;
	}
}

function AllFile_Extentsion_Validate(value)	
{
	if(trimAll(value) != "")	
	{
		var strarr = value.split(".");
		var len = strarr.length;
		var type = strarr[len-1].toLowerCase();	
		
		if (type == 'exe' || type == 'php' || type =='html' || type =='msc' || type =='asp' || type =='aspx' || type =='js' || type =='css' || type =='sql') {							
			alert("Please upload a valid file format");
			return false;
		}
		else
			return true;
	}
}

function File_Extentsion_Validate_Videotypes(value)
{
	if(trimAll(value) != "")
	{
		var strarr = value.split(".");
		var len = strarr.length;
		var type = strarr[len-1].toLowerCase();
		if (type!='flv' && type !='mp4' && type !='wmv' && type !='avi') {
			alert("Please only upload the following video formats: FLV, MP4, WMV, AVI ");
			//ctrl.select();
			return false;
		}
		else
			return true;
	}
}
