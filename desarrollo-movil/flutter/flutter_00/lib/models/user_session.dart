// Modelo que representa la sesion actual del usuario.
// Por ahora solo guardamos username porque no hay backend real.
class UserSession {
  const UserSession({required this.username});

  final String username;
}
