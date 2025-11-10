
export function generateCharacters() {
  const sprites = [
    {path: "/sprites/person.svg",
     description:"white"}, 
    {path: "/sprites/person2.svg",
     description:"gray"},
    {path: "/sprites/person3.svg",
     description:"black"}];

  const sprite = sprites[Math.floor(Math.random() * sprites.length)];
  

  const character = {
    sprite: sprite,
    experience: Math.floor(Math.random() * 5),
  };

  return character;
}
