import { NextComponentType, NextPageContext } from 'next';
import styled from 'styled-components';
import { dayjs } from '@/libs/locale/date';

/**
 * 日付 テキスト部分
 * どのフォーマットにするか選んでもいいかもね
 */

type Props = {
  className?: string;
  dayText: number;
};

const Wrapper = styled.small``;

/**
 * 2022/08/15 これでやるか 時間はいらない
 * @see https://day.js.org/docs/en/display/format
 */
export const Day: NextComponentType<NextPageContext, null, Props> = ({
  className = '',
  dayText,
}) => {
  // 2022-08-08T13:33:55.758Z これでくる
  return <Wrapper className={className}>{dayjs(dayText).format('YYYY/DD/MM')}</Wrapper>;
};
