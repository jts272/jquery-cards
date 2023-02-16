// `this` refers to the <p> in question, not all of them.

$("p").click(function () {
  $(this).slideToggle("slow");
});

// See chained methods:

$("button").mouseenter(function () {
  $(this).removeClass("make-red").addClass("make-blue");
});

$("button").mouseleave(function () {
  $(this).removeClass("make-blue").addClass("make-red");
});

// $(document).ready(function () {
//   $(".box").on("click", function () {
//     let classNames = $(this).attr("class").split(" ");
//     // console.log(classNames); -> ["box", "one"] etc.
//     // let jQuery address class with dot and 2nd array value:
//     $("." + classNames[1]).css("background-color", "red");
//   });
// });

// We want an event that changes black boxes of a class to red and vice-versa.
// Fire this event on an element with the "box" class:

$(document).ready(function () {
  $(".box").on("click", function () {
    let classNames = $(this).attr("class").split(" ");
    // console.log(classNames); -> ["box", "one"] etc.
    let boxClass = classNames[0];
    // console.log(boxClass); -> "box"
    let className = classNames[1];
    // console.log(className); -> "one" etc.

    // if red, set to black:
    if ($(this).css("background-color") == "rgb(255, 0, 0)") {
      console.log(this);
      $("." + className).css("background-color", "black");
    }

    // set all `box` to black, and change clicked class boxes to red:
    else {
      $("." + boxClass).css("background-color", "black");
      $("." + className).css("background-color", "red");
    }
  });
});

// SOLUTION: IF STATEMENT ONLY RESPONDS IF THE RGB IS IN THE CORRECT FORMAT -
// WITH SPACES BETWEEN VALUES.

// ------------------------------------------------------------------ //

// SOLUTION CODE:

// $(document).ready(function () {
//   $(".box").on("click", function () {
//     /**
//      * When we click on an element that has
//      * a 'box' class, this event will be fired.
//      */
//     var classNames = $(this).attr("class").split(" ");
//     var boxClass = classNames[0];
//     var className = classNames[1];
//     if ($(this).css("background-color") == "rgb(255, 0, 0)") {
//       // If this object is already red, turn it black
//       $("." + className).css("background-color", "#000");
//     } else {
//       // Else turn all elements with a box class black
//       // and then change the color of all elements
//       // with the same class name as the clicked element
//       // to red.
//       $("." + boxClass).css("background-color", "#000");
//       $("." + className).css("background-color", "red");
//     }
//   });
// });

// MINE WITHOUT COMMENTS:

// $(document).ready(function () {
//   $(".box").on("click", function () {
//     let classNames = $(this).attr("class").split(" ");
//     let boxClass = classNames[0];
//     let className = classNames[1];
//     if ($(this).css("background-color") == "red") {
//       $("." + className).css("background-color", "black");
//     } else {
//       $("." + boxClass).css("background-color", "black");
//       $("." + className).css("background-color", "red");
//     }
//   });
// });

// SOLUTION WITHOUT COMMENTS:

// $(document).ready(function () {
//   $(".box").on("click", function () {
//     var classNames = $(this).attr("class").split(" ");
//     var boxClass = classNames[0];
//     var className = classNames[1];
//     if ($(this).css("background-color") == "rgb(255, 0, 0)") {
//       $("." + className).css("background-color", "#000");
//     } else {
//       $("." + boxClass).css("background-color", "#000");
//       $("." + className).css("background-color", "red");
//     }
//   });
// });
