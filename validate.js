function validate_credit() {
	var cd_name = document.getElementById("name").value;
	var cd_num = document.getElementById("cdnumber").value
	var cvv = document.getElementById("cvv").value;
	var mnth = document.getElementById("expiry").value;
	var para = document.createElement("p");
	var bld = document.createElement("b");
	var element = document.getElementById("div1");
	const date = new Date();
	var exp = new Date(mnth);
	if((cd_name.length==0) || (cd_num.length==0) || (cvv.length==0) || (mnth.length==0))
	{
		var node = document.createTextNode("Enter all Fields");
	}
	else if(/^[0-9a-zA-Z]+$/.test(cd_name))
	{
		var node = document.createTextNode("Invalid Name");
	}
	else if(cvv.length!=3)
	{
		var node = document.createTextNode("CVV is invalid");
	}
	else if((exp.getYear() > date.getYear()) || ((exp.getYear() == date.getYear()) && (exp.getMonth() >= date.getMonth())))
	{
		var node = document.createTextNode("Credit card is valid");
	}
	else
	{
		var node = document.createTextNode("Creadit card Expired");
	}
	para.appendChild(bld);
	bld.appendChild(node);
	element.appendChild(para);
}