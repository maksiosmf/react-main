import { useEffect, useState } from 'react';
const API = "https://jsonplaceholder.typicode.com/photos";
export const PhotoPage = () => {
    const PhotoPage = () => {
        const [data, setData] = useState<any[] | null>(null);

        useEffect(() => {
            const fetchData = async () => {
                const response = await fetch(API);
                const newdata = await response.json();
                setData(newdata);
            };
            fetchData();
        }, []);

        return (
            <>
                <h1>
                    {data ? data.map((photo: any) => <h1 key={photo.id}> {photo.title} </h1>) : "Loading..."}
                </h1>¬``
            </>
        );
    };
}
export default PhotoPage;