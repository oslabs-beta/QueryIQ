import React from "react";
import Image from "next/image";


const GraphCard: React.FC = () => {
    return(
        <div className="h-60 w-60 border border-gray-900 rounded-lg shadow  bg-red-100 my-2">
            <Image
            src="/assets/logo-full-no-bg.png"
            alt="Logo"
            width={210}
            height={64}
            />
        </div>
    );
};











export default GraphCard;