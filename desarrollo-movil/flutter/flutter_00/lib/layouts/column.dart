import 'package:flutter/material.dart';

class ColumnExample extends StatelessWidget {
  const ColumnExample({super.key}); // Constructor de la clase MainApp

  @override
  Widget build(BuildContext context) {
    // Un contenedor unicamente muestra un hijo (widget)
    return Container(
      // Ocupa todo el ancho y alto de la pantalla con double.infinity
      width: double.infinity,
      height: double.infinity,
      color: Colors.blue,
      child: Column(
        // Orientacion vertical
        mainAxisAlignment: MainAxisAlignment.center,
        // Orientacion horizontal
        crossAxisAlignment: CrossAxisAlignment.center,
        children: [
          Text('Elemento 1 - Column'),
          Text('Elemento 2 - Column'),
          Text('Elemento 3 - Column'),
          Text('Elemento 4 - Column'),
        ],
      ),
    );
  }
}
