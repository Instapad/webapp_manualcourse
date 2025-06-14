// reading files
const fs = require('fs');


// fs.readFile('./docs/blog1.txt', (err, data) => {
//     if (err) {
//         console.log(err);
//     }

//     console.log(data.toString());
// });
//     console.log('aku, inginkan');

// writing files
// fs.writeFile('./docs/blog1.txt', 'tuliskan sesuai pada file', () => {
//     console.log('kata-kata telah dituliskan dalam file');
// })
// fs.writeFile('./docs/blog2.txt', 'tuliskan sesuai pada file kedua', () => {
//     console.log('kata-kata telah dituliskan dalam file');
// })
// fs.writeFile('./docs/deleteme.txt', 'tuliskan sesuai pada file ketiga', () => {
//     console.log('kata-kata telah dituliskan dalam file');
// })
//buat folder
// if (!fs.existsSync('./assets')) {
// fs.mkdir('./assets', (err) => {
//     if (err) {
//         console.log(err);
//     }
//     console.log('folder dibuat');
// });
// } else {
//     fs.rmdir('./assets', (err) => {
//         if (err) {
//             console.log(err)
//         }
        
//             console.log('folder dihapus');

//     });
// }

//deleting files
if (fs.existsSync('./docs/deleteme.txt')) {
    fs.unlink('./docs/deleteme.txt', (err) => {
        if (err) {
            console.log(err)
        }
        console.log('file telah dihapus');
    });
}
