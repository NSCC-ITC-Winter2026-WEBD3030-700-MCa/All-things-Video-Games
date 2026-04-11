import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import styles from './index.module.css';

const featuredGames = [
  {
    id: 1,
    title: 'Elden Ring',
    genre: 'Action RPG',
    rating: '9.5/10',
    image: 'https://picsum.photos/seed/elden/400/250',
  },
  {
    id: 2,
    title: 'The Legend of Zelda',
    genre: 'Adventure',
    rating: '9.8/10',
    image: 'https://picsum.photos/seed/zelda/400/250',
  },
  {
    id: 3,
    title: 'God of War Ragnarok',
    genre: 'Action',
    rating: '9.3/10',
    image: 'https://picsum.photos/seed/godwar/400/250',
  },
  {
    id: 4,
    title: 'Final Fantasy XVI',
    genre: 'JRPG',
    rating: '9.0/10',
    image: 'https://picsum.photos/seed/ff16/400/250',
  },
];

const genres = [
  { name: 'Action', icon: '⚔️', color: '#ff4757' },
  { name: 'RPG', icon: '🛡️', color: '#3742fa' },
  { name: 'Adventure', icon: '🗺️', color: '#2ed573' },
  { name: 'Strategy', icon: '♟️', color: '#ffa502' },
  { name: 'Sports', icon: '⚽', color: '#1e90ff' },
  { name: 'Horror', icon: '👻', color: '#a55eea' },
];

function HeroSection() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <section className={styles.hero}>
      <div className={styles.heroBackground}></div>
      <div className={styles.heroContent}>
        <h1 className={styles.heroTitle}>
          <span className={styles.heroTitleLine}>Welcome to</span>
          <span className={styles.heroTitleHighlight}>{siteConfig.title}</span>
        </h1>
        <p className={styles.heroSubtitle}>{siteConfig.tagline}</p>
        <div className={styles.heroButtons}>
          <Link className={styles.primaryButton} to="/docs/all-games">
            Explore Games
          </Link>
          <Link className={styles.secondaryButton} to="/docs/categories">
            Browse Categories
          </Link>
        </div>
      </div>
    </section>
  );
}

function FeaturedGamesSection() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>
          <span className={styles.sectionTitleIcon}>🎮</span>
          Featured Games
        </h2>
        <p className={styles.sectionSubtitle}>
          Discover the hottest titles hand-picked by our experts
        </p>
        <div className={styles.gamesGrid}>
          {featuredGames.map((game) => (
            <article key={game.id} className={styles.gameCard}>
              <div className={styles.gameImageWrapper}>
                <img
                  src={game.image}
                  alt={game.title}
                  className={styles.gameImage}
                />
                <div className={styles.gameOverlay}>
                  <span className={styles.gameRating}>{game.rating}</span>
                </div>
              </div>
              <div className={styles.gameInfo}>
                <span className={styles.gameGenre}>{game.genre}</span>
                <h3 className={styles.gameTitle}>{game.title}</h3>
                <Link to={`/docs/games/${game.id}`} className={styles.gameLink}>
                  View Details →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function GenreQuickLinks() {
  return (
    <section className={styles.genreSection}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>
          <span className={styles.sectionTitleIcon}>🎯</span>
          Browse by Genre
        </h2>
        <p className={styles.sectionSubtitle}>
          Find your perfect game by category
        </p>
        <div className={styles.genreGrid}>
          {genres.map((genre) => (
            <Link
              key={genre.name}
              to={`/docs/genres/${genre.name.toLowerCase()}`}
              className={styles.genreCard}
              style={{ '--genre-color': genre.color }}
            >
              <span className={styles.genreIcon}>{genre.icon}</span>
              <span className={styles.genreName}>{genre.name}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function GameOfTheMonth() {
  return (
    <section className={styles.gotmSection}>
      <div className={styles.container}>
        <div className={styles.gotmCard}>
          <div className={styles.gotmImageWrapper}>
            <img
              src="https://picsum.photos/seed/gotm/600/400"
              alt="Game of the Month"
              className={styles.gotmImage}
            />
            <div className={styles.gotmBadge}>GAME OF THE MONTH</div>
          </div>
          <div className={styles.gotmContent}>
            <span className={styles.gotmMonth}>December 2024</span>
            <h2 className={styles.gotmTitle}>Baldur's Gate 3</h2>
            <p className={styles.gotmDescription}>
              An epic RPG experience that redefines the genre. Dive into a world of
              choices, consequences, and unforgettable adventures. With over 174
              hours of gameplay and endless replayability.
            </p>
            <div className={styles.gotmStats}>
              <div className={styles.gotmStat}>
                <span className={styles.gotmStatValue}>174+</span>
                <span className={styles.gotmStatLabel}>Hours of Content</span>
              </div>
              <div className={styles.gotmStat}>
                <span className={styles.gotmStatValue}>97%</span>
                <span className={styles.gotmStatLabel}>Metacritic Score</span>
              </div>
            </div>
            <Link to="/docs/games/baldurs-gate-3" className={styles.gotmButton}>
              Read Full Review
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function HomepageFooter() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footerContent}>
          <div className={styles.footerBrand}>
            <h3 className={styles.footerTitle}>All Things Video Games</h3>
            <p className={styles.footerText}>
              Your ultimate destination for game reviews, news, and guides.
            </p>
          </div>
          <div className={styles.footerLinks}>
            <div className={styles.footerColumn}>
              <h4 className={styles.footerHeading}>Quick Links</h4>
              <Link to="/docs/all-games" className={styles.footerLink}>
                All Games
              </Link>
              <Link to="/docs/reviews" className={styles.footerLink}>
                Reviews
              </Link>
              <Link to="/docs/news" className={styles.footerLink}>
                News
              </Link>
            </div>
            <div className={styles.footerColumn}>
              <h4 className={styles.footerHeading}>Categories</h4>
              <Link to="/docs/action" className={styles.footerLink}>
                Action
              </Link>
              <Link to="/docs/rpg" className={styles.footerLink}>
                RPG
              </Link>
              <Link to="/docs/indie" className={styles.footerLink}>
                Indie
              </Link>
            </div>
          </div>
        </div>
        <div className={styles.footerBottom}>
          <p>© 2024 All Things Video Games. Built with Docusaurus.</p>
        </div>
      </div>
    </footer>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title="Home"
      description="Your ultimate destination for video game reviews, news, and guides.">
      <HeroSection />
      <main>
        <FeaturedGamesSection />
        <GenreQuickLinks />
        <GameOfTheMonth />
      </main>
      <HomepageFooter />
    </Layout>
  );
}
