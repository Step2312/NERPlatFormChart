import { Space, Tooltip } from "antd";
import { Typography} from 'antd';
import { List } from 'antd';
import ProCard from "@ant-design/pro-card";
import {Props} from "@/pages/list/ner/data";

const ColorWordPlot = (props: Props) => {
    // const {loading,data} = useRequest(nerdata)
  const {data} = props
    return (
        <ProCard>
            <Typography>
                <Typography.Paragraph>
                    <List
                    size="large"
                    dataSource={data}
                    renderItem={item => <Tooltip title={item.type}><Space><Typography.Text style={{backgroundColor:item.color}}>{item.content}</Typography.Text></Space></Tooltip>}
                />
                </Typography.Paragraph>
            </Typography>
        </ProCard>
    )
}

export default ColorWordPlot
