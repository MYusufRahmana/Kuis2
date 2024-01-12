import React, { useEffect, useState } from "react";

const InputForm = () => {
    const [nama, setNama] = useState("");
    const [umur, setUmur] = useState(0);

const handleSetNama = (e)=>{
    setNama(e.target.value);
}
const handleSetUmur = (e)=>{

    setUmur(e.target.value);
    if(e.target.value>100){
        setUmur(100);
    }else{
        setUmur(e.target.value)
    }
}



//     useEffect(()=>{
//         console.log(nama,umur)
// }, [nama,umur])

    const PrintNama = () => {
        
        console.log(nama.length)
        if(nama.length == 0 ){
            alert ("Harus Mengisi Nama")
        }else if (umur == 0){
            alert("Harus mengisi umur")
        }else {
             alert(`nama saya : ${nama} \n umur ${umur}`);

        }

    };

    return (
        <div>
            <div>Nama: {nama} </div>
            <div>
                <input onChange={handleSetNama} /></div>
            <div>Umur: {umur} </div>
            <input type="number" value={umur} onChange={handleSetUmur} />
            <div>
                <button onClick={PrintNama}>Print</button>
            </div>
        </div>
    );
};

export default InputForm;
