import '../css/mapa.css'

const Mapa = (props) => {
    return (
        <div className="mapa">
            <h2>Ubicación</h2>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.016888186359!2d-58.384145324209065!3d-34.603734457499165!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4aa9f0a6da5edb%3A0x11bead4e234e558b!2sObelisco!5e0!3m2!1ses-419!2sar!4v1701318355428!5m2!1ses-419!2sar" style={{
                width: 600, height: 450,
                border: 0
            }}              ></iframe>
        </div>
    )
}





export default Mapa;