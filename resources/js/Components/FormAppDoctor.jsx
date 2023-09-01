import FormDoctorImage from "@/../images/form-doctor.png"
import { useForm } from "@inertiajs/react";

export default (props) => {


    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        password: '',
        remember: false,
    });

    const submit = (e) => {
        e.preventDefault();
        post(route('login'));
    };


    return <div className="form-app-doctor">
        <div className="form-app-doctor-content">
            <div className="form-app-doctor-title">
                <h4>Запишитесь к Врачу </h4>
                <p>Оставьте контактные данные, выберите услугу и салон</p>
            </div>
            <form action="" className="form-app-doctor-form" onSubmit={submit}>
                <div className="grid sm:grid-cols-2 gap-x-7 gap-y-5">
                    <input type="text" name="" className="form-app-doctor-input" placeholder="ФИО" />
                    <div className="ordering-contacts-form__selectbox mr-0">
                        <select name="selectOblast" defaultValue={""} className="ordering-contacts-form__select w-full border-0">
                            <option value="" disabled={true}>Выберите услугу</option>
                            <option value="almatinskaya">-</option>
                            <option value="zhambylskaya">-</option>
                            <option value="karagandinskaya">-</option>
                        </select>
                    </div>
                    <input type="tel" name="" className="form-app-doctor-input" placeholder="Номер телефона" />
                    <div className="ordering-contacts-form__selectbox mr-0">
                        <select name="selectOblast" defaultValue={""} className="ordering-contacts-form__select w-full border-0">
                            <option value="" disabled={true}>Ваш город</option>
                            <option value="almatinskaya">Астана</option>
                            <option value="zhambylskaya">Алматы</option>
                            <option value="karagandinskaya">Шымкент</option>
                        </select>
                    </div>
                    <button className="form-app-doctor-btn" type="submit">Выбрать дату и время</button>
                </div>
            </form>
            <div className="form-app-doctor-contact">
                <span>Также запись по телефону:</span>
                <a href="#" className="flex flex-col md:flex-row gap-x-4 gap-y-1 md:items-center">
                    <span>8 777 777-77-77</span>
                    <span className="-purple">Запись к врачу в 1 клик</span>
                </a>
            </div>
        </div>
        <div className="form-app-doctor-img">
            <img src={FormDoctorImage} alt="" />
        </div>
    </div>
}