export function generateCharacters(count){
    const sprites = ["/sprites/person.svg", "/sprites/person1.svg"];
    const characters = [];

    for (let i = 0;i< count;i++) {
        const sprite = sprites[i % sprites.length]
        characters.push({
          id: i + 1,
          sprite,
          experience: 2,
        });
    }
    return characters
}