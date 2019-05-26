function handleFileSelect(evt) {
    evt.stopPropagation();
    evt.preventDefault();

    var files = evt.dataTransfer.files; // FileList object.
    var reader = new FileReader();  
    reader.onload = function(event) {            
        document.getElementById('drop_zone').value = event.target.result;
    }        
    reader.readAsText(files[0],"UTF-8");
}

function handleDragOver(evt) {
    evt.stopPropagation(); // stops the browser from redirecting.
    evt.preventDefault();
    evt.dataTransfer.dropEffect = 'copy'; // Explicitly show this is a copy.
}

// Setup the dnd listeners.
var dropZone = document.getElementById('drop_zone');
dropZone.addEventListener('dragover', handleDragOver, false);
dropZone.addEventListener('drop', handleFileSelect, false);