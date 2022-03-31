
export default function NotaVerbal(props) {
    return (
        <>
            {/*1 a 3 = ruim - 4 a 6 = regular - 5 a 7 = bom - 7+ = Muito bom  */}
            < div className='notaVerbal' >
                {
                    props.nota === 10 ?
                        <>
                            Excelente
                        </>
                    : props.nota >= 8 ?

                        <>
                            Muito bom
                        </>

                    : props.nota <= 2 ?
                            
                        <>
                            Ruim
                        </>
                    : props.nota >= 3 && props.nota <= 5 ?
                        <>
                            Regular
                        </>
                    :
                    <>
                        Bom
                    </>

                }
            </div>
        </>
    )
}

