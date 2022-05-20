import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import FilterTable from "../components/FilterTable";
import FilterTableItem from "../components/FilterTableItem";
import FilterTableByGender from "../components/FilterTableByGender";
import FilterTableItemByGender from "../components/FilterTableItemByGender";
import FilterTableItemBySession from "../components/FilterTableItemBySession";
import FilterTableBySession from "../components/FilterTableBySession";
import FilterPrice from "../components/FilterPrice";
import Reviews from "../components/Reviews"

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

storiesOf('Reviews')
  .add('a filter icon with a checkbox', () =>

    <Reviews />

  );