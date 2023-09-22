interface Link {
  description?: string;
  id?: number;
  url: string;
}

interface TranslatedLink extends Link {
  language: string;
}

const link1: TranslatedLink = {
  description:
    "TypeScript tutorial for beginners is a tutorial for all the JavaScript developers ...",
  id: 1,
  url: "www.valentinog.com/typescript/",
  language: "en",
};
