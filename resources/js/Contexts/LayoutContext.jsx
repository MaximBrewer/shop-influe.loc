import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import moment from 'moment';
import ruLocale from "date-fns/locale/ru";
import DatePicker, { registerLocale } from "react-datepicker";
registerLocale("ru", ruLocale);
import ruMoment from "./moment.ru"
import numberFormat from "./numberFormat"
moment.locale('ru', ruMoment);

const LayoutContext = React.createContext();

LayoutContext.propTypes = {
    children: PropTypes.element.isRequired
};

const priceFormat = (price) => {
    return (numberFormat(price, 2, ',', '') + ' ₸');
}

function numWord(value, words) {
    value = Math.abs(value) % 100;
    var num = value % 10;
    if (value > 10 && value < 20) return words[2];
    if (num > 1 && num < 5) return words[1];
    if (num == 1) return words[0];
    return words[2];
}

const LayoutProvider = (props) => {

    const { children } = props

    const [loading, setLoading] = useState(false)
    const [modal, setModal] = useState(null)

    useEffect(() => {
        // router.on('start', () => setCopen(false))
        return () => {
        };
    }, []);

    useEffect(() => {
        if (modal) document.body.classList.add('overflow-hidden')
        else document.body.classList.remove('overflow-hidden')
    }, [modal]);

    return <LayoutContext.Provider
        value={{
            modal,
            setModal,
            moment,
            loading,
            setLoading,
            numWord,
            priceFormat
        }}
    >

        {children}
        {

            modal ? <div className={`flex items-center justify-center fixed overflow-y-auto top-0 left-0 w-full h-full bg-black bg-opacity-50 z-100`} onClick={() => setModal(null)} >
                <div className={`mx-2 relative mx-auto max-h-screen py-8 px-8 bg-white rounded-2xl flex flex-col justify-center`} onClick={(e) => {
                    document.dispatchEvent(new Event('clickinmodal'))
                    e.stopPropagation()
                }}>
                    <div>
                        {modal}
                    </div>
                </div>
            </div> : ``
        }
    </LayoutContext.Provider >
}

const useLayout = () => {
    const context = React.useContext(LayoutContext);

    if (context === undefined) {
        throw new Error(`useLayout must be used within a LayoutProvider`);
    }

    return context;
}

export { LayoutProvider, useLayout };
