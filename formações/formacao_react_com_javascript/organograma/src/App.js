import { useState } from 'react';
import Banner from './components/Banner';
import Form from './components/Form';

function App() {
  const [collaborators, setCollaborators] = useState([]);

  const registerNewCollaborator = (collaborator) => {
    setCollaborators([...collaborators, collaborator]);
  }

  return (
    <div className="App">
      <Banner src="/imagens/banner.png" alt="Banner principal da Organo" />
      <Form onRegisterCollaborator={collaborator => registerNewCollaborator(collaborator)} />
    </div>
  );
}

export default App;
