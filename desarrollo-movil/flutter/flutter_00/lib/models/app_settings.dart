// Modelo para agrupar preferencias seleccionadas por el usuario.
class AppSettings {
  const AppSettings({
    required this.language,
    required this.themeMode,
    required this.notificationsEnabled,
  });

  final String language;
  final String themeMode;
  final bool notificationsEnabled;
}
