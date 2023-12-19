import React, { FunctionComponent, useEffect, useState } from "react";
import * as ReactDOM from "react-dom";
import Card from "../shared/Card";
import CardWithTitle from "../shared/CardWithTitle";
import { RoutesPath } from "../core/constants/RoutesPath.const";
import { useTranslation } from "react-i18next";
import './CustomersReviewWidget.css'
import Toggle, { ToggleItem } from "../shared/Toggle";
import { useDispatch, useSelector } from "react-redux";
import { ReviewsDisplayed, changeReviewsDisplayed } from "../core/store/globalSettingsSlice";
import StarsDisplay from "../shared/StarsDisplay";

export interface CommentRow {
  author: string,
  review: number,//betwen 1 and 5 only integers,
  comment?: string
}

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
        <Toggle title={t('customersReview.title')} items={items} handleChange={handleToggleChange} checked={checkedReviewType} />

        <table className="customers__table">
          <tbody>
            {
              filteredComments?.map((item, index) => (
                <tr key={index}>
                  <td>{item?.author}</td>
                  <td>
                    <StarsDisplay review={item?.review} />
                  </td>
                  <td className="customers__table__comment" title={item?.comment}>{item?.comment}</td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </CardWithTitle>
    </>
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