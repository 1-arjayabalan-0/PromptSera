export const HowItWorksSec = () => {
    return (
        <section className="flex flex-col gap-8 px-4 items-center">
            <h2 className="text-white text-2xl sm:text-3xl font-bold leading-tight tracking-[-0.015em] text-center">How It Works</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-4xl">
                <div className="flex flex-col items-center text-center gap-4">
                    <div className="flex items-center justify-center size-16 bg-primary/20 rounded-full text-primary text-2xl font-bold border border-primary/50">1</div>
                    <h3 className="text-white text-xl font-bold">Type Your Messy Idea</h3>
                    <p className="text-gray-400">Jot down your thoughts, no matter how chaotic. Don't worry about structure or wording.</p>
                </div>
                <div className="flex flex-col items-center text-center gap-4">
                    <div className="flex items-center justify-center size-16 bg-primary/20 rounded-full text-primary text-2xl font-bold border border-primary/50">2</div>
                    <h3 className="text-white text-xl font-bold">Choose Your Mode</h3>
                    <p className="text-gray-400">Select whether you need a prompt for text, an image, or a piece of code.</p>
                </div>
                <div className="flex flex-col items-center text-center gap-4">
                    <div className="flex items-center justify-center size-16 bg-primary/20 rounded-full text-primary text-2xl font-bold border border-primary/50">3</div>
                    <h3 className="text-white text-xl font-bold">Get a Perfect Prompt</h3>
                    <p className="text-gray-400">Instantly receive a clear, structured prompt ready to be used with your favorite AI tool.</p>
                </div>
            </div>
        </section>
    )
}