import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'About Us',
    Svg: require('@site/static/img/game-console-gamer.svg').default,
    description: (
      <>
        All Things Video Games is a collaboration-driven documentation site
        for all things video game related.
      </>
    ),
  },
  {
    title: 'Our Goal',
    Svg: require('@site/static/img/video-game.svg').default,
    description: (
      <>
        We strive to provide video game information to users in a seamless
        and user-friendly fashion, from game recommendations to game rulings.
      </>
    ),
  },
  {
    title: 'Where to Contribute',
    Svg: require('@site/static/img/joystick-game-controller.svg').default,
    description: (
      <>
        All Things Video Games is a teamwork-based project where contributions
        are welcome by anyone. To get started contributing, head over to our <a href="https://github.com/NSCC-ITC-Winter2026-WEBD3030-700-MCa/All-things-Video-Games" target="_blank">GitHub</a>.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md padding-top--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
