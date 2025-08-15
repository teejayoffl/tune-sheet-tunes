import { FC } from 'react'
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts'

interface ChartProps {
  data: any[]
  title?: string
  className?: string
}

interface BarChartProps extends ChartProps {
  dataKey: string
  xAxisKey: string
  color?: string
}

interface LineChartProps extends ChartProps {
  dataKey: string | string[]
  xAxisKey: string
  colors?: string[]
}

interface PieChartProps extends ChartProps {
  dataKey: string
  nameKey: string
  colors?: string[]
}

const COLORS = ['#0ea5e9', '#10b981', '#8b5cf6', '#f59e0b', '#ef4444', '#6366f1']

export const TaxBarChart: FC<BarChartProps> = ({ 
  data, 
  title, 
  dataKey, 
  xAxisKey, 
  color = '#0ea5e9',
  className = '' 
}) => {
  return (
    <div className={`my-8 ${className}`}>
      {title && <h3 className="text-2xl font-semibold mb-4">{title}</h3>}
      <div className="h-80 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
            <XAxis 
              dataKey={xAxisKey} 
              tick={{ fill: '#6b7280' }}
              tickLine={{ stroke: '#e5e7eb' }}
            />
            <YAxis 
              tick={{ fill: '#6b7280' }}
              tickLine={{ stroke: '#e5e7eb' }}
            />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: '#fff',
                border: '1px solid #e5e7eb',
                borderRadius: '0.5rem'
              }}
            />
            <Legend 
              wrapperStyle={{ paddingTop: '20px' }}
              iconType="square"
            />
            <Bar 
              dataKey={dataKey} 
              fill={color}
              radius={[8, 8, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}

export const TaxLineChart: FC<LineChartProps> = ({ 
  data, 
  title, 
  dataKey, 
  xAxisKey, 
  colors = COLORS,
  className = '' 
}) => {
  const dataKeys = Array.isArray(dataKey) ? dataKey : [dataKey]
  
  return (
    <div className={`my-8 ${className}`}>
      {title && <h3 className="text-2xl font-semibold mb-4">{title}</h3>}
      <div className="h-80 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
            <XAxis 
              dataKey={xAxisKey} 
              tick={{ fill: '#6b7280' }}
              tickLine={{ stroke: '#e5e7eb' }}
            />
            <YAxis 
              tick={{ fill: '#6b7280' }}
              tickLine={{ stroke: '#e5e7eb' }}
            />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: '#fff',
                border: '1px solid #e5e7eb',
                borderRadius: '0.5rem'
              }}
            />
            <Legend 
              wrapperStyle={{ paddingTop: '20px' }}
              iconType="line"
            />
            {dataKeys.map((key, index) => (
              <Line
                key={key}
                type="monotone"
                dataKey={key}
                stroke={colors[index % colors.length]}
                strokeWidth={2}
                dot={{ fill: colors[index % colors.length], r: 4 }}
                activeDot={{ r: 6 }}
              />
            ))}
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}

export const TaxPieChart: FC<PieChartProps> = ({ 
  data, 
  title, 
  dataKey, 
  nameKey,
  colors = COLORS,
  className = '' 
}) => {
  return (
    <div className={`my-8 ${className}`}>
      {title && <h3 className="text-2xl font-semibold mb-4 text-center">{title}</h3>}
      <div className="h-80 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              labelLine={false}
              label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
              outerRadius={100}
              fill="#8884d8"
              dataKey={dataKey}
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
              ))}
            </Pie>
            <Tooltip 
              contentStyle={{ 
                backgroundColor: '#fff',
                border: '1px solid #e5e7eb',
                borderRadius: '0.5rem'
              }}
            />
            <Legend 
              verticalAlign="bottom"
              height={36}
              iconType="circle"
            />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}