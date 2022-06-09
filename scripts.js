function burgerIn() {
  var a = document.getElementsByClassName("onMenu");
  var b = document.getElementsByClassName("offMenu1");
  if (a.length == 0 && b.length == 0) {
    document.getElementById("menuSlider").classList.toggle("onMenu");
    document.getElementById("burgerMenu").classList.toggle("open");
  } else {
    document.getElementById("menuSlider").classList.toggle("offMenu1");
    document.getElementById("menuSlider").classList.toggle("onMenu");
    document.getElementById("burgerMenu").classList.toggle("open");
  }
}
function loginClick() {
  console.log("działa");
}
var a_firm;
var a_offer;
var firm = "firm";
var offer = "offer";
var lefty = 0;
var flaga = true;

function m1next(name, a) {
  if (a == null) {
    a = 1;
    document.getElementById(name + a).classList.add(name + "left");
    document.getElementById("nextBtn_" + name).disable = true;
    a++;
    var element_to_slide = document.getElementById(name + a);
    element_to_slide.classList.remove(name + "right");
    element_to_slide.classList.add(name + "view");
    if (name == "firm") {
      a_firm = a;
    } else {
      a_offer = a;
    }
  } else if (a == $("#" + name + "_container > div").length) {
    document.getElementById("nextBtn_" + name).disable = true;
  } else {
    var element_to_slide = document.getElementById(name + a);
    element_to_slide.classList.remove(name + "view");
    element_to_slide.classList.add(name + "left");
    a++;
    document.getElementById(name + a).classList.remove(name + "right");
    document.getElementById(name + a).classList.add(name + "view");
    if (name == "firm") {
      a_firm = a;
    } else {
      a_offer = a;
    }
  }
}
function m2next(name, a) {
  if (lefty <= -(1600 - window.innerWidth) / 2) {
    document.getElementById("nextBtn_" + name).disable = true;
  } else {
    document.getElementById("prevBtn_" + name).style.display = "block";
    var move = document.getElementById(firm + "_container");
    lefty = lefty - 200;
    console.log(lefty);
    move.style["left"] = lefty + "px";
  }
}

function m3next(name, a) {
  flaga = false;
  var spr = document.getElementById("offer1");
  var leftpos = window.getComputedStyle(spr, null).getPropertyValue("left");
  var przeparsowane = parseInt(leftpos, 10);
  console.log(przeparsowane);
  if (przeparsowane <= 0) {
    console.log("wesło ale nie działa");
    document.getElementById("nextBtn_" + name).disable = true;
  } else {
    var step;
    for (step = 1; step < 4; step++) {
      var szer = $("#offer1").innerWidth();
      console.log("Szerokość: " + szer);
      var element = document.getElementById("offer" + step);
      var computedStyle = window
        .getComputedStyle(element, null)
        .getPropertyValue("left");
      console.log("Pierwszy" + computedStyle);
      var parsowanie = parseInt(computedStyle, 10);
      element.style["left"] = parsowanie - szer - 70 + "px";
      console.log("Przeparsowane :" + parsowanie / 2);
    }
  }
}
function m1prev(name, a) {
  if (a == null || a == 1) {
    document.getElementById("prevBtn_" + name).disable = true;
  } else {
    document.getElementById(name + a).classList.remove(name + "view");
    document.getElementById(name + a).classList.add(name + "right");
    a--;
    document.getElementById(name + a).classList.remove(name + "left");
    document.getElementById(name + a).classList.add(name + "view");
    if (name == "firm") {
      a_firm = a;
    } else {
      a_offer = a;
    }
  }
}
function m2prev(name, a) {
  if (lefty >= 0 || lefty == null) {
    console.log("weszło!!!");
    document.getElementById("prevBtn_" + name).disable = true;
  } else {
    console.log("nie ma");
    var move = document.getElementById(name + "_container");
    lefty = lefty + 200;
    move.style["left"] = lefty + "px";
  }
}
function m3prev(name, a) {


  if (flaga == true) {
    document.getElementById("prevBtn_" + name).disable = true;
  } else {
    flaga = true;
    var step;
    for (step = 1; step < 4; step++) {
      var szer = $("#offer1").innerWidth();
      console.log("Szerokość: " + szer);
      var element = document.getElementById("offer" + step);
      var computedStyle = window
        .getComputedStyle(element, null)
        .getPropertyValue("left");
      console.log("Pierwszy" + computedStyle);
      var parsowanie = parseInt(computedStyle, 10);
      element.style["left"] = parsowanie + szer + 70 + "px";
      console.log("Przeparsowane :" + parsowanie / 2);
      document.getElementById("prevBtn_" + name).disable = true;
    }
  }
}
function prev(name, a) {
  if (window.innerWidth < 568) {
    m1prev(name, a);
  } else if (window.innerWidth >= 568 && window.innerWidth < 812) {
    if (name == "firm") {
      console.log("tutu");
      m2prev(name, a);
    } else {
      console.log("tu?");
      m1prev(name, a);
    }
  } else if (window.innerWidth >= 812) {
    if (name == "offer") {
      m3prev(name, a);
    } else {
      console.log("Weszło?!!");
      m2prev(name, a);
    }
  }
}
function next(name, a) {
  if (window.innerWidth < 568) {
    m1next(name, a);
  } else if (window.innerWidth >= 568 && window.innerWidth < 812) {
    if (name == "firm") {
      m2next(name, a);
    } else {
      m1next(name, a);
    }
  } else if (window.innerWidth >= 812) {
    if (name == offer) {
      m3next(name, a);
    } else {
      m2next(name, a);
    }
  }
}
function reset1() {
  for (var step = 1; step < 4; step++) {
    document.getElementById("offer" + step).removeAttribute("style");
  }
}
