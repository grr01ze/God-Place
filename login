<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Godplace - Connexion</title>
  <style>
    * {
      margin: 0; padding: 0; box-sizing: border-box;
    }
    body {
      background: white;
      color: #000;
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      padding: 20px;
      min-height: 100vh;
      display: flex;
      flex-direction: column;
    }
    h2, h3 {
      color: #d4af37;
      font-weight: bold;
      margin-bottom: 15px;
    }
    h2 {
      font-size: 2rem;
      text-align: center;
      margin-bottom: 30px;
    }
    h3 {
      font-size: 1.2rem;
      margin-top: 25px;
    }
    input, button {
      font-size: 1rem;
      padding: 10px 15px;
      border-radius: 6px;
      border: 2px solid #d4af37;
      background: white;
      color: #d4af37;
      cursor: pointer;
      font-weight: 600;
      user-select: none;
      margin: 8px 8px 8px 0;
      min-width: 140px;
    }
    input[type=email], input[type=password], input[type=text] {
      width: 100%;
      border: 2px solid #ccc;
      color: #000;
    }
    button:hover {
      background: #d4af37;
      color: white;
    }
    button:disabled {
      opacity: 0.5;
      cursor: default;
    }
    #authContainer {
      max-width: 800px;
      margin: 0 auto;
      background: #fff;
      padding: 25px;
      border-radius: 8px;
      box-shadow: 0 0 10px rgba(0,0,0,0.2);
    }
    @media(max-width: 600px) {
      input, button {
        width: 100%;
        margin: 8px 0;
      }
    }
  </style>
  <script src="https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js"></script>
  <script src="https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js"></script>
</head>
<body>
<div id="authContainer">
  <h2>Connexion</h2>
  <input type="email" id="email" placeholder="Email" required><br>
  <input type="password" id="password" placeholder="Mot de passe" required><br>
  <input type="text" id="pseudoDiscord" placeholder="Pseudo Discord (ex: User1234)" required><br>
  <button onclick="register()">Créer un compte</button>
  <button onclick="login()">Se connecter</button>
  <p id="authError" style="color:red;"></p>
</div>

<script>
const firebaseConfig = {
  apiKey: "AIzaSyDuY1T6HaxfDbEcZZYOrpDcD5LPNUTmeUc",
  authDomain: "godplace-dea67.firebaseapp.com",
  projectId: "godplace-dea67",
  storageBucket: "godplace-dea67.appspot.com",
  messagingSenderId: "774010087004",
  appId: "1:774010087004:web:31346dfbc1b2adfed2e899"
};
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

function isValidDiscordTag(tag) {
  return /^[\w\s]{2,32}$/.test(tag);
}

function showError(msg) {
  document.getElementById("authError").textContent = msg;
}

async function register() {
  const email = emailInput.value;
  const password = passwordInput.value;
  const pseudo = pseudoInput.value;
  if (!isValidDiscordTag(pseudo)) return showError("Pseudo Discord invalide");
  try {
    const { user } = await auth.createUserWithEmailAndPassword(email, password);
    await user.updateProfile({ displayName: pseudo });
    window.location.href = "panel.html";
  } catch (err) {
    showError(err.message);
  }
}

async function login() {
  const email = emailInput.value;
  const password = passwordInput.value;
  const pseudo = pseudoInput.value;
  if (!isValidDiscordTag(pseudo)) return showError("Pseudo Discord invalide");
  try {
    const { user } = await auth.signInWithEmailAndPassword(email, password);
    if (user.displayName !== pseudo) await user.updateProfile({ displayName: pseudo });
    window.location.href = "panel.html";
  } catch (err) {
    showError(err.message);
  }
}

const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const pseudoInput = document.getElementById("pseudoDiscord");
</script>
</body>
</html>
