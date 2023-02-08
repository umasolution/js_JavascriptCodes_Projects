var states = ["Rajasthan", "Assam", "Maharashtra", "Kerela", 1947, "Delhi"];

for(let i = 0; i < states.length; i++) {
    if(typeof states[i] !== "string") continue;
    console.log(states[i]);
}