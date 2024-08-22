
class generatePassword {

    static execute(isNormal) {

        const number = Math.floor(9999 * Math.random())

        const letras = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        let resultado = '';
        for (let i = 0; i < 2; i++) {
          const indiceAleatorio = Math.floor(Math.random() * letras.length);
          resultado += letras[indiceAleatorio];
        }

        if (isNormal) {
          return `N${resultado.toUpperCase()}${number}`
        }

        return `P${resultado.toUpperCase()}${number}`

    }

}

export default generatePassword