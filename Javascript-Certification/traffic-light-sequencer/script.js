const config1 = {
  fault: false,
  phases: [
    { color: "green", duration: 5 },
    { color: "yellow", duration: 2 },
    { color: "red", duration: 4 }
  ]
};

const config2 = {
  fault: false,
  phases: [
    { color: "red", duration: 3 },
    { color: "yellow", duration: -2 },
    { color: "green", duration: 6 }
  ]
};

const config3 = {
  fault: true,
  phases: [
    { color: "green", duration: 5 },
    { color: "yellow", duration: 2 },
    { color: "red", duration: 6 }
  ]
};

const config4 = {
  fault: false,
  phases: []
};

function runSequence(config, cycles) {
  cyclesLoop: for (let i = 0; i < cycles; i++) {
    configLoop: for (const attr in config) {
      if (attr === "fault") {
        if (config[attr] === true) {
          console.log("Faulted phase!");
          break cyclesLoop;
        }
      }

      if (attr === "phases") {
        if (config[attr].length === 0) {
          console.log("No phases found");
          break cyclesLoop;
        }
        phaseLoop: for (const phase of config[attr]) {
          if (phase.duration <= 0) {
            console.log("Invalid phase detected");
          } else {
            console.log(`Switching to ${phase.color} for ${phase.duration} s`);
          }
        } 
      }
    }
  }
}

function generateTimeline(config, cycles) {
  let timeline = [];
  let cumulativeTime = 0;
  for (let i = 0; i < cycles; i++) {
    for (const attr in config) {
      if (attr === "phases") {
        for (const phase of config[attr]) {
          cumulativeTime += phase.duration;
          timeline.push(cumulativeTime);
        }
      }
    }
    
  }
  return timeline;
}

runSequence(config3, 2);
console.log(generateTimeline(config1, 2));
