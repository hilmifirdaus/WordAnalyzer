# WordAnalyzer
1. there is a constructor to create word, consonant, vowel, and numChar objects with initial value.

2. a render was made;
  a) user enter text
  b) user click on button. when clicked it will call analyzeWord function
  c) the function will return a new value and replace the initial value with it.
  
3. analyzeword contents;
  a) initialize 3 new variable; vow, cons, and charNo. all set to 0.
  b) a for-loop was made to go through letter by letter by splitting it through charAt(i)
  c) if it is a,e,i,o,u; vow variable will increment by 1. 
  d) on the next line, setState will update new value for vowel state in constructor. same concept applied to cons and charNo.
  e) a condition was made not to read any space between the words
  f) at the end of the loop, it will increment by 1 to calculate how many letters contained in those words
  
4. after the function is done, the view will show updated objects values.
