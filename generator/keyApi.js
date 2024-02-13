export default function keyData(){

  async function oneKey(){

    try {
      const res = await fetch(`https://connect.squareup.com/v2/${token}`,{
          method: 'GET',
          headers: {
          'Authorization': 'Bearer {ACCESS_TOKEN}',
          'Content-type' : 'application/json',
          'square-Version' : '2019-08-14',
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

