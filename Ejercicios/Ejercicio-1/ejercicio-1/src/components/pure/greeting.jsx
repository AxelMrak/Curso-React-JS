import React, { Component } from 'react';
import PropTypes from 'prop-types';

//USAR MAYUSCULAS EN NOMBRE DE CLASE
//COMPONENTE TIPO CLASE (NO MUY USADO)
class Greeting extends Component {

    constructor(props) {
        super(props);
        this.state = { //El state es informacion  privada que utilizara el objeto para mostrar algo o hacer algo.
            age: 22 //Damos una edad con un numero definido.
        };
    };  //Le estamos pasando propiedades. Por ejemplo, en un elemento HTML nosotros le pasamos el alt o ruta de una imagen, a un boton el texto, etc. PROPIEDADES O ATRIBUTOS. DEFINIMOS QUE DATOS LE PODEMOS PASAR PARA QUE PINTE ALGO. Aca cumplimos en que tenemos los componentes de orden superior con datos, que se las pasan a los de orden inferior que hacen uso de ello.


    render() {
        return (
            <div>
                <h1>Hello {this.props.name}! </h1>
                {/* Agregamos codigo JS en el elemento HTML diciendo que de las propiedades, de estas propiedades que recibo, voy a pintar a mostrar el nombre. Este dato me sera dado por el app.js, sino pasamos nada se mostrara un espacio vacio al lado de hello. ES UNA PROPIEDAD */}
                <h2>Age: {this.state.age}</h2>
                {/* Mostraremos tambien la informacion privada en un h2, esta informacion es propia del componente y es inmutable y no se puede ver desde afuera. ES UN ESTADO. BUSCAR MAS INFORMACION */}
                <div>
                    <button onClick={this.birthday}> 
                    {/* Agregamos un div con un boton. Dentro del boton agregamos un evento onClick que ejecutara el metodo birthday para regeberar el estado de AGE */}
                        Be more older
                    </button>
                </div>
            </div>
        );
    }

    birthday = () => { //Funcion para cambiar estado. Debe ser tipo flecha para poder acceder al THIS y que no se tome como referencia a las propiedades que pasamos al parentesis. Este va a simular que cumple años.
        this.setState((prevState) => ( //Tomo el estado previo.
            (
                { //OBJETO CON EL AGE, que devolvera otro estado NUEVO ESTADO QUE REGENERA. AL REGENERAR EL ESTADO ESTO TAMBIEN HACE QUE LA PAGINA SE RENDERICE DE NUEVO PARA MOSTRAR EL NUEVO NUMERO.
                    age: prevState.age + 1  //Esta funcion o metodo se podria llamar con un boton que cada vez que se apriete cambie el estado. 
                }
            )
        ));

    }
};

Greeting.propTypes = {
    name: PropTypes.string,
    // Aclaramos que la prop name sea un tipo string si o si.
}

export default Greeting;