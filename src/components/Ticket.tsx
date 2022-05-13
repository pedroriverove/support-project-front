import React from 'react';
import { Link } from 'react-router-dom';

const Ticket = () => {
    return (
        <section className="bg-white py-20 lg:py-[120px]">
            <div className="container">
                <div className="-mx-4 flex flex-wrap">
                    <div className="w-full px-4">
                        <div className="max-w-full overflow-x-auto">
                            <table className="w-full table-auto">
                                <thead>
                                <tr className="bg-primary text-center">
                                    <th className="w-1/6 min-w-[160px] border-l border-transparent py-4 px-3 text-lg font-semibold text-white lg:py-7 lg:px-4">
                                        TLD
                                    </th>
                                    <th className="w-1/6 min-w-[160px] py-4 px-3 text-lg font-semibold text-white lg:py-7 lg:px-4">
                                        Duration
                                    </th>
                                    <th className="w-1/6 min-w-[160px] py-4 px-3 text-lg font-semibold text-white lg:py-7 lg:px-4">
                                        Registration
                                    </th>
                                    <th className="w-1/6 min-w-[160px] py-4 px-3 text-lg font-semibold text-white lg:py-7 lg:px-4">
                                        Renewal
                                    </th>
                                    <th className="w-1/6 min-w-[160px] py-4 px-3 text-lg font-semibold text-white lg:py-7 lg:px-4">
                                        Transfer
                                    </th>
                                    <th className="w-1/6 min-w-[160px] border-r border-transparent py-4 px-3 text-lg font-semibold text-white lg:py-7 lg:px-4">
                                        Register
                                    </th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td className="border-b border-l border-[#E8E8E8] bg-[#F3F6FF] py-5 px-2 text-center text-base font-medium text-dark">
                                        .com
                                    </td>
                                    <td className="border-b border-[#E8E8E8] bg-white py-5 px-2 text-center text-base font-medium text-dark">
                                        1 Year
                                    </td>
                                    <td className="border-b border-[#E8E8E8] bg-[#F3F6FF] py-5 px-2 text-center text-base font-medium text-dark">
                                        $75.00
                                    </td>
                                    <td className="border-b border-[#E8E8E8] bg-white py-5 px-2 text-center text-base font-medium text-dark">
                                        $5.00
                                    </td>
                                    <td className="border-b border-[#E8E8E8] bg-[#F3F6FF] py-5 px-2 text-center text-base font-medium text-dark">
                                        $10.00
                                    </td>
                                    <td className="border-b border-r border-[#E8E8E8] bg-white py-5 px-2 text-center text-base font-medium text-dark">
                                        <Link
                                            to="/signup"
                                            className="inline-block rounded border border-primary py-2 px-6 text-primary hover:bg-primary hover:text-white"
                                        >
                                            Regístrate
                                        </Link>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="border-b border-l border-[#E8E8E8] bg-[#F3F6FF] py-5 px-2 text-center text-base font-medium text-dark">
                                        .com
                                    </td>
                                    <td className="border-b border-[#E8E8E8] bg-white py-5 px-2 text-center text-base font-medium text-dark">
                                        1 Year
                                    </td>
                                    <td className="border-b border-[#E8E8E8] bg-[#F3F6FF] py-5 px-2 text-center text-base font-medium text-dark">
                                        $75.00
                                    </td>
                                    <td className="border-b border-[#E8E8E8] bg-white py-5 px-2 text-center text-base font-medium text-dark">
                                        $5.00
                                    </td>
                                    <td className="border-b border-[#E8E8E8] bg-[#F3F6FF] py-5 px-2 text-center text-base font-medium text-dark">
                                        $10.00
                                    </td>
                                    <td className="border-b border-r border-[#E8E8E8] bg-white py-5 px-2 text-center text-base font-medium text-dark">
                                        <Link
                                            to="/signup"
                                            className="inline-block rounded border border-primary py-2 px-6 text-primary hover:bg-primary hover:text-white"
                                        >
                                            Regístrate
                                        </Link>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="border-b border-l border-[#E8E8E8] bg-[#F3F6FF] py-5 px-2 text-center text-base font-medium text-dark">
                                        .com
                                    </td>
                                    <td className="border-b border-[#E8E8E8] bg-white py-5 px-2 text-center text-base font-medium text-dark">
                                        1 Year
                                    </td>
                                    <td className="border-b border-[#E8E8E8] bg-[#F3F6FF] py-5 px-2 text-center text-base font-medium text-dark">
                                        $75.00
                                    </td>
                                    <td className="border-b border-[#E8E8E8] bg-white py-5 px-2 text-center text-base font-medium text-dark">
                                        $5.00
                                    </td>
                                    <td className="border-b border-[#E8E8E8] bg-[#F3F6FF] py-5 px-2 text-center text-base font-medium text-dark">
                                        $10.00
                                    </td>
                                    <td className="border-b border-r border-[#E8E8E8] bg-white py-5 px-2 text-center text-base font-medium text-dark">
                                        <Link
                                            to="/signup"
                                            className="inline-block rounded border border-primary py-2 px-6 text-primary hover:bg-primary hover:text-white"
                                        >
                                            Regístrate
                                        </Link>
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Ticket
