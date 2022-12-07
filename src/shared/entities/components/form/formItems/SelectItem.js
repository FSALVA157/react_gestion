import React, { useState, useEffect } from 'react'
import { Form, Select, Input } from 'antd'
import { FormConfig } from '../../../../config/GlobalConfig'
import EntidadesApi from '../../../../../shared/entities/api/EntitiesApi'

const FormItem = Form.Item;
const { Option } = Select;

const SelectItem = (props) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = () => {
    EntidadesApi.get(props.endpoint, null)
      .then(response => { setItems(response); });
  }

  return (
    <FormItem name={props.referencia} rules={FormConfig.DefaultRules}>
      <Select showSearch filterOption={FormConfig.DefaultSelectFilter}>
        {items.map(item => <Option key={item.id} value={item.id}>{item.nombre}</Option>)}
      </Select>
    </FormItem>
  );
}

export default SelectItem;