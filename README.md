### Hexlet tests and linter status:
[![Actions Status](https://github.com/vladislav1923/backend-project-lvl1/actions/workflows/hexlet-check.yml/badge.svg)](https://github.com/vladislav1923/backend-project-lvl1/actions)

### CodeClimate Maintainability
[![Maintainability](https://api.codeclimate.com/v1/badges/887d2b9c72e84c2cc7b0/maintainability)](https://codeclimate.com/github/vladislav1923/backend-project-lvl1/maintainability)

### Installation
[![asciicast](https://asciinema.org/a/MUmYKzcnaSgsjOMN6wezWIW46.svg)](https://asciinema.org/a/MUmYKzcnaSgsjOMN6wezWIW46)

### Even Game
[![asciicast](https://asciinema.org/a/3pFvfqqQcOo37buM8seApHrGc.svg)](https://asciinema.org/a/3pFvfqqQcOo37buM8seApHrGc)

### Calc Game
[![asciicast](https://asciinema.org/a/ZggGgV45FBl2AsOzSyJd4ssN9.svg)](https://asciinema.org/a/ZggGgV45FBl2AsOzSyJd4ssN9)

### GCD Game
[![asciicast](https://asciinema.org/a/TJ23POd8Gq0mJSEcoi0J60HRC.svg)](https://asciinema.org/a/TJ23POd8Gq0mJSEcoi0J60HRC)

### Progression Game
[![asciicast](https://asciinema.org/a/q0AB1xZaENteiUdOaj9bJwkgV.svg)](https://asciinema.org/a/q0AB1xZaENteiUdOaj9bJwkgV)

### Prime Game
[![asciicast](https://asciinema.org/a/H2v7qGSSueAXH0AGzFmMpySyz.svg)](https://asciinema.org/a/H2v7qGSSueAXH0AGzFmMpySyz)

### Adding a new game
1. Add a file with game's logic to `src/games/`
2. Re-export it from `src/index.js`
3. Add an executable file of the game to `bin/` (first line is `#!/usr/bin/env node`)
4. Add a game's start command to `bin` block in `package.json`
5. Execute a command `chmod +x bin/GAME_EXE_FILE_NAME`
6. Publish the lib launching `make publish`
7. Link the lib locally launching `make link`
