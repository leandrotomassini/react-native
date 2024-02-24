import { UserRow } from './';
import { useUser } from '../hooks';



export const UsersPage = () => {

    const { users, nextPage, prevPage } = useUser();


    return (
        <>
            <h3>Usuarios:</h3>

            <table>
                <thead>
                    <tr>
                        <th>Avatar</th>
                        <th>Nombre</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map(user => (
                            <UserRow
                                key={user.id}
                                user={user}
                            />
                        ))
                    }
                </tbody>
            </table>
            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
                <button onClick={prevPage} style={{ marginRight: '2px' }}>Prev</button>
                <button onClick={nextPage}>Next</button>
            </div>
        </>
    );
};


