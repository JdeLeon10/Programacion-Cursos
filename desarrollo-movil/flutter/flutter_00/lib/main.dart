import 'package:flutter/material.dart';
import 'package:flutter_00/layouts/column.dart';
import 'package:flutter_00/layouts/row.dart';

void main() {
  runApp(const MainApp());
}

class MainApp extends StatelessWidget {
  const MainApp({super.key});

  // Widget a renderizar
  @override
  Widget build(BuildContext context) {
    return const MaterialApp(home: Scaffold(body: RowExample()));
  }
}
