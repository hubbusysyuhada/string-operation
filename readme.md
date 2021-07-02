# NPM STRING-OPERATION

package for check any form of string in Javascript

## How to use it?

`npm i string-op --save`


### NGRAM

Ngram is a function which you can give a bigram, trigram, quadrigram, etc operation into your string by defining an integer as the first parameter, and a string in the second parameter.

```
const { ngram } = require('string-op')

ngram(3, 'string') // will return [ 'str', 'tri', 'rin', 'ing' ]
ngram(4, 'string') // will return [ 'stri', 'trin', 'ring' ]
```


### PALINDROME

Palindrome is a function to check whether the reversed string given is the same as the original string. Palindrome function will return a boolean value.

```
const { palindrome } = require('string-op')

palindrome('level') // will return true as 'level' is a palindrome
palindrome('water') // will return false as 'water' is not a palindrome
```


### ANAGRAM

Anagram function will compare 2 string given and check whether the second string is the anagram of the first string. This function will return a boolean value

```
const { anagram } = require('string-op')

anagram('race', 'care') // will return true as 'care' is an anagram of 'race'
anagram('earth', 'moon') // will return false as 'moon' is not an anagram of 'earth'
```


### MARSUPIAL

Marsupial is a function that will check whether every character in the first string parameter given could be use and form a string in second parameter given. This function will return boolean value

```
const { marsupial } = require('string-op')

marsupial('Courage', 'Rug') // will return true as 'Rug' is a marsupial word of 'Courage'
marsupial('fact', 'cat') // will return true as 'cat' is a marsupial word of 'fact'
marsupial('garage', 'drink') // will return false as 'drink' is not a marsupial word of 'garage'
```