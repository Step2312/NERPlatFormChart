const Mock = require('mockjs')
const bigroupedcolumndata = Mock.mock({
    'object|5-10':[
        {
            nertype:'B',
            ner_subtype:'BCZ',
            value:20
        },
        {
            nertype:'B',
            ner_subtype:'SZKS',
            value:20
        },
        {
            nertype:'B',
            ner_subtype:'YWYY',
            value:20
        },
        {
            nertype:'B',
            ner_subtype:'TIME',
            value:20
        },
        {
            nertype:'I',
            ner_subtype:'BCZ',
            value:20
        },
        {
            nertype:'I',
            ner_subtype:'RYCBZD',
            value:20
        },
        {
            nertype:'I',
            ner_subtype:'SZKS',
            value:20
        },
        {
            nertype:'I',
            ner_subtype:'YQJCJG',
            value:20
        },
        {
            nertype:'I',
            ner_subtype:'YWYY',
            value:20
        },
        {
            nertype:'I',
            ner_subtype:'TIME',
            value:20
        },        
    ]
})


module.exports={
    [`GET /api/biogroupedcolumn`](req:Request,res:Response){
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.status(200).json(bigroupedcolumndata.object);
    }
}