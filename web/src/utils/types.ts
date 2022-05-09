import bugImgURL from '../assets/bug.svg';
import ideaImgURL from '../assets/idea.svg';
import thoughtImgURL from '../assets/thought.svg';



export const feedbacksTypes = {
  BUG: {
    title: "Problema",
    image: {
      src: bugImgURL,
      alt: "Imagem de um inseto",
    },
  },
  IDEA: {
    title: "Ideia",
    image: {
      src: ideaImgURL,
      alt: "Imagem de um lampada",
    },
  },
  OTHER: {
    title: "Outro",
    image: {
      src: thoughtImgURL,
      alt: "Imagem de um pensamento",
    },
  },
};

export type feedbackType = keyof typeof feedbacksTypes;