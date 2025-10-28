// @ts-nocheck
import React, { useState, useEffect } from "react"

import Navbar from "../../../components/ui/Navbar"
import Topbar from "../../../components/ui/Topbar"
import Footer from "../../../components/ui/Footer"
import ContentRenderer from "../../../components/ui/ContentRenderer"

import { useUserData } from "../../../context/UserDataContext"
import StructureRoleRoute from "../../../utils/StructureRoleRoute"


const data = {
    "title": "Statement of the boards, councils, committees and other bodies",
    "pageContent": {
        "content": [

            {
                "type": "paragraph",
                "para": "A statement of the boards, councils. committees and other bodies consisting of two or more persons constituted as its part or for the purpose of its advice, and as to whether meetings of those boards, councils, committees and other bodies are open to the public, or the minutes of such meetings are accessible for public;",
                "src": "",
                "alt": "",
                "items": [],
                "order": 1
            }
        ],
        "tabs": []
    },

}

function StatementOfBodies({ isAdmin }) {

    const { UserData } = useUserData();

    const [role, setrole] = useState(null);


    useEffect(() => {
        if (UserData) {
            const rl = StructureRoleRoute(UserData);
            rl && setrole(rl);
        }

    }, [UserData]);

    return (
        <div className="min-h-screen flex flex-col">
            <Topbar isAdmin={isAdmin} />
            <Navbar isAdmin={isAdmin} />

            <div className="flex-grow">
                {data && <ContentRenderer contentData={data} isAdmin={false} />}
                <ul className="max-w-[92vw] mx-auto my-6 bg-white shadow rounded-2xl p-6 flex flex-col">
                    <li>
                        <a href={`${role ? `/${role}/research-council` : `/research-council`}`} className="text-lg text-red-500 hover:text-red-700">Research Council</a>
                    </li>

                    <li>
                        <a href={`${role ? `/${role}/management-council` : `/management-council`}`}  className="text-lg text-red-500 hover:text-red-700">	Management Council</a>
                    </li>
                </ul>

                <div className="ml-16 font-bold text-gray-600 mb-4">
                    Meetings of above Councils are not open to public.
                </div>
            </div>

            <Footer />
            <div id="google_translate_element" className="invisible"></div>
        </div>
    )
}

export default StatementOfBodies