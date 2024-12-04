class student
{
    constructor(name,batch,college)
    {
        this.name;
        this.batch;
        this.college;

    }
    getname()
    {
        return this.name;
    }
    updateName(name)
    {
        this.name;
    }
}
console.log(student.getname());
student.updateName("Karan");
console.log(student.name);

function updateBatch(batch)
{
    this.batch = batch;
}
student.prototype.updateBatch = updateBatch;
student.updateBatch("G-11");

updateBatch("G111");
student.prototype.updateBatch = updateBatch;
student.updateBatch("G 11");

console.log(student.batch,"batch");
