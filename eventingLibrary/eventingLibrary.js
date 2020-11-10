/*
 * Make an eventing system mix-in that adds .trigger() and .on() to any input
 * object.
 *
 * Example usage:
 * var obj = mixEvents({ name: 'Alice', age: 30 });
 * obj.on('ageChange', function(){ // On takes an event name and a callback function
 *    console.log('Age changed');
 * });
 * obj.age++;
 * obj.trigger('ageChange'); // This should call our callback! Should log 'age changed'.
 *
 * Caveats:
 * - mixEvents should return the original object it was passed after extending it.
 * - If we repeatedly call .on with the same event name, it should
 *   continue to call the old function as well. That is to say, we can have multiple
 *   listeners for an event.
 * - If `obj.trigger` is called with additional arguments, pass those to the
 *   listeners.
 * - It is not necessary to write a way to remove listeners.
 */

var mixEvents = function(obj) {
  events = {};

  obj.on = function (event, cb)  {
    !events[event] ? events[event] = [cb] : events[event].push(cb);
    //take in a key pair, in this case, a function name and function
    //adds it as a new value to our object
    //if already exisits? add to array
    //done
  }

  obj.trigger = function (event)  {
    //takes args, first being the even (key), the rest being params
    //check to see if event is there
    //for each even in the sub array,
    //apply the params to it
    const args = Array.prototype.slice.call(arguments, 1);
    if(events[event]) {
      events[event].forEach(function (params) {
        params.apply(null, args);
      });
    }
  };

  return obj;
};
