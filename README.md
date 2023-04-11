# Methodology Lab #1
> by Danylo Chohadze IM-13

The project basically is a simple console application, which solves quadratic equations.

Template of a suitable equation:
`ax^2 + bx + c = 0`, where `a`, `b` and `c` are real numbers and `a` isn't equal to 0.

The program supports two ways of utilising: interactive and uninteractive (details below).

## Instructions

Follow these steps to compile and launch the project:

`1.` Install Node.js

`2.` Install npm

`3.` Clone repo to your local machine

`4.` Install dependencies:
```
$ npm i
```

### - Interactive Mode

This mode supports manual input of `a`, `b` and `c` values through the console. If no error is present, the program will return the answers in console as well.

`5a.` Launch interactive mode:
```
$ node ./code/core.js
```

### - Uninteractive Mode

This mode supports automatic input of `a`, `b` and `c` through the provided `.txt` file. The initial file must contain 3 values for `a`, `b` and `c` separated by `\s` (space) and with an empty last line (`\n` by the end of the values). An example of supported file is provided in `/test/` directory.

`5b.` Launch uninteractive mode:
```
$ node ./code/core.js ./test/file.txt
```

## References

- Rever commit
