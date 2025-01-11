import { motion } from "framer-motion";
const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Section Accueil */}
      <motion.section
        id="accueil"
        className="h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-4xl font-bold">Bienvenue sur MyDevPortfolio</h1>
      </motion.section>

      {/* Section À propos */}
      <motion.section
      id="about"
      className="h-screen p-8 bg-gray-200 dark:bg-gray-700"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      >
        <h2 className="text-3xl font-bold mb-4">À propos de moi</h2>
        <p>
          Bonjour, je suis <span className="text-primary font-semibold">Valentin Hamon</span>, développeur front-end passionné.
        </p>
      </motion.section>

      {/* Section Projets */}
      <motion.section
      id="projects"
      className="h-screen p-8 bg-gray-100 dark:bg-gray-800"
      >
        <h2 className="text-3xl font-bold mb-4">Mes Projets</h2>
        <p>Voici une sélection de mes projets récents.</p>
      </motion.section>

      {/* Section Contact */}
      <motion.section
      id="contact"
      className="h-screen p-8 bg-gray-200 dark:bg-gray-700"
      >
        <h2 className="text-3xl font-bold mb-4">Contact</h2>
        <p>Envoyez-moi un message ou suivez-moi sur mes réseaux sociaux !</p>
      </motion.section>
    </div>
  );
};

export default Home;