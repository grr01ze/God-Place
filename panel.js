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
    "Semaine 1": "https://.../4.png",
    "Semaine 2": "https://.../5.png",
    "Semaine 3": "https://.../6.png",
  },
  // Ajoute les autres catégories comme avant...
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
