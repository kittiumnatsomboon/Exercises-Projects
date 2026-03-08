type ButtonType = 'button' | 'submit' | 'reset';
interface typecomponent {
    type?:ButtonType
    value: string
    id: string
}
export default function Buttoncomponent(prop: typecomponent) {
    return (
        <>
            <button
                type={prop.type}
                id={prop.id}
                className="w-full px-5 py-3 text-base text-white transition 
                duration-300 ease-in-out border rounded-md 
                cursor-pointer border-primary bg-blue-500 hover:bg-blue-600"
            >
            {prop.value}
            </button>
        </>
    )
}