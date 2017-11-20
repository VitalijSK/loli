const httpRequest = new XMLHttpRequest();

setInterval(function() {
	for(let i = 1; i < 21; i++)
	{
	setTimeout(function(){
	httpRequest.open("GET", i+".txt", true);
	httpRequest.onreadystatechange = OnRequestStateChange;
	httpRequest.send(null);
	}, i*100);
	}
}, 2000);


function OnRequestStateChange()
{
if (httpRequest.readyState != 4)
  return;
if (httpRequest.status != 200)
  return;

	document.getElementById("t9n").innerHTML = httpRequest.responseText;


}