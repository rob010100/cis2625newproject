
const url = "https://4ztinvy7v4.execute-api.us-east-1.amazonaws.com/view_applications/application";

async function getApplications() {
    try {
        let res = await fetch(url);
        let data = await res.json();

        console.log('Response Body:', data.body);

        let result = JSON.parse(data.body);

        return result;
    } catch (error) {
        console.error("Error fetching applications:", error);
        return [];
    }
}

async function renderApplications() {
    let applications = await getApplications();
    if (!Array.isArray(applications)){
        console.error("Applications is not an array:", applications);
        return;
    }
    
    let html = '';
    
    applications.forEach(a => {
        let htmlSegment = `
        <div class="col-md-4">
            <div class="card mb-4 box-shadow">
              <div class="list-card-info">  
                    <a href="applicationdetail.html?${a.pid}" class="list-card-link list-card-link-top-margin" tabindex="0" id="">
                   <address class="list-card-addr">${a.first_name} ${a.last_name}</address></a> 
                  <div class="list-card-footer">
                  </div>
                  <div class="list-card-heading">
                      <ul class="list-card-details">
                        <li class="">Email: ${a.email}</li>
                        <li class="">Phone: ${a.phone}</li>
                        <li class="">License: ${a.license}</li>
                        <li class="">Address: ${a.current_address}</li>
                        <li class="">Income: $${a.monthly_income}</li>
                        <li class="">Employment Status: ${a.employment_status}</li>
                        <li class="">Employer Name: ${a.employer_name}</li>
                        <li class="">Rental History: ${a.rental_history}</li>
                   </ul>
                </div>
              </div>
            </div>
        </div>`;
        html += htmlSegment;
        })
    
    let card = document.querySelector("#applications");
    card.innerHTML = html;
    }
    

renderApplications();
