export default function keyData(){

  async function oneKey(){

    try {
      const res = await fetch(`https://connect.squareupsandbox.com/v2/catalog/search-catalog-items`,{
          method: 'GET',
          headers: {
          'Authorization': 'Bearer {ACCESS_TOKEN}',
          'Content-type' : 'application/json',
          'Square-Version' : '2024-01-18',
          'idempotency_key' : crypto.randomUUID(),  //Use a uuid for this key
        }
      });
      const data = (await res.json());
      return data;
    } catch { 
      if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);  
      }
    }
  } oneKey();
}

