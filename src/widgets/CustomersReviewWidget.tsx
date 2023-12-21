import React, { FunctionComponent, useEffect, useState } from "react";
import * as ReactDOM from "react-dom";
import CardWithTitle from "../shared/CardWithTitle";
import { RoutesPath } from "../core/constants/RoutesPath.const";
import { useTranslation } from "react-i18next";
import Toggle, { ToggleItem } from "../shared/Toggle";
import { useDispatch, useSelector } from "react-redux";
import { ReviewsDisplayed, changeReviewsDisplayed } from "../core/store/globalSettingsSlice";
import StarsDisplay from "../shared/StarsDisplay";
import styled from "styled-components";

export interface CommentRow {
  author: string,
  review: number,//betwen 1 and 5 only integers,
  comment?: string
}

const ToggleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  width: 100%;
`

const TableComment = styled.td`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`
const CustomerTable = styled.table`
  width: 100%;
  margin-top: 12px;
  table-layout: fixed;
`
const CustomerTableRow = styled.tr`
  border-bottom: 1px solid var(--main-color);
  font-size: 16px;
  width: 33%;

  &:first-child{
    border-top: 1px solid var(--main-color);
  }
  &>td{
    padding: 6px 12px;
  }
`

export const CustomersReviewWidget: FunctionComponent = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const checkedReviewType = useSelector((state: any) => state.globalSettings.reviewsDisplayed);
  const comments = useSelector((state: any) => state?.user.shops[state?.user?.selectedShop].comments)
  const [filteredComments, setFilteredComments] = useState([] as CommentRow[]);

  const items: ToggleItem[] = [
    { id: 'all', title: t('customersReview.all') },
    { id: 'positive', title: t('customersReview.all') },
    { id: 'nagative', title: t('customersReview.nagative') },
  ]

  const handleToggleChange = (val) => {
    dispatch(changeReviewsDisplayed(val))
  }

  useEffect(() => {
    setFilteredComments(FilterComments(checkedReviewType, comments).slice(0, 5));
  }, [checkedReviewType, comments])

  return (
    <>
      <CardWithTitle icon="star" title={t('customersReview.title')} style={{ gridArea: 'customerReview' }} link={'/' + RoutesPath.CUSTOMER_REVIEW}>
        {
          comments?.length == 0 ?
            <NoSuitableComments />
            :
            <>
              <ToggleWrapper>
                <Toggle title={t('customersReview.title')} items={items} handleChange={handleToggleChange} checked={checkedReviewType} />
              </ToggleWrapper>

              {filteredComments?.length == 0 ?
                <NoSuitableComments /> :
                <CustomerTable>
                  <tbody>
                    {
                      filteredComments?.map((item, index) => (
                        <CustomerTableRow key={index}>
                          <td>{item?.author}</td>
                          <td>
                            <StarsDisplay review={item?.review} />
                          </td>
                          <TableComment title={item?.comment}>{item?.comment}</TableComment>
                        </CustomerTableRow>
                      ))
                    }
                  </tbody>
                </CustomerTable>
              }
            </>
        }
      </CardWithTitle>
    </>
  )
}

function NoSuitableComments() {
  const { t } = useTranslation();
  return (
    <h2 style={{ width: '100%', height: '60px', textAlign: 'center', margin: 0, padding: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      {t('customersReview.noSuitableComments')}
    </h2>
  )
}

export function FilterComments(type: ReviewsDisplayed, comments: CommentRow[]): CommentRow[] {
  if (type == 'all')
    return comments;
  else if (type == 'positive') {
    return comments?.filter((item) => item?.review >= 3);
  }
  else return comments?.filter((item) => !(item?.review >= 3));
}