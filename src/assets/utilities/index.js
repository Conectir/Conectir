export const DAYS = ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sábado']
export const MONTHS = ['Enero', 'Febreo', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']

export const OP_IMGS = {
    Windows: 'XD.png',
    Linux: 'Media.png'
}

export const getTime = date => {
    const hours = date.getHours()
    const minutes = date.getMinutes()

    return `${hours < 10 ? "0" : ""}${hours}:${minutes < 10 ? "0" : ""}${minutes}`
}

export const getDay = date => DAYS[date.getDay()]
export const getMonth = date => MONTHS[date.getMonth()]