/**
 * * Primero que realizamos, es el molde del contacto.
 * ? Pasamos los datos y su tipo. Por ejemplo, que contendrá un name de tipo string.
 */

export class Contact {
    name = '';
    age = 0;
    country = '';
    online = true;


    /**
     * * El constructor pasa las instrucciones cuando instanciemos en ContactComponent.
     * @param {name a ser construido cuando instanciemos} name 
     * @param {age a ser construido cuando instanciemos} age 
     * @param {country a ser construido cuando instanciemos} country 
     * @param {connected a ser construido cuando instanciemos} connected 
     */
    constructor(name, age, country, online) {
        this.name = name;
        this.age = age;
        this.country = country;
        this.online = online
    };
};