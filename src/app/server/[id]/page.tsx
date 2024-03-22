

interface Props {
    id: number
}

export default function Page(param : Props) {
    return (
        <div>
            <h1 className="text-center text-white text-3xl font-semibold">Pokemon number {param.id}</h1>
        </div>
    );

}