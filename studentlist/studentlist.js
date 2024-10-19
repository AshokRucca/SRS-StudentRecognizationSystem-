function search(){
    var input,filter,table,tr,td,i,textValue;
    input =document.getElementById("searchInput");
    filter=input.value.toUpperCase();
    table=document.getElementById('tail1');
    tr=table.getElementsByTagName("tr");

    for (i=0;i<tr.length;i++){
        td=tr[i].getElementsByTagName("td")[0];
        if(td){
            textValue=td.textContent || td.innerText;
            if(textValue.toUpperCase().indexOf(filter)>-1)
            {
                tr[i].style.display=""
            }
            else
            {
                tr[i].style.display='none';
            }
        
        }
        

    }
}

function findTopStudents() {
    const table = document.getElementById('tail1');
    const rows = Array.from(table.rows).slice(1); // Exclude header row

    // Create an array of student objects
    const students = rows.map(row => {
        return {
            name: row.cells[0].innerText,
            score: parseInt(row.cells[9].innerText, 10)
        };
    });

    // Sort students by score in descending order
    students.sort((a, b) => b.score - a.score);

    // Get top 3 students
    const topStudents = students.slice(0, 3);

    // Display results
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = '<h3>Top 3 Students:</h3>' + topStudents.map(student => 
        `${student.name}: ${student.score}`).join('<br>');
}
