//Menu drawer button (Only used on smaller screen sizes) 
document.addEventListener('polymer-ready', function() {
  var navicon = document.getElementById('navicon');
  var drawerPanel = document.getElementById('drawerPanel');
  navicon.addEventListener('click', function() {
    drawerPanel.togglePanel();
  });
});

//Popup window function
function popup() {
	var name = prompt("Please enter name for stream", "new cam");
	if (name != null) {
		var ip = prompt("Please enter IP address", "192...")
		if(ip != null) {
			var mac = prompt("Please enter mac address", "50:45:...")
			if(mac != null) {
				var location = prompt("Please enter location (optional)", "")
			}
		}
		var cards = document.getElementById('cards');
		var newCard = document.createElement('button');
		newCard.setAttribute("class", "card");
		newCard.setAttribute("id", name);
		cards.appendChild(newCard);
		
		var newStream = document.getElementById(name);
		
		var newName = document.createElement("h2");
		var nameText = document.createTextNode(name);
		newName.setAttribute("id", "name");
		newName.appendChild(nameText);
		newStream.appendChild(newName);
		
		var newIp = document.createElement("p");
		var ipText = document.createTextNode(ip);
		newIp.setAttribute("class", "streamInfo");
		newIp.setAttribute("id", "ip");
		newIp.appendChild(ipText);
		newStream.appendChild(newIp);
		
		var newMac = document.createElement("p");
		var macText = document.createTextNode(mac);
		newMac.setAttribute("class", "streamInfo");
		newMac.setAttribute("mac", "mac");
		newMac.appendChild(macText);
		newStream.appendChild(newMac);
		
		var newLocation = document.createElement("p");
		var locationText = document.createTextNode(location);
		newLocation.setAttribute("id", "location");
		newLocation.appendChild(locationText);
		newStream.appendChild(newLocation);
	}
}