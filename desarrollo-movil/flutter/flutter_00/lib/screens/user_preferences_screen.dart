import 'package:flutter/material.dart';

import '../models/app_settings.dart';
import '../widgets/lesson_card.dart';
import '../widgets/lesson_header.dart';

// Leccion: preferencias de usuario.
// Practicamos dropdowns, selector segmentado, switches y resumen dinamico.
class UserPreferencesScreen extends StatefulWidget {
  const UserPreferencesScreen({super.key});

  @override
  State<UserPreferencesScreen> createState() => _UserPreferencesScreenState();
}

class _UserPreferencesScreenState extends State<UserPreferencesScreen> {
  String _language = 'Español';
  String _themeMode = 'Sistema';
  bool _notificationsEnabled = true;

  AppSettings get _settings {
    return AppSettings(
      language: _language,
      themeMode: _themeMode,
      notificationsEnabled: _notificationsEnabled,
    );
  }

  void _saveSettings() {
    ScaffoldMessenger.of(context).showSnackBar(
      const SnackBar(content: Text('Preferencias guardadas')),
    );
  }

  @override
  Widget build(BuildContext context) {
    final settings = _settings;

    return SingleChildScrollView(
      padding: const EdgeInsets.all(18),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.stretch,
        children: [
          const LessonHeader(
            icon: Icons.tune,
            title: 'Preferencias de Usuario',
            description: 'Practica DropdownButtonFormField, SegmentedButton y SwitchListTile.',
            color: Color(0xFF0984E3),
          ),
          const SizedBox(height: 16),
          LessonCard(
            child: Column(
              children: [
                DropdownButtonFormField<String>(
                  initialValue: _language,
                  decoration: const InputDecoration(
                    labelText: 'Idioma',
                    prefixIcon: Icon(Icons.language),
                    border: OutlineInputBorder(),
                  ),
                  items: const [
                    DropdownMenuItem(value: 'Español', child: Text('Español')),
                    DropdownMenuItem(value: 'Ingles', child: Text('Ingles')),
                    DropdownMenuItem(value: 'Frances', child: Text('Frances')),
                  ],
                  onChanged: (value) {
                    setState(() => _language = value!);
                  },
                ),
                const SizedBox(height: 12),
                Align(
                  alignment: Alignment.centerLeft,
                  child: Text(
                    'Tema visual',
                    style: Theme.of(context).textTheme.titleSmall,
                  ),
                ),
                const SizedBox(height: 8),
                // SegmentedButton permite elegir una opcion entre varias.
                SegmentedButton<String>(
                  segments: const [
                    ButtonSegment(value: 'Claro', label: Text('Claro')),
                    ButtonSegment(value: 'Oscuro', label: Text('Oscuro')),
                    ButtonSegment(value: 'Sistema', label: Text('Sistema')),
                  ],
                  selected: {_themeMode},
                  onSelectionChanged: (selection) {
                    setState(() => _themeMode = selection.first);
                  },
                ),
                SwitchListTile(
                  title: const Text('Notificaciones activas'),
                  value: _notificationsEnabled,
                  onChanged: (value) => setState(() => _notificationsEnabled = value),
                ),
                const SizedBox(height: 12),
                ElevatedButton.icon(
                  onPressed: _saveSettings,
                  icon: const Icon(Icons.save_as),
                  label: const Text('Guardar preferencias'),
                ),
              ],
            ),
          ),
          const SizedBox(height: 16),
          LessonCard(
            color: const Color(0xFFEAF4FF),
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Text('Resumen actual', style: Theme.of(context).textTheme.titleMedium),
                const SizedBox(height: 8),
                Text('Idioma: ${settings.language}'),
                Text('Tema: ${settings.themeMode}'),
                Text('Notificaciones: ${settings.notificationsEnabled ? 'Activas' : 'Inactivas'}'),
              ],
            ),
          ),
        ],
      ),
    );
  }
}
