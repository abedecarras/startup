function saveData() {
   save();
   add();
}

function clearData() {
   clear();
   remove();
}


function save() {
    
    if (typeof(Storage) !== "undefined") {
        let data = document.getElementById('txt-ar').value;
        localStorage.setItem('data', data);
      } else {
        console.log('Sorry! No Web Storage support..');         
      }
    
}

function clear() {
    localStorage.clear();
    console.log('clear data');    
}

/////////////////////////////////////////////////////////////////////////////////////
// IndexedDB
//prefixes of implementation that we want to test
window.indexedDB = window.indexedDB || window.mozIndexedDB || 
window.webkitIndexedDB || window.msIndexedDB;

//prefixes of window.IDB objects
window.IDBTransaction = window.IDBTransaction || 
window.webkitIDBTransaction || window.msIDBTransaction;
window.IDBKeyRange = window.IDBKeyRange || window.webkitIDBKeyRange || 
window.msIDBKeyRange

if (!window.indexedDB) {
   window.alert("Your browser doesn't support a stable version of IndexedDB.")
}


const textData = [];
 var db;
 var request = window.indexedDB.open("newDatabase", 1);
 
 request.onerror = function(event) {
    console.log("error: ");
 };
 
 request.onsuccess = function(event) {
    db = request.result;
    console.log("success: "+ db);
 };
 
 request.onupgradeneeded = function(event) {
    var db = event.target.result;
    var objectStore = db.createObjectStore("text", {keyPath: "id"});
    
    for (var i in textData) {
       objectStore.add(textData[i]);
    }
 }
 
 function read() {
    var transaction = db.transaction(["text"]);
    var objectStore = transaction.objectStore("text");
    var request = objectStore.get("001");
    
    request.onerror = function(event) {
       alert("Unable to retrieve daa from database!");
    };
    
    request.onsuccess = function(event) {       
              
       if(request.result) {
         document.getElementById('txt-ar').innerHTML = request.result.data;         
       } else {
          console.log("data couldn't be found in your database!");
       }
    };
 }

 function add() {
    console.log('entrooo');
    
   let data = document.getElementById('txt-ar').value;
   var request = db.transaction(["text"], "readwrite")
   .objectStore("text").put({ id: "01", data: data });
   request.onsuccess = function(event) {
      console.log("data has been added to your database.");         
   };
   
   request.onerror = function(event) {
      console.log("Unable to add data! ");
   }
}

function remove() {
   var request = db.transaction(["text"], "readwrite")
   .objectStore("text").delete("01");
   
   request.onsuccess = function(event) {
      console.log("data has been removed from your database.");
   };
}
