# Exo prepa UAA5 (React)

Réaliser une application React SPA pour une site de voyage


## Page du site

- **Page d'accueil**
  Contenu : Titre, phrase d'accroche et une image
- **Page des destinations**
  Contenu : Les destinations sous la forme d'une liste clicable
- **Page détail d'une destionation**
  Contenu : Les informations de la destinations avec son image.
  Une zone commentaire doit être prévu (lecture et envoi)


## Contraintes

- Les données doivent être consommé depuis une WebAPI (fourni).
- Le site doit avoir une UX clair et être accessible.
- Le code doit propre et commenté quand necessaire.


## Typage des données de l'exemple (pour information):

~~~ Typescript
export type Destination = {
  id: number;
  name: string;
  shortDescription: string;
  fullDescription: string;
  country: string;
  estimatedBudget: {
    min: number;
    max: number | null;
  };
  imageUrl: string;
  slug: string;
  travelPeriod: {
    start: string; // format YYYY-MM-DD
    end: string;   // format YYYY-MM-DD
  }[];
};
~~~