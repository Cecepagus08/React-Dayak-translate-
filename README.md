Berikut adalah versi yang telah diperbaiki sesuai dengan permintaan Anda:

---

# Aplikasi Penerjemah Bahasa Dayak Ngaju

## 📌 Tentang Aplikasi

Halo! Ini adalah aplikasi sederhana untuk menerjemahkan bahasa **Dayak Ngaju ↔ Indonesia**. Aplikasi ini menggunakan metode **kamus (Dictionary-Based Translation)**. Saya membuat ini dengan dataset yang berisi **2.500 kata dan frasa**, tetapi tentu saja, masih ada banyak kata yang belum masuk, jadi penerjemahannya mungkin belum sempurna.


## 📂 Teknologi yang Dipakai

- **Frontend**: React + Vite
- **Styling**: Tailwind CSS, Material Tailwind
- **Metode Penerjemahan**: Dictionary-Based Translation
- **Database Kamus**: JSON (2.000+ kata/frasa)

## 🧠 Bagaimana Cara Penerjemahan Bekerja?

Aplikasi ini menggunakan metode berbasis kamus untuk mencocokkan kata dari bahasa Dayak Ngaju ke Indonesia dan sebaliknya. Namun, karena metode ini bekerja hanya berdasarkan kata per kata, aplikasi belum bisa memahami konteks kalimat yang lebih kompleks atau struktur tata bahasa yang berbeda.

### Penerjemahan Berbasis Kamus (Dictionary-Based Translation)

Aplikasi ini punya database yang berisi daftar kata dalam bahasa Dayak Ngaju dan Indonesia. Jika kita mengetik kata tertentu, aplikasi akan mencocokkannya dengan daftar yang ada di database JSON. Jika kata tidak ditemukan, maka akan ditampilkan apa adanya.

**Contoh:**

- Kita ketik: `huma`
- Database JSON punya data seperti ini:
  ```json
  {
    "kata_dasar": {
    "huma": "rumah",
      "arep": "diri",
      "aran": "nama",
      "eweh": "siapa",
      "aran": "nama"
    

    }
  }
  ```
- Hasil terjemahan: `rumah`

Jika kita mengetik kalimat yang lebih panjang seperti
- `siapa nama kamu`
- program ini tetap akan menerjemahkannya, namun jika kata yang diinputkan tidak ada di dalam dataset, maka output akan menampilkan sesuai dengan input yang diberikan
- contoh output `eweh aran kamu`

## 📖 Cara Menggunakan

1. Ketik teks dalam bahasa **Dayak Ngaju** atau **Indonesia**.
2. Pilih arah terjemahan (misalnya dari Dayak Ngaju ke Indonesia atau sebaliknya).
3. Klik tombol "Terjemahkan".
4. Hasil terjemahan akan langsung muncul di bawahnya.





---

Terima kasih sudah mencoba aplikasi ini! Karena metode penerjemahan yang digunakan masih sederhana, hasilnya mungkin belum sepenuhnya akurat. Saya berharap aplikasi ini bisa terus dikembangkan agar lebih baik. Mohon maaf jika terdapat kesalahan dalam hasil terjemahan.
---

