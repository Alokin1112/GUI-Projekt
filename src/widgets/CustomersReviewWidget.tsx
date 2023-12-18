import React, { FunctionComponent } from "react";
import * as ReactDOM from "react-dom";
import Card from "../shared/Card";
import CardWithTitle from "../shared/CardWithTitle";
import { RoutesPath } from "../core/constants/RoutesPath.const";
import { useTranslation } from "react-i18next";
import './CustomersReviewWidget.css'
import Toggle, { ToggleItem } from "../shared/Toggle";

export interface CommentRow {
  author: string,
  review: number,//betwen 1 and 5 only integers,
  comment?: string
}

export const COMMENTS: CommentRow[] = [
  { author: "Alice", review: 5, comment: "Excellent service and fast delivery!" },
  { author: "Bob", review: 4, comment: "Good product, but could be improved in some areas." },
  { author: "Charlie", review: 3, comment: "Average experience, nothing special." },
  { author: "David", review: 5, comment: "Absolutely satisfied with my purchase!" },
  { author: "Eva", review: 2, comment: "Disappointing quality, not worth the price." },
  { author: "Frank", review: 4, comment: "Reliable and durable. Happy with my choice." },
  { author: "Grace", review: 1, comment: "Terrible experience. Would not recommend." },
  { author: "Harry", review: 5, comment: "Fantastic customer support! A+" },
  { author: "Ivy", review: 3, comment: "Decent product, but overpriced." },
  { author: "Jack", review: 4, comment: "Great value for money. Solid performance." },
];


export const CustomersReviewWidget: FunctionComponent = () => {
  const { t } = useTranslation();

  const items: ToggleItem[] = [
    { id: 'all', title: t('customersReview.all') },
    { id: 'positive', title: t('customersReview.all') },
    { id: 'nagative', title: t('customersReview.nagative') },
  ]

  return (
    <>
      <CardWithTitle icon="star" title={t('customersReview.title')} style={{ gridArea: 'customerReview' }} link={'/' + RoutesPath.CUSTOMER_REVIEW}>
        <Toggle title={t('customersReview.title')} items={items} checked='all' />

        <table className="customers__table">
          <tr>
            <td>Row 1, Cell 1</td>
            <td>Row 1, Cell 2</td>
            <td>Row 1, Cell 3</td>
          </tr>
          <tr>
            <td>Row 2, Cell 1</td>
            <td>Row 2, Cell 2</td>
            <td>Row 2, Cell 3</td>
          </tr>
        </table>

      </CardWithTitle>
    </>
  )
}

