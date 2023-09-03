# NodeJS

## Node.js is an open-source, cross-platform JavaScript runtime environment

* Open Source - Source code is publically available for sharing and modification
* Cross Platform - Available on Mac, Windows and Linux  
* JavaScript Runtime Environment - It provides all the required components such as JavaScript Engine and other required apis to run JavaScript

### Chrome's V8 Engine

* Chrome's V8 Engine (JavaScript Engine) by Google sits at the core of Node.js
* Chrome's V8 is written in C++ and used in Chrome browser
* By embedding V8 into your own C++ application (example: chrome), you can write C++ code that gets executed when user writes JavaScript code
* Since C++ is great for lower level operations like file-handling, database connection and network operations, by embedding V8 into your own C++ program (example: Node.js) you have all the power to add all of that functionality in JavaScript

#### What can we build using Node.js?

* Traditional Websites
* Backend services like API's
* Real-time applications
* Streaming services
* CLI Tools
* Multiplayer Games

#### Note: While using Node.js for web development, keep in mind that a browser might not have all the functionalities of Node.js (example: file system) and similarly Node.js does not provide browser api's (example: document or window)

### Modules

#### A module is an encapsulated and reusable chunk of code that has its own context in Node.js, each file is treated as a seperate module

* Local Modules - Modules that we create in our application
* Built-In Modules - Modules that Node.js ships with out of the box
* Third Party Modules - Modules written by other developers that we can use in our application

#### Note: CommonJS is a standard that states how a module should be structured and shared
