export interface NERType{
    content: string,
    type: string,
    color: string
}


export interface NERType{
  id: number,
  content: string;
  nertype: string;
  nerlength: number;
};

export interface Props{
  data: [{
    content: string,
    type: string,
    color: string
  }]
}
