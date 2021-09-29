import styled from 'styled-components/macro';

export const Container = styled.table`
  width: 100%;
  border-collapse: collapse; 
`;

export const Fields = styled.tr`
  border-bottom: 1px solid #c4c4c4;
`;

export const Row = styled.tr`
  border-bottom: 1px solid #efefef;
`;

export const Cell = styled.td`
  font-size: 14px;
  line-height: 17px;
  color: #000000;
  font-weight: normal;
  padding: 20px 0;

  &:last-child {
    text-align: center;
  }
`;

type ColumnNameProps = {
  width: number;
}

export const ColumnName = styled.th<ColumnNameProps>`
  font-size: 14px;
  line-height: 17px;
  color: #7A7A7A;
  font-weight: normal;
  padding: 8px 0;
  text-align: left;
  width: ${({ width }) => width}%;
`;
