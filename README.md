# MusicalChairsGame

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.2.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

* To get help on Conventional Commits, check out the docs [here](https://www.conventionalcommits.org/en/v1.0.0/)
The commit contains the following structural elements, to communicate intent to the consumers of your library:

  - fix: a commit of the type fix patches a bug in your codebase (this correlates with PATCH in Semantic Versioning).
  - feat: a commit of the type feat introduces a new feature to the codebase (this correlates with MINOR in Semantic Versioning).
  - BREAKING CHANGE: a commit that has a footer BREAKING CHANGE:, or appends a ! after the type/scope, introduces a breaking API change (correlating with MAJOR in Semantic Versioning). A BREAKING CHANGE can be part of commits of any type.
  - types other than fix: and feat: are allowed, for example @commitlint/config. -conventional (based on the the Angular convention) recommends build:, chore:, ci:,    docs:, style:, refactor:, perf:, test:, and others.
  - footers other than BREAKING CHANGE: <description> may be provided and follow a convention similar to git trailer format.

  - build: Changes that affect the build system or external dependencies (example scopes: gulp, broccoli, npm)
  - ci: Changes to our CI configuration files and scripts (example scopes: Travis, Circle, BrowserStack, SauceLabs)
  - docs: Documentation only changes
  - feat: A new feature
  - fix: A bug fix
  - perf: A code change that improves performance
  - refactor: A code change that neither fixes a bug nor adds a feature
  - style: Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)
  - test: Adding missing tests or correcting existing tests


More help on SCSS [here](https://sass-lang.com/documentation/syntax)


App Screen Flow

Screen 1
------------------------
| l   |
| o   |
| g   |
| i   |
| n   |
------------------------

* login or signup will remain on the same section.

Screen 2
------------------------
-----------Nav--------P-
Rooms
|----------------------|
|----------------------|
History
|----------------------|
|----------------------|

* Click on P icon for Profile, Settings, Logout
profile
settings

Generate 5 Rooms with random number of users (0 - 10).
Card { room - assign random name, view room as spectator, (join room) }
Generate random participation history (gamesJoined, gamesWon, eliminationAt, dateOfParticipation).
Card { win or loss, date of participation, elimiated at level }

Screen 3 (Room)
------------------------
-----------Nav--------P-

         Round 0

 o  o  o  o  o  o  o  o
 o  o  o  o  o  o  o  o
 o  o  o  o  o  o  o  o
 o  o  o  o  o  o  o  o
 o  o  o  o  o  o  o  o

------------------------
List of elimination
------------------------

Card o { Chair#, name, avatar }
Hide animation on eliminate

Take a second to imagine that you are in a room with 100 chairs arranged in a circle. These chairs are numbered sequentially from One to One Hundred. At some point in time, the person in chair #1 will be told to leave the room. The person in chair #2 will be skipped, and the person in chair #3 will be told to leave. Next to go is person in chair #6. In other words, 1 person will be skipped initially, and then 2, 3, 4.. and so on. This pattern of skipping will keep going around the circle until there is only one person remaining- The survivor! Note that each chair is removed when the person leaves the room.
Write an HTML page using Typescript to visualize the disappearing chairs and figure out which chair the survivor is sitting in.
