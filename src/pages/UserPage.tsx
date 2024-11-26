import { useEffect, useState } from "react"

export const UserPage = () => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        fetch("https://example.com/user")
            .then((res) => res.json())
            .then((data) => {
                setUser(data);
            });
    }, []);

    if (user === null) {
        return <div>No Data</div>
    }

    return (
        <div>
            <p>id: {user.id}</p>
            <p>firstName: {user.firstName}</p>
            <p>lastName: {user.lastName}</p>
        </div>
    );

}