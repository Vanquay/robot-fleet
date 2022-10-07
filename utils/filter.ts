//Function to help search and filter table. 

const filter = () => {
    var tr, td, searchValue, i;
    var input = document.getElementById("filter");
    var filter = input.value.toUpperCase();
    var table = document.getElementById("robotTable");
    tr = table.getElementsByTagName("tr");

    //Loop through rows to find ID
    for (i = 0; i < tr.length; i++){
        td = tr[i].getElementsByTagName("td")[0];
        if(td){
            searchValue = td.textContent || td.innerText;
            if (searchValue.toUpperCase().indexOf(filter) > -1){
                tr[i].style.display = "";
            }
            else {
                tr[i].style.display = "none";
            }
        }
    }
}

export default filter;