function playerFinder() {
    var input
    var filter
    var table
    var  tr
    var  td 
    var i
    var txtValue;
    input = document.getElementById("playerInput");
    filter = input.value.toUpperCase();
    table = document.getElementById("player");
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[0];
      if (td) {
        txtValue = td.textContent || td.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }       
    }
  }

     