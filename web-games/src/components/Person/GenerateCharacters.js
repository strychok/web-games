
export function generateCharacters() {
  const sprites = ["/sprites/person.svg", "/sprites/person2.svg"];

  const sprite = sprites[Math.floor(Math.random() * sprites.length)];
  

  const character = {
    sprite,
    experience: Math.floor(Math.random() * 5),
  };

  return character;
}
