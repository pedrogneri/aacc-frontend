import styled from 'styled-components/macro';

export const Container = styled.table`
  width: 100%;
  border-collapse: collapse; 
  max-width: 1200px;
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
  padding: 20px 12px 20px 0;
  max-width: 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  &:last-child {
    text-align: center;
  }
`;

type ColumnNameProps = {
  width: number;
}

export const ColumnName = styled.th<ColumnNameProps>`
  font-size: 16px;
  line-height: 1.2;
  color: #7A7A7A;
  font-weight: normal;
  padding: 16px 0;
  text-align: left;
  width: ${({ width }) => width}%;
`;

type StatusProps = {
  status?: 'confirmada' | 'negada' | 'pendente';
}

export const Status = styled.div<StatusProps>`
  display: flex;
  justify-content: center;
  padding: 8px 0;
  width: 104px;
  color: #fff;
  font-weight: 500;

  color: ${({ status }) => {
    switch (status) {
      case 'confirmada':
        return 'rgba(0, 200, 118);';
      case 'pendente':
        return 'rgba(212, 160, 2)';
      case 'negada':
        return 'rgba(235, 87, 87);';
      default:
        return 'rgba(235, 87, 87);';
    }
  }};
  background: ${({ status }) => {
    switch (status) {
      case 'confirmada':
        return 'rgba(0, 200, 118, 0.25);';
      case 'pendente':
        return 'rgba(212,160,2, 0.25)';
      case 'negada':
        return 'rgba(235, 87, 87, 0.25);';
      default:
        return 'rgba(235, 87, 87, 0.25);';
    }
  }}
`;
