import PropTypes from 'prop-types';

export const FirtsApp = ({ title, subtitle, name }) => {

    return (
        <>
            <h1 data-testid="test-title">{title}</h1>
            {/* <code>{JSON.stringify(newMessage)}</code> */}
            <p>{subtitle}</p>
            <p>{subtitle}</p>
            <p>{name}</p>
        </>
    )
}

// obliga a enviar valores requeridos
FirtsApp.propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string,

}

FirtsApp.defaultProps = {
    name: "Daniel Romero",
    // title: 'no hay titulo',
    subtitle: 'no hay subtitulo'
}