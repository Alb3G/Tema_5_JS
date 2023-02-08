function randomSalaryRange (start, end) {
    return Math.floor(Math.random() * (end - start + 1) + start);
}
// 1. Generar un array de 100 objetos que tengan las siguientes propiedades:
// • Cargo: construido con un string plantilla (`${}`) cuyos valores sean “Empleado 1”, “Empleado 2”, etc.
// • Rendimiento: un número aleatorio con 2 decimales entre 0 y 1.
// • Salario: un número aleatorio entre 1250 y 4000.
let numEmployees = [];
for (let i = 1; i <= 100; i++) {
    const employees = {
        cargo: `Empleado ${i}`,
        rendimiento: Number(Math.random().toFixed(2)),
        salario: randomSalaryRange(1250,4000),
    }
   numEmployees.push(employees);
}
console.log("1.Generacion de array de empleados",numEmployees);

//2. Ordenar el array por rendimiento e imprimirlo. Usar una función anónima como callback.
numEmployees.sort((employee1,employee2) => employee2.rendimiento - employee1.rendimiento);
console.log("2.Ordenados por Rendimiento",numEmployees);

// //3. Ordenar el array por salario e imprimirlo. Usar una función de flecha.
numEmployees.sort((employee1,employee2) => employee2.salario - employee1.salario);
console.log("3.Ordenados por Salario",numEmployees);

//4. Ordenar el array por el número de empleado de forma decreciente. El número de empleado sólo estará
//dentro del string Cargo. Usar una función nombrada como callback.
function employeePositionOrder (employee1,employee2) {
    const employee1Position = parseInt(employee1.cargo.replace('Empleado ',''));
    const employee2Position = parseInt(employee2.cargo.replace('Empleado ',''));
    return employee2Position - employee1Position;
};
numEmployees.sort(employeePositionOrder);
console.log("4.Ordenados por numero de Empleado", numEmployees);

// 5. Usando filter: imprimir el cargo y salario de los que cobren más de 2500€.
console.log("5.Los que cobran +2500",);
numEmployees
    .filter(employee => employee.salario > 2500)
    .forEach(employee => console.log(employee.cargo, employee.salario));
// 6. Usando map: subir el sueldo un 25% a los que cobren menos de 1500€.
numEmployees = numEmployees.map(employee => {
    if (employee.salario < 1500) {
        employee.salario = employee.salario * 1.25;
    };
    return employee;
});
console.log("6.Aumento de sueldo de un 25%",numEmployees);

// 7. Usando reduce: Obtener el coste total de todos los sueldos para la empresa teniendo en cuenta que
// a la empresa le cuesta tener un empleado su sueldo más un 15% por impuestos.
const totalSalary = numEmployees.reduce((total,employee) => total + (employee.salario * 1.15),0);
console.log("7.Coste total de todos los empleados para la empresa:",totalSalary.toFixed(2));

// 8. Usar el método o métodos (reduce / map / filter / sort) que determinemos oportuno e imprimir en
// cada apartado:
// • Despedir a los que tengan un rendimiento menor a 0.3. ---- Filter ----
numEmployees = numEmployees.filter(employee => employee.rendimiento >= 0.3);
console.log("Empleados despedidos con rendimiento inferior a 0.3",numEmployees);
// • Calcular el sueldo medio de la empresa. ---- Reduce ----
const averageSalary = numEmployees.reduce((total,employee) => (total + employee.salario),0) / numEmployees.length;
console.log(averageSalary.toFixed(2));
// • Subir el sueldo de los que tengan un rendimiento superior a 0.7. ---- Map ----
numEmployees.forEach(employee => {
    if (employee.rendimiento > 0.7) {
        employee.salario = employee.salario * 1.5;
        console.log("Subido el sueldo de =>",employee.cargo);
    };
})
console.log('Subida de sueldo a los que tengan rendimiento superior a 0.7', numEmployees);