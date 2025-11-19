# 📰 **Dragon News – Journalism Without Fear or Favour**

## 📜 **Overview**

Dragon News is a modern, responsive web application designed to simulate a dynamic news portal. It provides users with categorized news browsing, social login options, and secure content access management through Firebase. This project emphasizes clean UI, **seamless navigation** using React Router, and **robust user authentication**.

---

## 🚀 **Live Demo & Source Code**

| Type | Link |
| :--- | :--- |
| **Live URL** | (http://localhost:5174/category/0) |
| **GitHub Repository** | [(https://github.com/Hlamong55/dragon-news-with-router) |

---

## 🛠 **Tech Stack & Dependencies**

### **Core Technologies**
| Category | Technology |
| :--- | :--- |
| **Frontend** | React (Vite) |
| **Routing** | React Router DOM |
| **Authentication** | **Firebase** (with Social Login) |
| **Styling** | CSS / Bootstrap / Tailwind |

### **Frontend Dependencies (Key Packages)**
* `react`
* `react-dom`
* `react-router-dom`
* `firebase`
* `@heroicons/react` (Optional)
* `localforage` (Optional)
* `sort-by` (Optional)

---

## ✨ **Key Features**

### 🔑 **User Authentication & Security**
* **Firebase Integration:** Secure User Login/Registration.
* **Social Login:** Easy integration with providers like **Google and GitHub**.
* **Protected Routes:** Utilizing React Router to safeguard specific content (e.g., Detailed News Articles) from unauthenticated access.
* User profile display upon successful login.

### 🌐 **Content & Navigation**
* **Dynamic News Categories:** Dedicated sidebar allows navigation between categories (e.g., Business, Technology, Sports).
* **Total News Count:** Displayed for transparency and content overview.
* **Seamless Routing:** Efficient navigation between Home, Category, and Detailed News pages.
* **Fully Responsive** UI design.

### ➕ **Additional Elements**
* Placeholder sections for **LATEST** headlines and **Q-Zone**.
* **Find Us On** section for social media links.

---

## ⚙️ **Installation & Setup**

### ⚠️ **Prerequisites**
* Node.js installed.
* A **Firebase Project** configured with Authentication enabled (Google, GitHub providers).
* Your Firebase API Key and config details.

### **Steps**

```bash
# 1. Clone the project
git clone [Your GitHub Repository URL]
cd dragon-news-project

# 2. Install dependencies
npm install

# 3. Setup Environment Variables (Critical for Firebase)
# Create a .env file and add your Firebase configuration:
# VITE_APP_FIREBASE_API_KEY=your_key
# VITE_APP_FIREBASE_AUTH_DOMAIN=your_domain
# ... other Firebase config variables ...

# 4. Run development server
npm run dev

# 5. Build for production
npm run build
