import 'package:flutter/material.dart';

class HomePage extends StatefulWidget {
  const HomePage({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
        body: ListView(
          scrollDirection: Axis.vertical,
          children: [
            //Main
            Container(
              height: 500,
              width: double.maxFinite,
              color: Colors.purple,
            );
          ]
    }
}
class HomePage1 extends State<HomePage> {
  HomePage createState() => HomePage();
}
  // @override