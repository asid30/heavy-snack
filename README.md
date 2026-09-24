# Heavy Snack

Landing page statis siap dipasang di GitHub Pages. Layout ada di `index.html`, data proyek di `js/projects.js`, dan pembuat kartu di `js/project-cards.js`. Tanpa instalasi atau proses build.

## Pasang di GitHub Pages

1. Buat repository baru di GitHub, misalnya `heavy-snack`.
2. Unggah `index.html`, folder `aset/` dan `js/` beserta seluruh isinya, dan `.nojekyll` ke akar repository, lalu commit.
3. Buka **Settings → Pages**. Pada **Build and deployment**, pilih **Deploy from a branch**, branch `main`, folder `/ (root)`, lalu **Save**.
4. Jika ingin memakai domain milikmu, isi **Custom domain** di halaman Pages, lalu ikuti instruksi DNS yang ditampilkan GitHub untuk jenis domainmu. Aktifkan **Enforce HTTPS** setelah domain aktif.

Konten dan warna dapat diubah langsung di `index.html`.

Semua gambar disimpan di folder `aset/`: `heavy-snack-logo.png`, `heavy-snack-banner.jpg`, `azimutree-banner.png`, dan `azimutree-icon.png`. Path gambar menggunakan path relatif agar tetap bekerja saat situs dipasang pada subfolder repository GitHub Pages.

## Menambah proyek

1. Simpan banner dan ikon proyek di folder `aset/` dengan nama seperti `nama-proyek-banner.png` dan `nama-proyek-icon.png`.
2. Buka `js/projects.js`, lalu tambahkan objek berikut di dalam array `projects`, setelah objek proyek sebelumnya:

```js
{
  name: "Nama Proyek",
  url: "https://contoh.com/",
  banner: "aset/nama-proyek-banner.png",
  bannerAlt: "Banner Nama Proyek",
  icon: "aset/nama-proyek-icon.png",
  category: "Web · Produktivitas",
  description: "Deskripsi singkat proyekmu.",
},
```

Kartu tampil sesuai urutan data dan membuka tautan di tab baru. `icon` boleh dihilangkan jika belum tersedia. Path gambar dihitung dari `index.html`. Tidak perlu mengubah HTML untuk menambah kartu.

Ubah struktur kartu di `js/project-cards.js` dan tampilannya melalui CSS `.project` di `index.html`. JavaScript diperlukan untuk menampilkan kartu; file HTML tetap bisa dibuka langsung di browser tanpa server lokal.
