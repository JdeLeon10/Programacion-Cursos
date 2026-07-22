import 'package:flutter/material.dart';

import '../widgets/page_action_button.dart';

// Pantalla reutilizable para las paginas del menu.
// Como todas las paginas tienen el mismo comportamiento, solo cambia el titulo.
class MenuPageScreen extends StatelessWidget {
  const MenuPageScreen({super.key, required this.title});

  final String title;

  @override
  Widget build(BuildContext context) {
    return Center(
      child: Column(
        mainAxisSize: MainAxisSize.min,
        children: [
          Text(
            title,
            style: Theme.of(context).textTheme.headlineMedium?.copyWith(
              fontWeight: FontWeight.bold,
            ),
          ),
          const SizedBox(height: 24),
          const PageActionButton(),
        ],
      ),
    );
  }
}
