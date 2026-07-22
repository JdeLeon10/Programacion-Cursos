import '../models/user_session.dart';

// Servicio encargado de la autenticacion.
// Hoy no llama a una API real, pero deja preparado el lugar correcto para usar dio despues.
class AuthService {
  Future<UserSession> login({required String username, required String password}) async {
    // Simulamos una operacion asincrona como si fuera una peticion HTTP.
    await Future<void>.delayed(const Duration(milliseconds: 200));

    // Como no hay backend, aceptamos cualquier password y solo limpiamos el username.
    final cleanUsername = username.trim().isEmpty ? 'Usuario' : username.trim();

    return UserSession(username: cleanUsername);
  }
}
