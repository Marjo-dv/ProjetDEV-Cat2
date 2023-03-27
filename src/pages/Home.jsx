import '../styles/HomeStyle.css'
import catanim from '../styles/animations/catanim.json'
import { useEffect, useState } from 'react'
import axios from 'axios'


function Home () {

  const [cat, setCat] = useState()

  const loadData = async () => {
    const response = await axios.get('https://api.thecatapi.com/v1/images/search?has_breeds=1&api_key=live_mtl9hrEB87yKSbY11iXEkgFZtnsMeZtj2VhYQIJkQNOnRwIJkMleFZlmgHLyDF7p')
    if (response.status === 200) {
      const data = response.data[0]
      setCat(data)
    }
  }

  const handleClick = () => {
    loadData(); 
  }

useEffect(() => {
  loadData();
}, [])

  return cat && ( 
    <>
      <div className="header">
        <h1>Le saviez-vous ?</h1>
        <h1>Version : Les chats 🐈</h1>
      </div>
      <button onClick={handleClick}>
        Changer de chat 🐱
      </button>
      <br/>
      <h2><i>CARTE D'IDENTITÉ DU CHAT :</i></h2>
      <div className="home">
        <div className='card-cat'>
          <img src={cat.url}></img>
          <h3>{cat.breeds[0].name}</h3>
          <p><span>Origine :</span> {cat.breeds[0].origin}</p>
          <p><span>Durée de vie en moyenne :</span>  Entre {cat.breeds[0].life_span} ans</p>
          <p><span>Caractère :</span> {cat.breeds[0].temperament}</p>
          <p><span>Description :</span> {cat.breeds[0].description}</p>
        </div> 
        
        {/*<pre>{JSON.stringify(cat)}</pre>}*/}
        
      
      </div>
      <div className='tab-cat'>
      <table>
        <tr>
          <th>Critère</th>
          <th>Évaluation sur 5</th>
        </tr>
        <tr>
          <td>Adaptibilité</td>
          <td>{cat.breeds[0].adaptability}/5</td>
        </tr>
        <tr>
          <td>Intelligence</td>
          <td>{cat.breeds[0].intelligence}/5</td>
        </tr>
        <tr>
          <td>Niveau d'affection</td>
          <td>{cat.breeds[0].affection_level}/5</td>
        </tr>
        <tr>
          <td>Adapté avec les enfants</td>
          <td>{cat.breeds[0].child_friendly}/5</td>
        </tr>
        <tr>
          <td>Niveau de cohabitation avec un chien</td>
          <td>{cat.breeds[0].dog_friendly}/5</td>
        </tr>
        <tr>
          <td>Problème de santé</td>
          <td>{cat.breeds[0].health_issues}/5</td>
        </tr>
        <tr>
          <td>Chauve</td>
          <td>{cat.breeds[0].hairless}/5</td>
        </tr>
        <tr>
          <td>Rareté</td>
          <td>{cat.breeds[0].rare}/5</td>
        </tr>
        </table>
      </div>
    </>

   );
}

export default Home ;
