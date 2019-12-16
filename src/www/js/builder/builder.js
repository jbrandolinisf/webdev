/*
 * The `Builder' function takes a single argument (an object) and
 * generates (and returns) a constructor function.
 *
 * The object given to the `Builder' function has one special
 * property, the `constructor' property.  It will be a function that
 * should become a fully working JavaScript constructor function.
 *
 * The remaining properties in the object should become prototype
 * properties for the returned constructor function.
 *
 * Tips & Warnings:
 *  - don't mutate the provided `properties` object
 *  - pay attention to "own" vs "all" properties of an object (use hasOwnProperty() or getOwnPropertyNames())
 *  - you'll be controlling "context" (with call, apply, bind, etc)
 *
 * BONUS: (if you have time)
 *
 * Change the `Builder' function so that it takes a second argument,
 * another constructor function.  If the second argument is given, the
 * constructor function that is generated should inherit from the
 * second argument's prototype property.  This allows one to easily
 * create a class that inherits from another class.
 */
