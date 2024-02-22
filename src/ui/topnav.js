import React from "react";

export default function TopNav() {
    // Define the logo path using %PUBLIC_URL%
    const logoPath = `${process.env.PUBLIC_URL}/dango.svg`;

    return (
        <div className="bg-white shadow sticky top-0 z-10">
            <div className="px-4 sm:px-6 lg:px-8">
                <div className="flex h-8 items-center justify-between">
                    <div className="flex items-center">
                        <a href="/" className="flex items-center">
                            <img className="h-6 w-auto transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300"
                                src={logoPath} alt="Workflow" />
                            <span className="ml-3 font-bold text-gray-700">Dango</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
