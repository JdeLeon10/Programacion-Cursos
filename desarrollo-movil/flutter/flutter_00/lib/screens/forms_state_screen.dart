import 'package:flutter/material.dart';

import '../models/app_user.dart';
import '../widgets/lesson_card.dart';
import '../widgets/lesson_header.dart';

// Leccion: formularios y estado local.
// Usamos StatefulWidget porque la pantalla necesita recordar usuarios agregados.
class FormsStateScreen extends StatefulWidget {
  const FormsStateScreen({super.key});

  @override
  State<FormsStateScreen> createState() => _FormsStateScreenState();
}

class _FormsStateScreenState extends State<FormsStateScreen> {
  final GlobalKey<FormState> _formKey = GlobalKey<FormState>();
  final TextEditingController _nameController = TextEditingController();
  final TextEditingController _emailController = TextEditingController();
  final List<AppUser> _users = [];

  String _selectedRole = 'Admin';

  @override
  void dispose() {
    _nameController.dispose();
    _emailController.dispose();
    super.dispose();
  }

  void _saveUser() {
    // validate ejecuta todos los validator del Form.
    if (!_formKey.currentState!.validate()) {
      return;
    }

    // setState es la forma basica de decirle a Flutter: "mi estado cambio".
    setState(() {
      _users.add(
        AppUser(
          name: _nameController.text.trim(),
          email: _emailController.text.trim(),
          role: _selectedRole,
        ),
      );
      _nameController.clear();
      _emailController.clear();
    });

    showDialog<void>(
      context: context,
      builder: (context) {
        return AlertDialog(
          title: const Text('Usuario guardado'),
          content: const Text('El usuario fue agregado a la lista local.'),
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
    return SingleChildScrollView(
      padding: const EdgeInsets.all(18),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.stretch,
        children: [
          const LessonHeader(
            icon: Icons.edit_note,
            title: 'Formularios y Estado Local',
            description: 'Practica inputs, validaciones, setState y listas dinamicas.',
            color: Color(0xFF6C5CE7),
          ),
          const SizedBox(height: 16),
          LessonCard(
            child: Form(
              key: _formKey,
              child: Column(
                children: [
                  TextFormField(
                    controller: _nameController,
                    decoration: const InputDecoration(
                      labelText: 'Nombre',
                      prefixIcon: Icon(Icons.person),
                      border: OutlineInputBorder(),
                    ),
                    validator: (value) {
                      if (value == null || value.trim().isEmpty) {
                        return 'Escribe un nombre';
                      }
                      return null;
                    },
                  ),
                  const SizedBox(height: 12),
                  TextFormField(
                    controller: _emailController,
                    decoration: const InputDecoration(
                      labelText: 'Email',
                      prefixIcon: Icon(Icons.email),
                      border: OutlineInputBorder(),
                    ),
                    validator: (value) {
                      if (value == null || !value.contains('@')) {
                        return 'Escribe un email valido';
                      }
                      return null;
                    },
                  ),
                  const SizedBox(height: 12),
                  DropdownButtonFormField<String>(
                    initialValue: _selectedRole,
                    decoration: const InputDecoration(
                      labelText: 'Rol',
                      prefixIcon: Icon(Icons.badge),
                      border: OutlineInputBorder(),
                    ),
                    items: const [
                      DropdownMenuItem(value: 'Admin', child: Text('Admin')),
                      DropdownMenuItem(value: 'Editor', child: Text('Editor')),
                      DropdownMenuItem(value: 'Viewer', child: Text('Viewer')),
                    ],
                    onChanged: (value) {
                      setState(() => _selectedRole = value!);
                    },
                  ),
                  const SizedBox(height: 16),
                  ElevatedButton.icon(
                    onPressed: _saveUser,
                    icon: const Icon(Icons.save),
                    label: const Text('Guardar usuario'),
                  ),
                ],
              ),
            ),
          ),
          const SizedBox(height: 16),
          LessonCard(
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Text('Usuarios creados', style: Theme.of(context).textTheme.titleMedium),
                const SizedBox(height: 8),
                if (_users.isEmpty)
                  const Text('Aun no hay usuarios. Agrega uno desde el formulario.')
                else
                  ..._users.map(
                    (user) => ListTile(
                      leading: const CircleAvatar(child: Icon(Icons.person)),
                      title: Text(user.name),
                      subtitle: Text('${user.email} - ${user.role}'),
                    ),
                  ),
              ],
            ),
          ),
        ],
      ),
    );
  }
}
