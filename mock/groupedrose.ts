const Mock = require('mockjs')
const groupedrose = Mock.mock({
    'object|5-10':[
        {
            value:5,
            nertype:'BCZ',
            type:'B'
        },
        {
            value:7,
            nertype:'BCZ',
            type:'I'
        },
        {
            value:7,
            nertype:'RYCBZD',
            type:'I'
        },
        {
            value:7,
            nertype:'SZKS',
            type:'B'
        },
        {
            value:7,
            nertype:'SZKS',
            type:'I'
        },
        {
            value:7,
            nertype:'YQJCJG',
            type:'B'
        },
        {
            value:7,
            nertype:'YQJCJG',
            type:'I'
        },
        {
            value:7,
            nertype:'YWYY',
            type:'I'
        },
        {
            value:8,
            nertype:'YWYY',
            type:'B'
        },
        {
            value:21,
            nertype:'O',
            type:'O'
        }
    ],
    status:0
})


module.exports={
    [`GET /api/nergroupedrose`](req:any,res:any){
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.status(200).json(groupedrose.object);
    }
}