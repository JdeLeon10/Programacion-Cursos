import { heroes, type Hero, type Owner } from "../data/heroes.data";

console.log("");

const getHeroById = (id: number): Hero | undefined => {
  const hero = heroes.find((hero) => hero.id === id);
  return hero;
};

const getHeroByName = (name: string): Hero | undefined => {
  const hero = heroes.find(
    (hero) => hero.name.toLowerCase() === name.toLowerCase(),
  );
  return hero;
};

const getHeroesByOwner = (owner: Owner): Hero[] => {
  const heroesByOwner = heroes.filter((hero) => hero.owner === owner);
  return heroesByOwner;
};

console.log(getHeroById(3));
console.log(getHeroByName("batman"));
console.log(getHeroesByOwner("Marvel"));
