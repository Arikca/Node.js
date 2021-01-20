console.log('Before');
/*getUser(1, (user) => {
  getRepositories(user.gitHubUsername, (repos) => {
    getCommits(repos[0], (commits) => {
      console.log(commits);
    })
  })
});*/

//Promise-based approach

getUser(1)
.then(user=> getRepositories(user.gitHubUsername))
.then(repos => getCommits(repos[0]))
.then(commits=> console.log(commits))
.catch(err => console.log("Error", err.message));

//async-await approach

async function displayCommits(){
const user = await getUser();
const repos= await getRepositories(user.gitHubUsername);
const commits= await getCommits(repos[0]);
console.log(commits);
}

function getUser(id) {
return new Promise((resolve, reject)=> {
    //kickoff some async work
    setTimeout(() => {
        console.log('Reading a user from a database...');
        resolve({ id: id, gitHubUsername: 'mosh' });
      }, 2000);
});
  
}

function getRepositories(username) {
    return new Promise((resolve, reject)=> {
        setTimeout(() => {
            console.log('Calling GitHub API...');
            resolve(['repo1', 'repo2', 'repo3']);
          }, 2000);
    });

 
}

function getCommits(repo) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Calling GitHub API...');
            resolve(['commit']);
          }, 2000);
    });
  
}