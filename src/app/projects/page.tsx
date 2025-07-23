import React from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

function ProjectsPage() {
    return (
        <>
            <Navbar/>
            <section className="bg-gray-50 py-5 sm:py-8">
                <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
                    <h2 className="text-center text-base/7 font-semibold text-orange-500">My Creative Playground</h2>
                    <p className="mx-auto mt-2 max-w-lg text-center text-2xl font-semibold tracking-tight text-balance text-gray-950 sm:text-3xl">Building
                        Bridges Between Ideas and Tangible Results Daily.</p>
                    <div className="mt-4 grid gap-4 sm:mt-8 lg:grid-cols-3 lg:grid-rows-2">
                        <div className="relative lg:row-span-2">
                            <div className="absolute inset-px rounded-lg bg-white lg:rounded-l-4xl"></div>
                            <div
                                className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] lg:rounded-l-[calc(2rem+1px)]">
                                <div className="px-8 pt-8 pb-3 sm:px-10 sm:pt-10 sm:pb-0">
                                    <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">CAZ
                                        WA Chatbot</p>
                                    <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                                        The chatbot streamlines appointment scheduling and management for the Cancer Association of
                                        Zimbabwe. It enables clients to easily book appointments, receive reminders and manage
                                        their schedules, improving overall efficiency.{" "}
                                        <a
                                            href="https://caz-whatsapp.onrender.com"
                                            className="text-blue-600 underline hover:text-blue-800"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            https://caz-whatsapp.onrender.com
                                        </a>
                                    </p>
                                </div>
                                <div
                                    className="@container relative min-h-120 w-full grow max-lg:mx-auto max-lg:max-w-sm">
                                    <div
                                        className="absolute inset-x-10 top-10 bottom-0 overflow-hidden rounded-t-[12cqw] border-x-[3cqw] border-t-[3cqw] border-gray-700 bg-gray-900 shadow-2xl">
                                        <img className="size-full object-cover object-top"
                                             src="/cancer_bot.jpg"
                                             alt=""/>
                                    </div>
                                </div>
                            </div>
                            <div
                                className="pointer-events-none absolute inset-px rounded-lg shadow-sm outline outline-black/5 lg:rounded-l-4xl"></div>
                        </div>
                        <div className="relative max-lg:row-start-1">
                            <div className="absolute inset-px rounded-lg bg-white max-lg:rounded-t-4xl"></div>
                            <div
                                className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] max-lg:rounded-t-[calc(2rem+1px)]">
                                <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                                    <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">Point
                                        of Sale</p>
                                    <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">Streamlines
                                        transactions with QR code payment functionality. Specifically designed for
                                        events, it eliminates the need for cash handling and change, making transactions
                                        seamless and efficient.</p>
                                </div>
                                <div
                                    className="flex flex-1 items-center justify-center px-8 max-lg:pt-10 max-lg:pb-12 sm:px-10 lg:pb-2">
                                    <img className="w-full max-lg:max-w-xs"
                                         src="/point_of_sale.png"
                                         alt=""/>
                                </div>
                            </div>
                            <div
                                className="pointer-events-none absolute inset-px rounded-lg shadow-sm outline outline-black/5 max-lg:rounded-t-4xl"></div>
                        </div>
                        <div className="relative max-lg:row-start-3 lg:col-start-2 lg:row-start-2">
                            <div className="absolute inset-px rounded-lg bg-white"></div>
                            <div
                                className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)]">
                                <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                                    <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">Microlend
                                        Loan System</p>
                                    <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                                        Allows users to register, apply for loans and track their credit score. It
                                        streamlines loan management, promotes financial inclusion and encourages
                                        responsible borrowing habits. Efficient loan tracking and reminders ensure
                                        timely repayments.{" "}
                                        <a
                                            href="https://loansysystem.netlify.app"
                                            className="text-blue-600 underline hover:text-blue-800"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            https://loansysystem.netlify.app
                                        </a>
                                    </p>
                                </div>
                                <div className="@container flex flex-1 items-center max-lg:py-6 lg:pb-2">
                                    <img className="h-[min(152px,40cqw)] object-cover"
                                         src="/microlend_loan.png"
                                         alt=""/>
                                    <img className="h-[min(152px,40cqw)] object-cover"
                                         src="/loan.png"
                                         alt=""/>
                                </div>
                            </div>
                            <div
                                className="pointer-events-none absolute inset-px rounded-lg shadow-sm outline outline-black/5"></div>
                        </div>
                        <div className="relative lg:row-span-2">
                            <div
                                className="absolute inset-px rounded-lg bg-white max-lg:rounded-b-4xl lg:rounded-r-4xl"></div>
                            <div
                                className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] max-lg:rounded-b-[calc(2rem+1px)] lg:rounded-r-[calc(2rem+1px)]">
                                <div className="px-8 pt-8 pb-3 sm:px-10 sm:pt-10 sm:pb-0">
                                    <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">Delivery
                                        Management System</p>
                                    <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">Optimizes
                                        routes for efficient delivery. Real-time vehicle tracking enables monitoring of
                                        delivery status and estimated arrival times. An automated scheduler streamlines
                                        delivering scheduling, ensuring timely and organized deliveries. This integrated
                                        system improved logistics efficiency, reduces costs and enhances customer
                                        satisfaction.</p>
                                </div>
                                <div className="relative min-h-120 w-full grow">
                                    <div className="px-6 pt-6 pb-14">
                                        <img className="h-[min(152px,40cqw)] object-cover"
                                             src="/dms_home.png"
                                             alt=""/>
                                        <img className="h-[min(152px,40cqw)] object-cover"
                                             src="/dms_route.png"
                                             alt=""/>
                                        <img className="h-[min(152px,40cqw)] object-cover"
                                             src="/dms_track.png"
                                             alt=""/>
                                    </div>
                                </div>
                            </div>
                            <div
                                className="pointer-events-none absolute inset-px rounded-lg shadow-sm outline outline-black/5 max-lg:rounded-b-4xl lg:rounded-r-4xl"></div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="overflow-hidden bg-white py-5 sm:py-8">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div
                        className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                        <div className="lg:pt-4 lg:pr-8">
                            <div className="lg:max-w-lg">
                                <h2 className="text-base/7 font-semibold text-orange-500">Bebe Solutions</h2>
                                <p className="mt-2 text-3xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-4xl">Where
                                    Ideas Come to Life</p>
                                <p className="mt-6 text-lg/8 text-gray-700">I leverage cutting-edge technologies to
                                    drive innovation.</p>
                                <dl className="mt-10 max-w-xl space-y-8 text-base/7 text-gray-600 lg:max-w-none">
                                    <div className="relative pl-9">
                                        <dt className="inline font-semibold text-gray-900">
                                            <svg className="absolute top-1 left-1 size-5 text-orange-500"
                                                 viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
                                                 data-slot="icon">
                                                <path fillRule="evenodd"
                                                      d="M5.5 17a4.5 4.5 0 0 1-1.44-8.765 4.5 4.5 0 0 1 8.302-3.046 3.5 3.5 0 0 1 4.504 4.272A4 4 0 0 1 15 17H5.5Zm3.75-2.75a.75.75 0 0 0 1.5 0V9.66l1.95 2.1a.75.75 0 1 0 1.1-1.02l-3.25-3.5a.75.75 0 0 0-1.1 0l-3.25 3.5a.75.75 0 1 0 1.1 1.02l1.95-2.1v4.59Z"
                                                      clipRule="evenodd"/>
                                            </svg>
                                            Push to deploy.
                                        </dt>
                                        <dd className="inline">Streamlining development workflow. With push to deploy,
                                            code changes are automatically deployed to production after passing tests.
                                            Deploying projects on AWS, Render, Github, Vercel,
                                            Netlify, etc ensuring seamless and scalable solutions.
                                        </dd>
                                    </div>
                                    <div className="relative pl-9">
                                        <dt className="inline font-semibold text-gray-900">
                                            <svg className="absolute top-1 left-1 size-5 text-orange-500"
                                                 viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
                                                 data-slot="icon">
                                                <path fillRule="evenodd"
                                                      d="M10 1a4.5 4.5 0 0 0-4.5 4.5V9H5a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2h-.5V5.5A4.5 4.5 0 0 0 10 1Zm3 8V5.5a3 3 0 1 0-6 0V9h6Z"
                                                      clipRule="evenodd"/>
                                            </svg>
                                            Security First.
                                        </dt>
                                        <dd className="inline">Prioritising security in every aspect of development
                                            process. Building applications with robust security measures, including data
                                            encryption, secure authentication and regular vulnerability assessment.
                                        </dd>
                                    </div>
                                    <div className="relative pl-9">
                                        <dt className="inline font-semibold text-gray-900">
                                            <svg className="absolute top-1 left-1 size-5 text-orange-500"
                                                 viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
                                                 data-slot="icon">
                                                <path
                                                    d="M4.632 3.533A2 2 0 0 1 6.577 2h6.846a2 2 0 0 1 1.945 1.533l1.976 8.234A3.489 3.489 0 0 0 16 11.5H4c-.476 0-.93.095-1.344.267l1.976-8.234Z"/>
                                                <path fillRule="evenodd"
                                                      d="M4 13a2 2 0 1 0 0 4h12a2 2 0 1 0 0-4H4Zm11.24 2a.75.75 0 0 1 .75-.75H16a.75.75 0 0 1 .75.75v.01a.75.75 0 0 1-.75.75h-.01a.75.75 0 0 1-.75-.75V15Zm-2.25-.75a.75.75 0 0 0-.75.75v.01c0 .414.336.75.75.75H13a.75.75 0 0 0 .75-.75V15a.75.75 0 0 0-.75-.75h-.01Z"
                                                      clipRule="evenodd"/>
                                            </svg>
                                            Database replication.
                                        </dt>
                                        <dd className="inline">I do database replication, supporting MySQL and Postgres
                                            SQL to ensure data consistency and high availability.
                                        </dd>
                                    </div>
                                </dl>
                            </div>
                        </div>

                        <img src="/deploy.png"
                             alt="Product screenshot"
                             className="w-3xl max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-228 md:-ml-4 lg:-ml-0"
                             width="2432" height="1442"/>
                    </div>
                </div>
            </section>

            <Footer/>
        </>
    );
}

export default ProjectsPage;