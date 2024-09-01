import React, { ReactNode } from 'react';
// Styles
import './PlanCard.scss';

type PlanCardProps = {
  header: string;
  footer: string;
  className?: string;
  children: ReactNode;
};

const PlanCard = ({
  header,
  className = '',
  footer,
  children,
}: PlanCardProps) => {
  return (
    <aside className={`m-plan-card fade-in-scroll ${className}`}>
      <header>{header}</header>
      <div className='m-plan-card-content'>{children}</div>
      <footer>{footer}</footer>
    </aside>
  );
};

export default PlanCard;
