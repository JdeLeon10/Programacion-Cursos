import 'package:flutter/material.dart';

import '../core/app_colors.dart';
import '../state/session_controller.dart';
import 'events_feedback_screen.dart';
import 'forms_state_screen.dart';
import 'lists_cards_screen.dart';
import 'security_inputs_screen.dart';
import 'user_preferences_screen.dart';

// Pantalla principal despues del login.
// Contiene AppBar, Drawer lateral y el contenido de la pagina seleccionada.
class HomeScreen extends StatelessWidget {
  const HomeScreen({super.key, required this.controller});

  final SessionController controller;

  Widget _buildSelectedLesson() {
    // Esta funcion decide que pantalla mostrar segun la opcion del Drawer.
    switch (controller.selectedPageIndex) {
      case 0:
        return const FormsStateScreen();
      case 1:
        return const ListsCardsScreen();
      case 2:
        return const EventsFeedbackScreen();
      case 3:
        return const SecurityInputsScreen();
      case 4:
        return const UserPreferencesScreen();
      default:
        return const FormsStateScreen();
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        // leading usa el espacio izquierdo del AppBar.
        // Builder nos da un context que pertenece al Scaffold, necesario para abrir el Drawer.
        leading: Builder(
          builder: (context) {
            return IconButton(
              icon: const Icon(Icons.menu),
              onPressed: () => Scaffold.of(context).openDrawer(),
            );
          },
        ),
        title: Text('Bienvenido ${controller.username}'),
        actions: [
          IconButton(
            tooltip: 'Cerrar sesion',
            icon: const Icon(Icons.logout),
            onPressed: controller.logout,
          ),
        ],
      ),
      drawer: Drawer(
        child: Column(
          children: [
            DrawerHeader(
              decoration: const BoxDecoration(color: AppColors.drawerHeader),
              child: Align(
                alignment: Alignment.bottomLeft,
                child: Column(
                  mainAxisSize: MainAxisSize.min,
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    const Icon(Icons.school, color: Colors.white, size: 34),
                    const SizedBox(height: 10),
                    Text(
                      'Lecciones Flutter',
                      style: Theme.of(context).textTheme.titleLarge?.copyWith(
                        color: Colors.white,
                        fontWeight: FontWeight.bold,
                      ),
                    ),
                    const Text(
                      'Conceptos basicos indispensables',
                      style: TextStyle(color: Colors.white70),
                    ),
                  ],
                ),
              ),
            ),
            Expanded(
              child: ListView.builder(
                padding: EdgeInsets.zero,
                itemCount: controller.menuItems.length,
                itemBuilder: (context, index) {
                  final item = controller.menuItems[index];
                  final isSelected = controller.selectedPageIndex == index;

                  return ListTile(
                    selected: isSelected,
                    leading: Icon(item.icon),
                    title: Text(item.title),
                    onTap: () {
                      controller.selectPage(index);
                      Navigator.of(context).pop();
                    },
                  );
                },
              ),
            ),
          ],
        ),
      ),
      body: _buildSelectedLesson(),
    );
  }
}
