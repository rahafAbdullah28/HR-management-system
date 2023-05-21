"use strict";
     
function employeeId(){
     var val = Math.floor(1000 + Math.random() * 9000);
     console.log(val);
}

function calculateSalary(level){
     let min,max,salary;
     switch(level){
          case'Senior':
          min = 1500;
          max = 2000;
          break;
          case'Mid-Senior':
          min = 1000;
          max = 1500;
          break;
          case'Junior':
          min = 500;
          max = 1000;
          break;
          default:
               return'invalid level';
          }
          min = Math.ceil(min);
          max = Math.floor(max);
     salary = Math.floor(Math.random()*(max-min)+min);
     return salary-(salary*0.075)//tax
     }

let Ghazi = {
     Id : employeeId(),
     fullName:"Ghazi Samer",
      Department:"Administration",
      level: "Senior",
      imageUrl:"https://creazilla-store.fra1.digitaloceanspaces.com/cliparts/18975/office-worker-clipart-xl.png",
      salary: calculateSalary('Senior'),
      };

 let Lana = {
      Id : employeeId() ,
      fullName:"Lana Ali",
      Department:"Finance",
      level: "Senior",
      imageUrl:"https://thumb.ac-illust.com/7f/7fa06e257a29ce0e1d568afe5a4a1dda_t.jpeg",
      salary: calculateSalary('Senior'),
       };

 let Tamara = {
       Id : employeeId() ,
       fullName: "Tamara Ayoub",
       Department:"Marketing",
       level: "Senior",
       imageUrl:"https://thumb.ac-illust.com/7f/7fa06e257a29ce0e1d568afe5a4a1dda_t.jpeg",
       salary: calculateSalary('Senior'),
        };

 let Safi = {
        Id : employeeId() ,
        fullName: "Safi Walid",
        Department:"Administration",
        level: "Mid-Senior",
        imageUrl :"https://creazilla-store.fra1.digitaloceanspaces.com/cliparts/18975/office-worker-clipart-xl.png",
        salary: calculateSalary('Mid-Senior'),
         };
 let Omar = {
          Id : employeeId() ,
          fullName: "Omar Zaid",
          Department:"Development",
          level: "Senior",
          imageUrl :"https://creazilla-store.fra1.digitaloceanspaces.com/cliparts/18975/office-worker-clipart-xl.png",
          salary: calculateSalary('Senior'),
           };
 let Rana = {
               Id : employeeId() ,
               fullName: "Rana Saleh",
               Department:"Development",
               level: "Junior",
               imageUrl:"https://thumb.ac-illust.com/7f/7fa06e257a29ce0e1d568afe5a4a1dda_t.jpeg",
               salary: calculateSalary('Junior'),
                };
 let Hadi = {
                    Id : employeeId() ,
                    fullName: "Hadi Ahmad",
                    Department:"Finance",
                    level: "Mid-Senior",
                    imageUrl :"https://creazilla-store.fra1.digitaloceanspaces.com/cliparts/18975/office-worker-clipart-xl.png",
                    salary: calculateSalary('Mid-Senior'),
                     };
     

         
         console.table(Ghazi);
         console.table(Lana);
         console.table(Tamara);
         console.table(Safi);
         console.table(Omar);
         console.table(Rana);
         console.table(Hadi);


         document.getElementById("eName1").innerHTML = " Employee name =  " + Ghazi.fullName  ;
         document.getElementById("eSallary1").innerHTML = "Employee Sallary =  " + Ghazi.salary  ;
         document.getElementById("eName2").innerHTML = " Employee name =  " + Lana.fullName  ;
         document.getElementById("eSallary2").innerHTML = "Employee Sallary =  " + Lana.salary  ;
         document.getElementById("eName3").innerHTML = " Employee name =  " + Tamara.fullName  ;
         document.getElementById("eSallary3").innerHTML = "Employee Sallary =  " + Tamara.salary  ;
         document.getElementById("eName4").innerHTML = " Employee name =  " + Safi.fullName  ;
         document.getElementById("eSallary4").innerHTML = "Employee Sallary =  " + Safi.salary  ;
         document.getElementById("eName5").innerHTML = " Employee name =  " + Omar.fullName  ;
         document.getElementById("eSallary5").innerHTML = "Employee Sallary =  " + Omar.salary  ;
         document.getElementById("eName6").innerHTML = " Employee name =  " + Rana.fullName  ;
         document.getElementById("eSallary6").innerHTML = "Employee Sallary =  " + Rana.salary  ;
         document.getElementById("eName7").innerHTML = " Employee name =  " + Hadi.fullName  ;
         document.getElementById("eSallary7").innerHTML = "Employee Sallary =  " + Hadi.salary  ;
         
         
     
