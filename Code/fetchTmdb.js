function hitButton(){
  fetch('http://localhost:3000/car')
    .then(response => {
      
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(result => {
      
      
      const models = result.map(car => car.model);
      console.log(models);

      
     const typeCar = result.map(car =>{ 
           if (car.type==="SUV"){
             return car.type="5-Seater"
           }
           return car
    });
     console.log(typeCar)
      
      //try to update the type using higher order function avoid using for loop
      
        result.forEach(car => {
        let dateParts = car.year.split('/');
        let year = dateParts[2];
        let month = dateParts[0];
        let day = dateParts[1];
        let formatedDate = `${year}/${month}/${day}`;
        console.log(formatedDate)


        const carListElement = document.getElementById('arrayData');
        let listItem = document.createElement('li');
        listItem.textContent = `${formatedDate} - ${car.model} - ${car.type}`;
        carListElement.appendChild(listItem);
    });
      
        
    })
};

