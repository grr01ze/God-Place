// panel.js

const fixedChannels = {
  "grilleDeLumiere": "1378679774742056974",
  "eclaireurs": "1378680922928320653"
};

const availableChannels = {
  "1378679774742056974": "Salon Grille de lumière",
  "1378680922928320653": "Salon Éclaireurs",
  "1325922071473295411": "Salon Général",
  "1378679000000000001": "Salon Annonces",
  "1365417738436087909": "Je préfères G1",
  "1365417832774635540": "Je préfères G2",
};

const categories = {
  mondeEnDeclin: {
    "Semaine 1": "https://media.discordapp.net/attachments/1365412596655853699/1365725262414876693/FICHES_SPECIFIQUES_PETIT_FORMAT_-_4.png",
    "Semaine 2": "https://media.discordapp.net/attachments/1365412596655853699/1365725295369388042/FICHES_SPECIFIQUES_PETIT_FORMAT_-_5.png",
    "Semaine 3": "https://media.discordapp.net/attachments/1365412596655853699/1365725348314222754/FICHES_SPECIFIQUES_PETIT_FORMAT_-_6.png",
  },
  gagneCoeurChrist: {
    "Semaine 1": "https://media.discordapp.net/attachments/1365412596655853699/1365725653625864284/FICHES_SPECIFIQUES_PETIT_FORMAT_-_13.png",
    "Semaine 2": "https://media.discordapp.net/attachments/1365412596655853699/1365725697045434488/FICHES_SPECIFIQUES_PETIT_FORMAT_-_14.png",
    "Semaine 3": "https://media.discordapp.net/attachments/1365412596655853699/1365725725654782062/FICHES_SPECIFIQUES_PETIT_FORMAT_-_15.png"
  },
  loueAvecTonArt: {
    "Semaine 1": "https://media.discordapp.net/attachments/1365412596655853699/1365725770085040218/FICHES_SPECIFIQUES_PETIT_FORMAT_-_16.png",
    "Semaine 2": "https://media.discordapp.net/attachments/1365412596655853699/1365725825047068722/FICHES_SPECIFIQUES_PETIT_FORMAT_-_17.png",
    "Semaine 3": "https://media.discordapp.net/attachments/1365412596655853699/1365725866457567416/FICHES_SPECIFIQUES_PETIT_FORMAT_-_18.png"
  },
  chaineSacree: {
    "Semaine 1": "https://media.discordapp.net/attachments/1365412596655853699/1365725911411851344/FICHES_SPECIFIQUES_PETIT_FORMAT_-_19.png",
    "Semaine 2": "https://media.discordapp.net/attachments/1365412596655853699/1365725981528166450/FICHES_SPECIFIQUES_PETIT_FORMAT_-_20.png",
    "Semaine 3": "https://media.discordapp.net/attachments/1365412596655853699/1365726016988465158/FICHES_SPECIFIQUES_PETIT_FORMAT_-_21.png"
  },
  savoirChretien: {
    "Semaine 1": "https://media.discordapp.net/attachments/1365412596655853699/1365726058002784767/FICHES_SPECIFIQUES_PETIT_FORMAT_-_22.png",
    "Semaine 2": "https://media.discordapp.net/attachments/1365412596655853699/1365726094986149378/FICHES_SPECIFIQUES_PETIT_FORMAT_-_23.png",
    "Semaine 3": "https://media.discordapp.net/attachments/1365412596655853699/1365726124882736641/FICHES_SPECIFIQUES_PETIT_FORMAT_-_24.png"
  },
  jePrefere: {
    "Semaine 1": "https://media.discordapp.net/attachments/1365412596655853699/1365726155632450067/FICHES_SPECIFIQUES_PETIT_FORMAT_-_25.png",
    "Semaine 2": "https://media.discordapp.net/attachments/1365412596655853699/1365726183903265536/FICHES_SPECIFIQUES_PETIT_FORMAT_-_26.png",
    "Semaine 3": "https://media.discordapp.net/attachments/1365412596655853699/1365726215589114901/FICHES_SPECIFIQUES_PETIT_FORMAT_-_27.png"
  },
  jeDebats: {
    "Semaine 1": "https://media.discordapp.net/attachments/1365412596655853699/1365726250338652418/FICHES_SPECIFIQUES_PETIT_FORMAT_-_28.png",
    "Semaine 2": "https://media.discordapp.net/attachments/1365412596655853699/1365726283172867072/FICHES_SPECIFIQUES_PETIT_FORMAT_-_29.png",
    "Semaine 3": "https://media.discordapp.net/attachments/1365412596655853699/1365726313883936275/FICHES_SPECIFIQUES_PETIT_FORMAT_-_30.png"
  },
  composeTonChant: {
    "Semaine 1": "https://media.discordapp.net/attachments/1365412596655853699/1365726355068146697/FICHES_SPECIFIQUES_PETIT_FORMAT_-_31.png",
    "Semaine 2": "https://media.discordapp.net/attachments/1365412596655853699/1365726389677329920/FICHES_SPECIFIQUES_PETIT_FORMAT_-_32.png",
    "Semaine 3": "https://media.discordapp.net/attachments/1365412596655853699/1365726425460299271/FICHES_SPECIFIQUES_PETIT_FORMAT_-_33.png"
  },
  priereEnChoeur: {
    "Semaine 1": "https://media.discordapp.net/attachments/1365412596655853699/1365726463043447552/FICHES_SPECIFIQUES_PETIT_FORMAT_-_34.png",
    "Semaine 2": "https://media.discordapp.net/attachments/1365412596655853699/1365726496431848037/FICHES_SPECIFIQUES_PETIT_FORMAT_-_35.png",
    "Semaine 3": "https://media.discordapp.net/attachments/1365412596655853699/1365726527528724548/FICHES_SPECIFIQUES_PETIT_FORMAT_-_36.png"
  },
  quiSuisJeBiblique: {
    "Semaine 1": "https://media.discordapp.net/attachments/1365412596655853699/1365726565494284288/FICHES_SPECIFIQUES_PETIT_FORMAT_-_37.png",
    "Semaine 2": "https://media.discordapp.net/attachments/1365412596655853699/1365726594852288000/FICHES_SPECIFIQUES_PETIT_FORMAT_-_38.png",
    "Semaine 3": "https://media.discordapp.net/attachments/1365412596655853699/1365726622425294849/FICHES_SPECIFIQUES_PETIT_FORMAT_-_39.png"
  },
  comprendreApocalypse: {
    "S1": "https://media.discordapp.net/attachments/1365412596655853699/1365727109917708299/FICHES_SPECIFIQUES_PETIT_FORMAT_-_32.png",
    "S2": "https://media.discordapp.net/attachments/1365412596655853699/1365727130838634536/FICHES_SPECIFIQUES_PETIT_FORMAT_-_33.png",
    "S3": "https://media.discordapp.net/attachments/1365412596655853699/1365727158688944251/FICHES_SPECIFIQUES_PETIT_FORMAT_-_34.png"
  },
  bibleIllustree: {
    "S1": "https://media.discordapp.net/attachments/1365412596655853699/1365727440516939948/FICHES_SPECIFIQUES_GRAND_FORMAT_-_1.png",
    "S2": "https://media.discordapp.net/attachments/1365412596655853699/1365727482401001514/FICHES_SPECIFIQUES_GRAND_FORMAT_-_2.png",
    "S3": "https://media.discordapp.net/attachments/1365412596655853699/1365727519868846120/FICHES_SPECIFIQUES_GRAND_FORMAT_-_3.png"
  },
  cinemaChretien: {
    "Liste films/témoignages/podcasts": "https://media.discordapp.net/attachments/1365412596655853699/1365727574273167421/FICHES_SPECIFIQUES_GRAND_FORMAT_-_4.png"
  },
  jeux: {
    "Grille de lumière 1": "https://media.discordapp.net/attachments/1365412596655853699/1381746959072628826/PLATEAUX_CODES_SACRES_-_3.png",
    "Grille de lumière 2": "https://media.discordapp.net/attachments/1365412596655853699/1381747211351883867/PLATEAUX_CODES_SACRES_-_6.png",
    "Grille de lumière 3": "https://media.discordapp.net/attachments/1365412596655853699/1381747610108432527/PLATEAUX_CODES_SACRES.png",
    "Grille de lumière 4": "https://media.discordapp.net/attachments/1365412596655853699/1381747659450355836/PLATEAUX_CODES_SACRES_-_12.png",
    "Grille de lumière 5": "https://media.discordapp.net/attachments/1365412596655853699/1381747879051395174/PLATEAUX_CODES_SACRES.png",
    "Grille de lumière 6": "https://media.discordapp.net/attachments/1365412596655853699/1381748077844627617/PLATEAUX_CODES_SACRES_-_18.png",
    "Grille de lumière 7": "https://media.discordapp.net/attachments/1365412596655853699/1381748456841810021/PLATEAUX_CODES_SACRES.png",
    "Grille de lumière 8": "https://media.discordapp.net/attachments/1365412596655853699/1381748553675964709/PLATEAUX_CODES_SACRES_-_24.png",
    "Grille de lumière 9": "https://media.discordapp.net/attachments/1365412596655853699/1381748623842218034/PLATEAUX_CODES_SACRES_-_28.png",
    "Grille de lumière 10": "https://media.discordapp.net/attachments/1365412596655853699/1381748876700291162/PLATEAUX_CODES_SACRES.png"
  },
  eclaireurs: {
    "Éclaireurs 1": "https://media.discordapp.net/attachments/1365412596655853699/1381747093592342528/PLATEAUX_CODES_SACRES_-_4.png",
    "Éclaireurs 2": "https://media.discordapp.net/attachments/1365412596655853699/1381747251466211559/PLATEAUX_CODES_SACRES_-_7.png",
    "Éclaireurs 3": "https://media.discordapp.net/attachments/1365412596655853699/1381747367199510549/PLATEAUX_CODES_SACRES_-_10.png",
    "Éclaireurs 4": "https://media.discordapp.net/attachments/1365412596655853699/1381747699107234003/PLATEAUX_CODES_SACRES_-_13.png",
    "Éclaireurs 5": "https://media.discordapp.net/attachments/1365412596655853699/1381748030075568199/PLATEAUX_CODES_SACRES_-_16.png",
    "Éclaireurs 6": "https://media.discordapp.net/attachments/1365412596655853699/1381748122304249896/PLATEAUX_CODES_SACRES_-_19.png",
    "Éclaireurs 7": "https://media.discordapp.net/attachments/1365412596655853699/1381748505860767805/PLATEAUX_CODES_SACRES_-_22.png",
    "Éclaireurs 8": "https://media.discordapp.net/attachments/1365412596655853699/1381748588476104835/PLATEAUX_CODES_SACRES_-_25.png",
    "Éclaireurs 9": "https://media.discordapp.net/attachments/1365412596655853699/1381748653026312272/PLATEAUX_CODES_SACRES_-_27.png",
    "Éclaireurs 10": "https://media.discordapp.net/attachments/1365412596655853699/1381749325507465226/PLATEAUX_CODES_SACRES_-_31.png",
    "Éclaireurs 11": "https://media.discordapp.net/attachments/1365412596655853699/1381749407732469922/PLATEAUX_CODES_SACRES_-_36.png",
    "Éclaireurs 12": "https://media.discordapp.net/attachments/1365412596655853699/1381749515937120257/PLATEAUX_CODES_SACRES_-_40.png",
    "Éclaireurs 13": "https://media.discordapp.net/attachments/1365412596655853699/1381749593733071009/PLATEAUX_CODES_SACRES.png",
    "Éclaireurs 14": "https://media.discordapp.net/attachments/1365412596655853699/1381749662737891459/PLATEAUX_CODES_SACRES_-_45.png"
  }
};
const categorySelect = document.getElementById("categorySelect");
const buttonsContainer = document.getElementById("buttonsContainer");
const previewContainer = document.getElementById("previewContainer");
const channelSelect = document.getElementById("channelSelect");
const sendButton = document.getElementById("sendButton");
const backButton = document.getElementById("backButton");
const logs = document.getElementById("logs");

let selectedCategory = null;
let selectedKey = null;
let selectedURL = null;
let selectedChannelId = null;

function showButtons(categoryKey) {
  buttonsContainer.innerHTML = "";
  previewContainer.innerHTML = "<p>Sélectionnez un élément pour voir l'aperçu ici.</p>";
  sendButton.disabled = true;
  backButton.style.display = "none";
  channelSelect.style.display = "none";
  selectedKey = null;
  selectedURL = null;
  selectedChannelId = null;
  channelSelect.innerHTML = "";

  if (!categoryKey || !categories[categoryKey]) return;
  selectedCategory = categoryKey;

  if (categoryKey === "jeux") {
    buttonsContainer.innerHTML = `
      <button class="btnSubGame" data-subgame="grilleDeLumiere">Grille de lumière</button>
      <button class="btnSubGame" data-subgame="eclaireurs">Éclaireurs</button>
    `;
    document.querySelectorAll(".btnSubGame").forEach(btn => {
      btn.addEventListener("click", () => showGameButtons(btn.dataset.subgame));
    });
    return;
  }

  const elements = categories[categoryKey];
  for (const key in elements) {
    const btn = document.createElement("button");
    btn.textContent = key;
    btn.dataset.url = elements[key];
    btn.addEventListener("click", () => {
      previewImage(btn.dataset.url);
      selectedKey = key;
      selectedURL = btn.dataset.url;
      onElementSelected();
    });
    buttonsContainer.appendChild(btn);
  }
}

function showGameButtons(subgameKey) {
  buttonsContainer.innerHTML = "";
  previewContainer.innerHTML = "<p>Sélectionnez un élément pour voir l'aperçu ici.</p>";
  sendButton.disabled = true;
  backButton.style.display = "none";
  selectedKey = null;
  selectedURL = null;
  selectedChannelId = fixedChannels[subgameKey];
  selectedCategory = subgameKey;

  const elements = categories[subgameKey];
  for (const key in elements) {
    const btn = document.createElement("button");
    btn.textContent = key;
    btn.dataset.url = elements[key];
    btn.addEventListener("click", () => {
      previewImage(btn.dataset.url);
      selectedKey = key;
      selectedURL = btn.dataset.url;
      onElementSelected();
    });
    buttonsContainer.appendChild(btn);
  }
}

function previewImage(url) {
  previewContainer.innerHTML = `<img src="${url}" alt="Aperçu">`;
  backButton.style.display = "inline-block";
  sendButton.disabled = false;
  if (selectedCategory === "grilleDeLumiere" || selectedCategory === "eclaireurs") {
    selectedChannelId = fixedChannels[selectedCategory];
    channelSelect.style.display = "none";
  } else {
    populateChannelSelect();
    channelSelect.style.display = "inline-block";
    selectedChannelId = null;
    sendButton.disabled = true;
  }
}

function onElementSelected() {
  if (selectedCategory !== "grilleDeLumiere" && selectedCategory !== "eclaireurs") {
    sendButton.disabled = !selectedChannelId;
  } else {
    sendButton.disabled = false;
  }
}

function populateChannelSelect() {
  channelSelect.innerHTML = `<option value="">-- Choisissez un salon --</option>`;
  for (const [id, name] of Object.entries(availableChannels)) {
    const option = document.createElement("option");
    option.value = id;
    option.textContent = name;
    channelSelect.appendChild(option);
  }
}

channelSelect.addEventListener("change", () => {
  selectedChannelId = channelSelect.value || null;
  sendButton.disabled = !selectedChannelId;
});

backButton.addEventListener("click", () => {
  previewContainer.innerHTML = "<p>Sélectionnez un élément pour voir l'aperçu ici.</p>";
  sendButton.disabled = true;
  backButton.style.display = "none";
  if (selectedCategory === "grilleDeLumiere" || selectedCategory === "eclaireurs") {
    showGameButtons(selectedCategory);
  } else if (selectedCategory) {
    showButtons(selectedCategory);
  }
});

sendButton.addEventListener("click", () => {
  if (!selectedURL || !selectedChannelId) {
    alert("Veuillez sélectionner une image et un salon Discord valide.");
    return;
  }
  sendButton.disabled = true;
  sendButton.textContent = "Envoi en cours...";
  log(`Envoi de l'image \"${selectedKey}\" vers le salon ${selectedChannelId}...`);

  const payload = {
    imageUrl: selectedURL,
    channelId: selectedChannelId,
    description: `${selectedKey} (${selectedCategory})`
  };

  fetch("http://localhost:3000/send", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload)
  })
  .then(res => res.json())
  .then(data => {
    log(`Succès : ${data.message || "Message envoyé !"}`);
    sendButton.textContent = "Envoyer au bot Discord";
    sendButton.disabled = false;
  })
  .catch(err => {
    log(`Erreur : ${err.message}`);
    alert("Erreur lors de l'envoi. Voir logs.");
    sendButton.textContent = "Envoyer au bot Discord";
    sendButton.disabled = false;
  });
});

function log(msg) {
  const now = new Date().toLocaleTimeString();
  if (logs.textContent.includes("Aucune action")) logs.textContent = "";
  logs.textContent += `[${now}] ${msg}\n`;
  logs.scrollTop = logs.scrollHeight;
}

categorySelect.addEventListener("change", () => {
  showButtons(categorySelect.value);
});
