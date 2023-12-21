import { addHours, format, getDate, getDay } from "date-fns";
import { ChartSettings } from "../store/globalSettingsSlice";

export interface ChartData {
  cashFlow: number,
  soldItems: number,
}

export const generateRandomItems = (count = 31): ChartData[] => {
  const chartData: ChartData[] = [];

  for (let i = 0; i < count; i++) {
    const newItem: ChartData = {
      cashFlow: Math.floor(Math.random() * 1000),
      soldItems: Math.floor(Math.random() * 50),
    };

    chartData.push(newItem);
  }

  return chartData;
}

export interface ChartDataWithTimeStamp { timeStamp: string; data: ChartData }

export interface SerializedChartData {
  name: string,
  cashFlow?: number,
  soldItems?: number,
  previous_cashFlow?: number,
  previous_soldItems?: number,
}

export function prepareDataForChart(data: ChartData[], settings: Omit<ChartSettings, "type" | "previousSerieVisible">): SerializedChartData[] {

  const dataWithTimeStamp: ChartDataWithTimeStamp[] = mapChartDataToRange(data, settings.range);
  const previousSerie: ChartDataWithTimeStamp[] = mapChartDataToRange(generateRandomItems(), settings?.range);

  return dataWithTimeStamp.map((item, index) => ({
    name: item?.timeStamp,
    cashFlow: item.data.cashFlow,
    previous_cashFlow: previousSerie[index].data.cashFlow,
    soldItems: item.data.soldItems,
    previous_soldItems: previousSerie[index].data.soldItems,
  }));

}

function mapChartDataToRange(data: ChartData[], range: 'day' | 'week' | 'month'): ChartDataWithTimeStamp[] {
  if (range == 'day') {
    return mapItemsToHours(data)
  } else if (range == 'week') {
    return mapItemsToWeekDays(data)
  }
  else {
    return mapItemsToMonthDays(data)
  }
}

function mapItemsToHours(chartData: ChartData[]): ChartDataWithTimeStamp[] {
  const currentDate = new Date();
  const currentHour = currentDate.getHours();

  const mappedData = chartData
    .filter((_, index) => index < currentHour)
    .map((item, index) => {
      const timeStamp = (index + 1).toString() + ":00";
      return {
        timeStamp,
        data: item
      };
    });

  return mappedData;
}
function mapItemsToWeekDays(chartData: ChartData[]): ChartDataWithTimeStamp[] {

  const daysOfWeek = ['Pon', 'Wt', 'Śr', 'Czw', 'Pt', 'Sb', "Nd"]
  const currentDate = new Date();
  const weekDay = getDay(currentDate);

  const mappedData = chartData
    .filter((_, index) => index < weekDay)
    .map((item, index) => {
      return {
        timeStamp: daysOfWeek[index],
        data: item
      };
    });

  return mappedData;
}

function mapItemsToMonthDays(chartData: ChartData[]): ChartDataWithTimeStamp[] {
  const currentDate = new Date();
  const monthDay = getDate(currentDate);

  const mappedData = chartData
    .filter((_, index) => index < monthDay)
    .map((item, index) => {
      return {
        timeStamp: (index + 1).toString(),
        data: item
      };
    });

  return mappedData;
}