import React  from 'react';
import { useState } from 'react';
import axios from 'axios';

export default function Contrat() {
  const [noms, setNoms] = useState('');
  const [prenoms, setPrenoms] = useState('');
  const [dateDebut, setDateDebut] = useState('');
  const [dateFin, setDateFin] = useState('');
  const [montantLoyer, setMontantLoyer] = useState(0);
  const [dureeContrat, setDureeContrat] = useState(0);
  const [caution, setCaution] = useState(0);
  const [telephone, setTelephone] = useState('');
  const [numeroChambre, setNumeroChambre] = useState('');
  const [newIndex, setNewIndex] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    const nbMois = getNbMois(dateDebut, dateFin);
    const montantTotal = nbMois * montantLoyer;
    const cautionTotal = 2 * montantLoyer;

    //  envoies des données au serveur Api

    try {
      const response = await axios.post('https://example.com/api/contrats', {
        noms,
        prenoms,
        dateDebut,
        dateFin,
        montantLoyer,
        dureeContrat: nbMois,
        caution,
        montantTotal,
        cautionTotal,
        telephone,
        numeroChambre,
        newIndex,
      });
  // affichage de la réponse du serveur
      console.log(response.data); 
    } catch (error) {
      // affichage des erreurs éventuelles
      console.error(error); 
    }

  };

  

  const getNbMois = (dateDebut, dateFin) => {
    // TODO: calculer le nombre de mois entre les deux dates
    
    const getNbMois = (dateDebut, dateFin) => {
      const debut = new Date(dateDebut);
      const fin = new Date(dateFin);
    
      const diff = fin.getTime() - debut.getTime();
      const mois = diff / (1000 * 60 * 60 * 24 * 30); // conversion en mois
    
      return Math.ceil(mois); // arrondi supérieur pour éviter les décimales
    };

  };

  return (
    <div className='contrat'>
    <form onSubmit={handleSubmit} className="contrat-form">
      <div className="form-group">
        <label htmlFor="noms">Noms:</label>
        <input
          id="noms"
          type="text"
          value={noms}
          onChange={(event) => setNoms(event.target.value)}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="prenoms">Prénoms:</label>
        <input
          id="prenoms"
          type="text"
          value={prenoms}
          onChange={(event) => setPrenoms(event.target.value)}
          required
        />
      </div>

      <div className="form-group">
          <label htmlFor="telephone">Téléphone:</label>
          <input
            id="telephone"
            type="tel"
            value={telephone}
            onChange={(event) => setTelephone(event.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="numeroChambre">Numéro de chambre:</label>
          <input
            id="numeroChambre"
            type="text"
            value={numeroChambre}
            onChange={(event) => setNumeroChambre(event.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="newIndex">Index du locataire:</label>
          <input
            id="newIndex"
            type="number"
            value={newIndex}
            onChange={(event) => setNewIndex(event.target.value)}
            required
          />
        </div>

      <div className="form-group">
        <label htmlFor="dateDebut">Date de début:</label>
        <input
          id="dateDebut"
          type="date"
          value={dateDebut}
          onChange={(event) => setDateDebut(event.target.value)}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="dateFin">Date de fin:</label>
        <input
          id="dateFin"
          type="date"
          value={dateFin}
          onChange={(event) => setDateFin(event.target.value)}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="montantLoyer">Montant du loyer:</label>
        <input
          id="montantLoyer"
          type="number"
          value={montantLoyer}
          onChange={(event) => setMontantLoyer(parseFloat(event.target.value))}
          required
        />
      </div>

      <button type="submit">Ajouter</button>
    </form>
    </div>
  );
}
