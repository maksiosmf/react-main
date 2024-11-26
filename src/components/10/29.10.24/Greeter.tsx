type GreeterProps = {
    name?: string;
};

const Greeter = ({name = "N/A" }: GreeterProps) => {
    return <h1>Hello {name}!!!</h1>
};

export default Greeter;