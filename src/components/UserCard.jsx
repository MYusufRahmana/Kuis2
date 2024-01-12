import { useEffect } from "react";

const UserCard = ({nama,tahunLahir}) => {
    const umur = 2023 - tahunLahir;


    return(
        <div>
            <div>Nama: {nama}</div>
            <div>umur : {umur}</div>
        </div>
    )
}
export default UserCard;