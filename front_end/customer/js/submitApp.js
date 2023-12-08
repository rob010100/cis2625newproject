
const resource_url = "https://xe8eymn285.execute-api.us-east-1.amazonaws.com/first/applications";
const form = document.getElementById("rental_application");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const formData = new FormData(form);

  // Convert FormData to plain object
  const plainFormData = {};
  formData.forEach((value, key) => {
    plainFormData[key] = value;
  });

  // Fetch options
  const fetchOptions = {
    method: "POST",
    mode: "cors",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(plainFormData),
  };

  fetch(resource_url, fetchOptions);
  
  form.reset();
  
});