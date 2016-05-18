document.getElementById('fileInput').onchange = function() {
    var fileSize = document.getElementById('fileInput').files[0].size;
    if(fileSize > 10 * 1024 * 1024) {
        alert("File too big, please use file smaller than 10MB");
    }
};