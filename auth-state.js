/*
@Leilamoumou
@AUTH-STATE 
ENTAILS THE FOLLOWING: 
    -Logged in vs. logged out state
    - Firestore fetching for users role if logged in via nav bar
        -else, if logged out, nav is kept as 'Login'

*/
//fix attempt to minimize module bug issues for login.
import { getApps, initializeApp } from 'https://www.gstatic.com/firebasejs/11.0.0/firebase-app.js';
import { getAuth, onAuthStateChanged, signOut } from 'https://www.gstatic.com/firebasejs/11.0.0/firebase-auth.js';
import { getFirestore, doc, getDoc } from 'https://www.gstatic.com/firebasejs/11.0.0/firebase-firestore.js';

const firebaseConfig = {
  apiKey:    "AIzaSyCEeLF_HRy9s4UC_Har6OnzUjJj3Ig4cEw",
  authDomain:"flowfix-65fd1.firebaseapp.com",
  projectId: "flowfix-65fd1",
  appId:     "1:878384279716:web:041715c6ae2aa120b23631"
};

const app  = getApps().length ? getApps()[0] : initializeApp(firebaseConfig);
const auth = getAuth(app);
const db   = getFirestore(app);

onAuthStateChanged(auth, async (user) => {
  const loginLink = document.querySelector('a[href*="login.html"]');
  if (!loginLink) return;
//role check update , include profile and dashboard
  if (user) {
    const snap = await getDoc(doc(db, "users", user.uid));
    const role = snap.exists() ? snap.data().role : "customer";
//user role to determine dashboardrouting
    loginLink.textContent = "Dashboard";
    loginLink.href = role === "plumber"
      ? "/flowfix-capstone/Plumber-Dashboard/plumber-dashboard.html"
      : "/flowfix-capstone/Customer-Dashboard/customer-dashboard.html";

//profile link included
  if (!document.getElementById("profile-link")) {
      const profileLink = document.createElement("a");
      profileLink.textContent = "Profile";
      profileLink.id = "profile-link";
      profileLink.href = "/flowfix-capstone/Profile/profile.html";
      profileLink.className = "btn";
      loginLink.parentNode.insertBefore(profileLink, loginLink.nextSibling);
    }

    //LOGOUT button
   if (!document.getElementById("logout-btn")) {
      const logoutBtn = document.createElement("button");
      logoutBtn.textContent = "Logout";
      logoutBtn.id = "logout-btn";
      logoutBtn.className = "btn";
      logoutBtn.addEventListener("click", async () => {
        await signOut(auth);
        window.location.href = "/flowfix-capstone/Login/login.html";
      });
      loginLink.parentNode.insertBefore(logoutBtn, loginLink.nextSibling);
    }

  }
  else {
    loginLink.textContent = "Login";
    loginLink.href = "/flowfix-capstone/Login/login.html";
    document.getElementById("profile-link")?.remove();
    document.getElementById("logout-btn")?.remove();
  }
});