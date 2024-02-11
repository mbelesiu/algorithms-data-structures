// Implement the UndergroundSystem class:

// void checkIn(int id, string stationName, int t)
// A customer with a card id equal to id, gets in the station stationName at time t.
// A customer can only be checked into one place at a time.
// void checkOut(int id, string stationName, int t)
// A customer with a card id equal to id, gets out from the station stationName at time t.
// double getAverageTime(string startStation, string endStation)
// Returns the average time to travel between the startStation and the endStation.
// The average time is computed from all the previous traveling from startStation to endStation that happened directly.
// Call to getAverageTime is always valid.
// You can assume all calls to checkIn and checkOut methods are consistent. If a customer gets in at time t1 at some station, they get out at time t2 with t2 > t1. All events happen in chronological order.


var UndergroundSystem = function() {
  this.idActive = {}; // contains people who have checked in
  this.stationTimes = {}; // startStationEndStation

};

/*
* @param {number} id
* @param {string} stationName
* @param {number} t
* @return {void}
*/
UndergroundSystem.prototype.checkIn = function(id, stationName, t) {
  if(this.idActive[id]){
      return null;
  }
  this.idActive[id] = {'stationName': stationName, 'start' : t};

};

/*
* @param {number} id
* @param {string} stationName
* @param {number} t
* @return {void}
*/
UndergroundSystem.prototype.checkOut = function(id, stationName, t) {
  if(this.idActive[id] !== false){
      let stationID = `${this.idActive[id].stationName}${stationName}`;
      if(this.stationTimes[stationID]){
          this.stationTimes[stationID].totalTime += (t-this.idActive[id].start);
          this.stationTimes[stationID].count++;
      } else {
          this.stationTimes[stationID] = {'totalTime' : t-this.idActive[id].start, 'count': 1}
      }


      this.idActive[id] = false;
  }

};

/*
* @param {string} startStation
* @param {string} endStation
* @return {number}
*/
UndergroundSystem.prototype.getAverageTime = function(startStation, endStation) {
  let lookUp = `${startStation}${endStation}`;
  if(this.stationTimes[lookUp]){
      // let sum = 0;

      // for(let i = 0; i < this.stationTimes[lookUp].length; i++){
      //     sum += this.stationTimes[lookUp][i];
      // }
      // return (sum/this.stationTimes[lookUp].length)
      return (this.stationTimes[lookUp].totalTime/this.stationTimes[lookUp].count);
  }
  return null;
};

/*
* Your UndergroundSystem object will be instantiated and called as such:
* var obj = new UndergroundSystem()
* obj.checkIn(id,stationName,t)
* obj.checkOut(id,stationName,t)
* var param_3 = obj.getAverageTime(startStation,endStation)
*/