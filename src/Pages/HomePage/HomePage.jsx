import styles from './HomePage.module.scss';

const HomePage = () => {
    return (
        <div className={styles.container}>
            <h1>Hi, welcome to the PhoneBook!</h1>
            <div className={styles.warningWrapper}>
                <p className={styles.warning}>
                    The app is deployed on a free subscription, so it may take a minute to fully
                    launch.
                </p>
            </div>
        </div>
    );
};

export default HomePage;
