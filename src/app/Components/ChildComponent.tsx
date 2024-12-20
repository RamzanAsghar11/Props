const ChildComponent = (props: any) => {
    console.log(props)
    return (
        <div className="text-center w-full h-screen">
            <h1 className="text-7xl"> Name {props.name}</h1>
            <br />
            <h2 className="text-3xl">Age {props.age}</h2>
        </div>
    )
}

export default ChildComponent