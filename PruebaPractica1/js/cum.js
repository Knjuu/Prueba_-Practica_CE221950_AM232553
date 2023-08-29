let notas = [];

while (true) {
    let materia = prompt("Ingrese la materia");
    let final = prompt("Ingrese su nota final");
    let uv = prompt("Ingrese las UV de la materia");

    document.write("<br><br>Materia: " + materia);
    document.write("<br>Nota final: " + final);
    document.write("<br>UV de la materia: " + uv);

    notas.push({
        materia: materia,
        final: parseFloat(final),
        uv: parseFloat(uv)
    });

    if (!confirm("Desea continuar?")) {
        break;
    }
}

function CalcularCum(notas) {
    let suma = 0;
    let sumauv = 0;
    for (const cum of notas) {
        suma += cum.final * cum.uv;
        sumauv += cum.uv;
    }
    return suma / sumauv;
}

let promedioCum = CalcularCum(notas);
document.write("<br><br>Promedio CUM: " + promedioCum);
