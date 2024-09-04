/*Object Declaration Syntex
const objectName ={
    key: 'value',
    key: 'value',
}
*/
//-----------------------------------------------------------------
//example: Suppose i create a Student object

const student ={
    name: 'Rehan',
    class: 'MBA',
    subject: 'Accounting',
}

console.log('Student All Object is :', student) // For All object and Value
//OutPut: Student All Object is : { name: 'Rehan', class: 'MBA', subject: 'Accounting' }

console.log('single object:', student['name']) // For single object and value
//Output: single object: Rehan.


//---------------------Change or Update object Value-------------------------

const employee = {
    name: 'Rehan',
    age: '25',
    profession: 'Developer',
    selary: '25000',
}
employee.selary = 3000; // use for Update
// employee[selary] = 30000
console.log('Employee Details:', employee)

//Output: Employee Details: { name: 'Rehan', age: '25', profession: 'Developer', selary: 3000 }


//---------------------.Print all object key----------------------------------
const computer = {
    brand: 'Hp',
    processor : ' Intel core i-7',
    price: '5500 tk',
}

const keys = Object.keys(computer) //Only For Key 
console.log('This is Only Object Keys:', keys)

//Output: This is Only Object Keys: [ 'brand', 'processor', 'price' ]


//----------------------Print All object key value----------------------------
const mobile = {
    brand: 'Samsung',
    processor : 'coalcomn Snapdragor',
    ram: '6 GB',
    rom: '128 GB',
    price: '5500 tk',
}

const value = Object.values(mobile); // only key value
console.log('All object keys value:', value)

//Output: All object keys value: [ 'Samsung', 'coalcomn Snapdragor', '6 GB', '128 GB', '5500 tk' ]


//----------------------Nested Object------------------------------------------
const college ={
    name: 'Govt. commerce College',
    class: ['HSC', 'BBS', 'BBA', 'BSS', 'MBA'],
    unique: {
        dressColor: 'Blue',
        result:{
            gpa: 5,
            merit: 'Top'
        }
    }
}

console.log('Access all key values:', college); // Access all key values
console.log('Access single key value: ', college.unique.result.merit);


//Output: Access single key value:  Top


//----------------------Delete object Property or key--------------------------

//----------------------.------------------------------------------------------
//----------------------.------------------------------------------------------