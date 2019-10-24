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

`"hello from boo".capitalizeHeadline() // "Hello from Boo"`

#### removeExtraSpaces()
Removes all spaces from the beginning and end of a string along with any extra spaces in the middle

`"  hello from   boo  ".removeExtraSpaces() // "hello from boo"`

#### kabobCase()
Removes extra spaces and replaces spaces with the hyphen "-", and makes all characters lowercase.

`" hello  From the  Boo".kabobCase() // "hello-from-the-boo"`

#### snakeCase()
Removes extra space and replaces spaces with an underscore "_", and makes all characters lowercase.

`" hello   From the  Boo".kabobCase() // "hello_from_the_boo"`

#### camelCase()
Lowercases the first character of the first word, uppercases the first character of all other words, and removes all spaces.

``" hello  From the  boo".kabobCase() // "helloTheFromButBoo"``