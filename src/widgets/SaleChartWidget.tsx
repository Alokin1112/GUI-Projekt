import React, { FunctionComponent } from "react";
import * as ReactDOM from "react-dom";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { ChartSettings } from "../core/store/globalSettingsSlice";
import CardWithTitle from "../shared/CardWithTitle";
import { changeChartSettings } from '../core/store/globalSettingsSlice'
import styled from "styled-components";
import Toggle, { ToggleItem } from "../shared/Toggle";
import { Switch } from "../shared/Switch";

const AlignedToRight = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
`
const RowItems = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 16px;
`



export const SaleChartWidget: FunctionComponent = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const chartSettings: ChartSettings = useSelector((state: any) => state.globalSettings.chart);

  const presentedValues: ToggleItem[] = [
    { id: 'cashFlow', title: t('saleChart.cashFlow') },
    { id: 'soldItems', title: t('saleChart.soldItems') },
  ];

  const presentedRange: ToggleItem[] = [
    { id: 'day', title: t('saleChart.today') },
    { id: 'week', title: t('saleChart.week') },
    { id: 'month', title: t('saleChart.month') },
  ];

  const handleChartSettingsChange = (field: string, value: string | boolean) => {
    dispatch(changeChartSettings({
      ...chartSettings,
      [field]: value
    }))
  }

  return (
    <>
      <CardWithTitle icon="data_usage" title={t('saleChart.title')} style={{ gridArea: 'saleChart' }} link={'/'}>
        <AlignedToRight>
          <ChartTypeToggle value={chartSettings?.type} callback={(val) => handleChartSettingsChange('type', val)} />
        </AlignedToRight>

        <Switch title={t('saleChart.showPreviousSerie')} checked={chartSettings.previousSerieVisible} handleChange={(val) => handleChartSettingsChange('previousSerieVisible', val)} />
        <RowItems>
          <Toggle title={t('saleChart.presentedValue')} items={presentedValues} handleChange={(val) => handleChartSettingsChange('presentedValues', val)} checked={chartSettings.presentedValues} />

          <Toggle title={t('saleChart.presentedRange')} items={presentedRange} handleChange={(val) => handleChartSettingsChange('presentedRange', val)} checked={chartSettings.range} />
        </RowItems>

      </CardWithTitle>
    </>
  )
}

const Centered = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
`

export function ChartTypeToggle(props) {
  const { t } = useTranslation();
  return (<>
    <div
      className="btn-group"
      role="group"
    >
      <input
        type="radio"
        className="btn-check"
        name="line"
        id="line"
        autoComplete="off"
        checked={props.value === 'line'}
        onChange={() => props.callback('line')}
      />
      <label
        className="btn btn-outline-primary"
        htmlFor="line"
      >
        <Centered title={t('saleChart.lineChart')} className="material-icons-outlined">
          stacked_line_chart
        </Centered>
      </label>

      <input
        type="radio"
        className="btn-check"
        name="bar"
        id="bar"
        autoComplete="off"
        checked={props.value === 'bar'}
        onChange={() => props.callback('bar')}
      />
      <label
        className="btn btn-outline-primary"
        htmlFor="bar"
      >
        <Centered title={t('saleChart.barChart')} className="material-icons-outlined">
          equalizer
        </Centered>
      </label>

    </div></>)
}