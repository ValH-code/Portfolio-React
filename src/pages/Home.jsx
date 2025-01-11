import { motion } from "framer-motion";
import Typical from 'react-typical';
import projet1 from '../assets/img/BookTracker-Accueil.png';
import commingSoon from '../assets/img/pngegg.png';
import { FaReact, FaJsSquare, FaCss3Alt, FaHtml5, FaGitAlt } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { FaLinkedin, FaGithub, FaDownload } from "react-icons/fa";
import emailjs from "emailjs-com";
const Home = () => {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
    .sendForm(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      e.target,
      import.meta.env.VITE_EMAILJS_USER_ID
    )
    .then(
      (result) => {
        console.log("Message envoyé : ", result.text);
        alert("Message envoyé avec succès !");
      },
      (error) => {
        console.error("Erreur : ", error.text);
        alert("Une erreur est survenue, veuillez réessayer.");
      }
    );
  

    e.target.reset();
  };


  return (
    <div className="min-h-screen">
    {/* Section Accueil */}
    <motion.section
      id="accueil"
      className="h-screen flex items-center justify-between px-8 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
       {/* Texte à gauche */}
      <div className="w-1/2 flex flex-col items-center justify-center">
          <h1 className="text-5xl font-bold mb-4 text-center">
            Bienvenue sur <span className="text-blue-500">MyDevPortfolio</span>
          </h1>
          <p className="text-lg mb-8 text-center">
            Je suis <span className="text-cyan-500 font-semibold">Valentin HAMON</span>,
            <Typical
              steps={[' développeur web.', 2000, ' passionné par React.', 2000, ' toujours curieux.', 2000]}
              loop={Infinity}
              wrapper="span"
              className="text-cyan-500"
            />
          </p>
          <motion.a
            href="#projects"
            className="bg-blue-500 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-blue-700 transition"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
          Voir mes projets
        </motion.a>
      </div>

      {/* Vidéo intégrée à droite*/}
    <div className="w-full flex justify-center">
      <video
        src="/code.mp4" // Remplace par le chemin de ta vidéo
        className="rounded-lg shadow-lg w-full max-w-lg"
        autoPlay
        loop
        muted
        playsInline
      ></video>
    </div>
    </motion.section>

    <div className="min-h-screen">
      {/* Section À propos */}
      <motion.section
        id="about"
        className="h-screen p-8 bg-gray-100 dark:bg-gray-800 flex items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Texte */}
        <div className="w-full max-w-3xl text-gray-800 dark:text-gray-200 text-center">
          <h2 className="text-4xl font-bold mb-4">À propos de moi</h2>
          <p className="mb-8">
            Je suis <span className="text-blue-500 font-semibold">Valentin Hamon</span>. Fort de plusieurs années d'expérience en tant que gendarme, j'ai su développer des compétences solides en gestion desituations complexes, en communication et en prise de décision rapide. Ces atouts, alliés à une passion pour les technologies numériques, m'ont conduit à entamer une reconversion professionnelle vers le développement web.
          </p>
          <h3 className="text-2xl font-semibold mb-4">Compétences techniques</h3>
          <ul className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm">
            <li className="flex items-center justify-center">
              <FaReact className="w-5 h-5 text-blue-500 mr-2" /> React.js
            </li>
            <li className="flex items-center justify-center">
              <FaJsSquare className="w-5 h-5 text-yellow-500 mr-2" /> JavaScript
            </li>
            <li className="flex items-center justify-center">
              <FaCss3Alt className="w-5 h-5 text-blue-300 mr-2" /> CSS3
            </li>
            <li className="flex items-center justify-center">
              <FaHtml5 className="w-5 h-5 text-orange-500 mr-2" /> HTML5
            </li>
            <li className="flex items-center justify-center">
              <SiTailwindcss className="w-5 h-5 text-cyan-500 mr-2" /> Tailwind CSS
            </li>
            <li className="flex items-center justify-center">
              <FaGitAlt className="w-5 h-5 text-red-500 mr-2" /> Git & GitHub
            </li>
          </ul>
        </div>
      </motion.section>
    </div>

      {/* Section Projets */}
      <motion.section
  id="projects"
  className="min-h-screen p-8 pt-20 bg-gray-100 dark:bg-gray-800 flex flex-col items-center"
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 1 }}
>
  <h2 className="text-4xl font-bold mb-8 text-gray-800 dark:text-gray-200">
    Mes Projets
  </h2>

  {/* Liste des projets */}
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
    {/* Projet 1 */}
    <div className="bg-white dark:bg-gray-700 rounded-lg shadow-lg p-4">
      <img
        src={projet1}
        alt="Projet 1"
        className="rounded-lg mb-4"
      />
      <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
        BiblioTracker
      </h3>
      <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
      BiblioTracker est une application web qui permet aux utilisateurs de gérer leur bibliothèque personnelle, suivre leur progression de lecture, tout en offrant une recherche intégrée via l'API Google Books. Le projet inclut des fonctionnalités d'authentification, un mode sombre, et une gestion personnalisée des livres pourchaque utilisateur connecté.
      </p>
      <p className="text-sm mb-4">
        <span className="text-blue-500">React </span>{' '}
        <span className="text-yellow-500">JavaScript </span>{' '}
        <span className="text-green-500">TailwindCSS</span>
      </p>
      <a
        href="https://github.com/ValH-code/BookTracker"
        className="block text-center bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition"
        target="_blank"
      >
        Voir le projet
      </a>
    </div>

    {/* Projet 2 */}
    <div className="bg-white dark:bg-gray-700 rounded-lg shadow-lg p-4">
      <img
        src={commingSoon}
        alt="Projet 1"
        className="rounded-lg mb-4"
      />
      <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
        Projet
      </h3>
      <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
        Une description.
      </p>
      <p className="text-sm mb-4">
        <span className="text-blue-500"></span>{' '}
        <span className="text-yellow-500"></span>{' '}
        <span className="text-green-500"></span>
      </p>
      <a
        href="#"
        className="block text-center bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition"
      >
        Voir le projet
      </a>
    </div>

    {/* Projet 3 */}
    <div className="bg-white dark:bg-gray-700 rounded-lg shadow-lg p-4">
      <img
        src={commingSoon}
        alt="Projet 1"
        className="rounded-lg mb-4"
      />
      <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
        Projet
      </h3>
      <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
        Une description.
      </p>
      <p className="text-sm mb-4">
        <span className="text-blue-500"></span>{' '}
        <span className="text-yellow-500"></span>{' '}
        <span className="text-green-500"></span>
      </p>
      <a
        href="#"
        className="block text-center bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition"
      >
        Voir le projet
      </a>
    </div>

    {/* Projet 4 */}
    <div className="bg-white dark:bg-gray-700 rounded-lg shadow-lg p-4">
      <img
        src={commingSoon}
        alt="Projet 1"
        className="rounded-lg mb-4"
      />
      <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
        Projet
      </h3>
      <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
        Une description.
      </p>
      <p className="text-sm mb-4">
        <span className="text-blue-500"></span>{' '}
        <span className="text-yellow-500"></span>{' '}
        <span className="text-green-500"></span>
      </p>
      <a
        href="#"
        className="block text-center bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition"
      >
        Voir le projet
      </a>
    </div>

    {/* Ajoute d'autres projets ici */}
  </div>
</motion.section>


  {/* Section Contact */}
    <motion.section
      id="contact"
      className="h-screen p-8 bg-gray-200 dark:bg-gray-700 flex flex-col items-center justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <h2 className="text-4xl font-bold mb-8 text-gray-800 dark:text-gray-200">
        Contact
      </h2>
      <form
        onSubmit={sendEmail}
        className="w-full max-w-lg bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg"
      >
        {/* Nom */}
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-gray-800 dark:text-gray-200 font-semibold mb-2"
          >
            Nom
          </label>
          <input
            type="text"
            id="name"
            name="user_name"
            className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Entrez votre nom"
            required
          />
        </div>

        {/* E-mail */}
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-gray-800 dark:text-gray-200 font-semibold mb-2"
          >
            E-mail
          </label>
          <input
            type="email"
            id="email"
            name="user_email"
            className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Entrez votre e-mail"
            required
          />
        </div>

        {/* Message */}
        <div className="mb-4">
          <label
            htmlFor="message"
            className="block text-gray-800 dark:text-gray-200 font-semibold mb-2"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows="4"
            className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Entrez votre message"
            required
          ></textarea>
        </div>

        {/* Bouton envoyer */}
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-700 transition"
        >
          Envoyer
        </button>
      </form>

      {/* Réseaux sociaux et CV */}
      <div className="mt-8 flex flex-col items-center">
        <div className="flex space-x-6 mb-4">
          <a
            href="https://www.linkedin.com/in/valh-code/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-700 hover:text-blue-900 transition"
          >
            <FaLinkedin className="w-8 h-8" />
          </a>
          <a
            href="https://github.com/ValH-code"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-800 dark:text-gray-200 hover:text-black dark:hover:text-gray-400 transition"
          >
            <FaGithub className="w-8 h-8" />
          </a>
        </div>

        <a
          href="../../public/HAMON_VALENTIN.pdf" // Remplace par le chemin réel de ton fichier CV
          download="CV_Valentin_Hamon"
          className="bg-gray-800 text-white py-3 px-6 rounded-lg hover:bg-gray-600 transition flex items-center"
        >
          <FaDownload className="w-5 h-5 mr-2" />
          Télécharger mon CV
        </a>
      </div>
    </motion.section>

    </div>
  );
};

export default Home;