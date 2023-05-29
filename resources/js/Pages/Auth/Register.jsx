import { useEffect } from 'react';
import Layout from '@/Layouts/Layout';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Head, Link, useForm } from '@inertiajs/react';

export default function Register(props) {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
    });

    useEffect(() => {
        return () => {
            reset('password', 'password_confirmation');
        };
    }, []);

    const submit = (e) => {
        e.preventDefault();

        post(route('register'));
    };

    return (
        <Layout {...props}>
            <Head title="Register" />

            <div class="catalogue-categories">
                <div class="container-outer">
                    <div class="catalogue-categories__outer">
                        <div class="catalogue-categories__inner">
                            <div class="catalogue-categories-title-section">
                                <div class="catalogue-categories-title-item fw-600-14-17">
                                    <p>Стельки</p>
                                </div>
                                <div class="catalogue-categories-title-item fw-600-14-17">
                                    <p>Корсеты</p>
                                </div>
                                <div class="catalogue-categories-title-item fw-600-14-17">
                                    <p>Обувь</p>
                                </div>
                                <div class="catalogue-categories-title-item fw-600-14-17">
                                    <p>Название категории</p>
                                </div>
                                <div class="catalogue-categories-title-item fw-600-14-17">
                                    <p>Название категории</p>
                                </div>
                            </div>
                            <div class="catalogue-breadcrumb-wrapper fw-400-18-22">
                                <div class="catalogue-breadcrumb-item">
                                    <a href=""><p>Главная</p></a>
                                </div>
                                <div class="catalogue-breadcrumb-dot-wrapper center">
                                    <div class="catalogue-breadcrumb-dot"></div>
                                </div>
                                <div class="catalogue-breadcrumb-item">
                                    <a href=""><p>Каталог</p></a>
                                </div>
                                <div class="catalogue-breadcrumb-dot-wrapper center">
                                    <div class="catalogue-breadcrumb-dot"></div>
                                </div>
                                <div class="catalogue-breadcrumb-item">
                                    <a href=""><p>Регистрация</p></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="registration-section">
                <div class="container-outer">
                    <div class="registration-section__title catalogue-section__title center fw-700-45-55">
                        <p>Регистрация</p>
                    </div>

                    <div class="registration-section__subtitle reg-subtitle fw-400-16-19">
                        <p>Идейные соображения высшего порядка, а также реализация намеченных плановых заданий играет важную роль в формировании систем массового участия.</p>
                    </div>
                    <form class="registration-section__form reg-form fw-400-16-19" onSubmit={submit}>
                        <div class="reg-form__row">
                            <div style={{ width: `50%` }}>
                                <input
                                    id="name"
                                    name="name"
                                    value={data.name} class="reg__input"
                                    autoComplete="name"
                                    isFocused={true}
                                    onChange={(e) => setData('name', e.target.value)}
                                    required
                                    placeholder={`Имя`}
                                />
                                <InputError message={errors.name} className="mt-2" />
                            </div>
                            <div style={{ width: `50%` }}>
                                <input
                                    id="email"
                                    type="email"
                                    name="email"
                                    value={data.email} class="reg__input"
                                    autoComplete="username"
                                    onChange={(e) => setData('email', e.target.value)}
                                    required
                                    placeholder={`E-mail`}
                                />
                                <InputError message={errors.email} className="mt-2" />
                            </div>
                        </div>

                        <div class="reg-form__col">

                            <input
                                id="password"
                                type="password"
                                name="password"
                                placeholder="Пароль"
                                value={data.password}
                                class="reg__input"
                                autoComplete="new-password"
                                onChange={(e) => setData('password', e.target.value)}
                                required
                            />

                            <InputError message={errors.password} className="mt-2" />
                        </div>

                        <div class="reg-form__col">

                            <input
                                id="password_confirmation"
                                type="password"
                                placeholder="Подтвердите пароль"
                                name="password_confirmation"
                                value={data.password_confirmation}
                                class="reg__input"
                                autoComplete="new-password"
                                onChange={(e) => setData('password_confirmation', e.target.value)}
                                required
                            />

                            <InputError message={errors.password_confirmation} className="mt-2" />
                        </div>

                        <div class="reg-form__btn-wrapper fw-700-16-20">
                            {/* <Link
                                href={route('login')}
                                className="underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                                Already registered?
                            </Link> */}

                            <button class="btn-primary" disabled={processing}>Зарегистрироваться</button>
                        </div>
                    </form>
                    <br/>
                    <br/>
                </div>
            </div>
        </Layout>
    );
}
