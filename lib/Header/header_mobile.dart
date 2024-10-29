import 'package:flutter/material.dart';
import 'package:threed_gamedev_website/styles/Style.dart';

class HeaderMobile extends StatefulWidget {
  const HeaderMobile({super.key});

  @override
  State<HeaderMobile> createState() => _HeaderMobile();
}

class _HeaderMobile extends State<HeaderMobile> {
  @override
  Widget build(BuildContext context) {
    return Container(
      height: 50.0,
      margin: const EdgeInsets.fromLTRB(40,5,5,20),
      decoration: KHederDecoration,
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