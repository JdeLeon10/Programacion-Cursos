import 'package:flutter/material.dart';

import 'core/app_theme.dart';
import 'screens/home_screen.dart';
import 'screens/login_screen.dart';
import 'state/session_controller.dart';

void main() {
  runApp(const MainApp());
}

class MainApp extends StatefulWidget {
  const MainApp({super.key});

  @override
  State<MainApp> createState() => _MainAppState();
}

class _MainAppState extends State<MainApp> {
  // Este controlador guarda el estado global basico de la app.
  // En apps mas grandes normalmente usarias Riverpod, Bloc o Provider.
  final SessionController sessionController = SessionController();

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      theme: AppTheme.lightTheme,
      // AnimatedBuilder escucha los cambios del controlador y reconstruye la UI
      // cuando hacemos login, logout o cambiamos de pagina.
      home: AnimatedBuilder(
        animation: sessionController,
        builder: (context, _) {
          if (sessionController.isLoggedIn) {
            return HomeScreen(controller: sessionController);
          }

          return LoginScreen(controller: sessionController);
        },
      ),
    );
  }
}
