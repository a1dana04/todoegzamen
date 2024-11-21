namespace FILE {
  type uploadFileResponse = {
    name: string;
    format: string;
    url: string;
  };

  type uploadFileRequest = FormData;
}