let url = 'http://api.icndb.com/jokes/random';

let config = {
    url : 'http://api.icndb.com/jokes/random',
    type: 'GET',
    data: '',    
};

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

function ajax() {

    return new Promise(function(resolve, reject) {
        
        let req = new XMLHttpRequest();
        req.open(config.type, config.url, true );
        req.send();
        req.onreadystatechange = function() {
            if (req.readyState == 4) {
                
                if (req.status == 200) {                    
                    resolve(req.response);
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

document.getElementById('but').addEventListener('click', function() {
    
    ajax().then(resolveReq, rejectReq)
});

function resolveReq(response) {
    console.log('resolve successfully!!!');
}

function rejectReq(status) {
    console.log(status);
    document.querySelector('section').className = 'error';  
}


