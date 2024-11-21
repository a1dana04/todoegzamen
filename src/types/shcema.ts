interface ITodo {
  title: string;
  _id?: number;
  img: string;
  file?: string[];
}

interface IFile {
  name: string;
  format: string;
  url: string;
}