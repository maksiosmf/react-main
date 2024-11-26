import { Link } from 'react-router-dom';
import { Links }  from '../constants/links';
import { useFridge } from '../contexts/useFridge';


export const HomePage = () => {
    useFridge();
    return (
        <div>
            <h1>HomePage</h1>
            <ul>
                <Link to={Links.LOGIN}>
                    <li>Login</li>
                </Link>

                <Link to={Links.REGISTER}>
                    <li>Register</li>
                </Link>

                <Link to={Links.TODOLIST}>
                    <li>ToDoList</li>
                </Link>

                <Link to={Links.USER}>
                    <li>User</li>
                </Link>
            </ul>
        </div>
    )
}