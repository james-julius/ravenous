const apiKey = 'zyybVKt3rg0VgDNW3C_hLyG_hP_pKu-Ukcpzl_WFtHjE-6iJ1PCjudD2JhZHW6KBHC1u-PHntsobTteXf27awmoSiWBHmqDD8PKt3IX5jgce83ZldxqXOaaAPb-5XXYx';

const Yelp = {
    search(term, location, sortBy) {
        return fetch(
            `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?limit=28&term=${term}&location=${location}&sort_by=${sortBy}`,
    {
        headers: {
            Authorization: `Bearer ${apiKey}`
        }
      }
    )
    .then(response => {
        return response.json();
    })
    .then(jsonResponse => {
        if (jsonResponse.businesses) {
            return jsonResponse.businesses.map(business => {
        return {
            id: business.id,
            imageSrc: business.image_url,
            name: business.name,
            address: business.location.address1,
            full_address: business.location.display_address,
            city: business.location.city,
            state: business.location.state,
            zipCode: business.location.zip_code,
            category: business.categories[0].title,
            rating: business.rating,
            reviewCount: business.review_count,
            phoneNumber: business.phone
         };
        });
    }
        else {console.log("Failed to retrieve API data")}
    })}
};

export default Yelp;