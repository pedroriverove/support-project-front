import React from 'react';

const HomeComponent = () => {
    return (
        <section className="py-20 lg:py-[120px]">
            <div className="container">
                <div
                    className="overflow-hidden rounded bg-primary py-12 px-8 md:p-[70px]"
                >
                    <div className="-mx-4 flex flex-wrap items-center">
                        <div className="w-full px-4 lg:w-1/2">
                            <span className="mb-2 text-base font-semibold text-white">
                                Primera aplicación creada en React
                            </span>
                            <h2 className="mb-6 text-3xl font-bold leading-tight text-white sm:mb-8 sm:text-[38px] lg:mb-0">
                                Repositorio <br className="hidden xs:block"/>
                                alojado en GitHub
                            </h2>
                        </div>
                        <div className="w-full px-4 lg:w-1/2">
                            <div className="flex flex-wrap lg:justify-end">
                                <a
                                    className="my-1 inline-block rounded bg-[#13C296] py-4 px-6 text-base font-medium text-white transition hover:bg-opacity-90 md:px-9 lg:px-6 xl:px-9"
                                    target="_blank"
                                    href="https://github.com/pedroriverove"
                                    rel="noreferrer"
                                >
                                    Empezar
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HomeComponent
