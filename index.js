const fs = require('fs');


// fs.readFile('./texto.txt', function(err, data) {
//     if (err) {
//         console.log(err)
//     }

//     console.log(data)
// });

fs.readFile('./texto.txt', (err, data) => {
    if (err) {
        console.log(err)
    }

    console.log(data.toString());
})