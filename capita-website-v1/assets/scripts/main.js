function handleQuerySubmit(event){
  event.preventDefault();

  const queryData = {
    name: document.getElementById("personNameInput").value,
    email: document.getElementById("emailInput").value,
    query: document.getElementById("queryInput").value
  }

  console.log(queryData);

  // REST API URL
  const restApiURL = 'http://jsonplaceholder.typicode.com/todos';

  // To send the queryData we need REST API Client 
  const xmlHttpReq = new XMLHttpRequest();

  xmlHttpReq.onreadystatechange = function(){
    console.log('onreadystatechange');

    if (this.readyState == 4 && this.status == 201) {
      // TODO: display the success box only if you get the 
      // response with 201
      alert('Saved Successfully!');
    }

  }
  xmlHttpReq.open('POST', restApiURL, true);
  xmlHttpReq.send(queryData);
}