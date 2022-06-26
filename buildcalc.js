
  
/* Here, we create a backspace() function to remove the number at the end of the numeric series in textview. */  
function backspace()  
{  
var exp = form1.answer.value;  
form1.answer.value = exp.substring(0, exp.length - 1); /* remove the element from total length ? 1 */  
}  
  