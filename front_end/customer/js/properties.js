//const api_url = 'https://ys8gxfz792.execute-api.us-east-1.amazonaws.com/prod';

//const resource = '/properties';
const url = "https://6jkdarm0d9.execute-api.us-east-1.amazonaws.com/project_final/project";

async function getListings() {
    try {
        let res = await fetch(url);
        let data = await res.json();

        console.log('Response Body:', data.body);

    
        let result = JSON.parse(data.body);

        return result;
    } catch (error) {
        console.error('Error fetching listings:', error);
        return [];
    }
}



async function renderListings() {
    let listings = await getListings();
    if (!Array.isArray(listings)){
        console.error("Listings is not an array:", listings);
        return;
    }
    
    let html = '';
    
    listings.forEach(p => {
        let htmlSegment = `
        <div class="col-md-4">
            <div class="card mb-4 box-shadow">
              <img class="card-img-top" src="${p.imageUrl}" alt="Thumbnail [100%x225]" >
              <div class="list-card-info">  
                    <a href="propertydetail.html?${p.pid}" class="list-card-link list-card-link-top-margin" tabindex="0" id="">
                   <address class="list-card-addr">${p.str_address}</address></a> 
                  <div class="list-card-footer">
                  </div>
                  <div class="list-card-heading">
                      <div class="list-card-price">$${p.price}</div>
                      <ul class="list-card-details">
                        <li class="">${p.beds}<abbr class="list-card-label"> bds</abbr></li>
                        <li class="">${p.baths}<abbr class="list-card-label"> ba</abbr></li>
                        <li class="">${p.sqft}<abbr class="list-card-label"> sqft</abbr></li>
                   </ul>
                </div>
              </div>
            </div>
        </div>`;
        html += htmlSegment;
        })
    
    let card = document.querySelector('.row');
    card.innerHTML = html;
    }
    

renderListings();
