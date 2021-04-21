# Part 1: Intro to Javascript

## Part A:IDKSADASDKASLDASJDLKJL 

### *var* Declaration: 
* Question 1: values add:  20

* Question 2: final result:  20

### *let* Declaration: 
* Question 1: values add:  20

* Question 2: "ReferenceError: result is not defined" because let is within the code block from 1 to 11. Since line 14 is out of the scope, the result is not stored/carried out of the scope. 

### *const* Declaration: 
* Question 1: nothing is printed because result is const which means it cannot be replaced "num1+num2". 
* Question 2: "TypeError: Assignment to constant variable" const does not carry out from the scope. 

## Part B:  
* Question 1: line 12: 3 because there are three elements in the prices array. 

* Question 2: line 13:  150 because that is the current discounted amount. 

* Question 3: line 14: 150 because that is the calculated final amount. 

These are all allowed because the values are constantly updated through for loops. 

* Question 4: Nothing gets printed because discounted is used as a push, where the user would have to push something to add that value to discounted array. 

* Question 5: "ReferenceError: i is not defined" because i is out of the scope, i would only exist in the for loop. 
* Question 6: "ReferenceError: discountedPrice is not defined" since discountedPrice is declared with let inside of the for loop. 
* Question 7: since *finalPrice* is set in the same scope as line 14, the value of *finalPrice* would be carried out. 
* Question 8: this function would not return anything because it didn't add values to the array 
* Question 9: "ReferenceError: i is not defined" since i is declared as a let, it cannot be read outside of the for loop. 
* Question 10: 3, *length* in line 4 stores a const variable for the number of elements from input array *prices*. Therefore, it would be printed from line 12. 
* Question 11: nothing is pushed until user pushed it

### Data Types
* Question 12: 
    <ul>
    <li>Accessing the value of the name property in the student object: student.name </li>
    <li>Accessing the value of the Grad Year property in the student object: student.['Grad Year']</li>
    <li>Calling the function for the greeting property in the student object: student.greeting()</li>
    <li>Accessing the name property of the object in the Favorite Teacher property in student: student.['Favorite Teacher'].name</li>
    <li>Access the first index in the array of the courseLoad property of the student object: student.courseLoad[1]</li>
    </ul>

Accessing the value of the name property in the student object
Accessing the value of the Grad Year property in the student object
Calling the function for the greeting property in the student object
Accessing the name property of the object in the Favorite Teacher property in student
Access the first index in the array of the courseLoad property of the student object
