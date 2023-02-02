// 1. Generar un array de 100 objetos que tengan las siguientes propiedades:
// • Cargo: construido con un string plantilla (`${}`) cuyos valores sean “Empleado 1”, “Empleado 2”, etc.
// • Rendimiento: un número aleatorio con 2 decimales entre 0 y 1.
// • Salario: un número aleatorio entre 1250 y 4000.

const numEmployees = [];
for (let i = 1; i <= 100;i++) {
    const employees = {
        cargo: `Empleado${i}`,
        rendimiento: Math.random().toFixed(2),
        salario:Math.floor(Math.random() * (4000 - 1250 + 1) + 1250)
          
    }
   numEmployees.push(employees);
}
// console.log(numEmployees);

//2. Ordenar el array por rendimiento e imprimirlo. Usar una función anónima como callback.
numEmployees.sort((employee1,employee2) => employee2.rendimiento - employee1.rendimiento);
// console.log(numEmployees);

//3. Ordenar el array por salario e imprimirlo. Usar una función de flecha.
numEmployees.sort((employee1,employee2) => employee2.salario - employee1.salario);
// console.log(numEmployees);

//4. Ordenar el array por el número de empleado de forma decreciente. El número de empleado sólo estará
//dentro del string Cargo. Usar una función nombrada como callback.
function employeePositionOrder (employee1,employee2) {
    return employee2.cargo - employee1.cargo
};

numEmployees.sort(employeePositionOrder);
console.log(numEmployees);
