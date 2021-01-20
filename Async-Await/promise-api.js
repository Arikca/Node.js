const p= Promise.resolve({ id: 1}); //promise already resolved
p.then(result => console.log(result));

const q=  Promise.reject(new Error('reason for rejection ...'));// promise thats already rejected