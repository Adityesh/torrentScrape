import React, { useState, useEffect } from 'react';
import Loader from './Loader';
import Torrent from './Torrent';

const Television = () : JSX.Element => {
    const [results, setResults] = useState([]);
    const [loading, setLoading] = useState(false);
    const [err, setErr] = useState('');

    const fetchHomePage = async ()  => {
        try {
            setLoading(true);
            const res = await fetch('http://localhost:5000/api/television');
            const data = await res.json();
            setResults(data);
            setLoading(false);
        } catch(err) {
            setLoading(false);
            setErr(err);
        }
    }


    useEffect(() => {
        fetchHomePage();
    },[])



    return(
        <>
            {loading ? <Loader/> : null}
            <div className="torrentContent" style={{overflowY : 'scroll', height: '100vh'}}>
            <h1 style={{textAlign : 'center', color : 'white'}}>Television</h1>
                {err ? <span>{err}</span> : results.map((item? : any) => {
                    return <Torrent seeds={item.seeds} size={item.size} name={item.name} date={item.date} url={item.url} peers={item.peers} key={item.name} />
                })}
            </div>
        </>
    )
}

export default Television;

