# anstrilib
 A javascript string library

## How to use:

#### capitalize()
Capitalizes the first letter of the string.

`"hello".capitalize() // "Hello"`

#### allCaps()
Capitalizes all letters of the string.

`"hello".allCaps() // "HELLO"`

#### capitalizeWords()
Capitalizes the first character of each word, in a space separated string

`"hello world".capitalizeWords() // "Hello World"`

#### capitalizeHeadline()
Capitalizes the first character of each headline word, in a space separated string.
Headline words exclude the, in, a, an, and, but, for, at, by, from (unless its the first word).

`"hello the from but boo".capitalizeHeadline() // "Hello the from but Boo"`

#### removeExtraSpaces()
Removes all spaces from the beginning and end of a string along with any extra spaces in the middle

`"  hello the   a  ".removeExtraSpaces() // "hello the a"`

#### kabobCase()
Removes extra spaces and replaces spaces with the hyphen "-", and makes all characters lowercase.

`" hello the From but  Boo".kabobCase() // "hello-the-from-but-boo"`

#### snakeCase()
Removes extra space and replaces spaces with an underscore "_", and makes all characters lowercase.

`" hello the From but  Boo".kabobCase() // "hello_the_from_but_boo"`

#### camelCase()
Lowercases the first character of the first word, uppercases the first character of all other words, and removes all spaces.

``" hello the From but  Boo".kabobCase() // "helloTheFromButBoo"``