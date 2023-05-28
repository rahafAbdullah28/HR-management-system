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
let Safi=new Employee(employeeId(),"Safi Walid","Administration","Mid-Senior","https://creazilla-store.fra1.digitaloceanspaces.com/cliparts/18975/office-worker-clipart-xl.png",empSalary('Mid-Senior'));
let Omar=new Employee(employeeId(),"Omar Zaid","Development","Senior","https://creazilla-store.fra1.digitaloceanspaces.com/cliparts/18975/office-worker-clipart-xl.png",empSalary('Senior'));
let Rana=new Employee(employeeId(),"Rana Saleh","Development","Junior","https://thumb.ac-illust.com/7f/7fa06e257a29ce0e1d568afe5a4a1dda_t.jpeg",empSalary('Junior'));
let Hadi=new Employee(employeeId(),"Hadi Ahmad","Finance","Mid-Senior","https://creazilla-store.fra1.digitaloceanspaces.com/cliparts/18975/office-worker-clipart-xl.png",empSalary('Mid-Senior'));


let mainE=document.getElementsByTagName("main")[0];
 let divP1=document.createElement("div");
 mainE.appendChild(divP1);
 divP1.setAttribute("class", "styleClass");
 Employee.prototype.renderInfo=function(){
     let divC1=document.createElement("div");
     divP1.appendChild(divC1);
     divC1.setAttribute("class", "styleChild");
    let imgC=document.createElement("img");
    imgC.setAttribute("src",`assets/${this.empName}.jpg`);
    divC1.appendChild(imgC);
    imgC.setAttribute("class", "styleImg");
    let p1=document.createElement("p");
    p1.textContent=` Name : ${this.empName} - Id : ${this.empId}`;
    divC1.appendChild(p1);
    p1.setAttribute("class", "styleText");
    let p11=document.createElement("p");
    p11.textContent=` Department : ${this.empDep} - level : ${this.empLevel}`;
    divC1.appendChild(p11);
    p11.setAttribute("class", "styleText");
    let p111=document.createElement("p");
    p111.textContent=` Salary : ${this.empSalary} `;
    divC1.appendChild(p111);
    p111.setAttribute("class", "styleText");
 }


//   let divAdmin=document.createElement("div");
//   let divDev=document.createElement("div");
//   let divFin=document.createElement("div");
//   let divMar=document.createElement("div");

//   function empDepartment(empDep){
//      switch(empDep){
//           case'Administration':
//           divP1.appendChild(divAdmin);
//           break;
//           case'Development':
//           divP1.appendChild(divDev)
//           break;
//           case'Finance':
//           divP1.appendChild(divFin)
//           break;
//           case'Marketing':
//           divP1.appendChild(divMar)
//           break;
//           default:
//                return'invalid department';
//           }  
//      }

//  Ghazi.empDepartment('');
//  Lana.empDepartment('');
//  Tamara.empDepartment('');
//  Safi.empDepartment();
//  Omar.empDepartment();
//  Rana.empDepartment();
//  Hadi.empDepartment();


 Ghazi.renderInfo();
 Lana.renderInfo();
 Tamara.renderInfo();
 Safi.renderInfo();
 Omar.renderInfo();
 Rana.renderInfo();
 Hadi.renderInfo();

 











