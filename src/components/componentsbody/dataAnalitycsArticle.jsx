import React, { useState } from "react";
import '../../css/App.css';
import '../../css/body.css';
import ListaDiezUsuarios from './ListaDiezUsuarios'
import ButtonPrevNext from "./ButtonPrevNext";

function DataAnalyticsArticle(props) {

    const { p, leng,arrayUsers} = props;

    //paginado
    const usersPorPagina = 10;
    const [users, setUsers] = useState(arrayUsers)
    const [items, setItems] = useState([...arrayUsers].splice(0, usersPorPagina))
    const [currentPage, setCurrentPage] = useState(0)

    const nextHandler = () => {
        const totalElementos = users.length;

        const nextPage = currentPage + 1;
        const firstIndex = nextPage * usersPorPagina

        if (firstIndex >= totalElementos) {
            return;
        }

        setItems([...users].splice(firstIndex, usersPorPagina))
        setCurrentPage(nextPage)

    }

    const prevHandler = () => {
        const prevPage = currentPage - 1

        if (prevPage < 0) return;

        const firstIndex = prevPage * usersPorPagina
        setItems([...users].splice(firstIndex, usersPorPagina))
        setCurrentPage(prevPage)
    }


    return (
        <article className="article1">

            <div className='container-p'>
                <p className='title'>{p}</p>
            </div>

            <ListaDiezUsuarios arrayUsers={items} />

            <ButtonPrevNext prevHandler={prevHandler} nextHandler={nextHandler} currentPage={currentPage} leng={leng} />

        </article>
    );
}

export default DataAnalyticsArticle;