# 📚 Submission Bookshelf API

Submission Bookshelf API - Kelas Belajar Membuat Aplikasi Back-End untuk Pemula - Dicoding Indonesia

🗒️ [Sertifikat Kompetensi Kelas Belajar Membuat Aplikasi Back-End untuk Pemula.pdf](https://www.dicoding.com/certificates/JLX127ODNZ72) [^1]

## 📚 Deskripsi Kelas

Belajar Membuat Aplikasi Back-End untuk Pemula <br>
Disusun oleh: Dicoding Indonesia <br>
Level: Pemula

<div align="center">
  <img src="https://user-images.githubusercontent.com/95717485/225231893-e59de44d-0d3e-4e79-971b-a4d494565a74.png" alt="Dicoding AWS">
</div>

<br>

Kelas ini ditujukan untuk individu yang ingin melangkah menjadi seorang Back-End Developer dengan standar kompetensi internasional milik AWS. Di akhir kelas, siswa dapat membuat RESTful API sederhana secara mandiri untuk mendukung fungsionalitas suatu aplikasi.

Materi yang dipelajari:

- **Pengenalan ke Back-End** : Menjelaskan peran front-end dan back-end, bagaimana cara client dan server berkomunikasi melalui protokol HTTP, dan arsitektur RESTFul API dalam membangun web service. (3 Jam)
- **Dasar-Dasar Node.js** : Mengenal Node.js serta mengetahui dasar dari Node.js seperti global dan process object, modularization, Node Package Manager (NPM), eventing, filesystem, dan teknik stream. (8 Jam)
- **Membangun Web Service menggunakan Node.js** : Membangun Web Service menggunakan Node.js secara native dan melalui framework Hapi, membangun RESTFul API sederhana. (10 Jam)
- **Deploy Web Service** : Mengenal dan menggunakan Amazon EC2, mengoperasikan Amazon EC2 melalui SSH, menjalankan RESTFul API di Amazon EC2. (5 Jam)
- **Mengonsumsi dan Menguji RESTful API menggunakan Postman** : Memasang Postman. Mengonsumsi RESTful API untuk tujuan pengujian dan menuliskan skenario uji otomatis menggunakan Postman. (5 Jam)

Evaluasi pembelajaran:

- **Submission** : Proyek akhir berupa praktik siswa berbentuk Bookshelf API berupa membuat Back-End dari aplikasi catatan yang memiliki fungsi Create, Read, Update, dan Delete.

Total jam yang dibutuhkan untuk menyelesaikan kelas ini, mulai dari persiapan kelas sampai evaluasi belajar, adalah **45** jam.


## Bookshelf API Output

API ini akan menyimpan data buku dengan atribut sebagai berikut:

- **Get All Books** :
```json
  {
    "status": "success",
    "data": {
        "books": [
            {
                "id": "Hs0aoqcfw24hqBUs",
                "name": "Buku A",
                "publisher": "Dicoding Indonesia"
            },
            {
                "id": "JA-Hqatymmop-jqh",
                "name": "Buku B",
                "publisher": "Dicoding Indonesia"
            }
        ]
    }
}
```

- **Get Detail Book** :
```json
 {
    "status": "success",
    "data": {
        "book": {
            "id": "JA-Hqatymmop-jqh",
            "name": "Buku A",
            "year": 2010,
            "author": "Jane Doe",
            "summary": "Lorem ipsum dolor sit amet",
            "publisher": "Dicoding Indonesia",
            "pageCount": 100,
            "readPage": 25,
            "finished": false,
            "reading": false,
            "insertedAt": "2024-01-11T12:49:43.142Z",
            "updatedAt": "2024-01-11T12:49:43.142Z"
        }
    }
}
```

## 🚀 Menjalankan Server

### 1. Clone repo

Cloning repo git

```bash
$ git clone https://github.com/komarnetwork/submission-bookshelf-api.git
```

### 2. Install Node

```bash
$ npm install
```
### 3. Menjalankan program

Aplikasi ini menggunakan Port 9000, silahkan sesuaikan dengan port yang kosong di localhost
Untuk menjalankan di lingkungan **pengembangan (*localhost*)**, gunakan perintah:

```bash
$ npm run start
```

Untuk menjalankan di lingkungan **pengembangan (*development with nodemon*)**, gunakan perintah:

```bash
$ npm run start-dev
```

Untuk menjalankan di lingkungan **produksi (*production*)**, gunakan perintah:

```bash
$ npm run start-prod
```

## Menjalankan Postman Collection secara Terprogram dengan Newman

Dengan Newman, kita bisa menjalankan Postman Collection tanpa perlu berinteraksi dengan aplikasi Postman

### 1. Install newman

Untuk memasang Newman menggunakan npm, pasanglah package newman secara global dengan perintah

```bash
$ npm install newman --g
```

### 2. Menjalankan newman dengan CLI

Jalankan aplikasi terlebih dahulu di localhost, lalu jalankan perintah dibawah ini

```bash
$ newman run Bookshelf-API-Test.postman_collection.json --environment Bookshelf-API-Test.postman_environment.json
```

## Menjalankan dengan Aplikasi Postman

Jika ingin menjalankan dengan tampilan GUI bisa menggunakan aplikasi Postman, silahkan import file collection & environment di aplikasi Postman, lalu run collection nya