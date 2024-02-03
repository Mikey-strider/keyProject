const keySet = {
  keys: [],
  locked: false,
  lockTime: null
};

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
    const fetchedKeys = (await res.json());
    return fetchedKeys;
  } catch { 
    if (!res.ok) {
    throw new Error(`HTTP error! status: ${res.status}`);  
    }
  }
  // Function to fetch a token from the API
  async function fetchKey() {
    if (keySet.locked) {
        const currentTime = new Date();
        const lockedDuration = (currentTime - keySet.lockTime) / (1000 * 60 * 60); // in hours
  
        if (lockedDuration >= 24) {
            keySet.locked = false;
            keySet.lockTime = null;
        } else {
            console.log('Key set is locked. Please try again later.');
            return;
        }
    }
  
    if (keySet.keys.length === 0) {
        console.log('Fetching keys from API...');
        try {
            keySet.keys = await oneKey();
        } catch (error) {
            console.error('Error fetching keys:', error);
            return;
        }
    }
  
    const key = keySet.keys.pop();
    console.log('Key retrieved:', key);
  
    if (keySet.keys.length === 0) {
        console.log('No more tokens left in the set.');
        keySet.locked = true;
        keySet.lockTime = new Date();
    } else {
        console.log('Keys left:', keySet.keys.length);
    }
  }
}








// Simulated API call to fetch tokens
// function oneKey() {
//   // Simulated response from API
//   return new Promise((resolve, reject) => {
//       setTimeout(() => {
//           const keys = ['token1', 'token2', 'token3']; // Sample tokens
//           resolve(keys);
//       }, 1000); // Simulating delay of 1 second
//   });
// }

// // Example usage:
// fetchKey();
// fetchKey();
// fetchKey();
// fetchKey(); // Will be locked for the next 24 hours
