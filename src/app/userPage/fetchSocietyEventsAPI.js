


export default async function fetchSocietyEvents(token) {
    
  token = '96bf3bf39979f4f7838c0d01d2535e2b4b2fa000c785145c40ea7cf97e544fb8313b4575fae49991ed0acf7c32080d2890349ac68fa8c5ee21c92a66a3fb578586bb4eae1230939495ef6001571fb8cf8bfb24219c5ad035b58dd19820bfdd5a3a11eb082f53c7da1be03dc04c7ebe56a3f3cde5e32badb69eaa175849729e0e';
  
  //const url = `http://localhost:1337/api/users/me?populate=*`;
  const url = `http://localhost:1337/api/users/me?populate=events.eventImage`;


  //const token = localStorage.getItem('jwt');
  console.log("token in function is:", token);

  const response = await fetch(url, {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
})

const returnedEvents = await response.json();
console.log("these are the society's events about to be returned: ", returnedEvents);
//const stuffToReturn = returnedEvents.data;
//console.log("and withou the data layer:", stuffToReturn);
return returnedEvents;

}