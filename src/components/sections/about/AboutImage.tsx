const AboutImage = () => {
    return (
        <div className="relative mx-auto max-w-md">
            {/* Decorative elements */}
            <div className="absolute -top-8 -left-8 w-32 h-32 bg-primary/10 rounded-2xl -z-10 animate-float"></div>
            <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-secondary/10 rounded-2xl -z-10 animate-float"
                 style={{animationDelay: "1s"}}></div>

            {/* Main image with frame */}
            <div className="relative z-10">
                <div
                    className="absolute inset-0 bg-gradient-to-br from-primary/40 to-secondary/40 rounded-2xl transform rotate-6 shadow-2xl"></div>
                <img
                    src="./Me.jpg"
                    alt="Developer Portrait"
                    className="relative z-10 w-full h-auto rounded-2xl shadow-2xl transform -rotate-3 transition-all duration-700 hover:rotate-0 border-4 border-white/20"
                />
            </div>

            {/* Enhanced Code snippet decoration */}
            <div
                className="absolute -bottom-10 -right-10 bg-white/90 dark:bg-gray-800/90 rounded-xl shadow-2xl p-5 z-20 transform rotate-6 transition-transform hover:rotate-0 duration-500 backdrop-blur-sm border border-white/40">
                <div className="flex space-x-2 mb-2">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="font-mono text-xs">
                    <div className="text-blue-600 dark:text-blue-400">function <span
                        className="text-purple-600 dark:text-purple-400">developer</span>() {`{`}</div>
                    <div className="pl-4 text-green-600 dark:text-green-400">return {`{`}</div>
                    <div className="pl-8">passion: <span className="text-orange-600 dark:text-orange-400">true</span>,
                    </div>
                    <div className="pl-8">coffee: <span className="text-orange-600 dark:text-orange-400">'needed'</span>
                    </div>
                    <div className="pl-4">{`}`};</div>
                    <div>{`}`}</div>
                </div>
            </div>

            {/* Enhanced Experience badge */}
            <div
                className="absolute top-5 -left-12 glass rounded-full shadow-2xl p-4 z-20 flex items-center justify-center w-28 h-28 border border-white/30">
                <div className="text-center">
                    <div
                        className="text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">2+
                    </div>
                    <div className="text-xs text-gray-600">Years Exp.</div>
                </div>
            </div>
        </div>
    );
};

export default AboutImage;
