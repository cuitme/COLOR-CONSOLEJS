# Ping Network dengan Warna di Konsol

Proyek ini adalah skrip **ping network** menggunakan **Node.js** dengan warna pada output konsol menggunakan library `color`.

## 🚀 Fitur
- Melakukan **ping** ke alamat IP atau domain yang ditentukan.
- Menampilkan status **berhasil** atau **gagal** dalam warna berbeda.
- **Waktu respons** ditampilkan dalam warna hijau jika berhasil.
- Ping dilakukan setiap **1 detik** secara otomatis.

---

## 📦 Instalasi
1. **Pastikan** Node.js sudah terinstal di sistem Anda.
2. Clone atau buat file `ping.js` di dalam proyek Anda.
3. Instal dependensi yang dibutuhkan dengan perintah berikut:

```bash
npm install color ping
```

---

## 📝 Penggunaan
1. **Salin kode berikut** ke dalam file `ping.js`:

```javascript
const ping = require('ping');
const Color = require('color');

const target = '8.8.8.8'; // Ganti dengan alamat yang ingin diping

console.log(Color('green').bold('🏓 Mulai Ping ke: '), Color('cyan').bold(target));

setInterval(async () => {
    try {
        const res = await ping.promise.probe(target);
        if (res.alive) {
            console.log(Color('green').bold(`✅ ${target} | Time: ${res.time} ms`));
        } else {
            console.log(Color('red').bold(`❌ ${target} Tidak Dapat Dihubungi!`));
        }
    } catch (error) {
        console.log(Color('red').bold('⚠️ Terjadi Kesalahan: '), error.message);
    }
}, 1000); // Ping setiap 1 detik
```

2. **Jalankan skrip** dengan perintah berikut di terminal:

```bash
node ping.js
```

---

## 🎨 Contoh Output
Jika berhasil, akan muncul output seperti ini di terminal:

✅ **Google DNS Aktif**  
```bash
🏓 Mulai Ping ke:  8.8.8.8
✅ 8.8.8.8 | Time: 30 ms
✅ 8.8.8.8 | Time: 28 ms
✅ 8.8.8.8 | Time: 32 ms
```

❌ **Jika target tidak bisa dihubungi**  
```bash
❌ 8.8.8.8 Tidak Dapat Dihubungi!
❌ 8.8.8.8 Tidak Dapat Dihubungi!
```

---

## 🔍 Penjelasan Kode
- Menggunakan **library `ping`** untuk mengecek status koneksi.
- Menggunakan **library `color`** untuk memberi warna pada output di terminal.
- Skrip **melakukan ping setiap 1 detik** dengan `setInterval()`.
- Menampilkan **waktu respons** (jika sukses) atau **peringatan error** (jika gagal).

---

## 📜 Lisensi
Proyek ini menggunakan lisensi **ISC**.

💡 **Silakan modifikasi dan gunakan sesuai kebutuhan!** 🚀

