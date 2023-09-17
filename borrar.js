class Grafo {
    constructor(vertices) {
        this.vertices = vertices;
        this.matrizAdyacencia = Array.from({ length: vertices }, () => Array(vertices).fill(0));
    }

    generarCostos(entrada) {
        // Movimientos posibles para cada casilla
        const movimientosCaballo = [
            [2, 1], [1, 2], [-1, 2], [-2, 1],
            [-2, -1], [-1, -2], [1, -2], [2, -1]
        ];

        // Verificar que sea un movimiento valido
        function esMovimientoValido(x, y) {
            return x >= 0 && x < 8 && y >= 0 && y < 8;
        }

        
        const cola = [];
        cola.push({ x: entrada[0], y: entrada[1], costo: 0 });

        // Realmente cola solo tiene un objeto que se va agregando y eliminando hasta que ya no hayan movimientos validos, en ese punto se detiene el ciclo
        while (cola.length > 0) {
            console.log(cola);
            const { x, y, costo } = cola.shift();
            this.matrizAdyacencia[x][y] = costo;

            for (const [dx, dy] of movimientosCaballo) {
                const nuevoX = x + dx;
                const nuevoY = y + dy;
                if (esMovimientoValido(nuevoX, nuevoY) && this.matrizAdyacencia[nuevoX][nuevoY] === 0 && (nuevoX != entrada[0] || nuevoY != entrada[1])) {
                    cola.push({ x: nuevoX, y: nuevoY, costo: costo + 1 });
                }
            }
        }
    }
}

const grafo = new Grafo(8);
// Coordenadas del tablero
const entrada = [0, 0]; 
const salida = [3,3];

// Costos en los mosvimientos del caballo - la forma mas rapida de llegar a cada casilla
grafo.generarCostos(entrada);
console.log(grafo.matrizAdyacencia[salida[0]][salida[1]]);

// // imprimir Matriz de adyacnecia
// function imprimitGrafo(grafo) {
//     for (let i = 0; i < grafo.vertices; i++) {
//         let row = "";
//         for (let j = 0; j < grafo.vertices; j++) {
//             row += grafo.matrizAdyacencia[i][j] + " ";
//         }
//         console.log(row);
//     }
// }

// imprimitGrafo(grafo);
