# Rangkuman DOM Tree dari WPU (Pak Sandhika Galih)

**DOM Tree** adalah representasi elemen-element HTML dalam browser, dengan representasi berbentuk pohon

contoh kasus sederhana :
```
<html>
<head>
    <title>Web Programming UNPAS</title>
</head>
<body>
    <h1>Hello World</h1>
    <p>Paragraf 1</p>
    <p>Paragraf 2</p>
    <div>
        <p>Paragraf 3</p>
    </div>
    <a href="halaman2.html">Ke Halaman 2</a>
</body>
</html>
```
struktur html sederhana seperti ini, jika direpresentasikan dalam DOM Tree maka akan terlihat seperti ini 

![Hasil DOM Tree.](/dom_tree.png)

Ini adalah representasi DOM Tree.

> Seluruh elemen disebut sebuah node/simpul 

>Tiap-tiap node memiliki tipe, contohnya dapat dilihat dalam teks bold



## NodeList VS HTMLCollection

![Hasil DOM Tree.](/dom_tree.png)

Perlu diketahui : 

* Satu elemen dari contoh diatas disebut node
* Jika kita memilih lebih dari satu node, maka disebut nodeList
* HTMLCollection adalah kumpulan node khusus tipe element html saja.
* Keduanya merupakan kumpulan node
* Struktur datanya "mirip" array
* **nodeList** dapat berisi node apapun, sedangkan **HTMLCollection** harus berisi elemen HTML.
* **HTMLCollection** bersifat **_live_** sedangkan **nodeList tidak** (berguna untuk manipulasi DOM)

## Struktur Hierarki DOM Tree
Materi ini cukup penting, karena semua node dalam DOM Tree saling terhubung dan kita harus paham betul mengenai hubungan/relasi antar DOM tersebut. Supaya dalam topik penelusuran DOM, tidak kebingungan.

> Struktur Hierarki DOM mirip dengan silsilah keluarga, seperti parent & child.

![Hasil DOM Tree.](/dom_tree.png)

Semua elemen saling terhubung dalam DOM Tree

Struktur Hierarki seperti berikut : 
* **Root Node** 
    * Node yang menjadi sumber dari semua node lain di dalam DOM
    * default : document
* **Parent Node**
    * Node yang berada 1 tingkat diatas node yang lain
    * Contoh dari kasus sebelumnya, body adalah parent dari h1,p,p, div dan a
    * Ada yang disebut dengan **Grandparent** jika node berada 2 tingkat diatas. Yang dipedulikan hanya parent karena jika ditelusuri, maka akan menjadi Parent dari Parent dari Parent
* Child Node
    * Node yang berada 1 tingkat dibawah node yang lain
    * h1 adalah child dari body
    * Child Node tidak peduli tipe nodenya, tetap berlaku Child Node 
    
Struktur Hierarki ini harus dipahami terlebih dahulu agar tidak kebingungan dalam topik selanjutnya.