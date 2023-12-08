const resource_url = "https://tvuseozan2.execute-api.us-east-1.amazonaws.com/update/update";

const form = document.getElementById("edit-property-form");

form.addEventListener("submit", (e) => {
    e.preventDefault();


    const propertyId = document.getElementById("property-id").value;

   
    const data = {
        pid: propertyId,
    };

    const fetchOptions = {
        method: "PUT", 
        mode: "cors",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    };

    fetch(resource_url, fetchOptions)
        .then((response) => response.json())
        .then((result) => {
            console.log("Property updated successfully:", result);
            
        })
        .catch((error) => {
            console.error("Error updating property:", error);
        });

    form.reset();
});
