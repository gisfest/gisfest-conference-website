import { PEditionCard } from "@/config/types"

const PastEditionCard = ({ session } : PEditionCard) => {
    return (
        <>
        <div className="flex flex-col items-center text-center">
            <div className="relative overflow-hidden w-[373px] h-[209px] ring-1 ring-tc-10 rounded-2xl flex flex-col gap-4 tablet:gap-8">
                <iframe src={session.link}
                    className="absolute top-0 left-0 w-full h-full"
                >

                </iframe>
            </div>
            </div>
        </>
    
    )
}

export default PastEditionCard