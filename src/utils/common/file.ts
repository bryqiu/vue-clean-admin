const fileTimeName = `${Date.now()}`;

/**
 * base64 转 Blob
 * @param base64 base64数据
 * @returns blob
 */
export const base64ToBlob = (base64: string) => {
  const arr = base64.split(',');
  const match = arr[0].match(/:(.*?);/);
  const mime = match ? match[1] : '';
  const bstr = atob(arr[1]);
  let n = bstr.length;
  const u8arr = new Uint8Array(n);

  while (n--) {
    u8arr[n] = bstr.charCodeAt(n);
  }

  return new Blob([u8arr], { type: mime });
};

/**
 * 下载文件
 * @param fileUrl 文件URL
 * @param fileName 文件名称
 */
export const downloadFile = (fileUrl: string, fileName: string) => {
  const a = document.createElement('a');
  a.href = fileUrl;
  a.download = fileName;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
};
