// Importation de la bibliothèque useState
import { useState } from 'react';

// Composant Locataire
export default function Locataire() {
  // Initialisation du state "locataires" avec un tableau d'objets
  const [locataires, setLocataires] = useState([
    {
      nom: 'John Doe',
      tel: '555-1234',
      chambre: '101',
      statutFacture: true,
      montantFacture: '7450',
      dateFinBail: '2023-08-31'
    },
    {
      nom: 'Jane Smith',
      tel: '555-5678',
      chambre: '102',
      statutFacture: false,
      montantFacture: '12450',
      dateFinBail: '2022-10-31'
    },  
  ]);

  // Fonction pour envoyer un message de facture à un locataire donné
  function sendMessageFacture(index) {
    alert(`Message de facture envoyé à ${locataires[index].nom}`);
  }

  // Fonction pour envoyer un message de bail à un locataire donné
  function sendMessageBail(index) {
    alert(`Message de bail envoyé à ${locataires[index].nom}`);
  }

  // Rendu du composant Locataire
  return (
    <div>
      <h1>Locataires</h1>
      <table>
        <thead>
          <tr>
            <th>Nom</th>
            <th>Téléphone</th>
            <th>Chambre</th>
            <th>Montant facture</th>
            <th>Statut de facture</th>
            <th>Date de fin du bail</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {locataires.map((locataire, index) => (
            <tr key={index}>
              <td>{locataire.nom}</td>
              <td>{locataire.tel}</td>
              <td>{locataire.chambre}</td>
              <td>{locataire.montantFacture}</td>
              <td>{locataire.statutFacture ? 'Payée' : 'En attente'}</td>
              <td>{locataire.dateFinBail}</td>
              <td>
                <button onClick={() => sendMessageFacture(index)}>Envoyer facture</button>
                <button onClick={() => sendMessageBail(index)}>Envoyer bail</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
