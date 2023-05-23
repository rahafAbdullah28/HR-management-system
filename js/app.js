'use strict';
    
function Employee(name,department,level,image){
     this.employeeId=0;
    this.empName=name;
    this.empDep=department;
    this.empLevel=level;
    this.empImage=image;
     this.empSalary=0;
}
Employee.prototype.empId = function(){
        this.employeeId= Math.floor(1000 + Math.random() * 9000);
}
Employee.prototype.employeeSalary = function(){
     let min,max,salary;
     switch(this.empLevel){
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
         this.empSalary=salary-(salary*0.075)//tax
     }

let Ghazi= new Employee("Ghazi Samer","Administration","Senior","https://creazilla-store.fra1.digitaloceanspaces.com/cliparts/18975/office-worker-clipart-xl.png");
let Lana= new Employee("Lana Ali","Finance","Senior","https://thumb.ac-illust.com/7f/7fa06e257a29ce0e1d568afe5a4a1dda_t.jpeg");
let Tamara=new Employee("Tamara Ayoub","Marketing", "Senior","https://thumb.ac-illust.com/7f/7fa06e257a29ce0e1d568afe5a4a1dda_t.jpeg");
let Safi=new Employee("Safi Walid","Administration","Mid-Senior","https://creazilla-store.fra1.digitaloceanspaces.com/cliparts/18975/office-worker-clipart-xl.png");
let Omar=new Employee("Omar Zaid","Development","Senior","https://creazilla-store.fra1.digitaloceanspaces.com/cliparts/18975/office-worker-clipart-xl.png");
let Rana=new Employee("Rana Saleh","Development","Junior","https://thumb.ac-illust.com/7f/7fa06e257a29ce0e1d568afe5a4a1dda_t.jpeg");
let Hadi=new Employee("Hadi Ahmad","Finance","Mid-Senior","https://creazilla-store.fra1.digitaloceanspaces.com/cliparts/18975/office-worker-clipart-xl.png");
Ghazi.empId();
Ghazi.employeeSalary();
Lana.empId();
Lana.employeeSalary();
Tamara.empId();
Tamara.employeeSalary();
Safi.empId();
Safi.employeeSalary();
Omar.empId();
Omar.employeeSalary();
Rana.empId();
Rana.employeeSalary();
Hadi.empId();
Hadi.employeeSalary();


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

