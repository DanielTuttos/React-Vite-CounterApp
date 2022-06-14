import PropTypes from 'prop-types';

export const FirtsApp = ({ title, subtitle }) => {

    return (
        <>
            <h1>{title}</h1>
            {/* <code>{JSON.stringify(newMessage)}</code> */}
            <p>{subtitle}</p>
        </>
    )
}

// obliga a enviar valores requeridos
FirtsApp.propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.number.isRequired
}