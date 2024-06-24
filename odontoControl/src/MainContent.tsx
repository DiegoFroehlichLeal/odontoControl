import React from 'react';
import CardComponent from './components/CardComponent';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
const MainContent = () => {
  return (
    <main>
      <section id="home">
        <h2>Bem-vindo à Clínica Odontológica Sorriso Saudável</h2>
        <p>Oferecemos os melhores cuidados dentários para você e sua família.</p>
        <img src="path/to/your/image.jpg" alt="Clínica Odontológica" />


      </section>
      <section id="cards">
        <CardComponent
          title="Título do Card"
          text="Este é o texto do card."
          icon={InfoIcon} // Usando o ícone Info
        />
        <CardComponent
          title="Outro Card"
          text="Este é outro texto do card."
          icon={HomeIcon} // Usando um ícone diferente
        />
      </section>
    </main>
  );
};

export default MainContent;
