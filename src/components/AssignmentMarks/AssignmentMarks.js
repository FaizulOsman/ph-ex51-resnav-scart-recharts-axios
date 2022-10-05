import { CartesianGrid, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';

const AssMarks = () => {
    const data = [
        { name: "Ass 1", marks: 60, quiz: 2400, amt: 2400 },
        { name: "Ass 2", marks: 58, quiz: 1398, amt: 2210 },
        { name: "Ass 3", marks: 60, quiz: 9800, amt: 2290 },
        { name: "Ass 4", marks: 60, quiz: 3908, amt: 2000 },
        { name: "Ass 5", marks: 60, quiz: 4800, amt: 2181 },
        { name: "Ass 6", marks: 60, quiz: 3800, amt: 2500 },
        { name: "Ass 7", marks: 60, quiz: 4300, amt: 2100 }
    ];


    return (
        <div>
            <LineChart width={700} height={400} data={data}>
                <Line type="monotone" dataKey="marks" stroke="red" />
                <XAxis dataKey="name" />
                <YAxis />
                <CartesianGrid stroke="lightgray" strokeDasharray="5 5" />
                <Tooltip />
            </LineChart>
        </div>
    );
};

export default AssMarks;