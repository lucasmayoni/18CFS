import { Table } from 'antd';
import { SCHEDULES } from '../utils/schedules.mock';
const { Column } = Table;

const ScheduleList = () => {
    const scheduleTable = SCHEDULES
    console.log(localStorage.getItem('schedule'));
    return (
        <Table dataSource={scheduleTable}>
            <Column title="Fecha" dataIndex="date" key="date" />
            <Column title="Turno" dataIndex="hour" key="hour" />
            <Column title="Avion" dataIndex="plane" key="plane" />
            <Column title="Piloto" dataIndex="address" key="address" />
            <Column title="Instructor" dataIndex="address" key="address" />
        </Table>
    )
}

export default ScheduleList;