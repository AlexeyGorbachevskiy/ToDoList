import React from 'react';

import AddItemForm from "./AddItemForm";
import {action} from "@storybook/addon-actions";

export default {
    title: 'AddItemForm Component',
    component: AddItemForm,
};

const actionCallback = action('Button \'add\' was pressed inside the form ');

export const AddItemFormBaseExample = () => <AddItemForm addItem={actionCallback}/>;
export const AddItemFormDisabledExample = () => <AddItemForm  disabled={true} addItem={actionCallback}/>;

