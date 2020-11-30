import React from 'react';
import { ResponsiveGrid } from '@alifd/next';
import Bar from './components/Bar';
import { logger } from 'ice';

const { Cell } = ResponsiveGrid;

const BarUI = () => (
  <ResponsiveGrid gap={20}>
    <Cell colSpan={12}>
      <Bar />
    </Cell>
  </ResponsiveGrid>
);

export default BarUI;
