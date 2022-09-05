import Link from 'next/link'

const countryIcon = "./images/japan.png";
const profileImage = "./images/takib.png";

function Bio() {
    return (
        <div className="mt-10 w-[75%] ml-48 flex justify-between">
            <div className="pt-16 w-[55%]">
                <div>
                    <p className="outfit font-semibold text-4xl">Md Takib Uddin</p>
                    <div className="flex items-center">
                        <img className='shadow-lg' src={countryIcon}></img>
                        <p className="manrope-light font-light text-sm">Tokyo, Japan</p>
                    </div>
                </div>
                <div className="mt-10">
                    <p className='manrope text-sm'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultrices ut ac a eget tellus cursus. Felis maecenas malesuada elit mauris. Justo, platea ac gravida turpis sed ornare ridiculus lobortis. Non, erat ac dictum lacus.
                    </p>
                </div>
                <div className='mt-6'>
                    <Link href="/about">
                        <a className="outfit hover:underline rounded-full border border-black p-3 pl-8 pr-8">Visit Portfolio</a>
                    </Link>
                </div>
            </div>
            <div className='relative w-[40%]'>
                <img className="absolute h-[500px] ml-24" src={profileImage}></img>
                <div className='rounded-3xl h-[400px] mt-[100px] bg-gradient-to-b from-[#74A0C1] to-[#DD8080]'>

                </div>
                <div>

                </div>
            </div>
        </div>
    )
}

export default Bio