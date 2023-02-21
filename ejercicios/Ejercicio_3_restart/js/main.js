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
//
numEmployees = numEmployees.map(employee => {
    if (employee.salario < 1500 ) {
        employee.salario = employee.salario * 1.25;
    }
    return employee;
});
console.log('6. Subida de sueldo de 1.25',numEmployees);
//
const totalCostPerEmployee = numEmployees.reduce((total,employee) => total + (employee.salario * 1.15),0);
console.log('7. Coste Total de la empresa por empleados',totalCostPerEmployee.toFixed(0));
//
numEmployees = numEmployees.filter(employee => employee.rendimiento > 0.3);
console.log('8.1 Despedidos los que tienen menos del 0.3 en rendimiento',numEmployees);
//
const averageSalary = numEmployees.reduce((sum,employee) => sum + employee.salario,0) / numEmployees.length;
console.log('8.2 Sueldo medio',averageSalary.toFixed(0));
//
numEmployees.forEach(employee => {
    if (employee.rendimiento > 0.7) {
        employee.salario = employee.salario * 1.5;
        console.log("Subido el sueldo de =>",employee.cargo);
    }
});
console.log('8.3 Sueldo aumentado a los que tienen rendimiento > 0.7',numEmployees);