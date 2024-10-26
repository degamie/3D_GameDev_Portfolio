import 'package:flutter/material.dart';

class HomePage extends State<HomePage> {
  @override
  Widget build(BuildContext context) {
    const _HomePage({super.key});
    // const MyWidget({super.key});
    Widget build(BuildContext context) {
      return Scaffold(
        body: ListView(         
          scrollDirection: Axis.vertical,
          children: [
        //Main
        Container(
          margin:EdgeInsets.symmetric(
            vertical:10.0,
            horizontal: 20.0,
          )
          height: 500,
          width: double.maxFinite,
          color: Colors.purple,
        decoration: BoxDecoration(
          gradient: LinearGradient(colors:[Colors.transparent,CustomColor.bgLight1,],
          

          )
        ),
           
        child:Row(
          children:[
            const Text("Degamiesign Portfolio")
            const Spacer(),
            for(int i=0;i<5;i++)
            TextButton(onPressed: (){}, child: const Text("Button"))
            Padding:const EdgeInsets.only(right:20),
          ],
          )
        )
      ],
    ));
  }
}
}
class _HomePage extends StatefulWidget {
  const _HomePage();

  @override
  State<_HomePage> createState() => const _HomePage();
}



// class _HomePage extends State<_HomePage> {
  

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