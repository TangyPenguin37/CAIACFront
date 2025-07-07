//api to get event to display - endpoint of /api/events
const token = '96bf3bf39979f4f7838c0d01d2535e2b4b2fa000c785145c40ea7cf97e544fb8313b4575fae49991ed0acf7c32080d2890349ac68fa8c5ee21c92a66a3fb578586bb4eae1230939495ef6001571fb8cf8bfb24219c5ad035b58dd19820bfdd5a3a11eb082f53c7da1be03dc04c7ebe56a3f3cde5e32badb69eaa175849729e0e';


export default async function fetchEventsToDisplay() {
    const url = 'http://localhost:1337/api/events?populate=*';
    //const url = 'http://localhost:1337/api/events?populate[society][populate]=*';
    //const url = 'http://localhost:1337/api/events?populate=*&populate[society][populate]=logo';
     //const url = 'http://localhost:1337/api/events?populate=*&populate[society][populate]=logo';


    const response = await fetch(url, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
    })
    
    const returnResponse = await response.json();
    console.log("this is what is being returned: ", returnResponse);
    const stuffToReturn = returnResponse.data;
    console.log("stufftoreturn is:", stuffToReturn);
    return stuffToReturn;
    //rember to remove a layer, when wrapped in btoh array and object, and to include 'return x' statement
}

