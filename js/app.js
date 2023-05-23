'use strict';
function employeeId(){
     var val = Math.floor(1000 + Math.random() * 9000);
     return val;
}

function empSalary(level){
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
    
function Employee(id,name,department,level,image,salary){
    this.empId=id;
    this.empName=name;
    this.empDep=department;
    this.empLevel=level;
    this.empImage=image;
    this.empSalary=salary;
   
}


let Ghazi= new Employee(employeeId(),"Ghazi Samer","Administration","Senior","https://creazilla-store.fra1.digitaloceanspaces.com/cliparts/18975/office-worker-clipart-xl.png",empSalary('Senior'));
let Lana= new Employee(employeeId(),"Lana Ali","Finance","Senior","https://thumb.ac-illust.com/7f/7fa06e257a29ce0e1d568afe5a4a1dda_t.jpeg",empSalary('Senior'));
let Tamara=new Employee(employeeId(),"Tamara Ayoub","Marketing", "Senior","https://thumb.ac-illust.com/7f/7fa06e257a29ce0e1d568afe5a4a1dda_t.jpeg",empSalary('Senior'));
let Safi=new Employee(employeeId(),"Safi Walid","Administration","Mid-Senior","https://creazilla-store.fra1.digitaloceanspaces.com/cliparts/18975/office-worker-clipart-xl.png",empSalary('Mid-senior'));
let Omar=new Employee(employeeId(),"Omar Zaid","Development","Senior","https://creazilla-store.fra1.digitaloceanspaces.com/cliparts/18975/office-worker-clipart-xl.png",empSalary('Senior'));
let Rana=new Employee(employeeId(),"Rana Saleh","Development","Junior","https://thumb.ac-illust.com/7f/7fa06e257a29ce0e1d568afe5a4a1dda_t.jpeg",empSalary('Junior'));
let Hadi=new Employee(employeeId(),"Hadi Ahmad","Finance","Mid-Senior","https://creazilla-store.fra1.digitaloceanspaces.com/cliparts/18975/office-worker-clipart-xl.png",empSalary('Mid-Senior'));


console.table(Ghazi);
console.table(Lana);
console.table(Tamara);
console.table(Safi);
console.table(Omar);
console.table(Rana);
console.table(Hadi);

Employee.prototype.renderInfo=function(){
document.write(`<h6> Employee Name :  ${this.empName} </h6>`);
document.write(`<h6> Employee Department :  ${this.empDep} </h6>`);
document.write(`<h6> Employee Salary :  ${this.empSalary} </h6>`);
document.write(`</br>`);
}
Ghazi.renderInfo();
Lana.renderInfo();
Tamara.renderInfo();
Safi.renderInfo();
Omar.renderInfo();
Rana.renderInfo();
Hadi.renderInfo();

