const resource_url = "https://hjduawd8s2.execute-api.us-east-1.amazonaws.com/delete/deletion";

const form = document.getElementById("delete-property-form");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const propertyId = document.getElementById("property-id").value;

  
    const data = {
        pid: propertyId,
      
    };

    const fetchOptions = {
        method: "DELETE", 
        mode: "cors",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    };

fetch(resource_url, fetchOptions)
    .then((response) => {
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
    })
    .then((result) => {
        if (result && result.body) {
            console.log("Property deleted successfully:", result.body);
        } else {
            console.error("Unexpected response structure:", result);
        }
    })
    .catch((error) => {
        console.error("Error deleting property:", error);
    });

        
    form.reset();
    
});
