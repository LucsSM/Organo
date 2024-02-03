import Colaborador from '../Colaborador'
import './Time.css'

const Time = (props) => {

    const corDoFundo = {backgroundColor: props.corDoFundo}

    return (
        (props.colaboradores.length > 0) && <section className="time" style={corDoFundo}>
            <h3 style={{borderColor: props.corDoCard}}>{props.nome}</h3>
            <div className="colaboradores">
                {props.colaboradores.map(colaborador => <Colaborador
                    corDoCard={props.corDoCard}
                    key={colaborador.nome}
                    nome={colaborador.nome} 
                    cargo={colaborador.cargo} 
                    imagem={colaborador.imagem} 
                />)}
            </div>
        </section>
    )
}

export default Time