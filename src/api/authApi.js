import axios from 'axios';

// Fonction pour l'enregistrement ou l'authentification
export const postAuth = async (values) => {
  try {
    // Envoie des données à l'API pour créer un utilisateur
    const response = await axios.post('http://localhost:4000/auth/register', {
      ...values,
    });
    return response.data; // Retourne les données de la réponse si succès
  } catch (error) {
    // Gère les erreurs et affiche un message détaillé dans la console
    console.error('Erreur dans postAuth:', error.message);
    if (error.response) {
      console.error('Détails de l\'erreur :', error.response.data);
    }
    throw error; // Relance l'erreur pour être traitée ailleurs
  }
};

// Fonction pour récupérer les informations de l'utilisateur connecté

export const fetchaccount = async()=>{
  const token = localStorage.getItem('token')
  const {data} = await axios.get('http://localhost:4000/auth/myaccount',{headers:{Authorization:token}})
return data 
}