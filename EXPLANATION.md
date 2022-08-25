## Commodity CRUD

Commodity CRUD merupakan sebuah website aplikasi yang menyediakan resources data perikanan di Indonesia. 


## Fitur

Memiliki fitur diantaranya:
- Melihat dan mencari list data yang diinginkan
- Mengurutkan dan filter data berdasar kolom yang diinginkan
- Menambahkan data pada "list" harga

## Detail Fitur

### Table & Filter Search

[screen-record-table.webm](https://user-images.githubusercontent.com/49330712/186549354-f6c50213-b75c-4172-8770-f094982ce525.webm)

- design dibuat seminimalis mungkin sesuai dengan kebutuhan pengguna
- selain pengguna dapat melihat data komoditas, pengguna juga dapat dengan mudah melakukan pencarian dan filter data sesuai dengan yang diinginkan
- dalam filter pencarian berdasarkan nama komoditas (input: onchange) diberikan settimeout built in function agar tidak terlalu banyak permintaan ke server
- setiap filter terdapat tombol untuk clear option atau value
- setiap column table terdapat tombol sorting untuk mengurutkan data berdasarkan kolom (opsi: ascending/descanding/none)
- terdapat tombol page size atau pengaturan jumlah data yang ditampilkan dalam table
- terdapat tombol action menu untuk menampilkan pilihan edit dan delete komoditas

### Form Create & Edit

[screen-record-form-create.webm](https://user-images.githubusercontent.com/49330712/186551052-0e79b267-1e25-4272-ae5b-c30f5e93d8f4.webm)

[screen-record-form-edit.webm](https://user-images.githubusercontent.com/49330712/186552066-9e7be770-f898-436e-8629-938203e02186.webm)

- form untuk create komoditas dibuat dalam bentuk modal agar pengguna tidak perlu lagi berpindah halaman dan kembali secara berulangkali
- form dibuat secara vertikal agar pengguna lebih mudah dalam pengisian form
- form disertai dengan mandatory simbol untuk menandakan bahwa field tersebut bersifat mandatory
- form disertai dengan validasi agar data yang diberikan sesuai dengan rules
- form disertai dengan error message untuk memberikan informasi kesalahan pengisian form
- terdapat loading state untuk memberikan informasi bahwa form sedang memproses data
- terdapat success message ketika pengguna berhasil create/edit komoditas
- terdapat error message ketika pengguna gagal create/edit komoditas

### Delete Komoditas

[screen-record-form-delete.webm](https://user-images.githubusercontent.com/49330712/186552146-e8cb79e4-72d8-4faa-9655-320eea8702c0.webm)

- terkhusus delete terdapat modal konfirmasi untuk mengindari kesalahan memilih opsi
- terdapat loading state untuk memberikan informasi bahwa form sedang memproses data
- terdapat success message ketika pengguna berhasil create/edit komoditas
- terdapat error message ketika pengguna gagal create/edit komoditas
