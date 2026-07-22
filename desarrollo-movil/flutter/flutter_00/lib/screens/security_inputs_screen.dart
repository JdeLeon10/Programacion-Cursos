import 'package:flutter/material.dart';

import '../widgets/lesson_card.dart';
import '../widgets/lesson_header.dart';

// Leccion: inputs sensibles y confirmaciones.
// Practicamos obscureText, checkbox y confirmaciones antes de guardar.
class SecurityInputsScreen extends StatefulWidget {
  const SecurityInputsScreen({super.key});

  @override
  State<SecurityInputsScreen> createState() => _SecurityInputsScreenState();
}

class _SecurityInputsScreenState extends State<SecurityInputsScreen> {
  final TextEditingController _passwordController = TextEditingController();
  bool _hidePassword = true;
  bool _twoFactorEnabled = false;

  @override
  void dispose() {
    _passwordController.dispose();
    super.dispose();
  }

  Future<void> _confirmSave() async {
    final bool? confirmed = await showDialog<bool>(
      context: context,
      builder: (context) {
        return AlertDialog(
          title: const Text('Confirmar cambios'),
          content: const Text('Deseas guardar esta configuracion de seguridad?'),
          actions: [
            TextButton(
              onPressed: () => Navigator.of(context).pop(false),
              child: const Text('Cancelar'),
            ),
            ElevatedButton(
              onPressed: () => Navigator.of(context).pop(true),
              child: const Text('Guardar'),
            ),
          ],
        );
      },
    );

    if (confirmed == true && mounted) {
      ScaffoldMessenger.of(context).showSnackBar(
        const SnackBar(content: Text('Configuracion de seguridad guardada')),
      );
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
            icon: Icons.lock,
            title: 'Inputs Sensibles y Confirmaciones',
            description: 'Practica passwords, checkbox, IconButton y dialogs de confirmacion.',
            color: Color(0xFF2D3436),
          ),
          const SizedBox(height: 16),
          LessonCard(
            child: Column(
              children: [
                TextField(
                  controller: _passwordController,
                  obscureText: _hidePassword,
                  decoration: InputDecoration(
                    labelText: 'Nueva password',
                    prefixIcon: const Icon(Icons.password),
                    border: const OutlineInputBorder(),
                    suffixIcon: IconButton(
                      icon: Icon(_hidePassword ? Icons.visibility : Icons.visibility_off),
                      onPressed: () {
                        setState(() => _hidePassword = !_hidePassword);
                      },
                    ),
                  ),
                ),
                const SizedBox(height: 12),
                CheckboxListTile(
                  title: const Text('Activar autenticacion de dos pasos'),
                  subtitle: const Text('Ejemplo de checkbox controlado por estado local.'),
                  value: _twoFactorEnabled,
                  onChanged: (value) {
                    setState(() => _twoFactorEnabled = value ?? false);
                  },
                ),
                const SizedBox(height: 12),
                ElevatedButton.icon(
                  onPressed: _confirmSave,
                  icon: const Icon(Icons.verified_user),
                  label: const Text('Guardar seguridad'),
                ),
              ],
            ),
          ),
        ],
      ),
    );
  }
}
