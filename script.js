function kuld() {
    let kuldes = document.getElementById("ir").values;
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => response.json())
      .then(data => displayData(data))
      .catch(error => console.log('Hiba történt:', error));
  }
  

  let table = "<table>";

  table = "<tr> <th> </th> <th></th> </tr>";

  tableq = "</table>";







  
  
  
   
    
  
    


    

   