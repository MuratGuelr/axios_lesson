# JSONPlaceholder API Kullanımı

Bu projede, JSONPlaceholder API'si kullanılarak kullanıcı bilgilerini ve post verilerini birleştiren bir uygulama oluşturulmuştur. Proje aşağıdaki adımları içermektedir:

---

## Gereksinimler

- Projenin kök dizininde `src` isminde bir dizin oluşturulmalıdır.
- `src` dizini altında:
  - `app.js` adında bir dosya oluşturulmalıdır.
  - `lib` adında bir alt dizin açılmalı ve bu dizin içerisinde `service.js` dosyası oluşturulmalıdır.

---

## `service.js`

### Fonksiyon: `getData`

- **Tanım:**
  - `getData`, kullanıcı bilgilerini ve bu kullanıcının post verilerini çeken bir fonksiyondur.

- **Özellikler:**
  - **Asenkron:** `async` olarak tanımlanmıştır.
  - **Parametre:** Tek bir `userId` parametresi alır. Parametre `Number` tipindedir.
  - **API İstekleri:**
    - Kullanıcı verilerini almak için: `https://jsonplaceholder.typicode.com/users/{userId}`
    - Kullanıcıya ait post verilerini almak için: `https://jsonplaceholder.typicode.com/posts?userId={userId}`

- **Dönen Veri Formatı:**
  ```json
  {
    "id": 1,
    "name": "Leanne Graham",
    "username": "Bret",
    "email": "Sincere@april.biz",
    "address": {
      "street": "Kulas Light",
      "suite": "Apt. 556",
      "city": "Gwenborough",
      "zipcode": "92998-3874",
      "geo": {
        "lat": "-37.3159",
        "lng": "81.1496"
      }
    },
    "phone": "1-770-736-8031 x56442",
    "website": "hildegard.org",
    "company": {
      "name": "Romaguera-Crona",
      "catchPhrase": "Multi-layered client-server neural-net",
      "bs": "harness real-time e-markets"
    },
    "posts": [
      {
        "userId": 1,
        "id": 1,
        "title": "sunt aut facere repellat",
        "body": "quia et suscipit suscipit recusandae"
      }
    ]
  }
  ```

---

## `app.js`

- `getData` fonksiyonu `service.js` dosyasından import edilmiştir.
- Fonksiyon bir kullanıcı ID'si ile çağrılır ve dönen veri console'a loglanır.

**Kod Örneği:**
```javascript
import getData from "./lib/service.js";

(async () => {
  const userData = await getData(1);
  console.log(userData);
})();
```

---

## Proje Dizin Yapısı

```
AxiosLesson/
├── src/
│   ├── app.js
│   └── lib/
│       └── service.js
└── package.json
```

---

## Kurulum ve Çalıştırma

1. **Proje Dizini:**
   - Proje dosyalarını bir klasöre yerleştirin. Örneğin: `AxiosLesson`.

2. **Bağımlılıkların Kurulumu:**
   ```bash
   npm install axios
   ```

3. **Projenin Çalıştırılması:**
   ```bash
   node src/app.js
   ```

4. **Sonuç:**
   Kullanıcı bilgileri ve ilk post console'da görüntülenecektir.

---

## Notlar

- JSONPlaceholder API, sahte veriler sağlamak için kullanılabilecek bir test API'sidir.
- `axios` kütüphanesi, API istekleri yapmak için kullanılmıştır.
---

## Lisans

Bu proje MIT Lisansı altında lisanslanmıştır.

