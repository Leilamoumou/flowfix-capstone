/*
@Leilamoumou
@AUTH-STATE 
ENTAILS THE FOLLOWING: 
    -Logged in vs. logged out state
    - Firestore fetching for users role if logged in via nav bar
        -else, if logged out, nav is kept as 'Login'

*/

import { initializeApp } from 'https://www.gstatic.com/firebasejs/11.0.0/firebase-app.js';
import { getAuth, onAuthStateChanged } from 'https://www.gstatic.com/firebasejs/11.0.0/firebase-auth.js';
import { getFirestore, doc, getDoc } from 'https://www.gstatic.com/firebasejs/11.0.0/firebase-firestore.js';

const firebaseConfig = {
  apiKey:     "%%API_KEY%%",
  authDomain: "%%AUTH_DOMAIN%%",
  projectId:  "flowfix-65fd1",
  appId:      "1:878384279716:web:041715c6ae2aa120b23631"
};

const app  = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db   = getFirestore(app);

onAuthStateChanged(auth, async (user) => {
  const loginLink = document.querySelector('a[href*="login.html"]');
  if (!loginLink) return;

  if (user) {
    const snap = await getDoc(doc(db, "users", user.uid));
    const role = snap.exists() ? snap.data().role : "customer";
    loginLink.textContent = "Profile";
    loginLink.href = role === "plumber"
      ? "../Dashboards/plumber-dashboard.html"
      : "../Dashboards/customer-dashboard.html";
  } else {
    loginLink.textContent = "Login";
    loginLink.href = "login.html";
  }
});