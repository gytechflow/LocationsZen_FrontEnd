import React, { useState, useEffect } from 'react';
import axios from 'axios';


// Composant Locataire
export default function Locataire() {
  // Initialisation du state "locataires" avec un tableau d'objets
  const [locataires, setLocataires] = useState();

  // Effectuer une requête GET pour récupérer tous les locataires depuis l'API
  useEffect(() => {
    const fetchLocataires = async () => {
      try {
        const response = await axios.get('http://localhost:5000/locataire');
        setLocataires(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchLocataires();
  }, []);

  // Fonction pour envoyer un message de facture à un locataire donné
  // Fonction pour envoyer un message de facture à un locataire donné
  function sendMessageFacture(index) {
    const locataire = locataires[index];
    const phoneNumber = encodeURIComponent(locataire.telephone);
    const name = encodeURIComponent(locataire.noms);
    const factureTotal = Number(locataire.factures?.[locataire.factures.length - 1]?.factureTotal);

    // Créez le message à envoyer
    const message = `Bonjour Mr/Mme ${name}, voici le montant de votre dernière facture : ${factureTotal} FCFA a payer dans un delai de 3 jours a compté de ce jour Merci`;

    // Ouvrir le lien WhatsApp avec le message prérempli
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, '_blank');
  }

  // Fonction pour envoyer un message de bail à un locataire donné
  function sendMessageBail(index) {
    const locataire = locataires[index];
    const phoneNumber =  encodeURIComponent(locataire.telephone); 
    const name = encodeURIComponent(locataire.noms);
    const dateDebut = encodeURIComponent(locataire.dateDebut);
    const dateFin = encodeURIComponent(locataire.dateFin);

    // Créez le message à envoyer
    const message = `Bonjour Mr/Mme ${name}, En gise de rappel votre contrat du ${dateDebut} prend fin ${dateFin}. Veillez s'il vous plait renouveler le contrat dans les brefs delais `;

    // Ouvrir le lien WhatsApp avec le message prérempli
    window.open(`https://wa.me/${'+237'+phoneNumber}?text=${encodeURIComponent(message)}`, '_blank');
  }

    // Fonction pour envoyer un message de bail à un locataire donné
    function modifierLocataire(index) {
      
    }

      // Fonction pour envoyer un message de bail à un locataire donné
  function supprimerLocataire(index) {
  }

  // Fonction pour formater la date de fin du bail en format "jour mois année"
  function formatDate(date) {
    return new Date(date).toLocaleDateString('fr-FR', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });
  }

  // Rendu du composant Locataire
  return (
    <div>
      <h1>Locataires</h1>
      <table>
        <thead>
          <tr>
            <th>numero</th>
            <th>Noms</th>
            <th>Téléphone</th>
            <th>Cni</th>
            <th>Loyers</th>
            <th>Statut</th>
            <th>Facture</th>
            <th>Date de fin du bail</th>
            <th>Message</th>
            <th>Action</th>

          </tr>
        </thead>
        <tbody>
          {locataires &&
            locataires.map((locataire, index) => (
              <tr key={index}>
                <td>{locataire.numeroLogement}</td>
                <td>{locataire.noms}</td>
                <td>{locataire.telephone}</td>
                <td>{locataire.cni}</td>
                <td>{locataire.montantLoyer}</td>
                <td>{locataire.statut ? 'Payée' : 'En attente'}</td>
                <td>{Number(locataire.factures?.[locataire.factures.length - 1]?.factureTotal)}</td>
                <td>{formatDate(locataire.dateFin)}</td>
                <td>
                  <button onClick={() => sendMessageFacture(index)}>
                    Envoyer facture
                  </button>
                  <button onClick={() => sendMessageBail(index)}>
                    Envoyer bail
                  </button>
                </td>
                <td>
                  <button onClick={() => modifierLocataire(index)}>
                    Renouveler
                  </button>
                  <button onClick={() => supprimerLocataire(index)}>
                    Supprimer
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}
