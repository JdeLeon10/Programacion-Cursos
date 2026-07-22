import 'package:flutter/material.dart';

// Boton reutilizable para acciones dentro de modales.
class ModalButton extends StatelessWidget {
  const ModalButton({super.key, required this.text, required this.onPressed});

  final String text;
  final VoidCallback onPressed;

  @override
  Widget build(BuildContext context) {
    return TextButton(onPressed: onPressed, child: Text(text));
  }
}
