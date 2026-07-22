import 'package:flutter/material.dart';

import '../models/app_menu_item.dart';
import '../models/user_session.dart';
import '../services/auth_service.dart';

// ChangeNotifier permite avisarle a Flutter cuando cambio algun dato.
// Cada notifyListeners() hace que los widgets que escuchan este controlador
// se reconstruyan con la informacion nueva.
class SessionController extends ChangeNotifier {
  final AuthService _authService = AuthService();

  UserSession? _session;
  int _selectedPageIndex = 0;

  final List<AppMenuItem> menuItems = const [
    AppMenuItem(title: 'Formularios y Estado', icon: Icons.edit_note),
    AppMenuItem(title: 'Listas y Cards', icon: Icons.view_list),
    AppMenuItem(title: 'Eventos y Feedback', icon: Icons.touch_app),
    AppMenuItem(title: 'Seguridad e Inputs', icon: Icons.lock),
    AppMenuItem(title: 'Preferencias', icon: Icons.tune),
  ];

  bool get isLoggedIn => _session != null;

  String get username => _session?.username ?? '';

  int get selectedPageIndex => _selectedPageIndex;

  AppMenuItem get selectedMenuItem => menuItems[_selectedPageIndex];

  Future<void> login(String username, String password) async {
    _session = await _authService.login(username: username, password: password);
    _selectedPageIndex = 0;
    notifyListeners();
  }

  void logout() {
    _session = null;
    _selectedPageIndex = 0;
    notifyListeners();
  }

  void selectPage(int index) {
    _selectedPageIndex = index;
    notifyListeners();
  }
}
