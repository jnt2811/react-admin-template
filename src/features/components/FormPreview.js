/* eslint-disable no-template-curly-in-string */
import { Button, Col, Form, Input, InputNumber, message, Row, Space } from "antd";
import { useState } from "react";
import { Select, TreeSelect } from "../../components";

export const FormPreview = () => {
  const [basicForm] = Form.useForm();
  const [basicFormData, setBasicFormData] = useState();
  const [selectedValues, setSelectedValues] = useState({});

  const handleReset = () => {
    basicForm.resetFields();
    setBasicFormData();
    setSelectedValues({});
  };

  const notFoundHoobies = [{ key: "xxx", label: "Dream", value: "DREAM", desc: "Mer" }];

  const handleFillForm = () => {
    handleReset();
    basicForm.setFields([
      { name: "name", value: "Nguyen" },
      { name: "gender", value: dataGender[0].label },
      { name: "hobbies", value: [notFoundHoobies[0].label] },
    ]);
    setSelectedValues((values) => ({
      ...values,
      gender: dataGender[0],
      hobbies: [notFoundHoobies[0]],
    }));
  };

  const handleSubmit = async () => {
    try {
      let values = await basicForm.validateFields();
      console.log("submit", values, selectedValues);
      values = { ...values, ...selectedValues };
      setBasicFormData(values);
    } catch (error) {
      console.log(error);
      error.errorFields.forEach((err) => message.error(err.errors[0]));
    }
  };

  return (
    <div>
      <Form layout="vertical" form={basicForm} validateMessages={validateMessages} scrollToFirstError>
        <h3>Basic Form</h3>

        <Row gutter={20}>
          <Col span={6}>
            <Form.Item label="Name" name="name" rules={[{ required: true }]}>
              <Input />
            </Form.Item>
          </Col>

          <Col span={6}>
            <Form.Item label="Gender" name="gender" rules={[{ required: true }]}>
              <Select
                dataSource={dataGender}
                labelKey="label"
                valueKey="label"
                onSelect={(value) => setSelectedValues((values) => ({ ...values, gender: value }))}
                onClear={() => {
                  setSelectedValues((values) => {
                    let currentValues = { ...values };
                    delete currentValues.gender;
                    return currentValues;
                  });
                }}
              />
            </Form.Item>
          </Col>

          <Col span={6}>
            <Form.Item label="Email" name="email" rules={[{ type: "email" }]}>
              <Input />
            </Form.Item>
          </Col>

          <Col span={6}>
            <Form.Item name="age" label="Age" rules={[{ type: "number", min: 0, max: 99 }]}>
              <InputNumber style={{ width: "100%" }} />
            </Form.Item>
          </Col>

          <Col span={6}>
            <Form.Item label="Hobbies" name="hobbies">
              <TreeSelect
                dataSource={[
                  {
                    key: "List",
                    title: "List",
                    value: "List",
                    children: dataHobbies.map((item) => ({
                      key: item.label,
                      title: item.label,
                      value: item.label,
                      fullValue: item,
                    })),
                  },
                ]}
                onSelect={(value, fullValue) => {
                  setSelectedValues((values) => {
                    if (!values.hobbies) values.hobbies = [fullValue];
                    else values.hobbies = [...values.hobbies, fullValue];
                    return values;
                  });
                }}
                onDeselect={(value, fullValue) => {
                  let filterCallback = (item) => item.key !== fullValue.key;

                  if (!fullValue) filterCallback = (item) => item.label !== value;

                  setSelectedValues((values) => {
                    values.hobbies = values.hobbies.filter(filterCallback);
                    return values;
                  });
                }}
                onClear={() => {
                  setSelectedValues((values) => {
                    let currentValues = { ...values };
                    delete currentValues.hobbies;
                    return currentValues;
                  });
                }}
              />
            </Form.Item>
          </Col>
        </Row>

        <Space>
          <Button type="primary" onClick={handleSubmit}>
            Submit
          </Button>

          <Button type="primary" danger onClick={handleReset}>
            Reset
          </Button>

          <Button type="primary" ghost onClick={handleFillForm}>
            Fill Form
          </Button>
        </Space>

        <div style={{ marginTop: 20 }}>
          Result: <pre>{JSON.stringify(basicFormData, null, 2)}</pre>
        </div>
      </Form>
    </div>
  );
};

const validateMessages = {
  required: "${label} is required!",
  types: {
    email: "${label} is not a valid email!",
    number: "${label} is not a valid number!",
  },
  number: {
    range: "${label} must be between ${min} and ${max}",
  },
};

const dataGender = [
  { key: "1", label: "Male", value: "MALE" },
  { key: "2", label: "Female", value: "FEMALE" },
];

const dataHobbies = [
  { key: "1", label: "Pee", value: "PEE", desc: "Te" },
  { key: "2", label: "Sleep", value: "SLEEP", desc: "Ngu" },
  { key: "3", label: "Eat", value: "EAT", desc: "An" },
];
