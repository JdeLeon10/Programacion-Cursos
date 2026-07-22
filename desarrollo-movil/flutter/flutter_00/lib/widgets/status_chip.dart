import 'package:flutter/material.dart';

import '../models/report_item.dart';

// Chip visual para mostrar estados de reportes con color e icono.
class StatusChip extends StatelessWidget {
  const StatusChip({super.key, required this.status});

  final ReportStatus status;

  Color get _color {
    switch (status) {
      case ReportStatus.completed:
        return Colors.green;
      case ReportStatus.pending:
        return Colors.orange;
      case ReportStatus.error:
        return Colors.red;
    }
  }

  String get _label {
    switch (status) {
      case ReportStatus.completed:
        return 'Completado';
      case ReportStatus.pending:
        return 'Pendiente';
      case ReportStatus.error:
        return 'Error';
    }
  }

  IconData get _icon {
    switch (status) {
      case ReportStatus.completed:
        return Icons.check_circle;
      case ReportStatus.pending:
        return Icons.schedule;
      case ReportStatus.error:
        return Icons.error;
    }
  }

  @override
  Widget build(BuildContext context) {
    return Chip(
      avatar: Icon(_icon, color: Colors.white, size: 18),
      label: Text(_label),
      labelStyle: const TextStyle(color: Colors.white),
      backgroundColor: _color,
    );
  }
}
