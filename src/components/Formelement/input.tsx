interface elementtype{
    
}
export default function Inputcomponent() {
    return (
        <>
            <input
                type="text"
                placeholder="Name"
                className="w-full px-5 py-3 text-base transition bg-transparent border rounded-md outline-hidden border-stroke dark:border-dark-3 text-body-color dark:text-dark-6 placeholder:text-dark-6 focus:border-primary dark:focus:border-primary focus-visible:shadow-none"
            />
        </>
    )
}