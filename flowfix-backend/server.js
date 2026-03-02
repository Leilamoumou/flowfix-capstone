const express = require('express');
const cors = require('cors');
const admin = require('firebase-admin');
const dotenv = require('dotenv');

dotenv.config();


//firebase admin initialization
const serviceAccount = require('./serviceAccountKey.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const db = admin.firestore();

const app = express();
app.use(cors());
app.use(express.json());

//backend health check
app.get('/', (req, res) => {
  res.json({ message: 'FlowFix backend is running.' });
});

/* - Auth Intermediary/Middleware - */
//Firebase token verifcation, ensure the token is sent from frontend.
//to add to : necessary routes to protect, unsure where for now beyond status check

const verifyToken = async (req, res, next) => {
  const authH = req.headers.authorization;
  if (!authH || !authH.startsWith('Bearer ')) {

    return res.status(401).json({ error: 'UNAUTHORIZED - no token provided.' });

  }
  const token = authH.split('Bearer ')[1];
  try {
    const decoded = await admin.auth().verifyIdToken(token);
    req.user = decoded; // user info made available in route handlers**
    next();
  } catch (error) {
    return res.status(401).json({ error: 'Unauthorized - invalid token.' });
  }
};
/* - GET  implementation to acquire logged in user's credentials */
app.get('/profile', verifyToken, async (req, res) => {
  try {
    const userDoc = await db.collection('users').doc(req.user.uid).get();
    if (!userDoc.exists) {
      return res.status(404).json({ error: 'User profile not found.' });
    }
    res.json(userDoc.data());
  } catch (error) {
    res.status(500).json({ error: 'Server error.' });
  }
});

// Server start
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`FlowFix backend: running on port ${PORT}`);
});
