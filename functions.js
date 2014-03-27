function myItalic()
{
document.getElementById("editor").style.fontStyle="italic";
}
function myOblique()
{
document.getElementById("editor").style.fontStyle="oblique";
}
function myNormal()
{
document.getElementById("editor").style.fontStyle="normal";
}

function myFontWeight(selectTag)
{
var listValue = selectTag.options[selectTag.selectedIndex].text;
document.getElementById("editor").style.fontWeight=listValue;
}

function myTextSize(selectTag)
{
var listValue = selectTag.options[selectTag.selectedIndex].text;
document.getElementById("editor").style.fontSize=listValue;
}

function myTextDecor(selectTag)
{
var listValue = selectTag.options[selectTag.selectedIndex].text;
document.getElementById("editor").style.textDecoration=listValue;
}

function myTextAlign(selectTag)
{
var listValue = selectTag.options[selectTag.selectedIndex].text;
document.getElementById("editor").style.textAlign=listValue;
}

function myTextColour(selectTag)
{
var listValue = selectTag.options[selectTag.selectedIndex].text;
document.getElementById("editor").style.color=listValue;
}

function myFont(selectTag)
{
var listValue = selectTag.options[selectTag.selectedIndex].text;
document.getElementById("editor").style.fontFamily=listValue;
}

function myHexColourChooser()
{
	document.getElementById("editor").style.color=document.getElementById("hexColourChooser").value;
}

function editorropertiesAlert()
{
alert("Text alignment: " + document.getElementById("editor").style.textAlign +
	"\nfont weight: " + document.getElementById("editor").style.fontWeight +
	"\nfont size: " + document.getElementById("editor").style.fontSize +
	"\nfont style: " + document.getElementById("editor").style.fontStyle +
	"\nfont decoration: " + document.getElementById("editor").style.textDecoration +
	"\nfont decoration: " + document.getElementById("editor").style.color +
	"\nfont family: " + document.getElementById("editor").style.fontFamily +
	"\n\nNote: Will return nothing if that element hasn't been changed");
}