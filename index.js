// Add your code here
function submitData(name, email) {
  //Create a data object to be sent in the POST request body
  const formData = {
    name: name,
    email: email,
  };
  
  const convertObject = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json",
    },
    body: JSON.stringify(formData),
  };

  //this sends the POST request and handle the response
  return fetch("http://localhost:3000/users", convertObject)
    .then(function (response) {
      return response.json();
    })
    .then(function (object) {
      // Log the returned object ID to the console
      //console.log("ID:", object.id);
      const p = document.createElement("p");
      p.textContent = `ID: ${object.id}`;
      document.body.appendChild(p);
    })
    .catch(function (error) {
      // Log error message to the console
      //console.error("Error:", error.message);
      const p = document.createElement("p");
      p.textContent = error.message;
      document.body.appendChild(p);

    });
}
//function call
submitData("Ninah", "hi@example.com");
