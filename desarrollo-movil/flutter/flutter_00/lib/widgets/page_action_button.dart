import 'package:flutter/material.dart';

import 'modal_button.dart';

// Boton reutilizable que muestra un modal al presionarlo.
class PageActionButton extends StatelessWidget {
  const PageActionButton({super.key});

  void _showPressedModal(BuildContext context) {
    // showDialog abre una ventana modal encima de la pantalla actual.
    showDialog<void>(
      context: context,
      builder: (context) {
        return AlertDialog(
          content: const Text('has presionado el boton'),
          actions: [
            ModalButton(
              text: 'salir',
              onPressed: () {
                // pop cierra la ruta actual; en este caso, cierra el modal.
                Navigator.of(context).pop();
              },
            ),
          ],
        );
      },
    );
  }

  @override
  Widget build(BuildContext context) {
    return ElevatedButton(
      onPressed: () => _showPressedModal(context),
      child: const Text('presionarme'),
    );
  }
}
