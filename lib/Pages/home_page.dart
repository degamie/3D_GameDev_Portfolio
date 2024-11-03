import 'package:flutter/material.dart';


class HomePage extends State<HomePage> {
  @override
  State<HomePage> createState() => _HomePage();

}
class HomePage extends StatefulWidget{
  const HomePage({super.Key});
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
// const MyWidget({super.key});
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