export default function Home() {
  function texto() {
    const texto = document.querySelector(".texto");
    texto.innerHTML +=
      "Só para dizer o quanto você é especial, e que as dificuldades são só uma fase que vai passar. Te adoro <3";
  }

  return (
    <div>
      <button type="button" onClick={texto}>
        clica aqui
      </button>
      <br></br>
      <p className="texto"></p>
    </div>
  );
}
