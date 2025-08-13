// Tabla de coeficientes K según la vida útil y el estado de conservación
const tablaCoeficientes = {
        2:  { A: 0.0102, B: 0.0105, C: 0.0351, D: 0.0903, E: 0.1890, F: 0.3930, G: 0.5310, H: 0.7540 },
        4:  { A: 0.0208, B: 0.0211, C: 0.0455, D: 0.1000, E: 0.1980, F: 0.3460, G: 0.5360, H: 0.7570 },
        6:  { A: 0.0318, B: 0.0321, C: 0.0562, D: 0.1100, E: 0.2070, F: 0.3530, G: 0.5410, H: 0.7600 },
        8:  { A: 0.0432, B: 0.0435, C: 0.0673, D: 0.1210, E: 0.2160, F: 0.3610, G: 0.5460, H: 0.7630 },
        10: { A: 0.0550, B: 0.0553, C: 0.0788, D: 0.1320, E: 0.2260, F: 0.3690, G: 0.5520, H: 0.7660 },
        12: { A: 0.0672, B: 0.0675, C: 0.0907, D: 0.1430, E: 0.2360, F: 0.3770, G: 0.5580, H: 0.7690 },
        14: { A: 0.0798, B: 0.0801, C: 0.1030, D: 0.1540, E: 0.2460, F: 0.3850, G: 0.5640, H: 0.7720 },
        16: { A: 0.0928, B: 0.0931, C: 0.1160, D: 0.1660, E: 0.2570, F: 0.3940, G: 0.5700, H: 0.7750 },
        18: { A: 0.1060, B: 0.1060, C: 0.1290, D: 0.1780, E: 0.2680, F: 0.4030, G: 0.5760, H: 0.7780 },
        20: { A: 0.1200, B: 0.1200, C: 0.1420, D: 0.1910, E: 0.2790, F: 0.4180, G: 0.5830, H: 0.7820 },
        22: { A: 0.1340, B: 0.1340, C: 0.1560, D: 0.2040, E: 0.2910, F: 0.4220, G: 0.5900, H: 0.7850 },
        24: { A: 0.1490, B: 0.1490, C: 0.1700, D: 0.2180, E: 0.3030, F: 0.4310, G: 0.5960, H: 0.7890 },
        26: { A: 0.1640, B: 0.1640, C: 0.1850, D: 0.2310, E: 0.3150, F: 0.4410, G: 0.6040, H: 0.7930 },
        28: { A: 0.1790, B: 0.1790, C: 0.2000, D: 0.2460, E: 0.3280, F: 0.4520, G: 0.6110, H: 0.7960 },
        30: { A: 0.1950, B: 0.1950, C: 0.2150, D: 0.2600, E: 0.3410, F: 0.4620, G: 0.6180, H: 0.8000 },
        32: { A: 0.2110, B: 0.2110, C: 0.2310, D: 0.2750, E: 0.3540, F: 0.4730, G: 0.6260, H: 0.8040 },
        34: { A: 0.2280, B: 0.2280, C: 0.2470, D: 0.2900, E: 0.3680, F: 0.4840, G: 0.6340, H: 0.8080 },
        36: { A: 0.2450, B: 0.2450, C: 0.2640, D: 0.3050, E: 0.3810, F: 0.4950, G: 0.6420, H: 0.8130 },
        38: { A: 0.2620, B: 0.2620, C: 0.2810, D: 0.3220, E: 0.3960, F: 0.5070, G: 0.6500, H: 0.8170 },
        40: { A: 0.2880, B: 0.2880, C: 0.2990, D: 0.3380, E: 0.4100, F: 0.5190, G: 0.6590, H: 0.8210 },
        42: { A: 0.2990, B: 0.2980, C: 0.3160, D: 0.3550, E: 0.4250, F: 0.5310, G: 0.6670, H: 0.8260 },
        44: { A: 0.3170, B: 0.3170, C: 0.3340, D: 0.3720, E: 0.4400, F: 0.5440, G: 0.6760, H: 0.8310 },
        46: { A: 0.3360, B: 0.3360, C: 0.3520, D: 0.3890, E: 0.4560, F: 0.5560, G: 0.6850, H: 0.8350 },
        48: { A: 0.3560, B: 0.3550, C: 0.3710, D: 0.4070, E: 0.4720, F: 0.5690, G: 0.6940, H: 0.8400 },
        50: { A: 0.3750, B: 0.3750, C: 0.3910, D: 0.4260, E: 0.4880, F: 0.5820, G: 0.7040, H: 0.8450 },
        52: { A: 0.3950, B: 0.3950, C: 0.4190, D: 0.4400, E: 0.5050, F: 0.5960, G: 0.7130, H: 0.8500 },
        54: { A: 0.4160, B: 0.4160, C: 0.4300, D: 0.4630, E: 0.5210, F: 0.6100, G: 0.7230, H: 0.8550 },
        56: { A: 0.4370, B: 0.4370, C: 0.4510, D: 0.4820, E: 0.5390, F: 0.6240, G: 0.7330, H: 0.8600 },
        58: { A: 0.4580, B: 0.4580, C: 0.4720, D: 0.5020, E: 0.5560, F: 0.6380, G: 0.7430, H: 0.8660 },
        60: { A: 0.4880, B: 0.4880, C: 0.4930, D: 0.5220, E: 0.5740, F: 0.6530, G: 0.7530, H: 0.8710 },
        62: { A: 0.5020, B: 0.5020, C: 0.5150, D: 0.5420, E: 0.5920, F: 0.6670, G: 0.7540, H: 0.8770 },
        64: { A: 0.5250, B: 0.5250, C: 0.5370, D: 0.5630, E: 0.6110, F: 0.6830, G: 0.7750, H: 0.8820 },
        66: { A: 0.5480, B: 0.5480, C: 0.5590, D: 0.5840, E: 0.6900, F: 0.6980, G: 0.7860, H: 0.8880 },
        68: { A: 0.5710, B: 0.5710, C: 0.5820, D: 0.6060, E: 0.6490, F: 0.7140, G: 0.7970, H: 0.8940 },
        70: { A: 0.5950, B: 0.5950, C: 0.6050, D: 0.6280, E: 0.6680, F: 0.7290, G: 0.8080, H: 0.9040 },
        72: { A: 0.6220, B: 0.6220, C: 0.6290, D: 0.6500, E: 0.6880, F: 0.7460, G: 0.8190, H: 0.9090 },
        74: { A: 0.6440, B: 0.6440, C: 0.6530, D: 0.6730, E: 0.7080, F: 0.7620, G: 0.8310, H: 0.9120 },
        76: { A: 0.6690, B: 0.6690, C: 0.6770, D: 0.6960, E: 0.7290, F: 0.7790, G: 0.8430, H: 0.9180 },
        78: { A: 0.6940, B: 0.6940, C: 0.7220, D: 0.7190, E: 0.7490, F: 0.8960, G: 0.8550, H: 0.9240 },
        80: { A: 0.7200, B: 0.7200, C: 0.7270, D: 0.7430, E: 0.7710, F: 0.8130, G: 0.8670, H: 0.9310 },
        82: { A: 0.7460, B: 0.7460, C: 0.7530, D: 0.7670, E: 0.7920, F: 0.8300, G: 0.8800, H: 0.9370 },
        84: { A: 0.7730, B: 0.7730, C: 0.7780, D: 0.7910, E: 0.8140, F: 0.8450, G: 0.8920, H: 0.9440 },
        86: { A: 0.8000, B: 0.8000, C: 0.8050, D: 0.8160, E: 0.8360, F: 0.8660, G: 0.9050, H: 0.9500 },
        88: { A: 0.8270, B: 0.8270, C: 0.8320, D: 0.8410, E: 0.8580, F: 0.8850, G: 0.9180, H: 0.9570 },
        90: { A: 0.8550, B: 0.8550, C: 0.8590, D: 0.8670, E: 0.8810, F: 0.9030, G: 0.9310, H: 0.9640 },
        92: { A: 0.8830, B: 0.8830, C: 0.8860, D: 0.8930, E: 0.9040, F: 0.9220, G: 0.9450, H: 0.9710 },
        94: { A: 0.9120, B: 0.9120, C: 0.9140, D: 0.9190, E: 0.9280, F: 0.9410, G: 0.9580, H: 0.9780 },
        96: { A: 0.9410, B: 0.9410, C: 0.9420, D: 0.9460, E: 0.9510, F: 0.9600, G: 0.9720, H: 0.9850 },
        98: { A: 0.9700, B: 0.9700, C: 0.9710, D: 0.9730, E: 0.9760, F: 0.9800, G: 0.9800, H: 0.9980 },
       100: { A: 1.0000, B: 1.0000, C: 1.0000, D: 1.0000, E: 1.0000, F: 1.0000, G: 1.0000, H: 1.0000 }
};   
   

// Función para obtener el coeficiente K
function obtenerCoeficienteK(vidaUtil, estadoConservacion) {
    if (tablaCoeficientes[vidaUtil] && tablaCoeficientes[vidaUtil][estadoConservacion]) {
        return tablaCoeficientes[vidaUtil][estadoConservacion];
    }
    return null;
}

// Función para calcular el valor actual
function calcularValorActual(valorReposicion, valorResidual, vidaUtil, estadoConservacion) {
    const coefK = obtenerCoeficienteK(vidaUtil, estadoConservacion);
    if (coefK !== null) {
        return valorReposicion - ((valorReposicion - valorResidual) * coefK);
    }
    return null;
}

// Manejar el envío del formulario
document.getElementById('depreciacionForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const valorReposicion = parseFloat(document.getElementById('valorReposicion').value);
    const valorResidual = parseFloat(document.getElementById('valorResidual').value);
    const vidaUtil = parseInt(document.getElementById('vidaUtil').value);
    const estadoConservacion = document.getElementById('estadoConservacion').value;

    const valorActual = calcularValorActual(valorReposicion, valorResidual, vidaUtil, estadoConservacion);

    const resultadoDiv = document.getElementById('resultado');
    const valorActualP = document.getElementById('valorActual');

    if (valorActual !== null) {
        valorActualP.textContent = `Valor Actual (VA): $${valorActual.toFixed(2)}`;
        resultadoDiv.style.display = 'block';
    } else {
        valorActualP.textContent = 'Datos inválidos o coeficiente no encontrado.';
        resultadoDiv.style.display = 'block';
    }

// Aceptar solo números pares de 2 al 100
const vidaUtilInput = document.getElementById('vidaUtil');

  vidaUtilInput.addEventListener('input', function() {
    const valor = parseInt(this.value);

    if (isNaN(valor) || valor < 2 || valor > 100 || valor % 2 !== 0) {
      this.setCustomValidity('Por favor, ingresa un número par entre 2 y 100.');
    } else {
      this.setCustomValidity(''); // La validación es exitosa, se limpia el mensaje de error
    }
    this.reportValidity(); // Fuerza la visualización del mensaje de error (si existe)
  });

});
