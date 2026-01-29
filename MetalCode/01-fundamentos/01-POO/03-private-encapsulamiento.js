// El encapsulamiento es un principio de la programación orientada a objetos que restringe el acceso directo a algunos de los componentes de un objeto.
class User {
    // Propiedad privada
    #password;
    constructor(username, password) {
        this.username = username;
        this.#password = password;
    }

    // Método público mostrar la contraseña
    showPassword() {
        return `Password: ${this.#password}`;
    }
}

const user1 = new User('Jeremy', '8520');
console.log(`Username: ${user1.username}`);
// console.log(user1.#password); <-- Esto generaría un error porque #password es privado

console.log(user1.showPassword()); // Acceso a la contraseña a través de un método público