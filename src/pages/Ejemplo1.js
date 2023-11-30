import { EjemploProps1, EjemploProps2,EjemploProps3, EjemploProps4, EjemploProps5 } from "../components/Props";
const nombre2 =  'Pepito';
const frutas =['manzana', 'banana', 'palta', 'sandia']
const verduras= ['papa', 'zanahoria', 'acelga']

const mostrarValor = valor =>{
    console.log(valor)
}

const Ejemplo1 = (props) => {
    return (
        <div>
            <h2>Ejemplo de props</h2>
            {/* propiedad simple y reutilizable */}
            <EjemploProps1 nombre='Vero' />
            <EjemploProps1 nombre={nombre2} />
            <EjemploProps2 elementos={frutas} />
            <EjemploProps2 elementos={verduras} />
            <h4>Modelo de Noticia</h4>
            <EjemploProps3 titulo="Futbol Messi" subtitulo="Messi ganó otra copa" cuerpo="asafs  sdgdsg dgsd g sd  fg dsgsdgdgd" />
            <EjemploProps4 cambiarValor={mostrarValor} />
            <EjemploProps5 />
            <EjemploProps5 eventoClick={mostrarValor} />
        </div>
    )
}

export default Ejemplo1;