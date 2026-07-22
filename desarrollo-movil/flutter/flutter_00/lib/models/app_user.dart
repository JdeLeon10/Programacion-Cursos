// Modelo simple para representar un usuario creado desde el formulario.
// En desarrollo web seria parecido a un objeto que guardas en useState.
class AppUser {
  const AppUser({required this.name, required this.email, required this.role});

  final String name;
  final String email;
  final String role;
}
