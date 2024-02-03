

export default function getKey(){

  async function oneKey(){

    try {
      const res = await fetch(`https://connect.squareup.com/v2/${token}`,{
        method: 'GET',
        headers: {
        'Authorization': 'Bearer {ACCESS_TOKEN}',
        'Content-type' : 'application/json',
        'square-Version' : '2019-08-14',
        'idempotency_key' : '{UNIQUE_KEY}',
      }
      });
      const fetchedKey = (await res.json());
    } catch { 
      if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);  
      }
    }
  }
}