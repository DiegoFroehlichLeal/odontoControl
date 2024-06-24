// src/components/CardComponent.tsx
import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import { SvgIconComponent } from '@mui/icons-material';

interface CardComponentProps {
  title: string;
  text: string;
  icon?: SvgIconComponent;
}

const CardComponent: React.FC<CardComponentProps> = ({ title, text, icon: IconComponent }) => {
  return (
    <Card style={{ maxWidth: 345, margin: '20px auto', padding: '10px' }}>
      <CardContent>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          {IconComponent && <IconComponent style={{ fontSize: 40, marginRight: 10 }} />}
          <Typography variant="h1" style={{ fontSize: '1.5rem' }}>
            {title}
          </Typography>
        </div>
        <Typography variant="body2" color="textSecondary" component="p">
          {text}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default CardComponent;
