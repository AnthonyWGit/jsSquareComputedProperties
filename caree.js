squareQuery = document.querySelector("#square")
let squareQueryBgColor = " \n Background color: " + window.getComputedStyle(squareQuery).backgroundColor //Computed style values are returned as CSSSstyle declaration
let squareQueryBgWidth = " \n Width: " + window.getComputedStyle(squareQuery).width                      //We need to use object notations to access properties
let squareQueryHeight =  " \n Height: " + window.getComputedStyle(squareQuery).height
let squareQueryTextcolor =  " \n Text color: " + window.getComputedStyle(squareQuery).color
let squareQueryFlex =  " \n Display: " + window.getComputedStyle(squareQuery).display
let squareQueryFont =  " \n Display: " + window.getComputedStyle(squareQuery).font
let squareId = " \n ID :" + document.getElementById("square").outerHTML.slice(9, -14)           //To display only the id
alert(squareQueryBgColor + squareQueryTextcolor + squareQueryBgWidth + squareQueryHeight +squareQueryFlex + squareQueryFont + squareId);