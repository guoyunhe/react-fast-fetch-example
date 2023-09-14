import { List } from "antd";

export default function ProductList({ data, loading }) {
  return (
    <List
      loading={loading}
      itemLayout="horizontal"
      dataSource={data?.products}
      renderItem={(item) => (
        <List.Item actions={[<a key="list-loadmore-edit">Remove</a>]}>
          <List.Item.Meta title={item.title} description={item.description} />
        </List.Item>
      )}
      style={{ textAlign: "left" }}
    />
  );
}
