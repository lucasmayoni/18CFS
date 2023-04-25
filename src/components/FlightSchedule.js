import { useState } from 'react';
import { PLANES } from '../utils/planes.mock';
import { TURNOS } from '../utils/turnos.mock'
import { Button, Form, Select, DatePicker } from 'antd';
import 'antd/dist/reset.css';



const FlightSchedule = () => {
    const [requestParams, setRequestParams] = useState({
        plane: "",
        fecha: "",
        hora: ""
    });
    const onFinish = (formValues) => {
        const values = {
            ...formValues,
            'date': formValues['date'].format('YYYY-MM-DD')
        }
        setRequestParams(values);
    };
    return (
        <div>
            <Form
                name="MyForm"
                labelCol={{ span: 8 }}
                style={{ maxWidth: 500 }}
                wrapperCol={{ span: 16 }}
                onFinish={onFinish}

            >
                <Form.Item label="Avion" name="plane"
                    id="plane">
                    <Select
                    >
                        {
                            PLANES.map((plane) => {
                                return (
                                    <Select.Option value={plane.code} key={plane.id} >{plane.code} - {plane.name}</Select.Option>
                                )
                            })
                        }
                    </Select>
                </Form.Item>
                <Form.Item
                    id="date" name="date"
                    label="Fecha:">
                    <DatePicker />
                </Form.Item>
                <Form.Item
                    id="hour" name="hour" label="Turno">
                    <Select >
                        {
                            TURNOS.map((turno) => {
                                return (
                                    <Select.Option value={turno.detalle} key={turno.id}>{turno.detalle}</Select.Option>
                                )
                            })
                        }
                    </Select>
                </Form.Item>
                <Button type='primary' htmlType='submit'>Submit</Button>
            </Form>
            <div>
                {requestParams.plane} -
            </div>
        </div>
    )
}

export default FlightSchedule;