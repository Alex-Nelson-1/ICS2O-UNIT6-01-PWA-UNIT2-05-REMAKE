// Created by: Alex Nelson
// Created on: Oct 2022
// This file contains the JS functions for index.html

"use strict"

/**
 * Check servie worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register(
    "/ICS2O-UNIT6-01-PWA-UNIT2-05-REMAKE/sw.js",
    {
      scope: "/ICS2O-UNIT6-01-PWA-UNIT2-05-REMAKE/",
    }
  )
}

/* This function calculates a users earnings and displays it */
function calculatePay() {
  /* Input */
  const hoursWorked = parseFloat(document.getElementById("hoursWorked").value)
  const wage = parseFloat(document.getElementById("hourlyRate").value)
  const TAX_RATE = 0.18
  /* Proccess */
  const pay = hoursWorked * wage * (1 - TAX_RATE)
  const taxes = hoursWorked * wage * TAX_RATE
  /* Output */
  document.getElementById("pay").innerHTML = `Your pay will be: $ ${pay.toFixed(
    2
  )}`
  document.getElementById("governmentPortion").innerHTML =
    "The government will take: $" + taxes.toFixed(2)
}
