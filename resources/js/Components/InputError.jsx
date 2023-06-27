export default function InputError({ message, ...props }) {
    return message ? (
        <p {...props} className={'error-input-text'}>
            {message}
        </p>
    ) : null;
}
