import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/Profile.module.css';

export function Profile(){

    const { level } = useContext(ChallengesContext);

    return(
        <div className={styles.profileContainer}>
            <img src="https://images.unsplash.com/photo-1564349683136-77e08dba1ef7?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1052&q=80" alt="Profile image" />
            <div>
                <strong> João Pedro </strong>
                <p>
                    <img src="icons/level.svg" alt="Level" />
                    Level {level} </p>
            </div>
        </div>
    )
}