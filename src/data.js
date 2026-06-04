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

export const FLAGS = {
  "Países Bajos": "🇳🇱", Portugal: "🇵🇹", España: "🇪🇸", Francia: "🇫🇷",
  Argentina: "🇦🇷", Brasil: "🇧🇷", Inglaterra: "🏴󠁧󠁢󠁥󠁮󠁧󠁿", Alemania: "🇩🇪",
  Japón: "🇯🇵", Marruecos: "🇲🇦", Bélgica: "🇧🇪", México: "🇲🇽",
  "Corea del Sur": "🇰🇷", Escocia: "🏴󠁧󠁢󠁳󠁣󠁴󠁿", Canadá: "🇨🇦", Uruguay: "🇺🇾",
  "EE.UU.": "🇺🇸", Ecuador: "🇪🇨", Austria: "🇦🇹", Argelia: "🇩🇿",
  Sudáfrica: "🇿🇦", Chequia: "🇨🇿", "Bosnia-Herz.": "🇧🇦", Catar: "🇶🇦",
  Suiza: "🇨🇭", Haití: "🇭🇹", Paraguay: "🇵🇾", Australia: "🇦🇺",
  Turquía: "🇹🇷", Curazao: "🇨🇼", "Costa de Marfil": "🇨🇮", Suecia: "🇸🇪",
  Túnez: "🇹🇳", Egipto: "🇪🇬", Irán: "🇮🇷", "Nueva Zelanda": "🇳🇿",
  "Cabo Verde": "🇨🇻", "Arabia S.": "🇸🇦", Senegal: "🇸🇳", Irak: "🇮🇶",
  Noruega: "🇳🇴", Jordania: "🇯🇴", "DR Congo": "🇨🇩", Uzbekistán: "🇺🇿",
  Colombia: "🇨🇴", Croacia: "🇭🇷", Ghana: "🇬🇭", Panamá: "🇵🇦",
};

export const FLAG_URL = (code) => `https://flagcdn.com/48x36/${code}.png`;

export const COUNTRY_CODE = {
  "Países Bajos": "nl", Portugal: "pt", España: "es", Francia: "fr",
  Argentina: "ar", Brasil: "br", Inglaterra: "gb-eng", Alemania: "de",
  Japón: "jp", Marruecos: "ma", Bélgica: "be", México: "mx",
  "Corea del Sur": "kr", Escocia: "gb-sct", Canadá: "ca", Uruguay: "uy",
  "EE.UU.": "us", Ecuador: "ec", Austria: "at", Argelia: "dz",
  Sudáfrica: "za", Chequia: "cz", "Bosnia-Herz.": "ba", Catar: "qa",
  Suiza: "ch", Haití: "ht", Paraguay: "py", Australia: "au",
  Turquía: "tr", Curazao: "cw", "Costa de Marfil": "ci", Suecia: "se",
  Túnez: "tn", Egipto: "eg", Irán: "ir", "Nueva Zelanda": "nz",
  "Cabo Verde": "cv", "Arabia S.": "sa", Senegal: "sn", Irak: "iq",
  Noruega: "no", Jordania: "jo", "DR Congo": "cd", Uzbekistán: "uz",
  Colombia: "co", Croacia: "hr", Ghana: "gh", Panamá: "pa",
};

export const grupos = [
  { name: "A", leader: "México", teams: ["México", "Sudáfrica", "Corea del Sur", "Chequia"] },
  { name: "B", leader: "Canadá", teams: ["Canadá", "Bosnia-Herz.", "Catar", "Suiza"] },
  { name: "C", leader: "Brasil", teams: ["Brasil", "Marruecos", "Haití", "Escocia"] },
  { name: "D", leader: "EE.UU.", teams: ["EE.UU.", "Paraguay", "Australia", "Turquía"] },
  { name: "E", leader: "Alemania", teams: ["Alemania", "Curazao", "Costa de Marfil", "Ecuador"] },
  { name: "F", leader: "Países Bajos", teams: ["Países Bajos", "Japón", "Suecia", "Túnez"] },
  { name: "G", leader: "Bélgica", teams: ["Bélgica", "Egipto", "Irán", "Nueva Zelanda"] },
  { name: "H", leader: "España", teams: ["España", "Cabo Verde", "Arabia S.", "Uruguay"] },
  { name: "I", leader: "Francia", teams: ["Francia", "Senegal", "Irak", "Noruega"] },
  { name: "J", leader: "Argentina", teams: ["Argentina", "Argelia", "Austria", "Jordania"] },
  { name: "K", leader: "Portugal", teams: ["Portugal", "DR Congo", "Uzbekistán", "Colombia"] },
  { name: "L", leader: "Inglaterra", teams: ["Inglaterra", "Croacia", "Ghana", "Panamá"] },
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
