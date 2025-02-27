import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
          hello_world: "Hello World",
          i_am: "I am",
          fullstack_developer: "Fullstack Developer",
          lets_connect: "Let's connect",
          toggle: "Toggle",
          language: "EN",
          language_pt: "PT",
          about_me: "About-me",
          hi_there:
            "Hello! 👋 I'm Matheus Ribeiro, a fullstack developer with over two years of experience in building dynamic and responsive web applications.",
          journey:
            "My journey in programming began with a curiosity to understand how technology works behind the scenes. Since then, I’ve been honing my skills to develop innovative and efficient solutions, always focused on best practices and performance.",
          specialize:
            "Currently, I work as a fullstack developer, specializing in backend development with Node.js and frontend development with React, JavaScript, and CSS to create modern and intuitive interfaces.",
          exploring:
            "I'm constantly exploring new tools, frameworks, and architectures to stay ahead of the latest trends in web development and to improve the quality of my work.",
          when_not_coding:
            "In addition to coding, I’m always on the lookout for new opportunities to help businesses and entrepreneurs turn their ideas into robust, scalable digital solutions. If you're looking for a developer who is committed to delivering results, I'm ready to collaborate on your next project.",
          lets_create: "Let's create something amazing together!",
          projects: "Projects",
          "contact-me": "Contact-me",
          blog_description:
            "A complete blog with a login system, post creation, comments, and likes. Users can create an account, log in, write posts, comment, and like posts from other users.",
          full_blog_description:
            "An interactive full-stack blog where users can create an account, log in, publish posts, comment, and like publications. Developed with React, React Router, Axios, Context API, Formik, and Material-UI on the front end, and Node.js, Express, PostgreSQL (Sequelize), JWT, and Bcrypt on the back end, focusing on authentication, interactivity, and best practices. 🚀",
          dices_description:
            "A page created to simulate a dice game, where users can choose how many dice to roll, apply additions and subtractions, and view the sequence of rolls.",
          full_dices_description:
            "A page created to simulate a dice game, where users can choose how many dice to roll, apply additions and subtractions, and view the sequence of rolls.",
          chat_description:
            "A simple community chat where users can send messages and see messages sent by other users.",
          full_chat_description:
            "A simple community chat where users can send messages and see messages sent by other users.",
          link_to_repository: "Link to repository",
          message_return:
            "Message sent successfully! I'll get back to you soon. See you! 😀",
          error_fields: "Please, fill all fields.",
          your_name: "Your name",
          your_email: "Your email",
          your_message: "Your message",
          projects_message: "Check out some of the main projects I've developed and that are in development below"
        },
      },
      pt: {
        translation: {
          hello_world: "Olá Mundo",
          i_am: "Eu sou",
          fullstack_developer: "Desenvolvedor Fullstack",
          lets_connect: "Vamos conectar",
          toggle: "Alternar",
          language: "EN",
          language_pt: "PT",
          about_me: "Sobre mim",
          hi_there:
            " Olá! 👋 Eu sou Matheus Ribeiro, um desenvolvedor fullstack com mais de dois anos de experiência na criação de aplicações web dinâmicas e responsivas.",
          journey:
            "Minha trajetória na programação começou com a curiosidade de entender como a tecnologia funciona nos bastidores. Desde então, venho aprimorando minhas habilidades para desenvolver soluções inovadoras e eficientes, sempre focado em boas práticas e performance.",
          specialize:
            "Atualmente, atuo como desenvolvedor fullstack, com foco no desenvolvimento backend utilizando Node.js e no front-end com React, JavaScript e CSS para criar interfaces modernas e intuitivas",
          exploring:
            "Estou constantemente explorando novas ferramentas, frameworks e arquiteturas para acompanhar as tendências do desenvolvimento web e aprimorar a qualidade das minhas entregas.",
          when_not_coding:
            "Além de programar, estou sempre em busca de novas oportunidades para ajudar empresas e empreendedores a transformarem suas ideias em soluções digitais robustas e escaláveis. Se você precisa de um desenvolvedor comprometido e focado em entregar resultados, estou pronto para colaborar no seu próximo projeto.",
          lets_create: "Vamos criar algo incrível juntos!",
          projects: "Projetos",
          "contact-me": "Contate-me",
          blog_description:
            "Blog completo com sistema de login, cadastro de posts, comentários e curtidas. O usuário pode criar uma conta, fazer login, criar posts, comentar e curtir posts de outros usuários.",
          full_blog_description:
            "Blog interativo fullstack onde usuários podem criar conta, fazer login, publicar posts, comentar e curtir publicações. Desenvolvido com React, React Router, Axios, Context API, Formik e Material-UI no front-end, e Node.js, Express, PostgreSQL (Sequelize), JWT e Bcrypt no back-end, focando em autenticação, interatividade e boas práticas. 🚀",
          dices_description:
            "Pagina criatada para simular um jogo de dados, onde o usuário pode escolher quantos dados jogar, aplicar somas e subtrações e ver a sequência de jogadas.",
          full_dices_description:
            "Pagina criatada para simular um jogo de dados, onde o usuário pode escolher quantos dados jogar, aplicar somas e subtrações e ver a sequência de jogadas.",
          chat_description:
            "Chat comunitário simples, onde o usuário pode enviar mensagens e ver as mensagens enviadas por outros usuários.",
          full_chat_description:
            "Chat comunitário simples, onde o usuário pode enviar mensagens e ver as mensagens enviadas por outros usuários",
          link_to_repository: "Link para o repositório",
          message_return:
            "Mensagem enviado com sucesso! em breve entrarei em contato. Até logo! 😀",
          error_fields: "Por favor, preencha todos os campos.",
          your_name: "Seu nome",
          your_email: "Seu e-mail",
          your_message: "Sua mensagem",
          projects_message: "Confira alguns dos principais projetos que desenvolvi e que estao em desenvolvimento abaixo"
        },
      },
    },
    lng: "pt", // Idioma padrão
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
