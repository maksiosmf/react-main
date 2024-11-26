import { useRef } from "react";

export const RefExample = () => {
    const inputRef = useRef<any>();

    console.log(inputRef);

    return (
        <div>
            <input placeholder="Sigma" ref={inputRef}/>
            <button 
                type="button" 
                onClick={() => { 
                    if (inputRef.current) { 
                        inputRef.current.focus(); 
                    } 
                }}
            >
                Focus
            </button>
        </div>
    )
}