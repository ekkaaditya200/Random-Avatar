
import { useEffect, useState } from 'react'
import './App.css'
function App() {
  const [image, setImage] = useState("");
  const findImage = async () => {
    let random_num = Math.random() * 100;
    try {
      const res = await fetch(`https://api.dicebear.com/7.x/avataaars/svg?seed=${random_num}&backgroundColor=b6e3f4&radius=50&eyebrows=default&eyes=default&accessories=prescription01,prescription02&mouth=twinkle`)
      setImage(res.url);
    } catch (error) {
      console.log(error);
    }
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    findImage();
  }
  useEffect(()=>{
    if (!image){
      findImage();
    }
  },[])
  return (
    <>
      <form onSubmit={handleSubmit}>
        <button type='submit'>Search</button>
      </form>
      <img className={{
        width: '100px',
        height: '100px'
      }} src={image} alt="Avatar" />
    </>
  )
}

export default App
