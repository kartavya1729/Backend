// Class in Javascript
class  Student 
{
    name;
    class;
    college

    constructor(name,batch,college)
    {
     this.name= name;
     this.batch = batch;
     this.college=college;
    }

    getName() 
    {
        return this.name;
    }

    updateName(name)
    {
        this.name = name;
    }
}

let student = new Student("Joel","G-10","Chitkara");

console.log(student.getName());
student.updateName("Karan");
console.log(student.name);

function parentObject(){
let batch;

function updateBatch(batch)
{
   this.batch = batch;
} updateBatch("123");
console.log(batch);
}

parentObject();
// updateBatch("G111");
// Student.prototype.updateBatch = updateBatch;
// student.updateBatch("G-11");

console.log(student.batch,"batch");


// this keyword in Javascirpt
