import 'package:flutter/material.dart';

import '../models/report_item.dart';
import '../services/report_service.dart';
import '../widgets/lesson_card.dart';
import '../widgets/lesson_header.dart';
import '../widgets/status_chip.dart';

// Leccion: listas, cards y estados visuales.
// Esta pantalla simula cargar datos desde un servicio.
class ListsCardsScreen extends StatefulWidget {
  const ListsCardsScreen({super.key});

  @override
  State<ListsCardsScreen> createState() => _ListsCardsScreenState();
}

class _ListsCardsScreenState extends State<ListsCardsScreen> {
  final ReportService _reportService = ReportService();
  List<ReportItem> _reports = [];
  bool _isLoading = false;

  @override
  void initState() {
    super.initState();
    _loadReports();
  }

  Future<void> _loadReports() async {
    setState(() => _isLoading = true);
    final reports = await _reportService.getReports();
    setState(() {
      _reports = reports;
      _isLoading = false;
    });
  }

  void _clearReports() {
    setState(() => _reports = []);
  }

  Color _cardColor(ReportStatus status) {
    switch (status) {
      case ReportStatus.completed:
        return const Color(0xFFE8F5E9);
      case ReportStatus.pending:
        return const Color(0xFFFFF8E1);
      case ReportStatus.error:
        return const Color(0xFFFFEBEE);
    }
  }

  @override
  Widget build(BuildContext context) {
    return SingleChildScrollView(
      padding: const EdgeInsets.all(18),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.stretch,
        children: [
          const LessonHeader(
            icon: Icons.view_list,
            title: 'Listas, Cards y Estados',
            description: 'Practica ListView, Card, datos mock y estilos condicionales.',
            color: Color(0xFF00A8A8),
          ),
          const SizedBox(height: 16),
          Row(
            children: [
              Expanded(
                child: ElevatedButton.icon(
                  onPressed: _loadReports,
                  icon: const Icon(Icons.refresh),
                  label: const Text('Recargar'),
                ),
              ),
              const SizedBox(width: 12),
              Expanded(
                child: OutlinedButton.icon(
                  onPressed: _clearReports,
                  icon: const Icon(Icons.delete_outline),
                  label: const Text('Limpiar'),
                ),
              ),
            ],
          ),
          const SizedBox(height: 16),
          if (_isLoading)
            const Center(child: CircularProgressIndicator())
          else if (_reports.isEmpty)
            const LessonCard(child: Text('No hay reportes disponibles.'))
          else
            // ListView.builder es ideal cuando la lista puede crecer mucho.
            ListView.builder(
              shrinkWrap: true,
              physics: const NeverScrollableScrollPhysics(),
              itemCount: _reports.length,
              itemBuilder: (context, index) {
                final report = _reports[index];

                return LessonCard(
                  color: _cardColor(report.status),
                  child: ListTile(
                    leading: const Icon(Icons.description),
                    title: Text(report.title),
                    subtitle: Text('Fecha: ${report.date}'),
                    trailing: StatusChip(status: report.status),
                  ),
                );
              },
            ),
        ],
      ),
    );
  }
}
