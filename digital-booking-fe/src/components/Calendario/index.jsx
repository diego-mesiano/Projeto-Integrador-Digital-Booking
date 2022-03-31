import './style.scss'
import pt from 'date-fns/locale/pt';
import { DateRange } from 'react-date-range';
import { useState, useEffect } from 'react';
import { useLogado } from '../../context/Logado';


export default function Calendario(props) {
    const {logado, setLogado} = useLogado({});
    
    const [state, setState] = useState([
        {
            startDate:logado.checkIn ? logado.checkIn : new Date(),
            endDate: logado.checkOut ? logado.checkOut : new Date(),
            key: 'selection'
        }
    ]);
    
    
    useEffect(()=>{
        state.map(({startDate, endDate})=>{
            return(
                setLogado((itens)=>({...itens, checkIn: startDate, checkOut: endDate}))
                
            )
        })
    },[setLogado,state])

    return (
        <div>
            {
                <DateRange
                    className='calendarioReserva'
                    editableDateInputs={true}
                    rangeColors={['#F0572D']}
                    dateDisplayFormat={'dd/MM/yyyy'}
                    startDatePlaceholder={'Check-in'}
                    endDatePlaceholder={'Check-out'}
                    showPreview={false}
                    minDate={new Date()}
                    onChange={item=>setState([item.selection])}
                    moveRangeOnFirstSelection={false}
                    months={props.meses}
                    ranges={state}
                    locale={pt}
                    direction={props.direcao}
                    disabledDates={[new Date('04-15-2022')]}
                    FocusedRange={[logado.checkIn, logado.checkOut]}
                />
            }
        </div>
    )
}