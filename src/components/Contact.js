
const Contact = () => {
    return (
        <div>
            <div className="bg-gray-300 flex flex-col items-center gap-1 mx-90 py-5 rounded-2xl my-10">
                <h1 className="text-4xl font-bold text-gray-900">📞 Contact us.</h1>
                <p className="text-lg font-semibold text-gray-700">Have questions? Fill out the form below or reach us at:</p>
                <p className="text-lg font-semibold text-gray-700">kshitizsharma.174@gmail.com | +91 8439689697</p>
                <form action={"/submit"}>
                    <div>
                        <label className="font-bold text-lg text-gray-700 " htmlFor="userName">Name</label>
                        <br/>
                        <input  className="border-2 rounded-lg px-80 p-2" id="userName" type="text" name="userName" placeholder="Enter your name" required />
                    </div>

                    <div>
                        <label className="font-bold text-lg text-gray-700 " htmlFor="email">Email</label>
                        <br/>
                        <input className="border-2 rounded-lg px-80 p-2" id="email" type="email" name="email." placeholder="Enter your email" required />
                    </div>

                    <div>
                        <label className="font-bold text-lg text-gray-700 " htmlFor="message">Message</label>
                        <br/>
                        <input className="border-2 rounded-lg px-80 p-2" id="message" type="text" name="message" placeholder="Write your message...." required />
                    </div>
                </form>
                <button className="m-2 p-4 bg-yellow-400 font-bold cursor-pointer border-solid-1 shadow-xl shadow-amber-300 rounded-lg hover:bg-amber-700">
                    Write your message...
                </button>
            </div>
        </div>
    )
}
export default Contact;