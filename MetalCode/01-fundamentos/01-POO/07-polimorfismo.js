// El polimorfismo permite que un objeto tenga un comportamiento diferente segun su contexto.
class Nofifier {
    notify(message) {
        console.log(`Notificación: ${message}`);
    }
}

class EmailNotifier extends Nofifier {
    notify(message) {
        console.log(`Enviando email con el mensaje: ${message}`);
    }
}

class SMSNotifier extends Nofifier {
    notify(message) {
        console.log(`Enviando SMS con el mensaje: ${message}`);
    }
}

// Uso del polimorfismo
function sendNotification(notifier, message) {
    notifier.notify(message);
}

const emailNotifier = new EmailNotifier();
const smsNotifier = new SMSNotifier();

sendNotification(emailNotifier, "Hola via Email!");
sendNotification(smsNotifier, "Hola via SMS!");