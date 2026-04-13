const student ={
    name:"Aditya",
    age : 23,
    marks: 86.60,
    city: "Sangli"
}

console.log(student);
student.city ="Mumbai"
console.log(student);
student.gender = "Male"
console.log(student);
student.marks ="A";
console.log(student);
// student.marks=[98,93,80];
console.log(student);


delete student.gender;
console.log(student);