const NOW = new Date()

export default function Header() {
  return (
    <header>
      <h2>Заголовок</h2>
      <span>Время сейчас: {NOW.toLocaleDateString()}</span>
    </header>
  );
}