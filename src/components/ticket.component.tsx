import React from 'react';
import { Link } from 'react-router-dom';

const TicketComponent: React.FC = () => {
    const [showModal, setShowModal] = React.useState(false);

    return (
        <section className="bg-white py-20 lg:py-[120px]">
            <div className="container">
                <div className="-mx-4 flex flex-wrap">
                    <div className="w-full px-4">
                        <div className="max-w-full overflow-x-auto">
                            <button
                                className="inline-block rounded border border-primary py-2 px-6 text-primary hover:bg-primary hover:text-white mb-8"
                                type="button"
                                onClick={() => setShowModal(true)}
                                >
                                <i className="fas fa-plus-circle"/> Agregar nuevo ticket
                            </button>
                            {showModal ? (
                                <div
                                    className="fixed top-0 left-0 flex h-full min-h-screen w-full items-center justify-center bg-black bg-opacity-90"
                                >
                                    <div
                                        className="w-full max-w-[570px] rounded-[20px] bg-white py-12 px-8 text-center md:py-[60px] md:px-[70px]"
                                    >
                                        <h3 className="pb-2 text-xl font-bold text-dark sm:text-2xl">
                                        Your Message Sent Successfully
                                        </h3>
                                        <span className="mx-auto mb-6 inline-block h-1 w-[90px] rounded bg-primary">
                                        </span>
                                        <p className="mb-10 text-base leading-relaxed text-body-color">
                                            Lorem Ipsum is simply dummy text of the printing and typesetting
                                            industry. Lorem Ipsum has been the industry's standard dummy text
                                            ever since
                                        </p>
                                        <div className="-mx-3 flex flex-wrap">
                                            <div className="w-1/2 px-3">
                                                <button
                                                    onClick={() => setShowModal(false)}
                                                    className="block w-full rounded-lg border border-[#E9EDF9] p-3 text-center text-base font-medium text-dark transition hover:border-red-600 hover:bg-red-600 hover:text-white"
                                                >
                                                    Cancelar
                                                </button>
                                            </div>
                                            <div className="w-1/2 px-3">
                                                <button
                                                    className="block w-full rounded-lg border border-primary bg-primary p-3 text-center text-base font-medium text-white transition hover:bg-opacity-90"
                                                >
                                                    View Details
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ) : null}
                            <table className="w-full table-auto">
                                <thead>
                                <tr className="bg-primary text-center">
                                    <th className="w-1/6 min-w-[160px] border-l border-transparent py-4 px-3 text-lg font-semibold text-white lg:py-7 lg:px-4">
                                        Asignado
                                    </th>
                                    <th className="w-1/6 min-w-[160px] py-4 px-3 text-lg font-semibold text-white lg:py-7 lg:px-4">
                                        Ticket
                                    </th>
                                    <th className="w-1/6 min-w-[160px] py-4 px-3 text-lg font-semibold text-white lg:py-7 lg:px-4">
                                        Estatus
                                    </th>
                                    <th className="w-1/6 min-w-[160px] py-4 px-3 text-lg font-semibold text-white lg:py-7 lg:px-4">
                                        Fecha asignación
                                    </th>
                                    <th className="w-1/6 min-w-[160px] border-r border-transparent py-4 px-3 text-lg font-semibold text-white lg:py-7 lg:px-4">
                                        Fecha resolucion
                                    </th>
                                    <th className="w-1/6 min-w-[160px] border-r border-transparent py-4 px-3 text-lg font-semibold text-white lg:py-7 lg:px-4">
                                        Gestionar
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
                                            className="inline-flex items-center justify-center rounded-lg bg-primary py-1 px-2 text-center text-base font-normal text-white hover:bg-opacity-90 lg:px-8 xl:px-10"
                                        >
                                            <i className="far fa-edit"/>
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
                                            className="inline-flex items-center justify-center rounded-lg bg-primary py-1 px-2 text-center text-base font-normal text-white hover:bg-opacity-90 lg:px-8 xl:px-10"
                                        >
                                            <i className="far fa-edit"/>
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
                                            className="inline-flex items-center justify-center rounded-lg bg-primary py-1 px-2 text-center text-base font-normal text-white hover:bg-opacity-90 lg:px-8 xl:px-10"
                                        >
                                            <i className="far fa-edit"/>
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

export default TicketComponent
