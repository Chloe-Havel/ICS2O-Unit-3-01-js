// Copyright (c) 2020 Chloe Havel All rights reserved
//
// Created by: Chloe Havel
// Created on: Sep 2020
// This file contains the JS functions for index.html

"use strict"

/**
 * Check servie worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS2O-Unit-3-01-js/sw.js", {
    scope: "/ICS2O-PWA-Test-1/",
  })
}

/**
 * This function calculates area and perimeter of rectangle.
 */
function calculate() {
  // input
  const aBase = parseInt(document.getElementById("a-base-of-trapezoid").value)
  const bBase = parseInt(document.getElementById("b-base-of-trapezoid").value)
  const height = parseInt(document.getElementById("height-of-trapezoid").value)
  // process
  const trapezoid = [(aBase + bBase) / 2] * height

  // output
  document.getElementById("area").innerHTML = "area is: " + trapezoid + " mm² "
}
