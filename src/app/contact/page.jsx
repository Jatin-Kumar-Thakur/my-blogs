import Image from "next/image";

const Contact = () => {
    return (
        <div className="flex justify-between items-center">
            <div className="w-full hidden md:block">
                <Image 
                    src='/contact.png'
                    alt="contact"
                    width={400}
                    height={400}
                />
            </div>
            <div className="w-full text-black">
                <h1 className="text-white text-4xl mb-5 text-center font-semibold">Have any query?</h1>
                <form action="" className="flex flex-col justify-center items-center gap-4 w-full">
                    <input type="text" name="name" placeholder="Name"
                        className="w-full sm:w-[80%] p-2 rounded-md outline-none border-none bg-[var(--bgSoft)]
                        "
                    />
                    <input type="text" name="name" placeholder="Email"
                        className="w-full sm:w-[80%] p-2 rounded-md outline-none border-none bg-[var(--bgSoft)]
                        "
                    />
                    <input type="text" name="name" placeholder="Phone number"
                        className="w-full sm:w-[80%] p-2 rounded-md outline-none border-none bg-[var(--bgSoft)]
                        "
                    />
                    <textarea type="text" rows='6' name="name" placeholder="Message.."
                        className="w-full sm:w-[80%] p-2 rounded-md outline-none border-none bg-[var(--bgSoft)]
                        "
                    />
                    <button className="bg-[var(--btn)] w-full sm:w-[80%] p-2 rounded-md">Submit</button>
                </form>
            </div>
        </div>
    )
}
export default Contact;