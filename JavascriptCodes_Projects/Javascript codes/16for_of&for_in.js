const names = ["youtube", "facebook", "instagram", "netflix", "amazon"];

// forof is used basically for array
for(const n of names) {
    console.log(n);
}


//forin
const symbols = {
    yt: "YouTube",
    ig: "Instagram",
    fb: "Facebook",
    lco: "LearnCodeOnline.in"
};

// for(const n in symbols) {
//     console.log(symbols[n]);
// }

// forin is basically used for interating in object
for(const n in symbols) {
    console.log(`Key: ${n} and value: ${symbols[n]}`);
}


 