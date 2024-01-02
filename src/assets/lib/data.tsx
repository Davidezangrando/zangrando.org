import javascripticon from "../../assets/icons/javascripticon.svg";
import reacticon from "../../assets/icons/reacticon.svg";
import nextjsicon from "../../assets/icons/nextjsicon.svg";
import nodejsicon from "../../assets/icons/nodejsicon.svg";
import awsicon from "../../assets/icons/awsicon.svg";
import trelloicon from "../../assets/icons/trelloicon.svg";
import firebaseicon from "../../assets/icons/firebaseicon.svg";
import fluttericon from "../../assets/icons/fluttericon.svg";
import hardhaticon from "../../assets/icons/hardhaticon.svg";
import solanaicon from "../../assets/icons/solanaicon.svg";
import netlifyicon from "../../assets/icons/netlifyicon.svg";
import tastyMockup from "../../assets/img/work.jpeg";
import instorMockup from "../../assets/img/work-2.jpeg";
import silentmoonMockup from "../../assets/img/work-3.jpeg";
import profilepicture from "../img/about.jpeg";
import caricon from "../../assets/icons/car-icon.svg";
import hardwareicon from "../../assets/icons/hardware-icon.svg";
import { GoHome, GoPerson, GoMail, GoStack, GoProject } from "react-icons/go";
import { FiGithub, FiLink, FiLinkedin, FiMail } from "react-icons/fi";
import Imprint from "../../components/Imprint";
import Privacy from "../../components/Privacy";

export const headerIntroData = {
  title: {
    de: "Ciao, sono Davide Zangrando",
    en: "Hi, I'm Davide Zangrando",
  },
  subtitle: "Nft Developer - Student",
  description: {
    de: "Sono uno studente e nel mio tempo libero lavoro all'interno del Nft. Mi occupo di sviluppo NFT, la creazione di smart contract e applicazioni correlate. Sto studiando altri argomenti tra cui lo sviluppo Flutter e nozioni di base di sicurezza informatica.",
    en: "I am a student and in my free time I work within the Nft. I deal with NFT development, the creation of smart contracts and related applications. I am studying other topics including Flutter development and Cybersecurity basics.",
  },
  buttons: [
    {
      name: "Contact",
      label: {
        de: "Contattami",
        en: "Contact me",
      },
      icon: FiMail,
      color: "main-btn",
    },
    {
      name: "Projects",
      label: {
        de: "I miei progetti",
        en: "My Projects",
      },
      icon: FiGithub,
      color: "secondary-btn",
    },
  ],
  profilepicture: profilepicture,
} as const;

export const projectsData = [
  {
    title: "Revelom - Rorschach Inkblots",
    description:
      "Un'importante collezione Nft realizzata da un importante Museo di Parigi.",
    description_EN:
      "An important Nft collection made by an important Paris Museum.",
    technologies: [
      { name: "Next Js", icon: nextjsicon },
      { name: "HardHat Suite", icon: hardhaticon },
      { name: "JavaScript", icon: javascripticon },
      { name: "Netlify", icon: netlifyicon },
    ],
    image: tastyMockup,
    deploymenturl: "https://delightful-cheesecake-9b19f0.netlify.app/",
    githuburl: "https://github.com/AlpayC/Frontend_Abschlussprojekt_Tasty",
    githubicon: FiGithub,
    deploymenticon: FiLink,
    colors: {
      main: "main-btn",
      second: "secondary-btn",
      icon: "white",
      projectcolor: "#70B9BE",
    },
  },
  {
    title: "Helped in the AlphaWallet development",
    description:
      "Ho aiutato nel processo di sviluppo di AlphaWallet. Il mio lavoro si è concentrato sulla ricerca di bug nella rete privata Blockchain Transaction dell'applicazione.",
    description_EN:
      "I helped in the AlphaWallet development proccess. My work focused on the searching of Bugs in the Blockchain Transaction private Network of the application.",
    technologies: [ { name: "JavaScript", icon: javascripticon },
    { name: "React", icon: reacticon },
    { name: "Node.js", icon: nodejsicon },
    { name: "Trello", icon: trelloicon },
    ],
    image: silentmoonMockup,
    deploymenturl: "https://opensea.io/collection/revelom-rorschach-inkblots-official",
    githuburl:
      "https://opensea.io/collection/revelom-rorschach-inkblots-official",
    githubicon: FiGithub,
    deploymenticon: FiLink,
    colors: {
      main: "main-btn",
      second: "secondary-btn",
      icon: "white",
      projectcolor: "#FFD5BD",
    },
  },
  {
    title: "Giga Chad Yatch Club",
    description:
      "GigaChad Yacht Club (GCYC) è una collezione di 6.969 NFTS attraverso la Blockchain Ethereum. Ogni NFT è generato casualmente da oltre 150 tratti disegnati a mano, ispirati dall'onnipotente GigaChad e dall'iconica collezione NFT: Bored Ape Yacht Club.",
    description_EN:
      "GigaChad Yacht Club (GCYC) is a collection of 6,969 NFTS across the Ethereum Blockchain. Each NFT is randomly generated from over 150 hand-drawn traits, inspired by the almighty GigaChad and the iconic NFT collection: Bored Ape Yacht Club.",
    technologies: [
      { name: "Next Js", icon: nextjsicon },
      { name: "HardHat Suite", icon: hardhaticon },
      { name: "JavaScript", icon: javascripticon },
      { name: "React", icon: reacticon },
    ],
    image: instorMockup,
    deploymenturl: "https://opensea.io/collection/gigachadyc",
    githuburl: "https://opensea.io/collection/gigachadyc",
    githubicon: FiGithub,
    deploymenticon: FiLink,
    colors: {
      main: "main-btn",
      second: "secondary-btn",
      icon: "white",
      projectcolor: "#E3964A",
    },
  },
] as const;

export const liveTickerData = {
  content: {
    de: "Altri progetti su Github",
    en: "More Projects on Github",
  },
} as const;

export const skillsDataWeb = [
  {
    skillsTitle: "Web App Development",
    skills: [
      {
        title: "React",
        hash: "#JavaScript",
        icon: reacticon,
        color: "#F7DF1E",
      },
      {
        title: "Flutter",
        hash: "#React",
        icon: fluttericon,
        color: "#61DAFB",
      },
      
    ],
  },
] as const;

export const skillsDataDesign = [
  {
    skillsTitle: "Web 3.0 Development",
    skills: [
      { title: "Hardhat", hash: "#HardHat", icon: hardhaticon, color: "#F24E1E" },
      {
        title: "Node.js",
        hash: "#Node.js",
        icon: nodejsicon,
        color: "#339933",
      },  
      {
        title: "Solana Development",
        hash: "#Solana",
        icon: solanaicon,
        color: "#339933",
      },  
    ],
  },
] as const;


export const skillsDataCMS = [
  {
    skillsTitle: "CLOUD SERVICES",
    skills: [
      {
        title: "Aws",
        hash: "#Aws",
        icon: awsicon,
        color: "#21759B",
      },
      {
        title: "Firebase",
        hash: "#Shopify",
        icon: firebaseicon,
        color: "#7AB55C",
      },
     
    ],
  },
] as const;


export const navLinks = [
  { de: "Home", en: "Home", hash: "#home", icon: GoHome },
  { de: "Skills", en: "Skills", hash: "#skills", icon: GoStack },
  { de: "Progetti", en: "Projects", hash: "#projects", icon: GoProject },
  { de: "Su di me", en: "About me", hash: "#about-me", icon: GoPerson },
  { de: "Contattami", en: "Contact", hash: "#contact", icon: GoMail },
] as const;

export const FooterLinks = [
  { de: "Imprint", en: "Imprint", hash: "#imprint", data: <Imprint /> },
  { de: "Privacy", en: "Privacy", hash: "#privacy", data: <Privacy /> },
] as const;

export const sideBarRightMail = {
  link: "mailto:davide.zangrando2@gmail.com",
  text: "email me!",
} as const;

export const sideBarLeftSocials = [
  {
    link: "https://www.linkedin.com/in/davide-zangrando/",
    icon: FiLinkedin,
    altimgname: "linkedin",
  },
  {
    link: "https://github.com/Davidezangrando",
    icon: FiGithub,
    altimgname: "github",
  },
  {
    link: "mailto:davide.zangrando2@gmail.com",
    icon: FiMail,
    altimgname: "mail",
  },
] as const;


export const quotesData = [
  {
    de: "Si un metro di qualità. Alcune persone non sono abituate a un ambiente in cui l'eccellenza è prevista." ,
    en: "Be a yardstick of quality. Some people aren't used to an enviorment where excellence is expected.",
    author: "Steve Jobs",
  },
  {
    de: "Il web è come una tela, e il codice è la vernice. Crea il tuo capolavoro.    ",
    en: "The web is like a canvas, and code is the paint. Create your masterpiece.",
  },
] as const;

export const aboutMeData = {
  title: "Su di me",
  title_EN: "About me",
  description: "La mia storia",
  description_EN: "A few code snippets about me",
  paragraphs_DE: [
    {
      title: "L'inizio",
      description:
        "Ho iniziato il mio viaggio quando avevo 12 anni. Ho iniziato scrivendo semplici programmi in C++ e semplici algoritmi. A 14 anni sono stato affascinato dai mondi Nft. Ho iniziato sviluppando la mia collezione, ma è stato un disastro. ma non mi sono scoraggiato e ho preso le cose positive imparato lo sviluppo Nft. Ho iniziato a vendere queste abilità e ho fatto il mio successo sui siti web freelance.",
      icon: hardwareicon,
    },
    {
      title: "Il piacere di scoprire come motto di vita",
      description:
        "All'inizio del 2022 il mio desiderio di imparare stava continuando a motivarmi, ho iniziato ad imparare (sto ancora imparando) il framework Flutter. Ho avuto l'opportunità di frequentare un corso di sicurezza informatica dove ho potuto conoscere le basi di questo mondo. ",
      icon: caricon,
    },
  ],
  paragraphs_EN: [
    {
      title: "The beginning",
      description:
        "I started my journey when i was 12 years old. I started by writing simple C++ programms, and simple algoritms. At 14 years old i've been fascinated by the Nft worlds. I started by developing my own collection but it was a disaster. but I didn’t get discouraged and took the positive things learned the Nft development. I started selling these abilities and I made my success on freelancing websites.",
      icon: hardhaticon,
    },
    {
      title: "My continuing",
      description:
        "At the beginning of 2022 my desire to learn was continuing to motivate me, I started learning (I’m still learning) the Flutter framework. I had the opportunity to attend a cybersecurity course where I could learn about the basics of this world. ",
      icon: solanaicon,
    },
  ],
};

export const contactData = {
  title: {
    de: "Contattami",
    en: "Contact",
  },
  description: {
    de: "Mandami un messaggio e ti risponderò subito!",
    en: "Write me a message and I will get back to you.",
  },
  inputfields: [
    {
      name: "name",
      placeholder: {
        de: "Nome",
        en: "Your Name",
      },
      type: "text",
      validation: {
        de: "Inserisci perfavore il tuo nome",
        en: "Please fill in your name",
      },
      pattern: "{2}",
    },
    {
      name: "email",
      placeholder: {
        de: "La tua email",
        en: "Your E-Mail",
      },
      type: "email",
      validation: {
        de: "Inserisci la tua email",
        en: "Please fill in your email",
      },
      pattern: "[@]{4}",
    },
    {
      name: "subject",
      placeholder: {
        de: "Oggetto",
        en: "Your Subject",
      },
      type: "text",
      validation: {
        de: "Inserisci il messaggio",
        en: "Please fill in your subject",
      },
      pattern: "{10}",
    },
  ],
  textarea: {
    placeholder: {
      de: "Il tuo messaggio",
      en: "Your Message",
    },
    name: "message",
    rows: 10,
    validation: {
      de: "Inserisci il messaggio",
      en: "Please fill in your message",
    },
    pattern: "{10}",
  },
  button: {
    value: {
      de: "Invia",
      en: "Send",
    },
  },
  icon: FiMail,
  iconcolor: "#FFFFFF",
  colors: {
    main: "main-btn",
    second: "secondary-btn",
    icon: "white",
  },
  privacyOptIn: {
    checkbox: {
      de: "Accetto che Alpay possa utilizzare i miei dati personali (nome e indirizzo e-mail) per contattarmi.",
      en: "Accetto che Alpay possa utilizzare i miei dati personali (nome e indirizzo e-mail) per contattarmi.",
    },
    description: {
      de: "Inviando questa richiesta, riconosci di aver letto la Politica Privata",
      en: "By submitting this request, you acknowledge that you have read the Private Policy",
    },
  },
} as const;

export const toastMessages = {
  loadingProject: {
    de: "🦄 Die Live Demo wird gleich geöffnet. Server werden gestartet...",
    en: "🦄 The live demo will open shortly. Starting servers...",
  },
  successEmailSent: {
    de: "🦄 Vielen Dank für deine Email. Ich werde mich schnellstmöglich bei dir melden",
    en: "🦄 Thank you for your email. I will get back to you as soon as possible",
  },
  failedEmailSent: {
    de: "🦄 Leider hat der Versand deiner Email nicht geklappt. Bitte versuche es später noch einmal",
    en: "🦄 Unfortunately the sending of your email did not work. Please try again later",
  },
  failedValidationName: {
    de: "Bitte gebe deinen Namen ein",
    en: "Please fill in your name",
  },
} as const;

export const buttonLabels = {
  language: {
    de: "IT",
    en: "EN",
  },
} as const;

export const directionStyles: Record<string, React.CSSProperties> = {
  "outer-right-to-inner-left": {
    marginRight: "4rem",
  },
  "outer-left-to-inner-right": {
    marginLeft: "4rem",
    transform: "scaleX(-1)",
  },
  "inner-right-to-middle": {
    width: "100%",
    transform: "scaleY(1)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  "inner-left-to-middle": {
    width: "100%",
    transform: "scaleX(-1)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  "middle-to-inner-right": {
    width: "100%",
    transform: "scale(1,-1)",
  },
  "middle-to-inner-left": {
    width: "100%",
    transform: "scale(-1,-1)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  middle: {
    width: "100%",
    transform: "scaleX(-1)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
};

export const heightStyles: Record<string, { heights: [string, string] }> = {
  small: {
    heights: ["25rem", "15rem"],
  },
  middle: {
    heights: ["35rem", "25rem"],
  },
  large: {
    heights: ["45rem", "35rem"],
  },
  extraLarge: {
    heights: ["55rem", "45rem"],
  },
};

export const spaceStyles: Record<string, React.CSSProperties> = {
  "outer-right-to-inner-left": {
    marginTop: "-6rem",
    width: "100%",
  },
  "outer-left-to-inner-right": {
    marginTop: "-6rem",
    width: "100%",
  },
  "inner-right-to-middle": {
    marginTop: "-20rem",
    width: "50%",
    zIndex: "-10",
  },
  "inner-left-to-middle": {
    marginTop: "-10rem",
    width: "50%",
    zIndex: "-10",
  },
  "middle-to-inner-right": {
    width: "75%",
  },
  "middle-to-inner-left": {
    marginTop: "-2.5rem",
    width: "50%",
  },
  middle: {
    marginTop: "-2.5rem",
    width: "0%",
    display: "none",
  },
};

export const widthStyles: Record<string, { widths: [string, string] }> = {
  "outer-right-to-inner-left": {
    widths: ["74.45%", "74.45%"],
  },
  "outer-left-to-inner-right": {
    widths: ["75%", "75%"],
  },
  "inner-right-to-middle": {
    widths: ["50.1%", "49%"],
  },
  "inner-left-to-middle": {
    widths: ["50.1%", "49%"],
  },
  "middle-to-inner-right": {
    widths: ["33.4%", "50.03%"],
  },
  "middle-to-inner-left": {
    widths: ["50.1%", "49%"],
  },
  middle: {
    widths: ["0%", "0%"],
  },
};
