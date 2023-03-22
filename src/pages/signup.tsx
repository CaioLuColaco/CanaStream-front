import React, { useState } from "react";
import styles from "@/styles/signup.module.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/footer";

export default function SignUp() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e: any) => {
    e.preventDefault();
  };

  return (
    <>
      <Navbar />
      <form className={styles.form} onSubmit={handleSubmit}>
        <label className={styles.label}>
          Nome:
          <input
            className={styles.input}
            type="text"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            required
          />
        </label>
        <label className={styles.label}>
          Email:
          <input
            className={styles.input}
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
        <button className={styles.button_submit} type="submit">
          Cadastrar
        </button>
      </form>
      <Footer />
    </>
  );
}