import React from "react"
import Navbar from "../../components/ui/Navbar"
import Topbar from "../../components/ui/Topbar"
import Footer from "../../components/ui/Footer"

function ScreenReaderAccess() {


    return (
        <div>
            <Topbar />
            <Navbar />

            <div className="container mx-auto p-6 rounded-lg bg-white min-h-[500px]">
                {/* Title */}
                <h1 className="text-3xl font-bold my-6 text-[#004080] text-center">Screen Reader Access</h1>

                <div className="w-full">
                    <div className="text-container space-y-4 mb-6">
                        <p className="text-gray-700">
                            The National Website of India fully complies with{" "}
                            <a
                                className="text-blue-600 hover:text-blue-800 font-semibold underline"
                                target="_blank"
                                href="https://guidelines.india.gov.in/"
                                rel="noopener noreferrer"
                            >
                                Guidelines for Indian Government Websites.
                            </a>{" "}
                            Our visitors with visual impairments can access the portal using
                            Assistive Technologies, such as screen readers.
                        </p>

                        <p className="text-gray-700">
                            The information of the website is accessible with different screen readers, such as JAWS, NVDA, SAFA, Supernova and
                            Window-Eyes.
                        </p>

                        <p className="text-gray-700">
                            Following table lists the information about different screen readers:
                        </p>

                        <p className="text-gray-700 font-medium">
                            Information related to the various screen readers
                        </p>
                    </div>

                    <div className="overflow-x-auto shadow-md rounded-lg">
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-100">
                                <tr>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                                        Screen Reader
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                                        Website
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                                        Free/Commercial
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                                <tr className="hover:bg-gray-50 transition-colors">
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                        Non Visual Data Access (NVDA)
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-blue-600">
                                        <a
                                            target="_blank"
                                            href="https://www.nvaccess.org/"
                                            rel="noopener noreferrer"
                                            className="hover:underline"
                                        >
                                            https://www.nvaccess.org/
                                        </a>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                        Free
                                    </td>
                                </tr>
                                <tr className="hover:bg-gray-50 transition-colors">
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                        System Access To Go
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-blue-600">
                                        <a
                                            target="_blank"
                                            href="https://www.satogo.com/"
                                            rel="noopener noreferrer"
                                            className="hover:underline"
                                        >
                                            https://www.satogo.com/
                                        </a>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                        Free
                                    </td>
                                </tr>
                                <tr className="hover:bg-gray-50 transition-colors">
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                        Hal
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-blue-600">
                                        <a
                                            target="_blank"
                                            href="https://yourdolphin.com/ScreenReader"
                                            rel="noopener noreferrer"
                                            className="hover:underline"
                                        >
                                            https://yourdolphin.com/ScreenReader
                                        </a>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                        Commercial
                                    </td>
                                </tr>
                                <tr className="hover:bg-gray-50 transition-colors">
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                        JAWS
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-blue-600">
                                        <a
                                            target="_blank"
                                            href="https://www.freedomscientific.com/products/software/jaws/"
                                            rel="noopener noreferrer"
                                            className="hover:underline"
                                        >
                                            https://www.freedomscientific.com/products/software/jaws/
                                        </a>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                        Commercial
                                    </td>
                                </tr>
                                <tr className="hover:bg-gray-50 transition-colors">
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                        Supernova
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-blue-600">
                                        <a
                                            target="_blank"
                                            href="https://yourdolphin.com/SuperNova"
                                            rel="noopener noreferrer"
                                            className="hover:underline"
                                        >
                                            https://yourdolphin.com/SuperNova
                                        </a>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                        Commercial
                                    </td>
                                </tr>
                                <tr className="hover:bg-gray-50 transition-colors">
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                        Blindness
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-blue-600">
                                        <a
                                            target="_blank"
                                            href="https://www.freedomscientific.com/products/blindness/"
                                            rel="noopener noreferrer"
                                            className="hover:underline"
                                        >
                                            https://www.freedomscientific.com/products/blindness/
                                        </a>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                        Commercial
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

            </div>

            <Footer />
            <div id="google_translate_element" className="invisible"></div>
        </div>
    )
}

export default ScreenReaderAccess
