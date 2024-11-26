// import { useState, type FormEvent } from "react";
// import { useForm } from "react-hook-form";

// /*
// Stwórz nowy ekran w registerPage który bedzie zawieral takie inputy jak email, username, password, confirmPassword oraz przycisk register
// */ 
// export const LoginPage = () => {
//     // Wariant Stan = input
//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");

//     // Wariant drugi, jeden stan dla wszystkich inputow
//     const [formState, setFormState] = useState<Record<string, string>>({});
//     const onSubmit = (event: FormEvent) => {
//         event.preventDefault();

//         // walidacja
//         // sprawdzenie, czy email i haslo nie sa puste

//         // zapytanie do api
//         console.log("test", {
//             email,
//             password
//         });
//     }
//     return (
//         <div>
//             <h1>Login Page</h1>
//             <form onSubmit={onSubmit}>
//                 {/* <input placeholder="Type your email" type="email" value={email} onChange={(event) => {setEmail(event.target.value)}}/> */}
//                 <input placeholder="Type your email" type="email" value={formState.email || ""} 
//                 onChange={(event) => {
//                     const { target: { value } } = event;
//                     setFormState((prevFormState) => ({
//                         ...prevFormState,
//                         email: value
//                     }));
//                 }}/>
//                 {/* <input placeholder="Type your password" type="password" value={password} onChange={(event) => {setPassword(event.target.value)}}/> */}
//                 <input placeholder="Type your password" type="password" value={formState.password || ""} onChange={(event) => {
//                     const { target: { value } } = event;
//                     setFormState((prevFormState) => ({
//                         ...prevFormState,
//                         password: value
//                     }));
//                 }}/>
//                 <button type="submit">Login</button>
//             </form>
//         </div>
//     )
// }



// 06.11.24
import { useState, type FormEvent, type ChangeEvent } from "react";
import { useForm } from "react-hook-form";


/**
 * Stwórz nowy ekran RegisterPage, ktory bedzie zawieral takie inputy jak, email, username, password, confirmPassword
 * oraz przycisk register
 */

export const LoginPage = () => {
    // Wariant stan = input
    //   const [email, setEmail] = useState("");
    //   const [password, setPassword] = useState("");

    //   Wariant drugi, jeden stan dla wszystkich inputów
    const { register, handleSubmit, formState: { errors } } = useForm({});

    const onSubmit = (data) => {
        console.log(data);
    }

    return (
        <div>
            <h1>Login Page</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input
                type="email"
                placeholder="Type your email..."
                {...register("email", {
                    required: true,
                    pattern: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,6}$/
                })}
                />
                <input
                placeholder="Type your password"
                type="password"
                {...register("password")}
                />
                <button type="submit">Login</button>
            </form>
        </div>
    );
};