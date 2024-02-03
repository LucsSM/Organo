import { useState } from 'react';
import './App.css';
import Banner from './Componentes/Banner';
import Formulario from './Componentes/Formulario';
import Time from './Componentes/Time';
import Rodape from './Componentes/Rodape';

function App() {

  const times =[
    {
      nome:'Programação',
      corDoFundo:'#D9F7E9',
      corDoCard:'#57C27B'
    },
    {
      nome:'Front End',
      corDoFundo:'#E8F8FF',
      corDoCard:'#82CFFA'
    },
    {
      nome:'Data Science',
      corDoFundo:'#F0F8E2',
      corDoCard:'#A6D157'
    },
    {
      nome:'Devops',
      corDoFundo:'#FDE7EB',
      corDoCard:'#E06B69'
    },
    {
      nome:'UX e Design',
      corDoFundo:'#FAE9F5',
      corDoCard:'#DB6EBF'
    },
    {
      nome:'Mobile',
      corDoFundo:'#FFF5D9',
      corDoCard:'#FFBA05'
    },
    {
      nome:'Inovação e Gestão',
      corDoFundo:'#FFEEDF',
      corDoCard:'#FF8A29'
    }
  ]

  const [colaboradores, setColaboradores] = useState([])

  const aoNovoColaboradorAdicionado = (colaborador) => {
    console.log(colaborador)
    setColaboradores([...colaboradores, colaborador])
  }

  return (
    <div className="App">
      <Banner />
      <Formulario nomesDosTimes={times.map(time =>time.nome)} aoColaboradorCadastrado={colaborador => aoNovoColaboradorAdicionado(colaborador)}/>
      {times.map(time => <Time 
                            key={time.nome}
                            nome={time.nome}
                            corDoFundo={time.corDoFundo}
                            corDoCard={time.corDoCard}
                            colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)}
                          />
                )
      }
      <Rodape />
    </div>
  );
}

export default App;
