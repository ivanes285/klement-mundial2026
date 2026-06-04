import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  klementInfo,
  grupos,
  ronda32,
  octavos,
  cuartos,
  semis,
  final,
  COUNTRY_CODE,
} from "./data";
import "./App.css";

const Flag = ({ country, size = 32 }) => {
  const code = COUNTRY_CODE[country];
  if (!code) return <span style={{ fontSize: size * 0.6 }}>🏳️</span>;
  return (
    <img
      src={`https://flagcdn.com/${size}x${Math.round(size * 0.75)}/${code}.png`}
      alt={country}
      style={{ width: size, height: size * 0.75, objectFit: "cover", borderRadius: 3 }}
      onError={(e) => { e.target.style.display = "none"; }}
    />
  );
};

const MatchCard = ({ home, away, winner, note, tag, isChampion, confirmed = true }) => {
  const homeWon = winner === home;
  const awayWon = winner === away;
  const unspecified = winner === "?" || confirmed === false;

  return (
    <motion.div
      className={`match-card ${isChampion ? "match-champion" : ""} ${unspecified ? "match-unspecified" : ""}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
    >
      {tag && <span className={`tag ${tag === "CONFIRMADO" ? "tag-confirmed" : ""}`}>{tag}</span>}
      {note && <p className="match-note">{note}</p>}
      <div className="match-teams">
        <div className={`team-side ${unspecified ? "" : homeWon ? "won" : "lost"}`}>
          <Flag country={home} size={36} />
          <span className="team-name">{home}</span>
          {!unspecified && homeWon && <span className="winner-dot" />}
        </div>
        <div className="vs-label">vs</div>
        <div className={`team-side right ${unspecified ? "" : awayWon ? "won" : "lost"}`}>
          {!unspecified && awayWon && <span className="winner-dot" />}
          <span className="team-name">{away}</span>
          {away !== "?" && <Flag country={away} size={36} />}
        </div>
      </div>
      {isChampion && (
        <div className="champion-banner">
          🏆 CAMPEÓN MUNDIAL — primer título de su historia
        </div>
      )}
    </motion.div>
  );
};

const Section = ({ id, title, subtitle, children }) => (
  <section className="phase-section" id={id}>
    <motion.div
      className="phase-header"
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="phase-title">{title}</h2>
      {subtitle && <p className="phase-subtitle">{subtitle}</p>}
    </motion.div>
    {children}
  </section>
);

const NAV_ITEMS = [
  { id: "hero", label: "Inicio" },
  { id: "klement", label: "Klement" },
  { id: "grupos", label: "Grupos" },
  { id: "ronda32", label: "R.32" },
  { id: "octavos", label: "Octavos" },
  { id: "cuartos", label: "Cuartos" },
  { id: "semis", label: "Semis" },
  { id: "final", label: "Final" },
];

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <div className="app">
      {/* NAV */}
      <nav className="navbar">
        <div className="nav-logo">Klement <span>2026</span></div>
        <div className="nav-links desktop-nav">
          {NAV_ITEMS.map((n) => (
            <button key={n.id} className="nav-link" onClick={() => scrollTo(n.id)}>
              {n.label}
            </button>
          ))}
        </div>
        <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">
          <span /><span /><span />
        </button>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="mobile-menu"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
          >
            {NAV_ITEMS.map((n) => (
              <button key={n.id} className="mobile-nav-link" onClick={() => scrollTo(n.id)}>
                {n.label}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* HERO */}
      <section id="hero" className="hero">
        <div className="hero-bg-lines" aria-hidden="true" />
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <p className="hero-eyebrow">El modelo que no falla</p>
          <h1 className="hero-title">
            Predicción<br />
            <span className="hero-accent">Mundial 2026</span>
          </h1>
          <p className="hero-subtitle">
            Joachim Klement acertó 3 campeones consecutivos.<br />
            Este es su bracket completo para Norteamérica 2026.
          </p>
          <div className="hero-record">
            {klementInfo.record.map((r) => (
              <span key={r} className="record-pill">✓ {r}</span>
            ))}
          </div>
          <motion.div
            className="hero-winner"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            <p className="hero-winner-label">Predicción campeón</p>
            <div className="hero-winner-flag">
              <Flag country="Países Bajos" size={56} />
            </div>
            <p className="hero-winner-name">🇳🇱 Países Bajos</p>
          </motion.div>
        </motion.div>
        <div className="hero-scroll-hint">
          <span>Scroll</span>
          <div className="scroll-arrow" />
        </div>
      </section>

      <div className="content-wrapper">
        {/* KLEMENT BIO */}
        <Section id="klement" title="¿Quién es Joachim Klement?" subtitle="El economista que venció a los expertos deportivos">
          <div className="bio-grid">
            <motion.div
              className="bio-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <p className="bio-quote">"{klementInfo.quote}"</p>
              <p className="bio-attr">— Joachim Klement, {klementInfo.firm}</p>
            </motion.div>
            <div className="method-grid">
              <p className="method-label">Variables del modelo</p>
              {klementInfo.methodology.map((m) => (
                <motion.div
                  key={m.label}
                  className="method-pill"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                >
                  <span className="method-icon">{m.icon}</span>
                  <span>{m.label}</span>
                </motion.div>
              ))}
              <div className="method-pill method-warning">
                <span className="method-icon">⚠️</span>
                <span>El 45% de cada partido es azar puro</span>
              </div>
            </div>
          </div>
        </Section>

        {/* GRUPOS */}
        <Section id="grupos" title="Fase de Grupos" subtitle="Líderes de zona según el modelo">
          <div className="grupos-grid">
            {grupos.map((g) => (
              <motion.div
                key={g.name}
                className="grupo-card"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3 }}
              >
                <div className="grupo-header">
                  <span className="grupo-letter">Grupo {g.name}</span>
                </div>
                {g.teams.map((t) => (
                  <div key={t} className={`grupo-team ${t === g.leader ? "grupo-leader" : ""}`}>
                    <Flag country={t} size={20} />
                    <span>{t}</span>
                    {t === g.leader && <span className="star-badge">★</span>}
                  </div>
                ))}
              </motion.div>
            ))}
          </div>
          <p className="section-note">★ = clasifican como primeros. Los 8 mejores terceros también avanzan al bracket de 32.</p>
        </Section>

        {/* RONDA 32 */}
        <Section id="ronda32" title="Ronda de 32" subtitle="Eliminaciones destacadas en la primera ronda directa">
          <div className="matches-list">
            {ronda32.map((m, i) => (
              <MatchCard key={i} {...m} />
            ))}
          </div>
        </Section>

        {/* OCTAVOS */}
        <Section id="octavos" title="Octavos de Final">
          <div className="matches-list">
            {octavos.map((m, i) => (
              <MatchCard key={i} {...m} />
            ))}
          </div>
        </Section>

        {/* CUARTOS */}
        <Section id="cuartos" title="Cuartos de Final">
          <div className="matches-list">
            {cuartos.map((m, i) => (
              <MatchCard key={i} {...m} />
            ))}
          </div>
        </Section>

        {/* SEMIS */}
        <Section id="semis" title="Semifinales">
          <div className="matches-list">
            {semis.map((m, i) => (
              <MatchCard key={i} {...m} />
            ))}
          </div>
        </Section>

        {/* FINAL */}
        <Section id="final" title="La Gran Final" subtitle={`${final.venue}`}>
          <MatchCard {...final} isChampion />
        </Section>

        <footer className="footer">
          <p>Basado en el modelo econométrico de <strong>Joachim Klement</strong> — Panmure Liberum</p>
          <p className="footer-note">Esta predicción es solo informativa. El modelo no constituye consejo de inversión o apuesta.</p>
        </footer>
      </div>
    </div>
  );
}
