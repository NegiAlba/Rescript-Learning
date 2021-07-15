// Generated by ReScript, PLEASE EDIT WITH CARE

import * as React from "react";
import * as RescriptReactRouter from "@rescript/react/src/RescriptReactRouter.bs.js";

function NavBar$NavButton(Props) {
  var name = Props.name;
  var selected = Props.selected;
  var linkTo = Props.linkTo;
  var style = selected === name ? ({
        backgroundColor: "#656565",
        padding: "1ex"
      }) : ({
        backgroundColor: "#efefef",
        padding: "1ex"
      });
  return React.createElement("div", {
              style: style,
              onClick: (function (param) {
                  return RescriptReactRouter.push(linkTo);
                })
            }, name);
}

var NavButton = {
  make: NavBar$NavButton
};

function NavBar(Props) {
  var url = RescriptReactRouter.useUrl(undefined, undefined);
  var match = url.path;
  var selected;
  if (match) {
    switch (match.hd) {
      case "recipes" :
          selected = "Recipes";
          break;
      case "tags" :
          selected = "Tags";
          break;
      default:
        selected = "Home";
    }
  } else {
    selected = "Home";
  }
  return React.createElement("div", {
              style: {
                display: "flex",
                justifyContent: "center"
              }
            }, React.createElement(NavBar$NavButton, {
                  name: "Home",
                  selected: selected,
                  linkTo: "/"
                }), React.createElement(NavBar$NavButton, {
                  name: "Tags",
                  selected: selected,
                  linkTo: "/tags"
                }), React.createElement(NavBar$NavButton, {
                  name: "Recipes",
                  selected: selected,
                  linkTo: "/recipes/add"
                }));
}

var make = NavBar;

export {
  NavButton ,
  make ,
  
}
/* react Not a pure module */