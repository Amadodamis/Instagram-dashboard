import React, { useState } from "react";
import '../../css/App.css';
import '../../css/body.css';
import ListaDiezUsuarios from './ListaDiezUsuarios'

function DataAnalyticsArticle(props) {
    let ant = "<< Anterior"
    let sig = " Siguiente >>"
    const { p } = props;


    //paginado
    const usersPorPagina = 10;
    const [users, setUsers] = useState(props.arrayUsuariosHardCoded)
    const [items, setItems] = useState([...props.arrayUsuariosHardCoded].splice(0, usersPorPagina))
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

            <div className='container-ant-sig'>
                <button className='button-prev-next' onClick={prevHandler}> {ant} </button>
                {/* {currentPage} */}
                <button className='button-prev-next' onClick={nextHandler}> {sig} </button>
            </div>

        </article>
    );
}

export default DataAnalyticsArticle;