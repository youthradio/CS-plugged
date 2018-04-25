var myList = []; //declaring var myList to be a list

function processButton(){
  //inputValue has the input text content
  var inputValue = document.querySelector("#input-field").value;
  document.querySelector("#input-field").value = ''; //clean after assign to inputValue
  //push inputValue to the myList, everytime you click on
  //button a new element will be added to it
  //Please check the the inputValue is not empty before pushing to the lists


  //this print on the consolet
  console.log(myList); //Open the Developer tools CMD + alt + I


  updateOutputs(); //function to update Outputs on screen
  updateListOnScreen(); //function to update list on Screen
 }


//update outputs elements on the HTML page
function updateOutputs(){
  //now replace the content of each output element on your HTML with the items of the list
  var output1 = document.querySelector("#output-1");
  output1.innerHTML = "REPLACE THIS WITH THE ONE OF THE ITEMS";

}
//triggered by the pop button
function processPop(){
    //implement the pop function, it removes the last element

   //update screen
   updateOutputs();
   updateListOnScreen();
 }

//update list on the screen
function updateListOnScreen(){
  document.querySelector("#list-print").innerHTML = myList.map((e,i) => i + "-> " + e).join('<br>');
}
//enable key enter to trigger processButton function
document.querySelector("#input-field").addEventListener("keyup", e => {
    e.preventDefault();
    if (e.keyCode === 13) {
        processButton();
    }
});
