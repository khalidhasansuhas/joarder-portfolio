import React, { PureComponent } from 'react';
import { PieChart, Pie, Sector, ResponsiveContainer } from 'recharts';
import { Link } from 'react-scroll';

const data = [
    { name: 'Cyber Security', value: 1, segment: 'cs' },
    { name: 'Machine Learning', value: 3, segment: 'ml' },
    { name: 'Data Science', value: 5, segment: 'ds' },
    { name: 'IoT', value: 1, segment: 'iot' },
    { name: 'Deep Learning', value: 1, segment: 'dl' },
    { name: 'Artificial Intelegence', value: 2, segment: 'ai' },
];

const renderActiveShape = (props) => {
    const RADIAN = Math.PI / 180;
    const { cx, cy, midAngle, innerRadius, outerRadius, startAngle, endAngle, fill, payload, value, segment } = props;
    const sin = Math.sin(-RADIAN * midAngle);
    const cos = Math.cos(-RADIAN * midAngle);
    const sx = cx + (outerRadius + 10) * cos;
    const sy = cy + (outerRadius + 10) * sin;
    const mx = cx + (outerRadius + 30) * cos;
    const my = cy + (outerRadius + 30) * sin;
    const ex = mx + (cos >= 0 ? 1 : -1) * 22;
    const ey = my;
    const textAnchor = cos >= 0 ? 'start' : 'end';

    return (
        <g>
            <Link className='cursor-pointer font-bold' to={`${segment}`}>

                <text x={cx} y={cy} dy={8} textAnchor="middle" fill='#ff8c00'>
                    {payload.name}
                </text>
            </Link>
            <Sector
                cx={cx}
                cy={cy}
                innerRadius={innerRadius}
                outerRadius={outerRadius}
                startAngle={startAngle}
                endAngle={endAngle}
                fill="#ff8c00"
            />
            <Sector
                cx={cx}
                cy={cy}
                startAngle={startAngle}
                endAngle={endAngle}
                innerRadius={outerRadius + 6}
                outerRadius={outerRadius + 10}
                fill="#ff8c00"
            />
            <path d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`} stroke={fill} fill="none" />
            <circle cx={ex} cy={ey} r={2} fill="#ff8c00" stroke="none" />
            <Link className='cursor-pointer font-semibold' to={`${segment}`}><text className=' text-sky-600 hover:text-[#ff8c00]' x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} textAnchor={textAnchor} fill="#ff8c00">{`${value}`}</text></Link>
            {/* <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} dy={18} textAnchor={textAnchor} fill="#999">
        {`(Percent: ${(percent * 100).toFixed(2)}%)`}
      </text> */}
        </g>
    );
};

export default class Example extends PureComponent {
    static demoUrl = 'https://codesandbox.io/s/pie-chart-with-customized-active-shape-y93si';

    state = {
        activeIndex: 0,
    };

    onPieEnter = (_, index) => {
        this.setState({
            activeIndex: index,
        });
    };

    render() {
        return (
            <ResponsiveContainer width="100%" height="100%">
                <PieChart width={400} height={400}>
                    <Pie
                        activeIndex={this.state.activeIndex}
                        activeShape={renderActiveShape}
                        data={data}
                        cx="50%"
                        cy="50%"
                        innerRadius={90}
                        outerRadius={120}
                        fill="#8884d8"
                        dataKey="value"
                        onMouseEnter={this.onPieEnter}
                    />
                </PieChart>
            </ResponsiveContainer>
        );
    }
}
