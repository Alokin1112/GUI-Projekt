import React, { FunctionComponent } from "react";
import * as ReactDOM from "react-dom";
import CardWithTitle from "../shared/CardWithTitle";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import Card from "../shared/Card";

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 8px;
`

const CardContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 16px;
  padding-left: 16px;
  padding-right: 16px;
  min-height: 80px;
  color:var(--main-color);
`
const Icon = styled.span`
  font-size:40px;
`

export const Tips: string[] = [
  'isodIsBetter',
  'goodDescription',
  'highQualityPhotos',
  'transparency',
  'prices',
]

export const SaleTipsWidget: FunctionComponent = () => {
  const { t } = useTranslation();
  return (
    <>
      <CardWithTitle icon="info" title={t('saleTips.title')} style={{ gridArea: 'saleTips' }} link={'/'}>
        <Wrapper>
          {Tips.map((item) =>
            <Card>
              <CardContent>
                <Icon className="material-icons-outlined">
                  info
                </Icon>

                {t('saleTips.' + item)}
              </CardContent>
            </Card>
          )}
        </Wrapper>
      </CardWithTitle>
    </>
  )
}

