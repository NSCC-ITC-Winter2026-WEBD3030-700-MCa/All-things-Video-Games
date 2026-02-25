import React, { useEffect, useMemo, useState } from 'react';
import Layout from '@theme/Layout';
import styles from './community-poll.module.css';

const STORAGE_KEY = 'communityPollVotes';

const POLLS = [
  {
    id: 'games',
    title: 'Favourite Game',
    description: 'Vote for the game you enjoy the most right now.',
    options: ['Minecraft', 'The Legend of Zelda', 'Elden Ring', 'Fortnite'],
  },
  {
    id: 'genres',
    title: 'Favourite Genre',
    description: 'Pick the genre you return to most often.',
    options: ['Action', 'Adventure', 'RPG', 'Strategy'],
  },
  {
    id: 'features',
    title: 'Most Wanted Feature',
    description: 'Choose the feature that improves your experience most.',
    options: ['Cross-platform play', 'Better matchmaking', 'Mod support', 'Photo mode'],
  },
];

function createInitialVotes() {
  return POLLS.reduce((pollAcc, poll) => {
    pollAcc[poll.id] = poll.options.reduce((optionAcc, option) => {
      optionAcc[option] = 0;
      return optionAcc;
    }, {});
    return pollAcc;
  }, {});
}

function mergeVotesWithDefaults(storedVotes) {
  const defaults = createInitialVotes();

  return POLLS.reduce((pollAcc, poll) => {
    const currentPollVotes = storedVotes?.[poll.id] ?? {};

    pollAcc[poll.id] = poll.options.reduce((optionAcc, option) => {
      const value = Number(currentPollVotes[option]);
      optionAcc[option] = Number.isFinite(value) && value >= 0 ? value : 0;
      return optionAcc;
    }, {});

    return pollAcc;
  }, defaults);
}

function readVotesFromStorage() {
  if (typeof window === 'undefined') {
    return createInitialVotes();
  }

  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      return createInitialVotes();
    }

    const parsed = JSON.parse(raw);
    return mergeVotesWithDefaults(parsed);
  } catch {
    return createInitialVotes();
  }
}

export default function CommunityPollPage() {
  const [votes, setVotes] = useState(createInitialVotes);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const nextVotes = readVotesFromStorage();
    setVotes(nextVotes);
    setIsLoaded(true);
  }, []);

  useEffect(() => {
    if (!isLoaded || typeof window === 'undefined') {
      return;
    }

    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(votes));
    window.dispatchEvent(new Event('community-poll-updated'));
  }, [votes, isLoaded]);

  useEffect(() => {
    if (typeof window === 'undefined') {
      return undefined;
    }

    const syncVotes = () => {
      setVotes(readVotesFromStorage());
    };

    const onStorage = (event) => {
      if (event.key === STORAGE_KEY) {
        syncVotes();
      }
    };

    window.addEventListener('storage', onStorage);
    window.addEventListener('community-poll-updated', syncVotes);

    return () => {
      window.removeEventListener('storage', onStorage);
      window.removeEventListener('community-poll-updated', syncVotes);
    };
  }, []);

  const totals = useMemo(() => {
    return POLLS.reduce((acc, poll) => {
      acc[poll.id] = Object.values(votes[poll.id] ?? {}).reduce(
        (sum, value) => sum + value,
        0,
      );
      return acc;
    }, {});
  }, [votes]);

  const voteForOption = (pollId, option) => {
    setVotes((current) => ({
      ...current,
      [pollId]: {
        ...current[pollId],
        [option]: (current[pollId]?.[option] ?? 0) + 1,
      },
    }));
  };

  return (
    <Layout
      title="Community Poll"
      description="Vote for your favourite games, genres, and features."
    >
      <main className={styles.page}>
        <section className="container">
          <h1 className={styles.title}>Community Poll</h1>
          <p className={styles.subtitle}>
            Cast your vote and watch results update in real time.
          </p>

          <div className={styles.grid}>
            {POLLS.map((poll) => (
              <article key={poll.id} className={styles.card}>
                <h2 className={styles.cardTitle}>{poll.title}</h2>
                <p className={styles.cardDescription}>{poll.description}</p>
                <p className={styles.total}>Total votes: {totals[poll.id] ?? 0}</p>

                <ul className={styles.optionList}>
                  {poll.options.map((option) => {
                    const optionVotes = votes[poll.id]?.[option] ?? 0;
                    const percent =
                      (totals[poll.id] ?? 0) > 0
                        ? Math.round((optionVotes / totals[poll.id]) * 100)
                        : 0;

                    return (
                      <li key={option} className={styles.optionItem}>
                        <div className={styles.optionHeader}>
                          <span>{option}</span>
                          <span>
                            {optionVotes} ({percent}%)
                          </span>
                        </div>
                        <div className={styles.barTrack}>
                          <span
                            className={styles.barFill}
                            style={{ width: `${percent}%` }}
                          />
                        </div>
                        <button
                          type="button"
                          className="button button--primary button--sm"
                          onClick={() => voteForOption(poll.id, option)}
                        >
                          Vote
                        </button>
                      </li>
                    );
                  })}
                </ul>
              </article>
            ))}
          </div>
        </section>
      </main>
    </Layout>
  );
}