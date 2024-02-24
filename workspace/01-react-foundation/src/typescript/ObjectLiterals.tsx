interface Person {
    firstName: string;
    lastName: string;
    age: number;
    address: Address;
    isAlive?: boolean;
}

interface Address {
    country: string;
    houseNo: number;
}


export const ObjectLiterals = () => {

    const person: Person = {
        firstName: 'Leandro',
        lastName: 'Tomassini',
        age: 31,
        address: {
            country: 'Argentina',
            houseNo: 800
        }
    };


    return (
        <>
            <h3>Objetos literales</h3>
            <pre>
                {JSON.stringify(person, null, 2)}
            </pre>
        </>
    );
}
