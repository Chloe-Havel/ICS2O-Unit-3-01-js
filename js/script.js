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
  navigator.serviceWorker.register("/ICS2O-PWA-Test-1/sw.js", {
    scope: "/ICS2O-PWA-Test-1/",
  })
}

/**
 * This function calculates area and perimeter of rectangle.
 */
 function calculate() {
  // input
  const Side1 = parseInt(document.getElementById("side-1-of-triangle").value)
  const Side2 = parseInt(document.getElementById("side-2-of-triangle").value)
  const Side3 = parseInt(document.getElementById("side-3-of-triangle").value)
  // process
  const triangle = Side1 + Side2 + Side3

  // output
  document.getElementById("area").innerHTML = "perimeter is: " + triangle + " cm "
}
