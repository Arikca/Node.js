//Promise is an object which holds the result of a asynchronous operation
//when its kicked in its in pending state then resolved or rejected based on the operation

const p =new Promise((resolve, reject) => {
    //do some async work
    //gonna return either a result or an error
    setTimeout(() => {
       // resolve(1);
       reject(new Error("message"));
    }, 2000);
    
    
});

//we consume the promise using .then or .catch
p
.then(result => console.log('Result', result))
.catch(err => console.log('Error', err.message));