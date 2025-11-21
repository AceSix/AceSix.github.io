/*
 * @FilePath: \AceSix.github.io\static_cv\js\index.js
 * @Author: AceSix
 * @Date: 2023-12-13 11:56:03
 * @LastEditors: AceSix
 * @LastEditTime: 2025-11-21 15:03:00
 * Copyright (C) 2025 Brown U. All rights reserved.
 */
const cube = document.getElementById("cube");

const clickOnSide = (side) => {
  const activeSide = cube.dataset.side;
  cube.classList.replace(`show-${activeSide}`, `show-${side}`);
  cube.setAttribute("data-side", side);
};

document.querySelectorAll(".btn").forEach(btn => {
  btn.addEventListener("click", (e) => {
    const sideToTurn = e.target.dataset.side;
    clickOnSide(sideToTurn);
  })
});
