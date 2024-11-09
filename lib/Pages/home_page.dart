import 'package:flutter/material.dart';
import 'package:threed_gamedev_website/Pages/home_Page_1.dart';

class HomePage extends StatefulWidget implements HomePage1 {
  // const HomePage({Key? key}):super(key:key);
  @override
  HomePage createstate() => HomePage();

  // @override
  // HomePage1 createstate() => HomePage1();

  // StatefulWidget.createWidget()

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
              )
            ]
        )
    );
  }
}
// }

// abstract class HomePage()