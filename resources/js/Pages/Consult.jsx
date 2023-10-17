import Layout from '@/Layouts/Layout';
import { Head, useForm } from '@inertiajs/react';
import Breadcrumbs from '@/Components/Breadcrumbs';

export default (props) => {

    const { pagetitle } = props;

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
                                <Breadcrumbs {...props} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="contacts-page pb-20">
                    <div className="container-outer">
                        <div className="text-[40px] font-bold text-center mb-4">Информация по онлайн консультации</div>
                        <div className="text-center mb-12">Заменить очный прием специалиста онлайн консультация может только частично. Онлайн консультация поможет в случае, если нет возможности посетить нужного специалиста (возможно, пациент находится в больнице, либо в другом городе или стране).</div>
                        <div className="py-10 px-6 bg-slate-50 rounded-[20px] flex flex-col lg:flex-row gap-6 items-center mb-12">
                            <div className="text-2xl">Для консультации понадобится смартфон с доступом в интернет и возможностью видеосвязи через WhatsApp или Telegram.</div>
                            <div className="flex gap-6 items-center">
                                <svg width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M36 72C55.8822 72 72 55.8822 72 36C72 16.1177 55.8822 0 36 0C16.1177 0 0 16.1177 0 36C0 55.8822 16.1177 72 36 72Z" fill="url(#paint0_linear_8149_6908)" />
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M16.297 35.6198C26.7918 31.0475 33.7899 28.0331 37.2914 26.5767C47.289 22.4183 49.3664 21.696 50.7204 21.6721C51.0182 21.6669 51.6841 21.7407 52.1154 22.0907C52.4796 22.3862 52.5799 22.7854 52.6278 23.0656C52.6758 23.3458 52.7355 23.9841 52.688 24.4828C52.1462 30.1752 49.802 43.9893 48.6094 50.3649C48.1047 53.0627 47.1111 53.9673 46.1491 54.0558C44.0585 54.2482 42.471 52.6742 40.4462 51.3469C37.2777 49.2699 35.4877 47.977 32.4122 45.9502C28.8579 43.608 31.162 42.3207 33.1876 40.2168C33.7177 39.6662 42.9289 31.2879 43.1071 30.5279C43.1294 30.4328 43.1501 30.0785 42.9396 29.8914C42.7291 29.7043 42.4185 29.7683 42.1943 29.8192C41.8765 29.8913 36.8148 33.2369 27.0093 39.8559C25.5725 40.8425 24.2712 41.3232 23.1052 41.298C21.8198 41.2702 19.3473 40.5712 17.5092 39.9737C15.2547 39.2409 13.4628 38.8534 13.6188 37.6088C13.7001 36.9605 14.5928 36.2975 16.297 35.6198Z" fill="white" />
                                    <defs>
                                        <linearGradient id="paint0_linear_8149_6908" x1="36" y1="0" x2="36" y2="71.466" gradientUnits="userSpaceOnUse">
                                            <stop stop-color="#2AABEE" />
                                            <stop offset="1" stop-color="#229ED9" />
                                        </linearGradient>
                                    </defs>
                                </svg>
                                <svg width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clip-path="url(#clip0_8149_6911)">
                                        <path d="M61.5095 10.4631C54.741 3.71979 45.7411 0.00411423 36.1522 0C16.3929 0 0.312775 16.0042 0.304864 35.6757C0.302562 41.9638 1.95281 48.1019 5.08949 53.5125L0.00390625 72L19.007 67.0391C24.2427 69.8819 30.1378 71.3799 36.1368 71.3823H36.152H36.1522C55.9083 71.3823 71.9909 55.3752 71.9992 35.7047C72.0025 26.1709 68.277 17.2068 61.5095 10.4631ZM36.1522 65.3565H36.1406C30.7933 65.3537 25.5497 63.9244 20.9759 61.2224L19.8874 60.5799L8.6106 63.5236L11.6214 52.5811L10.9122 51.4593C7.92946 46.7376 6.35484 41.281 6.35708 35.678C6.36363 19.3277 19.7288 6.026 36.1635 6.026C44.122 6.02929 51.6021 9.11778 57.2278 14.7226C62.8531 20.3274 65.9489 27.7781 65.9465 35.7021C65.9395 52.053 52.5739 65.3565 36.1522 65.3565Z" fill="#E0E0E0" />
                                        <path d="M1.64844 69.9488L6.50172 52.3058C3.50755 47.1423 1.93298 41.2842 1.93487 35.2845C1.94272 16.512 17.2884 1.23926 36.1435 1.23926C45.2948 1.24337 53.8839 4.78914 60.3417 11.2246C66.8008 17.6599 70.3559 26.2139 70.3521 35.3111C70.3443 54.0842 54.9976 69.3582 36.1449 69.3582C36.1435 69.3582 36.1458 69.3582 36.1449 69.3582H36.1297C30.4047 69.3564 24.7793 67.9256 19.7831 65.2146L1.64844 69.9488Z" fill="url(#paint0_linear_8149_6911)" />
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M27.2939 20.5301C26.6307 19.0621 25.9325 19.0327 25.3015 19.007C24.7854 18.985 24.1946 18.9863 23.6047 18.9863C23.0144 18.9863 22.0551 19.2072 21.2438 20.0893C20.4321 20.9714 18.1445 23.1038 18.1445 27.4407C18.1445 31.7781 21.3176 35.9691 21.7599 36.5577C22.2027 37.1454 27.8852 46.3299 36.8847 49.8633C44.3641 52.7997 45.8861 52.2156 47.5096 52.0687C49.133 51.9218 52.748 49.9368 53.4859 47.8782C54.2238 45.8202 54.2238 44.0561 54.0024 43.6873C53.7811 43.32 53.1907 43.0996 52.3052 42.6588C51.4197 42.2179 47.0668 40.0851 46.2551 39.7912C45.4434 39.4973 44.853 39.3504 44.2627 40.2329C43.6723 41.1146 41.9765 43.0996 41.4599 43.6873C40.9434 44.2764 40.4268 44.3499 39.5413 43.9091C38.6558 43.4669 35.8041 42.537 32.4212 39.534C29.7891 37.1977 28.012 34.3122 27.4955 33.4297C26.9789 32.5481 27.4401 32.0705 27.8843 31.6311C28.2818 31.2362 28.7698 30.6021 29.2126 30.0873C29.6544 29.5726 29.802 29.2052 30.0971 28.6175C30.3923 28.0288 30.2447 27.5141 30.0233 27.0733C29.802 26.6325 28.0812 22.2731 27.2939 20.5301Z" fill="white" />
                                        <path d="M61.2136 10.3498C54.5228 3.68396 45.6262 0.0110089 36.1475 0.00683594C16.6149 0.00683594 0.719389 15.8273 0.711537 35.273C0.709235 41.489 2.34054 47.5565 5.4412 52.905L0.414062 71.1803L19.199 66.2762C24.3747 69.0864 30.202 70.5673 36.1322 70.5696H36.1473H36.1475C55.6768 70.5696 71.5746 54.7463 71.5829 35.3015C71.5862 25.8774 67.9034 17.0162 61.2136 10.3498ZM36.1475 64.6131H36.136C30.8501 64.6104 25.6665 63.1975 21.1453 60.5265L20.0693 59.8914L8.92194 62.8012L11.8981 51.9844L11.1971 50.8755C8.24859 46.208 6.69203 40.814 6.69433 35.2754C6.70076 19.1128 19.9125 5.96377 36.1586 5.96377C44.0259 5.96701 51.4199 9.02006 56.9811 14.5605C62.5419 20.101 65.602 27.4662 65.5997 35.2993C65.5928 51.4623 52.3805 64.6131 36.1475 64.6131Z" fill="white" />
                                    </g>
                                    <defs>
                                        <linearGradient id="paint0_linear_8149_6911" x1="36.0003" y1="69.9488" x2="36.0003" y2="1.23937" gradientUnits="userSpaceOnUse">
                                            <stop stop-color="#20B038" />
                                            <stop offset="1" stop-color="#60D66A" />
                                        </linearGradient>
                                        <clipPath id="clip0_8149_6911">
                                            <rect width="72" height="72" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>
                            </div>
                        </div>
                        <div className="mb-4 text-center text-2xl font-semibold">Стоимость онлайн-консультации:</div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-4">
                            <div className="p-9 bg-slate-50 rounded-[20px]">
                                <div className="flex-col justify-start items-center gap-[9px] flex">
                                    <div className="text-center text-2xl font-semibold">Взрослый</div>
                                    <div className="text-center text-2xl">8000 тенге</div>
                                </div>
                            </div>
                            <div className="p-9 bg-slate-50 rounded-[20px]">
                                <div className="flex-col justify-start items-center gap-[9px] flex">
                                    <div className="text-center text-2xl font-semibold">Детский</div>
                                    <div className="text-center text-2xl">7000 тенге</div>
                                </div>
                            </div>
                        </div>
                        <div className="p-6 bg-slate-50 rounded-[20px] justify-start items-center gap-4 flex mb-12">
                            <svg className="shrink-0" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M12 3.75C7.44365 3.75 3.75 7.44365 3.75 12C3.75 16.5563 7.44365 20.25 12 20.25C16.5563 20.25 20.25 16.5563 20.25 12C20.25 7.44365 16.5563 3.75 12 3.75ZM2.25 12C2.25 6.61522 6.61522 2.25 12 2.25C17.3848 2.25 21.75 6.61522 21.75 12C21.75 17.3848 17.3848 21.75 12 21.75C6.61522 21.75 2.25 17.3848 2.25 12ZM12 10.25C12.4142 10.25 12.75 10.5858 12.75 11V16C12.75 16.4142 12.4142 16.75 12 16.75C11.5858 16.75 11.25 16.4142 11.25 16V11C11.25 10.5858 11.5858 10.25 12 10.25ZM12 9C12.5523 9 13 8.55228 13 8C13 7.44772 12.5523 7 12 7C11.4477 7 11 7.44772 11 8C11 8.55228 11.4477 9 12 9Z" fill="#22282F" />
                            </svg>
                            <div className="grow">Онлайн консультации проводятся после согласования времени с врачом</div>
                        </div>

                        <div className="mb-4 text-center text-2xl font-semibold pb-12">Что нужно сделать, чтобы пройти консультацию?</div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12 text-center">
                            <div className="flex flex-col items-center">
                                <div className="w-[82px] h-[82px] -mb-[41px] relative z-10 bg-purple-900 rounded-full text-white text-2xl font-bold flex items-center justify-center">
                                    <div>1</div>
                                </div>
                                <div className="bg-slate-50 p-6 rounded-full w-[246px] h-[246px] flex flex-col items-center justify-center">
                                    <div className="">Позвоните по телефону в регистратуру: </div>
                                    <div className="font-bold">8-700-836-9665</div>
                                </div>
                            </div>
                            <div className="flex flex-col items-center">
                                <div className="w-[82px] h-[82px] -mb-[41px] relative z-10 bg-purple-900 rounded-full text-white text-2xl font-bold flex items-center justify-center">
                                    <div>2</div>
                                </div>
                                <div className="bg-slate-50 p-6 rounded-full w-[246px] h-[246px] flex flex-col items-center justify-center">
                                    <div className="">Администратор ответит на Ваши вопросы, подберет подходящее время для видео-консультации с доктором, запишет на прием.</div>
                                </div>
                            </div>
                            <div className="flex flex-col items-center">
                                <div className="w-[82px] h-[82px] -mb-[41px] relative z-10 bg-purple-900 rounded-full text-white text-2xl font-bold flex items-center justify-center">
                                    <div>3</div>
                                </div>
                                <div className="bg-slate-50 p-6 rounded-full w-[246px] h-[246px] flex flex-col items-center justify-center">
                                    <div className="">Оплатите услугу и получите подтверждение оплаты. Оплата производится по выставленному счету через Kaspi.kz</div>
                                </div>
                            </div>
                            <div className="flex flex-col items-center">
                                <div className="w-[82px] h-[82px] -mb-[41px] relative z-10 bg-purple-900 rounded-full text-white text-2xl font-bold flex items-center justify-center">
                                    <div>4</div>
                                </div>
                                <div className="bg-slate-50 p-6 rounded-full w-[246px] h-[246px] flex flex-col items-center justify-center">
                                    <div className="">Пройдите консультацию с доктором в формате видео-звонка WhatsApp в назначенное время.</div>
                                </div>
                            </div>
                        </div>


                        <div className="p-6 bg-slate-50 rounded-[20px] justify-start items-center gap-4 flex mb-12">
                            <svg className="shrink-0" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M12 3.75C7.44365 3.75 3.75 7.44365 3.75 12C3.75 16.5563 7.44365 20.25 12 20.25C16.5563 20.25 20.25 16.5563 20.25 12C20.25 7.44365 16.5563 3.75 12 3.75ZM2.25 12C2.25 6.61522 6.61522 2.25 12 2.25C17.3848 2.25 21.75 6.61522 21.75 12C21.75 17.3848 17.3848 21.75 12 21.75C6.61522 21.75 2.25 17.3848 2.25 12ZM12 10.25C12.4142 10.25 12.75 10.5858 12.75 11V16C12.75 16.4142 12.4142 16.75 12 16.75C11.5858 16.75 11.25 16.4142 11.25 16V11C11.25 10.5858 11.5858 10.25 12 10.25ZM12 9C12.5523 9 13 8.55228 13 8C13 7.44772 12.5523 7 12 7C11.4477 7 11 7.44772 11 8C11 8.55228 11.4477 9 12 9Z" fill="#22282F" />
                            </svg>
                            <div className="grow">Внимание! Для обеспечения качества услуги требуется наличие у пользователя стабильного Интернет-доступа. Если консультацию провести не представляется возможным в связи с техническими или иными объективными причинами - будет произведен возврат средств.</div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}