import React from 'react'

function AsyncExample() {

    async function generateNumber(){
        return 1; 
    }

    async function generatePromiseNumber(){
        return Promise.resolve(2)
    }

    function obtainNumber(){
        generateNumber()
            .then(response => alert(response))
            .catch(e => alert(`Something is wrong: ${e}`))
    }

    function obtainPromiseNumber() {
        generatePromiseNumber()
            .then(response => alert(response))
            .catch(e => alert(`Something is wrong: ${e}`))
    }


    async function saveSessionStorage(key, value){
        sessionStorage.setItem(key, value);

        return Promise.resolve(sessionStorage.getItem(key))
    
    }

    function showStorage(){
        saveSessionStorage('name', 'Axel')
            .then(response => {
                let value = response;
                alert(`Saved name: ${value}`)
            })
            .catch(e => alert(`ERROR: ${e}`))
            .finally(() => alert('The promise is executed. Its finally.'))
    }

    async function obtainMessage(){

        let promise = new Promise((resolve, reject) => {
            setTimeout(() => resolve('Hello world'), 2000)
        });

        let message = await promise

        await alert(`Message received: ${message}`)

    }

    const returnError = async() => {
        await Promise.reject(new Error('Oooops'))
    }

    const consumeError = () => {
        returnError()
            .then(response => alert(`Everything is OK: ${response}`))
            .catch(e => alert(`Error something is wrong: ${e}`))
            .finally(() => alert('Executed'))
    }

    const urlNotFound = async() =>  {

        try {
            let response = await fetch('https://invalidURL.com')
            alert(`Response: ${JSON.stringify(response)}`)
        } catch (error) {
            alert(`ERROR in URL is wrong: ${error}`)
        }

    }

    const multiplePromise = async() => {
        let results = await Promise.all(
            [
                fetch('https://reqres.in/api/users'),
                fetch('https://reqres.in/api/users?page=2')
            ]
        ).catch(e => {
            alert(`ERROR in URL is wrong: ${e}`)
        })
    }


  return (
    <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center',
    padding: '1rem', rowGap: '1rem'}}>
    <h1 style={{color: 'tomato'}}>Async, promises example ⬇️</h1>
        <button onClick={obtainNumber}>Obtain Number</button>
        <button onClick={obtainPromiseNumber}>Obtain promise number</button>
        <button onClick={showStorage}>Obtain session storage</button>
        <button onClick={obtainMessage}>Obtain message with timeout in 2 seconds</button>
        <button onClick={consumeError}>Obtain error</button>
        <button onClick={urlNotFound}>Fail request HTTP</button>
        <button onClick={multiplePromise}>Multiple Promises example</button>
    </div>
  )
}

export default AsyncExample