// Enum define valores fijos permitidos.
// Ayuda a evitar strings sueltos como 'pendiente' o 'error' por toda la app.
enum ReportStatus { pending, completed, error }

// Modelo para representar un reporte en la leccion de listas y cards.
class ReportItem {
  const ReportItem({
    required this.title,
    required this.date,
    required this.status,
  });

  final String title;
  final String date;
  final ReportStatus status;
}
