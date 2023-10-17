import Breadcrumbs from "@/Components/Breadcrumbs";
import Layout from "@/Layouts/Layout";
import { Head } from "@inertiajs/react";
import Clock from "../../images/clock.svg"
import Pin from "../../images/pin.svg"
import Cdek from "../../images/cdek.svg"
import Post from "../../images/kaz-post.svg"

export default (props) => {

    const { pagetitle } = props;

    return <Layout
        {...props}
    >
        <Head title={pagetitle} />
        <div className="bg-white">
            <div className="h-px"></div>
            <div className="catalogue-categories">
                <div className="container-outer">
                    <div className="catalogue-categories__outer">
                        <div className="catalogue-categories__inner">
                            {/* <TopCategories /> */}
                            <Breadcrumbs {...props} />
                        </div>
                    </div>
                </div>
            </div>
            <div className="refund">
                <div className="container-outer">
                    <div className="refund__outer">
                        <div className="refund__inner">
                            <div className="catalogue-section__title refund__title center fw-700-45-55">
                                <p>{pagetitle}</p>
                            </div>
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">

                                <div className="bg-slate-50 rounded-[20px] py-9 px-8 max-w-[582px] mx-auto mb-12">
                                    <div className="text-center text-2xl font-semibold mb-6">Аренда костылей</div>
                                    <div className="p-6 bg-white rounded-[20px] justify-start items-center gap-4 flex mb-5">
                                        <svg className="shrink-0" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M12 3.75C7.44365 3.75 3.75 7.44365 3.75 12C3.75 16.5563 7.44365 20.25 12 20.25C16.5563 20.25 20.25 16.5563 20.25 12C20.25 7.44365 16.5563 3.75 12 3.75ZM2.25 12C2.25 6.61522 6.61522 2.25 12 2.25C17.3848 2.25 21.75 6.61522 21.75 12C21.75 17.3848 17.3848 21.75 12 21.75C6.61522 21.75 2.25 17.3848 2.25 12ZM12 10.25C12.4142 10.25 12.75 10.5858 12.75 11V16C12.75 16.4142 12.4142 16.75 12 16.75C11.5858 16.75 11.25 16.4142 11.25 16V11C11.25 10.5858 11.5858 10.25 12 10.25ZM12 9C12.5523 9 13 8.55228 13 8C13 7.44772 12.5523 7 12 7C11.4477 7 11 7.44772 11 8C11 8.55228 11.4477 9 12 9Z" fill="#22282F" />
                                        </svg>
                                        <div className="grow">
                                            <div className="">Залог при выдаче костылей в аренду <div className="font-bold inline">17&nbsp;000&nbsp;тенге.</div></div>
                                        </div>
                                    </div>
                                    <div className="my-4 font-bold">Оплата за использование костылей в период:</div>

                                    <ul className="grid grid-cols-1 gap-6 mb-8 pl-4">
                                        {[
                                            <div><strong>до 15 дней</strong><div>300 тенге в день</div></div>,
                                            <div><strong>до 30 дней</strong><div>250 тенге в день</div></div>,
                                            <div><strong>больше 30 дней</strong><div>200 тенге в день</div></div>,
                                        ].map((item, index) => <li key={index} className="flex items-center gap-3">
                                            <svg className="h-5 w-auto shrink-0" viewBox="0 0 19 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M17 7.5359C19.6667 9.0755 19.6667 12.9245 17 14.4641L6.5 20.5263C3.83333 22.0659 0.499999 20.1414 0.499999 17.0622L0.5 4.93782C0.5 1.85862 3.83333 -0.0658809 6.5 1.47372L17 7.5359Z" fill="#56326E" />
                                            </svg>
                                            <div>{item}</div>
                                        </li>)}
                                    </ul>
                                    <div className="p-6 bg-white rounded-[20px] justify-start items-center gap-4 flex mb-12">
                                        <svg className="shrink-0" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M12 3.75C7.44365 3.75 3.75 7.44365 3.75 12C3.75 16.5563 7.44365 20.25 12 20.25C16.5563 20.25 20.25 16.5563 20.25 12C20.25 7.44365 16.5563 3.75 12 3.75ZM2.25 12C2.25 6.61522 6.61522 2.25 12 2.25C17.3848 2.25 21.75 6.61522 21.75 12C21.75 17.3848 17.3848 21.75 12 21.75C6.61522 21.75 2.25 17.3848 2.25 12ZM12 10.25C12.4142 10.25 12.75 10.5858 12.75 11V16C12.75 16.4142 12.4142 16.75 12 16.75C11.5858 16.75 11.25 16.4142 11.25 16V11C11.25 10.5858 11.5858 10.25 12 10.25ZM12 9C12.5523 9 13 8.55228 13 8C13 7.44772 12.5523 7 12 7C11.4477 7 11 7.44772 11 8C11 8.55228 11.4477 9 12 9Z" fill="#22282F" />
                                        </svg>
                                        <div className="grow">При возврате костылей – отнимается разница между внесенным залогом и суммой за аренду</div>
                                    </div>
                                </div>


                                <div className="bg-slate-50 rounded-[20px] py-9 px-8 max-w-[582px] mx-auto mb-12">
                                    <div className="text-center text-2xl font-semibold mb-6">Аренда инвалидной коляски</div>
                                    <div className="p-6 bg-white rounded-[20px] justify-start items-center gap-4 flex mb-5">
                                        <svg className="shrink-0" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M12 3.75C7.44365 3.75 3.75 7.44365 3.75 12C3.75 16.5563 7.44365 20.25 12 20.25C16.5563 20.25 20.25 16.5563 20.25 12C20.25 7.44365 16.5563 3.75 12 3.75ZM2.25 12C2.25 6.61522 6.61522 2.25 12 2.25C17.3848 2.25 21.75 6.61522 21.75 12C21.75 17.3848 17.3848 21.75 12 21.75C6.61522 21.75 2.25 17.3848 2.25 12ZM12 10.25C12.4142 10.25 12.75 10.5858 12.75 11V16C12.75 16.4142 12.4142 16.75 12 16.75C11.5858 16.75 11.25 16.4142 11.25 16V11C11.25 10.5858 11.5858 10.25 12 10.25ZM12 9C12.5523 9 13 8.55228 13 8C13 7.44772 12.5523 7 12 7C11.4477 7 11 7.44772 11 8C11 8.55228 11.4477 9 12 9Z" fill="#22282F" />
                                        </svg>
                                        <div className="grow">
                                            <div className="">Залог при выдаче коляски <div className="font-bold inline">120&nbsp;000&nbsp;тенге.</div></div>
                                        </div>
                                    </div>
                                    <div className="my-4 font-bold">Оплата за использование инвалидной коляски в период:</div>

                                    <ul className="grid grid-cols-1 gap-6 mb-8 pl-4">
                                        {[
                                            <div><strong>до одного месяца</strong><div>1300 тенге в день</div></div>,
                                            <div><strong>до трёх месяцев</strong><div>1000 тенге в день</div></div>,
                                            <div><strong>до шести месяцев</strong><div>500 тенге в день</div></div>,
                                        ].map((item, index) => <li key={index} className="flex items-center gap-3">
                                            <svg className="h-5 w-auto shrink-0" viewBox="0 0 19 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M17 7.5359C19.6667 9.0755 19.6667 12.9245 17 14.4641L6.5 20.5263C3.83333 22.0659 0.499999 20.1414 0.499999 17.0622L0.5 4.93782C0.5 1.85862 3.83333 -0.0658809 6.5 1.47372L17 7.5359Z" fill="#56326E" />
                                            </svg>
                                            <div>{item}</div>
                                        </li>)}
                                    </ul>
                                    <div className="p-6 bg-white rounded-[20px] justify-start items-center gap-4 flex mb-12">
                                        <svg className="shrink-0" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M12 3.75C7.44365 3.75 3.75 7.44365 3.75 12C3.75 16.5563 7.44365 20.25 12 20.25C16.5563 20.25 20.25 16.5563 20.25 12C20.25 7.44365 16.5563 3.75 12 3.75ZM2.25 12C2.25 6.61522 6.61522 2.25 12 2.25C17.3848 2.25 21.75 6.61522 21.75 12C21.75 17.3848 17.3848 21.75 12 21.75C6.61522 21.75 2.25 17.3848 2.25 12ZM12 10.25C12.4142 10.25 12.75 10.5858 12.75 11V16C12.75 16.4142 12.4142 16.75 12 16.75C11.5858 16.75 11.25 16.4142 11.25 16V11C11.25 10.5858 11.5858 10.25 12 10.25ZM12 9C12.5523 9 13 8.55228 13 8C13 7.44772 12.5523 7 12 7C11.4477 7 11 7.44772 11 8C11 8.55228 11.4477 9 12 9Z" fill="#22282F" />
                                        </svg>
                                        <div className="grow">При возврате инвалидной коляски– отнимается разница между внесенным залогом и суммой за аренду</div>
                                    </div>
                                </div>

                            </div>
                            <div className="h-px"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </Layout >
}