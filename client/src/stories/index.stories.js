import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import FilterTable from "../FilterTable";
import FilterTableItem from "../FilterTableItem";
import FilterTableByGender from "../FilterTableByGender";
import FilterTableItemByGender from "../FilterTableByGender";
import FilterTableItemBySession from "../FilterTableItemByGender";
import FilterTableBySession from "../FilterTableBySession";
import FilterPrice from "../FilterPrice";
import FilterPriceItem from "../FilterPriceItem";

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

storiesOf('FilterTableByGender')
  .add('a filter icon with a checkbox', () =>

    <FilterTableByGender />

  );

storiesOf('FilterTableItemByGender')
  .add('a filter icon with a checkbox', () =>

    <FilterTableItemByGender />

  );


storiesOf('FilterTableBySession')
  .add('a filter icon with a checkbox', () =>

    <FilterTableBySession />

  );

storiesOf('FilterTableItemBySession')
  .add('a filter icon with a checkbox', () =>

    <FilterTableItemBySession />

  );


storiesOf('FilterPrice')
  .add('a filter icon with a checkbox', () =>

    <FilterPrice />

  );

storiesOf('FilterPriceItem')
  .add('a filter icon with a checkbox', () =>

    <FilterPriceItem />

  );