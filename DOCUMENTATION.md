# React Base Project Documentation

Description
===========

Base project ini dibuat menggunakan Create React App.

Base project ini digunakan untuk mengerjakan project dengan stack hanya react non Next.js.

Folder Structure
================

Struktur folder disini mengacu pada [Delightful React File/Directory Structure (joshwcomeau.com)](https://www.joshwcomeau.com/react/file-structure/) dengan harapan dapat membuat struktur projek jadi lebih rapi dengan memisah-misahkan file yang dipergunakan untuk local component dan global component.



Pada setiap component juga diberlakukan pemisahan file berdasarkan fungsinya, contoh Sidebar disitu ada SIdebar.tsx, Sidebar.hooks.ts, Sidebar.types.ts. Dimana Sidebar.tsx berisi view dari component tsb. logic business disimpan di Sidebar.hooks.ts dan type atau interface yg digunakan component tsb ada di Sidebar.types.ts.



```plain
.
├── node_modules
├── public
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── base/
│   │   │   ├── Button/
│   │   │   ├── Button.tsx
│   │   │   ├── Button.hooks.ts
│   │   │   └── Button.types.ts
│   │   ├── icons/
│   │   │   ├── index.ts
│   │   │   ├── Home.tsx
│   │   │   └── Rocket.tsx
│   │   ├── layout/
│   │   │   ├── Sidebar/
│   │   │   │   ├── Sidebar.tsx
│   │   │   │   ├── Sidebar.hooks.ts
│   │   │   │   └── Sidebar.types.ts
│   │   │   ├── Header/
│   │   │   │   ├── Header.tsx
│   │   │   │   ├── Header.hooks.ts
│   │   │   │   └── Header.types.ts
│   │   │   └── Content/
│   │   │       ├── Content.tsx
│   │   │       ├── Content.hooks.ts
│   │   │       └── Content.types.ts
│   │   └── ui/
│   │       └── InputSearch/
│   │           ├── InputSearch.tsx
│   │           ├── InputSearch.hooks.ts
│   │           └── InputSearch.types.ts
│   ├── constants/
│   │   └── apiUrl.ts
│   ├── contexts/
│   │   └── LayoutContext/
│   │       ├── LayoutContext.tsx
│   │       └── LayoutContext.types.ts
│   ├── helpers/
│   │   └── getChipStatusColor.ts
│   ├── pages/
│   │   └── PokemonList/
│   │       ├── __tests__/
│   │       │   ├── PokemonList.test.tsx
│   │       │   ├── PokemonList.helpers.test.ts
│   │       │   └── PokemonList.hooks.test.ts
│   │       ├── components/
│   │       │   ├── PokemonCard.tsx
│   │       │   └── PokemonCard.hooks.ts
│   │       ├── index.tsx
│   │       ├── PokemonList.tsx
│   │       ├── PokemonList.constants.ts
│   │       ├── PokemonList.helpers.ts
│   │       ├── PokemonList.hooks.ts
│   │       └── PokemonList.types.ts
│   ├── queries/
│   ├── reducers/
│   ├── styles/
│   │   └── globals.css
│   ├── types/
│   │   ├── apiResponse.ts
│   │   └── pokemon.ts
│   ├── utils/
│   │   ├── noop.ts
│   │   ├── slugToTitle.ts
│   │   └── toIDR.ts
│   ├── App.css
│   ├── App.tsx
│   ├── index.css
│   └── index.tsx
├── .env
├── .eslintignore
├── .eslintrc.js
├── .gitignore
├── package.json
├── package-lock.json
├── postcss.config.js
├── README.md
├── tailwind.config.js
└── tsconfig.json
```

Root
----

Di dalam directory root ada beberapa file config dan [README.md](http://README.md) file.

*   .env: Digunakan untuk menyimpan credential dan/atau info environment dengan format key-value. Pada saat development file ini dimasukkan ke .gitignore agar tidak di push ke repo
*   .eslintignore: Berisi list file yang akan di ignore oleh eslint
*   .eslintrc.js: Berisi konfigurasi linting untuk project
*   package.json, package-lock.json: berisi library-library yg di gunakan di project. Harap di diskusikan dulu jika ingin menambahkan library selain yang di rekomendasikan.
*   postcss.config.js, tailwind.config.js: config dari tailwind, jika ingin setup theme di project anda bisa extend theme di tailwind.config.js
*   [README.md](http://README.md) berisi cara untuk setup dan run project

Assets
------

Sesuai Namanya, asset-asset project di simpan di directory ini

Components
----------

Directory ini berisi komponen-komponen yang di gunakan secara global. Di directory ini ada subdirectory base, icons, layout, ui.

Setiap komponen dibuat di dalam subdirectory dengan nama komponen tersebut kecuali icons.

Di dalam setiap folder komponen berisi file-file yang dibutuhkan tersebut seperti types, hooks, constants, helpers, dll.

File tersebut diberi nama dengan format \[Nama komponen\].\[tipe file\].\[ts/tsx\], contoh Button.helpers.ts.

### Base

Berisi komponen terkecil yang digunakan secara global contohnya: button, input, select, dll.

### UI

Berisi komponen yang terdiri dari gabungan 2 atau lebih base component. Contoh komponen. InputSearch yang terdiri dari komponen Input, search Icon, dan Button.

### Layout

Berisi komponen yang digunakan untuk layout, contoh Header, Sidebar, Footer, dll.

### Icons

Berisi komponen-komponen icon. Berbeda dengan direktori-direktori sebelumnya untuk komponen icon tidak perlu membuat subdirektori. Di dalam directory icons ada file index.ts yang isinya adalah entry point terhadap icon yang ada di direktori icons. Misal kita mempunyai komponen icon Arrow.tsx dan Chevron.tsx maka di dalam index.ts-nya adalah seperti dibawah ini:

```typescript
import Arrow from './Arrow';
import Chevron from './Chevron';

export { Arrow, Chevron };
```

Cara import icon dari komponen lain adalah sebagai berikut:

```typescript
import { Arrow } from 'icons/';
```

Constants
---------

Berisikan file-file constant yang digunakan secara global. Penamaan file constant menggunakan case lowerCamelCase dan penamaan constant di dalam file tersebut menggunakan UPPER\_SNAKE\_CASE.

Contoh file cityValue.ts dengan isi:

```typescript
export const CITY_DROPDOWN_VALUE = [
  {id: 1, city: 'Bandung'},
  {id: 2, city: 'Jakarta'},
];
```

Contexts
--------

Direktori ini berisi context-context yang akan digunakan di aplikasi. Jika ingin menambahkan context maka bisa membuat subdirektori di dalam direktori contexts ini, di dalam subdirektori bisa berisi file-file yang digunakan di context tersebut seperti types, helpers, dll.

Helpers dan Utils
-----------------

Direktori ini berisi method-method yang digunakan secara global. Helpers digunakan untuk menyimpan method-method yang hanya berlaku di projek tersebut, misal method `getChipColorByStatus` dimana method ini berfungsi untuk me-return warna chip berdasarkan status. Sedangkan utils berisi method-method yang logicnya bisa digunakan di projek lain, misalnya `stringToTitlecase` atau `numberToIDR` .

1 file dalam helpers atau utils berisi hanya 1 method saja dengan nama file yang sama dengan nama methodnya. Penamaan file menggunakan lowerCamelCase.

Pages
-----

Direktori ini berisi komponen-komponen utama atau halaman pada fitur. Untuk menambahkan komponen dapat membuat subdirektori bernama komponen tersebut menggunakan UpperCamelCase.

Didalam subdirektori tersebut terdiri dari:

1.  index.tsx: berfungsi sebagai entry point terhadap komponen tersebut, contoh isi index.tsx sederhananya seperti ini:

```typescript
import {lazy} from 'react';
export default lazy(() => import('./PokemonList'));
```

3.  \[NamaKomponen\].tsx: file ini hanya berisi view dari komponen tanpa ada business logic apapun. Contohnya seperti ini:

```typescript jsx
import React from 'react';

import useView from './PokemonList .hooks';

const PokemonList = () => {
const { pokemons } = usePokemonList ();

  return (
    <>
      <h1>Pokémon List</h1>
      {pokemons.map((pokemon) => (
        {pokemon}
      ))}
    </>
  );
};

export default PokemonList;
```

*   \[NamaKomponen\].hooks.ts: file ini berisi dari logic business untuk view dari komponen tersebut. Contoh:

```typescript
const usePokemonList = () => {
    /* ...
     insert business logic here
    */
    return { pokemons }
}

export default usePokemonList;
```

*   Untuk file-file tambahan seperti types, helpers, constants, styles, dll. Bisa membuat file tersebut dengan nama file \[NamaKomponen\].\[tipe file\].ts, contohnya PokemonList.types.ts.

Styles
------

Berisikan file-file style yang digunakan secara global. Extension file bisa menggunakan .css atau .scss.

Types
-----

Direktori ini digunakan untuk type-type yang digunakan di projek secara global.

Di dalam directory types ada file index.ts yang isinya adalah entry point terhadap type yang ada di direktori types.

Direktori Lainnya
-----------------

Untuk direktori reducers dan queries ini kondisional, dibuat jika projek menggunakan reducer atau react query. Untuk penggunaan dan penamaan file disamakan dengan file-file lainnya.

Coding Convention/Style Guide
=============================

Style guide yang di gunakan di base project ini mengacu pada style guide dari airbnb/javascript dan airbnb/react.

Untuk detailnya bisa mengunjungi link dibawah:

[airbnb/javascript: JavaScript Style Guide (github.com)](https://github.com/airbnb/javascript)

[javascript/react at master · airbnb/javascript · GitHub](https://github.com/airbnb/javascript/tree/master/react).



Selain itu, ada tambahan style guide mengenai urutan import dimana urutan import adalah sebagai berikut:

1.  Package react
2.  Package dari node\_modules
3.  Package internal (component, type, dll.)
4.  Parent import
5.  Import dari folder yang sama
6.  Style import
