import 'package:flutter/material.dart';

import '../widgets/lesson_card.dart';
import '../widgets/lesson_header.dart';

// Leccion: eventos y feedback visual.
// Aqui practicamos botones, switches, SnackBar y modales.
class EventsFeedbackScreen extends StatefulWidget {
  const EventsFeedbackScreen({super.key});

  @override
  State<EventsFeedbackScreen> createState() => _EventsFeedbackScreenState();
}

class _EventsFeedbackScreenState extends State<EventsFeedbackScreen> {
  bool _alertEnabled = false;

  void _sendAlert() {
    // ScaffoldMessenger muestra mensajes temporales en la parte inferior.
    ScaffoldMessenger.of(context).showSnackBar(
      SnackBar(
        content: Text(_alertEnabled ? 'Alerta enviada correctamente' : 'Activa la alerta primero'),
        backgroundColor: _alertEnabled ? Colors.green : Colors.orange,
      ),
    );

    showDialog<void>(
      context: context,
      builder: (context) {
        return AlertDialog(
          title: const Text('Feedback con modal'),
          content: const Text('has presionado el boton'),
          actions: [
            TextButton(
              onPressed: () => Navigator.of(context).pop(),
              child: const Text('salir'),
            ),
          ],
        );
      },
    );
  }

  @override
  Widget build(BuildContext context) {
    final Color cardColor = _alertEnabled ? const Color(0xFFFFEBEE) : const Color(0xFFE3F2FD);
    final IconData icon = _alertEnabled ? Icons.notifications_active : Icons.notifications_off;

    return SingleChildScrollView(
      padding: const EdgeInsets.all(18),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.stretch,
        children: [
          const LessonHeader(
            icon: Icons.touch_app,
            title: 'Eventos y Feedback Visual',
            description: 'Practica onPressed, Switch, SnackBar, Dialog y UI condicional.',
            color: Color(0xFFE17055),
          ),
          const SizedBox(height: 16),
          LessonCard(
            color: cardColor,
            child: Column(
              children: [
                Icon(icon, size: 56, color: _alertEnabled ? Colors.red : Colors.blue),
                const SizedBox(height: 12),
                SwitchListTile(
                  title: const Text('Alerta activa'),
                  subtitle: Text(_alertEnabled ? 'La alerta esta encendida' : 'La alerta esta apagada'),
                  value: _alertEnabled,
                  onChanged: (value) {
                    setState(() => _alertEnabled = value);
                  },
                ),
                const SizedBox(height: 12),
                ElevatedButton.icon(
                  onPressed: _sendAlert,
                  icon: const Icon(Icons.send),
                  label: const Text('Enviar alerta'),
                ),
              ],
            ),
          ),
        ],
      ),
    );
  }
}
