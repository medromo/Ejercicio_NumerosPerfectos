
function esPerfecto(n) {
    let sumaDivisores = 3;

    for (i = 3; i <= n/2; ++i) {
        let residuo = n % i;
        if (residuo == 0) {
            sumaDivisores += i;
        };
    };

    if (sumaDivisores == n && n > 0) {
        return true
    } else {return false};
};

// --------

// if (esPerfecto(28)) console.log('Es perfectoo!')


const input = 100000;

if (Number.isInteger(input) && input > 0) {
    console.log('Buscando números perfectos...')
    const numerosPerfectos = [];
    for (num = 2; num < input; num += 2) {
        if (esPerfecto(num)) {
            numerosPerfectos.push(num)
        };
    };

    if (numerosPerfectos.length > 0) {
        numerosPerfectos.forEach((numero) => console.log(`${numero} Es un número perfecto =)`));
        console.log(`Listo, esos son los números perfectos menores a ${input}`);
    } else console.log(`No se encontró ningún número perfecto menor a ${input}`);

} else { console.error('El valor ingresado debe ser un número entero mayor a cero')}