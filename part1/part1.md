# Part 1: Intro to Javascript

## Part 1A:

### *var* Declaration: 
* Question 1: values add:  20

* Question 2: final result:  20

### *let* Declaration: 
* Question 1: values add:  20

* Question 2: "ReferenceError: result is not defined" because let is within the code block from 1 to 11. Since line 14 is out of the scope, the result is not stored/carried out of the scope. 

### *const* Declaration: 
* Question 1: nothing is printed because result is const which means it cannot be replaced "num1+num2". 
* Question 2: "TypeError: Assignment to constant variable" const does not carry out from the scope. 

## Part 1B:  
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

### Basic Operators & Type Conversion 
* Question 13: 
  * '3' + 2: '32': '2' is casted as a char, so '3' and '2' are concatenated (has multiple functions/meaning, would not be clear)
  * '3' - 2: 1: '3' becomes a number, so 3-2 = 1 ("-" has the subtraction function so it would be casted as a number instead of string) 
  * 3 + null: 3, null would be considered undefined so 3+null=3 (the number would overrule, stays as a number)
  * ‘3’ + null: '3null' because this is concatenation. 
  * true + 3: *true* has the value of 1 because it represents 1 in terms of binary; therefore, (true=1) + 3 = 4
  * false + null: false has the value of 0 because it represents 0 in terms of binary, therefore false = 0, and null is still undefined. 
  * '3' + undefined: '3undefined' because this would be considered concatenation
  * '3' - undefined: NaN because cannot detect undefined in arithmetic

### Comparison
* Question 14: 
  * '2' > 1: true
  * ‘2’ < ‘12’: false since this is read through lexicographic, the first character of '12' is '1' and '1' is less than '2'. 
  * 2 == ‘2’: true '2' is casted as a number, 2=2 is true. 
  * 2 === ‘2’: false because === does not type cast, would be comparing string and number, which is false 
  * true == 2: false because true is 1, so 1 does not equal 2 
  * true === Boolean(2), since the value of 2 is 1+, it would be true since it is not 0. Therefore, true = true. 
  
* Question 15: 
  * == type casts the two items while === does not type cast 
  
### Loops 
* Question 16: 
in [part1b-question16.js](https://github.com/sophiaallui/sp21-cse110-lab4/blob/master/part1/part1b-question16.js)

### Functions: 
* Question 17: 
[2,4,6] because the array [1,2,3] is sent into modifyArray, which is then processed in doSomething. Inside of doSomething, it would multiply each element by 2. Each element is processed in a for loop and stored inside of newArr. The output is the newArr. 

* Question 18: 
in [part1b-question18.js](https://github.com/sophiaallui/sp21-cse110-lab4/blob/master/part1/part1b-question18.js) 

* Question 19: OUTPUT: 
1
4
3
2
