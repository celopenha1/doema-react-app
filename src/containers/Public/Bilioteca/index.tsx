import { useLocation } from 'react-router-dom';

export function Biblioteca(props: any){
    const location = useLocation();

    
    console.log(location.state)

    return(
        <h1>Biblioteca</h1>
    )
}