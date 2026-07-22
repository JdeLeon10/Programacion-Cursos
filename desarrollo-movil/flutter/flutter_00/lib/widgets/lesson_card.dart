import 'package:flutter/material.dart';

// Card reutilizable para dar una forma visual consistente a cada seccion.
class LessonCard extends StatelessWidget {
  const LessonCard({super.key, required this.child, this.color = Colors.white});

  final Widget child;
  final Color color;

  @override
  Widget build(BuildContext context) {
    return Card(
      color: color,
      elevation: 2,
      shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(18)),
      child: Padding(padding: const EdgeInsets.all(18), child: child),
    );
  }
}
