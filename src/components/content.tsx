export const Content = () => {
  return (
    <main>


      <div><img src="../src/assets/angry.jpg" className="change" /></div>

      <div className="message"></div>
      <button onClick={() => {
        const img = document.querySelector('.change') as HTMLImageElement;
        img.src = '../src/assets/boobies.gif';

        const message = document.querySelector('.message') as HTMLDivElement;
        
        const messages = async () => {
          const response = await fetch('https://api.chucknorris.io/jokes/random');
          const data = await response.json();
          message.innerText = data.value;
        };
        messages();

        const button = document.querySelector('button') as HTMLButtonElement;
        button.innerText = 'clique aqui de novo';
        
      }}>clique aqui</button>

    </main>
  );
}