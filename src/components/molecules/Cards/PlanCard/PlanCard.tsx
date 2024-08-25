import React, { ReactNode } from 'react';
// Styles
import './PlanCard.scss';

type PlanCardProps = {
  header: string;
  children: ReactNode;
  footer: string;
};

const PlanCard = ({ header, children, footer }: PlanCardProps) => {
  return (
    <aside className='m-plan-card'>
      <header>{header}</header>
      <div className='m-plan-card-content'>{children}</div>
      <footer>{footer}</footer>
    </aside>
  );
};

export default PlanCard;
