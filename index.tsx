"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Send, Eye } from "lucide-react"

// Structure complète des catégories avec tous les liens
const categories = {
  mondeEnDeclin: {
    title: "Le Monde en Déclin",
    weeks: {
      "Semaine 1":
        "https://media.discordapp.net/attachments/1365412596655853699/1365725262414876693/FICHES_SPECIFIQUES_PETIT_FORMAT_-_4.png",
      "Semaine 2":
        "https://media.discordapp.net/attachments/1365412596655853699/1365725295369388042/FICHES_SPECIFIQUES_PETIT_FORMAT_-_5.png",
      "Semaine 3":
        "https://media.discordapp.net/attachments/1365412596655853699/1365725348314222754/FICHES_SPECIFIQUES_PETIT_FORMAT_-_6.png",
    },
  },
  gagneCoeurChrist: {
    title: "Gagne le cœur du Christ",
    weeks: {
      "Semaine 1":
        "https://media.discordapp.net/attachments/1365412596655853699/1365725653625864284/FICHES_SPECIFIQUES_PETIT_FORMAT_-_13.png",
      "Semaine 2":
        "https://media.discordapp.net/attachments/1365412596655853699/1365725697045434488/FICHES_SPECIFIQUES_PETIT_FORMAT_-_14.png",
      "Semaine 3":
        "https://media.discordapp.net/attachments/1365412596655853699/1365725725654782062/FICHES_SPECIFIQUES_PETIT_FORMAT_-_15.png",
    },
  },
  loueAvecTonArt: {
    title: "Loue avec ton art",
    weeks: {
      "Semaine 1":
        "https://media.discordapp.net/attachments/1365412596655853699/1365725770085040218/FICHES_SPECIFIQUES_PETIT_FORMAT_-_16.png",
      "Semaine 2":
        "https://media.discordapp.net/attachments/1365412596655853699/1365725825047068722/FICHES_SPECIFIQUES_PETIT_FORMAT_-_17.png",
      "Semaine 3":
        "https://media.discordapp.net/attachments/1365412596655853699/1365725866457567416/FICHES_SPECIFIQUES_PETIT_FORMAT_-_18.png",
    },
  },
  chaineSacree: {
    title: "Chaîne sacrée",
    weeks: {
      "Semaine 1":
        "https://media.discordapp.net/attachments/1365412596655853699/1365725911411851344/FICHES_SPECIFIQUES_PETIT_FORMAT_-_19.png",
      "Semaine 2":
        "https://media.discordapp.net/attachments/1365412596655853699/1365725981528166450/FICHES_SPECIFIQUES_PETIT_FORMAT_-_20.png",
      "Semaine 3":
        "https://media.discordapp.net/attachments/1365412596655853699/1365726016988465158/FICHES_SPECIFIQUES_PETIT_FORMAT_-_21.png",
    },
  },
  savoirChretien: {
    title: "Savoir chrétien",
    weeks: {
      "Semaine 1":
        "https://media.discordapp.net/attachments/1365412596655853699/1365726058002784767/FICHES_SPECIFIQUES_PETIT_FORMAT_-_22.png",
      "Semaine 2":
        "https://media.discordapp.net/attachments/1365412596655853699/1365726094986149378/FICHES_SPECIFIQUES_PETIT_FORMAT_-_23.png",
      "Semaine 3":
        "https://media.discordapp.net/attachments/1365412596655853699/1365726124882736641/FICHES_SPECIFIQUES_PETIT_FORMAT_-_24.png",
    },
  },
  jePrefere: {
    title: "Je préfère",
    weeks: {
      "Semaine 1":
        "https://media.discordapp.net/attachments/1365412596655853699/1365726155632450067/FICHES_SPECIFIQUES_PETIT_FORMAT_-_25.png",
      "Semaine 2":
        "https://media.discordapp.net/attachments/1365412596655853699/1365726183903265536/FICHES_SPECIFIQUES_PETIT_FORMAT_-_26.png",
      "Semaine 3":
        "https://media.discordapp.net/attachments/1365412596655853699/1365726215589114901/FICHES_SPECIFIQUES_PETIT_FORMAT_-_27.png",
    },
  },
  jeDebats: {
    title: "Je débats",
    weeks: {
      "Semaine 1":
        "https://media.discordapp.net/attachments/1365412596655853699/1365726250338652418/FICHES_SPECIFIQUES_PETIT_FORMAT_-_28.png",
      "Semaine 2":
        "https://media.discordapp.net/attachments/1365412596655853699/1365726283172867072/FICHES_SPECIFIQUES_PETIT_FORMAT_-_29.png",
      "Semaine 3":
        "https://media.discordapp.net/attachments/1365412596655853699/1365726313883936275/FICHES_SPECIFIQUES_PETIT_FORMAT_-_30.png",
    },
  },
  composeTonChant: {
    title: "Compose ton chant",
    weeks: {
      "Semaine 1":
        "https://media.discordapp.net/attachments/1365412596655853699/1365726345386018823/FICHES_SPECIFIQUES_PETIT_FORMAT_-_31.png",
      "Semaine 2":
        "https://media.discordapp.net/attachments/1365412596655853699/1365726374519505411/FICHES_SPECIFIQUES_PETIT_FORMAT_-_32.png",
      "Semaine 3":
        "https://media.discordapp.net/attachments/1365412596655853699/1365726412025523506/FICHES_SPECIFIQUES_PETIT_FORMAT_-_33.png",
    },
  },
  priereEnChoeur: {
    title: "Prière en chœur",
    weeks: {
      "Semaine 1":
        "https://media.discordapp.net/attachments/1365412596655853699/1365726445561549856/FICHES_SPECIFIQUES_PETIT_FORMAT_-_34.png",
      "Semaine 2":
        "https://media.discordapp.net/attachments/1365412596655853699/1365726477503522300/FICHES_SPECIFIQUES_PETIT_FORMAT_-_35.png",
      "Semaine 3":
        "https://media.discordapp.net/attachments/1365412596655853699/1365726504952314986/FICHES_SPECIFIQUES_PETIT_FORMAT_-_36.png",
    },
  },
  quiSuisJeBiblique: {
    title: "Qui suis-je biblique",
    weeks: {
      "Semaine 1":
        "https://media.discordapp.net/attachments/1365412596655853699/1365726536286921778/FICHES_SPECIFIQUES_PETIT_FORMAT_-_37.png",
      "Semaine 2":
        "https://media.discordapp.net/attachments/1365412596655853699/1365726566499025000/FICHES_SPECIFIQUES_PETIT_FORMAT_-_38.png",
      "Semaine 3":
        "https://media.discordapp.net/attachments/1365412596655853699/1365726598318859014/FICHES_SPECIFIQUES_PETIT_FORMAT_-_39.png",
    },
  },
  comprendreApocalypse: {
    title: "Comprendre l'apocalypse",
    weeks: {
      "Semaine 1":
        "https://media.discordapp.net/attachments/1365412596655853699/1365726630002579476/FICHES_SPECIFIQUES_PETIT_FORMAT_-_40.png",
      "Semaine 2":
        "https://media.discordapp.net/attachments/1365412596655853699/1365726663403672848/FICHES_SPECIFIQUES_PETIT_FORMAT_-_41.png",
      "Semaine 3":
        "https://media.discordapp.net/attachments/1365412596655853699/1365726700276018184/FICHES_SPECIFIQUES_PETIT_FORMAT_-_42.png",
    },
  },
  bibleIllustree: {
    title: "LA Bible illustrée",
    weeks: {
      "Semaine 1":
        "https://media.discordapp.net/attachments/1365412596655853699/1365726733322940924/FICHES_SPECIFIQUES_PETIT_FORMAT_-_43.png",
      "Semaine 2":
        "https://media.discordapp.net/attachments/1365412596655853699/1365726763165978650/FICHES_SPECIFIQUES_PETIT_FORMAT_-_44.png",
      "Semaine 3":
        "https://media.discordapp.net/attachments/1365412596655853699/1365726794945651970/FICHES_SPECIFIQUES_PETIT_FORMAT_-_45.png",
    },
  },
  cinemaChretien: {
    title: "Cinéma Chrétien",
    weeks: {
      "Semaine 1":
        "https://media.discordapp.net/attachments/1365412596655853699/1365726824389902396/FICHES_SPECIFIQUES_PETIT_FORMAT_-_46.png",
      "Semaine 2":
        "https://media.discordapp.net/attachments/1365412596655853699/1365726860361834760/FICHES_SPECIFIQUES_PETIT_FORMAT_-_47.png",
      "Semaine 3":
        "https://media.discordapp.net/attachments/1365412596655853699/1365726891917857532/FICHES_SPECIFIQUES_PETIT_FORMAT_-_48.png",
    },
  },
}

// Catégories de jeux avec structure spéciale
const gameCategories = {
  grilleDeLumiere: {
    title: "Grille de lumière",
    buttons: {
      "G1 Semaine 1":
        "https://media.discordapp.net/attachments/1365412596655853699/1365726955667652608/FICHES_SPECIFIQUES_PETIT_FORMAT_-_49.png",
      "G1 Semaine 2":
        "https://media.discordapp.net/attachments/1365412596655853699/1365726985450347310/FICHES_SPECIFIQUES_PETIT_FORMAT_-_50.png",
      "G1 Semaine 3":
        "https://media.discordapp.net/attachments/1365412596655853699/1365727015886677760/FICHES_SPECIFIQUES_PETIT_FORMAT_-_51.png",
    },
  },
  eclaireurs: {
    title: "Éclaireurs",
    buttons: {
      "Éclaireurs Semaine 1":
        "https://media.discordapp.net/attachments/1365412596655853699/1365727045944965234/FICHES_SPECIFIQUES_PETIT_FORMAT_-_52.png",
      "Éclaireurs Semaine 2":
        "https://media.discordapp.net/attachments/1365412596655853699/1365727074408728320/FICHES_SPECIFIQUES_PETIT_FORMAT_-_53.png",
      "Éclaireurs Semaine 3":
        "https://media.discordapp.net/attachments/1365412596655853699/1365727103434525440/FICHES_SPECIFIQUES_PETIT_FORMAT_-_54.png",
    },
  },
}

// Salons Discord disponibles
const availableChannels = {
  "1378679774742056974": "Salon Grille de lumière",
  "1378680922928320653": "Salon Éclaireurs",
  "1325922071473295411": "Salon Général",
  "1378679000000000001": "Salon Annonces",
  "1365417738436087909": "Je préfères G1",
  "1365417832774635540": "Je préfères G2",
}

export default function GodplacePanel() {
  const [selectedCategory, setSelectedCategory] = useState<string>("")
  const [selectedWeek, setSelectedWeek] = useState<string>("")
  const [selectedChannel, setSelectedChannel] = useState<string>("")
  const [selectedImage, setSelectedImage] = useState<string>("")
  const [currentView, setCurrentView] = useState<"main" | "games" | "game-detail">("main")
  const [selectedGame, setSelectedGame] = useState<string>("")
  const [logs, setLogs] = useState<string>("Aucune action pour l'instant.")
  const [isLoading, setIsLoading] = useState(false)

  const handleCategorySelect = (categoryKey: string) => {
    if (categoryKey === "jeux") {
      setCurrentView("games")
      setSelectedCategory("")
      setSelectedWeek("")
      setSelectedImage("")
    } else {
      setSelectedCategory(categoryKey)
      setSelectedWeek("")
      setSelectedImage("")
      setCurrentView("main")
    }
  }

  const handleGameSelect = (gameKey: string) => {
    setSelectedGame(gameKey)
    setCurrentView("game-detail")
    setSelectedWeek("")
    setSelectedImage("")
  }

  const handleWeekSelect = (week: string) => {
    setSelectedWeek(week)

    if (currentView === "game-detail" && selectedGame) {
      const imageUrl = gameCategories[selectedGame as keyof typeof gameCategories]?.buttons[week]
      setSelectedImage(imageUrl || "")
    } else if (selectedCategory) {
      const imageUrl = categories[selectedCategory as keyof typeof categories]?.weeks[week]
      setSelectedImage(imageUrl || "")
    }
  }

  const handleSendToDiscord = async () => {
    if (!selectedImage || !selectedChannel) return

    setIsLoading(true)
    setLogs("Envoi en cours...")

    try {
      const payload = {
        channelId: selectedChannel,
        content: selectedImage,
        // Optionnel : ajouter des métadonnées
        metadata: {
          category: selectedCategory || selectedGame,
          week: selectedWeek,
          timestamp: new Date().toISOString(),
        },
      }

      const response = await fetch("https://bot-production-e4ec.up.railway.app/api/send-message", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          // Ajoutez une clé API si nécessaire pour sécuriser
          // 'Authorization': 'Bearer YOUR_API_KEY'
        },
        body: JSON.stringify(payload),
      })

      if (!response.ok) {
        throw new Error(`Erreur serveur: ${response.status} - ${response.statusText}`)
      }

      const result = await response.json()

      const channelName = availableChannels[selectedChannel as keyof typeof availableChannels]
      setLogs(
        `✅ Message envoyé avec succès dans le salon "${channelName}".\nID du message: ${result.messageId || "N/A"}`,
      )
    } catch (error) {
      console.error("Erreur lors de l'envoi:", error)
      setLogs(`❌ Erreur lors de l'envoi : ${error instanceof Error ? error.message : "Erreur inconnue"}`)
    } finally {
      setIsLoading(false)
    }
  }

  const goBack = () => {
    if (currentView === "game-detail") {
      setCurrentView("games")
      setSelectedGame("")
      setSelectedWeek("")
      setSelectedImage("")
    } else if (currentView === "games") {
      setCurrentView("main")
    }
  }

  const canSend = selectedImage && selectedChannel && !isLoading

  return (
    <div className="min-h-screen bg-white text-black p-6">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-4xl font-bold text-[#d4af37] mb-2">Godplace Panel</h1>
          <p className="text-gray-600">Panneau d'administration pour l'envoi de contenus spirituels</p>
        </div>

        {/* Navigation */}
        {currentView !== "main" && (
          <Button
            onClick={goBack}
            variant="outline"
            className="border-[#d4af37] text-[#d4af37] hover:bg-[#d4af37] hover:text-white bg-transparent"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Retour
          </Button>
        )}

        {/* Main Category Selection */}
        {currentView === "main" && (
          <Card>
            <CardHeader>
              <CardTitle className="text-[#d4af37]">1. Choisissez une catégorie</CardTitle>
              <CardDescription>Sélectionnez la catégorie de contenu à envoyer</CardDescription>
            </CardHeader>
            <CardContent>
              <Select onValueChange={handleCategorySelect}>
                <SelectTrigger className="border-[#d4af37] focus:ring-[#d4af37]">
                  <SelectValue placeholder="-- Sélectionnez une catégorie --" />
                </SelectTrigger>
                <SelectContent>
                  {Object.entries(categories).map(([key, category]) => (
                    <SelectItem key={key} value={key}>
                      {category.title}
                    </SelectItem>
                  ))}
                  <SelectItem value="jeux">Jeux</SelectItem>
                </SelectContent>
              </Select>
            </CardContent>
          </Card>
        )}

        {/* Games Selection */}
        {currentView === "games" && (
          <Card>
            <CardHeader>
              <CardTitle className="text-[#d4af37]">Choisissez un jeu</CardTitle>
              <CardDescription>Sélectionnez le type de jeu</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {Object.entries(gameCategories).map(([key, game]) => (
                  <Button
                    key={key}
                    onClick={() => handleGameSelect(key)}
                    variant="outline"
                    className="h-20 border-[#d4af37] text-[#d4af37] hover:bg-[#d4af37] hover:text-white"
                  >
                    {game.title}
                  </Button>
                ))}
              </div>
            </CardContent>
          </Card>
        )}

        {/* Week Selection */}
        {(selectedCategory || currentView === "game-detail") && (
          <Card>
            <CardHeader>
              <CardTitle className="text-[#d4af37]">2. Choisissez une semaine</CardTitle>
              <CardDescription>
                {currentView === "game-detail" && selectedGame
                  ? `Sélectionnez une semaine pour ${gameCategories[selectedGame as keyof typeof gameCategories]?.title}`
                  : selectedCategory
                    ? `Sélectionnez une semaine pour ${categories[selectedCategory as keyof typeof categories]?.title}`
                    : "Sélectionnez une semaine"}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {currentView === "game-detail" && selectedGame
                  ? Object.keys(gameCategories[selectedGame as keyof typeof gameCategories]?.buttons || {}).map(
                      (week) => (
                        <Button
                          key={week}
                          onClick={() => handleWeekSelect(week)}
                          variant={selectedWeek === week ? "default" : "outline"}
                          className={
                            selectedWeek === week
                              ? "bg-[#d4af37] text-white hover:bg-[#b8941f]"
                              : "border-[#d4af37] text-[#d4af37] hover:bg-[#d4af37] hover:text-white"
                          }
                        >
                          {week}
                        </Button>
                      ),
                    )
                  : selectedCategory
                    ? Object.keys(categories[selectedCategory as keyof typeof categories]?.weeks || {}).map((week) => (
                        <Button
                          key={week}
                          onClick={() => handleWeekSelect(week)}
                          variant={selectedWeek === week ? "default" : "outline"}
                          className={
                            selectedWeek === week
                              ? "bg-[#d4af37] text-white hover:bg-[#b8941f]"
                              : "border-[#d4af37] text-[#d4af37] hover:bg-[#d4af37] hover:text-white"
                          }
                        >
                          {week}
                        </Button>
                      ))
                    : null}
              </div>
            </CardContent>
          </Card>
        )}

        {/* Image Preview */}
        {selectedImage && (
          <Card>
            <CardHeader>
              <CardTitle className="text-[#d4af37] flex items-center gap-2">
                <Eye className="w-5 h-5" />
                3. Aperçu
              </CardTitle>
              <CardDescription>Prévisualisation de l'image sélectionnée</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-center">
                <Image
                  src={selectedImage || "/placeholder.svg"}
                  alt="Aperçu de l'image sélectionnée"
                  width={400}
                  height={400}
                  className="max-w-full h-auto border-2 border-[#d4af37] rounded-lg shadow-lg mx-auto"
                />
              </div>
            </CardContent>
          </Card>
        )}

        {/* Discord Channel Selection */}
        {selectedImage && (
          <Card>
            <CardHeader>
              <CardTitle className="text-[#d4af37]">4. Choisissez un salon Discord</CardTitle>
              <CardDescription>Sélectionnez le salon où envoyer le contenu</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Select onValueChange={setSelectedChannel}>
                <SelectTrigger className="border-[#d4af37] focus:ring-[#d4af37]">
                  <SelectValue placeholder="-- Choisissez un salon --" />
                </SelectTrigger>
                <SelectContent>
                  {Object.entries(availableChannels).map(([id, name]) => (
                    <SelectItem key={id} value={id}>
                      {name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Button
                onClick={handleSendToDiscord}
                disabled={!canSend}
                className="w-full bg-[#d4af37] text-white hover:bg-[#b8941f] disabled:opacity-50"
              >
                <Send className="w-4 h-4 mr-2" />
                {isLoading ? "Envoi en cours..." : "Envoyer au bot Discord"}
              </Button>
            </CardContent>
          </Card>
        )}

        {/* Logs */}
        <Card>
          <CardHeader>
            <CardTitle className="text-[#d4af37]">Logs des actions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="bg-[#fffbea] border border-[#d4af37] rounded-lg p-4 font-mono text-sm text-[#6b5e00] whitespace-pre-wrap max-h-40 overflow-y-auto">
              {logs}
            </div>
          </CardContent>
        </Card>

        {/* Status Indicators */}
        <div className="flex flex-wrap gap-2 justify-center">
          <Badge
            variant={selectedCategory || selectedGame ? "default" : "secondary"}
            className={selectedCategory || selectedGame ? "bg-[#d4af37] text-white" : ""}
          >
            Catégorie:{" "}
            {selectedCategory
              ? categories[selectedCategory as keyof typeof categories]?.title
              : selectedGame
                ? gameCategories[selectedGame as keyof typeof gameCategories]?.title
                : "Non sélectionnée"}
          </Badge>
          <Badge
            variant={selectedWeek ? "default" : "secondary"}
            className={selectedWeek ? "bg-[#d4af37] text-white" : ""}
          >
            Semaine: {selectedWeek || "Non sélectionnée"}
          </Badge>
          <Badge
            variant={selectedChannel ? "default" : "secondary"}
            className={selectedChannel ? "bg-[#d4af37] text-white" : ""}
          >
            Salon:{" "}
            {selectedChannel ? availableChannels[selectedChannel as keyof typeof availableChannels] : "Non sélectionné"}
          </Badge>
        </div>
      </div>
    </div>
  )
}
