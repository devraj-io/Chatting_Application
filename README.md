# 💬 Chatting Application

A **real-time chat web app** built using **React**, **Node.js**, **Firebase**, and **Socket.IO**. This application features secure user authentication, private and group messaging, persistent message history, and real-time updates — all wrapped in a **responsive, modern UI** optimized for performance and security.

---

## 🚀 Features

* 🔐 **User Authentication**: Sign up, log in, and reset password securely via Firebase Authentication.
* 📡 **Real-Time Messaging**: Instant private and group messaging powered by Socket.IO.
* 💾 **Persistent Storage**: Firebase Firestore stores chat history with real-time sync.
* 📱 **Responsive UI**: Mobile-friendly layout styled with **Tailwind CSS** and **CSS3**.
* ⚡ **Performance Optimizations**:

  * Lazy-loaded messages for faster initial loads.
  * Memoized components to reduce unnecessary renders.
* 🔒 **Security Measures**:

  * Input sanitization to prevent XSS attacks.
  * Firebase security rules for access control.

---

## 🛠 Tech Stack

| Layer               | Technologies                                                              |
| ------------------- | ------------------------------------------------------------------------- |
| **Frontend**        | React, JavaScript, HTML5, CSS3, Tailwind CSS                              |
| **Backend**         | Node.js, Express, Socket.IO                                               |
| **Database & Auth** | Firebase Firestore, Firebase Authentication                               |
| **Deployment**      | Vercel (Frontend), Heroku (Backend - optional), ngrok (for local testing) |
| **Tools**           | Git, npm, Firebase SDK, WebSocket                                         |

---

## 📁 Project Structure

```
Chatting_Application/
├── client/          # React frontend
├── server/          # Node.js/Express backend
├── README.md        # Project documentation
└── package.json     # Root dependencies
```

---

## ⚙️ Setup Instructions

### ✅ Prerequisites

* Node.js v16 or above
* Firebase project with Firestore and Authentication enabled
* Git installed
* Vercel CLI (for deployment)

---

### 🔧 Backend Setup

```bash
# Clone the repository
git clone https://github.com/devraj-io/Chatting_Application.git
cd Chatting_Application/server

# Install dependencies
npm install
```

**Create `.env` file in `server/`:**

```
FIREBASE_API_KEY=your_firebase_api_key
FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
FIREBASE_PROJECT_ID=your_firebase_project_id
FIREBASE_STORAGE_BUCKET=your_firebase_storage_bucket
FIREBASE_MESSAGING_SENDER_ID=your_firebase_messaging_sender_id
FIREBASE_APP_ID=your_firebase_app_id
PORT=5000
```

**Start backend server:**

```bash
# Development mode
npm run dev

# Production mode
npm start
```

---

### 🎨 Frontend Setup

```bash
cd ../client

# Install dependencies
npm install
```

**Configure Firebase in `src/firebase.js`:**

```js
const firebaseConfig = {
  apiKey: "your_firebase_api_key",
  authDomain: "your_firebase_auth_domain",
  projectId: "your_firebase_project_id",
  storageBucket: "your_firebase_storage_bucket",
  messagingSenderId: "your_firebase_messaging_sender_id",
  appId: "your_firebase_app_id"
};
```

**Configure Backend API URL in `src/api.js`:**

```js
export const API_URL = 'http://localhost:5000/api';
```

**Run the frontend:**

```bash
npm start
```

Open your browser: [http://localhost:3000](http://localhost:3000)

---

## ☁️ Deployment

### Frontend (Vercel)

1. Push `client/` to GitHub.
2. Connect the repo to [Vercel](https://vercel.com/).
3. Set:

   * **Build Command**: `npm run build`
   * **Output Directory**: `build`
   * Add Firebase environment variables in **Vercel dashboard**.
4. Deploy.

### Backend (Development via ngrok)

```bash
ngrok http 5000
```

Update `src/api.js` in the frontend:

```js
export const API_URL = 'https://your-ngrok-domain.ngrok-free.app/api';
```

### Backend (Production via Heroku)

1. Push `server/` to GitHub.
2. Deploy to [Heroku](https://heroku.com/).
3. Set the Firebase env variables in Heroku settings.
4. Done.

---

## ⚙️ Performance Optimizations

* **Lazy Loading**: Incremental loading of chat messages.
* **Memoization**: Prevents redundant renders in React components.
* **Efficient Sockets**: Debounced sends minimize backend traffic.

---

## 🔐 Security Highlights

* ✅ Firebase Auth with secure JWT sessions.
* 🔐 Firestore rules enforce user-specific access.
* 🧼 Input sanitization defends against XSS.
* 🔒 Encrypted WebSockets secure real-time messaging.

---

## 🧪 Troubleshooting

### ❓ Messages not updating?

* Confirm `Socket.IO` client-server connection.
* Check API URL in `api.js`.
* Inspect WebSocket status in DevTools → Network → WS tab.

### ❓ Firebase errors?

* Ensure correct Firebase config in `firebase.js`.
* Check Firestore permissions and rules.

### ❓ CORS issues?

* Validate CORS setup in `server/index.js`:

```js
app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true
}));
```

### ❓ Deployment issues?

* Confirm environment variables are correctly set in Vercel and Heroku.
* Double-check API endpoint URLs.

---

## 🔮 Future Enhancements

* 📎 **File Sharing**: Upload images/documents via Firebase Storage.
* 🔔 **Push Notifications**: Powered by Firebase Cloud Messaging (FCM).
* 🧩 **Browser Extension**: Chrome extension for quick notifications.

---

## 👨‍💻 Developer Info

* **Name**: Dev Raj Narayan Sah
* **GitHub**: [@devraj-io](https://github.com/devraj-io)

---

## 📌 Acknowledgments

This project was built for **educational purposes** to showcase modern web development using **React**, **Firebase**, and **real-time communication** via **Socket.IO**.
