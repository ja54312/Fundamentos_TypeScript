import {subDays , format} from 'date-fns'

const date = new Date(1998,1,28) //0enero 1 febrero .... 11 diciembre
const rta = subDays(date,30)
const str = format(rta,'yyyy/MM/dd')
console.log(str,'respuesta')
