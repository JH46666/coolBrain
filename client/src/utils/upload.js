
import Taro from '@tarojs/taro'

function sendUploadCloud(cloudPath, filePath) {
  if (!Taro.cloud) {
    return false;
  }
  Taro.cloud.init();
  const db = Taro.cloud.database({
    env: 'pro-dcxrw'
  });
  Taro.cloud.uploadFile({
    // 指定上传到的云路径
    cloudPath,
    // 指定要上传的文件的小程序临时文件路径
 /*    filePath: chooseResult.tempFilePaths[0], */
    filePath,

    // 成功回调
    success: res => {
      console.log('data11111: ', res.fileID);


      const data = {
        url: res.fileID,
        createdAt: Date()
      };
      console.log('data11111: ', data);
      db.collection("voice-list").add({ data });
      console.log('上传成功', res)

    },
  })



}
export default sendUploadCloud