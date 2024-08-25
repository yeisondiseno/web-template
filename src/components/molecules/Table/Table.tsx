import React, { ReactNode, ComponentPropsWithoutRef } from 'react';
// Styles
import './Table.scss';

type TableType = ComponentPropsWithoutRef<'table'> & {
  head?: Array<string | ReactNode>;
  body?: Array<Array<string | ReactNode>>;
};

const Table = ({ head, body, className, ...props }: TableType) => {
  return (
    <table className={`m-table ${className}`} {...props}>
      {head && (
        <thead className='m-table-head'>
          <tr>
            {head.map((data, index) => (
              <th key={index}>{data}</th>
            ))}
          </tr>
        </thead>
      )}
      {body && (
        <tbody className='m-table-body'>
          {body.map((data, index) => (
            <tr key={index}>
              {data.map((th, indexIntern) => (
                <th key={indexIntern + index}>{th}</th>
              ))}
            </tr>
          ))}
        </tbody>
      )}
    </table>
  );
};

export default Table;
