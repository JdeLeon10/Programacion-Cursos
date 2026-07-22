import '../models/report_item.dart';

// Servicio mock para simular datos que normalmente vendrian de una API.
// Mas adelante este archivo podria usar dio para hacer peticiones HTTP reales.
class ReportService {
  Future<List<ReportItem>> getReports() async {
    await Future<void>.delayed(const Duration(milliseconds: 300));

    return const [
      ReportItem(
        title: 'Ventas del mes',
        date: '2026-07-10',
        status: ReportStatus.completed,
      ),
      ReportItem(
        title: 'Inventario pendiente',
        date: '2026-07-12',
        status: ReportStatus.pending,
      ),
      ReportItem(
        title: 'Errores de sincronizacion',
        date: '2026-07-14',
        status: ReportStatus.error,
      ),
    ];
  }
}
