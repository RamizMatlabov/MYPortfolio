"use client";
import { useEffect, useState } from "react";
import styles from "./Meteors.module.scss";

export default function Meteors({ number = 20 }) {
  const [meteors, setMeteors] = useState([]);

  useEffect(() => {
    const meteorStyles = new Array(number).fill(true).map(() => ({
      left: Math.floor(Math.random() * 100) + "%",
      animationDelay: (Math.random() * (1.5 - 0.2) + 0.2).toFixed(2) + "s",
      animationDuration: (Math.random() * (5 - 2) + 2).toFixed(2) + "s",
    }));
    setMeteors(meteorStyles);
  }, [number]);

  return (
    <div className={styles.meteorsContainer}>
      {meteors.map((style, idx) => (
        <span
          key={"meteor" + idx}
          className={styles.meteor}
          style={style}
        ></span>
      ))}
    </div>
  );
}
