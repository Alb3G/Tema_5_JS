function randomSalaryRange (start, end) {
    return Math.floor(Math.random() * (end - start + 1) + start);
}
//
let numEmployees = [];
for (let i = 1; i <= 100; i++) {
    const employee = {
        cargo:`Empleado${i}`,
        rendimiento: Number(Math.random().toFixed(2)),
        salario:randomSalaryRange(1250,4000),
    };
    numEmployees.push(employee);
};
console.log('1. Array de empleados',numEmployees);
//
numEmployees.sort((employee1,employee2) => employee2.rendimiento - employee1.rendimiento);
console.log('2. Ordenado por rendimiento',numEmployees);
//
numEmployees.sort((employee1,employee2) => employee2.salario - employee1.salario);
console.log('3. Ordenado por salario',numEmployees);
//
function orderEmployee (employee1,employee2) {
    const employee1Position = parseInt(employee1.cargo.replace('Empleado',''));
    const employee2Position = parseInt(employee2.cargo.replace('Empleado',''));
    return employee2Position - employee1Position;
};
numEmployees.sort(orderEmployee);
console.log('4. Ordenados por cargo',numEmployees);
//
console.log('5.Cobran +2500');
numEmployees
.filter(employee => employee.salario > 2500)
.forEach(employee => console.log(employee.cargo,employee.salario));
