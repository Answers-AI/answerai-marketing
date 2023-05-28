import { Mixins } from '@mui/material/styles/createMixins';
import { TypographyStyle } from '@mui/material/styles';

declare module '@mui/material/styles' {
  interface BreakpointOverrides {
    // xxl: true; // adds the `xxl` breakpoint
  }
  interface Theme {
    mixins: Mixins;
  }

  interface TypographyVariants {
    bodySmall: TypographyStyle;
  }

  interface TypographyVariantsOptions {
    bodySmall?: TypographyStyle;
  }
}

declare module '@mui/material/styles/createMixins' {
  interface Mixins {}
}

// Update the Typography's variant prop options
declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    bodySmall: true;
  }
}
