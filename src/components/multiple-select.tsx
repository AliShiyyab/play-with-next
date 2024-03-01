import * as React from 'react';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import ListItemText from '@mui/material/ListItemText';
import Select, {SelectChangeEvent} from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
};

const names = [
    'Category 1',
    'Category 2',
    'Category 3',
    'Category 4',
    'Category 5',
    'Category 6',
    'Category 7',
    'Category 8',
    'Category 9',
    'Category 10',
    'Category 11',
    'Category 12'
];

interface MultipleSelectInterface {
    data: string[];
    setData: (args: string[]) => void;
}

export default function MultipleSelectCheckmarks({data, setData}: MultipleSelectInterface) {

    const handleChange = (event: SelectChangeEvent<typeof data>) => {
        const {
            target: {value},
        } = event;
        setData(
            typeof value === 'string' ? value.split(',') : value,
        );
    };

    return (
        <div>
            <FormControl sx={{mt: 1, width: 250}}>
                <InputLabel>Categories</InputLabel>
                <Select
                    labelId="multiple-select"
                    id={'multiple-select'}
                    multiple
                    value={data}
                    onChange={handleChange}
                    input={<OutlinedInput label="Categories"/>}
                    renderValue={(selected) => selected.join(', ')}
                    MenuProps={MenuProps}
                >
                    {names.map((name) => (
                        <MenuItem key={name} value={name}>
                            <Checkbox checked={data ? data.indexOf(name) > -1 : false}/>
                            <ListItemText primary={name}/>
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        </div>
    );
}
