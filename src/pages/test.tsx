import { type NextPage } from "next";
import { useState } from "react";
import { api } from "~/utils/api";
import { useSession } from "next-auth/react";

const Test: NextPage = () => {
    const func = () => {
        api.generalInfo.getAllInfo.useQuery()
    }
    return(
        <>
            <main className="bg-black h-screen flex justify-items-center">
                <input onKeyDown={(e) => {
                    if (e.key === "Enter") 
                        func();
                }}/>
            </main>
        </>
    )
}

export default Test