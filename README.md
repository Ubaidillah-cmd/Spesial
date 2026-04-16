# 🎂 Happy Birthday 🎉

A beautiful, interactive, and memorable web experience crafted as a special **birthday gift** 🎁
This project delivers a multi-step interactive journey ending with a stunning **3D Dome Gallery of memories**.

---

## ✨ Features

* 🎉 **Birthday Mode Toggle**
  Turn on the celebration vibes with a premium glassmorphic switch.

* 🎮 **Interactive Mini Game**
  A fun little game… and when you win, a surprise awaits 🎁

* 📊 **Happiness Meter**
  A smooth animated gauge that fills up to 100% happiness 💖

* ⌨️ **Typewriter Message**
  Personalized birthday wishes with elegant typing animation.

* 🌐 **3D Memory Gallery**
  Interactive 3D rotating gallery to showcase your best moments.

* 🎵 **Background Music**
  Autoplay birthday music (`pretty.mp3`) for full vibes 🎶

* 🎨 **Premium UI Design**
  Built with modern aesthetic: glassmorphism, smooth animation, elegant fonts.

---

## 🚀 Getting Started

Follow these steps to run this project locally.

### 📌 Prerequisites

* Node.js (v18 or higher)
* npm / yarn

---

### ⚙️ Installation

1. **Clone repository**

```bash id="a1b2c3"
git clone https://github.com/Ubaidillah-cmd/Spesial.git
cd birthday-surprise
```

2. **Install dependencies**

```bash id="d4e5f6"
npm install
```

3. **Run project**

```bash id="g7h8i9"
npm run dev
```

4. **Open browser**

```
http://localhost:3000
```

---

## 📸 Customization

### 🖼️ Change Photos

* Masukkan foto ke folder `public/`
* Rename: `1.jpeg`, `2.jpeg`, dst
* Edit di:

```
app/page.tsx → userImages
```

---

### 🎵 Change Music

* Replace file:

```
public/Birthday.mp3
```

* Bisa pakai lagu ulang tahun 🎂

---

### 💌 Change Message

Edit di:

```
components/InteractionFlow.tsx
```

Cari:


```ts id="msg2"
const text = "Happy Birthday 🎂🎉";
```

---

### 🎁 Change Text di Gallery

Edit di:

```
components/DomeGallery.tsx
```

Cari:

```ts id="msg3"
labelLeft.innerText = 'My';
labelRight.innerText = 'Everything';
```

## 🌐 Deployment

### 🚀 Deploy ke Vercel

1. Push ke GitHub
2. Import ke Vercel
3. Deploy otomatis ✅

---

### 🛠️ Manual Build

```bash id="build1"
npm run build
npm run start
```

---

## 🧑‍💻 Tech Stack

* ⚡ Next.js 15
* ⚛️ React 19
* 🟦 TypeScript
* 🎨 Tailwind CSS
* 🎬 Framer Motion
* 🔣 Lucide Icons
* ✍️ Google Fonts

---

## 🎂 Notes

Project ini cocok untuk:

* Surprise ulang tahun 🎁
* Hadiah ke pacar / sahabat 💖
* Project portofolio UI modern

---

## 🎉 Author

Made with 🎂 by **Ubaidillah**

---
