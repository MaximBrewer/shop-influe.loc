// 'address1' => setting('contacts.address1'),
// 'schedule1' => setting('contacts.schedule1'),
// 'address2' => setting('contacts.address2'),
// 'schedule2' => setting('contacts.schedule2'),
// 'email' => setting('contacts.email'),

import Layout from '@/Layouts/Layout';
// import PageTop from '@/Layouts/PageTop';
import { Head, useForm } from '@inertiajs/react';
// import Email from "../../images/email.svg"
// import Baloon from "../../images/baloon.svg"
// import Clock from "../../images/clock2.svg"
import Breadcrumbs from '@/Components/Breadcrumbs';
import parse from "html-react-parser"
import InputError from '@/Components/InputError';
// import ContactForm from '@/Components/ContactForm';

export default (props) => {

    const { address1, schedule1, address2, schedule2, pagetitle } = props;
    const { email } = window.appdata

    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        phone: '',
        lastname: '',
        comment: '',
        email: '',
    });

    const submit = (e) => {
        e.preventDefault();
        post(route('writeus'), {
            preserveScroll: true,
            onSuccess: () => {
                reset()
            }
        });
    };

    return (
        <Layout
            {...props}
        >
            <Head title={pagetitle} />
            <div className="bg-white">
                <div className="catalogue-categories mt-0 pt-8">
                    <div className="container-outer">
                        <div className="catalogue-categories__outer">
                            <div className="catalogue-categories__inner">
                                {/* <TopCategories /> */}
                                <Breadcrumbs {...props} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="contacts-page registration-section pb-20">
                    <div className="container-outer">
                        <div className="registration-section__title catalogue-section__title center fw-700-45-55">{pagetitle}</div>
                        <div className="registration-section__subtitle reg-subtitle fw-400-16-19">
                        </div>
                        <div className="contacts-page-block white-block -gray">
                            <div className="flex flex-col md:flex-row gap-8">
                                <div className="contacts-locations">
                                    <div className="contacts-address">
                                        <div className="flex items-center gap-2">
                                            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M12.875 17.6562C12.875 13.7291 16.0717 10.5 19.9922 10.5C23.9127 10.5 27.1094 13.7291 27.1094 17.6562C27.1094 19.209 26.6195 20.6813 25.6922 21.9188L19.9922 29.1896L14.299 21.9273C13.3647 20.681 12.875 19.2086 12.875 17.6562ZM15.3906 17.6562C15.3906 20.1937 17.4547 22.2578 19.9922 22.2578C22.5297 22.2578 24.5938 20.1937 24.5938 17.6562C24.5938 15.1188 22.5297 13.0547 19.9922 13.0547C17.4547 13.0547 15.3906 15.1188 15.3906 17.6562Z" stroke="#56326E" />
                                                <path d="M17.5625 17.6562C17.5625 16.3172 18.6531 15.2266 19.9922 15.2266C21.3313 15.2266 22.4219 16.3172 22.4219 17.6562C22.4219 18.9953 21.3313 20.0859 19.9922 20.0859C18.6531 20.0859 17.5625 18.9953 17.5625 17.6562Z" stroke="#56326E" />
                                                <circle cx="20" cy="20" r="19.5" stroke="#56326E" />
                                            </svg>
                                            {parse(address1 ?? ``)}
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <g clip-path="url(#clip0_0_2869)">
                                                    <path d="M27.866 13.8257H28.484C28.6996 13.8257 28.8744 13.6508 28.8744 13.4353C28.8744 13.2197 28.6996 13.0449 28.484 13.0449H27.0006C26.785 13.0449 26.6102 13.2197 26.6102 13.4353V14.9187C26.6102 15.1342 26.785 15.3091 27.0006 15.3091C27.2162 15.3091 27.391 15.1342 27.391 14.9187V14.4892C28.5754 16.0749 29.2193 17.9989 29.2193 20C29.2193 25.0835 25.0835 29.2193 20 29.2193C14.9165 29.2193 10.7807 25.0835 10.7807 20C10.7807 14.9165 14.9165 10.7807 20 10.7807C20.376 10.7807 20.7543 10.8036 21.1247 10.8486C21.3385 10.8744 21.5334 10.7222 21.5594 10.5082C21.5854 10.2942 21.433 10.0995 21.219 10.0735C20.8174 10.0247 20.4073 10 20 10C17.3289 10 14.8177 11.0402 12.9289 12.9289C11.0402 14.8177 10 17.3289 10 20C10 22.6711 11.0402 25.1823 12.9289 27.0711C14.8177 28.9598 17.3289 30 20 30C22.6711 30 25.1823 28.9598 27.0711 27.0711C28.9598 25.1823 30 22.6711 30 20C30 17.746 29.247 15.5821 27.866 13.8257Z" fill="#56326E" />
                                                    <path d="M14.233 15.8951C14.0508 15.7798 13.8097 15.834 13.6943 16.0161C12.8032 17.4236 12.4087 19.1163 12.5835 20.7825C12.7609 22.4733 13.522 24.0678 14.7264 25.2723C16.1799 26.7258 18.0893 27.4526 19.9986 27.4526C21.908 27.4526 23.8173 26.7259 25.2709 25.2723C28.178 22.3652 28.178 17.6349 25.2709 14.7279C24.0683 13.5253 22.4764 12.7645 20.7884 12.5858C19.1253 12.4095 17.4344 12.8009 16.0275 13.6877C15.8451 13.8027 15.7905 14.0437 15.9054 14.2261C16.0204 14.4085 16.2614 14.4631 16.4438 14.3482C19.0959 12.6767 22.4986 13.0597 24.7188 15.2799C27.3215 17.8826 27.3215 22.1175 24.7188 24.7202C22.1161 27.3229 17.8812 27.3229 15.2785 24.7202C13.089 22.5307 12.7002 19.0458 14.354 16.4338C14.4693 16.2516 14.4152 16.0105 14.233 15.8951Z" fill="#56326E" />
                                                    <path d="M25.074 20.3969H25.5554C25.7709 20.3969 25.9457 20.2221 25.9457 20.0066C25.9457 19.791 25.7709 19.6162 25.5554 19.6162H25.074C24.8584 19.6162 24.6836 19.791 24.6836 20.0066C24.6836 20.2221 24.8584 20.3969 25.074 20.3969Z" fill="#56326E" />
                                                    <path d="M14.0547 19.9939C14.0547 20.2094 14.2295 20.3842 14.4451 20.3842H14.9265C15.142 20.3842 15.3168 20.2094 15.3168 19.9939C15.3168 19.7783 15.142 19.6035 14.9265 19.6035H14.4451C14.2295 19.6035 14.0547 19.7783 14.0547 19.9939Z" fill="#56326E" />
                                                    <path d="M20.3979 14.925V14.4436C20.3979 14.228 20.2231 14.0532 20.0076 14.0532C19.792 14.0532 19.6172 14.228 19.6172 14.4436V14.925C19.6172 15.1406 19.792 15.3154 20.0076 15.3154C20.2231 15.3154 20.3979 15.1406 20.3979 14.925Z" fill="#56326E" />
                                                    <path d="M19.6016 25.0749V25.5563C19.6016 25.7719 19.7764 25.9467 19.9919 25.9467C20.2075 25.9467 20.3823 25.7719 20.3823 25.5563V25.0749C20.3823 24.8594 20.2075 24.6846 19.9919 24.6846C19.7764 24.6846 19.6016 24.8593 19.6016 25.0749Z" fill="#56326E" />
                                                    <path d="M18.0414 17.491C17.889 17.3386 17.6418 17.3386 17.4893 17.491C17.3369 17.6435 17.3369 17.8907 17.4893 18.0431L18.8123 19.3661C18.711 19.5551 18.6533 19.7708 18.6533 19.9998C18.6533 20.7414 19.2566 21.3446 19.9981 21.3446C20.7397 21.3446 21.3429 20.7414 21.3429 19.9998C21.3429 19.7708 21.2852 19.5551 21.1839 19.3661L23.8534 16.6967C24.0058 16.5442 24.0058 16.2971 23.8534 16.1446C23.7009 15.9922 23.4538 15.9922 23.3013 16.1446L20.6318 18.814C20.4429 18.7127 20.2271 18.655 19.9981 18.655C19.7691 18.655 19.5534 18.7127 19.3644 18.814L18.0414 17.491ZM20.5622 19.9998C20.5622 20.3109 20.3092 20.5639 19.9981 20.5639C19.6871 20.5639 19.434 20.3109 19.434 19.9998C19.434 19.6888 19.6871 19.4357 19.9981 19.4357C20.3092 19.4357 20.5622 19.6888 20.5622 19.9998Z" fill="#56326E" />
                                                    <path d="M15.2796 15.2796C15.3526 15.207 15.3944 15.1063 15.3944 15.0037C15.3944 14.901 15.3526 14.8007 15.2796 14.7277C15.207 14.6551 15.1067 14.6133 15.0036 14.6133C14.901 14.6133 14.8003 14.6551 14.7277 14.7277C14.6551 14.8003 14.6133 14.901 14.6133 15.0037C14.6133 15.1067 14.6551 15.207 14.7277 15.2796C14.8003 15.3522 14.901 15.394 15.0036 15.394C15.1067 15.394 15.207 15.3522 15.2796 15.2796Z" fill="#56326E" />
                                                    <path d="M22.7029 11.1665C22.806 11.1665 22.9067 11.1251 22.9793 11.0521C23.0519 10.9795 23.0937 10.8791 23.0937 10.7761C23.0937 10.6734 23.0519 10.5727 22.9793 10.5001C22.9067 10.4276 22.806 10.3857 22.7029 10.3857C22.6002 10.3857 22.4995 10.4275 22.4269 10.5001C22.3543 10.5727 22.3125 10.6734 22.3125 10.7761C22.3125 10.8792 22.3543 10.9795 22.4269 11.0521C22.4995 11.1251 22.6002 11.1665 22.7029 11.1665Z" fill="#56326E" />
                                                </g>
                                                <circle cx="20" cy="20" r="19.5" stroke="#56326E" />
                                                <defs>
                                                    <clipPath id="clip0_0_2869">
                                                        <rect width="20" height="20" fill="white" transform="translate(10 10)" />
                                                    </clipPath>
                                                </defs>
                                            </svg>
                                            <p>
                                                {parse(schedule1 ?? ``)}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="contacts-address">
                                        <div className="flex items-center gap-2">
                                            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M12.875 17.6562C12.875 13.7291 16.0717 10.5 19.9922 10.5C23.9127 10.5 27.1094 13.7291 27.1094 17.6562C27.1094 19.209 26.6195 20.6813 25.6922 21.9188L19.9922 29.1896L14.299 21.9273C13.3647 20.681 12.875 19.2086 12.875 17.6562ZM15.3906 17.6562C15.3906 20.1937 17.4547 22.2578 19.9922 22.2578C22.5297 22.2578 24.5938 20.1937 24.5938 17.6562C24.5938 15.1188 22.5297 13.0547 19.9922 13.0547C17.4547 13.0547 15.3906 15.1188 15.3906 17.6562Z" stroke="#56326E" />
                                                <path d="M17.5625 17.6562C17.5625 16.3172 18.6531 15.2266 19.9922 15.2266C21.3313 15.2266 22.4219 16.3172 22.4219 17.6562C22.4219 18.9953 21.3313 20.0859 19.9922 20.0859C18.6531 20.0859 17.5625 18.9953 17.5625 17.6562Z" stroke="#56326E" />
                                                <circle cx="20" cy="20" r="19.5" stroke="#56326E" />
                                            </svg>
                                            {parse(address2 ?? ``)}
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <g clip-path="url(#clip0_0_2869)">
                                                    <path d="M27.866 13.8257H28.484C28.6996 13.8257 28.8744 13.6508 28.8744 13.4353C28.8744 13.2197 28.6996 13.0449 28.484 13.0449H27.0006C26.785 13.0449 26.6102 13.2197 26.6102 13.4353V14.9187C26.6102 15.1342 26.785 15.3091 27.0006 15.3091C27.2162 15.3091 27.391 15.1342 27.391 14.9187V14.4892C28.5754 16.0749 29.2193 17.9989 29.2193 20C29.2193 25.0835 25.0835 29.2193 20 29.2193C14.9165 29.2193 10.7807 25.0835 10.7807 20C10.7807 14.9165 14.9165 10.7807 20 10.7807C20.376 10.7807 20.7543 10.8036 21.1247 10.8486C21.3385 10.8744 21.5334 10.7222 21.5594 10.5082C21.5854 10.2942 21.433 10.0995 21.219 10.0735C20.8174 10.0247 20.4073 10 20 10C17.3289 10 14.8177 11.0402 12.9289 12.9289C11.0402 14.8177 10 17.3289 10 20C10 22.6711 11.0402 25.1823 12.9289 27.0711C14.8177 28.9598 17.3289 30 20 30C22.6711 30 25.1823 28.9598 27.0711 27.0711C28.9598 25.1823 30 22.6711 30 20C30 17.746 29.247 15.5821 27.866 13.8257Z" fill="#56326E" />
                                                    <path d="M14.233 15.8951C14.0508 15.7798 13.8097 15.834 13.6943 16.0161C12.8032 17.4236 12.4087 19.1163 12.5835 20.7825C12.7609 22.4733 13.522 24.0678 14.7264 25.2723C16.1799 26.7258 18.0893 27.4526 19.9986 27.4526C21.908 27.4526 23.8173 26.7259 25.2709 25.2723C28.178 22.3652 28.178 17.6349 25.2709 14.7279C24.0683 13.5253 22.4764 12.7645 20.7884 12.5858C19.1253 12.4095 17.4344 12.8009 16.0275 13.6877C15.8451 13.8027 15.7905 14.0437 15.9054 14.2261C16.0204 14.4085 16.2614 14.4631 16.4438 14.3482C19.0959 12.6767 22.4986 13.0597 24.7188 15.2799C27.3215 17.8826 27.3215 22.1175 24.7188 24.7202C22.1161 27.3229 17.8812 27.3229 15.2785 24.7202C13.089 22.5307 12.7002 19.0458 14.354 16.4338C14.4693 16.2516 14.4152 16.0105 14.233 15.8951Z" fill="#56326E" />
                                                    <path d="M25.074 20.3969H25.5554C25.7709 20.3969 25.9457 20.2221 25.9457 20.0066C25.9457 19.791 25.7709 19.6162 25.5554 19.6162H25.074C24.8584 19.6162 24.6836 19.791 24.6836 20.0066C24.6836 20.2221 24.8584 20.3969 25.074 20.3969Z" fill="#56326E" />
                                                    <path d="M14.0547 19.9939C14.0547 20.2094 14.2295 20.3842 14.4451 20.3842H14.9265C15.142 20.3842 15.3168 20.2094 15.3168 19.9939C15.3168 19.7783 15.142 19.6035 14.9265 19.6035H14.4451C14.2295 19.6035 14.0547 19.7783 14.0547 19.9939Z" fill="#56326E" />
                                                    <path d="M20.3979 14.925V14.4436C20.3979 14.228 20.2231 14.0532 20.0076 14.0532C19.792 14.0532 19.6172 14.228 19.6172 14.4436V14.925C19.6172 15.1406 19.792 15.3154 20.0076 15.3154C20.2231 15.3154 20.3979 15.1406 20.3979 14.925Z" fill="#56326E" />
                                                    <path d="M19.6016 25.0749V25.5563C19.6016 25.7719 19.7764 25.9467 19.9919 25.9467C20.2075 25.9467 20.3823 25.7719 20.3823 25.5563V25.0749C20.3823 24.8594 20.2075 24.6846 19.9919 24.6846C19.7764 24.6846 19.6016 24.8593 19.6016 25.0749Z" fill="#56326E" />
                                                    <path d="M18.0414 17.491C17.889 17.3386 17.6418 17.3386 17.4893 17.491C17.3369 17.6435 17.3369 17.8907 17.4893 18.0431L18.8123 19.3661C18.711 19.5551 18.6533 19.7708 18.6533 19.9998C18.6533 20.7414 19.2566 21.3446 19.9981 21.3446C20.7397 21.3446 21.3429 20.7414 21.3429 19.9998C21.3429 19.7708 21.2852 19.5551 21.1839 19.3661L23.8534 16.6967C24.0058 16.5442 24.0058 16.2971 23.8534 16.1446C23.7009 15.9922 23.4538 15.9922 23.3013 16.1446L20.6318 18.814C20.4429 18.7127 20.2271 18.655 19.9981 18.655C19.7691 18.655 19.5534 18.7127 19.3644 18.814L18.0414 17.491ZM20.5622 19.9998C20.5622 20.3109 20.3092 20.5639 19.9981 20.5639C19.6871 20.5639 19.434 20.3109 19.434 19.9998C19.434 19.6888 19.6871 19.4357 19.9981 19.4357C20.3092 19.4357 20.5622 19.6888 20.5622 19.9998Z" fill="#56326E" />
                                                    <path d="M15.2796 15.2796C15.3526 15.207 15.3944 15.1063 15.3944 15.0037C15.3944 14.901 15.3526 14.8007 15.2796 14.7277C15.207 14.6551 15.1067 14.6133 15.0036 14.6133C14.901 14.6133 14.8003 14.6551 14.7277 14.7277C14.6551 14.8003 14.6133 14.901 14.6133 15.0037C14.6133 15.1067 14.6551 15.207 14.7277 15.2796C14.8003 15.3522 14.901 15.394 15.0036 15.394C15.1067 15.394 15.207 15.3522 15.2796 15.2796Z" fill="#56326E" />
                                                    <path d="M22.7029 11.1665C22.806 11.1665 22.9067 11.1251 22.9793 11.0521C23.0519 10.9795 23.0937 10.8791 23.0937 10.7761C23.0937 10.6734 23.0519 10.5727 22.9793 10.5001C22.9067 10.4276 22.806 10.3857 22.7029 10.3857C22.6002 10.3857 22.4995 10.4275 22.4269 10.5001C22.3543 10.5727 22.3125 10.6734 22.3125 10.7761C22.3125 10.8792 22.3543 10.9795 22.4269 11.0521C22.4995 11.1251 22.6002 11.1665 22.7029 11.1665Z" fill="#56326E" />
                                                </g>
                                                <circle cx="20" cy="20" r="19.5" stroke="#56326E" />
                                                <defs>
                                                    <clipPath id="clip0_0_2869">
                                                        <rect width="20" height="20" fill="white" transform="translate(10 10)" />
                                                    </clipPath>
                                                </defs>
                                            </svg>
                                            <p>
                                                {parse(schedule2 ?? ``)}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <a href={`mailto:${email}`} className="flex items-center gap-2">
                                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M11 13.6719V26.3281H29V13.6719H11ZM27.1958 14.7266L20 21.8925L12.8042 14.7266H27.1958ZM12.0547 25.2734V15.4687L20 23.381L27.9453 15.4687V25.2734H12.0547Z" fill="#56326E" />
                                        <circle cx="20" cy="20" r="19.5" stroke="#56326E" />
                                    </svg>
                                    {email}
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="contacts-page registration-section pb-20">
                    <div className="container-outer">
                        <div className="registration-section__title catalogue-section__title center fw-700-45-55">
                            <p>Напишите нам</p>
                        </div>
                        <div className="registration-section__subtitle reg-subtitle fw-400-16-19">
                            <p>Введите ваши контактные данные и текст сообщения, если у вас возникли вопросы, и мы в ближайшее время свяжемся с вами.</p>
                        </div>
                        <form className="ordering-contacts-form ordering-details__ordering-contacts-form reg-form fw-400-16-19" onSubmit={submit}>
                            <div className="grid grid-cols-2 gap-8 pb-8">
                                <div>
                                    <input
                                        id="name"
                                        type="text"
                                        name="name"
                                        value={data.name} className="ordering__input"
                                        onChange={(e) => setData('name', e.target.value)}
                                        placeholder={`Имя`}
                                    />
                                    <InputError message={errors.name} />
                                </div>
                                <div>
                                    <input
                                        id="lastname"
                                        type="text"
                                        name="lastname"
                                        value={data.lastname} className="ordering__input"
                                        onChange={(e) => setData('lastname', e.target.value)}
                                        placeholder={`Фамилия`}
                                    />
                                    <InputError message={errors.lastname} />
                                </div>
                                <div>
                                    <input
                                        id="phone"
                                        type="text"
                                        name="phone"
                                        value={data.phone} className="ordering__input"
                                        onChange={(e) => setData('phone', e.target.value)}
                                        placeholder={`Телефон`}
                                    />
                                    <InputError message={errors.phone} />
                                </div>
                                <div>
                                    <input
                                        id="email"
                                        type="text"
                                        name="email"
                                        value={data.email} className="ordering__input"
                                        onChange={(e) => setData('email', e.target.value)}
                                        placeholder={`E-mail`}
                                    />
                                    <InputError message={errors.email} />
                                </div>
                                <div className="col-span-2">
                                    <textarea
                                        id="comment"
                                        name="comment"
                                        value={data.comment} 
                                        className="ordering-contacts-form__textarea fw-400-16-19"
                                        onChange={(e) => setData('comment', e.target.value)}
                                        placeholder={`Комментарии`}
                                    />
                                    <InputError message={errors.comment} />
                                </div>
                            </div>
                            <div className="reg-form__btn-wrapper fw-700-16-20">
                                <button className="btn-primary">Отправить</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>


            {/* 
            <div className={`container-outer mb-8 lg:mb-32 max-w-6xl`}>
                <div className={`contacts-inner lg:flex items-center space-x-8 rounded-[1.25rem] shadow-[0px_0px_8px_rgba(0,0,0,.15)] px-10 py-6 bg-primary-100`}>
                    <div className={`grow`}>
                        <div className={`flex items-center border-0 border-b border-primary-500 border-solid py-4`}>
                            <div className={`flex items-center space-x-3 w-2/3`}>
                                <div className="icon-wrapper center shrink-0">
                                    <img src={Baloon} alt="" />
                                </div>
                                <div className="email-wrapper center fw-400-16-19">{parse(address1)}</div>
                            </div>
                            <div className={`flex items-center space-x-3`}>
                                <div className="icon-wrapper center shrink-0">
                                    <img src={Clock} alt="" />
                                </div>
                                <div className="email-wrapper center fw-400-16-19">{parse(schedule1)}</div>
                            </div>
                        </div>
                        <div className={`flex items-center py-4`}>
                            <div className={`flex items-center space-x-3 w-2/3 mb`}>
                                <div className="icon-wrapper center shrink-0">
                                    <img src={Baloon} alt="" />
                                </div>
                                <div className="email-wrapper center fw-400-16-19">{parse(address2)}</div>
                            </div>
                            <div className={`flex items-center space-x-3`}>
                                <div className="icon-wrapper center shrink-0">
                                    <img src={Clock} alt="" />
                                </div>
                                <div className="email-wrapper center fw-400-16-19">{parse(schedule2)}</div>
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
            <div className={`max-w-2xl mx-auto px-6 mb-8 lg:mb-32`}>
                <ContactForm />
            </div> */}
        </Layout >
    );
}
