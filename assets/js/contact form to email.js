// function emailSend(){

//     var City1 = document.getElementById("city1").value  
//     var city2 = document.getElementById("city2").value
//     var weight=  document.getElementById("weight").value
//     var weightUnit= document.getElementById("weight_unit").value
//     var goods= document.getElementById("goods").value
//     var vehicles= document.getElementById("vehicles").value
//     var date= document.getElementById("date").value
//     var name= document.getElementById("name").value
//     var email= document.getElementById("email").value
//     var phone= document.getElementById("phone").value

//     var messageBody ="City1" + City1 + 
//     "</br> City2"+ city2 +
//     "</br Weight"+ weight +
//     "</br> WeightUnit"+ weightUnit +
//     "</br> Goods" + goods +
//     "</br> Vehicles" + vehicles +
//     "</br Date" + date +
//     "</br Name" + name +
//     "</br Email" + email +
//     "</br Phone" + phone;

//     Email.send({
//         Host : "smtp.elasticemail.com",
//         Username : "himanshubharadwaj1672@gmail.com",
//         Password : "884D619C72E911B51C1DCC44F9C5ED3E945D",
//         To : 'contacttranspozz@gmail.com',
//         From : "himanshubharadwaj1672@gmail.com",
//         Subject : "Transport related work",
//         Body : messageBody
//     }).then(
//       message => alert(message)
//     );  
//     }
