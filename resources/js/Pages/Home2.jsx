import Layout from '@/Layouts/Layout';
import { Head, Link } from '@inertiajs/react';

import ShopImage from "@/../images/main-page-1.png"
import ServiceImage from "@/../images/main-page-2.png"
import FormAppDoctor from '@/Components/FormAppDoctor';

export default (props) => {

    const { pagetitle = `` } = props

    return (
        <Layout {...props}>
            <Head title={pagetitle} />
            <div className="container-outer">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-14 my-10">
                    <div className="main-page-link">
                        <div className="main-page-img">
                            <img src={ShopImage} alt="Магазин" />
                        </div>
                        <div className="main-page-text">
                            <h3 className="main-page-name mb-4">Магазин</h3>
                            <p className="main-page-subname mb-6 md:mb-12">Основна сфера деяльности
                                краткое описание желательно в две строки</p>
                            <Link href={route('shop')} className="main-page-link-btn -green">Посетить</Link>
                        </div>
                    </div>
                    <div className="main-page-link">
                        <div className="main-page-img">
                            <img src={ServiceImage} alt="Услуги" />
                        </div>
                        <div className="main-page-text">
                            <h3 className="main-page-name mb-4">Услуги</h3>
                            <p className="main-page-subname mb-12">Основна сфера деяльности
                                краткое описание желательно в две строки</p>
                            <Link href={route('service')} className="main-page-link-btn -purple">Посетить</Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-outer ">
                <FormAppDoctor />
            </div>

        </Layout>
    );
}
