import 'package:flutter/material.dart';

// Modelo que representa una opcion del menu lateral.
// Es parecido a un DTO simple: solo guarda datos.
class AppMenuItem {
  const AppMenuItem({required this.title, required this.icon});

  final String title;
  final IconData icon;
}
