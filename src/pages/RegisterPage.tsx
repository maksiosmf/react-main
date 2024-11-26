// import { useState, type FormEvent } from "react";
// /*
// Stwórz nowy ekran w registerPage który bedzie zawieral takie inputy jak email, username, password, confirmPassword oraz przycisk register
// */


// export const RegisterPage = () => {
//     const [email, setEmail] = useState("");
//     const [username, setUsername] = useState("");
//     const [password, setPassword] = useState("");
//     const [confirmPassword, setConfirmPassword] = useState("");

//     const onSubmit = (event: FormEvent) => {
//         event.preventDefault();
//         if (password !== confirmPassword) {
//             alert("Passwords do not match!");
//             return;
//         }
//         console.log("Registering user", {
//             email,
//             username,
//             password
//         });
//     }

//     return (
//         <div>
//             <h1>Register Page</h1>
//             <form onSubmit={onSubmit}>
//                 <input 
//                     placeholder="Type your email" 
//                     type="email" 
//                     value={email} 
//                     onChange={(event) => setEmail(event.target.value)} 
//                 />
//                 <input 
//                     placeholder="Type your username" 
//                     type="text" 
//                     value={username} 
//                     onChange={(event) => setUsername(event.target.value)} 
//                 />
//                 <input 
//                     placeholder="Type your password" 
//                     type="password" 
//                     value={password} 
//                     onChange={(event) => setPassword(event.target.value)} 
//                 />
//                 <input 
//                     placeholder="Confirm your password" 
//                     type="password" 
//                     value={confirmPassword} 
//                     onChange={(event) => setConfirmPassword(event.target.value)} 
//                 />
//                 <button type="submit">Register</button>
//             </form>
//         </div>
//     );
// };



// // 06.11.25

import { useForm, type SubmitHandler } from "react-hook-form";

type FormValues = {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
};

export const RegisterPage = () => {
  // const [formState, setFormState] = useState<Record<string, string>>({});
  const { register, handleSubmit } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log(data);
    // strzelac do backendu
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register("username", {
            required: "pole wymagane",
          })}
        />
        <input
          {...register("email", {
            required: "pole wymagane",
          })}
        />
        <input
          {...register("password", {
            required: "pole wymagane",
          })}
        />
        <input
          {...register("confirmPassword", {
            required: "pole wymagane",
          })}
        />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};
