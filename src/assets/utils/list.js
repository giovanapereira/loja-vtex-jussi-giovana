export function getList() {
  return fetch(
    "https://pokeapi.co/api/v2/pokemon?limit=9&offset=0"
  ).then((res) => res.json());
}
