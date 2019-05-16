let url = 'http://api.icndb.com/jokes/random';





function fadeIn() {
    // setTimeout(function() {
    //     document.getElementById('text').className = "hide";
    //     // throw new Error('Oops!');
    // }, 3000);
}

function showAlert() {
    alert('Warning!');
}

function fetchData() {
    let req = new XMLHttpRequest();
    req.open('get', url, false );
    req.send();
    if (req.status == 200){
        let res = JSON.parse(req.responseText);
        document.getElementById("text").innerHTML = res.value.joke;
    }
}

function ajax(config) {

    return new Promise(function(resolve, reject) {
        
        let req = new XMLHttpRequest();
        req.open(config.type, config.url, true );
        req.send();
        req.onreadystatechange = function() {
            if (req.readyState == 4) {
                
                if (req.status == 200) {
                    let res = JSON.parse(req.response);
                    resolve(res.items);
                } else {
                    reject(req.status);
                }
            } else {
                console.log('req processing going on' + req.readyState);
            }
        }
        console.log('request sent successfully');
    });
}


// Exercise 4 - response for q = 'JavaScrip'
// document.getElementById('but').addEventListener('click', function() {
//     
//     let parameter = 'JavaScript'; 

//     let config = {
//         url : 'https://api.github.com/search/repositories?q=' + parameter,
//         type: 'GET',
//         data: '',    
//     };
//     ajax(config).then(resolveReq, rejectReq)
// });

function resolveReq(repos) {
    console.log('response:', repos);
    for (let i = 0; i < repos.length; i++) {
        console.log('repo:', repos[i].url);
        let li = document.createElement('li');
        let repo = document.createElement('div');
        repo.textContent = repos[i].url;
        li.appendChild(repo);

        document.getElementById('repoList').appendChild(li);
    }
}

function rejectReq(status) {
    console.log(status);
    document.querySelector('section').className = 'error';  
}


// function to perform the search for any value
function search() {
    let parameter = document.getElementById('input-search').value; 

    let config = {
        url : 'https://api.github.com/search/repositories?q=' + parameter,
        type: 'GET',
        data: '',    
    };
    ajax(config).then(resolveReq, rejectReq);
}

