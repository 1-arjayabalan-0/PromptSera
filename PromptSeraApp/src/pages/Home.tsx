import { ExtrasSec } from "../components/ExtrasSec";
import { HowItWorksSec } from "../components/HowItWorksSec";
import ProblemSection from "../components/ProblemSec";
import "./../assets/styles/Home.css";

export default function Home() {
    return (
        <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden bg-background-dark font-display text-gray-200">

            {/* Background Glows */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 h-96 w-full max-w-4xl bg-primary/40 rounded-full blur-[250px] opacity-50"></div>
            <div className="absolute top-1/4 left-1/4 h-80 w-80 bg-blue-500/30 rounded-full blur-[200px] opacity-40 -translate-x-1/2"></div>
            <div className="absolute top-1/3 right-1/4 h-80 w-80 bg-purple-500/30 rounded-full blur-[200px] opacity-40 translate-x-1/2"></div>

            <div className="layout-container flex h-full grow flex-col">
                <div className="flex flex-1 justify-center py-5 sm:px-8 md:px-20 lg:px-40">
                    <div className="layout-content-container flex flex-col max-w-5xl flex-1">

                        {/* Header */}
                        <header className="flex items-center justify-between whitespace-nowrap px-6 sm:px-10 py-3 sticky top-0 bg-background-dark/80 backdrop-blur-sm z-50 border-b border-white/10">
                            <div className="flex items-center gap-4 text-primary">
                                <div className="size-6 shadow-glow-primary rounded-full">
                                    {/* Logo */}
                                    <svg fill="currentColor" viewBox="0 0 48 48">
                                        <path
                                            clipRule="evenodd"
                                            fillRule="evenodd"
                                            d="M12.0799 24L4 19.2479L9.95537 8.75216L18.04 13.4961L18.0446 4H29.9554L29.96 13.4961L38.0446 8.75216L44 19.2479L35.92 24L44 28.7521L38.0446 39.2479L29.96 34.5039L29.9554 44H18.0446L18.04 34.5039L9.95537 39.2479L4 28.7521L12.0799 24Z"
                                        ></path>
                                    </svg>
                                </div>
                                <h2 className="text-white text-lg font-bold">PromptSera</h2>
                            </div>

                            <div className="flex gap-2">
                                {/* <button className="flex disabled: h-10 px-4 rounded-xl border-2 border-primary text-white hover:bg-primary/20 transition-colors">
                                    Add to Chrome
                                </button> */}
                                <button className="flex h-10 px-4 rounded-xl bg-primary text-white hover:opacity-90 transition-opacity shadow-glow-primary">
                                    Join Waitlist
                                </button>
                            </div>
                        </header>

                        {/* Main */}
                        <main className="flex flex-col gap-16 sm:gap-20 md:gap-24 lg:gap-32 py-16 sm:py-20 md:py-24 z-10">

                            {/* Hero Section */}
                            <div className="flex flex-col gap-8 px-4 py-10 text-center items-center">
                                <div className="flex flex-col gap-4 max-w-3xl">
                                    <h1 className="text-white text-4xl sm:text-5xl md:text-6xl font-black">
                                        Turn messy thoughts into perfect AI prompts.
                                    </h1>
                                    <h2 className="text-gray-400 text-lg sm:text-xl">
                                        PromptSera instantly transforms jumbled words into clear, powerful prompts.
                                    </h2>
                                </div>

                                <div className="flex flex-wrap gap-3 justify-center">
                                    {/* <button className="h-12 px-5 rounded-xl bg-primary text-white shadow-glow-primary hover:opacity-90">
                                        Add to Chrome
                                    </button> */}
                                    <button className="h-12 px-5 rounded-xl bg-white/10 text-white hover:bg-white/20">
                                        Join Waitlist
                                    </button>
                                </div>

                            </div>

                        </main>
                        <ProblemSection />
                        <HowItWorksSec />
                        <ExtrasSec />
                    </div>
                </div>
            </div>
        </div>
    );
}
