// your code here
function formSubmit(event){
	 event.preventDefault();
	 const nameValue = document.getElementById("name").value;
      const yearValue = document.getElementById("year").value;
	const queryString = `?name=${encodeURIComponent(nameValue)}&year=${encodeURIComponent(yearValue)}`;
	document.getElementById('url').textContent=`https://localhost:8080/${queryString}`;
	
}