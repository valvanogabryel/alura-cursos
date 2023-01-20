import { useState } from 'react';
import Banner from './components/Banner';
import Form from './components/Form';
import Team from './components/Team';
import Footer from './components/Footer';

function App() {
  const [teams, setTeams] = useState([
    {
      name: 'Programação',
      color: '#57C278',
    },
    {
      name: 'Front-End',
      color: '#82CFFA',
    },
    {
      name: 'Data Science',
      color: '#A6D157',
    },
    {
      name: 'DevOps',
      color: '#E06B69',
    },
    {
      name: 'UX & Design',
      color: '#DB6EBF',
    },
    {
      name: 'Mobile',
      color: '#FFBA05',
    },
    {
      name: 'Inovação e Gestão',
      color: '#FF8A29',
    },
  ]);

  const [collaborators, setCollaborators] = useState([]);

  const teamsNames = teams.map(team => team.name);

  function deleteCollaborator() {
    console.log('deletando colaborador');
  }

  function changeTeamColor(color, name) {
    setTeams(teams.map(team => {
      if (team.name === name) {
        team.color = color;
      }
      return team;
    }));
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
          primary_color={team.color}
          secondary_color={team.color}
          collaborators={collaborators.filter(collaborator => collaborator.team === team.name)}
          onDelete={deleteCollaborator}
          changeColor={changeTeamColor}
        />
      )}
      <Footer />
    </div>
  );
}

export default App;