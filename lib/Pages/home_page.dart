import 'package:flutter/material.dart';

class HomePage extends StatefulWidget {
  final keyScaffold=GlobalKey<ScaffoldState>();
  key:keyScaffold();
  const HomePage({super.key});

  @override
  State<HomePage> createState() => _HomePage();
}

class HomePage extends State<HomePage> {
  const HomePage({super.key});
  endDrawer:Drawer();
  // const MyWidget({super.key});
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
        )
      ],
    ));
  }
}


  // @override
  // Widget build(BuildContext context) {
  //   return const Placeholder();
  // }

// class HomePage extends StatefulWidget {


//   @override
//   State<StatefulWidget> createState() {
//     // TODO: implement createState
//     throw UnimplementedError();
//   }
// }
