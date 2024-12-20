import ChildComponent from "./ChildComponent"

const ParentComponent = () => {
    let name = "Ali Jawwad"
    name ="Ramzan"
    let age= "25"
    

    return (
        <div className="mt-10">
            <ChildComponent name={name} age={age} />
        </div>
    )
}

export default ParentComponent