// 'address1' => setting('contacts.address1'),
// 'schedule1' => setting('contacts.schedule1'),
// 'address2' => setting('contacts.address2'),
// 'schedule2' => setting('contacts.schedule2'),
// 'email' => setting('contacts.email'),

import Layout from '@/Layouts/Layout';
import PageTop from '@/Layouts/PageTop';
import { Head } from '@inertiajs/react';
import Email from "../../images/email.svg"
import Baloon from "../../images/baloon.svg"
import Clock from "../../images/clock2.svg"
import parse from "html-react-parser"

export default (props) => {

    const { address1, schedule1, address2, schedule2, pagetitle, breadcrumbs } = props;
    const { email } = window.appdata

    return (
        <Layout
            {...props}
        >
            <Head title={pagetitle} />
            <PageTop breadcrumbs={breadcrumbs} />
            <div className="catalogue-section__title ordering__title center fw-700-45-55">
                <p>{pagetitle}</p>
            </div>
            <div className={`container-outer mb-8 lg:mb-32 max-w-6xl`}>
                <div className={`contacts-inner lg:flex items-center space-x-8 rounded-[1.25rem] shadow-[0px_0px_8px_rgba(0,0,0,.15)] px-10 py-6 bg-primary-100`}>
                    <div className={`grow`}>
                        <div className={`flex items-center border-0 border-b border-primary-500 border-solid py-4`}>
                            <div className={`flex items-center space-x-3 w-2/3`}>
                                <div className="icon-wrapper center shrink-0">
                                    <img src={Baloon} alt="" />
                                </div>
                                <div className="email-wrapper center fw-400-16-19">
                                    <p>{parse(address1)}</p>
                                </div>
                            </div>
                            <div className={`flex items-center space-x-3`}>
                                <div className="icon-wrapper center shrink-0">
                                    <img src={Clock} alt="" />
                                </div>
                                <div className="email-wrapper center fw-400-16-19">
                                    <p>{parse(schedule1)}</p>
                                </div>
                            </div>
                        </div>
                        <div className={`flex items-center py-4`}>
                            <div className={`flex items-center space-x-3 w-2/3 mb`}>
                                <div className="icon-wrapper center shrink-0">
                                    <img src={Baloon} alt="" />
                                </div>
                                <div className="email-wrapper center fw-400-16-19">
                                    <p>{parse(address1)}</p>
                                </div>
                            </div>
                            <div className={`flex items-center space-x-3`}>
                                <div className="icon-wrapper center shrink-0">
                                    <img src={Clock} alt="" />
                                </div>
                                <div className="email-wrapper center fw-400-16-19">
                                    <p>{parse(schedule1)}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={`w-1/3`}>
                        <a className="contacts-email-wrapper" target="_blank" href={`mailto:${email}`}>
                            <div className="icon-wrapper center shrink-0">
                                <img src={Email} alt="" />
                            </div>
                            <div className="email-wrapper center fw-400-16-19">
                                <p>{email}</p>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
            <div className={`fw-700-45-55 text-center mb-6`}>{`Напишите нам`}</div>
            <p className={`max-w-xl mx-auto text-center mb-10`}>Введите ваши контактные данные и текст сообщения, если у вас возникли вопросы, и мы в ближайшее время свяжемся с вами.</p>
            <div className={`max-w-lg mx-auto px-6 mb-8 lg:mb-32`}>
                <form className="ordering-contacts-form ordering-details__ordering-contacts-form fw-400-16-19">
                    <div className="grid grid-cols-2 gap-x-5 lg:gap-x-8 mb-5">
                        <input className="bg-primary-100 rounded-full border-1 border-solid border-[rgba(0,0,0,.2)] py-2.5 px-5 fw-400-16-19" type="text" name="fname" id="name" placeholder="Имя" />
                        <input className="bg-primary-100 rounded-full border-1 border-solid border-[rgba(0,0,0,.2)] py-2.5 px-5 fw-400-16-19" type="text" name="lname" id="last-name" placeholder="Фамилия" />
                    </div>
                    <div className="grid grid-cols-2 gap-x-5 lg:gap-x-8 mb-5">
                        <input className="bg-primary-100 rounded-full border-1 border-solid border-[rgba(0,0,0,.2)] py-2.5 px-5 fw-400-16-19" type="tel" name="tel" id="ordering-tel" placeholder="Телефон" />
                        <input className="bg-primary-100 rounded-full border-1 border-solid border-[rgba(0,0,0,.2)] py-2.5 px-5 fw-400-16-19" type="email" name="email" id="ordering-email" placeholder="Email" />
                    </div>
                    <textarea name="ordering-textarea" id="ordering-textarea" className="font-sans bg-primary-100 rounded-2xl border-1 border-solid border-[rgba(0,0,0,.2)] py-2.5 px-5 w-full mb-5 h-[6.25rem] fw-400-16-19" placeholder="Комментарии"></textarea>
                    <div class="ordering-btn-wrapper ordering-details__ordering-btn-wrapper fw-700-16-20">
                        <button class="btn-primary">Отправить</button>
                    </div>
                </form>
            </div>


        </Layout >
    );
}
