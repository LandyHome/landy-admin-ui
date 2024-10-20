import type { CardProps } from '@mui/material/Card';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import CardHeader from '@mui/material/CardHeader';

import { Iconify } from 'src/components/iconify';

// ----------------------------------------------------------------------

type Props = CardProps & {
  title?: string;
  subheader?: string;
};

export function AnalyticsNews({ title, subheader,  ...other }: Props) {
  return (
    <Card {...other}>
      <CardHeader title={title} subheader={subheader} sx={{ mb: 1 }} />

      <Box sx={{ p: 2, textAlign: 'right' }}>
        <Button
          size="small"
          color="inherit"
          endIcon={<Iconify icon="eva:arrow-ios-forward-fill" width={18} sx={{ ml: -0.5 }} />}
        >
          View all
        </Button>
      </Box>
    </Card>
  );
}

