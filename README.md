# jpeg-corrupter

This simple little program will randomly edit a few hex values inside a jpeg image, corrupting it in a hopefully aesthetically pleasing way.

## Usage

### Corrupter

To run the corrupter:

```bash
$ ./corrupt.js path/to/file number-between-0-and-9
```

This will output a file called `corruptedFile.jpeg` which should be a damaged but nice looking version of the file, similar to `nicecorrupt.jpg`.

### Degrader

To run the degrader, which resaves an image continually to create jpeg compression artifacts:

```bash
$ ./degrade.js path/to/file number-of-times-to-resave
```

This will output a file called `degradedFile.jpeg` which should have a compression artifacts.

## Tests

OOPS.
