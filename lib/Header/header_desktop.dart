import 'package:flutter/material.dart';
import 'package:threed_gamedev_website/styles/Style.dart';
class HeaderDesktop extends StatefulWidget {
  const HeaderDesktop({super.key});

  @override
  State<HeaderDesktop> createState() => _HeaderDesktop();
}



class _HeaderDesktop extends State<HeaderDesktop> {
  @override
  Widget build(BuildContext context) {
    return Container(
      height: 50.0,
      margin: const EdgeInsets.fromLTRB(40,5,5,20),
      decoration:KHeaderDecoration(),
      child:Row(
        children: [
          SiteLogger.onTap(),
          const Spacer(),
          IconButton(
            onPressed: (){},
            icon: const Icon(Icons.menu),
          )
      ],),
      const SizedBox(width: 16);
    )
    // return const Placeholder();
  }
}


