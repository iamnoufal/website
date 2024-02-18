import { BoxTypeMap } from '@mui/system';
import { OverridableComponent } from '@mui/types';
import { OverrideProps } from '@mui/OverridableComponent';
import { Theme as MaterialTheme } from '@mui/styles';

/**
 *
 * Demos:
 *
 * - [Box](https://mui.com/material-ui/react-box/)
 *
 * API:
 *
 * - [Box API](https://mui.com/material-ui/api/box/)
 */

declare const Box: <D extends React.ElementType = 'div'>(props: BoxProps<D> & { component?: D }) => JSX.Element;

export type BoxProps<
  RootComponent extends React.ElementType = BoxTypeMap['defaultComponent'],
  AdditionalProps = {},
> = OverrideProps<BoxTypeMap<AdditionalProps, RootComponent, MaterialTheme>, RootComponent>;

export default Box;
