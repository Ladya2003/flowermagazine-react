import React from 'react';
import FormGroup from '@material-ui/core/FormGroup';
import Switch from '@material-ui/core/Switch/Switch';

import { useDispatch, useSelector } from 'react-redux';
import { changeTheme } from '../store/themeSelector';
import { useTheme } from './hooks'
import { FormControl, FormLabel } from '@chakra-ui/react';


export default function SwitchLabels() {

// redux - получаем состояние theme: светлая или темная
  const dispatch = useDispatch();
  const theme = useSelector(state => state.theme);
  useTheme();
// end of redux

  // const [state, setState] = React.useState({
  //   checkedA: true,
  //   checkedB: true,
  // });

  // const handleChange = (event) => {
  //   setState({ ...state, [event.target.name]: event.target.checked });
  // };

  return (
    <FormGroup row>
      <FormControl display='flex' alignItems='center'>
      <FormLabel htmlFor='theme' mb='0'>
        Тема: {theme}
      </FormLabel>
      <Switch id='theme' onChange={() => dispatch(changeTheme())} />
    </FormControl>
    </FormGroup>
  );
}