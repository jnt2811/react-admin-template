import { Col, Row } from "antd";
import { InputNumber } from "../../components";

export const InputNumberPreview = () => {
  return (
    <Row>
      <Col flex="33%">
        <div>
          <h3>InputNumber Currency</h3>
          <InputNumber />
        </div>
      </Col>
    </Row>
  );
};
