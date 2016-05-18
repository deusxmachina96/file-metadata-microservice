/*document.getElementById('fileInput').onchange = function() {
    var fileSize = document.getElementById('fileInput').files[0].size;
    if(fileSize > 10 * 1024 * 1024) {
        alert("File too big, please use file smaller than 10MB");
    }
};*/
$(document).ready(function() {
   $("#dataForm").submit(function(event) {
       if( $("#fileInput")[0].files[0].size < 10 * 1024 * 1024 ) {
           return;
       }
       $("span").show().fadeOut( 5000 );
       event.preventDefault();
   });
});