import Image from "next/image";

const Contact = () => {
    return (
        <div className="flex justify-between">
            <div className="w-full">
                <Image 
                    src='/contact.png'
                    alt="contact"
                    width={400}
                    height={400}
                />
            </div>
            <div className="w-full text-black ">
                <form action="" className="flex flex-col gap-4">
                    <input type="text" name="name" placeholder="Enter name.."
                        className="w-[80%] p-2 rounded-md outline-none border-none bg-[var(--bgSoft)]
                        "
                    />
                    <input type="text" name="name" placeholder="Email address.."
                        className="w-[80%] p-2 rounded-md outline-none border-none bg-[var(--bgSoft)]
                        "
                    />
                    <input type="text" name="name" placeholder="Phone number"
                        className="w-[80%] p-2 rounded-md outline-none border-none bg-[var(--bgSoft)]
                        "
                    />
                    <textarea type="text" rows='6' name="name" placeholder="message..."
                        className="w-[80%] p-2 rounded-md outline-none border-none bg-[var(--bgSoft)]
                        "
                    />
                    <button className="bg-[var(--btn)] w-[80%] p-2 rounded-md">Submit</button>
                </form>
            </div>
        </div>
    )
}
export default Contact;