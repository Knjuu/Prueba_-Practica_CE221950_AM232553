document.getElementById("calcular").addEventListener("click", function () {
    const nombre = document.getElementById("nombre").value;
    const cargo = document.getElementById("cargo").value;
    const horasTrabajadas = parseFloat(document.getElementById("horas").value);
    const salarioPorHora = parseFloat(document.getElementById("pago").value);

    const salarioBase = horasTrabajadas * salarioPorHora;
    let isss;

    if (salarioBase <= 1000) {
        isss = salarioBase * 0.03; // 3% de ISSS
    } else if (salarioBase > 1000) {
        isss = 30; // Límite de $1000 para ISSS
    }
    const afp = salarioBase * 0.0725; // 7.25% de AFP

    const salarioNeto = salarioBase - isss - afp;
    const rentaAPagar = calcularRenta(salarioNeto);

    const calcularRenta(salarioNeto) {
    if (salarioNeto <= 472) {
        return 0;
    } else if (salarioNeto <= 895.24) {
        return (salarioNeto - 472) * 0.1 + 17.67; // 10% más 17.67 de FUA
    } else if (salarioNeto <= 2038.10) {
        return (salarioNeto - 895.24) * 0.2 + 60; // 20% más 60 de FUA
    } else {
        return (salarioNeto - 2038.10) * 0.3 + 288.57; // 30% más 288.57 de FUA
    }
}
    document.getElementById("Nombre").textContent = nombre;
    document.getElementById("Cargo").textContent = cargo;
    document.getElementById("SalarioBase").textContent = salarioBase.toFixed(2);
    document.getElementById("ISSS").textContent = isss.toFixed(2);
    document.getElementById("AFP").textContent = afp.toFixed(2);
    document.getElementById("SalarioNeto").textContent = salarioNeto.toFixed(2);
    document.getElementById("RentaAPagar").textContent = rentaAPagar.toFixed(2);
});