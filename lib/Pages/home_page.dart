import 'package:flutter/material.dart';

class _HomePageState extends State<HomePage> {
  final keyScaffold=GlobalKey<ScaffoldState>();
  @override
  key:keyScaffold();
  const HomePageState({super.key});

  @override
  State<HomePage> createState() => _HomePage();
}


  class HomePage extends StatefulWidget {
    const HomePage({super.key});
     endDrawer:Drawer();
  // const MyWidget({super.key});
  Widget build(BuildContext context) {
    return Scaffold(
      body: ListView(
      scrollDirection: Axis.vertical,
       children: [
      child:ListView(
      
     
        for(i<=navIcons.Length;i++){
          ListTile(){
            leaading:Icon(icon);
          }

        }
             ]),
  
        //Main
        Container(
          height: 500,
          width: double.maxFinite,
          color: Colors.purple,
        )
      ],
    ))
    );
  }
}