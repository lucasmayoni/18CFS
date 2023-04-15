import { useState } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { PLANES } from '../utils/planes.mock';
import { TURNOS } from '../utils/turnos.mock'



const FlightSchedule = () => {
    const [requestParams, setRequestParams] = useState({
        plane: "",
        fecha: "",
        hora: ""
    });
    const [startDate, setStartDate] = useState(new Date());
    return (
        <div>
            <p>This is FS</p>
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    const formData = new FormData(e.target);
                    const obj = {
                        plane: formData.get("plane") ?? "",
                        fecha: formData.get("date") ?? "",
                        hora: formData.get("hour") ?? "",
                    };
                    setRequestParams(obj);
                }}

            >
                <label htmlFor="Avion">
                    Avion:
                    <select id="plane" name="plane">
                        {
                            PLANES.map((plane) => {
                                return (
                                    <option key={plane.id} value={plane.code}>{plane.code} - {plane.name}</option>
                                )
                            })
                        }
                    </select>
                </label>
                <label htmlFor="Fecha">
                    Fecha:
                    <DatePicker id="date" name="date" selected={startDate} onChange={(date) => setStartDate(date)} />
                </label>
                <label htmlFor="Hora">
                    Turno:
                    <select id="hour" name="hour">
                        {
                            TURNOS.map((turno) => {
                                return (
                                    <option value={turno.detalle} key={turno.id}>{turno.detalle}</option>
                                )
                            })
                        }
                    </select>
                </label>
                <button className="rounded px-6 py-2 color text-white hover:opacity-50 border-none bg-orange-500">
                    Submit
                </button>
            </form>
            <div>
                <p>Detalle Reserva: {requestParams.fecha} -  {requestParams.plane} - {requestParams.hora}</p>
            </div>
        </div>
    )
}

export default FlightSchedule;