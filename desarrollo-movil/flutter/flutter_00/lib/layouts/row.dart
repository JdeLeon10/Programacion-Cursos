import 'package:flutter/material.dart';

class RowExample extends StatelessWidget {
  const RowExample({super.key});

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.only(top: 86.0),
      child: SizedBox(
        // No se usa contanier para aprovechar mejor el componente, container permite manejar mas opciones de estilo, pero no es necesario en este caso
        height: double.infinity,
        child: const Row(
          mainAxisAlignment: MainAxisAlignment.spaceEvenly,
          crossAxisAlignment: CrossAxisAlignment.center,
          children: [
            Text('Elemento 1'),
            // Spacer(); <- Este widget permite separar los elementos de manera proporcional, en este caso se puede usar para separar los elementos de la fila
            Text('Elemento 2'),
            Text('Elemento 3'),
          ],
        ),
      ),
    );
  }
}
