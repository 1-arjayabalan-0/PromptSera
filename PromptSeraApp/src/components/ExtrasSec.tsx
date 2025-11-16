export const ExtrasSec = () => {
    return (
        <>
            <main>

                <section className="flex flex-col gap-8 px-4 items-center mt-20 mb-20">
                    <h2 className="text-white text-2xl sm:text-3xl font-bold leading-tight tracking-[-0.015em] text-center">Powerful Features, Simple Interface</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full">
                        <div className="flex flex-col gap-2 p-4 rounded-xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent backdrop-blur-sm"><span className="material-symbols-outlined text-primary">transform</span><h3 className="font-bold text-white">Thought → Prompt Converter</h3><p className="text-sm text-gray-400">Instantly turn raw ideas into structured prompts.</p></div>
                        <div className="flex flex-col gap-2 p-4 rounded-xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent backdrop-blur-sm"><span className="material-symbols-outlined text-primary">view_quilt</span><h3 className="font-bold text-white">Image / Text / Code Modes</h3><p className="text-sm text-gray-400">Optimized outputs for any type of AI generation.</p></div>
                        <div className="flex flex-col gap-2 p-4 rounded-xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent backdrop-blur-sm"><span className="material-symbols-outlined text-primary">palette</span><h3 className="font-bold text-white">Tone &amp; Style Options</h3><p className="text-sm text-gray-400">Adjust the prompt to match your desired output style.</p></div>
                        <div className="flex flex-col gap-2 p-4 rounded-xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent backdrop-blur-sm"><span className="material-symbols-outlined text-primary">auto_awesome</span><h3 className="font-bold text-white">Prompt Enhancer</h3><p className="text-sm text-gray-400">Make prompts detailed, concise, or creative.</p></div>
                        <div className="flex flex-col gap-2 p-4 rounded-xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent backdrop-blur-sm"><span className="material-symbols-outlined text-primary">label</span><h3 className="font-bold text-white">Optional Auto-Tags</h3><p className="text-sm text-gray-400">Automatically add relevant tags for image prompts.</p></div>
                        <div className="flex flex-col gap-2 p-4 rounded-xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent backdrop-blur-sm"><span className="material-symbols-outlined text-primary">content_copy</span><h3 className="font-bold text-white">One-Click Copy</h3><p className="text-sm text-gray-400">Copy the final prompt to your clipboard instantly.</p></div>
                        <div className="flex flex-col gap-2 p-4 rounded-xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent backdrop-blur-sm"><span className="material-symbols-outlined text-primary">history</span><h3 className="font-bold text-white">Prompt History</h3><p className="text-sm text-gray-400">Access and reuse your previously generated prompts.</p></div>
                        <div className="flex flex-col gap-2 p-4 rounded-xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent backdrop-blur-sm"><span className="material-symbols-outlined text-primary">favorite</span><h3 className="font-bold text-white">Save Favorites</h3><p className="text-sm text-gray-400">Keep your best prompts saved for quick access.</p></div>
                    </div>
                </section>
                <section className="flex flex-col gap-8 px-4 items-center m-16">
                    <h2 className="text-white text-2xl sm:text-3xl font-bold leading-tight tracking-[-0.015em] text-center">See It In Action</h2>
                    <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-px bg-white/10 rounded-xl overflow-hidden border border-white/10">
                        <div className="p-8 bg-gradient-to-br from-white/5 to-transparent backdrop-blur-sm">
                            <h3 className="text-lg font-bold text-white mb-2">Before</h3>
                            <p className="text-gray-400 p-4 rounded-xl h-24 font-mono text-sm bg-black/20 border border-white/10">lion spc yellow bg cartoon</p>
                        </div>
                        <div className="p-8 bg-primary/10 backdrop-blur-sm">
                            <h3 className="text-lg font-bold text-white mb-2">After</h3>
                            <p className="text-gray-200 p-4 rounded-xl h-24 font-mono text-sm bg-black/10 border border-primary/20">Create a cartoon lion floating in space with a bright yellow background.</p>
                        </div>
                    </div>
                </section>
                <section className="flex flex-col gap-6 px-4 py-16 items-center text-center rounded-xl border border-primary/50 bg-gradient-to-br from-primary/10 to-transparent backdrop-blur-sm shadow-glow-primary-lg">
                    <h2 className="text-white text-2xl sm:text-3xl font-bold leading-tight tracking-[-0.015em]">Get Early Access to PromptSera</h2>
                    <p className="text-gray-400 max-w-xl">Join the waitlist to be the first to know when PromptSera launches. Be the first to try it.</p>
                    <form className="flex flex-col sm:flex-row gap-4 w-full mt-4">
                        <input className="flex-1 p-3 rounded-lg border border-white/20 bg-background-dark/50 focus:ring-primary focus:border-primary placeholder:text-gray-500 text-white" placeholder="Your Name" type="text" />
                        <input className="flex-1 p-3 rounded-lg border border-white/20 bg-background-dark/50 focus:ring-primary focus:border-primary placeholder:text-gray-500 text-white" placeholder="Your Email" type="email" />
                        <button className="flex items-center justify-center rounded-lg h-11 px-5 bg-primary text-white text-sm font-bold hover:opacity-90 transition-opacity shadow-glow-primary" type="submit">
                            Join Waitlist
                        </button>
                    </form>
                </section>
            </main>
            <footer className="flex flex-col items-center gap-6 border-t border-solid border-t-white/10 px-10 py-8 text-center m-16">
                {/* <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-gray-400">
                    <a className="hover:text-primary transition-colors" href="#">About</a>
                    <a className="hover:text-primary transition-colors" href="#">Contact</a>
                    <a className="hover:text-primary transition-colors" href="#">Privacy Policy</a>
                    <a className="hover:text-primary transition-colors" href="#">Terms of Service</a>
                </div> */}
                <p className="text-sm text-gray-400">PromptSera — Coming soon to the Chrome Web Store.</p>
            </footer>
        </>

    )
}