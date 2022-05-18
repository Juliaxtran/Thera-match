import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import FilterTable from "../FilterTable";
import FilterTableItem from "../FilterTableItem";


storiesOf('Test')
  .add('Random Story', () => <h1>Random stories</h1>);


//what kind of props(name and type) will be passed into ToDoItem?  
//refer to your fake database 
storiesOf('FilterTable')
  .add('a filter icon with a checkbox', () =>

    <FilterTable />

  );

storiesOf('FilterTableItem')
  .add('a filter icon with a checkbox', () =>

    <FilterTableItem />

  );