export const HeroesQuery = `query {
  human(id: "1000") {
    name
    homePlanet
    friends {
      name
    }
  }
}`;
