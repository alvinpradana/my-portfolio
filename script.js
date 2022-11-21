/* 
* 1. Membuat program output data diri.
*/
console.log('------------------------- Data Diri -------------------------');

const fullName = "Alvin Novian Perdana"
const age = 21
const degree = "Bachelor of Computer Science"
const skills = ["JavaScript, PHP, Java, Vue, React, Laravel, SpringBoot"]

console.log(`Nama : ${fullName}`);
console.log(`Umur : ${age}`);
console.log(`Pendidikan Terakhir : ${degree}`);
skills.forEach(skill => {
    console.log(`Pemrograman yang pernah dipelajari : ${skill}`);
})

/* 
* 2. Perbedaan var, let, dan const. Beserta contoh implementasinya
*/

/* 
*   SISTEM SCOPE YANG DIANUT
    Javascript menganut 2 sistem scope yang berbeda (block scope dan functional scope). Jika variable yang hadir didalam suatu block, misal perulangan maka jika kita mangakses variable tersebut dari luar perulangan, akan menyebabkan error. Inilah yang dianut oleh LET dan CONST.
    Berikut implementasinya:
    
    for (let i=1; i<6; i++){
        console.log(i)
    }
    console.log(i)
    
    Apabila perintah diatas dijalankan maka akan terjadi error bahwa i is not defined.
    Berbeda dengan VAR, kita bisa mengakses dan mengubah nilai VAR dari global scope.
    Dengan contoh sebagai berikut: 
        
    function hello() {
        var text = "Hello"
        return text
    }
    console.log(text)
    
    Dengan perintah ini kita bisa memanggil nilai dari variable text karena text dideklarasikan menggunakan VAR. Bahkan kita juga bisa mengubah nilai dari text misal dengan kasus seperti berikut: 
    
    var text = "Hello"
    function sayHello() {
        var text = "Hello my name is Alvin"
        return text
    }
    Ini sah digunakan dalam VAR dan tidak akan menyebabkan error.

*   KETETAPAN DATA
    Dalam kasus ini VAR dan LET dapat dilakukan reassign value (mengubah nilai dari variable).
    Dalam contoh:
        var number = 1
        number = 2
        console.log(number)
        
    Kode diatas akan menampilkan angka 2, karena variable number telah di reassign value di baris/perintah selanjutnya. Dan ini tidak akan menyebabkan error
    Kemudian untuk LET: 
        let name = "Alvin"
        name = "Alvin Novian"
        console.log(name)
        
    Kode diatas akan menampilkan output Alvin Novian, karena telah di reassign value. Dan ini juga tidak akan menyebabkan error. 
    Berbeda dengan CONST, karena dengan sifatnya yang konstan maka tidak dapat di reassign value.
    Dengan contoh berikut: 
        const dateOfBirth = "January, 14th 2001"
        dateOfBirth = "November, 21th 2022"
        console.log(dateOfBirth)
        
    Kode diatas akan menyebabkan pesan error bahwa CONST tidak dapat di reassign value. Serta nilai dateOfBirth akan menampung data yang dideklarasikan paling awal. 
*/

/* 
* 3. Buat program untuk menentukan ganjil dan genap menggunakan if else
*/
console.log('');
console.log('------------------------- Odd Even -------------------------');

const oddEvenNumber = 6
if (oddEvenNumber % 2 == 0) {
    console.log(`${oddEvenNumber} adalah angka genap.`);
} else {
    console.log(`${oddEvenNumber} adalah angka ganjil.`);
}

/* 
* 4. Menentukan harga menggunakan kondisi if else
*/
console.log('');
console.log('------------------------- Price -------------------------');

const price = 30000
if (price >= 25000) {
    console.log('Mahal');
} else if (price >= 10000) {
    console.log('Sedang');
} else if (price > 0 && price < 10000) {
    console.log('Murah');
}

/* 
* 5. Buat program menggunakan perulangan untuk mencetak angka 10-15 dengan FOR, WHILE, dan DO WHILE
*/
console.log('');
console.log('------------------------- Tipe Perulangan -------------------------');

/* FOR */
for (let i = 10; i <= 15; i++) {
    console.log('Perulangan dengan for.');
    console.log(i);
}
/* WHILE */
let i = 10
while (i <= 15) {
    console.log('Perulangan dengan while.');
    console.log(i);
    i++
}
/* DO WHILE */
do {
    i++
    console.log('Perulangan dengan do-while.');
    console.log(i);
} while (i <= 15);

/* 
* 6. Menentukan ongkos kirim
*/
console.log('');
console.log('------------------------- Ship Cost -------------------------');

function shipCost(distance) {
    const overCost = 3000
    const distanceOverCost = distance - 2

    if (distance <= 2) {
        console.log(`Distance: ${distance}, Shipping cost: 5000`);
    } else {
        console.log(`Distance: ${distance}km, Shipping cost: ${5000 + (overCost * distanceOverCost)}`);
    }
}
shipCost(3)

/* 
* 7. Membuat fungsi untuk menentukan nilai fazz, track, dan fazztrack
*/
console.log('');
console.log('------------------------- FazzTrack -------------------------');

function fazztrack(number) {
    for (let i = 1; i <= number; i++) {
        if (i % 5 == 0 && i % 3 == 0) {
            console.log('fazztrack')
        } else if (i % 5 == 0) {
            console.log('track')
        } else if (i % 3 == 0) {
            console.log('fazz')
        } else {
            console.log(i);
        }
    }
}
fazztrack(30)

/* 
* 8. Mencetak pola segitiga
*/
console.log('');
console.log('------------------------- Piramid -------------------------');

function piramid(number) {
    let space = ""
    for (let i = 1; i <= number; i++) {
        for (let j = i; j <= number; j++) {
            space += "*"
        }
        space += "\n"
    }
    console.log(space);
}
piramid(8)

/* 
* 9. Program square dengan segitiga
*/
console.log('');
console.log('------------------------- Square Outline -------------------------');
function square(number) {
    let space = ""
    for (let i = 0; i < number; i++) {
        for (let j = 0; j < number; j++) {
            if (i == 0 || i == number - 1) {
                space += "*"
            } else {
                if (j == 0 || j == number - 1) {
                    space += "*"
                } else {
                    space += " "
                }
            }
        }
        space += "\n"
    }
    console.log(space);
}
square(10)

/* 
* 10. Fetch data from json placeholder
*/
const url = 'https://jsonplaceholder.typicode.com/users'
async function getUsers(url) {
    const response = await fetch(url)

    let users = await response.json()
    showUsers(users)
    console.log(users);
}
getUsers(url)

function showUsers(users) {
    let element = ''
    users.map(function(user) {
        element += `
            <tr>
                <td class="px-4">${user.name}</td>
                <td class="px-4">${user.email}</td>
                <td class="px-4">${user.address.street}</td>
                <td class="px-4">${user.company.name}</td>
                <td class="px-4">${user.phone}</td>
            </tr>
        `
    })
    document.getElementById("tableContent").innerHTML = element
}