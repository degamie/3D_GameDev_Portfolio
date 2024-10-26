import 'package:flutter/material.dart';
import 'package:threed_gamedev_website/Pages/home_page.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      title: '3d GameDev Portfolio website',
      theme: ThemeData.dark(),
      home: const HomePage(),
    );
  }
}
