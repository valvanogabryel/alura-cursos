import { useState } from 'react';
import Banner from './components/Banner';
import Form from './components/Form';
import Team from './components/Team';
import Footer from './components/Footer';

function App() {
  const teams = [
    {
      name: 'Programação',
      primaryColor: '#57C278',
      secondaryColor: '#D9F7E9'
    },
    {
      name: 'Front-End',
      primaryColor: '#82CFFA',
      secondaryColor: '#E8F8FF'
    },
    {
      name: 'Data Science',
      primaryColor: '#A6D157',
      secondaryColor: '#F0F8E2'
    },
    {
      name: 'DevOps',
      primaryColor: '#E06B69',
      secondaryColor: '#FDE7E8'
    },
    {
      name: 'UX & Design',
      primaryColor: '#DB6EBF',
      secondaryColor: '#FAE9F5'
    },
    {
      name: 'Mobile',
      primaryColor: '#FFBA05',
      secondaryColor: '#FFF5D9'
    },
    {
      name: 'Inovação e Gestão',
      primaryColor: '#FF8A29',
      secondaryColor: '#FFEEDF'
    },
  ];

  const teamsNames = teams.map(team => team.name);

  const [collaborators, setCollaborators] = useState([]);

  function deleteCollaborator() {
    console.log('deletando colaborador');
  }

  const registerNewCollaborator = (collaborator) => {
    setCollaborators([...collaborators, collaborator]);
  }

  return (
    <div className="App">
      <Banner src="/imagens/banner.png" alt="Banner principal da Organo" />
      <Form onRegisterCollaborator={collaborator => registerNewCollaborator(collaborator)} teams={teamsNames} />

      <h1 className='organization__title'>Minha Organização:</h1>
      <span className='organization__line line'>-</span>

      {teams.map((team, index) =>
        <Team
          name={team.name}
          key={index}
          primary_color={team.primaryColor}
          secondary_color={team.secondaryColor}
          collaborators={collaborators.filter(collaborator => collaborator.team === team.name)}
          onDelete={deleteCollaborator}
        />
      )}
      <Footer />
    </div>
  );
}

export default App;