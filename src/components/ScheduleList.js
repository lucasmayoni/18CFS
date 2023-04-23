import { Table } from 'antd';
const { Column } = Table;

const ScheduleList = () => {
    return (
        <Table>
            <Column title="Fecha" dataIndex="age" key="age" />
            <Column title="Turno" dataIndex="address" key="address" />
            <Column title="Avion" dataIndex="address" key="address" />
            <Column title="Piloto" dataIndex="address" key="address" />
            <Column title="Instructor" dataIndex="address" key="address" />
        </Table>
    )
}

export default ScheduleList;