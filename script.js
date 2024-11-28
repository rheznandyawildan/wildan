// Ambil semua elemen <li> menggunakan querySelectorAll
const listItems = document.querySelectorAll("#container2 ul li");

// Loop melalui setiap elemen <li> 
listItems.forEach((item, index) => {
    // Ubah teks
    item.textContent = `List Baru ${index + 1}`;

    // Ubah style font
    item.style.fontSize = "18px"; // Contoh ukuran font
    item.style.fontWeight = "bold"; // Font tebal
    item.style.color = "white"; // Warna teks

    // Ubah background
    item.style.backgroundColor = "gray"; // Latar belakang abu-abu
    item.style.padding = "10px"; // Tambah padding
    item.style.margin = "10px 0"; // Tambah margin antara elemen
    item.style.borderRadius = "5px"; // Buat sudut elemen melengkung
});
