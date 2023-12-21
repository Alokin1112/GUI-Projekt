import React, { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line } from 'recharts';
import { ChartSettings } from '../core/store/globalSettingsSlice';
import { prepareDataForChart } from '../core/constants/ChartData.const';
import { useTranslation } from 'react-i18next';

export function SaleChart() {
  const { t } = useTranslation();
  const chartData = useSelector((state: any) => state?.user.shops[state?.user?.selectedShop].chartData)
  const chartSettings: ChartSettings = useSelector((state: any) => state.globalSettings.chart);

  const [formattedChartData, setFormattedChartData] = useState(prepareDataForChart(chartData, chartSettings))

  useEffect(() => {
    setFormattedChartData(prepareDataForChart(chartData, chartSettings))
  }, [chartSettings.range])

  return (
    <>
      <ResponsiveContainer height={400}>
        {
          chartSettings.type == 'bar' ?
            <BarChart data={formattedChartData} margin={{ top: 10, right: 5, left: 5, bottom: 10 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip
                labelFormatter={value => `${t('saleChart.' + (chartSettings.range == 'day' ? 'hour' : 'day'))}: ${value}`}
                cursor
              />
              <Legend formatter={(value) => `${t('saleChart.' + value)}`} />
              <Bar dataKey={chartSettings.presentedValues} fill="#1bdca3" />
              {
                chartSettings?.previousSerieVisible &&
                <Bar dataKey={'previous_' + chartSettings.presentedValues} fill="#9fa6b2" />
              }
            </BarChart>
            :
            <LineChart data={formattedChartData} margin={{ top: 10, right: 5, left: 5, bottom: 10 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip
                labelFormatter={value => `${t('saleChart.' + (chartSettings.range == 'day' ? 'hour' : 'day'))}: ${value}`}
                cursor
              />
              <Legend formatter={(value) => `${t('saleChart.' + value)}`} />
              <Line type="monotone" dataKey={chartSettings.presentedValues} stroke="#1bdca3" />
              {
                chartSettings?.previousSerieVisible &&
                <Line type="monotone" dataKey={'previous_' + chartSettings.presentedValues} stroke="#9fa6b2" />
              }
            </LineChart>
        }

      </ResponsiveContainer>
    </>
  )
}