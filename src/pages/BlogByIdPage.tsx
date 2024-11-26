import { useParams } from 'react-router-dom';

export const BlogByIdPage = () => {
    const { id } = useParams();
    return (
        <div>
            <h1>BlogByIdPage</h1>
            <p>Id: {id}</p>
        </div>
    )

}
