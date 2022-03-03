import { WordCloud } from '@ant-design/plots';
import { Props } from '@/pages/list/ner/data';

const NERWordCloudPlot = (props: Props) => {
  // const {data} =useRequest(nerdata)
  const { data } = props;
  const tmp = [];
  for (let i = 0; i < data.length - 2; i++) {
    if (data[i].type.startsWith('B')) {
      tmp.push({
        name: data[i].content + data[i + 1].content,
        value: data[i].content.length + data[i + 1].content.length,
      });
    }
  }
  const config = {
    data: tmp,
    autoFit: true,
    wordField: 'name',
    weightField: 'value',
    colorField: 'name',
    imageMask:
      'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic.51yuansu.com%2Fpic3%2Fcover%2F01%2F39%2F41%2F5926fef254326_610.jpg&refer=http%3A%2F%2Fpic.51yuansu.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1648032715&t=896ddaa484512290922b214d62ad5dfa',
    wordStyle: {
      fontFamily: 'Verdana',
      fontSize: [24, 32, 40, 48],
    },
  };

  return <WordCloud {...config} />;
};
export default NERWordCloudPlot;
