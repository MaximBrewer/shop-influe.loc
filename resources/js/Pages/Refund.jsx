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
                        <div className="info__subtitle fw-700-18-22">
                            <p>Причины и условия по возврату и обмену товара</p>
                        </div>
                        <div className="refund__title-list">
                            <div className="refund-list__title fw-700-16-20">
                                1. Причина
                            </div>
                            <div className="refund-list__desc fw-400-16-19">
                                <p>Идейные соображения высшего порядка, а также реализация намеченных плановых заданий играет важную роль в формировании систем массового участия. Равным образом постоянное информационно-пропагандистское обеспечение нашей деятельности представляет собой интересный эксперимент проверки существенных финансовых и административных условий. Товарищи! консультация с широким активом играет важную роль в формировании существенных финансовых и административных условий. С другой стороны новая модель организационной деятельности позволяет выполнять важные задания по разработке форм развития. Разнообразный и богатый опыт новая модель организационной деятельности в значительной степени обуславливает создание новых предложений.</p>
                            </div>
                            <div className="refund-list__title fw-700-16-20">
                                2. Условия
                            </div>
                            <div className="refund-list__desc fw-400-16-19">
                                <p>Идейные соображения высшего порядка, а также реализация намеченных плановых заданий играет важную роль в формировании систем массового участия. Равным образом постоянное информационно-пропагандистское обеспечение нашей деятельности представляет собой интересный эксперимент проверки существенных финансовых и административных условий. Товарищи! консультация с широким активом играет важную роль в формировании существенных финансовых и административных условий. С другой стороны новая модель организационной деятельности позволяет выполнять важные задания по разработке форм развития. Разнообразный и богатый опыт новая модель организационной деятельности в значительной степени обуславливает создание новых предложений.</p>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </div>
        <br />
        <br />
        <br />
        <br />
    </Layout >
}