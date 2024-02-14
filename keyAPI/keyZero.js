export default function buildKey(){

  async function keysGenerated() {
    try {
      const res = await fetch(`https://connect.squareupsandbox.com/v2/catalog`, {
        method: 'POST',
        headers: {
          'Authorization' : 'Bearer {ACCESS_TOKEN}',
          'Content-type' : 'application/json',
          'Square-Version' : '2024-01-18',
          'idempotency_key' : crypto.randomUUID(),
        }
      });
      const data = (await res.json());
      return data;
    } catch {
      if (!res.ok) {
        throw new Error(`HTTP error! status : ${res.status}`);
      }
    }
  } keysGenerated();
}