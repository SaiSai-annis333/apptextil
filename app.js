// app.js
const recetas = {
    "Set matero": { lona: 0.3, acetato: 0.3, cierre: 0.4, manoObra: 0 },
    "Bolso playero": { lona: 1.2, entretela: 1.2, hilo: 4, manoObra: 1.5 },
    "Neceser": { ecocuero: 0.4, entretela: 0.4, cierre: 0.15, manoObra: 0.2 },
    "Cartuchera": { jean: 0.4, entretela: 0.4, cierre: 0.15, manoObra: 0.2 }
};

const precios = {
    jean: 1000,
    ecocuero: 1600,
    lona: 1400,
    entretela: 500,
    acetato: 500,
    hilo: 100,
    manoObra: 1000
};

function calcularPrecios() {
    let resultadosHTML = '';
    for (const producto in recetas) {
        let costoTotal = 0;
        for (const material in recetas[producto]) {
            costoTotal += precios[material] * recetas[producto][material];
        }
        resultadosHTML += `<p>${producto}: $${costoTotal.toFixed(2)}</p>`;
    }
    document.getElementById('resultados').innerHTML = resultadosHTML;
}

function cargarReceta() {
    const producto = document.getElementById('producto').value;
    if (producto) {
        const receta = recetas[producto];
        document.getElementById('recetaLona').value = receta.lona || 0;
        document.getElementById('recetaAcetato').value = receta.acetato || 0;
        document.getElementById('recetaCierre').value = receta.cierre || 0;
        document.getElementById('recetaHilo').value = receta.hilo || 0;
        document.getElementById('recetaEcocuero').value = receta.ecocuero || 0;
        document.getElementById('recetaEntretela').value = receta.entretela || 0;
        document.getElementById('recetaJean').value = receta.jean || 0;
        document.getElementById('recetaManoObra').value = receta.manoObra || 0;
    }
}

function guardarReceta() {
    const producto = document.getElementById('producto').value;
    if (producto) {
        recetas[producto] = {
            lona: parseFloat(document.getElementById('recetaLona').value) || 0,
            acetato: parseFloat(document.getElementById('recetaAcetato').value) || 0,
            cierre: parseFloat(document.getElementById('recetaCierre').value) || 0,
            hilo: parseFloat(document.getElementById('recetaHilo').value) || 0,
            ecocuero: parseFloat(document.getElementById('recetaEcocuero').value) || 0,
            entretela: parseFloat(document.getElementById('recetaEntretela').value) || 0,
            jean: parseFloat(document.getElementById('recetaJean').value) || 0,
            manoObra: parseFloat(document.getElementById('recetaManoObra').value) || 0
        };
        alert(`Receta de ${producto} guardada exitosamente.`);
    } else {
        alert('Por favor, selecciona un producto.');
    }
}

// Nueva función para agregar telas
function agregarTela() {
    const nuevoNombreTela = document.getElementById('nuevoNombreTela').value.trim();
    const nuevoPrecioTela = parseFloat(document.getElementById('nuevoPrecioTela').value) || 0;

    if (nuevoNombreTela && nuevoPrecioTela > 0) {
        precios[nuevoNombreTela] = nuevoPrecioTela;
        alert(`Tela ${nuevoNombreTela} agregada con éxito a $${nuevoPrecioTela} por m².`);
        document.getElementById('nuevoNombreTela').value = '';
        document.getElementById('nuevoPrecioTela').value = 0;
    } else {
        alert('Por favor, ingresa un nombre y un precio válido para la tela.');
    }
}

// Nueva función para agregar recetas
function agregarReceta() {
    const nuevoProducto = document.getElementById('nuevoProducto').value.trim();
    if (nuevoProducto) {
        recetas[nuevoProducto] = {
            lona: parseFloat(document.getElementById('nuevaLona').value) || 0,
            acetato: parseFloat(document.getElementById('nuevoAcetato').value) || 0,
            cierre: parseFloat(document.getElementById('nuevoCierre').value) || 0,
            hilo: parseFloat(document.getElementById('nuevoHilo').value) || 0,
            manoObra: parseFloat(document.getElementById('nuevaManoObra').value) || 0
        };
        alert(`Receta de ${nuevoProducto} agregada exitosamente.`);
        // Limpiar campos después de agregar
        document.getElementById('nuevoProducto').value = '';
        document.getElementById('nuevaLona').value = 0;
        document.getElementById('nuevoAcetato').value = 0;
        document.getElementById('nuevoCierre').value = 0;
        document.getElementById('nuevoHilo').value = 0;
        document.getElementById('nuevaManoObra').value = 0;
    } else {
        alert('Por favor, ingresa un nombre para el nuevo producto.');
    }
}
