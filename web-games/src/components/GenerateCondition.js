export function GenerateCondition({ level }) {
  const colors = ["white", "gray", "black"];
  const experienceLevels = [1, 2, 3];

  const shuffledColors = colors.sort(() => Math.random() - 0.5);
  const selectedColors = shuffledColors.slice(0, 2);
  const experience = experienceLevels[Math.floor(Math.random() * experienceLevels.length)];

  const conditionText = `Выбери всех сотрудников с опытом ${experience} и цветом одежды: ${selectedColors.join(" или ")}.`;

  let dialogue = [];

  if (level === 1) {
    dialogue = [
      "Ну что, новенький, пора проверить твоё внимание.",
      `Сейчас нужно отобрать правильных сотрудников. Не всех подряд, понял?`,
      `Запоминай условие: опыт — ${experience}, одежда — ${selectedColors.join(" или ")}.`,
      "Давай, посмотрим, справишься ли ты без ошибок."
    ];
  } else if (level === 2) {
    dialogue = [
      "Вижу, первый этап ты прошёл. Но не зазнавайся.",
      `Теперь условие посложнее: ищи тех, у кого опыт ${experience}.`,
      `И не забудь — цвет одежды ${selectedColors.join(" или ")}.`,
      "Ошибёшься — начнём заново. Так что будь внимательнее."
    ];
  } else if (level === 3) {
    dialogue = [
      "Третий раунд. Тут уже не для новичков.",
      `Ищи сотрудников с опытом ${experience} и в цветах ${selectedColors.join(" или ")}.`,
      "Думай быстро — времени мало.",
      "Покажи, что ты не зря ешь свой хлеб."
    ];
  } else {
    dialogue = [
      "Уровень неопознан, но задание то же самое.",
      `Опыт ${experience}, цвета ${selectedColors.join(" или ")}.`,
      "Не подведи, а то премии не будет."
    ];
  }

  return {
    condition: {
      experience,
      colors: selectedColors,
      text: conditionText
    },
    dialogue
  };
}
