export const klementInfo = {
  name: "Joachim Klement",
  firm: "Panmure Liberum",
  title: "Jefe de Estrategia y Economía",
  record: ["Alemania 2014", "Francia 2018", "Argentina 2022"],
  methodology: [
    { label: "Ranking FIFA", icon: "📊" },
    { label: "PIB per cápita", icon: "💰" },
    { label: "Temperatura media (~14°C ideal)", icon: "🌡️" },
    { label: "Tamaño de población", icon: "👥" },
  ],
  quote:
    "Empezó como un ejercicio para mostrar la arrogancia de los economistas... y se convirtió en algo que tiene muchos más lectores que cualquier otra cosa que publico.",
};

// Flag emoji helpers
export const FLAGS = {
  "Países Bajos": "🇳🇱",
  Portugal: "🇵🇹",
  España: "🇪🇸",
  Francia: "🇫🇷",
  Argentina: "🇦🇷",
  Brasil: "🇧🇷",
  Inglaterra: "🏴󠁧󠁢󠁥󠁮󠁧󠁿",
  Alemania: "🇩🇪",
  Japón: "🇯🇵",
  Marruecos: "🇲🇦",
  Bélgica: "🇧🇪",
  México: "🇲🇽",
  "Corea del Sur": "🇰🇷",
  Escocia: "🏴󠁧󠁢󠁳󠁣󠁴󠁿",
  Canadá: "🇨🇦",
  Uruguay: "🇺🇾",
  "EE.UU.": "🇺🇸",
  Camerún: "🇨🇲",
  Australia: "🇦🇺",
  Croacia: "🇭🇷",
  Ecuador: "🇪🇨",
  "Arabia S.": "🇸🇦",
  Austria: "🇦🇹",
  Argelia: "🇩🇿",
  Chile: "🇨🇱",
  Perú: "🇵🇪",
  Senegal: "🇸🇳",
  Turquía: "🇹🇷",
  Colombia: "🇨🇴",
  Serbia: "🇷🇸",
  "Costa Rica": "🇨🇷",
  Irán: "🇮🇷",
};

export const FLAG_URL = (code) =>
  `https://flagcdn.com/48x36/${code}.png`;

export const COUNTRY_CODE = {
  "Países Bajos": "nl",
  Portugal: "pt",
  España: "es",
  Francia: "fr",
  Argentina: "ar",
  Brasil: "br",
  Inglaterra: "gb-eng",
  Alemania: "de",
  Japón: "jp",
  Marruecos: "ma",
  Bélgica: "be",
  México: "mx",
  "Corea del Sur": "kr",
  Escocia: "gb-sct",
  Canadá: "ca",
  Uruguay: "uy",
  "EE.UU.": "us",
  Camerún: "cm",
  Australia: "au",
  Croacia: "hr",
  Ecuador: "ec",
  "Arabia S.": "sa",
  Austria: "at",
  Argelia: "dz",
  Chile: "cl",
  Perú: "pe",
  Senegal: "sn",
  Turquía: "tr",
  Colombia: "co",
  Serbia: "rs",
  "Costa Rica": "cr",
  Irán: "ir",
};

export const grupos = [
  { name: "A", leader: "Brasil", teams: ["Brasil", "EE.UU.", "Uruguay", "Camerún"] },
  { name: "B", leader: "Francia", teams: ["Francia", "Bélgica", "Marruecos", "Australia"] },
  { name: "C", leader: "España", teams: ["España", "México", "Corea del Sur", "Costa Rica"] },
  { name: "D", leader: "Argentina", teams: ["Argentina", "Austria", "Argelia", "Chile"] },
  { name: "E", leader: "Portugal", teams: ["Portugal", "Croacia", "Ecuador", "Arabia S."] },
  { name: "F", leader: "Inglaterra", teams: ["Inglaterra", "Escocia", "Japón", "Irán"] },
  { name: "G", leader: "Países Bajos", teams: ["Países Bajos", "Canadá", "Senegal", "Perú"] },
  { name: "H", leader: "Alemania", teams: ["Alemania", "Turquía", "Colombia", "Serbia"] },
];

export const ronda32 = [
  { home: "Bélgica", away: "México", winner: "Bélgica", note: "México cae pronto en ronda de 32" },
  { home: "Escocia", away: "Corea del Sur", winner: "Corea del Sur", note: "Escocia eliminada por Asia" },
  { home: "Colombia", away: "Croacia", winner: "Croacia", note: "Colombia queda en ronda de 32" },
];

export const octavos = [
  { home: "Brasil", away: "Japón", winner: "Japón", note: "La gran sorpresa del torneo", tag: "BOMBA" },
  { home: "Países Bajos", away: "Marruecos", winner: "Países Bajos", note: "Holanda avanza" },
  { home: "Portugal", away: "Canadá", winner: "Portugal", note: "Portugal sin problemas" },
  { home: "Inglaterra", away: "Alemania", winner: "Inglaterra", note: "Clásico europeo — pasan los ingleses" },
  { home: "Argentina", away: "Corea del Sur", winner: "Argentina", note: "Argentina avanza a cuartos" },
  { home: "España", away: "Japón", winner: "España", note: "España domina" },
];

export const cuartos = [
  {
    home: "Argentina",
    away: "Portugal",
    winner: "Portugal",
    note: "Messi vs Cristiano — el Último Baile",
    tag: "HISTÓRICO",
  },
  { home: "Países Bajos", away: "Francia", winner: "Países Bajos", note: "Holanda elimina al favorito" },
  { home: "Portugal", away: "España", winner: "Portugal", note: "Portugal a semis" },
  { home: "Países Bajos", away: "Inglaterra", winner: "Países Bajos", note: "Holanda pasa a semis" },
];

export const semis = [
  {
    home: "Portugal",
    away: "Inglaterra",
    winner: "Portugal",
    note: "Revenge 2006 — 20 años después, Portugal vuelve a eliminar a Inglaterra",
  },
  { home: "Países Bajos", away: "España", winner: "Países Bajos", note: "La Naranja aplasta a La Roja" },
];

export const final = {
  home: "Países Bajos",
  away: "Portugal",
  winner: "Países Bajos",
  venue: "MetLife Stadium, Nueva Jersey",
  note: "Primer título mundial en la historia neerlandesa — rompen la maldición de 1974, 1978 y 2010",
};
