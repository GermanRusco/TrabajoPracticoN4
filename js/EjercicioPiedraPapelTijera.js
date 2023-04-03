/*crear un script con toda la logica necesaria que solicite al usuario 
un movimiento (piedra - papel - tijera) la PC elija aleatoriamente 
un movimiento y al final mostrar por pantalla quien gano, luego preguntar si queremos jugar otra vez.*/

do {
    let movimientoJugador = '';
    do {
      movimientoJugador = prompt('Juego Piedra-Papel-Tijera\nElegir un movimiento:\n 1-Piedra\n 2-Papel\n 3-Tijera\n');
    } while (isNaN(movimientoJugador) || movimientoJugador == '');
    const movJugadorConvertidoaEntero = parseInt(movimientoJugador);
    const movimientoComputadora = Math.floor(Math.random() * 3 + 1);
    switch (movJugadorConvertidoaEntero) {
      case 1:
        if (movimientoComputadora === 1) {
          alert('¡Empate! - Ambos eligieron piedra.');
        } else {
          if (movimientoComputadora === 2) {
            alert('¡Perdiste! - La computadora eligió papel y vos piedra.');
          } else {
            if (movimientoComputadora === 3) {
              alert('¡Ganaste! - La computadora eligió tijera y vos piedra.');
            }
          }
        }
        break;
      case 2:
        if (movimientoComputadora === 1) {
          alert('¡Ganaste! - La computadora eligió piedra y vos papel.');
        } else {
          if (movimientoComputadora === 2) {
            alert('¡Empate! - Ambos eligieron papel.');
          } else {
            if (movimientoComputadora === 3) {
              alert('¡Perdiste! - La computadora eligió tijera y vos papel.');
            }
          }
        }
        break;
      case 3:
        if (movimientoComputadora === 1) {
          alert('¡Perdiste! - La computadora eligió piedra y vos tijera.');
        } else {
          if (movimientoComputadora === 2) {
            alert('¡Ganaste! - La computadora eligió papel y vos tijera.');
          } else {
            if (movimientoComputadora === 3) {
              alert('¡Empate! - Ambos eligieron tijera.');
            }
          }
        }
        break;
      case null:
        alert(
          'No ingresó ningun valor. Ingrese 1 para piedra, 2 para papel y 3 para tijera'
        );
        break;
      default:
        alert('La opción ingresa no es válida');
    }
  } while (confirm('¿Quiere jugar de nuevo?'));