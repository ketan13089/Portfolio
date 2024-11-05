import React,{useState,useEffect} from 'react'

export default function useScrollProgress() {
    const [progress , setProgresss] = useState(0);

    useEffect(()=>{
        const handleScroll = () =>{
            const totalHeight = document.getElement.scrollHeight - window.innerHeight;
            const progress = (window.scrollY/totalHeight)*100;
            setProgresss(progress);
        };

        window.addEventListener('scroll',handleScroll);
        return() => window.removeEventListener('scroll',handleScroll);
    },[]);
    
  return progress;
}
